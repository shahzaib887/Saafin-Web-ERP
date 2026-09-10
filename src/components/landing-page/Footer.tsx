import Reveal from "@/components/Reveal";

const footerLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-saafin-dark-bg">
      <div className="mx-auto max-w-5xl px-8 pt-32 pb-16 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium  tracking-tight">
            <span className="text-white uppercase ">
              Stay Refreshed with Saafin Premium Mineral Water
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <a
            href="/contact"
            className="
              group inline-flex items-center gap-4
              rounded-full bg-saafin-dark-text px-6 py-3
              transition-all duration-300
              hover:bg-saafin-dark-surface
            "
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <img
                src="https://ik.imagekit.io/mmyzvdovbv/Saafin/web%20image.jpg"
                alt="Team member"
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="text-left">
              <p className="text-[0.83rem] font-medium text-saafin-primary-text flex items-center gap-2">
                Find Saafin
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </p>
              <p className="text-[0.71rem] text-saafin-primary-text/60">
                Pure hydration for every moment
              </p>
            </div>
          </a>
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-7xl px-8">
        <div className="overflow-hidden">
          <p
            className="
              text-[clamp(5rem,18vw,14rem)] font-heading
              leading-none tracking-tighter
              text-saafin-dark-text
              select-none text-center
            "
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)",
            }}
          >
            SAAFIN
          </p>
        </div>
      </div>

      <Reveal delay={0.3} className="mx-auto max-w-7xl px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-saafin-dark-muted">
            &copy;2026 SAAFIN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-saafin-dark-muted transition-colors duration-200 hover:text-saafin-dark-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
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
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
