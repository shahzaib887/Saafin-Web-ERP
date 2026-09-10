import type { Metadata } from "next";
import About from "@/components/landing-page/About";
import Banner1 from "@/components/landing-page/Banner1";
import Footer from "@/components/landing-page/Footer";
import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import Hero from "@/components/landing-page/Hero";
import ProductGrid from "@/components/landing-page/ProductGrid";
import HowItWorks from "@/components/landing-page/Steps";

export const metadata: Metadata = {
  title: "Saafin | Premium Natural Mineral Water for Everyday Hydration",
  description:
    "Discover Saafin premium mineral water, carefully sourced and bottled for refreshing everyday hydration. Pure, fresh, and perfectly balanced minerals for your health.",
  openGraph: {
    title: "Saafin | Premium Natural Mineral Water",
    description: "Experience premium mineral water for everyday hydration.",
    images: [
      {
        url: "https://ik.imagekit.io/mmyzvdovbv/Saafin/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saafin Premium Mineral Water",
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
      <Banner1 />
      <About />
      <HowItWorks />
      <Footer />
    </>
  );
}
