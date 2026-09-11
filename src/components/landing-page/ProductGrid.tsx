import Reveal from "@/components/Reveal";
import Image from "next/image";

const CARDS = [
  {
    label: "Saafin Pure",
    stat: "500 ml",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/WhatsApp%20Image%202026-09-01%20at%205.03.45%20PM.jpeg",
  },
  {
    label: "Saafin Family",
    stat: "1.5 L",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_cdjt6ccdjt6ccdjt.jpg",
  },
  {
    label: "Saafin Refresh",
    stat: "330 ml",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_ungq13ungq13ungq.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section
      id="products"
      className="dark bg-saafin-dark-bg text-saafin-dark-text"
    >
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10">
        <Reveal
          className="flex items-center gap-2 text-saafin-dark-muted"
          delay={0.1}
        >
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
        </Reveal>

        <Reveal delay={0.18}>
          <h2 className="mt-6 max-w-3xl text-3xl capitalize font-bold tracking-tight text-saafin-dark-text sm:text-4xl lg:text-5xl">
            Pure hydration, made for every kind of day. Find your Saafin.
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 border-t border-saafin-dark-border md:grid-cols-3">
        {CARDS.map((card, i) => (
          <Reveal
            key={card.label}
            className={`flex flex-col border-saafin-dark-border px-6 pt-8 md:px-10 ${
              i !== CARDS.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
            }`}
            delay={0.12 + i * 0.12}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-semibold text-saafin-dark-text">
                {card.label}
              </h3>
              <span className="text-sm text-saafin-dark-muted">
                / {card.stat}
              </span>
            </div>

            <div className="relative mt-6 aspect-3/4 w-full overflow-hidden rounded-t-saafin-lg">
              <Image
                src={card.image}
                alt={card.label}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="max-w-sm py-6 text-sm leading-relaxed text-saafin-dark-muted">
              {card.label === "Saafin Pure" &&
                "Clean, refreshing mineral water for everyday hydration. Perfect for staying refreshed wherever your day takes you."}
              {card.label === "Saafin Family" &&
                "Balanced mineral water for the whole family. A convenient choice for home, meals, and everyday hydration."}
              {card.label === "Saafin Refresh" &&
                "Refreshing mineral water made for moments when you need a light, convenient boost of hydration."}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
