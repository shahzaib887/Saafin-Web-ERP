"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          cardRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          rightTextRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black "
      style={{
        backgroundImage:
          'url("https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_96cjiz96cjiz96cj.jpg")',
        backgroundSize: "cover",
        backgroundColor: "#000000",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-68 bg-gradient-to-b from-saafin-dark-bg/59 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-68 bg-gradient-to-t from-saafin-dark-bg/59 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-20 min-h-[70vh] flex flex-col items-center justify-center">
        <h2
          ref={titleRef}
          className="
            text-[clamp(2.5rem,8vw,6rem)] font-bold
            leading-[0.85] tracking-tighter
            text-white text-center
          "
        >
          PURE WATER
          <br />
          PURE LIFE
        </h2>

        <div ref={cardRef} className="mt-12 flex flex-col items-center gap-3">
          <div className="flex items-center justify-between w-36">
            <span className="text-xs font-medium tracking-wider text-white">
              CLASSICS
            </span>
            <span className="text-xs font-medium text-white">$35</span>
          </div>
          <div className="relative h-28 w-36 overflow-hidden bg-saafin-dark-surface">
            <Image
              src="https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_ouxei1ouxei1ouxe.jpg"
              alt="Loading tee"
              fill
              className="object-cover object-[50%_20%]"
              sizes="144px"
            />
          </div>
          <p className="text-sm font-medium text-white">Loading tee</p>
        </div>

        <div ref={rightTextRef} className="mt-8 text-center">
          <p className="text-xs tracking-wider text-white uppercase">
            Limited Edition
          </p>
          <p className="mt-1 text-xs tracking-wider text-white">
            2026 Collection
          </p>
        </div>
      </div>
    </section>
  );
} 