import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-saafin-dark-bg">
      {/* CTA section */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8 pt-24 sm:pt-32 pb-14 sm:pb-16 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium tracking-tight text-white capitalize leading-tight">
            Stay Refreshed with Saafin Premium Mineral Water
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 sm:mt-14 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 rounded-full bg-saafin-dark-text px-6 py-3 transition-all duration-300 hover:bg-saafin-dark-surface hover:scale-[1.02]"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full shrink-0">
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
                Find Saafin
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </p>
              <p className="text-xs text-saafin-primary-text/60">
                Hydration for every moment
              </p>
            </div>
          </Link>
        </Reveal>
      </div>

      {/* Big wordmark */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <p
          aria-hidden="true"
          className="text-[clamp(3.5rem,12vw,10rem)] font-heading leading-none tracking-tighter text-saafin-dark-text select-none text-center opacity-90"
        >
          SAAFIN
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mt-4">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-saafin-primary-bg/70">
            &copy; 2026 SAAFIN. All rights reserved.
          </p>
          <nav className="flex items-center gap-5 sm:gap-6" aria-label="Footer">
            {footerLinks.map((link) => (
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

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
