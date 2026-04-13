const steps = [
  {
    number: "1",
    title: "프로젝트를 등록하세요",
    description:
      "이름과 목표만 입력하면 Sliced가 자동으로 프로젝트 구조를 분석합니다.",
  },
  {
    number: "2",
    title: "AI가 태스크를 나눕니다",
    description:
      "최적의 단위로 분할하고, 우선순위와 의존관계를 자동으로 매핑합니다.",
  },
  {
    number: "3",
    title: "팀이 함께 움직입니다",
    description:
      "각 팀원에게 적합한 태스크를 배정하고, 실시간으로 진행 상황을 추적합니다.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-foreground py-20 text-white md:py-32">
      <div className="mx-auto max-w-[980px] px-6 lg:px-0">
        <div className="text-center">
          <h2 className="text-[32px] font-semibold tracking-tight md:text-[48px]">
            시작은 간단합니다.
          </h2>
          <p className="mt-3 text-lg text-white/50 md:text-[21px]">
            세 단계면 충분합니다.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3 md:mt-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-foreground p-10 md:p-12"
            >
              <span className="text-[56px] font-semibold leading-none tracking-tight text-accent">
                {step.number}
              </span>
              <h3 className="mt-5 text-[19px] font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/50">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
