import Reveal from "@/components/Reveal";
import Image from "next/image";

const CARDS = [
  {
    label: "Saafin Refresh",
    stat: "330 ml",
    tagline: "A quick size for the commute, the gym bag, or the desk drawer.",
    bestFor: "Commuting · Gym · Quick errands",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_ungq13ungq13ungq.jpg",
  },
  {
    label: "Saafin Pure",
    stat: "500 ml",
    tagline: "The everyday size — work, travel, and being out of the house.",
    bestFor: "Office desks · Travel · Daily use",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/WhatsApp%20Image%202026-09-01%20at%205.03.45%20PM.jpeg",
  },
  {
    label: "Saafin Family",
    stat: "1.5 L",
    tagline: "For the dinner table, guests, and sharing at home.",
    bestFor: "Home · Family meals · Gatherings",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_cdjt6ccdjt6ccdjt.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section
      id="products"
      className="dark bg-saafin-dark-bg text-saafin-dark-text"
    >
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-16 md:pt-44 md:pb-28">
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
          <h2 className="mt-7 max-w-4xl text-[clamp(2.25rem,4vw,3.5rem)] capitalize font-medium leading-[1.1] tracking-tighter text-saafin-dark-text">
            Three Sizes, One Standard.
          </h2>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-5 max-w-[48ch] text-base leading-[1.65] text-saafin-dark-muted">
            Whatever the occasion, SAAFIN keeps the same process behind every
            bottle.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 border-t border-saafin-dark-border sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card, i) => (
          <Reveal
            key={card.label}
            className={`flex flex-col border-saafin-dark-border px-6 pt-12 md:px-10 md:pt-16 ${i !== CARDS.length - 1
                ? "border-b sm:border-b-0 lg:border-b-0 lg:border-r"
                : ""
              }`}
            delay={0.12 + i * 0.12}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-semibold text-saafin-dark-text">
                {card.label}
              </h3>
              <span className="ml-4 text-sm tracking-widest text-saafin-dark-muted">
                / {card.stat}
              </span>
            </div>

            <div className="relative mt-8 aspect-[4/5] w-full overflow-hidden rounded-saafin-lg">
              <Image
                src={card.image}
                alt={`${card.label} — ${card.stat} bottled drinking water`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-7 text-base leading-[1.65] text-saafin-dark-muted">
              {card.tagline}
            </p>
            <p className="mt-3 pb-12 text-xs tracking-widest text-saafin-dark-muted/60 uppercase">
              {card.bestFor}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
