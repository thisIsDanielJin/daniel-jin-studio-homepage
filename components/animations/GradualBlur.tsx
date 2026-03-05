"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualBlurProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  blur?: "sm" | "md" | "lg";
}

export function GradualBlur({
  text,
  className,
  delay = 0,
  duration = 0.8,
  as: Component = "span",
  blur = "md",
}: GradualBlurProps) {
  const words = text.split(" ");

  const blurAmount = {
    sm: "blur(4px)",
    md: "blur(8px)",
    lg: "blur(12px)",
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      filter: blurAmount[blur],
      y: 10,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("inline-flex flex-wrap", className)}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Version that triggers on scroll into view
export function GradualBlurOnScroll({
  text,
  className,
  delay = 0,
  duration = 0.6,
  blur = "md",
}: GradualBlurProps) {
  const words = text.split(" ");

  const blurAmount = {
    sm: "blur(4px)",
    md: "blur(8px)",
    lg: "blur(12px)",
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      filter: blurAmount[blur],
      y: 8,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn("inline-flex flex-wrap", className)}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
