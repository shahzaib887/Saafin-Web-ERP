import Reveal from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Sourced with Care",
    description:
      "Water sources are selected and checked before bottling begins — consistency starts here.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5s-7 7.2-7 12a7 7 0 0 0 14 0c0-4.8-7-12-7-12Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Quality Checked",
    description:
      "Each batch goes through quality checks before it's bottled. Same standard, every time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Bottled Hygienically",
    description:
      "Clean facilities, handled with care. Every bottle is prepared the same careful way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M7 8h10" />
        <path d="M7 14h10" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Sealed for Freshness",
    description:
      "Every bottle is sealed so you know it hasn't been opened before you. Check the seal when you receive it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="dark bg-saafin-dark-bg text-saafin-dark-text">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:px-16 md:pt-44 md:pb-48">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start md:gap-6">
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl text-[clamp(1.875rem,6vw,3.5rem)] capitalize font-medium leading-[1.1] tracking-tighter text-saafin-dark-text md:text-[clamp(2.25rem,4vw,3.5rem)]">
              How a SAAFIN Bottle Gets to You.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-[40ch] text-base leading-[1.65] text-saafin-dark-muted">
              Every SAAFIN bottle is sourced, checked, bottled, and sealed the
              same way, every time.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-24 md:grid-cols-4 md:gap-14">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={0.12 + index * 0.08}>
              <div>
                <div className="flex items-center gap-3 text-saafin-dark-text">
                  <div className="h-11 w-11">{step.icon}</div>
                  <span className="ml-auto text-sm font-medium tracking-widest text-saafin-dark-muted">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-saafin-dark-text md:mt-6">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-saafin-dark-muted md:mt-4 md:text-base">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}