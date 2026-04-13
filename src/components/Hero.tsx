export default function Hero() {
  return (
    <section className="bg-background px-2 pt-14 pb-12 sm:px-3 md:px-5 md:pt-16 md:pb-20">
      <div className="animate-scale-in relative mx-auto overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
        {/* video background */}
        <div className="relative aspect-[9/14] sm:aspect-[16/8] sm:min-h-[420px] md:min-h-[520px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full scale-130 object-cover"
          >
            <source src="/hero.webm" type="video/webm" />
          </video>

          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* text — bottom aligned, clean layout */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 sm:px-10 sm:pb-12 md:px-16 md:pb-16">
            <h1 className="animate-fade-in text-[32px] font-bold leading-[1.08] tracking-tight text-white sm:text-[44px] md:text-[64px]">
              Your characters live in a world
              <br />
              fans can enter.
            </h1>

            <p className="animate-fade-in-d1 mt-4 max-w-[480px] text-[14px] leading-relaxed text-white/70 sm:text-[15px] md:mt-5 md:text-[17px]">
              Turn your manga & anime universe into a Minecraft server.
              <br className="hidden sm:block" />
              Fans talk to your characters, explore your world, and spend.
            </p>

            <div className="animate-fade-in-d2 mt-6 md:mt-8">
              <a
                href="https://tally.so/r/ob71KP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-7 text-[14px] font-semibold text-background transition-opacity hover:opacity-90 md:h-12 md:px-8 md:text-[15px]"
              >
                Join as Creator
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
