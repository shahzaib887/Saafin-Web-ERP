"use client";

import { useState } from "react";

const ACCORDION_ITEMS = [
  {
    key: "stay",
    label: "Stay",
    description:
      "Handpicked boutique stays that match the mood of every retreat, from mountain lodges to coastal villas.",
  },
  {
    key: "transfers",
    label: "Transfers",
    description:
      "Airport pickups, coach transfers, and private cars arranged so every leg of the trip is taken care of.",
  },
  {
    key: "extras",
    label: "Extras",
    description:
      "Combine Retreat into one seamless checkout. Instant confirmations where available, or concierge support for bespoke itineraries.",
  },
];

const STEPS = [
  { step: "01", title: "Choose Retreat" },
  { step: "02", title: "Match Boutique Stay" },
  { step: "03", title: "Add Transfers & Extras" },
  { step: "04", title: "Secure Payment" },
];

const IMAGE =
  "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_hjc7quhjc7quhjc7.jpg";

export default function Combine() {
  const [active, setActive] = useState("extras");
  const activeItem = ACCORDION_ITEMS.find((item) => item.key === active)!;

  return (
    <section className="dark relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-saafin-dark-bg text-saafin-dark-text">
      <img
        src={IMAGE}
        alt="Combine Retreat"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-saafin-dark-bg via-saafin-dark-bg/10 to-transparent" />

      <div className="relative z-10 px-6 pt-20 md:px-10">
        <h2 className="text-4xl font-bold tracking-tight text-saafin-dark-text md:text-6xl">
          Combine Retreat
        </h2>

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