import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Work | Saafin",
  description:
    "Explore Saafin's portfolio of successful mineral water projects and brand initiatives.",
  openGraph: {
    title: "Our Work | Saafin",
    description: "Portfolio of Saafin's premium mineral water projects.",
    images: [
      {
        url: "https://ik.imagekit.io/mmyzvdovbv/Saafin/WhatsApp%20Image%202026-09-01%20at%205.03.45%20PM.jpeg?updatedAt=1788887507286",
        width: 1200,
        height: 630,
        alt: "Saafin Work",
      },
    ],
  },
};

const PROJECTS = [
  {
    id: 1,
    title: "Premium Brand Launch",
    category: "Brand Strategy",
    description:
      "Establishing Saafin as a premium mineral water brand in the market.",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/ChatGPT%20Image%20Sep%208,%202026,%2006_37_58%20PM.png",
    year: "2025-2026",
  },
  {
    id: 2,
    title: "Packaging Design",
    category: "Design",
    description: "Crafting distinctive bottle designs that reflect premium quality.",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/Picsart_26-09-03_20-59-09-634.jpg.jpeg?updatedAt=1788451282136",
    year: "2025",
  },
  {
    id: 3,
    title: "Distribution Network",
    category: "Logistics",
    description: "Building reliable delivery infrastructure across regions.",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_eejvh0eejvh0eejv.jpg?updatedAt=1788452014242",
    year: "2026",
  },
  {
    id: 4,
    title: "Corporate Partnerships",
    category: "Business Development",
    description:
      "Establishing long-term relationships with corporate clients nationwide.",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_4gt55n4gt55n4gt5.jpg?updatedAt=1788449991119",
    year: "2026",
  },
];

export default function Work() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-saafin-dark-bg pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-saafin-dark-surface via-saafin-dark-bg to-saafin-dark-bg opacity-60" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center gap-2 text-saafin-dark-muted mb-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                className="h-4 w-4"
              >
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="4" y1="7" x2="20" y2="17" />
                <line x1="20" y1="7" x2="4" y2="17" />
              </svg>
              <span className="text-sm font-medium">Portfolio</span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="text-4xl font-bold capitalize tracking-tight text-saafin-dark-text leading-tight sm:text-5xl lg:text-6xl">
              Our Work
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base text-saafin-dark-text/80 leading-relaxed md:text-lg">
              A portfolio of carefully executed projects that showcase our commitment to 
              quality, innovation, and excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-saafin-dark-bg text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 text-saafin-dark-muted mb-4">
                  <span className="text-xs font-semibold capitalize">Featured</span>
                  <div className="h-px w-8 bg-saafin-dark-muted" />
                </div>
                <h2 className="text-3xl font-bold capitalize tracking-tight mb-6 sm:text-4xl lg:text-5xl">
                  Premium Brand Establishment
                </h2>
                <p className="text-lg text-saafin-dark-text/80 leading-relaxed mb-8">
                  Our flagship project focused on establishing Saafin as a premium mineral water 
                  brand in the market. From brand identity to market positioning, we&apos;ve created 
                  a comprehensive strategy that resonates with health-conscious consumers.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-saafin-dark-muted capitalize font-semibold mb-1">
                      Category
                    </p>
                    <p className="text-saafin-dark-text">Brand Strategy & Positioning</p>
                  </div>
                  <div>
                    <p className="text-xs text-saafin-dark-muted capitalize font-semibold mb-1">
                      Year
                    </p>
                    <p className="text-saafin-dark-text">2025 - 2026</p>
                  </div>
                </div>
              </div>
              <Reveal delay={0.15}>
                <div className="relative aspect-square w-full overflow-hidden rounded-saafin-lg">
                  <Image
                    src="https://ik.imagekit.io/mmyzvdovbv/Saafin/ChatGPT%20Image%20Sep%208,%202026,%2006_37_58%20PM.png"
                    alt="Premium Brand Launch"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-saafin-dark-surface text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold capitalize tracking-tight mb-16 sm:text-4xl lg:text-5xl">
              Recent Projects
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(1).map((project, i) => (
              <Reveal key={project.id} delay={0.12 + i * 0.08}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-saafin-lg mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-saafin-dark-muted capitalize font-semibold">
                      {project.category}
                    </span>
                    <span className="text-xs text-saafin-dark-muted">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-saafin-dark-text group-hover:text-saafin-dark-muted transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-saafin-dark-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-saafin-dark-bg text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold capitalize tracking-tight mb-16 sm:text-4xl lg:text-5xl">
              Our Impact
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Reveal delay={0.15}>
              <div>
                <p className="text-5xl md:text-6xl font-bold text-saafin-dark-text mb-3">
                  4
                </p>
                <p className="text-lg text-saafin-dark-muted">
                  Major projects completed
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <p className="text-5xl md:text-6xl font-bold text-saafin-dark-text mb-3">
                  100%
                </p>
                <p className="text-lg text-saafin-dark-muted">
                  Client satisfaction rate
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div>
                <p className="text-5xl md:text-6xl font-bold text-saafin-dark-text mb-3">
                  2+
                </p>
                <p className="text-lg text-saafin-dark-muted">
                  Years of excellence
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-saafin-dark-surface text-saafin-dark-text">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold capitalize tracking-tight mb-6">
              Start Your Project
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-saafin-dark-text/80 mb-12">
              Have a project in mind? Let&apos;s create something extraordinary together.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-saafin-dark-text px-8 py-4 text-sm font-semibold text-saafin-dark-bg transition-colors duration-300 hover:bg-saafin-dark-border"
            >
              Get in Touch
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M6 2h12v20l-6-4.2L6 22V2z" />
              </svg>
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
