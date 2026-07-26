import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Flag } from "lucide-react";
import PortalsDirectory from "@/components/PortalsDirectory";

export const metadata: Metadata = {
  title: "Planning portals directory",
  description:
    "Find your local planning authority’s online planning applications search — a practical step while national open data catches up.",
};

const REPORT_ISSUE_URL =
  "https://github.com/stumpyuk1/build-on/issues/new?template=broken-portal-link.yml";

export default function PortalsPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Planning portals directory
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl">
            Links to local planning authority public search pages across England.
            Use these to find live applications and comment on the council’s own
            system.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-navy-800 mb-10 leading-relaxed">
          <strong className="text-navy-950">Honest label:</strong> this is a
          directory of <em>council planning portals</em>, not a live national
          list of every application. National open data for residential schemes
          is still incomplete — until that improves, these links are the reliable
          way to find and support applications near you. The list is a starter
          set and will grow; some URLs may change when councils reorganise their
          sites.
        </div>

        <PortalsDirectory />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-navy-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-navy-950 mb-3">
              Can’t find your council?
            </h2>
            <p className="text-navy-700 text-sm leading-relaxed mb-4">
              Use the official Planning Portal tool to look up your local planning
              authority, then search for “planning applications” or “public access”
              on that council’s website.
            </p>
            <a
              href="https://www.planningportal.co.uk/find-your-local-planning-authority"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-build-green-dark hover:text-build-green"
            >
              Find your local planning authority
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="rounded-2xl border border-navy-100 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-navy-950 mb-3 flex items-center gap-2">
              <Flag size={18} className="text-build-green-dark" />
              Spot a broken link?
            </h2>
            <p className="text-navy-700 text-sm leading-relaxed mb-4">
              Councils reorganise sites often. Open a short GitHub issue with the
              council name, the dead URL, and a better one if you have it — that
              keeps the directory honest without waiting for a full crawl.
            </p>
            <a
              href={REPORT_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-build-green-dark hover:text-build-green"
            >
              Report a broken portal link
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/toolkit/generator"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-build-green px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
          >
            Letter generator
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/map"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-800 hover:border-build-green/40 transition-colors"
          >
            Applications map
          </Link>
        </div>
      </div>
    </div>
  );
}
