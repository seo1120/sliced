"use client";

import Reveal from "./Reveal";

const stats = [
  { value: "3D", label: "Immersive voxel worlds" },
  { value: "0", label: "App installs needed" },
  { value: "AI", label: "Characters that talk back" },
];

export default function WhyMinecraft() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[860px] px-6 text-center">
        <Reveal>
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-foreground md:text-[40px]">
            Not just content.
            <br />
            <span className="text-muted">A world fans can live in.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-relaxed text-muted md:text-[17px]">
            We build explorable 3D worlds inspired by a familiar blocky aesthetic
            that billions already know. No downloads, no sign-ups —
            fans just enter and start exploring.
          </p>
        </Reveal>

        <div className="pixel-grid mx-auto mt-12 grid max-w-[600px] grid-cols-3 gap-4 md:mt-14">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.15 + i * 0.1} direction="up">
              <div className="rounded-xl border border-border bg-surface p-5 md:p-6">
                <div className="text-[28px] font-bold tracking-tight text-accent md:text-[36px]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] leading-snug text-muted md:text-[13px]">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-8 text-[13px] text-muted/60">
            Long-term, we&apos;re expanding to more immersive 3D/4D experiences.
            This is just the beginning.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
