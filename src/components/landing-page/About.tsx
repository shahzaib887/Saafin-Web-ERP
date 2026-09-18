import Reveal from "@/components/Reveal";
import Image from "next/image";

const VALUES = [
  {
    title: "Getting the process right.",
    description:
      "Careful sourcing, consistent quality checks, hygienic bottling, and a tight seal on every bottle. Small enough that we can pay attention to it.",
  },
  {
    title: "Saying what's true.",
    description:
      "Including what we haven't proven yet. Where something isn't ready, we say so — rather than papering over the gap with invented numbers.",
  },
  {
    title: "The same standard for everyone.",
    description:
      "Whether you're buying for home or supplying a restaurant, the water in every bottle goes through the same process.",
  },
];

export default function About() {
  return (
    <section id="about" className="dark bg-saafin-dark-bg text-saafin-dark-text">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-16 md:pt-44 md:pb-40">
        <Reveal delay={0.1}>
          <h2 className="max-w-4xl text-[clamp(1.875rem,6vw,3.5rem)] capitalize font-medium leading-[1.1] tracking-tighter text-saafin-dark-text md:text-[clamp(2.25rem,4vw,3.5rem)]">
            A New Brand, Built Carefully.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <Reveal className="relative aspect-4/5 w-full overflow-hidden rounded-saafin-lg md:aspect-auto" delay={0.15}>
            <Image
              src="https://ik.imagekit.io/mmyzvdovbv/Saafin/Picsart_26-09-03_20-59-09-634.jpg.jpeg?updatedAt=1788451282136"
              alt="SAAFIN bottled water — carefully bottled and sealed"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </Reveal>

          <div className="flex flex-col">
            <Reveal delay={0.2}>
              <p className="max-w-[55ch] text-base leading-[1.65] text-saafin-dark-text/75 md:text-lg">
                SAAFIN is a Pakistani bottled water brand. We&apos;re early in our
                journey, and we&apos;d rather tell you exactly where we stand than
                pretend otherwise. Right now, that means a small, defined process
                we can actually stand behind — careful sourcing, consistent quality
                checks, hygienic bottling, and a tight seal on every bottle.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-3 md:mt-20 md:grid-cols-1 md:gap-12">
              {VALUES.map((value, index) => (
                <Reveal key={value.title} delay={0.25 + index * 0.1}>
                  <div>
                    <p className="text-lg font-medium tracking-tight text-saafin-dark-text md:text-2xl">
                      {value.title}
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-[1.65] text-saafin-dark-muted md:mt-4 md:text-base">
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