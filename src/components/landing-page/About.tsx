import Reveal from "@/components/Reveal";
import Image from "next/image";

const VALUES = [
  {
    title: "Quality Focused",
    description: "Carefully bottled with attention to cleanliness and freshness.",
  },
  {
    title: "Made for Everyday Life",
    description: "Perfect for home, work, travel, meals, and everyday moments.",
  },
  {
    title: "Refreshment You Can Rely On",
    description: "Convenient bottled water for staying refreshed wherever you go.",
  },
];

export default function About() {
  return (
    <section id="about" className="dark bg-saafin-dark-bg text-saafin-dark-text">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-28 md:px-16 md:pt-44 md:pb-40">
        <Reveal delay={0.1}>
          <h2 className="max-w-4xl text-[clamp(2.25rem,4vw,3.5rem)] capitalize font-medium leading-[1.1] tracking-tighter text-saafin-dark-text">
            Pure Hydration for Every Part of Your Day
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <Reveal className="relative aspect-4/5 w-full overflow-hidden rounded-saafin-lg md:aspect-auto" delay={0.15}>
            <Image
              src="https://ik.imagekit.io/mmyzvdovbv/Saafin/Picsart_26-09-03_20-59-09-634.jpg.jpeg?updatedAt=1788451282136"
              alt="Saafin mineral water"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </Reveal>

          <div className="flex flex-col">
            <Reveal delay={0.2}>
              <p className="max-w-[55ch] text-lg leading-[1.65] text-saafin-dark-text/75">
              SAAFIN Water Solutions brings refreshing, quality bottled drinking
              water to homes, offices, meals, and everyday moments. Carefully
              bottled with a focus on purity, freshness, and dependable quality,
              SAAFIN makes it easy to stay hydrated wherever life takes you.
              </p>
            </Reveal>

            <div className="mt-20 grid gap-12 sm:grid-cols-3 md:grid-cols-1">
              {VALUES.map((value, index) => (
                <Reveal key={value.title} delay={0.25 + index * 0.1}>
                  <div>
                    <p className="text-xl font-medium tracking-tight text-saafin-dark-text md:text-2xl">
                      {value.title}
                    </p>
                    <p className="mt-4 max-w-xs text-base leading-[1.65] text-saafin-dark-muted">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}