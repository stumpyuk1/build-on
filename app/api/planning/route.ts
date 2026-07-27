import { NextRequest, NextResponse } from "next/server";

/**
 * PlanIt aggregator — free API, rate limited to ~1 request per minute.
 * We cache aggressively so page loads share one upstream pull.
 * Docs: https://www.planit.org.uk/api/
 */
export const dynamic = "force-dynamic";

const PLANIT_BASE = "https://www.planit.org.uk/api/applics/json";
const CACHE_SECONDS = 300; // 5 minutes — well under 1 call/min if traffic is bursty
const MIN_DWELLINGS = 10;

type PlanitRecord = {
  name?: string;
  uid?: string;
  reference?: string;
  address?: string;
  description?: string;
  url?: string;
  link?: string;
  consulted_date?: string;
  start_date?: string;
  app_state?: string;
  app_size?: string;
  area_name?: string;
  location_x?: number | string;
  location_y?: number | string;
  other_fields?: {
    n_dwellings?: number | string;
    consultation_end_date?: string;
    comment_url?: string;
    comment_date?: string;
    application_type?: string;
    development_type?: string;
  };
};

/**
 * Drop HMO / change-of-use conversions — controversial and outside Build On’s
 * focus on new housing supply. Matches description, type fields, and common refs.
 */
