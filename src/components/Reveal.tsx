"use client";

import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  
}: RevealProps) {
  return <div className={className}>{children}</div>;
}
