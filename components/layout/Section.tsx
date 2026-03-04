"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/motion";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  id?: string;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  background?: "primary" | "secondary" | "bright";
  children: React.ReactNode;
  animate?: boolean;
}

const bgStyles = {
  primary: "bg-bg-primary",
  secondary: "bg-bg-secondary",
  bright: "bg-bg-bright section-bright",
};

export function Section({
  id,
  className,
  containerSize = "xl",
  background = "primary",
  children,
  animate = true,
}: SectionProps) {
  const Wrapper = animate ? motion.section : "section";
  const wrapperProps = animate
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: viewportConfig,
        variants: fadeInUp,
      }
    : {};

  return (
    <Wrapper
      id={id}
      className={cn(
        "section-padding",
        bgStyles[background],
        className
      )}
      {...wrapperProps}
    >
      <Container size={containerSize}>{children}</Container>
    </Wrapper>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2 className={cn(
        "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
        light ? "text-text-dark" : "text-text-primary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg max-w-2xl",
          centered && "mx-auto",
          light ? "text-text-dark/70" : "text-text-secondary"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
