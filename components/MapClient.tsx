"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

// Placeholder sample data – will be replaced by planning.data.gov.uk API
const sampleApplications = [
  {
    id: "1",
    title: "Residential development – 48 homes",
    lat: 52.2869,
    lng: -1.532,
    status: "Under consideration",
    authority: "Warwick District Council",
  },
  {
    id: "2",
    title: "Mixed-use scheme including affordable housing",
    lat: 51.5074,
    lng: -0.1278,
    status: "Approved with conditions",
    authority: "Westminster City Council",
  },
  {
    id: "3",
    title: "New secondary school and sports facilities",
    lat: 53.4808,
    lng: -2.2426,
    status: "Under consideration",
    authority: "Manchester City Council",
  },
];

export default function MapClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-full w-full bg-navy-100 flex items-center justify-center text-navy-500">
        Preparing map…
      </div>
    );
  }

  return (
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
      {sampleApplications.map((app) => (
        <Marker key={app.id} position={[app.lat, app.lng]}>
          <Popup>
            <div className="text-sm">
              <p className="font-semibold text-navy-900">{app.title}</p>
              <p className="text-navy-600 mt-1">{app.authority}</p>
              <p className="text-xs mt-1 text-navy-500">Status: {app.status}</p>
              <a
                href={`/toolkit?ref=${app.id}`}
                className="inline-block mt-2 text-build-green-dark font-medium hover:underline"
              >
                Support this scheme →
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
