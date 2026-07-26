import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notice for the Build On website.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl font-bold text-navy-950 tracking-tight mb-6">
          Privacy notice
        </h1>
        <div className="text-navy-700 space-y-4 leading-relaxed">
          <p>
            Build On is committed to handling any personal data we collect
            responsibly and in line with UK GDPR.
          </p>
          <p>
            At present this site is largely static. If you subscribe to updates
            or register interest in local groups we will only use your email for
            that purpose and will not share it with third parties for marketing.
          </p>
          <p>
            We use open government planning data. We do not collect precise
            location data from your browser beyond what is necessary to display
            maps you request.
          </p>
          <p>
            A fuller privacy policy will be published before any mailing list or
            user accounts go live. Questions:{" "}
            <a
              href="mailto:hello@buildon.org.uk"
              className="text-build-green-dark underline"
            >
              hello@buildon.org.uk
            </a>{" "}
            (placeholder).
          </p>
        </div>
      </div>
    </div>
  );
}
