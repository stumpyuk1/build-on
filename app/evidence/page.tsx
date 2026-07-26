import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  Home,
  TrendingUp,
  Users,
  Clock,
  Building2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Evidence Hub",
  description:
    "Facts, figures and myth-busting resources on the UK housing and infrastructure shortage.",
};

const sections = [
  {
    id: "housing-need",
    icon: Home,
    title: "Housing need",
    body: "Local authority targets, shortfalls and waiting lists.",
  },
  {
    id: "affordability",
    icon: TrendingUp,
    title: "Affordability",
    body: "House price to earnings ratios and rent burden data.",
  },
  {
    id: "delivery",
    icon: BarChart3,
    title: "Delivery stats",
    body: "Completions vs targets and the impact of delays.",
  },
  {
    id: "myths",
    icon: BookOpen,
    title: "Myth-busting",
    body: "Common objections answered with evidence and examples.",
  },
];

export default function EvidencePage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Evidence Hub
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl">
            Clear, sourced information you can use when supporting schemes or
            talking to neighbours and councillors.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Section navigation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-xl border border-navy-100 p-6 hover:border-build-green/40 transition-colors block"
            >
              <item.icon className="text-build-green-dark mb-4" size={24} />
              <h2 className="font-semibold text-navy-950 mb-2">{item.title}</h2>
              <p className="text-sm text-navy-600">{item.body}</p>
            </a>
          ))}
        </div>

        {/* ========== HOUSING NEED ========== */}
        <section id="housing-need" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark">
              <Home size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              Housing need
            </h2>
          </div>

          <p className="text-navy-700 text-lg leading-relaxed max-w-3xl mb-10">
            England has a persistent, measurable shortfall of homes. The numbers
            below are useful when writing representations: they show why
            well-designed schemes that increase supply are a material
            consideration.
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <div className="flex items-center gap-2 text-build-green-dark mb-3">
                <Users size={20} />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Waiting lists
                </span>
              </div>
              <p className="text-3xl font-bold text-navy-950">1.3 million</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                Households on local authority social housing waiting lists in
                England (around March 2025).
              </p>
            </div>

            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <div className="flex items-center gap-2 text-build-green-dark mb-3">
                <Clock size={20} />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Clearance time
                </span>
              </div>
              <p className="text-3xl font-bold text-navy-950">~119 years</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                Estimated time to clear the social housing waiting list at the
                recent rate of new social rent homes (Shelter analysis).
              </p>
            </div>

            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <div className="flex items-center gap-2 text-build-green-dark mb-3">
                <Building2 size={20} />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Net additions
                </span>
              </div>
              <p className="text-3xl font-bold text-navy-950">208,600</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                Net additional dwellings in England in 2024–25 — down 6% on the
                previous year and well below the pace needed for national
                targets.
              </p>
            </div>
          </div>

          {/* Future need */}
          <div className="rounded-2xl border border-navy-100 p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold text-navy-950 mb-4">
              Future need — and the historic backlog
            </h3>
            <p className="text-navy-700 leading-relaxed mb-6">
              Two complementary figures are useful when arguing for more homes:
              how many we need to build <em>going forward</em>, and how large the
              accumulated shortfall already is.
            </p>

            <div className="space-y-5 text-navy-700">
              <div>
                <p className="font-semibold text-navy-950 mb-1">
                  Government target (England)
                </p>
                <p className="leading-relaxed">
                  The current government aims to deliver{" "}
                  <strong>1.5 million homes in England over this Parliament</strong>{" "}
                  (roughly 2024–2029). That implies an average pace of around{" "}
                  <strong>300,000 homes a year</strong>. Recent delivery
                  (208,600 net additions in 2024–25) is running well below that
                  level.
                </p>
              </div>

              <div>
                <p className="font-semibold text-navy-950 mb-1">
                  Standard Method (planning system minimum)
                </p>
                <p className="leading-relaxed">
                  The official <strong>Standard Method</strong> calculates a
                  minimum local housing need figure for each English local
                  planning authority. Under recent versions of the method, the
                  England-wide total has sat in the region of{" "}
                  <strong>~300,000 dwellings a year</strong>. This is the
                  starting point used in local plans and is the figure most
                  relevant to individual planning decisions.
                </p>
              </div>

              <div>
                <p className="font-semibold text-navy-950 mb-1">
                  Historic backlog (Centre for Cities)
                </p>
                <p className="leading-relaxed">
                  Separate analysis by the Centre for Cities estimates that
                  Britain has a cumulative backlog of{" "}
                  <strong>around 4.3 million homes</strong> that were never
                  built, relative to comparable European countries. Even at
                  300,000 homes a year, clearing that backlog would take many
                  decades. Their 2023 report,{" "}
                  <em>The housebuilding crisis: The UK’s 4 million missing
                  homes</em>, is the main source for this figure.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-navy-600 leading-relaxed border-t border-navy-100 pt-5">
              In short: the Standard Method and government target describe the{" "}
              <strong>forward rate</strong> of building needed; the Centre for
              Cities figure describes the <strong>accumulated shortfall</strong>.
              Both point in the same direction — England needs substantially more
              homes than it is currently delivering.
            </p>
          </div>

          {/* Why it matters */}
          <div className="rounded-2xl border border-navy-100 p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold text-navy-950 mb-4">
              Why this matters in planning decisions
            </h3>
            <ul className="space-y-3 text-navy-700">
              <li className="flex gap-3">
                <span className="text-build-green-dark font-bold shrink-0">1.</span>
                <span>
                  <strong>Material consideration.</strong> Housing need is a
                  recognised material planning consideration. Local plans and
                  the National Planning Policy Framework require decision-makers
                  to boost the supply of homes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-build-green-dark font-bold shrink-0">2.</span>
                <span>
                  <strong>Local shortfalls are real.</strong> Most local
                  authorities are not delivering enough homes against their
                  assessed need (Standard Method or local housing need
                  figures). Supporting deliverable schemes helps close that gap.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-build-green-dark font-bold shrink-0">3.</span>
                <span>
                  <strong>Social need is acute.</strong> With over a million
                  households on waiting lists and only a few thousand new social
                  rent homes completed in a typical recent year, every
                  well-designed scheme that includes affordable or social homes
                  carries extra weight.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-build-green-dark font-bold shrink-0">4.</span>
                <span>
                  <strong>Temporary accommodation costs.</strong> Around 128,000
                  households in England live in temporary accommodation. This
                  imposes high costs on councils and poor outcomes for families.
                  Increasing supply is one of the few structural answers.
                </span>
              </li>
            </ul>
          </div>

          {/* How to use in a representation */}
          <div className="rounded-2xl bg-navy-950 text-white p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold mb-4">
              How to use this in a representation
            </h3>
            <p className="text-navy-200 leading-relaxed mb-4">
              You do not need to be a planning expert. A short, factual paragraph
              is often enough. For example:
            </p>
            <blockquote className="border-l-4 border-build-green pl-4 text-navy-100 italic leading-relaxed">
              “England has more than 1.3 million households on social housing
              waiting lists and delivered only around 208,600 net additional
              dwellings in 2024–25 — well below the pace required to meet
              assessed need. This scheme would make a positive contribution to
              local housing supply. I support the application subject to
              appropriate design and affordable housing provision.”
            </blockquote>
            <p className="mt-6 text-sm text-navy-300">
              Always check the latest local figures for the specific authority
              if you can (local plan housing trajectory, Authority Monitoring
              Report, or housing register data).
            </p>
          </div>

          {/* Sources */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-navy-950 mb-4">
              Primary sources
            </h3>
            <ul className="space-y-2 text-sm text-navy-700">
              <li>
                <a
                  href="https://www.gov.uk/government/statistics/housing-supply-net-additional-dwellings-england-2024-to-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline"
                >
                  MHCLG – Net additional dwellings, England 2024–25
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.uk/government/statistical-data-sets/live-tables-on-rents-lettings-and-tenancies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline"
                >
                  MHCLG – Live tables on rents, lettings and tenancies (waiting
                  lists)
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.uk/guidance/housing-and-economic-development-needs-assessments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline"
                >
                  MHCLG – Housing and economic needs assessments (Standard
                  Method guidance)
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.centreforcities.org/publication/the-housebuilding-crisis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline"
                >
                  Centre for Cities – The housebuilding crisis: The UK’s 4
                  million missing homes (2023)
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://england.shelter.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline"
                >
                  Shelter – Social housing waiting list analysis
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.planning.data.gov.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline"
                >
                  planning.data.gov.uk – Open planning and housing datasets
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Placeholders for remaining sections */}
        <section id="affordability" className="scroll-mt-24 border-t border-navy-100 pt-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark">
              <TrendingUp size={22} />
            </div>
            <h2 className="text-2xl font-bold text-navy-950">Affordability</h2>
          </div>
          <p className="text-navy-600 max-w-2xl">
            Coming next — house price to earnings ratios, rent burden, and what
            they mean for local need arguments.
          </p>
        </section>

        <section id="delivery" className="scroll-mt-24 border-t border-navy-100 pt-16 mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark">
              <BarChart3 size={22} />
            </div>
            <h2 className="text-2xl font-bold text-navy-950">Delivery stats</h2>
          </div>
          <p className="text-navy-600 max-w-2xl">
            Coming next — completions against targets, pipeline, and the cost of
            delay.
          </p>
        </section>

        <section id="myths" className="scroll-mt-24 border-t border-navy-100 pt-16 mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark">
              <BookOpen size={22} />
            </div>
            <h2 className="text-2xl font-bold text-navy-950">Myth-busting</h2>
          </div>
          <p className="text-navy-600 max-w-2xl">
            Coming next — common objections answered with evidence and examples.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-navy-50 border border-navy-100 p-8 text-center">
          <h3 className="text-xl font-semibold text-navy-950 mb-3">
            Ready to use this in a real application?
          </h3>
          <p className="text-navy-600 mb-6 max-w-xl mx-auto">
            The Support Toolkit walks you through writing a clear, evidence-based
            representation.
          </p>
          <Link
            href="/toolkit"
            className="inline-flex items-center gap-2 rounded-lg bg-build-green px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
          >
            Go to the Toolkit
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
