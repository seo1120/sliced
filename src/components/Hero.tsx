export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-glow absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[860px] px-6 text-center">
        <p className="animate-fade-in text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
          For Creators with IP
        </p>

        <h1 className="animate-fade-in-d1 mt-6 text-[36px] font-bold leading-[1.1] tracking-tight text-foreground md:text-[64px]">
          Your characters live
          <br />
          in a world fans
          <br />
          <span className="text-accent">can enter.</span>
        </h1>

        <p className="animate-fade-in-d2 mx-auto mt-6 max-w-[520px] text-[16px] leading-relaxed text-muted md:text-[18px]">
          Turn your manga & anime universe into a Minecraft server.
          <br className="hidden md:block" />
          Fans talk to your characters, explore your world, and spend.
        </p>

        <div className="animate-fade-in-d3 mt-10">
          <a
            href="#apply"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-[15px] font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
          >
            Join the Creator Interview
          </a>
        </div>
      </div>

      {/* hero visual placeholder */}
      <div className="animate-scale-in mx-auto mt-16 max-w-[980px] px-6 md:mt-20">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface md:rounded-3xl">
          <div className="flex aspect-[16/9] items-center justify-center">
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center gap-4">
                {/* 2D side placeholder */}
                <div className="flex h-32 w-28 flex-col items-center justify-center rounded-xl border border-border bg-surface-light text-muted md:h-44 md:w-40">
                  <svg className="mb-2 h-10 w-10 opacity-30 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                  </svg>
                  <span className="text-[10px] tracking-wide opacity-40 md:text-xs">Original 2D</span>
                </div>

                {/* arrow */}
                <svg className="h-6 w-6 text-accent md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

                {/* Minecraft side placeholder */}
                <div className="flex h-32 w-28 flex-col items-center justify-center rounded-xl border border-accent/30 bg-accent/5 text-accent md:h-44 md:w-40">
                  <svg className="mb-2 h-10 w-10 opacity-40 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                  <span className="text-[10px] tracking-wide opacity-50 md:text-xs">In Minecraft</span>
                </div>
              </div>
              <span className="text-[11px] tracking-wider text-muted/50 md:text-xs">
                HERO IMAGE — Before / After mockup
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
