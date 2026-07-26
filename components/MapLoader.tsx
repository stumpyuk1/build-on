"use client";

import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-navy-100 animate-pulse flex items-center justify-center text-navy-500">
      Loading map…
    </div>
  ),
});

export default function MapLoader() {
  return <MapClient />;
}
