import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Heuristics to identify applications that look like new housing / significant residential development
 * rather than typical householder works (extensions, porches, loft conversions, etc.).
 */
const INCLUDE_KEYWORDS = [
  // New dwellings / schemes
  "new dwelling",
  "new dwellings",
  "detached dwelling",
  "detached house",
  "semi-detached",
  "terraced house",
  "new house",
  "new homes",
  "new home",
  "residential development",
  "residential scheme",
  "housing development",
  "housing scheme",
  "apartment",
  "apartments",
  "flat",
  "flats",
  "units",
  "dwellings",
  "homes",
  "maisonette",
  "student accommodation",
  "care home",
  "extra care",
  "affordable housing",
  "social housing",
  "build to rent",
  "build-to-rent",
  // Process indicators of larger schemes
  "outline application",
  "outline planning",
  "reserved matters",
  "hybrid application",
  "demolition of existing",
  "erection of",
  "construction of",
  "redevelopment",
  "mixed use",
  "mixed-use",
];

const EXCLUDE_KEYWORDS = [
  // Classic householder
  "single storey extension",
  "single-storey extension",
  "two storey extension",
  "two-storey extension",
  "rear extension",
  "side extension",
  "front extension",
  "loft conversion",
  "roof extension",
  "dormer",
  "porch",
  "conservatory",
  "garage conversion",
  "outbuilding",
  "summer house",
  "summerhouse",
  "garden room",
  "shed",
  "fence",
  "boundary wall",
  "driveway",
  "dropped kerb",
  "hardstanding",
  "solar panel",
  "pv installation",
  "air source heat pump",
  "ashp",
  "window",
  "door",
  "fascia",
  "signage",
  "advertisement",
  "advert",
  "tree",
  "tpo",
  "works to tree",
  "crown",
  "pruning",
  "listed building consent",
  "certificate of lawfulness",
  "lawful development",
  "variation of condition",
  "discharge of condition",
  "non-material amendment",
  "nma",
];

// Reference codes that often indicate larger / full applications
const MAJOR_REF_PATTERNS = [
  /FULM\b/i, // Full major
  /OUT\b/i, // Outline
  /OUTM\b/i, // Outline major
  /RES\b/i, // Reserved matters
  /HYB\b/i, // Hybrid
  /\bMAJ\b/i,
];

function isLikelyNewHousing(app: {
  title: string;
  reference: string;
  description: string;
}): boolean {
  const text = `${app.title} ${app.description} ${app.reference}`.toLowerCase();

  // Strong exclude first – if it looks like classic householder, drop it
  for (const kw of EXCLUDE_KEYWORDS) {
    if (text.includes(kw.toLowerCase())) {
      // Exception: if the same text also clearly talks about multiple new dwellings, keep it
      const hasStrongInclude =
        text.includes("dwellings") ||
        text.includes("new homes") ||
        text.includes("residential development") ||
        text.includes("apartments") ||
        /\d+\s*(dwellings?|homes?|units?|flats?|apartments?)/i.test(text);

      if (!hasStrongInclude) return false;
    }
  }

  // Positive signals
  for (const kw of INCLUDE_KEYWORDS) {
    if (text.includes(kw.toLowerCase())) return true;
  }

  // Reference code heuristics
  for (const pattern of MAJOR_REF_PATTERNS) {
    if (pattern.test(app.reference)) return true;
  }

  // Numbered dwellings / units (e.g. "12 dwellings", "48 units")
  if (/\d+\s*(dwellings?|homes?|units?|flats?|apartments?|houses?)/i.test(text)) {
    return true;
  }

  // "Erection of a detached dwelling" style phrases already partly covered,
  // but catch simple "new dwelling" patterns
  if (/\b(new|detached|semi[- ]detached)\s+(dwelling|house|bungalow)\b/i.test(text)) {
    return true;
  }

  return false;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Fetch a larger batch upstream so we still have enough after filtering
  const requestedLimit = parseInt(searchParams.get("limit") || "50", 10);
  const fetchLimit = Math.min(Math.max(requestedLimit * 4, 100), 200); // oversample
  const offset = searchParams.get("offset") || "0";
  const geometry = searchParams.get("geometry");
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const strict = searchParams.get("strict") !== "false"; // default true

  const params = new URLSearchParams();
  params.set("dataset", "planning-application");
  params.set("limit", String(fetchLimit));
  params.set("offset", offset);
  params.append("field", "name");
  params.append("field", "reference");
  params.append("field", "point");
  params.append("field", "start-date");
  params.append("field", "entry-date");
  params.append("field", "organisation-entity");
  params.append("field", "description");

  if (geometry) {
    params.set("geometry", geometry);
    params.set("geometry_relation", "intersects");
  } else if (lat && lng) {
    params.set("latitude", lat);
    params.set("longitude", lng);
  }

  if (!geometry && !lat) {
    params.set("start_date_year", "2023");
    params.set("start_date_match", "since");
  }

  const url = `https://www.planning.data.gov.uk/entity.json?${params.toString()}`;

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "BuildOn/0.1 (https://github.com/stumpyuk1/build-on)",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Planning Data API error:", res.status, await res.text());
      return NextResponse.json(
        { error: "Upstream planning data API failed", status: res.status },
        { status: 502 }
      );
    }

    const data = await res.json();

    const normalised = (data.entities || [])
      .map((e: any) => {
        let latNum: number | null = null;
        let lngNum: number | null = null;

        if (e.point && typeof e.point === "string") {
          const match = e.point.match(
            /POINT\s*\(\s*([\d.\-]+)\s+([\d.\-]+)\s*\)/i
          );
          if (match) {
            lngNum = parseFloat(match[1]);
            latNum = parseFloat(match[2]);
          }
        }

        if (latNum === null || lngNum === null || isNaN(latNum) || isNaN(lngNum)) {
          return null;
        }

        return {
          id: String(e.entity ?? e.reference ?? Math.random()),
          title: e.name || e.reference || "Planning application",
          reference: e.reference || "",
          lat: latNum,
          lng: lngNum,
          startDate: e["start-date"] || e["entry-date"] || "",
          description: e.description || "",
          organisation: e["organisation-entity"] || "",
        };
      })
      .filter(Boolean) as Array<{
      id: string;
      title: string;
      reference: string;
      lat: number;
      lng: number;
      startDate: string;
      description: string;
      organisation: string;
    }>;

    // Apply housing-focused filter
    const filtered = strict
      ? normalised.filter(isLikelyNewHousing)
      : normalised;

    // Cap to the originally requested limit
    const applications = filtered.slice(0, requestedLimit);

    return NextResponse.json({
      count: applications.length,
      totalUpstream: data.count ?? normalised.length,
      applications,
      source: "planning.data.gov.uk",
      filter: strict ? "new-housing-heuristic" : "none",
      note:
        applications.length === 0
          ? "No applications matching the new-housing filter were found in this batch. The official dataset is still incomplete and biased toward householder applications."
          : undefined,
    });
  } catch (err) {
    console.error("Planning API route error:", err);
    return NextResponse.json(
      { error: "Failed to fetch planning data" },
      { status: 500 }
    );
  }
}
