import type { Metadata } from "next";
import Link from "next/link";
import { Users, MapPin, Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Local Groups",
  description:
    "Find or start a local Build On group to support well-designed housing and infrastructure in your area.",
};

export default function GroupsPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Local Groups
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl">
            Organised local support is more effective than isolated comments.
            Find people near you or start a group.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="rounded-2xl border border-dashed border-navy-200 bg-navy-50/50 p-10 text-center">
          <Users className="mx-auto text-navy-400 mb-4" size={40} />
          <h2 className="text-xl font-semibold text-navy-950 mb-2">
            Groups directory coming soon
          </h2>
          <p className="text-navy-600 max-w-md mx-auto mb-6">
            We are setting up a simple directory so you can find active local
            champions and groups. In the meantime, register your interest and
            we will put you in touch when activity starts in your area.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 rounded-lg bg-build-green px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
          >
            <Plus size={16} />
            Register interest
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-navy-100 p-6">
            <MapPin className="text-build-green-dark mb-3" size={22} />
            <h3 className="font-semibold text-navy-950 mb-2">
              Starting a group
            </h3>
            <p className="text-sm text-navy-600 leading-relaxed">
              Begin with a handful of people who care about housing in your
              area. Share applications, co-ordinate comments before deadlines,
              and occasionally attend planning committees together. We will
              provide simple starter materials.
            </p>
          </div>
          <div className="rounded-xl border border-navy-100 p-6">
            <Users className="text-build-green-dark mb-3" size={22} />
            <h3 className="font-semibold text-navy-950 mb-2">
              What groups do
            </h3>
            <p className="text-sm text-navy-600 leading-relaxed">
              Track local applications, circulate evidence packs, help members
              write representations, and keep a constructive presence at
              committee when major schemes are decided. No slogans required —
              just organised, polite support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
