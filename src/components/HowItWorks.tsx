"use client";

import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Share your world",
    description:
      "Send us your character profiles, background art, and story. We'll build it into an immersive 3D world.",
  },
  {
    number: "02",
    title: "Open to fans",
    description:
      "Share the link with your community. Fans join and explore your universe firsthand.",
  },
  {
    number: "03",
    title: "Earn revenue",
    description:
      "Access passes, in-game items, special events generate income. Revenue is shared with you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-light-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="text-center">
          <Reveal>
            <h2 className="text-[28px] font-bold tracking-tight text-light-fg md:text-[40px]">
              Three steps. That&apos;s it.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-[800px] md:mt-16">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.15} direction="left">
                <div className="group relative flex gap-6 py-8 md:gap-10 md:py-10">
                  {i < steps.length - 1 && (
                    <div className="absolute top-16 left-[23px] h-[calc(100%-32px)] w-px bg-gradient-to-b from-accent/40 to-light-border md:left-[31px]" />
                  )}

                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-[14px] font-bold text-accent md:h-16 md:w-16 md:text-[16px]">
                    {step.number}
                  </div>

                  <div className="pt-1 md:pt-3">
                    <h3 className="text-[18px] font-semibold tracking-tight text-light-fg md:text-[20px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-light-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
