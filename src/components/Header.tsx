"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/sliced-icon.svg" alt="Sliced" width={26} height={26} className="rounded-md" />
          <span className="text-[16px] font-semibold tracking-tight text-foreground">Sliced</span>
        </Link>

        <a
          href="#apply"
          className="hidden rounded-full bg-accent px-5 py-1.5 text-[13px] font-semibold text-white transition-colors hover:bg-accent-hover sm:inline-flex"
        >
          Join as Creator
        </a>

        <button
          className="flex h-8 w-8 items-center justify-center sm:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg className="h-4 w-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/40 bg-background/95 px-6 py-4 backdrop-blur-xl sm:hidden">
          <a
            href="#apply"
            className="block rounded-full bg-accent py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Join as Creator
          </a>
        </div>
      )}
    </header>
  );
}
