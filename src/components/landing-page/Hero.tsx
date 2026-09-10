"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const HERO_IMAGE =
  "https://ik.imagekit.io/mmyzvdovbv/Saafin/ChatGPT%20Image%20Sep%208,%202026,%2006_37_58%20PM.png";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[720px] w-full items-center justify-center overflow-hidden bg-[#0A1B1F]">
      <Reveal className="absolute inset-0" delay={0.15}>
        <Image
          src={HERO_IMAGE}
          alt="Saafin"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>

      {/* blurred foreground depth strip, matches source */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%]"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          filter: "blur(6px)",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/10"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start px-6 pb-16 text-left md:px-16 md:pb-20">
        <Reveal className="w-full" delay={0.1}>
          <h1 className="max-w-5xl font-[family-name:var(--font-heading)] uppercase text-[clamp(1.5rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight text-white/90">
            Pure Hydration. Meet Saafin.
          </h1>
        </Reveal>

        <Reveal className="mt-4 max-w-lg" delay={0.2}>
          <p className="text-balance text-base font-normal leading-relaxed text-white/75 md:text-lg">
            Pure mineral water for every moment, carefully bottled to keep you
            refreshed from the first sip to the last.
          </p>
        </Reveal>

        <Reveal className="mt-8" delay={0.3}>
          <a
            href="#products"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0A1B1F] transition-colors duration-300 hover:bg-[#F6C083]"
          >
            Explore Saafin
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M6 2h12v20l-6-4.2L6 22V2z" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
