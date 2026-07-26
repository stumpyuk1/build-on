import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Mic2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Speak at committee",
  description:
    "How to register and what to say when speaking in support of a planning application at committee.",
};

export default function SpeakPage() {
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
            Speak at committee
          </h1>
          <p className="mt-4 text-navy-200 text-lg">
            Many applications are decided by planning committee. A calm,
            three-minute support speech can balance a room full of objections.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* How it works */}
        <div className="rounded-2xl border border-navy-100 p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-semibold text-navy-950 mb-4">
            How public speaking usually works
          </h2>
          <ul className="space-y-3 text-navy-700">
            <li className="flex gap-3">
              <Clock className="text-build-green-dark shrink-0 mt-0.5" size={18} />
              <span>
                Most councils allow a fixed time — often <strong>3 minutes</strong>{" "}
                per speaker (sometimes shared if several people support the same
                side).
              </span>
            </li>
            <li className="flex gap-3">
              <Mic2 className="text-build-green-dark shrink-0 mt-0.5" size={18} />
              <span>
                You must <strong>register in advance</strong> — check the
                committee agenda page or the planning officer’s report for the
                deadline (often 24–48 hours before the meeting).
              </span>
            </li>
            <li>
              Speakers for and against are usually heard before members debate
              and vote. The chair controls the meeting; follow their directions.
            </li>
            <li>
              Rules vary by council. Always check the local authority’s “speaking
              at planning committee” page for exact process.
            </li>
          </ul>
        </div>

        {/* What to say */}
        <h2 className="text-2xl font-bold text-navy-950 mb-6">
          What to say in three minutes
        </h2>
        <p className="text-navy-700 leading-relaxed mb-6">
          Aim for one page of notes, spoken slowly. Structure beats length.
        </p>

        <div className="space-y-6 mb-12">
          <div className="rounded-xl border border-navy-100 p-5">
            <p className="text-sm font-semibold text-build-green-dark uppercase tracking-wide mb-2">
              0:00–0:20 — Who you are
            </p>
            <p className="text-navy-700 text-sm leading-relaxed">
              “Chair, members — my name is [Name]. I am a local resident /
              supporter of this application and I am speaking in favour of
              [REFERENCE / address].”
            </p>
          </div>
          <div className="rounded-xl border border-navy-100 p-5">
            <p className="text-sm font-semibold text-build-green-dark uppercase tracking-wide mb-2">
              0:20–1:20 — Need
            </p>
            <p className="text-navy-700 text-sm leading-relaxed">
              One or two facts: national shortfall, local waiting lists, or
              affordability. “We are not building enough homes. Supporting
              deliverable schemes like this is how the gap closes.”
            </p>
          </div>
          <div className="rounded-xl border border-navy-100 p-5">
            <p className="text-sm font-semibold text-build-green-dark uppercase tracking-wide mb-2">
              1:20–2:20 — This scheme
            </p>
            <p className="text-navy-700 text-sm leading-relaxed">
              Two specific positives from the proposal (location, design,
              affordable homes, brownfield, transport). Show you have looked at
              the application.
            </p>
          </div>
          <div className="rounded-xl border border-navy-100 p-5">
            <p className="text-sm font-semibold text-build-green-dark uppercase tracking-wide mb-2">
              2:20–3:00 — Close
            </p>
            <p className="text-navy-700 text-sm leading-relaxed">
              “Infrastructure and design concerns can be managed through
              conditions and contributions. I ask you to grant permission.” Then
              stop — do not overrun.
            </p>
          </div>
        </div>

        {/* Sample script */}
        <div className="rounded-2xl bg-navy-950 text-white p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">Sample script (~3 minutes)</h2>
          <div className="text-navy-100 text-sm leading-relaxed space-y-4">
            <p>
              Chair, members — thank you for the time. I am speaking in support of
              application [REFERENCE] at [ADDRESS].
            </p>
            <p>
              England is short of homes. Waiting lists for social housing run to
              over a million households, and last year we added only around
              208,000 net new dwellings against a need closer to 300,000 a year.
              Every deliverable scheme matters.
            </p>
            <p>
              This proposal would add homes in a location that can support them.
              [Add one sentence on design, affordable housing, or transport from
              the documents.]
            </p>
            <p>
              I recognise neighbours’ concerns about character and services.
              Those should be addressed through good design and proper
              contributions — not by refusing supply we clearly need. I ask the
              committee to grant permission.
            </p>
          </div>
        </div>

        {/* Do and don't */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="rounded-xl border border-navy-100 p-6">
            <h3 className="font-semibold text-navy-950 mb-3">Do</h3>
            <ul className="space-y-2 text-sm text-navy-700">
              <li>• Register on time</li>
              <li>• Practise once out loud</li>
              <li>• Address the chair and members</li>
              <li>• Stick to material planning points</li>
              <li>• Finish early if you can</li>
            </ul>
          </div>
          <div className="rounded-xl border border-navy-100 p-6">
            <h3 className="font-semibold text-navy-950 mb-3">Don’t</h3>
            <ul className="space-y-2 text-sm text-navy-700">
              <li>• Attack objectors or councillors</li>
              <li>• Read a long letter at full speed</li>
              <li>• Rely only on “we need homes” with no link to this site</li>
              <li>• Bring new evidence members have not seen unless allowed</li>
              <li>• Overrun your slot</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/toolkit/write"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-build-green px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
          >
            Write a representation
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
