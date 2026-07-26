import type { Metadata } from "next";
import { Mail, Users, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Join",
  description: "Get involved with Build On – register interest, join a local group, or stay updated.",
};

export default function JoinPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get involved
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl">
            Whether you have five minutes or want to help build a local group,
            there is a way to contribute.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          <div className="rounded-xl border border-navy-100 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark">
                <Mail size={22} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-navy-950">
                  Stay updated
                </h2>
                <p className="mt-2 text-navy-600 leading-relaxed">
                  Occasional updates on new tools, major applications and local
                  activity. No spam.
                </p>
                <form className="mt-5 flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 rounded-lg border border-navy-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-build-green/50"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="mt-2 text-xs text-navy-400">
                  Form is a placeholder for now – backend coming soon.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-navy-100 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark">
                <Users size={22} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-navy-950">
                  Local action
                </h2>
                <p className="mt-2 text-navy-600 leading-relaxed">
                  Interested in helping form or join a local group? Tell us
                  roughly where you are and we will connect people as activity
                  grows.
                </p>
                <p className="mt-4 text-sm text-navy-500">
                  Email{" "}
                  <a
                    href="mailto:hello@buildon.org.uk"
                    className="text-build-green-dark underline"
                  >
                    hello@buildon.org.uk
                  </a>{" "}
                  (placeholder address) with your area.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-navy-100 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark">
                <Share2 size={22} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-navy-950">
                  Spread the word
                </h2>
                <p className="mt-2 text-navy-600 leading-relaxed">
                  The most useful thing many people can do is simply tell
                  friends, colleagues and neighbours that constructive support
                  for good schemes is possible and worthwhile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
