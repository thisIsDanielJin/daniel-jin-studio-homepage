"use client";

import { motion, Variants } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={variants}
      className={className}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
