import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Copy } from "lucide-react";

export const metadata: Metadata = {
  title: "Write a representation",
  description:
    "Step-by-step structure and sample wording for a supportive planning representation.",
};

export default function WritePage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/toolkit"
            className="inline-flex items-center gap-2 text-navy-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Toolkit
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Write a representation
          </h1>
          <p className="mt-4 text-navy-200 text-lg">
            A clear structure and sample paragraphs you can adapt. Keep it short,
            specific and factual.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Before you start */}
        <div className="rounded-2xl border border-navy-100 p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-semibold text-navy-950 mb-4">
            Before you start
          </h2>
          <ol className="space-y-3 text-navy-700 list-decimal list-inside">
            <li>
              Find the application on the council planning portal (or via our{" "}
              <Link href="/map" className="text-build-green-dark underline">
                map
              </Link>
              ) and note the reference number and address.
            </li>
            <li>
              Check the consultation deadline — late comments are often still
              accepted but may carry less weight.
            </li>
            <li>
              Skim the key documents (location plan, design and access statement,
              planning statement) so you can say something specific about the
              scheme.
            </li>
            <li>
              Decide whether you support it outright or support it subject to
              conditions (e.g. design tweaks, affordable housing, transport
              mitigation).
            </li>
          </ol>
        </div>

        {/* Structure */}
        <h2 className="text-2xl font-bold text-navy-950 mb-6">
          Suggested structure
        </h2>

        <div className="space-y-8 mb-14">
          <div>
            <h3 className="text-lg font-semibold text-navy-950 mb-2">
              1. State who you are and what you support
            </h3>
            <p className="text-navy-700 leading-relaxed mb-3">
              Open clearly. Officers need to know this is a support comment, not
              an objection.
            </p>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-5 text-navy-800 text-sm leading-relaxed">
              <p className="italic">
                “I am a local resident / worker / supporter of better housing
                supply and I wish to support planning application [REFERENCE] at
                [ADDRESS].”
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-950 mb-2">
              2. Housing need (material consideration)
            </h3>
            <p className="text-navy-700 leading-relaxed mb-3">
              Link the scheme to the wider need for homes. Use national figures
              from the{" "}
              <Link href="/evidence" className="text-build-green-dark underline">
                Evidence Hub
              </Link>{" "}
              and local figures if you have them.
            </p>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-5 text-navy-800 text-sm leading-relaxed">
              <p className="italic">
                “England has more than 1.3 million households on social housing
                waiting lists and delivered only around 208,600 net additional
                dwellings in 2024–25 — well below the pace required to meet
                assessed need. This scheme would make a positive contribution to
                local housing supply.”
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-950 mb-2">
              3. Why this scheme is appropriate (be specific)
            </h3>
            <p className="text-navy-700 leading-relaxed mb-3">
              Pick two or three points that fit the application: location,
              design, mix of homes, brownfield use, access to public transport,
              affordable housing offer, sustainability.
            </p>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-5 text-navy-800 text-sm leading-relaxed space-y-2">
              <p className="italic">
                “The site is well located for [public transport / local services
                / employment]. The proposed design appears to respond to the
                surrounding context. The inclusion of affordable / social homes
                is particularly welcome given local need.”
              </p>
              <p className="text-navy-600 not-italic text-xs">
                Adapt this — only claim what you can reasonably say from the
                documents.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-950 mb-2">
              4. Address concerns constructively (optional)
            </h3>
            <p className="text-navy-700 leading-relaxed mb-3">
              If neighbours raise infrastructure or design points, you can note
              that mitigation and conditions exist for a reason — without
              dismissing genuine issues.
            </p>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-5 text-navy-800 text-sm leading-relaxed">
              <p className="italic">
                “Concerns about infrastructure and character should be addressed
                through good design and appropriate developer contributions. They
                do not remove the need for more homes in this area.”
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-950 mb-2">
              5. Close clearly
            </h3>
            <div className="rounded-xl bg-navy-50 border border-navy-100 p-5 text-navy-800 text-sm leading-relaxed">
              <p className="italic">
                “I support this application subject to appropriate design and
                affordable housing provision. I ask the Council to grant
                permission.”
              </p>
            </div>
          </div>
        </div>

        {/* Full sample */}
        <div className="rounded-2xl border border-navy-100 p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-semibold text-navy-950 mb-4">
            Full sample (short version)
          </h2>
          <div className="rounded-xl bg-navy-950 text-navy-100 p-6 text-sm leading-relaxed space-y-4">
            <p>
              I wish to support planning application [REFERENCE] at [ADDRESS].
            </p>
            <p>
              England has more than 1.3 million households on social housing
              waiting lists and delivered only around 208,600 net additional
              dwellings in 2024–25 — well below the pace required to meet assessed
              need. This scheme would make a positive contribution to local
              housing supply.
            </p>
            <p>
              The site appears suitable for residential development and the
              proposal would help address local need for homes, including
              affordable housing where proposed. Concerns about design and
              infrastructure can and should be managed through conditions and
              contributions; they are not a reason to refuse much-needed supply.
            </p>
            <p>
              I support the application subject to appropriate design and
              affordable housing provision, and ask the Council to grant
              permission.
            </p>
          </div>
          <p className="mt-4 text-sm text-navy-600">
            Copy, personalise, and submit via the council’s planning portal.
            Always include the application reference.
          </p>
        </div>

        {/* Tips */}
        <div className="rounded-2xl bg-navy-50 border border-navy-100 p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-semibold text-navy-950 mb-4">
            Practical tips
          </h2>
          <ul className="space-y-2 text-navy-700 text-sm">
            <li>• One page is enough for most comments.</li>
            <li>• Put the application reference in the subject line or first sentence.</li>
            <li>• Avoid copying the same text as dozens of others word-for-word if you can personalise slightly — but a clear template is still far better than silence.</li>
            <li>• Submit before the deadline; keep a copy or screenshot of your submission.</li>
            <li>• If the application goes to committee, consider registering to speak (see the Speaking guide).</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/toolkit/speak"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-build-green px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
          >
            Speaking at committee
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/evidence"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-800 hover:border-build-green/40 transition-colors"
          >
            Evidence Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
