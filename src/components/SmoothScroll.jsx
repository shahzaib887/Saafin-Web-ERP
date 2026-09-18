
'use client';

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    let scroll;
    let cancelled = false;

    import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
      if (cancelled || !scrollRef.current) return;

      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    });

    return () => {
      cancelled = true;
      scroll?.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}