import type { Metadata, Viewport } from "next";
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

const baseUrl = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://saafin-web-erp.vercel.app"
).replace(/\/$/, "");
const ogImage =
  "https://ik.imagekit.io/mmyzvdovbv/Saafin/tr:w-1200,h-630,c-maintain_ratio/WhatsApp%20Image%202026-09-01%20at%205.03.45%20PM.jpeg?updatedAt=1788887507286";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "SAAFIN Water Solutions | Refreshment You Can Trust",
  description:
    "SAAFIN brings clean, refreshing bottled drinking water for home, work, travel, meals, and everyday life.",
  keywords: [
    "bottled drinking water",
    "pure drinking water",
    "refreshing bottled water",
    "family drinking water",
    "water for home and office",
    "everyday refreshment",
    "water delivery Pakistan",
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
    url: `${baseUrl}/`,
    siteName: "Saafin Water",
    title: "SAAFIN Water Solutions | Refreshment You Can Trust",
    description:
      "Clean, refreshing bottled drinking water for everyday life.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "SAAFIN bottled drinking water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAAFIN Water Solutions | Bottled Drinking Water",
    description:
      "Clean, refreshing bottled drinking water for home, work, travel, and everyday life.",
    images: [
      ogImage,
    ],
  },
  alternates: {
    canonical: `${baseUrl}/`,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0A1B1F",
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