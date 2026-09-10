import Reveal from "@/components/Reveal";

const STATS = [
  { value: "100%", label: "Pure mineral water" },
  { value: "24/7", label: "Refreshing hydration" },
];

const TRUSTED_BY = ["families", "athletes", "everyday life"];

export default function About() {
  return (
    <section id="about" className="dark bg-saafin-dark-bg text-saafin-dark-text">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10">
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl text-4xl uppercase font-bold l tracking-tight text-saafin-dark-text md:text-6xl">
            Water that keeps life moving
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal className="relative aspect-4/5 w-full overflow-hidden rounded-saafin-lg md:aspect-auto" delay={0.15}>
            <img
              src="https://ik.imagekit.io/mmyzvdovbv/Saafin/Picsart_26-09-03_20-59-09-634.jpg.jpeg?updatedAt=1788451282136"
              alt="Saafin mineral water"
              className="h-full w-full object-cover"
            />
          </Reveal>

          <div className="flex flex-col">
            <Reveal delay={0.2}>
              <p className="max-w-md text-lg leading-relaxed text-saafin-dark-text/90 md:text-xl">
              Saafin brings naturally refreshing mineral water to your table.
              We focus on clean taste, dependable quality, and packaging that
                fits easily into busy everyday lives.
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-2 gap-8">
              {STATS.map((stat, index) => (
                <Reveal key={stat.label} delay={0.25 + index * 0.1}>
                  <div>
                    <p className="text-4xl font-bold tracking-tight text-saafin-dark-text md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm text-saafin-dark-muted">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-auto pt-16" delay={0.3}>
              <div>
                <p className="max-w-xs text-sm text-saafin-dark-muted">
                  Made for people who choose better hydration every day.
                </p>
                <div className="mt-5 flex items-center gap-8">
                  {TRUSTED_BY.map((brand) => (
                    <span
                      key={brand}
                      className="text-sm font-semibold uppercase tracking-wider text-saafin-dark-muted"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}