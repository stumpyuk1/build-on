import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Default: recent applications with a reasonable limit
  const limit = searchParams.get("limit") || "50";
  const offset = searchParams.get("offset") || "0";
  const geometry = searchParams.get("geometry"); // optional WKT polygon
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const params = new URLSearchParams();
  params.set("dataset", "planning-application");
  params.set("limit", limit);
  params.set("offset", offset);
  // Request useful fields
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

  // Prefer more recent applications when no spatial filter
  if (!geometry && !lat) {
    params.set("start_date_year", "2024");
    params.set("start_date_match", "since");
  }

  const url = `https://www.planning.data.gov.uk/entity.json?${params.toString()}`;

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "BuildOn/0.1 (https://github.com/stumpyuk1/build-on)",
      },
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!res.ok) {
      console.error("Planning Data API error:", res.status, await res.text());
      return NextResponse.json(
        { error: "Upstream planning data API failed", status: res.status },
        { status: 502 }
      );
    }

    const data = await res.json();

    // Normalise entities that have usable coordinates
    const applications = (data.entities || [])
      .map((e: any) => {
        let lat: number | null = null;
        let lng: number | null = null;

        // point is usually "POINT (lng lat)" in WKT
        if (e.point && typeof e.point === "string") {
          const match = e.point.match(/POINT\s*\(\s*([\d.\-]+)\s+([\d.\-]+)\s*\)/i);
          if (match) {
            lng = parseFloat(match[1]);
            lat = parseFloat(match[2]);
          }
        }

        if (lat === null || lng === null || isNaN(lat) || isNaN(lng)) {
          return null;
        }

        return {
          id: String(e.entity ?? e.reference ?? Math.random()),
          title: e.name || e.reference || "Planning application",
          reference: e.reference || "",
          lat,
          lng,
          startDate: e["start-date"] || e["entry-date"] || "",
          description: e.description || "",
          organisation: e["organisation-entity"] || "",
        };
      })
      .filter(Boolean);

    return NextResponse.json({
      count: data.count ?? applications.length,
      applications,
      source: "planning.data.gov.uk",
      note:
        applications.length === 0
          ? "The official planning-application dataset is still incomplete. Many records lack coordinates."
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
