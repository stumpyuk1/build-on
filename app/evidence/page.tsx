import type { Metadata } from "next";
import { BarChart3, BookOpen, Home, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Evidence Hub",
  description:
    "Facts, figures and myth-busting resources on the UK housing and infrastructure shortage.",
};

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Home,
              title: "Housing need",
              body: "Local authority targets, shortfalls and waiting lists.",
            },
            {
              icon: TrendingUp,
              title: "Affordability",
              body: "House price to earnings ratios and rent burden data.",
            },
            {
              icon: BarChart3,
              title: "Delivery stats",
              body: "Completions vs targets and the impact of delays.",
            },
            {
              icon: BookOpen,
              title: "Myth-busting",
              body: "Common objections answered with evidence and examples.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-navy-100 p-6 hover:border-build-green/40 transition-colors"
            >
              <item.icon className="text-build-green-dark mb-4" size={24} />
              <h2 className="font-semibold text-navy-950 mb-2">{item.title}</h2>
              <p className="text-sm text-navy-600">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-bold text-navy-950">Coming soon</h2>
          <p className="text-navy-600 mt-3 leading-relaxed max-w-2xl">
            We are building local authority dashboards that pull housing need
            figures, affordability metrics and recent delivery data so every
            representation can be grounded in the numbers that matter for that
            place. In the meantime, the{" "}
            <a
              href="https://www.planning.data.gov.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-build-green-dark underline"
            >
              planning.data.gov.uk
            </a>{" "}
            platform and official MHCLG / ONS releases remain the best primary
            sources.
          </p>
        </div>
      </div>
    </div>
  );
}
