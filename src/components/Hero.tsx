export default function Hero() {
  return (
    <section className="relative pt-28 pb-8 md:pt-40 md:pb-16">
      <div className="mx-auto max-w-[980px] px-6 text-center lg:px-0">
        <p className="animate-fade-in text-sm font-medium tracking-wide text-accent md:text-base">
          프로젝트 관리의 새로운 기준
        </p>

        <h1 className="animate-fade-in-d1 mt-4 text-[44px] font-semibold leading-[1.05] tracking-[-0.015em] text-foreground md:text-[80px]">
          복잡한 문제를
          <br />
          깔끔하게 나누다.
        </h1>

        <p className="animate-fade-in-d2 mx-auto mt-5 max-w-[600px] text-lg leading-relaxed text-muted md:text-[21px] md:leading-[1.5]">
          거대한 프로젝트를 작고 관리 가능한 조각으로.
          <br className="hidden md:block" />
          팀 전체가 같은 방향으로, 더 빠르게.
        </p>

        <div className="animate-fade-in-d3 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10">
          <a
            href="#cta"
            className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-7 text-[15px] font-medium text-white transition-all hover:bg-accent-hover"
          >
            무료로 시작하기
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-11 items-center justify-center gap-1.5 text-[15px] font-medium text-accent transition-opacity hover:opacity-70"
          >
            자세히 알아보기
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="animate-scale-in mx-auto mt-16 max-w-[980px] px-6 md:mt-20 lg:px-0">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1d1d1f] to-[#2d2d2f] shadow-2xl md:rounded-3xl">
          <div className="flex aspect-[16/9] items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-white/30">
              <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              <span className="text-sm font-light tracking-wide">제품 스크린샷 / 데모 영상</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
