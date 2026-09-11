import Reveal from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Sourced with care",
    description: "We select mineral water sources with freshness and natural quality in mind.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V10l6-3 6 3v11" />
        <path d="M10 7V4l7-2v5" />
        <path d="M17 3l4 1.5" />
        <path d="M2 21h14" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Filtered for purity",
    description: "Every bottle passes through careful quality checks before filling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l1.3-1.3a3 3 0 1 1-4.3-4.3l-1.3 1.3a1 1 0 0 0 0 1.4Z" />
        <path d="M9.3 17.7a1 1 0 0 1 0-1.4l-1.6-1.6a1 1 0 0 1-1.4 0L5 16a3 3 0 1 0 4.3 4.3l1.3-1.3a1 1 0 0 1-1.3-1.3Z" />
        <path d="M6.3 9.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4L8 13.6a3 3 0 1 1-4.3-4.3l1.3 1.3a1 1 0 0 1 1.3 1.3Z" />
        <path d="M17.7 14.7a1 1 0 0 0-1.4 0l-1.6-1.6a1 1 0 0 0 0-1.4L16 10.4a3 3 0 1 1 4.3 4.3l-1.3-1.3a1 1 0 0 0-1.3 1.3Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Sealed for freshness",
    description: "Our bottles are sealed to protect every refreshing sip.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 13h6" />
        <path d="M7 16h3" />
        <path d="m15 15 3 3 3-3" />
        <path d="M18 12v6" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ready for your day",
    description: "Take Saafin with you wherever your day takes you — at home, at work, at the gym, or on the go.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="dark bg-saafin-dark-bg text-saafin-dark-text">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <Reveal delay={0.1}>
            <h2 className="text-3xl capitalize font-bold tracking-tight text-saafin-dark-text sm:text-4xl lg:text-5xl">
              From source to sip
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-saafin-dark-muted">
              A simple process built around purity, quality, and a great-tasting
              bottle of water.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={0.12 + index * 0.08}>
              <div>
              <div className="flex items-center gap-3 text-saafin-dark-text">
                <div className="h-9 w-9">{step.icon}</div>
                <span className="text-xs text-saafin-dark-muted">
                  {step.number}
                </span>
              </div>

                <h3 className="mt-16 text-base font-semibold text-saafin-dark-text">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-saafin-dark-muted">
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