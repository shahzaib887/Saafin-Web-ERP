"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!textRef.current || !imageRef.current) return;

      gsap.from(textRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(imageRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-saafin-dark-bg py-32 px-8 rounded-b-2xl overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text Content */}
          <div ref={textRef}>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-saafin-dark-text">
              Crafted for those
              <br />
              who demand
              <br />
              <span className="text-saafin-dark-muted">more.</span>
            </h2>

            <p className="mt-8 text-base leading-relaxed text-saafin-dark-text max-w-md">
              We believe in the power of minimal design. Every stitch, every
              fabric, every detail is intentional. SAAFIN is not just clothing —
              it is a statement of refined taste and uncompromising quality.
            </p>

            <p className="mt-4 text-base leading-relaxed text-saafin-dark-text max-w-md">
              Born from a passion for timeless aesthetics, our collections merge
              contemporary silhouettes with enduring craftsmanship. Designed in
              house, made to last.
            </p>
          </div>

          {/* Right — Image */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-saafin-dark-surface">
              <Image
                fill
                src="https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_2wehzb2wehzb2weh%20(1).jpg"
                alt="SAAFIN About"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 border border-saafin-dark-border" />
          </div>
        </div>
      </div>
    </section>
  );
}