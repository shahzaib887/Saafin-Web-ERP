"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "For Business", href: "#b2b" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 md:border-white/15 ${
          isScrolled
            ? "border-white/15 bg-black/20 text-white"
            : "border-black/10 bg-white/25 text-black md:bg-transparent md:text-white"
        }`}
      >
        <div className="flex h-12 items-stretch md:h-14">
          {/* Logo */}
          <div className="flex items-center gap-2 border-r border-white/15 px-4 md:gap-3 md:px-10">
   <svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth={2}
  strokeLinecap="round"
  strokeLinejoin="round"
  className="h-4 w-4 text-current md:h-5 md:w-5"
>
  <path d="M12 2.5s-7 7.2-7 12a7 7 0 0 0 14 0c0-4.8-7-12-7-12Z" />
</svg>
            <span className="whitespace-nowrap text-xs font-semibold text-current sm:text-sm md:text-lg">
              Saafin Water
            </span>
          </div>

          {/* Desktop nav (mobile pe hidden) */}
          <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-current/90 underline-offset-4 transition hover:text-current hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Shop Water - desktop */}
          <div className="hidden items-center border-l border-white/15 bg-[#000000]/30 px-8 md:flex md:px-12">
            <Link
              href="#products"
              className="text-sm font-medium text-current transition-colors hover:text-[#ffffff]/60"
            >
              Order Water
            </Link>
          </div>

          {/* Hamburger - mobile only */}
          <div className="flex flex-1 items-center justify-end px-4 md:hidden">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-8 w-8 flex-col items-center justify-center gap-1 rounded-md text-current transition hover:text-[#F6C083]"
            >
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
              <span className="mr-[6px] block h-px w-3.5 self-end bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-xl md:hidden ${open ? "visible" : "invisible pointer-events-none"}`}
      >
        {/* Panel — bottom se slide hota hai */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-white/15 bg-black/55 px-8 pt-6 pb-10 ${open ? "translate-y-0" : "translate-y-full"}`}
        >
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:text-[#F6C083]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                className="h-5 w-5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="mt-6 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-link border-b border-white/10 py-4 text-2xl font-semibold text-white/90 transition-colors hover:text-[#F6C083]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Shop Water button */}
          <Link
            href="#products"
            onClick={() => setOpen(false)}
            className="mobile-link mt-8 block rounded-xl bg-white py-4 text-center text-sm font-semibold text-black transition-colors hover:bg-[#0000]/80"
          >
            Order Water
          </Link>
        </div>
      </div>
    </>
  );
}
