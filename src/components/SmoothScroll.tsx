"use client";

import { useEffect, useRef } from "react";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    let scroll: { destroy: () => void } | undefined;
    let cancelled = false;

    import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
      if (cancelled || !scrollContainerRef.current) return;

      scroll = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
      });
    });

    return () => {
      cancelled = true;
      scroll?.destroy();
    };
  }, []);

  return (
    <div ref={scrollContainerRef} data-scroll-container>
      {children}
    </div>
  );
}