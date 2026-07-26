import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LetterGenerator from "@/components/LetterGenerator";

export const metadata: Metadata = {
  title: "Letter generator",
  description:
    "Generate a clear, evidence-based planning representation in a few clicks.",
};

export default function GeneratorPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/toolkit"
            className="inline-flex items-center gap-2 text-navy-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Toolkit
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Letter generator
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl">
            Fill in the application details, choose your reasons, and copy a
            ready-to-submit representation. Personalise it before you send.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <LetterGenerator />

        <div className="mt-14 rounded-2xl border border-navy-100 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-navy-950 mb-3">
            Next steps
          </h2>
          <ol className="space-y-2 text-navy-700 text-sm list-decimal list-inside mb-6">
            <li>Copy the text and paste it into the council’s planning portal comment form.</li>
            <li>Check the consultation deadline on the application page.</li>
            <li>If the application goes to committee, consider registering to speak.</li>
          </ol>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/toolkit/write"
              className="inline-flex items-center gap-2 text-sm font-semibold text-build-green-dark hover:text-build-green"
            >
              Writing guide
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/toolkit/speak"
              className="inline-flex items-center gap-2 text-sm font-semibold text-build-green-dark hover:text-build-green"
            >
              Speak at committee
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/map"
              className="inline-flex items-center gap-2 text-sm font-semibold text-build-green-dark hover:text-build-green"
            >
              Find applications
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
