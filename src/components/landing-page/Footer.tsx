"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(headlineRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        watermarkRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden bg-saafin-primary-bg"
    >
      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-8 pt-32 pb-16 text-center">
        {/* Headline */}
        <div ref={headlineRef}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
            <span className="text-saafin-muted">
              Work seamlessly with a creative
              <br />
              team that&apos;s built to match your pace
              
              and{" "}
            </span>
            <span className="text-saafin-primary-text">
              exceed your expectations.
            </span>
          </h2>
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="mt-14 flex justify-center">
          <a
            href="/contact"
            className="
              group inline-flex items-center gap-4
              rounded-full bg-saafin-primary-text px-6 py-3
              transition-all duration-300
              hover:bg-saafin-secondary-text
            "
          >
            {/* Avatar */}
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <img
                src="https://scontent.cdninstagram.com/v/t51.82787-19/753206049_18332924344281192_6079860178002676486_n.jpg?_nc_cat=105&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy44OTYuQzMifQ%3D%3D&_nc_ohc=uMYNlHwrlJ0Q7kNvwEGxDxI&_nc_oc=Ado_3lIiyVdcvq8yRfW7vhq9wCPDboP8J1vEbdQhnnpc9YvMxaCc8c7MurHBYgVUyEQ&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=CMWa7Mm8IGjdA3dK427WaQ&_nc_ss=7baaf&oh=00_AQLAUZBkYd3TnS9ndbUNbb6cSdox8ya4DzuzTrlUXJ2_xw&oe=6A9F7605"
                alt="Team member"
                
                className="object-cover"
                sizes="40px"
              />
            </div>
            {/* Text */}
            <div className="text-left">
              <p className="text-sm font-medium text-white flex items-center gap-2">
                Book a Call
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </p>
              <p className="text-xs text-white/60">
                Let&apos;s talk about your project
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Watermark Text */}
      <div
        ref={watermarkRef}
        className="relative mx-auto max-w-7xl px-8"
      >
        <div className="overflow-hidden">
          <p
            className="
              text-[clamp(5rem,18vw,14rem)] font-heading
              leading-none tracking-tighter
              text-saafin-primary-text
              select-none text-center
            "
            style={{
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)",
            }}
          >
            SAAFIN
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-saafin-muted">
            &copy;2026 SAAFIN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-saafin-muted transition-colors duration-200 hover:text-saafin-primary-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}