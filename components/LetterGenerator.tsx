"use client";

import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";

const REASON_OPTIONS = [
  {
    id: "need",
    label: "Housing need",
    text: "England continues to deliver far fewer homes than assessed need, with over a million households on social housing waiting lists and net additions well below the pace required nationally.",
  },
  {
    id: "location",
    label: "Suitable location",
    text: "The site is appropriately located for residential development relative to local services and the existing settlement pattern.",
  },
  {
    id: "design",
    label: "Design quality",
    text: "The design of the proposal appears capable of responding positively to its context, subject to the detailed conditions that planning can secure.",
  },
  {
    id: "affordable",
    label: "Affordable / social homes",
    text: "The inclusion of affordable or social housing, where proposed, is particularly welcome given acute local and national need.",
  },
  {
    id: "land",
    label: "Efficient use of land",
    text: "Making efficient use of this site for homes is consistent with the need to boost supply in sustainable locations.",
  },
  {
    id: "transport",
    label: "Transport / accessibility",
    text: "The location offers reasonable access to public transport or local amenities, supporting a sustainable pattern of development.",
  },
  {
    id: "economy",
    label: "Economic benefit",
    text: "Delivery of the scheme would support construction activity and help meet housing needs that underpin a functioning local economy.",
  },
] as const;

type ReasonId = (typeof REASON_OPTIONS)[number]["id"];

export default function LetterGenerator() {
  const [reference, setReference] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("resident of the United Kingdom");
  const [supportType, setSupportType] = useState<"full" | "conditional">("conditional");
  const [reasons, setReasons] = useState<ReasonId[]>(["need", "location"]);
  const [extra, setExtra] = useState("");
  const [includeStats, setIncludeStats] = useState(true);
  const [copied, setCopied] = useState(false);

  function toggleReason(id: ReasonId) {
    setReasons((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  }

  const letter = useMemo(() => {
    const ref = reference.trim() || "[APPLICATION REFERENCE]";
    const site = address.trim() || "[SITE ADDRESS]";
    const who = name.trim()
      ? `My name is ${name.trim()}. I am a ${capacity}`
      : `I am a ${capacity}`;

    const opening =
      supportType === "full"
        ? `${who} and I wish to support planning application ${ref} at ${site} in full.`
        : `${who} and I wish to support planning application ${ref} at ${site}, subject to appropriate conditions.`;

    const paragraphs: string[] = [opening];

    if (includeStats) {
      paragraphs.push(
        "England has more than 1.3 million households on social housing waiting lists and delivered only around 208,600 net additional dwellings in 2024–25 — well below the pace required to meet assessed need. Supporting deliverable residential schemes is a material consideration in addressing that shortfall."
      );
    }

    const selected = REASON_OPTIONS.filter((r) => reasons.includes(r.id));
    if (selected.length > 0) {
      const body = selected.map((r) => r.text).join(" ");
      paragraphs.push(
        `In relation to this application: ${body}`
      );
    }

    if (extra.trim()) {
      paragraphs.push(extra.trim());
    }

    paragraphs.push(
      "Concerns about design, character and infrastructure can and should be addressed through good design and appropriate developer contributions. They do not remove the need for more homes."
    );

    paragraphs.push(
      supportType === "full"
        ? "I support this application and ask the Council to grant planning permission."
        : "I support this application subject to appropriate design and affordable housing provision, and ask the Council to grant planning permission."
    );

    paragraphs.push(
      "For the avoidance of doubt, I do not know the applicant, I have no financial interest in this development, and I am not connected to the construction industry."
    );

    return paragraphs.join("\n\n");
  }, [
    reference,
    address,
    name,
    capacity,
    supportType,
    reasons,
    extra,
    includeStats,
  ]);

  async function copyLetter() {
    try {
      await navigator.clipboard.writeText(letter);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select text area if clipboard fails
      const el = document.getElementById("generated-letter") as HTMLTextAreaElement | null;
      if (el) {
        el.select();
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Form */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-navy-950 mb-1.5">
            Application reference <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="e.g. 24/01234/FUL"
            className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-build-green/40 focus:border-build-green"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy-950 mb-1.5">
            Site address <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="e.g. Land at Example Road, Sunderland"
            className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-build-green/40 focus:border-build-green"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-navy-950 mb-1.5">
              Your name (optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="As you want it to appear"
              className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-build-green/40 focus:border-build-green"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy-950 mb-1.5">
              Writing as
            </label>
            <select
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-build-green/40 focus:border-build-green bg-white"
            >
              <option value="resident of the United Kingdom">
                Resident of the United Kingdom
              </option>
              <option value="local resident">Local resident</option>
              <option value="local worker">Local worker</option>
              <option value="supporter of better housing supply">
                Supporter of housing supply
              </option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy-950 mb-2">
            Type of support
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="supportType"
                checked={supportType === "conditional"}
                onChange={() => setSupportType("conditional")}
                className="text-build-green focus:ring-build-green"
              />
              <span className="text-sm text-navy-800">
                Support subject to conditions
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="supportType"
                checked={supportType === "full"}
                onChange={() => setSupportType("full")}
                className="text-build-green focus:ring-build-green"
              />
              <span className="text-sm text-navy-800">Support in full</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy-950 mb-2">
            Reasons to include
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {REASON_OPTIONS.map((opt) => (
              <label
                key={opt.id}
                className="flex items-center gap-2 cursor-pointer text-sm text-navy-800"
              >
                <input
                  type="checkbox"
                  checked={reasons.includes(opt.id)}
                  onChange={() => toggleReason(opt.id)}
                  className="rounded border-navy-300 text-build-green focus:ring-build-green"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy-950 mb-1.5">
            Extra sentence (optional)
          </label>
          <textarea
            value={extra}
            onChange={(e) => setExtra(e.target.value)}
            rows={3}
            placeholder="Anything specific about this scheme you want to add…"
            className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-build-green/40 focus:border-build-green resize-y"
          />
        </div>

        <label className="flex items-center gap-2 cursor-pointer text-sm text-navy-800">
          <input
            type="checkbox"
            checked={includeStats}
            onChange={(e) => setIncludeStats(e.target.checked)}
            className="rounded border-navy-300 text-build-green focus:ring-build-green"
          />
          Include national housing need statistics
        </label>
      </div>

      {/* Output */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-navy-950 uppercase tracking-wide">
            Your representation
          </h3>
          <button
            type="button"
            onClick={copyLetter}
            className="inline-flex items-center gap-2 rounded-lg bg-build-green px-3.5 py-2 text-sm font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
          >
            {copied ? (
              <>
                <Check size={16} />
                Copied
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy text
              </>
            )}
          </button>
        </div>
        <textarea
          id="generated-letter"
          readOnly
          value={letter}
          rows={20}
          className="w-full flex-1 rounded-xl border border-navy-200 bg-navy-50 px-4 py-4 text-sm text-navy-900 leading-relaxed focus:outline-none resize-y min-h-[320px]"
        />
        <p className="mt-3 text-xs text-navy-500 leading-relaxed">
          Review and personalise before submitting via the council planning
          portal. Always include the application reference. This tool does not
          submit comments for you.
        </p>
      </div>
    </div>
  );
}
