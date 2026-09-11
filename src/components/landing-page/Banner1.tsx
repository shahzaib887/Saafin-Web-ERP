"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const ACCORDION_ITEMS = [
  {
    key: "source",
    label: "Source",
    description:
      "Carefully selected water sources chosen for their natural quality.",
  },
  {
    key: "quality",
    label: "Quality",
    description:
      "Every bottle is handled with care and produced with a focus on freshness and quality.",
  },
  {
    key: "packaging",
    label: "Packaging",
    description:
      "Thoughtfully designed packaging that makes Saafin easy to enjoy wherever life takes you.",
  },
];

const STEPS = [
  { step: "01", title: "Select the source" },
  { step: "02", title: "Check for purity" },
  { step: "03", title: "Bottle with care" },
  { step: "04", title: "Seal the freshness" },
];

const IMAGE =
  "https://ik.imagekit.io/mmyzvdovbv/Saafin/Picsart_26-09-03_20-59-09-634.jpg.jpeg?updatedAt=1788451282136";

export default function Combine() {
  const [active, setActive] = useState("packaging");
  const [displayItem, setDisplayItem] = useState(
    ACCORDION_ITEMS.find((item) => item.key === "packaging")!
  );
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const nextItem = ACCORDION_ITEMS.find((item) => item.key === active)!;
    const el = descRef.current;
    if (!el) return;

    const tl = gsap.timeline();
    tl.to(el, {
      opacity: 0,
      y: 12,
      duration: 0.25,
      ease: "power2.in",
    }).call(() => setDisplayItem(nextItem));
    tl.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, [active]);

  return (
    <section className="dark relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-saafin-dark-bg text-saafin-dark-text">
      <Image
        src={IMAGE}
        alt="Saafin mineral water bottle"
        fill
        loading="lazy"
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* top darken so heading/accordion text stays readable over the bright sky */}
      <div className="pointer-events-none h-350 absolute inset-0 bg-gradient-to-b from-black via-black/25 to-transparent" />
      {/* bottom darken for the footer strip */}

      <div className="relative z-10 px-6 pt-20 md:px-10">
        <Reveal delay={0.08}>
          <h2 className="text-3xl font-medium tracking-tighter text-white drop-shadow-md sm:text-4xl lg:text-5xl">
            What Makes Saafin Different
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow-sm md:text-lg">
            Saafin brings together naturally refreshing mineral water, careful
            quality standards, and thoughtful packaging to create a premium
            hydration experience for everyday life.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-2">
          {ACCORDION_ITEMS.map((item, index) => (
            <Reveal key={item.key} delay={0.2 + index * 0.08}>
              <button
                onClick={() => setActive(item.key)}
                className={`flex w-fit items-center gap-2 text-2xl font-semibold drop-shadow-sm transition-colors md:text-3xl ${
                  active === item.key
                    ? "text-white"
                    : "text-white/50 hover:text-white/75"
                }`}
              >
                <span className="text-xl">+</span>
                {item.label}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 border-t border-white/15 bg-saafin-dark-bg/20 backdrop-blur-sm md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
        <Reveal className="border-b border-white/15 px-6 py-10 md:border-b-0 md:border-r md:px-10 md:py-12" delay={0.2}>
          <p
            ref={descRef}
            className="max-w-sm text-base leading-relaxed text-saafin-dark-text md:text-lg"
          >
            {displayItem.description}
          </p>
        </Reveal>

        {STEPS.map((s, i) => (
          <Reveal
            key={s.step}
            className={`px-6 py-8 md:px-10 ${
              i !== STEPS.length - 1 ? "border-b border-white/15 md:border-b-0 md:border-r" : ""
            }`}
            delay={0.25 + i * 0.08}
          >
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-medium tracking-tighter text-saafin-dark-text">
                {s.step}
              </span>
              <span className="text-xs text-saafin-dark-muted">Step</span>
            </div>
            <p className="mt-6 text-sm font-medium text-saafin-dark-text">
              {s.title}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}