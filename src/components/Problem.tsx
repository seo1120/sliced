"use client";

import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="bg-light-bg py-20 md:py-28">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <Reveal>
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-light-fg md:text-[40px]">
            You have fans.
            <br />
            <span className="text-light-muted">But no way to monetize.</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-8 max-w-[540px] space-y-4 text-[15px] leading-relaxed text-light-muted md:text-[17px]">
          <Reveal delay={0.1}>
            <p>
              Fan art, comments, subscribers — the engagement is there,
              but revenue stops at ad money.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Merch? Upfront production costs. Games? Need a dev team.
              Licensing? Not at scale yet.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-medium text-light-fg">
              What if the world your fans already love
              <br className="hidden md:block" />
              could become an experience they pay for?
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
