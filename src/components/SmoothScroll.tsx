"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: React.ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    try {
      // Initialize Lenis for smooth scrolling
      const lenis = new Lenis({
        duration: 2.5,
        easing: (t) => {
          // Smooth cubic ease-out for luxurious scrolling
          return 1 - Math.pow(1 - t, 3);
        },
        touchMultiplier: 1.5,
      });

      lenisRef.current = lenis;

      // Integrate Lenis with GSAP ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove((time) => {
          lenis.raf(time * 1000);
        });
        lenis.destroy();
        lenisRef.current = null;
      };
    } catch (error) {
      console.warn("Lenis initialization error:", error);
    }
  }, [isClient]);

  return <>{children}</>;
}
