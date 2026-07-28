"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Flag, Search } from "lucide-react";
import { planningPortals, regions } from "@/data/planning-portals";

const REPORT_EMAIL = "hello@build-on.org.uk";

function reportMailto(name?: string, url?: string) {
  const subject = encodeURIComponent(
    name ? `Broken portal link: ${name}` : "Broken planning portal link"
  );
  const bodyLines = [
    "Hello,",
    "",
    "I would like to report a problem with a planning portal link on the Build On directory.",
    "",
    `Council / LPA name: ${name || ""}`,
    `Current URL: ${url || ""}`,
    "Suggested correct URL (if known): ",
    "What is wrong? (404 / timeout / wrong page / other): ",
    "",
    "Extra notes:",
    "",
  ];
  const body = encodeURIComponent(bodyLines.join("\n"));
  return `mailto:${REPORT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function PortalsDirectory() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return planningPortals
      .filter((p) => (region === "all" ? true : p.region === region))
      .filter((p) =>
        q === ""
          ? true
          : p.name.toLowerCase().includes(q) ||
            p.region.toLowerCase().includes(q)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [query, region]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
            size={18}
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by council name…"
            className="w-full rounded-lg border border-navy-200 pl-10 pr-3 py-2.5 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-build-green/40 focus:border-build-green"
          />
        </div>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="rounded-lg border border-navy-200 px-3 py-2.5 text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-build-green/40 focus:border-build-green sm:w-56"
        >
          <option value="all">All regions</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <p className="text-sm text-navy-600">
          Showing <strong className="text-navy-950">{filtered.length}</strong> of{" "}
          {planningPortals.length} authorities in this starter list.
        </p>
        <a
          href={reportMailto()}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 hover:text-build-green-dark"
        >
          <Flag size={14} />
          Report a broken link
        </a>
      </div>

      <ul className="divide-y divide-navy-100 border border-navy-100 rounded-xl overflow-hidden">
        {filtered.map((p) => (
          <li
            key={`${p.name}-${p.url}`}
            className="flex items-stretch gap-1 px-2 sm:px-3 hover:bg-navy-50 transition-colors"
          >
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-between gap-4 py-3.5 px-2 sm:px-2 min-w-0 group"
            >
              <div className="min-w-0">
                <p className="font-medium text-navy-950 group-hover:text-build-green-dark truncate">
                  {p.name}
                </p>
                <p className="text-xs text-navy-500 mt-0.5">{p.region}</p>
              </div>
              <ExternalLink
                size={16}
                className="text-navy-400 group-hover:text-build-green-dark shrink-0"
              />
            </a>
            <a
              href={reportMailto(p.name, p.url)}
              title={`Report broken link for ${p.name}`}
              className="flex items-center px-2 text-navy-400 hover:text-amber-700 shrink-0"
              aria-label={`Report broken link for ${p.name}`}
            >
              <Flag size={15} />
            </a>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="px-5 py-10 text-center text-navy-600 text-sm">
            No matches. Try another search, or use the Planning Portal “find your
            authority” tool linked below.
          </li>
        )}
      </ul>
    </div>
  );
}
