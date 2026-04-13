const cards = [
  {
    emoji: "🏗️",
    title: "World Building",
    description:
      "Your backgrounds, buildings, and landmarks — recreated in Minecraft. AI generates worlds from your original artwork.",
  },
  {
    emoji: "💬",
    title: "Character NPCs",
    description:
      "Your characters appear as NPCs. AI-powered dialogue lets fans talk to them directly — personality, voice, and lore intact.",
  },
  {
    emoji: "💰",
    title: "Fans Spend",
    description:
      "Server access, limited items, special quests. Fan experience becomes revenue. You earn from what fans love.",
  },
];

export default function Solution() {
  return (
    <section className="border-t border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-foreground md:text-[40px]">
            Your universe becomes a server.
          </h2>
          <p className="mt-3 text-[16px] text-muted md:text-[18px]">
            We turn your IP into an experience fans can walk into.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/30 hover:bg-surface-light md:p-10"
            >
              <span className="text-[36px]">{card.emoji}</span>
              <h3 className="mt-5 text-[18px] font-semibold tracking-tight text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
