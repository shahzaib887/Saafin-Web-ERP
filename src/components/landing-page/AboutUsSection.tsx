"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: "200+",
    label: "PRODUCTS DELIVERED",
    desc: "Premium fashion that drives real style",
  },
  {
    number: "100+",
    label: "HAPPY CLIENTS",
    desc: "Customers that keep coming back for more",
  },
  {
    number: "4+",
    label: "YEARS OF EXPERIENCE",
    desc: "Mastering the art of fashion, content and design",
  },
  {
    number: "95%",
    label: "CLIENT SATISFACTION",
    desc: "We mostly focus on exceeding expectations",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.from(headingRef.current, {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }).from(
      statsRef.current?.children || [],
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-saafin-dark-bg py-24 md:py-32 px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Heading + CTA */}
          <div ref={headingRef}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-saafin-dark-text">
              We Turn
              <br />
              Ideas into
              <br />
              Visual Masterpieces
            </h2>

            <p className="mt-8 text-sm leading-relaxed text-saafin-dark-muted max-w-sm">
              Whether it&apos;s an engaging brand video, a vibrant social media
              campaign, or captivating motion graphics, we bring creativity and
              expertise to every project.
            </p>

            <a
              href="/about"
              className="
                inline-flex items-center mt-8
                rounded-full border border-saafin-dark-border
                px-6 py-3 text-sm font-medium
                text-saafin-dark-text
                transition-all duration-300
                hover:bg-saafin-dark-text hover:text-saafin-dark-bg
              "
            >
              Know More About us
            </a>
          </div>

          {/* Right — Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <p className="text-5xl md:text-6xl font-bold tracking-tight text-saafin-dark-text">
                  {stat.number}
                </p>
                <span className="mt-3 inline-block self-start rounded-full bg-saafin-dark-surface px-3 py-1 text-[10px] font-semibold tracking-wider text-saafin-dark-muted uppercase">
                  {stat.label}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-saafin-dark-muted">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}