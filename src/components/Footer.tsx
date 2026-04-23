"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#d4580a] via-[#ff751f] to-[#ffaa60] pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="relative mx-auto max-w-[1200px] px-8 md:px-12">
        <Reveal>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/sliced-icon.svg" alt="Sliced" width={22} height={22} className="rounded" />
                <span className="text-[14px] font-semibold text-white">Sliced</span>
              </div>
              <p className="mt-2 text-[11px] text-white/40">
                &copy; {new Date().getFullYear()} Sliced. All rights reserved.
              </p>
            </div>

            <a
              href="mailto:lumi@slicedcomic.com"
              className="text-[13px] text-white/70 transition-colors hover:text-white"
            >
              lumi@slicedcomic.com
            </a>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none mt-32 select-none overflow-hidden text-center md:mt-48">
        <Reveal direction="up" duration={1} distance={48}>
          <span
            className="font-display inline-block text-white/80"
            style={{
              fontSize: "clamp(90px, 24vw, 360px)",
              lineHeight: 0.85,
              letterSpacing: "0.15em",
            }}
          >
            SLICED
          </span>
        </Reveal>
      </div>
    </footer>
  );
}
