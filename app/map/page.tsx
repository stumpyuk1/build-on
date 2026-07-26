import type { Metadata } from "next";
import MapLoader from "@/components/MapLoader";

export const metadata: Metadata = {
  title: "Planning Map",
  description:
    "Browse live planning applications across England using open government data.",
};

export default function MapPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="bg-white border-b border-navy-100 px-4 sm:px-6 lg:px-8 py-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold text-navy-950">Planning Map</h1>
          <p className="text-navy-600 text-sm mt-1">
            Live applications from open government data. Click a marker or use
            the list to explore and support schemes.
          </p>
        </div>
      </div>
      <div className="flex-1 relative">
        <MapLoader />
      </div>
    </div>
  );
}
