"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#features", label: "기능" },
  { href: "#how-it-works", label: "사용방법" },
  { href: "#pricing", label: "요금제" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-xl backdrop-saturate-200">
      <nav className="mx-auto flex h-12 max-w-[980px] items-center justify-between px-6 lg:px-0">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/sliced-icon.svg"
            alt="Sliced"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="text-[17px] font-semibold tracking-tight text-foreground">
            Sliced
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-normal text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-80"
          >
            시작하기
          </a>
        </div>

        <button
          className="flex h-8 w-8 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
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
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-[980px] flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-surface"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 border-t border-border/40 pt-3">
              <a
                href="#cta"
                className="block rounded-full bg-foreground py-2.5 text-center text-sm font-medium text-background"
                onClick={() => setMobileOpen(false)}
              >
                무료로 시작하기
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
