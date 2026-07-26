import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300 border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-lg font-bold text-white">BUILD</span>
              <span className="text-lg font-bold text-build-green">ON</span>
            </div>
            <p className="text-sm max-w-md leading-relaxed">
              Evidence-based support for well-designed homes and infrastructure
              across the UK. Helping people engage constructively with the
              planning system.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/map" className="hover:text-build-green transition-colors">
                  Planning Map
                </Link>
              </li>
              <li>
                <Link href="/portals" className="hover:text-build-green transition-colors">
                  Planning portals
                </Link>
              </li>
              <li>
                <Link href="/toolkit" className="hover:text-build-green transition-colors">
                  Support Toolkit
                </Link>
              </li>
              <li>
                <Link href="/evidence" className="hover:text-build-green transition-colors">
                  Evidence Hub
                </Link>
              </li>
              <li>
                <Link href="/groups" className="hover:text-build-green transition-colors">
                  Local Groups
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-build-green transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-build-green transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-build-green transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-navy-400">
          <p>
            © {new Date().getFullYear()} Build On. Open data powered by{" "}
            <a
              href="https://www.planning.data.gov.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-build-green"
            >
              planning.data.gov.uk
            </a>
            .
          </p>
          <p className="text-navy-500">
            Inspired by principles of Networked Commons Governance.
          </p>
        </div>
      </div>
    </footer>
  );
}
