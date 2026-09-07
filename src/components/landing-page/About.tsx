const STATS = [
  { value: "100+", label: "Total countries travelled" },
  { value: "1472+", label: "Total retreats attended" },
];

const TRUSTED_BY = ["yoga", "lonely planet", "abc news"];

export default function About() {
  return (
    <section className="dark bg-saafin-dark-bg text-saafin-dark-text">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10">
        <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-saafin-dark-text md:text-6xl">
          Not just trips experiences that nurture body and soul
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-saafin-lg md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200&auto=format&fit=crop"
              alt="Vita Travels"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <p className="max-w-md text-lg leading-relaxed text-saafin-dark-text/90 md:text-xl">
              Vita Travel is a premium wellness travel marketplace that
              blends the ease of booking with the feel of an editorial
              magazine. Discover curated programs, match them with
              exceptional stays, and book seamlessly.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold tracking-tight text-saafin-dark-text md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm text-saafin-dark-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-16">
              <p className="max-w-xs text-sm text-saafin-dark-muted">
                Trusted by travelers looking for more than ordinary
                vacations.
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
          </div>
        </div>
      </div>
    </section>
  );
}