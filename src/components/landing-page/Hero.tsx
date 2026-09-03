"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(imgRef.current, {
        scale: 1.15,
        opacity: 0,
        duration: 1.4,
      })
        .from(
          titleRef.current,
          {
            y: 80,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.8",
        )
        .from(
          subRef.current?.children || [],
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.6",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#DEDEDE]"
    >
      {/* Background Image Layer */}
      <div
        ref={imgRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          priority
          fill
          src="https://ik.imagekit.io/mmyzvdovbv/Saafin/Picsart_26-09-03_20-59-09-634.jpg.jpeg"
          alt="SAAFIN Product"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Top Nav Area (spacing only — actual Navbar separate) */}
      <div className="relative z-10 h-16 sm:h-20" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex-col justify-between px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
        {/* Bottom Content Grid */}
        <div className="mt-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 sm:gap-0 relative">
            {/* Left — Tagline */}
            <div
              ref={subRef}
              className="max-w-[16rem] backdrop-blur-[5px] p-2 rounded-2xl text-center sm:text-left order-2 sm:order-1"
            >
              <p className="text-xs sm:text-sm text-saafin-dark-text">
                A sophisticated blend of elegant
                <br />
                design and daily comfort.
              </p>
              <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs tracking-widest text-saafin-dark-text">
                Scroll Down
              </p>
            </div>

            {/* Center — Big Title */}
            <h1
              ref={titleRef}
              className="
                text-[clamp(3rem,14vw,10rem)]
                sm:text-[clamp(4rem,12vw,10rem)]
                leading-none tracking-tighter
                text-saafin-dark-text
                select-none
                order-1 sm:order-2
                sm:absolute sm:left-1/2 sm:-translate-x-1/2
              "
              style={{ bottom: "2rem" }}
            >
              SAAFIN
            </h1>

            {/* Right — Collection Info */}
            <div
              ref={subRef}
              className="text-center sm:text-right backdrop-blur-[5px] p-2 rounded-2xl order-3"
            >
              <p className="text-[10px] sm:text-xs tracking-widest text-saafin-dark-text underline underline-offset-4">
                NEW COLLECTION 26
              </p>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs tracking-widest text-saafin-dark-text">
                2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom for text readability */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 sm:h-68 bg-gradient-to-t from-saafin-dark-bg/99 to-transparent" />
    </section>
  );
}
