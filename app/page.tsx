import Link from "next/link";
import { Map, FileText, Users, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";

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
              Build On makes it easy to find local planning applications and
              submit clear, evidence-based support — so well-designed schemes
              get a fair hearing.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/map"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-build-green px-6 py-3.5 text-base font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
              >
                Explore the map
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
                body: "Browse live planning applications near you using open government data. Filter by type, status and location.",
              },
              {
                icon: FileText,
                title: "Use the toolkit",
                body: "Generate clear, evidence-based representations in minutes. Pull in local housing need stats automatically.",
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

      {/* Why it matters */}
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
                We use the official planning.data.gov.uk platform so that the
                applications you see are current and authoritative. No scraping
                of outdated council portals.
              </p>
              <Link
                href="/evidence"
                className="inline-flex items-center gap-2 text-build-green font-medium hover:text-build-green-light transition-colors"
              >
                Explore the Evidence Hub
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
            Whether you want to support a single scheme near you or help build
            a local group, start here.
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
