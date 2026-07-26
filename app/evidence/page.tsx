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

        {/* HOUSING NEED - abbreviated marker: content preserved above in structure */}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <div className="flex items-center gap-2 text-build-green-dark mb-3">
                <Users size={20} />
                <span className="text-sm font-semibold uppercase tracking-wide">Waiting lists</span>
              </div>
              <p className="text-3xl font-bold text-navy-950">1.3 million</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                Households on local authority social housing waiting lists in England (around March 2025).
              </p>
            </div>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <div className="flex items-center gap-2 text-build-green-dark mb-3">
                <Clock size={20} />
                <span className="text-sm font-semibold uppercase tracking-wide">Clearance time</span>
              </div>
              <p className="text-3xl font-bold text-navy-950">~119 years</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                Estimated time to clear the social housing waiting list at the recent rate of new social rent homes (Shelter analysis).
              </p>
            </div>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <div className="flex items-center gap-2 text-build-green-dark mb-3">
                <Building2 size={20} />
                <span className="text-sm font-semibold uppercase tracking-wide">Net additions</span>
              </div>
              <p className="text-3xl font-bold text-navy-950">208,600</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                Net additional dwellings in England in 2024–25 — down 6% on the previous year and well below the pace needed for national targets.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-navy-100 p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold text-navy-950 mb-4">Future need — and the historic backlog</h3>
            <p className="text-navy-700 leading-relaxed mb-6">
              Two complementary figures are useful when arguing for more homes: how many we need to build <em>going forward</em>, and how large the accumulated shortfall already is.
            </p>
            <div className="space-y-5 text-navy-700">
              <div>
                <p className="font-semibold text-navy-950 mb-1">Government target (England)</p>
                <p className="leading-relaxed">
                  The current government aims to deliver <strong>1.5 million homes in England over this Parliament</strong> (roughly 2024–2029). That implies an average pace of around <strong>300,000 homes a year</strong>. Recent delivery (208,600 net additions in 2024–25) is running well below that level.
                </p>
              </div>
              <div>
                <p className="font-semibold text-navy-950 mb-1">Standard Method (planning system minimum)</p>
                <p className="leading-relaxed">
                  The official <strong>Standard Method</strong> calculates a minimum local housing need figure for each English local planning authority. Under recent versions of the method, the England-wide total has sat in the region of <strong>~300,000 dwellings a year</strong>. This is the starting point used in local plans and is the figure most relevant to individual planning decisions.
                </p>
              </div>
              <div>
                <p className="font-semibold text-navy-950 mb-1">Historic backlog (Centre for Cities)</p>
                <p className="leading-relaxed">
                  Separate analysis by the Centre for Cities estimates that Britain has a cumulative backlog of <strong>around 4.3 million homes</strong> that were never built, relative to comparable European countries. Even at 300,000 homes a year, clearing that backlog would take many decades. Their 2023 report, <em>The housebuilding crisis: The UK’s 4 million missing homes</em>, is the main source for this figure.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-navy-600 leading-relaxed border-t border-navy-100 pt-5">
              In short: the Standard Method and government target describe the <strong>forward rate</strong> of building needed; the Centre for Cities figure describes the <strong>accumulated shortfall</strong>. Both point in the same direction — England needs substantially more homes than it is currently delivering.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-100 p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold text-navy-950 mb-4">Why this matters in planning decisions</h3>
            <ul className="space-y-3 text-navy-700">
              <li className="flex gap-3"><span className="text-build-green-dark font-bold shrink-0">1.</span><span><strong>Material consideration.</strong> Housing need is a recognised material planning consideration. Local plans and the National Planning Policy Framework require decision-makers to boost the supply of homes.</span></li>
              <li className="flex gap-3"><span className="text-build-green-dark font-bold shrink-0">2.</span><span><strong>Local shortfalls are real.</strong> Most local authorities are not delivering enough homes against their assessed need (Standard Method or local housing need figures). Supporting deliverable schemes helps close that gap.</span></li>
              <li className="flex gap-3"><span className="text-build-green-dark font-bold shrink-0">3.</span><span><strong>Social need is acute.</strong> With over a million households on waiting lists and only a few thousand new social rent homes completed in a typical recent year, every well-designed scheme that includes affordable or social homes carries extra weight.</span></li>
              <li className="flex gap-3"><span className="text-build-green-dark font-bold shrink-0">4.</span><span><strong>Temporary accommodation costs.</strong> Around 128,000 households in England live in temporary accommodation. This imposes high costs on councils and poor outcomes for families. Increasing supply is one of the few structural answers.</span></li>
            </ul>
          </div>
          <div className="rounded-2xl bg-navy-950 text-white p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold mb-4">How to use this in a representation</h3>
            <p className="text-navy-200 leading-relaxed mb-4">You do not need to be a planning expert. A short, factual paragraph is often enough. For example:</p>
            <blockquote className="border-l-4 border-build-green pl-4 text-navy-100 italic leading-relaxed">
              “England has more than 1.3 million households on social housing waiting lists and delivered only around 208,600 net additional dwellings in 2024–25 — well below the pace required to meet assessed need. This scheme would make a positive contribution to local housing supply. I support the application subject to appropriate design and affordable housing provision.”
            </blockquote>
            <p className="mt-6 text-sm text-navy-300">Always check the latest local figures for the specific authority if you can (local plan housing trajectory, Authority Monitoring Report, or housing register data).</p>
          </div>
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-navy-950 mb-4">Primary sources</h3>
            <ul className="space-y-2 text-sm text-navy-700">
              <li><a href="https://www.gov.uk/government/statistics/housing-supply-net-additional-dwellings-england-2024-to-2025" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline">MHCLG – Net additional dwellings, England 2024–25 <ExternalLink size={14} /></a></li>
              <li><a href="https://www.gov.uk/government/statistical-data-sets/live-tables-on-rents-lettings-and-tenancies" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline">MHCLG – Live tables on rents, lettings and tenancies (waiting lists) <ExternalLink size={14} /></a></li>
              <li><a href="https://www.gov.uk/guidance/housing-and-economic-development-needs-assessments" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline">MHCLG – Housing and economic needs assessments (Standard Method guidance) <ExternalLink size={14} /></a></li>
              <li><a href="https://www.centreforcities.org/publication/the-housebuilding-crisis/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline">Centre for Cities – The housebuilding crisis: The UK’s 4 million missing homes (2023) <ExternalLink size={14} /></a></li>
              <li><a href="https://england.shelter.org.uk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline">Shelter – Social housing waiting list analysis <ExternalLink size={14} /></a></li>
              <li><a href="https://www.planning.data.gov.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline">planning.data.gov.uk – Open planning and housing datasets <ExternalLink size={14} /></a></li>
            </ul>
          </div>
        </section>

        {/* AFFORDABILITY */}
        <section id="affordability" className="scroll-mt-24 border-t border-navy-100 pt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark">
              <TrendingUp size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">Affordability</h2>
          </div>
          <p className="text-navy-700 text-lg leading-relaxed max-w-3xl mb-10">
            Homes in England are far less affordable relative to earnings than they were a generation ago. That is not mainly because people earn less — it is because prices have risen much faster than wages, in large part because supply has not kept up with demand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-build-green-dark mb-3">England today</p>
              <p className="text-3xl font-bold text-navy-950">7.6×</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">Median house price to median full-time earnings in England in 2025 (ONS). Median home £300,000; median earnings £39,300.</p>
            </div>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-build-green-dark mb-3">Late 1990s</p>
              <p className="text-3xl font-bold text-navy-950">~3×</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">House price to earnings ratios were typically around 3 times in the mid-to-late 1990s (Nationwide / long-run series). Around 2000 the England median was roughly 4–4.5 times.</p>
            </div>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-build-green-dark mb-3">Peak stretch</p>
              <p className="text-3xl font-bold text-navy-950">~9–10×</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">Ratios peaked near or above 9–10 times around 2021–22 in some official and lender measures before a modest improvement as earnings caught up a little.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-navy-100 p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold text-navy-950 mb-4">What the rise in the ratio means</h3>
            <p className="text-navy-700 leading-relaxed mb-4">A generation ago, a typical home cost roughly three to four times typical full-time earnings. Today it costs closer to seven or eight times — and in high-demand areas far more. That shift is the core of the affordability problem for first-time buyers and many renters trying to save a deposit.</p>
            <ul className="space-y-3 text-navy-700">
              <li className="flex gap-3"><span className="text-build-green-dark font-bold shrink-0">•</span><span><strong>Deposit barrier.</strong> Higher price-to-earnings ratios mean larger deposits in absolute terms. High rents make it harder to save, locking more people out of ownership.</span></li>
              <li className="flex gap-3"><span className="text-build-green-dark font-bold shrink-0">•</span><span><strong>Regional extremes.</strong> London and parts of the Greater South East have long had much higher ratios than the national median. Affordability pressures are most severe where jobs and opportunity are concentrated.</span></li>
              <li className="flex gap-3"><span className="text-build-green-dark font-bold shrink-0">•</span><span><strong>Modest recent improvement is not the full story.</strong> Since 2021 earnings have grown faster than prices in many areas, so the national ratio has eased a little (ONS 2025: 7.6). It remains far above long-run norms and above levels that younger households experienced in the 1990s and early 2000s.</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-navy-100 p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold text-navy-950 mb-4">Why more supply improves the earnings ratio</h3>
            <p className="text-navy-700 leading-relaxed mb-4">House prices are set by the balance of demand and supply. When demand rises (more households, higher incomes, cheaper credit) and supply cannot respond, prices absorb the pressure. England’s housing supply is unusually inelastic — research finds local supply responds only weakly to price rises over multi-decade periods.</p>
            <ul className="space-y-3 text-navy-700 mb-4">
              <li className="flex gap-3"><span className="text-build-green-dark font-bold shrink-0">•</span><span><strong>Inelastic supply amplifies price rises.</strong> Academic and government-backed work (including studies of English local authorities) shows that tighter planning and physical constraints reduce how much new building responds to higher prices. Demand shocks then feed more strongly into prices — and into the price-to-earnings ratio.</span></li>
              <li className="flex gap-3"><span className="text-build-green-dark font-bold shrink-0">•</span><span><strong>More homes, lower long-run prices relative to incomes.</strong> Increasing the rate of housebuilding does not instantly reset prices, but sustained higher supply is the main structural way to prevent the ratio drifting higher and, over time, to bring it down. That is why planning decisions that unlock well-located, well-designed homes matter for affordability.</span></li>
              <li className="flex gap-3"><span className="text-build-green-dark font-bold shrink-0">•</span><span><strong>Interest rates are not the whole story.</strong> Low rates and credit conditions affect how much people can borrow, but they do not explain why ratios stayed high even when rates rose, or why shortages are worst in high-demand cities with the tightest supply response.</span></li>
            </ul>
            <p className="text-sm text-navy-600 leading-relaxed border-t border-navy-100 pt-5">In practical terms: supporting schemes that add net new homes in areas of need is one of the few levers that directly addresses the supply side of the affordability problem.</p>
          </div>
          <div className="rounded-2xl bg-navy-950 text-white p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold mb-4">How to use this in a representation</h3>
            <p className="text-navy-200 leading-relaxed mb-4">A short, factual point is usually enough:</p>
            <blockquote className="border-l-4 border-build-green pl-4 text-navy-100 italic leading-relaxed">
              “Median house prices in England are still around 7–8 times median full-time earnings — roughly double the ratio typical in the late 1990s. Constrained supply is a major reason prices have outpaced incomes. This scheme would add to local housing supply and, over time, help ease that pressure. I support the application subject to good design and appropriate affordable housing.”
            </blockquote>
          </div>
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-navy-950 mb-4">Primary sources</h3>
            <ul className="space-y-2 text-sm text-navy-700">
              <li><a href="https://www.ons.gov.uk/peoplepopulationandcommunity/housing/bulletins/housingaffordabilityinenglandandwales/2025" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline">ONS – Housing affordability in England and Wales: 2025 <ExternalLink size={14} /></a></li>
              <li><a href="https://www.ons.gov.uk/peoplepopulationandcommunity/housing/datasets/ratioofhousepricetoworkplacebasedearningslowerquartileandmedian" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline">ONS – House price to workplace-based earnings ratio (dataset) <ExternalLink size={14} /></a></li>
              <li><a href="https://www.nationwide.co.uk/media/hpi/reports/affordability-stretched-but-gradually-improving" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline">Nationwide – Affordability and house price to earnings analysis <ExternalLink size={14} /></a></li>
              <li><a href="https://www.gov.uk/government/publications/housing-affordability-and-productivity/housing-affordability-and-productivity-accessible-version" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline">Government analysis – Housing affordability and productivity (historical ratios) <ExternalLink size={14} /></a></li>
            </ul>
          </div>
        </section>

        {/* ========== DELIVERY STATS ========== */}
        <section id="delivery" className="scroll-mt-24 border-t border-navy-100 pt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark">
              <BarChart3 size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              Delivery stats
            </h2>
          </div>

          <p className="text-navy-700 text-lg leading-relaxed max-w-3xl mb-10">
            England is not building enough homes. Delivery is well below the
            pace implied by national targets, and the pipeline of new permissions
            has been weak — which means the shortfall is not just a one-year
            problem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-build-green-dark mb-3">
                Delivered 2024–25
              </p>
              <p className="text-3xl font-bold text-navy-950">208,600</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                Net additional dwellings in England (MHCLG) — down 6% on
                2023–24 and far short of ~300,000 a year.
              </p>
            </div>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-build-green-dark mb-3">
                Annual target pace
              </p>
              <p className="text-3xl font-bold text-navy-950">~300,000</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                Implied yearly rate to hit 1.5 million homes in England over
                this Parliament. Last achieved at scale in the late 1960s / early
                1970s.
              </p>
            </div>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-build-green-dark mb-3">
                Permissions pipeline
              </p>
              <p className="text-3xl font-bold text-navy-950">Weak</p>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                Permissions for homes in the year to June 2025 were about
                221,000 — down on the previous year and part of a multi-year
                decline in the pipeline.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-navy-100 p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold text-navy-950 mb-4">
              Completions vs need
            </h3>
            <p className="text-navy-700 leading-relaxed mb-4">
              Net additional dwellings are the official measure of how many homes
              are added to the stock each year (new builds, conversions and
              changes of use, minus demolitions). In 2024–25 England added
              208,600 — roughly two-thirds of the ~300,000 annual pace needed for
              the government’s 1.5 million target over the Parliament.
            </p>
            <ul className="space-y-3 text-navy-700">
              <li className="flex gap-3">
                <span className="text-build-green-dark font-bold shrink-0">•</span>
                <span>
                  <strong>Below recent averages too.</strong> Over the decade
                  before the latest dip, net additions averaged a little over
                  220,000 a year — still well short of 300,000.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-build-green-dark font-bold shrink-0">•</span>
                <span>
                  <strong>Parliament progress is behind.</strong> Independent
                  trackers using official estimates show that cumulative delivery
                  since July 2024 is only a fraction of the 1.5 million target,
                  so the annual rate would need to rise substantially to catch up.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-build-green-dark font-bold shrink-0">•</span>
                <span>
                  <strong>Local plans and the Housing Delivery Test</strong>{" "}
                  already treat under-delivery as a planning issue. Supporting
                  deliverable schemes is one way to close the gap in areas that
                  are falling short.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-navy-100 p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold text-navy-950 mb-4">
              Pipeline and the cost of delay
            </h3>
            <p className="text-navy-700 leading-relaxed mb-4">
              Homes are not built the year permission is granted. A weak pipeline
              of approvals today means weaker completions in two to five years’
              time. Recent years have seen a sustained fall in the number of
              homes granted permission — industry and government data both point
              to a pipeline that is too thin to support a step-change in delivery.
            </p>
            <ul className="space-y-3 text-navy-700 mb-4">
              <li className="flex gap-3">
                <span className="text-build-green-dark font-bold shrink-0">•</span>
                <span>
                  <strong>Permissions lag need.</strong> In the year to June
                  2025, permission was granted for around 221,000 homes in
                  England — down 7% on the previous year and part of a longer
                  decline from peaks earlier in the decade.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-build-green-dark font-bold shrink-0">•</span>
                <span>
                  <strong>Large schemes take years.</strong> Research on major
                  developments shows planning and post-permission processes can
                  stretch for many years. Every year of delay is a year those
                  homes are not available to households who need them.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-build-green-dark font-bold shrink-0">•</span>
                <span>
                  <strong>Delay has wider costs.</strong> Delayed schemes mean
                  delayed construction jobs, delayed council tax and New Homes
                  Bonus-type receipts, and continued pressure on temporary
                  accommodation and private rents. Supporting timely, well-designed
                  applications helps lock in future supply.
                </span>
              </li>
            </ul>
            <p className="text-sm text-navy-600 leading-relaxed border-t border-navy-100 pt-5">
              Granting permission for a good scheme does not guarantee it is
              built overnight — but refusing or indefinitely delaying sound
              proposals guarantees those homes will not be delivered on that
              site.
            </p>
          </div>

          <div className="rounded-2xl bg-navy-950 text-white p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-semibold mb-4">
              How to use this in a representation
            </h3>
            <p className="text-navy-200 leading-relaxed mb-4">
              Keep it short and factual:
            </p>
            <blockquote className="border-l-4 border-build-green pl-4 text-navy-100 italic leading-relaxed">
              “England added only 208,600 net additional dwellings in 2024–25
              against an implied need of around 300,000 a year to meet national
              targets. The permissions pipeline has also been weak. Approving
              this deliverable scheme would make a direct contribution to closing
              that gap. I support the application subject to appropriate design
              and affordable housing.”
            </blockquote>
          </div>

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
                  href="https://www.gov.uk/government/statistics/planning-applications-in-england-april-to-june-2025/planning-applications-in-england-april-to-june-2025-statistical-release"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline"
                >
                  MHCLG – Planning applications in England (homes granted
                  permission)
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://fullfact.org/government-tracker/1-5-million-homes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline"
                >
                  Full Fact – Tracker on the 1.5 million homes target
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.uk/government/collections/net-supply-of-housing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-build-green-dark hover:underline"
                >
                  MHCLG – Net supply of housing (collection)
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
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
