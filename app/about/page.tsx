import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Build On exists to balance the planning debate with organised, evidence-based support for well-designed homes and infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Build On
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl">
            A practical campaign to help more people support the homes and
            infrastructure the country needs.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-navy-950">Our purpose</h2>
        <p className="mt-4 text-navy-700 leading-relaxed">
          The UK has a chronic shortage of homes and struggles to deliver
          necessary infrastructure. One reason is that the planning system is
          highly responsive to organised local opposition while supportive
          voices are often quieter and less coordinated.
        </p>
        <p className="mt-4 text-navy-700 leading-relaxed">
          Build On exists to change that balance. We provide tools, evidence and
          local networks so that people who want to see well-designed schemes
          approved can engage effectively — by submitting representations,
          speaking at committee, and supporting others to do the same.
        </p>

        <h2 className="text-2xl font-bold text-navy-950 mt-10">
          What we stand for
        </h2>
        <ul className="mt-4 text-navy-700 space-y-2 list-disc pl-5">
          <li>More homes, especially in places of high need and opportunity</li>
          <li>High-quality design that improves places rather than diminishes them</li>
          <li>Evidence over slogans — planning decisions should be grounded in facts</li>
          <li>Transparency and independence — we are not a front for developers</li>
          <li>Constructive engagement, not confrontation</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy-950 mt-10">Independence</h2>
        <p className="mt-4 text-navy-700 leading-relaxed">
          Build On is an independent initiative. We may work with housing
          associations, local groups and others who share the goal of more
          good homes, but we do not take instructions from developers or act as
          paid advocates for individual schemes. Transparency about funding and
          partnerships will always be maintained.
        </p>

        <h2 className="text-2xl font-bold text-navy-950 mt-10">
          Inspired by Networked Commons Governance
        </h2>
        <p className="mt-4 text-navy-700 leading-relaxed">
          Some of the thinking behind Build On draws on ideas developed in the
          Networked Commons Governance (NCG) project — particularly the value of
          organised, evidence-based citizen participation and antifragile local
          institutions. Build On stands alone as a practical campaign focused on
          planning and housing delivery.
        </p>

        <div className="mt-12">
          <Link
            href="/join"
            className="inline-flex items-center rounded-lg bg-build-green px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
          >
            Get involved
          </Link>
        </div>
      </div>
    </div>
  );
}
