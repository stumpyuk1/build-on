import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  MessageSquare,
  Users,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Map,
} from "lucide-react";

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
        {/* Three main tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: FileText,
              title: "Write a representation",
              body: "A step-by-step structure and sample wording so you cover material considerations and local housing need without the jargon.",
              href: "/toolkit/write",
              cta: "Start writing",
            },
            {
              icon: MessageSquare,
              title: "Speak at committee",
              body: "How to register to speak, what to say in three minutes, and how to stay constructive when the room is tense.",
              href: "/toolkit/speak",
              cta: "Speaking guide",
            },
            {
              icon: Users,
              title: "Organise locally",
              body: "Find or start a local group, share applications with neighbours, and coordinate supportive comments before the deadline.",
              href: "/groups",
              cta: "Local groups",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-navy-100 p-6 sm:p-8 flex flex-col hover:border-build-green/40 transition-colors"
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

        {/* What makes a strong representation */}
        <div className="rounded-2xl bg-navy-50 border border-navy-100 p-8 sm:p-10 mb-12">
          <h2 className="text-xl font-semibold text-navy-950 mb-5">
            What makes a strong representation?
          </h2>
          <ul className="space-y-4 text-navy-700">
            <li className="flex gap-3">
              <CheckCircle2
                className="text-build-green-dark shrink-0 mt-0.5"
                size={20}
              />
              <span>
                <strong className="text-navy-950">Material considerations only.</strong>{" "}
                Housing need, design quality, transport, sustainability, economic
                benefit and infrastructure are relevant. Personal attacks,
                property values as a pure private interest, and “we don’t want
                change” are not.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2
                className="text-build-green-dark shrink-0 mt-0.5"
                size={20}
              />
              <span>
                <strong className="text-navy-950">Be specific.</strong> Name the
                application and say clearly that you support it (or support it
                subject to conditions). Vague generalities carry less weight.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2
                className="text-build-green-dark shrink-0 mt-0.5"
                size={20}
              />
              <span>
                <strong className="text-navy-950">Use local evidence.</strong>{" "}
                Waiting lists, affordability ratios, delivery shortfalls and key
                worker shortages help officers and members place the scheme in
                context. The Evidence Hub has the national figures; local plans
                and monitoring reports have the local ones.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2
                className="text-build-green-dark shrink-0 mt-0.5"
                size={20}
              />
              <span>
                <strong className="text-navy-950">Stay constructive.</strong>{" "}
                Officers and members respond better to reasoned support than to
                slogans. Polite, factual comments are more likely to be quoted
                in reports.
              </span>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <Link
            href="/evidence"
            className="rounded-xl border border-navy-100 p-6 hover:border-build-green/40 transition-colors flex gap-4 items-start"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark shrink-0">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-navy-950 mb-1">Evidence Hub</h3>
              <p className="text-sm text-navy-600">
                Housing need, affordability, delivery stats and myth-busting to
                ground your comments in the numbers.
              </p>
            </div>
          </Link>
          <Link
            href="/map"
            className="rounded-xl border border-navy-100 p-6 hover:border-build-green/40 transition-colors flex gap-4 items-start"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark shrink-0">
              <Map size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-navy-950 mb-1">
                Applications map
              </h3>
              <p className="text-sm text-navy-600">
                Find residential planning applications near you and open the
                council page to comment.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
