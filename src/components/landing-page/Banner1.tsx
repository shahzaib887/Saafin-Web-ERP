"use client";

import { useState } from "react";

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
  "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_cq81f2cq81f2cq81.jpg?updatedAt=1788783483129";

export default function Combine() {
  const [active, setActive] = useState("packaging");
  const activeItem = ACCORDION_ITEMS.find((item) => item.key === active)!;

  return (
    <section className="dark relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-saafin-dark-bg text-saafin-dark-text">
      <img
        src={IMAGE}
        alt="Saafin mineral water bottle"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-saafin-dark-bg via-saafin-dark-bg/10 to-transparent" />

      <div className="relative z-10 px-6 pt-20 md:px-10">
        <h2 className="text-4xl font-bold tracking-tight text-saafin-dark-text md:text-6xl">
          What Makes Saafin Different
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-saafin-dark-text/80 md:text-lg">
          Saafin brings together naturally refreshing mineral water, careful
          quality standards, and thoughtful packaging to create a premium
          hydration experience for everyday life.
        </p>

        <div className="mt-8 flex flex-col gap-2">
          {ACCORDION_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`flex w-fit items-center gap-2 text-2xl font-semibold transition-colors md:text-3xl ${
                active === item.key
                  ? "text-saafin-dark-text"
                  : "text-saafin-dark-text/100 hover:text-saafin-dark-text/70"
              }`}
            >
              <span className="text-xl">+</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 border-t border-white/15 bg-saafin-dark-bg/20 backdrop-blur-sm md:grid-cols-[1.1fr_1fr_1fr_1fr_1fr]">
        <div className="border-b border-white/15 px-6 py-8 md:border-b-0 md:border-r md:px-10">
          <p className="max-w-xs text-sm leading-relaxed text-saafin-dark-text/80">
            {activeItem.description}
          </p>
        </div>

        {STEPS.map((s, i) => (
          <div
            key={s.step}
            className={`px-6 py-8 md:px-10 ${
              i !== STEPS.length - 1 ? "border-b border-white/15 md:border-b-0 md:border-r" : ""
            }`}
          >
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight text-saafin-dark-text">
                {s.step}
              </span>
              <span className="text-xs text-saafin-dark-muted">Step</span>
            </div>
            <p className="mt-6 text-sm font-medium text-saafin-dark-text">
              {s.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}