function isExcludedHmoOrChangeOfUse(rec: PlanitRecord): boolean {
  const text = [
    rec.description,
    rec.reference,
    rec.uid,
    rec.other_fields?.application_type,
    rec.other_fields?.development_type,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (!text.trim()) return false;

  // Explicit HMO / multi-occupation language
  if (
    /\bhmo\b/.test(text) ||
    text.includes("house in multiple occupation") ||
    text.includes("house of multiple occupation") ||
    text.includes("houses in multiple occupation") ||
    text.includes("multiple occupation") ||
    text.includes("sui generis hmo") ||
    /\bc4\b.*\bhmo\b|\bhmo\b.*\bc4\b/.test(text) ||
    text.includes("large hmo") ||
    text.includes("small hmo")
  ) {
    return true;
  }

  // Bedsits / shared housing conversions often tied to the same debates
  if (
    text.includes("bedsit") ||
    text.includes("bed-sit") ||
    text.includes("bed sits") ||
    (text.includes("shared house") && text.includes("change of use")) ||
    (text.includes("shared housing") && text.includes("change of use"))
  ) {
    return true;
  }

  // Change of use → HMO / C4 / bedsits (and reverse wording)
  if (
    text.includes("change of use") ||
    text.includes("change-of-use") ||
    /\bcou\b/.test(text)
  ) {
    if (
      /\bhmo\b/.test(text) ||
      text.includes("multiple occupation") ||
      text.includes("bedsit") ||
      text.includes("c4 dwelling") ||
      text.includes("use class c4") ||
      text.includes("class c4") ||
      text.includes("to c4") ||
      text.includes("to an hmo") ||
      text.includes("to hmo")
    ) {
      return true;
    }
  }

  // Common reference / type codes
  if (
    /\bco\s*u\b/.test(text) && /\bhmo\b|c4|multiple occupation/.test(text)
  ) {
    return true;
  }

  return false;
}

function parseDwellings(rec: PlanitRecord): number | null {
  const raw = rec.other_fields?.n_dwellings;
  if (raw === undefined || raw === null || raw === "") return null;
  const n = typeof raw === "number" ? raw : parseInt(String(raw), 10);
  return Number.isFinite(n) ? n : null;
}

function looksResidential(description: string): boolean {
  const t = description.toLowerCase();
  if (
    /\d+\s*(dwellings?|homes?|units?|flats?|apartments?|houses?)/i.test(t)
  ) {
    return true;
  }
  return (
    t.includes("residential") ||
    t.includes("dwelling") ||
    t.includes("apartment") ||
    t.includes("housing") ||
    t.includes("new homes") ||
    t.includes("build to rent")
  );
}

function keepRecord(rec: PlanitRecord): boolean {
  if (isExcludedHmoOrChangeOfUse(rec)) return false;

  const dwellings = parseDwellings(rec);
  if (dwellings !== null) return dwellings >= MIN_DWELLINGS;

  // No reliable count — keep Large majors, and Medium only if description looks residential
  const size = (rec.app_size || "").toLowerCase();
  const desc = rec.description || "";
  if (size.includes("large")) return true;
  if (size.includes("medium")) return looksResidential(desc);
  return looksResidential(desc);
}

function normalise(rec: PlanitRecord) {
  const lat = parseFloat(String(rec.location_y ?? ""));
  const lng = parseFloat(String(rec.location_x ?? ""));
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  if (lat < 49 || lat > 61 || lng < -9 || lng > 2) return null;

  const dwellings = parseDwellings(rec);
  const consultationEnd =
    rec.consulted_date ||
    rec.other_fields?.consultation_end_date ||
    rec.other_fields?.comment_date ||
    "";

  const reference = rec.reference || rec.uid || "";
  const title =
    dwellings && dwellings > 0
      ? `${dwellings} homes — ${rec.address || reference || "Scheme"}`
      : rec.address || reference || "Planning application";

  return {
    id: String(rec.name || `${rec.area_name}/${reference}` || Math.random()),
    title,
    reference,
    address: rec.address || "",
    description: rec.description || "",
    lat,
    lng,
    startDate: rec.start_date || "",
    consultationEnd,
    dwellings,
    organisation: rec.area_name || "",
    councilUrl: rec.url || "",
    commentUrl: rec.other_fields?.comment_url || "",
    planitUrl: rec.link
      ? rec.link.startsWith("http")
        ? rec.link
        : `https://www.planit.org.uk${rec.link}`
      : "",
    appSize: rec.app_size || "",
    appState: rec.app_state || "",
  };
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(
    Math.max(parseInt(searchParams.get("limit") || "80", 10), 1),
    150
  );
  const recent = searchParams.get("recent") || "180";
  const pcode = searchParams.get("pcode");
  const krad = searchParams.get("krad") || "25";
  const auth = searchParams.get("auth");

  const upstream = new URLSearchParams();
  upstream.set("app_state", "Undecided");
  upstream.set("app_size", "Large,Medium");
  upstream.set("recent", recent);
  upstream.set("pg_sz", String(Math.min(limit * 2, 200)));
  upstream.set("compress", "on");
  // Exclude HMO-ish text server-side where PlanIt search supports NOT
  upstream.set("search", "-hmo -\"house in multiple occupation\" -\"multiple occupation\"");
  upstream.set(
    "select",
    [
      "name",
      "uid",
      "reference",
      "address",
      "description",
      "url",
      "link",
      "consulted_date",
      "start_date",
      "app_state",
      "app_size",
      "area_name",
      "location_x",
      "location_y",
      "other_fields->n_dwellings",
      "other_fields->consultation_end_date",
      "other_fields->comment_url",
      "other_fields->comment_date",
      "other_fields->application_type",
      "other_fields->development_type",
    ].join(",")
  );

  if (pcode) {
    upstream.set("pcode", pcode);
    upstream.set("krad", krad);
  }
  if (auth) {
    upstream.set("auth", auth);
  }

  const url = `${PLANIT_BASE}?${upstream.toString()}`;

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "BuildOn/0.1 (+https://github.com/stumpyuk1/build-on; planning support map)",
      },
      // Shared cache across requests — critical for 1 call/minute limit
      next: { revalidate: CACHE_SECONDS },
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("PlanIt API error:", res.status, body.slice(0, 500));
      return NextResponse.json(
        {
          error: "PlanIt upstream failed",
          status: res.status,
          detail: body.slice(0, 200),
        },
        { status: 502 }
      );
    }

    const data = await res.json();
    const records: PlanitRecord[] = Array.isArray(data.records)
      ? data.records
      : Array.isArray(data)
        ? data
        : [];

    const applications = records
      .filter(keepRecord)
      .map(normalise)
      .filter(Boolean)
      .slice(0, limit) as NonNullable<ReturnType<typeof normalise>>[];

    return NextResponse.json(
      {
        count: applications.length,
        totalUpstream: data.count ?? records.length,
        applications,
        source: "planit.org.uk",
        filter: `Undecided + Large/Medium; n_dwellings >= ${MIN_DWELLINGS} where known; exclude HMO / change-of-use to HMO`,
        cacheSeconds: CACHE_SECONDS,
        note:
          applications.length === 0
            ? "No matching undecided schemes in this PlanIt batch. Try again later or use the portals directory."
            : `Showing undecided larger schemes from PlanIt (cached ~${CACHE_SECONDS / 60} min). HMO and change-of-use-to-HMO applications are excluded. Dwelling counts are approximate where derived from descriptions.`,
        attribution:
          "Application data aggregated by UK PlanIt (planit.org.uk) from local planning authority registers.",
      },
      {
        headers: {
          "Cache-Control": `s-maxage=${CACHE_SECONDS}, stale-while-revalidate=60`,
        },
      }
    );
  } catch (err) {
    console.error("PlanIt route error:", err);
    return NextResponse.json(
      { error: "Failed to fetch PlanIt data" },
      { status: 500 }
    );
  }
}
