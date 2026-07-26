"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

type Application = {
  id: string;
  title: string;
  reference: string;
  lat: number;
  lng: number;
  startDate?: string;
  description?: string;
  organisation?: string;
};

// Fallback sample data if the live API returns nothing usable
const sampleApplications: Application[] = [
  {
    id: "sample-1",
    title: "Residential development – 48 homes",
    reference: "SAMPLE/001",
    lat: 52.2869,
    lng: -1.532,
    startDate: "2025-01-15",
    organisation: "Warwick District Council",
  },
  {
    id: "sample-2",
    title: "Mixed-use scheme including affordable housing",
    reference: "SAMPLE/002",
    lat: 51.5074,
    lng: -0.1278,
    startDate: "2025-02-01",
    organisation: "Westminster City Council",
  },
  {
    id: "sample-3",
    title: "New secondary school and sports facilities",
    reference: "SAMPLE/003",
    lat: 53.4808,
    lng: -2.2426,
    startDate: "2025-03-10",
    organisation: "Manchester City Council",
  },
];

function FitBounds({ applications }: { applications: Application[] }) {
  const map = useMap();
  useEffect(() => {
    if (applications.length === 0) return;
    const bounds = L.latLngBounds(
      applications.map((a) => [a.lat, a.lng] as [number, number])
    );
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 12 });
  }, [applications, map]);
  return null;
}

export default function MapClient() {
  const [mounted, setMounted] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingSamples, setUsingSamples] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/planning?limit=80");
        if (!res.ok) throw new Error(`API returned ${res.status}`);
        const data = await res.json();

        if (data.applications && data.applications.length > 0) {
          setApplications(data.applications);
          setUsingSamples(false);
        } else {
          // Official dataset is incomplete – fall back to samples
          setApplications(sampleApplications);
          setUsingSamples(true);
        }
      } catch (err) {
        console.error(err);
        setError("Could not load live planning data");
        setApplications(sampleApplications);
        setUsingSamples(true);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="h-full w-full bg-navy-100 flex items-center justify-center text-navy-500">
        Preparing map…
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      {loading && (
        <div className="absolute inset-0 z-[1000] bg-white/70 flex items-center justify-center text-navy-600">
          Loading planning applications…
        </div>
      )}

      {(usingSamples || error) && !loading && (
        <div className="absolute top-3 left-3 right-3 z-[1000] max-w-md">
          <div className="rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-sm px-3 py-2 shadow-sm">
            {error
              ? `${error}. Showing sample applications.`
              : "Official planning-application data is still incomplete. Showing sample applications for demonstration."}
          </div>
        </div>
      )}

      <MapContainer
        center={[52.5, -1.5]}
        zoom={7}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds applications={applications} />
        {applications.map((app) => (
          <Marker key={app.id} position={[app.lat, app.lng]}>
            <Popup>
              <div className="text-sm min-w-[180px]">
                <p className="font-semibold text-navy-900">{app.title}</p>
                {app.reference && (
                  <p className="text-navy-500 text-xs mt-0.5">Ref: {app.reference}</p>
                )}
                {app.organisation && (
                  <p className="text-navy-600 mt-1">{app.organisation}</p>
                )}
                {app.startDate && (
                  <p className="text-xs mt-1 text-navy-500">Submitted: {app.startDate}</p>
                )}
                <a
                  href={`/toolkit?ref=${encodeURIComponent(app.reference || app.id)}`}
                  className="inline-block mt-2 text-build-green-dark font-medium hover:underline"
                >
                  Support this scheme →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
