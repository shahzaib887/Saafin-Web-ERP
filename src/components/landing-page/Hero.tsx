"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const DESKTOP_HERO_IMAGE =
  "https://ik.imagekit.io/mmyzvdovbv/Saafin/ChatGPT%20Image%20Sep%208,%202026,%2006_37_58%20PM.png";

const MOBILE_HERO_IMAGE =
  "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_ouxei1ouxei1ouxe.jpg?updatedAt=1788452014584";

// Blur placeholder (1x1 blurred image)
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[720px] w-full items-center justify-center overflow-hidden bg-white md:bg-[#0A1B1F]">
      <Reveal className="absolute inset-0" delay={0.15}>
        <picture className="absolute inset-0 block">
          <source media="(max-width: 720px)" srcSet={MOBILE_HERO_IMAGE} />
          <Image
            src={DESKTOP_HERO_IMAGE}
            alt="Saafin Premium Mineral Water - Hero Image"
            fill
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover"
          />
        </picture>
      </Reveal>

      {/* blurred foreground depth strip, matches source */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%]"
        style={{
          backgroundImage: `url(${DESKTOP_HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          filter: "blur(6px)",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 md:from-black/25"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[34%] bg-gradient-to-t from-black/80 via-black/25 to-transparent md:hidden"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start px-6 pb-16 text-left md:px-16 md:pb-20">
        <Reveal className="w-full" delay={0.1}>
          <h1 className="max-w-5xl font-[family-name:var(--font-heading)] capitalize text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-[0.98] tracking-tight text-black md:text-white/90">
            Pure Hydration. Meet Saafin.
          </h1>
        </Reveal>

        <Reveal className="mt-4 max-w-lg" delay={0.2}>
          <p className="max-w-xl text-balance text-base font-normal leading-relaxed text-black/70 md:text-white/75 md:text-lg">
            Pure mineral water for every moment, carefully bottled to keep you
            refreshed from the first sip to the last.
          </p>
        </Reveal>

        <Reveal className="mt-8" delay={0.3}>
          <a
            href="#products"
            className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#F6C083] hover:text-[#0A1B1F] md:bg-white md:text-[#0A1B1F]"
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
