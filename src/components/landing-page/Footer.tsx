import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";

const footerNavigationLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-saafin-dark-bg">
      {/* CTA section */}
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-14 text-center sm:px-8 sm:pt-40 sm:pb-24">
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(1.875rem,7vw,4.5rem)] font-medium leading-[1.08] tracking-tighter text-white capitalize sm:text-[clamp(2.25rem,5vw,4.5rem)]">
            Ready to Order?
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex justify-center sm:mt-20">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-saafin-dark-text px-6 py-3.5 transition-all duration-300 hover:bg-saafin-dark-surface hover:scale-[1.02] sm:gap-4 sm:px-7 sm:py-4"
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-full shrink-0 sm:h-10 sm:w-10">
              <Image
                src="https://ik.imagekit.io/mmyzvdovbv/Saafin/web%20image.jpg"
                alt="Saafin team member"
                fill
                loading="lazy"
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-saafin-primary-text flex items-center gap-2">
                View Our Products
                <FooterCtaArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </p>
              <p className="text-xs text-saafin-primary-text/60">
                Or contact us for business supply
              </p>
            </div>
          </Link>
        </Reveal>
      </div>

      {/* Big wordmark */}
      <div className="relative mx-auto max-w-7xl px-6 pt-10 sm:px-8 sm:pt-24">
        <p
          aria-hidden="true"
          className="text-[clamp(3.5rem,16vw,12rem)] font-heading leading-none tracking-tighter text-saafin-dark-text select-none text-center opacity-90"
          style={{
            maskImage: "linear-gradient(to bottom, [#000000], transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 100%)",
          }}
        >
          SAAFIN
        </p>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 border-t border-white/10 sm:mt-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row sm:px-8 sm:py-8">
          <p className="text-xs text-saafin-primary-bg/70">
            &copy; 2026 SAAFIN. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6" aria-label="Footer">
            {footerNavigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-saafin-primary-bg/70 transition-colors duration-200 hover:text-saafin-dark-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterCtaArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}