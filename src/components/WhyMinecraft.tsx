const stats = [
  { value: "170M+", label: "Monthly active players" },
  { value: "0", label: "App installs needed" },
  { value: "∞", label: "Mod & server support" },
];

export default function WhyMinecraft() {
  return (
    <section className="border-t border-border/40 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[860px] px-6 text-center">
        <h2 className="text-[28px] font-bold leading-tight tracking-tight text-foreground md:text-[40px]">
          Not a new app.
          <br />
          <span className="text-muted">A platform with hundreds of millions.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-relaxed text-muted md:text-[17px]">
          Minecraft has 170M+ monthly active users. No app downloads,
          no sign-ups — fans just join a server and start exploring.
          The mod ecosystem is officially supported with zero restrictions.
        </p>

        <div className="mx-auto mt-12 grid max-w-[600px] grid-cols-3 gap-4 md:mt-14">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-background p-5 md:p-6">
              <div className="text-[28px] font-bold tracking-tight text-accent md:text-[36px]">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] leading-snug text-muted md:text-[13px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[13px] text-muted/60">
          Long-term, we&apos;re expanding to more immersive 3D/4D experiences.
          Minecraft is the starting point.
        </p>
      </div>
    </section>
  );
}
