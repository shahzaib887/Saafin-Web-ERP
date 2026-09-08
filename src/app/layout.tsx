import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/landing-page/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-brand",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saafin | Premium Natural Mineral Water for Everyday Hydration",
  description:
    "Discover Saafin premium mineral water, carefully sourced and bottled for refreshing everyday hydration. Explore Saafin Pure, Family, and Refresh water.",
  keywords: [
    "premium mineral water",
    "natural mineral water",
    "bottled mineral water",
    "pure drinking water",
    "refreshing mineral water",
    "family bottled water",
    "everyday hydration",
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}