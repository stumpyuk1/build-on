import type { Metadata } from "next";
import Link from "next/link";
import MapLoader from "@/components/MapLoader";

export const metadata: Metadata = {
  title: "Planning Map",
  description:
    "Browse undecided larger planning applications aggregated by UK PlanIt from local authority registers.",
};

export default function MapPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="bg-white border-b border-navy-100 px-4 sm:px-6 lg:px-8 py-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold text-navy-950">Planning Map</h1>
          <p className="text-navy-600 text-sm mt-1 max-w-3xl">
            Undecided larger schemes from{" "}
            <a
              href="https://www.planit.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-build-green-dark underline"
            >
              UK PlanIt
            </a>{" "}
            (local authority data, filtered toward multi-dwelling applications).
            Data is cached to respect API rate limits. To comment, open the
            council link on a marker — or use the{" "}
            <Link href="/portals" className="text-build-green-dark underline">
              portals directory
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex-1 relative">
        <MapLoader />
      </div>
    </div>
  );
}
