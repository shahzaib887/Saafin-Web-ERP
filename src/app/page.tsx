import About from "@/components/landing-page/About";
import Banner1 from "@/components/landing-page/Banner1";
import Footer from "@/components/landing-page/Footer";
import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import Hero from "@/components/landing-page/Hero";
import ProductGrid from "@/components/landing-page/ProductGrid";
import HowItWorks from "@/components/landing-page/Steps";

export default function Home() {
  return (
    <div className="bg-saafin-dark-bg">
      <Hero />
      <ProductGrid />
      <FeaturedProducts />
      <Banner1 />
      <About />
      <HowItWorks />
      <Footer />
    </div>
  );
}
