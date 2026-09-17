import Reveal from "@/components/Reveal";
import Link from "next/link";

const WHO_FOR = [
  { label: "Offices & workplaces", icon: "🏢" },
  { label: "Restaurants & cafes", icon: "☕" },
  { label: "Hotels & guesthouses", icon: "🏨" },
  { label: "Shops & retail counters", icon: "🛍️" },
  { label: "Events & corporate functions", icon: "🎪" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Tell us what you need.",
    description:
      "Sizes, quantities, and how often — give us the details and we'll take it from there.",
  },
  {
    step: "02",
    title: "We'll confirm what we can supply.",
    description:
      "We'll get back to you with what's available and how we can make it work.",
  },
  {
    step: "03",
    title: "You place your order.",
    description:
      "Once we've agreed on the arrangement, ordering is straightforward from there.",
  },
];

export default function B2BSection() {
  return (
    <section id="b2b" className="w-full bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <Reveal delay={0.1}>
            <span className="inline-block rounded-md border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 mb-6">
              For Businesses
            </span>
            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Supplying your business.
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-6 max-w-xl">
            <p className="text-base leading-relaxed text-white/60 md:text-lg">
              Offices, restaurants, cafes, and events — if you need bottled
              water regularly, we&apos;ll work out a supply plan that fits how
              you order.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Who this is for */}
          <Reveal delay={0.15} className="flex flex-col">
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-white/40">
              Who this is for
            </p>
            <div className="flex flex-col gap-3">
              {WHO_FOR.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-white/80">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — How it works */}
          <Reveal delay={0.2} className="flex flex-col">
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-white/40">
              How it works
            </p>
            <div className="flex flex-col gap-4">
              {HOW_IT_WORKS.map((item, i) => (
                <div
                  key={item.step}
                  className="relative rounded-xl border border-white/10 bg-white/5 p-6 md:p-8"
                >
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                    Step {item.step}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/contact"
                id="b2b-supply-cta"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/85 hover:scale-[1.02]"
              >
                Talk to Us About Supply
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <p className="mt-4 text-xs text-white/40">
                Ordering for a business? Include your expected sizes and
                quantities — it helps us respond faster.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}