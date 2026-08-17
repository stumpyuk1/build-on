#!/usr/bin/env node
/**
 * Checks every URL in data/planning-portals.ts.
 * Usage: node scripts/check-portals.mjs
 *
 * Exit codes:
 *   0 — all OK, or hard-broken count at/under threshold
 *   1 — hard-broken count above threshold (default 10)
 *   2 — could not parse portal data
 *
 * HTTP 403 is treated as a soft failure (likely bot/WAF block on
 * datacentre IPs). It is reported but does not count toward the
 * fail threshold. 404, 5xx and network/timeout errors do.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dataPath = join(root, "data", "planning-portals.ts");
const reportDir = join(root, "artifacts");
const reportPath = join(reportDir, "portal-link-report.json");

const TIMEOUT_MS = 15000;
const CONCURRENCY = 8;
const FAIL_THRESHOLD = Number(process.env.PORTAL_FAIL_THRESHOLD || 10);
const USER_AGENT =
  "BuildOnPortalChecker/1.0 (+https://github.com/stumpyuk1/build-on; weekly link health)";

function parsePortals(source) {
  const portals = [];
  // Match objects with name / region / url fields (order-independent-ish)
  const objectRe =
    /\{\s*name:\s*"([^"]+)"\s*,\s*region:\s*"([^"]+)"\s*,\s*url:\s*"([^"]+)"\s*\}/g;
  let m;
  while ((m = objectRe.exec(source)) !== null) {
    portals.push({ name: m[1], region: m[2], url: m[3] });
  }
  return portals;
}

async function checkUrl(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const started = Date.now();

  try {
    // Prefer HEAD; fall back to GET if method not allowed
    let res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": USER_AGENT, Accept: "text/html,*/*" },
    });

    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "User-Agent": USER_AGENT, Accept: "text/html,*/*" },
      });
    }

    clearTimeout(timer);
    const ms = Date.now() - started;
    const ok = res.status >= 200 && res.status < 400;
    // 403 is common from council WAFs blocking Actions IPs — soft fail only
    const softBlocked = res.status === 403;
    return {
      ok,
      softBlocked,
      status: res.status,
      finalUrl: res.url,
      ms,
      error: ok ? null : softBlocked ? "HTTP 403 (soft — likely bot block)" : `HTTP ${res.status}`,
    };
  } catch (err) {
    clearTimeout(timer);
    const ms = Date.now() - started;
    const message =
      err?.name === "AbortError"
        ? `Timeout after ${TIMEOUT_MS}ms`
        : err?.message || String(err);
    return {
      ok: false,
      softBlocked: false,
      status: null,
      finalUrl: null,
      ms,
      error: message,
    };
  }
}

async function mapPool(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;

  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length) }, () =>
    worker()
  );
  await Promise.all(workers);
  return results;
}

function printTable(rows) {
  for (const r of rows) {
    let mark = "OK ";
    if (!r.ok) mark = r.softBlocked ? "SOFT" : "FAIL";
    const status = r.status ?? "-";
    console.log(
      `${mark}  ${String(status).padStart(3)}  ${r.ms}ms  ${r.name}  ${r.url}` +
        (r.error ? `  (${r.error})` : "")
    );
  }
}

async function main() {
  let source;
  try {
    source = readFileSync(dataPath, "utf8");
  } catch (err) {
    console.error(`Could not read ${dataPath}:`, err.message);
    process.exit(2);
  }

  const portals = parsePortals(source);
  if (portals.length === 0) {
    console.error("No portals parsed from data/planning-portals.ts");
    process.exit(2);
  }

  console.log(
    `Checking ${portals.length} planning portal URLs (concurrency ${CONCURRENCY}, timeout ${TIMEOUT_MS}ms)…\n`
  );

  const results = await mapPool(portals, CONCURRENCY, async (p) => {
    const check = await checkUrl(p.url);
    return { ...p, ...check };
  });

  const notOk = results.filter((r) => !r.ok);
  const softBlocked = notOk.filter((r) => r.softBlocked);
  // Hard broken = real failures that count toward the threshold (404, 5xx, network)
  const hardBroken = notOk.filter((r) => !r.softBlocked);
  const healthy = results.length - notOk.length;

  console.log("\n--- Results ---");
  printTable(notOk);
  if (notOk.length === 0) {
    console.log("All links responded OK.");
  }

  console.log(
    `\nSummary: ${healthy} OK, ${softBlocked.length} soft-blocked (403), ${hardBroken.length} hard-broken (threshold ${FAIL_THRESHOLD})`
  );

  const report = {
    checkedAt: new Date().toISOString(),
    total: results.length,
    healthy,
    softBlocked: softBlocked.length,
    hardBroken: hardBroken.length,
    // kept for backwards compatibility with older consumers
    broken: hardBroken.length,
    failThreshold: FAIL_THRESHOLD,
    failures: hardBroken.map((r) => ({
      name: r.name,
      region: r.region,
      url: r.url,
      status: r.status,
      finalUrl: r.finalUrl,
      error: r.error,
      ms: r.ms,
      softBlocked: false,
    })),
    softBlocks: softBlocked.map((r) => ({
      name: r.name,
      region: r.region,
      url: r.url,
      status: r.status,
      finalUrl: r.finalUrl,
      error: r.error,
      ms: r.ms,
      softBlocked: true,
    })),
  };

  try {
    mkdirSync(reportDir, { recursive: true });
    writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Report written to ${reportPath}`);
  } catch (err) {
    console.warn("Could not write report file:", err.message);
  }

  // Also emit a machine-readable line for Actions
  console.log(
    `::notice title=Portal link check::${healthy} OK, ${softBlocked.length} soft-blocked (403), ${hardBroken.length} hard-broken`
  );
  for (const f of hardBroken) {
    console.log(
      `::warning title=Broken portal link::${f.name} — ${f.url} (${f.error})`
    );
  }
  for (const f of softBlocked) {
    console.log(
      `::notice title=Soft-blocked portal (403)::${f.name} — ${f.url}`
    );
  }

  if (hardBroken.length > FAIL_THRESHOLD) {
    console.error(
      `\nFailing: ${hardBroken.length} hard-broken links exceeds threshold of ${FAIL_THRESHOLD} (403 soft-blocks ignored).`
    );
    process.exit(1);
  }

  process.exit(0);
}

main();
