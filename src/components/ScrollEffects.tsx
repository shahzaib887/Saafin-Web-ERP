"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollEffectsProps = {
  children: React.ReactNode;
  className?: string;
  parallaxStrength?: number;
  scaleOnScroll?: boolean;
  rotateOnScroll?: boolean;
};

/**
 * ScrollEffects component for advanced scroll-based animations
 * Works seamlessly with Lenis smooth scrolling and GSAP
 */
export default function ScrollEffects({
  children,
  className = "",
  parallaxStrength = 0.5,
  scaleOnScroll = false,
  rotateOnScroll = false,
}: ScrollEffectsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      if (parallaxStrength !== 0) {
        gsap.to(element, {
          y: (index) => index * parallaxStrength * 100,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            markers: false,
          },
        });
      }

      if (scaleOnScroll) {
        gsap.to(element, {
          scale: 1.05,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            markers: false,
          },
        });
      }

      if (rotateOnScroll) {
        gsap.to(element, {
          rotation: 5,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            markers: false,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [parallaxStrength, scaleOnScroll, rotateOnScroll]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
