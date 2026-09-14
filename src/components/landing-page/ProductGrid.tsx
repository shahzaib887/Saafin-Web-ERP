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
            Pure Hydration for Every Moment. Choose SAAFIN.
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 border-t border-saafin-dark-border sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card, i) => (
          <Reveal
            key={card.label}
            className={`flex flex-col border-saafin-dark-border px-6 pt-12 md:px-10 md:pt-16 ${
              i !== CARDS.length - 1
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
                alt={card.label}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="max-w-sm pt-7 pb-12 text-base leading-[1.65] text-saafin-dark-muted">
              {card.label === "Saafin Pure" &&
                "Pure and refreshing bottled drinking water, carefully bottled for clean, reliable hydration. Its convenient 500 ml size makes it perfect for everyday use, travel, work, and staying refreshed on the go."}
              {card.label === "Saafin Family" &&
                "Refreshing and quality bottled drinking water designed for everyday family hydration. The 1.5 L bottle is ideal for homes, meals, offices, and sharing moments with family and friends."}
              {card.label === "Saafin Refresh" &&
                "A convenient 330 ml bottle for quick refreshment at work, while travelling, or whenever you need a simple way to stay hydrated."}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
