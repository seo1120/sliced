const criteria = [
  "Creators with character-driven IP — manga, webtoons, animation, comics",
  "Growing or established fandoms (social media, communities, etc.)",
  "Interested in monetizing IP but haven't found the right way yet",
  "Open to new approaches and early-stage collaboration",
];

export default function TargetCreators() {
  return (
    <section className="border-t border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-[720px] px-6">
        <div className="text-center">
          <h2 className="text-[28px] font-bold tracking-tight text-foreground md:text-[40px]">
            Who we&apos;re looking for.
          </h2>
        </div>

        <ul className="mt-10 space-y-4 md:mt-12">
          {criteria.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5 md:p-6"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[15px] leading-relaxed text-foreground/90">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-[14px] text-muted">
          No genre restrictions — fantasy, slice-of-life, horror, sci-fi, all welcome.
        </p>
      </div>
    </section>
  );
}
