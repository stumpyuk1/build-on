import type { Metadata } from "next";
import Link from "next/link";
import { FileText, MessageSquare, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Support Toolkit",
  description:
    "Step-by-step guidance and templates for submitting effective, evidence-based representations on planning applications.",
};

export default function ToolkitPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Support Toolkit
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl">
            Clear steps and ready-to-use tools so your representation is
            constructive, evidence-based and taken seriously by officers and
            councillors.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FileText,
              title: "Write a representation",
              body: "Use our structured templates. They help you cover material considerations and include local housing need data without the jargon.",
              href: "/toolkit/write",
              cta: "Start writing",
            },
            {
              icon: MessageSquare,
              title: "Speak at committee",
              body: "Many applications go to planning committee. Learn how to register to speak, what to say in three minutes, and how to stay constructive.",
              href: "/toolkit/speak",
              cta: "Speaking guide",
            },
            {
              icon: Users,
              title: "Organise locally",
              body: "Find or start a local group, share applications with neighbours, and coordinate supportive comments so they arrive before the deadline.",
              href: "/groups",
              cta: "Local groups",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-navy-100 p-6 sm:p-8 flex flex-col"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark mb-5">
                <item.icon size={22} />
              </div>
              <h2 className="text-lg font-semibold text-navy-950 mb-2">
                {item.title}
              </h2>
              <p className="text-navy-600 leading-relaxed flex-1">{item.body}</p>
              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 text-build-green-dark font-semibold hover:text-build-green transition-colors"
              >
                {item.cta}
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-navy-50 border border-navy-100 p-8 sm:p-10">
          <h2 className="text-xl font-semibold text-navy-950 mb-3">
            What makes a strong representation?
          </h2>
          <ul className="space-y-3 text-navy-700">
            <li className="flex gap-3">
              <span className="text-build-green-dark font-bold">1.</span>
              Stick to material planning considerations (housing need, design
              quality, transport, sustainability, economic benefit).
            </li>
            <li className="flex gap-3">
              <span className="text-build-green-dark font-bold">2.</span>
              Be specific about the scheme you support and why it is
              appropriate for the site.
            </li>
            <li className="flex gap-3">
              <span className="text-build-green-dark font-bold">3.</span>
              Include local evidence where possible (waiting lists, affordability
              ratios, key worker shortages).
            </li>
            <li className="flex gap-3">
              <span className="text-build-green-dark font-bold">4.</span>
              Stay polite and constructive — officers and members respond better
              to reasoned support than to slogans.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
