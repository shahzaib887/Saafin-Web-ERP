"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/923242626476?text=Hello%20Saafin%2C%20I%20would%20like%20to%20know%20more%20about%20your%20water%20service.";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(() =>
    typeof window !== "undefined"
      ? window.scrollY > window.innerHeight * 0.1
      : false,
  );

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const passedThreshold = currentScrollY > window.innerHeight * 0.1;
      const scrollingDown = currentScrollY > previousScrollY;

      setIsVisible((currentlyVisible) => {
        if (scrollingDown && passedThreshold) return true;
        if (!scrollingDown && currentScrollY < previousScrollY) return false;
        return currentlyVisible;
      });

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Saafin on WhatsApp"
      className={`fixed bottom-4 left-1/2 z-[1030] inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-[#062b17] transition-[opacity,transform] duration-300 ease-out hover:bg-[#20bd5b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] md:bottom-6 md:px-4 ${isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"}`}
    >
      <MessageCircle aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
      <span>WhatsApp</span>
    </a>
  );
}