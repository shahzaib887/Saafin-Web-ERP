"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "MEN", href: "/men" },
  { label: "WOMEN", href: "/women" },
  { label: "KIDS", href: "/kids" },
  { label: "BEAUTY", href: "/beauty" },
];

const navActions = [
  { label: "SEARCH", icon: SearchIcon },
  { label: "LOGIN", icon: UserIcon },
  { label: "WISHLIST", icon: HeartIcon },
  { label: "CART (0)", icon: CartIcon },
];

const mobileLeftLinks = [
  { label: "PRODUCTS", href: "/products" },
  { label: "PRICING", href: "/pricing" },
  { label: "ABOUT", href: "/about" },
];

const mobileRightLinks = [
  { label: "LOGIN", href: "/login" },
  { label: "REGISTER", href: "/register" },
  { label: "ORDER", href: "/order" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top -80",
        onUpdate: (self) => {
          setScrolled(self.progress > 0);
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const textClass = scrolled
    ? "text-saafin-dark-text"
    : "text-saafin-primary-text";
  const hoverClass = scrolled
    ? "hover:text-saafin-dark-muted"
    : "hover:text-saafin-muted";

  return (
    <>
      <nav
        ref={navRef}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${
            scrolled
              ? "bg-saafin-dark-bg/95 backdrop-blur-md shadow-saafin-sm h-10"
              : "bg-transparent h-20 sm:h-24 md:h-20"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 h-full">
          <div className="flex h-full items-center justify-between relative">
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
                    font-medium tracking-wider ${textClass} ${hoverClass}
                    transition-all duration-500
                    ${scrolled ? "text-[10px]" : "text-xs"}
                  `}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div
              className={`
                flex md:hidden flex-col items-start gap-0
                transition-all duration-500
                ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}
              `}
            >
              {mobileLeftLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
                    font-medium tracking-wider ${textClass} ${hoverClass}
                    transition-all duration-300
                    text-[10px] leading-tight py-0.5
                  `}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="/"
              className={`
                absolute left-1/2 -translate-x-1/2
                font-bold tracking-tight ${textClass}
                select-none transition-all duration-500
                ${scrolled ? "text-xl md:text-2xl" : "text-2xl md:text-4xl"}
              `}
            >
              SAAFIN
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navActions.map((action) => (
                <button
                  key={action.label}
                  className={`
                    flex items-center gap-2
                    font-medium tracking-wider ${textClass} ${hoverClass}
                    transition-all duration-500
                    ${scrolled ? "text-[10px]" : "text-xs"}
                  `}
                >
                  <action.icon
                    className={`transition-all duration-500 ${
                      scrolled ? "h-3 w-3" : "h-4 w-4"
                    }`}
                  />
                  <span className={scrolled ? "hidden lg:inline" : ""}>
                    {action.label}
                  </span>
                </button>
              ))}
            </div>

            <div
              className={`
                flex md:hidden flex-col items-end gap-0
                transition-all duration-500
                ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}
              `}
            >
              {mobileRightLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
                    font-medium tracking-wider ${textClass} ${hoverClass}
                    transition-all duration-300
                    text-[10px] leading-tight py-0.5
                  `}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-saafin-dark-bg/98 backdrop-blur-lg pt-20">
          <div className="flex flex-col items-center gap-8 py-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium tracking-wider text-saafin-dark-text hover:text-saafin-dark-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="w-16 h-px bg-saafin-dark-muted/30 my-4" />
            {navActions.map((action) => (
              <button
                key={action.label}
                className="flex items-center gap-3 text-sm font-medium tracking-wider text-saafin-dark-text hover:text-saafin-dark-muted transition-colors"
              >
                <action.icon className="h-5 w-5" />
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/* Icons (unchanged) */
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}
function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
