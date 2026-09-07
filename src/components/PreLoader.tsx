"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PreLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const loadingRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setHidden(true),
    });

    timeline
      .set(lineRef.current, { scaleX: 0 })
      .from(nameRef.current, {
        y: 26,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
      })
      .from(
        taglineRef.current,
        { y: 14, autoAlpha: 0, duration: 0.6, ease: "power3.out" },
        "-=0.45"
      )
      .from(
        loadingRef.current,
        { y: 8, autoAlpha: 0, duration: 0.4, ease: "power2.out" },
        "-=0.25"
      )
      .to(loadingRef.current, {
        autoAlpha: 0.45,
        duration: 0.45,
        repeat: 2,
        yoyo: true,
        ease: "power1.inOut",
      })
      .to(
        lineRef.current,
        { scaleX: 1, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      .to({}, { duration: 0.5 })
      .to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.inOut",
      });

    return () => {
      timeline.kill();
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={containerRef}
      className="dark fixed inset-0 z-[999] flex flex-col items-center justify-center bg-saafin-dark-bg"
    >
      <h1
        ref={nameRef}
        className="text-3xl font-bold tracking-tight text-saafin-dark-text md:text-4xl"
      >
        Saafin
      </h1>

      <span
        ref={lineRef}
        className="mt-4 h-px w-16 origin-left bg-saafin-dark-border"
      />

      <p
        ref={taglineRef}
        className="mt-4 text-sm tracking-wide text-saafin-dark-muted"
      >
        Pure Water
      </p>

      <span
        ref={loadingRef}
        className="mt-8 text-[10px] uppercase tracking-[0.3em] text-saafin-dark-muted"
      >
        Loading...
      </span>
    </div>
  );
}
