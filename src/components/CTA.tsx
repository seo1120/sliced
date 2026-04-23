"use client";

import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="apply" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[580px] px-6 text-center">
        <Reveal>
          <h2 className="text-[28px] font-bold tracking-tight text-foreground md:text-[40px]">
            It starts with a
            <br />
            <span className="text-accent">30-minute conversation.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-muted md:text-[17px]">
            We&apos;re in pilot phase, looking for founding creators to build with.
            Leave your details and we&apos;ll craft a tailored proposal for your IP.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <a
              href="https://tally.so/r/ob71KP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-10 text-[16px] font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
            >
              Apply for Interview
            </a>
            <p className="mt-4 text-[13px] text-muted/60">
              Takes less than 2 minutes. We&apos;ll respond within 3 days.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
