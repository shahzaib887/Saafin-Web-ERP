"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 32,
  blur = 12,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Responsive settings based on viewport width
    const isMobile = window.innerWidth < 768;
    const animDuration = isMobile ? duration * 0.8 : duration;
    const animY = isMobile ? y * 0.75 : y;
    const animBlur = isMobile ? blur * 0.8 : blur;
    const triggerStart = isMobile ? "top 90%" : "top 85%";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: animY,
          filter: `blur(${animBlur}px)`,
          willChange: "transform, opacity, filter",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: animDuration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: triggerStart,
            toggleActions: "play none none none",
            once,
            markers: false,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [blur, delay, duration, once, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
