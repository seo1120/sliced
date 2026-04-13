export default function Hero() {
  return (
    <section className="bg-background px-2 pt-14 pb-12 sm:px-3 md:px-5 md:pt-16 md:pb-20">
      <div className="animate-scale-in relative mx-auto overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
        {/* video background */}
        <div className="relative aspect-[9/16] sm:aspect-[16/9] sm:min-h-[480px] md:min-h-[600px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full scale-130 object-cover"
          >
            <source src="/hero.webm" type="video/webm" />
          </video>

          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* text centered in video */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center sm:px-8 md:px-16">
            <p className="animate-fade-in text-[11px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-[12px] md:text-[13px]">
              For Creators with IP
            </p>

            <h1 className="animate-fade-in-d1 mt-3 text-[24px] font-bold leading-[1.15] tracking-tight text-white sm:mt-4 sm:text-[32px] md:text-[56px]">
              Your characters live
              <br className="sm:hidden" />
              {" "}in a world
              <br />
              fans <span className="text-accent">can enter.</span>
            </h1>

            <p className="animate-fade-in-d2 mx-auto mt-3 max-w-[480px] text-[13px] leading-relaxed text-white/70 sm:mt-4 sm:text-[14px] md:text-[17px]">
              Turn your manga & anime universe into a Minecraft server.
              Fans talk to your characters, explore your world, and spend.
            </p>

            <div className="animate-fade-in-d3 mt-6 sm:mt-7">
              <a
                href="https://tally.so/r/ob71KP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-6 text-[13px] font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 sm:h-11 sm:px-7 sm:text-[14px] md:h-12 md:px-8 md:text-[15px]"
              >
                Join the Creator Interview
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
