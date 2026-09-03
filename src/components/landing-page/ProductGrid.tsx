"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    category: "CLASSICS",
    name: "Icon Comfort beanie",
    price: "$40",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_ouxei1ouxei1ouxe.jpg",
  },
  {
    id: 2,
    category: "CLASSICS",
    name: "Icon hoodie",
    price: "$65",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_2wehzb2wehzb2weh%20(1).jpg",
  },
  {
    id: 3,
    category: "CLASSICS",
    name: "Icon long sleeve",
    price: "$45",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/Gemini_Generated_Image_ot6y29ot6y29ot6y.jpg",
  },
];

export default function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardsRef.current) return;

      const cards = cardsRef.current.querySelectorAll(".product-card");

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-saafin-primary-bg py-24 px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-saafin-primary-text">
            Apparel
          </h2>
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium tracking-wider text-saafin-primary-text">
              VIEW ALL
            </span>
            <div className="flex items-center gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-saafin-border text-saafin-primary-text transition-colors hover:bg-saafin-surface">
                <ArrowLeftIcon className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-saafin-border text-saafin-primary-text transition-colors hover:bg-saafin-surface">
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card group cursor-pointer">
              {/* Card Top */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium tracking-wider text-saafin-muted">
                  {product.category}
                </span>
                <span className="text-sm font-medium text-saafin-primary-text">
                  {product.price}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-saafin-surface">
                <Image
                  src={product.image}
                  fill
                  alt={product.name}
                  className="h-screen w-full object-cover object-[50%_20%] transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Product Name */}
              <p className="mt-4 text-base font-medium text-saafin-primary-text">
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
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
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
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
