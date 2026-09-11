import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Saafin | Our Story & Mission",
  description:
    "Learn about Saafin's commitment to delivering premium mineral water for everyday hydration and wellness.",
  openGraph: {
    title: "About Saafin | Our Story & Mission",
    description: "Discover the Saafin story and our mission for premium hydration.",
    images: [
      {
        url: "https://ik.imagekit.io/mmyzvdovbv/Saafin/WhatsApp%20Image%202026-09-01%20at%205.03.45%20PM.jpeg?updatedAt=1788887507286",
        width: 1200,
        height: 630,
        alt: "About Saafin",
      },
    ],
  },
};

const VALUES = [
  {
    title: "Purity First",
    description:
      "We believe in delivering pure, uncompromised mineral water without additives or artificial ingredients.",
  },
  {
    title: "Consistent Quality",
    description:
      "Every bottle meets our rigorous quality standards, ensuring freshness and excellence in every sip.",
  },
  {
    title: "Customer Care",
    description:
      "Your satisfaction is our priority. We're dedicated to exceptional service and reliable support.",
  },
  {
    title: "Sustainability",
    description:
      "We responsibly source our water and work toward sustainable practices for our planet.",
  },
];

const CAPABILITIES = [
  {
    title: "Premium Sourcing",
    items: [
      "Carefully selected mineral water sources",
      "Natural quality assurance",
      "Sustainable extraction practices",
    ],
  },
  {
    title: "Quality Control",
    items: [
      "Rigorous testing protocols",
      "Multi-stage filtration",
      "Freshness guarantees",
    ],
  },
  {
    title: "Distribution",
    items: [
      "Efficient delivery networks",
      "Reliable logistics",
      "Flexible ordering options",
    ],
  },
  {
    title: "Customer Service",
    items: [
      "24/7 support availability",
      "Responsive communication",
      "Dedicated account management",
    ],
  },
];

export default function About() {
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
              <span className="text-sm font-medium">Our Story</span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="text-4xl font-medium capitalize tracking-tighter text-saafin-dark-text leading-tight sm:text-5xl lg:text-6xl">
              Pure Hydration, Crafted with Care
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base text-saafin-dark-text/80 leading-relaxed md:text-lg">
              Saafin represents our commitment to delivering premium mineral water that 
              supports healthy, refreshing everyday hydration.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-saafin-dark-bg text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.1}>
              <div className="relative aspect-square w-full overflow-hidden rounded-saafin-lg">
                <Image
                  src="https://ik.imagekit.io/mmyzvdovbv/Saafin/Picsart_26-09-03_20-59-09-634.jpg.jpeg?updatedAt=1788451282136"
                  alt="Saafin water"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <h2 className="text-3xl font-medium capitalize tracking-tighter mb-6 sm:text-4xl lg:text-5xl">
                  The Saafin Journey
                </h2>
                <p className="text-base text-saafin-dark-text/80 leading-relaxed mb-6 md:text-lg">
                  Founded on the belief that premium hydration should be accessible to everyone, 
                  Saafin began with a simple mission: deliver pure, refreshing mineral water 
                  that supports a healthy lifestyle.
                </p>
                <p className="text-base text-saafin-dark-text/80 leading-relaxed mb-6 md:text-lg">
                  We carefully select our water sources, implement rigorous quality controls, 
                  and design convenient packaging that fits seamlessly into modern life. Today, 
                  Saafin is trusted by families, athletes, and health-conscious individuals 
                  across the region.
                </p>
                <p className="text-base text-saafin-dark-text/80 leading-relaxed md:text-lg">
                  Every bottle represents our dedication to excellence, sustainability, and 
                  the simple pleasure of pure refreshment.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-saafin-dark-surface text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <div>
                <h3 className="text-2xl font-medium capitalize tracking-tighter mb-4 text-saafin-dark-text">
                  Our Mission
                </h3>
                <p className="text-lg text-saafin-dark-text/80 leading-relaxed">
                  To provide premium, pure mineral water that nourishes daily hydration and 
                  supports the wellbeing of individuals and families who choose quality and 
                  care in what they consume.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <h3 className="text-2xl font-medium capitalize tracking-tighter mb-4 text-saafin-dark-text">
                  Our Vision
                </h3>
                <p className="text-lg text-saafin-dark-text/80 leading-relaxed">
                  To become the trusted choice for premium mineral water, recognized for our 
                  commitment to quality, sustainability, and accessibility in every market we serve.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-saafin-dark-bg text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-medium capitalize tracking-tighter mb-16">
              Core Values
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={0.12 + i * 0.08}>
                <div className="border-l-2 border-saafin-dark-surface pl-8">
                  <h3 className="text-2xl font-medium mb-3 text-saafin-dark-text">
                    {value.title}
                  </h3>
                  <p className="text-saafin-dark-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-saafin-dark-surface text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-medium capitalize tracking-tighter mb-16">
              Our Capabilities
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={0.12 + i * 0.08}>
                <div>
                  <h3 className="text-xl font-medium mb-6 text-saafin-dark-text">
                    {cap.title}
                  </h3>
                  <ul className="space-y-3">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          className="w-4 h-4 text-saafin-dark-muted flex-shrink-0 mt-1"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="text-saafin-dark-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-saafin-dark-bg text-saafin-dark-text">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-medium capitalize tracking-tighter mb-6">
              Join the Saafin Community
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-saafin-dark-text/80 mb-12">
              Experience the difference quality hydration makes in your daily life.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-saafin-dark-text px-8 py-4 text-sm font-semibold text-saafin-dark-bg transition-colors duration-300 hover:bg-saafin-dark-border"
            >
              Learn More
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
