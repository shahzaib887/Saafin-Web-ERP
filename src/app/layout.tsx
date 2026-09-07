import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PreLoader from "@/components/PreLoader";
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
  title: "Saafin",
  description: "Saafin Mineral Water",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <PreLoader />
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}