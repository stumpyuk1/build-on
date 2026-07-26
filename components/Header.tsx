"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "/map", label: "Map" },
  { href: "/toolkit", label: "Toolkit" },
  { href: "/evidence", label: "Evidence" },
  { href: "/groups", label: "Local Groups" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur border-b border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
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

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-navy-200 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={clsx(
          "md:hidden border-t border-navy-800 bg-navy-950",
          open ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-navy-200 hover:bg-navy-900 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="mt-2 block rounded-md bg-build-green px-3 py-2 text-center text-base font-semibold text-navy-950"
            onClick={() => setOpen(false)}
          >
            Join
          </Link>
        </div>
      </div>
    </header>
  );
}
