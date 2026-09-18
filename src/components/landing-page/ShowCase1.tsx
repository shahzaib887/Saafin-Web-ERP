import Reveal from "@/components/Reveal";

const REASONS = [
  {
    number: "01",
    title: "A defined process.",
    description:
      "Sourced, quality-checked, bottled, and sealed — the same way, every bottle. No shortcuts, no variations.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.5s-7 7.2-7 12a7 7 0 0 0 14 0c0-4.8-7-12-7-12Z" />
        <path d="M12 14.5v-4" />
        <path d="M12 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sizes that match real life.",
    description:
      "From a quick 330ml for the commute to a 1.5L for the dinner table — practical sizes for how people actually drink water.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M7 8h10" />
        <path d="M7 16h10" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "A brand that answers.",
    description:
      "Questions about your order go to a real person. No automated responses, no unanswered forms.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Honest about where we stand.",
    description:
      "We're a new brand. That means our process is small enough that we can pay attention to it — and we say what we can back up.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-black py-14 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <Reveal delay={0.1}>
            <span className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 mb-4 block w-fit md:mb-6">
              Why SAAFIN
            </span>
            <h2 className="max-w-xl text-[clamp(1.75rem,6vw,2.5rem)] font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              What you&apos;re actually getting.
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="max-w-sm">
            <p className="text-sm leading-relaxed text-white/90 md:text-base">
              No borrowed credibility. No invented numbers. Just the things
              SAAFIN can genuinely offer right now.
            </p>
          </Reveal>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal
              key={reason.number}
              delay={0.1 + i * 0.1}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
            >
              {/* Number */}
              <span className="mb-6 text-xs font-medium uppercase tracking-widest text-white/90 md:mb-8">
                {reason.number}
              </span>

              {/* Icon */}
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/90 md:mb-6">
                <div className="h-5 w-5">{reason.icon}</div>
              </div>

              <h3 className="mb-3 text-base font-semibold text-white md:text-lg">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                {reason.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}