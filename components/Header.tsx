"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "/map", label: "Map" },
  { href: "/portals", label: "Portals" },
  { href: "/toolkit", label: "Toolkit" },
  { href: "/evidence", label: "Evidence" },
  { href: "/blog", label: "Blog" },
  { href: "/groups", label: "Local Groups" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur border-b border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/logo.svg"
              alt="Build On"
              width={120}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop / large tablet horizontal nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="rounded-md bg-build-green px-4 py-2 text-sm font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
            >
              Join
            </Link>
          </nav>

          {/* MENU burger — phone & smaller tablets */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center gap-2 rounded-md border border-navy-700 bg-navy-900/80 px-3 py-2 text-navy-100 hover:border-build-green/50 hover:text-white transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            <span className="text-sm font-semibold tracking-wide">MENU</span>
          </button>
        </div>
      </div>

      <div
        id="site-menu"
        className={clsx(
          "lg:hidden border-t border-navy-800 bg-navy-950",
          open ? "block" : "hidden"
        )}
      >
        <nav className="space-y-1 px-4 pb-4 pt-2" aria-label="Site">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2.5 text-base font-medium text-navy-200 hover:bg-navy-900 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="mt-2 block rounded-md bg-build-green px-3 py-2.5 text-center text-base font-semibold text-navy-950"
            onClick={() => setOpen(false)}
          >
            Join
          </Link>
        </nav>
      </div>
    </header>
  );
}
