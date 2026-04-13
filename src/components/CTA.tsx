export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-32">
      <div className="mx-auto max-w-[980px] px-6 text-center lg:px-0">
        <h2 className="text-[32px] font-semibold tracking-tight text-foreground md:text-[48px]">
          지금 바로
          <br />
          <span className="text-accent">시작하세요.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted md:text-[21px] md:leading-[1.5]">
          14일 무료 체험. 신용카드 불필요.
          <br />
          가입 즉시 모든 기능을 이용할 수 있습니다.
        </p>

        <form className="mx-auto mt-10 flex max-w-[420px] flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="work@company.com"
            className="h-12 flex-1 rounded-full border border-border bg-white px-5 text-[15px] text-foreground transition-colors placeholder:text-muted focus:border-foreground focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-accent px-7 text-[15px] font-medium text-white transition-all hover:bg-accent-hover"
          >
            시작하기
          </button>
        </form>
      </div>
    </section>
  );
}
