import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Planning Map",
  description:
    "Browse live planning applications across England using open government data.",
};

// Leaflet needs the browser, so we dynamic-import the map client component
const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
  loading: () => (
    <div className="h-[70vh] w-full bg-navy-100 animate-pulse flex items-center justify-center text-navy-500">
      Loading map…
    </div>
  ),
});

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
        <MapClient />
      </div>
    </div>
  );
}
