import type { Metadata } from "next";
import About from "@/components/landing-page/About";
import Footer from "@/components/landing-page/Footer";
import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import Hero from "@/components/landing-page/Hero";
import ProductGrid from "@/components/landing-page/ProductGrid";
import HowItWorks from "@/components/landing-page/Steps";
import RenewalsSection from "@/components/landing-page/ShowCase1";
import SetupImpactSection from "@/components/landing-page/SetupImpactSection";

export const metadata: Metadata = {
  title: "SAAFIN — Bottled Drinking Water in Pakistan",
  description:
    "SAAFIN bottles drinking water for homes, offices, and businesses — 330ml, 500ml, and 1.5L, sourced, checked, and sealed with care.",
  openGraph: {
    url: "https://saafin-web-erp.vercel.app/",
    title: "SAAFIN — Bottled Drinking Water in Pakistan",
    description:
      "Clean bottled drinking water for homes, offices, and businesses. Three sizes, one careful process.",
    images: [
      {
        url: "https://ik.imagekit.io/mmyzvdovbv/Saafin/WhatsApp%20Image%202026-09-01%20at%205.03.45%20PM.jpeg?updatedAt=1788887507286",
        width: 1200,
        height: 630,
        alt: "SAAFIN bottled drinking water — 330ml, 500ml, and 1.5L",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAAFIN — Bottled Drinking Water in Pakistan",
    description:
      "Clean bottled drinking water for homes, offices, and businesses. Three sizes, one careful process.",
    images: [
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/tr:w-1200,h-630,c-maintain_ratio/WhatsApp%20Image%202026-09-01%20at%205.03.45%20PM.jpeg?updatedAt=1788887507286",
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <FeaturedProducts />
    <RenewalsSection/>
    <SetupImpactSection/>
      <About />
      <HowItWorks />
      <Footer />
    </>
  );
}
