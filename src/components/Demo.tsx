"use client";

import Reveal from "./Reveal";

export default function Demo() {
  return (
    <section className="bg-light-bg py-20 md:py-28">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="text-center">
          <Reveal>
            <h2 className="text-[28px] font-bold tracking-tight text-light-fg md:text-[40px]">
              See it in action.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-[16px] text-light-muted md:text-[18px]">
              A creator&apos;s universe, turned into a world fans can walk through.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} duration={0.9}>
          <div className="mt-10 md:mt-14">
            <div className="relative overflow-hidden rounded-2xl border border-light-border bg-black shadow-2xl shadow-black/10">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/E6uD4sNuNqU?rel=0&modestbranding=1"
                  title="Sliced Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
