import Link from "next/link";

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Our Water", href: "#about" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/15">
      <div className="flex h-20 items-stretch md:h-14">
        <div className="flex items-center gap-3 border-r border-white/15 px-6 md:px-10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-5 w-5 text-white"
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="4" y1="7" x2="20" y2="17" />
            <line x1="20" y1="7" x2="4" y2="17" />
          </svg>
          <span className="whitespace-nowrap text-lg font-semibold text-white">
            Saafin Water
          </span>
        </div>

        <nav className="flex flex-1 items-center justify-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 underline-offset-4 transition hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center border-l border-white/15 bg-[#1c7a92]/30 px-8 md:px-12">
          <Link
            href="#products"
            className="text-sm font-medium text-white transition-colors hover:text-[#F6C083]"
          >
            Shop Water
          </Link>
        </div>
      </div>
    </header>
  );
}