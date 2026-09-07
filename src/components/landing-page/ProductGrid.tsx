const CARDS = [
  {
    label: "Saafin Pure",
    stat: "500 ml",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Saafin Family",
    stat: "1.5 Litre",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Saafin Refresh",
    stat: "330 ml",
    image:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="dark bg-saafin-dark-bg text-saafin-dark-text">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10">
        <div className="flex items-center gap-2 text-saafin-dark-muted">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-4 w-4"
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="4" y1="7" x2="20" y2="17" />
            <line x1="20" y1="7" x2="4" y2="17" />
          </svg>
          <span className="text-sm font-medium">Our Range</span>
        </div>

        <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-saafin-dark-text md:text-6xl">
          Pure hydration, made for every kind of day
          <br />
          Find your Saafin
        </h2>
      </div>

      <div className="grid grid-cols-1 border-t border-saafin-dark-border md:grid-cols-3">
        {CARDS.map((card, i) => (
          <div
            key={card.label}
            className={`flex flex-col border-saafin-dark-border px-6 pt-8 md:px-10 ${
              i !== CARDS.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-semibold text-saafin-dark-text">
                {card.label}
              </h3>
              <span className="text-sm text-saafin-dark-muted">
                / {card.stat}
              </span>
            </div>

            <div className="relative mt-6 aspect-[3/4] w-full overflow-hidden rounded-t-saafin-lg">
              <img
                src={card.image}
                alt={card.label}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}