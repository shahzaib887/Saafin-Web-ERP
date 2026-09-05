import About from "@/components/landing-page/About";
import StatsSection from "@/components/landing-page/AboutUsSection";
import Banner1 from "@/components/landing-page/Banner1";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/Navbar";
import ProductGrid from "@/components/landing-page/ProductGrid";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductGrid />
      <About />
      <Banner1/>
      <StatsSection/>
      <Footer/>
    </>
  );
}
