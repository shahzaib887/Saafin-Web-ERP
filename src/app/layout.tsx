import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/landing-page/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-brand",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://saafin.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Saafin | Premium Natural Mineral Water for Everyday Hydration",
  description:
    "Discover Saafin premium mineral water, carefully sourced and bottled for refreshing everyday hydration. Pure, fresh, and perfectly balanced minerals for your health.",
  keywords: [
    "premium mineral water",
    "natural mineral water",
    "bottled mineral water",
    "pure drinking water",
    "refreshing mineral water",
    "family bottled water",
    "everyday hydration",
    "healthy water",
  ],
  authors: [{ name: "Saafin Water" }],
  creator: "Saafin Water",
  publisher: "Saafin Water",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Saafin Water",
    title: "Saafin | Premium Natural Mineral Water for Everyday Hydration",
    description:
      "Experience premium mineral water, carefully sourced and bottled for refreshing everyday hydration.",
    images: [
      {
        url: "https://ik.imagekit.io/mmyzvdovbv/Saafin/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saafin Premium Mineral Water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saafin | Premium Natural Mineral Water",
    description:
      "Experience premium mineral water, carefully sourced and bottled for refreshing everyday hydration.",
    images: [
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/og-image.jpg",
    ],
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A1B1F" />
        <link rel="preconnect" href="https://ik.imagekit.io" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      </head>
      <body className="min-h-full flex flex-col bg-saafin-dark-bg">
        <Navbar />
        <main role="main" className="flex-1">
          <SmoothScroll>{children}</SmoothScroll>
        </main>
        <JsonLd />
      </body>
    </html>
  );
}