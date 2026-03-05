"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PrismaticBurstProps {
  className?: string;
  intensity?: "subtle" | "medium" | "vibrant";
  animate?: boolean;
}

export function PrismaticBurst({
  className,
  intensity = "medium",
  animate = true,
}: PrismaticBurstProps) {
  const opacityMap = {
    subtle: 0.15,
    medium: 0.25,
    vibrant: 0.4,
  };

  const baseOpacity = opacityMap[intensity];

  // Prismatic colors - warm spectrum that fits "shine" theme
  const colors = [
    { color: "#FBBF24", angle: 0 },     // Amber
    { color: "#F59E0B", angle: 45 },    // Orange
    { color: "#FB923C", angle: 90 },    // Light orange
    { color: "#FBBF24", angle: 135 },   // Amber
    { color: "#FDE68A", angle: 180 },   // Light yellow
    { color: "#F59E0B", angle: 225 },   // Orange
    { color: "#FBBF24", angle: 270 },   // Amber
    { color: "#FCD34D", angle: 315 },   // Yellow
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(251, 191, 36, ${baseOpacity * 0.8}) 0%, transparent 70%)`,
        }}
      />

      {/* Prismatic rays */}
      {colors.map((ray, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 origin-center"
          style={{
            width: "200%",
            height: "4px",
            background: `linear-gradient(90deg, transparent 0%, ${ray.color}${Math.round(baseOpacity * 255).toString(16).padStart(2, '0')} 30%, ${ray.color}${Math.round(baseOpacity * 0.5 * 255).toString(16).padStart(2, '0')} 60%, transparent 100%)`,
            transform: `rotate(${ray.angle}deg) translateX(-25%)`,
            filter: "blur(8px)",
          }}
          initial={animate ? { opacity: 0.3, scale: 0.8 } : undefined}
          animate={animate ? {
            opacity: [0.3, baseOpacity, 0.3],
            scale: [0.8, 1, 0.8],
          } : undefined}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Secondary burst - shorter rays */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
        <motion.div
          key={`secondary-${i}`}
          className="absolute top-1/2 left-1/2 origin-center"
          style={{
            width: "120%",
            height: "2px",
            background: `linear-gradient(90deg, transparent 0%, rgba(251, 191, 36, ${baseOpacity * 0.6}) 40%, transparent 100%)`,
            transform: `rotate(${angle}deg) translateX(-20%)`,
            filter: "blur(4px)",
          }}
          initial={animate ? { opacity: 0.2 } : undefined}
          animate={animate ? {
            opacity: [0.2, baseOpacity * 0.8, 0.2],
          } : undefined}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Sparkle particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * 360;
        const distance = 150 + (i % 3) * 80;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;

        return (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
            style={{
              background: colors[i % colors.length].color,
              boxShadow: `0 0 10px ${colors[i % colors.length].color}`,
              x,
              y,
            }}
            initial={animate ? { opacity: 0, scale: 0 } : undefined}
            animate={animate ? {
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            } : undefined}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.15,
            }}
          />
        );
      })}
    </div>
  );
}
