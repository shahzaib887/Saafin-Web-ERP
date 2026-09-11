import type { Metadata } from "next";
import About from "@/components/landing-page/About";
import Footer from "@/components/landing-page/Footer";
import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import Hero from "@/components/landing-page/Hero";
import ProductGrid from "@/components/landing-page/ProductGrid";
import HowItWorks from "@/components/landing-page/Steps";

export const metadata: Metadata = {
  title: "SAAFIN Water Solutions | Refreshment You Can Trust",
  description:
    "SAAFIN brings clean, refreshing bottled drinking water for home, work, travel, meals, and everyday life.",
  openGraph: {
    title: "SAAFIN Water Solutions | Bottled Drinking Water",
    description: "Clean, refreshing bottled drinking water for everyday life.",
    images: [
      {
        url: "https://ik.imagekit.io/mmyzvdovbv/Saafin/WhatsApp%20Image%202026-09-01%20at%205.03.45%20PM.jpeg?updatedAt=1788887507286",
        width: 1200,
        height: 630,
        alt: "SAAFIN bottled drinking water",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <FeaturedProducts />
      <About />
      <HowItWorks />
      <Footer />
    </>
  );
}
