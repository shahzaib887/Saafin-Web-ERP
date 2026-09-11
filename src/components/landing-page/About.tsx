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
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10">
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl text-3xl capitalize font-medium tracking-tighter text-saafin-dark-text sm:text-4xl lg:text-5xl">
            Pure Hydration for Every Part of Your Day
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
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
              <p className="max-w-md text-base leading-relaxed text-saafin-dark-text/90 md:text-lg">
              SAAFIN Water Solutions brings refreshing, quality bottled drinking
              water to homes, offices, meals, and everyday moments. Carefully
              bottled with a focus on purity, freshness, and dependable quality,
              SAAFIN makes it easy to stay hydrated wherever life takes you.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 sm:grid-cols-3 md:grid-cols-1">
              {VALUES.map((value, index) => (
                <Reveal key={value.title} delay={0.25 + index * 0.1}>
                  <div>
                    <p className="text-xl font-medium tracking-tight text-saafin-dark-text md:text-2xl">
                      {value.title}
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-saafin-dark-muted">
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