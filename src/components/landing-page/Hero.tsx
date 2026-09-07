"use client";

import Image from "next/image";

const HERO_IMAGE =
  "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_cq81f2cq81f2cq81.jpg";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[720px] w-full items-center justify-center overflow-hidden bg-[#0A1B1F]">
      <Image
        src={HERO_IMAGE}
        alt="Saafin"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

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
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(3.5rem,13vw,10rem)] font-extrabold leading-[0.9] tracking-tight text-white">
          Saafin
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg font-medium text-white/95 md:text-xl">
          Pure mineral water for every moment, carefully bottled to keep you
          refreshed from the first sip to the last.
        </p>

        <a
          href="#products"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0A1B1F] transition-colors duration-300 hover:bg-[#F6C083]"
        >
          Explore Saafin
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M6 2h12v20l-6-4.2L6 22V2z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
