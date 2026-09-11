import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Services | Saafin",
  description:
    "Discover Saafin's comprehensive services for premium mineral water delivery and hydration solutions.",
  openGraph: {
    title: "Our Services | Saafin",
    description: "Premium mineral water services for everyday hydration.",
    images: [
      {
        url: "https://ik.imagekit.io/mmyzvdovbv/Saafin/WhatsApp%20Image%202026-09-01%20at%205.03.45%20PM.jpeg?updatedAt=1788887507286",
        width: 1200,
        height: 630,
        alt: "Saafin Services",
      },
    ],
  },
};

const SERVICES = [
  {
    number: "01",
    title: "Premium Bottled Water",
    description:
      "Carefully sourced and bottled mineral water available in multiple sizes for your every need.",
    icon: "🚰",
  },
  {
    number: "02",
    title: "Home Delivery",
    description:
      "Convenient delivery service bringing refreshing Saafin water directly to your home.",
    icon: "🏠",
  },
  {
    number: "03",
    title: "Corporate Solutions",
    description:
      "Tailored hydration solutions for offices, events, and businesses of all sizes.",
    icon: "🏢",
  },
  {
    number: "04",
    title: "Bulk Orders",
    description:
      "Special pricing and logistics for large-scale orders and distribution needs.",
    icon: "📦",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "100% Pure",
    description:
      "Natural mineral water with no additives or artificial ingredients.",
  },
  {
    title: "Sustainably Sourced",
    description:
      "Responsibly selected from premium water sources with environmental care.",
  },
  {
    title: "Quality Assured",
    description: "Every bottle meets rigorous quality and freshness standards.",
  },
  {
    title: "Convenient Sizes",
    description: "From 330ml to 1.5L bottles designed for your lifestyle.",
  },
];

export default function Services() {
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
              <span className="text-sm font-medium">What We Offer</span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="text-4xl font-medium capitalize tracking-tighter text-saafin-dark-text leading-tight sm:text-5xl lg:text-6xl">
              Premium Water Solutions
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base text-saafin-dark-text/80 leading-relaxed md:text-lg">
              From bottled water to corporate hydration solutions, we deliver
              pure refreshment designed for modern lifestyles.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-saafin-dark-bg text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-medium capitalize tracking-tighter mb-16 sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES.map((service, i) => (
              <Reveal key={service.number} delay={0.12 + i * 0.08}>
                <div className="border-l-2 border-saafin-dark-surface pl-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <div className="text-sm text-saafin-dark-muted font-semibold mb-2">
                    {service.number}
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-saafin-dark-text">
                    {service.title}
                  </h3>
                  <p className="text-saafin-dark-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-saafin-dark-surface text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-medium capitalize tracking-tighter mb-16 sm:text-4xl lg:text-5xl">
              Why Choose Saafin
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, i) => (
              <Reveal key={item.title} delay={0.12 + i * 0.08}>
                <div className="flex flex-col">
                  <h3 className="text-xl font-medium mb-3 text-saafin-dark-text">
                    {item.title}
                  </h3>
                  <p className="text-saafin-dark-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-saafin-dark-bg text-saafin-dark-text">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-3xl font-medium capitalize tracking-tighter mb-8 sm:text-4xl lg:text-5xl">
                  Simple & Reliable
                </h2>
                <p className="text-lg text-saafin-dark-text/80 leading-relaxed mb-6">
                  Our streamlined process ensures you get premium mineral water
                  when you need it, how you need it. Whether you&apos;re looking
                  for single bottles or bulk corporate solutions, we&apos;ve got
                  you covered.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="text-saafin-dark-surface rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-4 h-4 text-saafin-dark-text"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-saafin-dark-text/80">
                      Order online or via phone
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-saafin-dark-surface rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-4 h-4 text-saafin-dark-text"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-saafin-dark-text/80">
                      Fast and reliable delivery
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-saafin-dark-surface rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-4 h-4 text-saafin-dark-text"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-saafin-dark-text/80">
                      Dedicated customer support
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative aspect-square w-full overflow-hidden rounded-saafin-lg bg-saafin-dark-surface">
                <Image
                  src="https://ik.imagekit.io/mmyzvdovbv/Saafin/Picsart_26-09-03_20-59-09-634.jpg.jpeg?updatedAt=1788451282136"
                  alt="Saafin Service"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-saafin-dark-surface text-saafin-dark-text">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-medium capitalize tracking-tighter mb-6">
              Ready to Refresh?
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-saafin-dark-text/80 mb-12">
              Join thousands of satisfied customers who trust Saafin for their
              daily hydration needs.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-saafin-dark-text px-8 py-4 text-sm font-semibold text-saafin-dark-bg transition-colors duration-300 hover:bg-saafin-dark-border"
            >
              Get Started
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
              >
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
