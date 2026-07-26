#!/usr/bin/env node
/**
 * Checks every URL in data/planning-portals.ts.
 * Usage: node scripts/check-portals.mjs
 *
 * Exit codes:
 *   0 — all OK, or broken count at/under threshold
 *   1 — broken count above threshold (default 10)
 *   2 — could not parse portal data
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
    return {
      ok,
      status: res.status,
      finalUrl: res.url,
      ms,
      error: ok ? null : `HTTP ${res.status}`,
    };
  } catch (err) {
    clearTimeout(timer);
    const ms = Date.now() - started;
    const message =
      err?.name === "AbortError"
        ? `Timeout after ${TIMEOUT_MS}ms`
        : err?.message || String(err);
    return { ok: false, status: null, finalUrl: null, ms, error: message };
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
    const mark = r.ok ? "OK " : "FAIL";
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

  const broken = results.filter((r) => !r.ok);
  const healthy = results.length - broken.length;

  console.log("\n--- Results ---");
  printTable(results.filter((r) => !r.ok));
  if (broken.length === 0) {
    console.log("All links responded OK.");
  }

  console.log(
    `\nSummary: ${healthy} OK, ${broken.length} broken (threshold ${FAIL_THRESHOLD})`
  );

  const report = {
    checkedAt: new Date().toISOString(),
    total: results.length,
    healthy,
    broken: broken.length,
    failThreshold: FAIL_THRESHOLD,
    failures: broken.map((r) => ({
      name: r.name,
      region: r.region,
      url: r.url,
      status: r.status,
      finalUrl: r.finalUrl,
      error: r.error,
      ms: r.ms,
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
    `::notice title=Portal link check::${healthy} OK, ${broken.length} broken`
  );
  for (const f of broken) {
    console.log(
      `::warning title=Broken portal link::${f.name} — ${f.url} (${f.error})`
    );
  }

  if (broken.length > FAIL_THRESHOLD) {
    console.error(
      `\nFailing: ${broken.length} broken links exceeds threshold of ${FAIL_THRESHOLD}.`
    );
    process.exit(1);
  }

  process.exit(0);
}

main();
