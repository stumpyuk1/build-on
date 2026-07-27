import Link from "next/link";
import {
  Map,
  FileText,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Scale,
} from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800/40 via-navy-950 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-build-green font-semibold tracking-wide text-sm uppercase mb-4">
              Homes. Infrastructure. Action.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Support the homes and infrastructure Britain needs
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-navy-200 leading-relaxed max-w-2xl">
              Build On helps you find planning applications for new homes and
              submit clear, evidence-based support — whether you live next door
              or further afield — so well-designed schemes get a fair hearing.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/map"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-build-green px-6 py-3.5 text-base font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
              >
                Find applications near you
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/toolkit"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-navy-900 transition-colors"
              >
                How to support a scheme
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why support — moral appeal + eligibility */}
      <section className="py-16 sm:py-20 bg-white border-b border-navy-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-navy-950 tracking-tight">
              Why your support matters
            </h2>
            <p className="mt-5 text-navy-700 text-lg leading-relaxed">
              Britain is short of homes. Waiting lists are long, rents and prices
              lock too many people out of stable housing, and we keep building
              fewer homes than the country needs. That is not an abstract policy
              problem — it is about whether the next generation can put down
              roots, whether key workers can live near their work, and whether
              communities can grow without pricing their own children out.
            </p>
            <p className="mt-4 text-navy-700 text-lg leading-relaxed">
              Planning decisions are shaped by the voices that turn up. For years
              the loudest organised voices have often been those opposing new
              development. Silence from people who want more good homes is read,
              fairly or not, as indifference. A short, factual letter of support
              is one of the simplest democratic acts available: it tells officers
              and councillors that approval is not only about weathering
              objections — there is a constituency for delivery too.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl border border-build-green/30 bg-build-green/5 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-build-green/20 text-build-green-dark">
                  <Scale size={22} />
                </div>
                <h3 className="text-xl font-semibold text-navy-950">
                  You do not have to be a local resident
                </h3>
              </div>
              <p className="text-navy-700 leading-relaxed">
                In England, <strong className="text-navy-950">anyone can respond</strong> to a
                planning consultation. You do not need to live next door, in the
                same ward, or even in the same town. Neighbour notification
                letters are about who the council must <em>tell</em> — not who is
                <em>allowed to comment</em>. National and local interest groups,
                workers, family members and concerned citizens are all entitled
                to submit representations.
              </p>
              <p className="mt-4 text-navy-700 leading-relaxed">
                What carries weight is not your postcode, but whether your points
                are <strong className="text-navy-950">material planning considerations</strong>:
                housing need, design quality, suitability of the site, transport,
                and how the scheme fits adopted policy. A calm, specific letter
                beats a pile of identical slogans — from near or far.
              </p>
              <p className="mt-4 text-sm text-navy-600">
                Government guidance is explicit: anyone can respond to a planning
                consultation. Build On helps you do it well.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-100 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-navy-950 mb-4">
                A moral case for taking part
              </h3>
              <ul className="space-y-4 text-navy-700">
                {[
                  "If only opponents write in, the file looks one-sided — even when the wider public wants homes built.",
                  "Supporting a well-designed scheme is not an attack on local democracy; it is participation in it.",
                  "You can care about design, infrastructure and character and still support more housing where the site is right.",
                  "The housing shortage will not ease if only the people already housed shape every decision.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-build-green-dark"
                      size={20}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-navy-700 leading-relaxed">
                Build On will not ask you to cheer every application. We focus on
                helping people support <strong className="text-navy-950">good schemes</strong> —
                with evidence, not noise — so the country can start closing the
                gap between the homes we need and the homes we approve.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/toolkit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-build-green px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
                >
                  Write a representation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/evidence"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-800 hover:border-build-green/40 transition-colors"
                >
                  See the evidence
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-navy-950 tracking-tight">
              How Build On works
            </h2>
            <p className="mt-4 text-navy-600 text-lg">
              Three simple steps to make your voice count in the planning
              process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Map,
                title: "Find applications",
                body: "Browse undecided larger housing schemes on the map, powered by UK PlanIt. Open the council portal from any marker to comment — or use the portals directory for a full local search.",
              },
              {
                icon: FileText,
                title: "Use the toolkit",
                body: "Generate clear, evidence-based representations in minutes. Pull in housing need stats and keep the focus on material planning points.",
              },
              {
                icon: Users,
                title: "Join local action",
                body: "Connect with others who want to see well-designed homes built. Share updates and attend committees together.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-navy-100 bg-navy-50/50 p-6 sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark mb-5">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-navy-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why organised support matters */}
      <section className="py-16 sm:py-24 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-950 tracking-tight">
                Why organised support matters
              </h2>
              <p className="mt-4 text-navy-600 text-lg leading-relaxed">
                Planning decisions are shaped by the voices that turn up. For
                decades the loudest organised voices have often been those
                opposing development. Build On exists to balance that with
                constructive, evidence-led support for good schemes.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Local housing shortfalls are real and measurable",
                  "Well-designed schemes improve places, they don’t ruin them",
                  "Councillors need political cover to approve necessary development",
                  "Young people, renters and key workers are under-represented",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-build-green-dark"
                      size={20}
                    />
                    <span className="text-navy-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-navy-950 p-8 sm:p-10 text-white">
              <BarChart3 className="text-build-green mb-6" size={32} />
              <h3 className="text-xl font-semibold mb-4">
                Powered by open data
              </h3>
              <p className="text-navy-300 leading-relaxed mb-6">
                The map draws on UK PlanIt, which aggregates applications from
                local planning authority registers. We filter toward undecided
                larger housing schemes so you can find places to support — and
                always comment on the council’s own portal.
              </p>
              <Link
                href="/map"
                className="inline-flex items-center gap-2 text-build-green font-medium hover:text-build-green-light transition-colors"
              >
                Open the planning map
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-950 tracking-tight">
            Ready to get involved?
          </h2>
          <p className="mt-4 text-navy-600 text-lg">
            Find a scheme, write a clear letter of support, and help tip the
            balance toward the homes the country needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/map"
              className="inline-flex items-center justify-center rounded-lg bg-navy-950 px-6 py-3.5 text-base font-semibold text-white hover:bg-navy-800 transition-colors"
            >
              Find applications near you
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-lg border border-navy-300 px-6 py-3.5 text-base font-semibold text-navy-900 hover:bg-navy-50 transition-colors"
            >
              Join the campaign
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
