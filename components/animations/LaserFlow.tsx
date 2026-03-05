"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LaserFlowProps {
  color?: string;
  className?: string;
  direction?: "left" | "right" | "both";
  speed?: "slow" | "normal" | "fast";
  density?: "sparse" | "normal" | "dense";
}

export function LaserFlow({
  color = "#FBBF24",
  className,
  direction = "both",
  speed = "normal",
  density = "normal",
}: LaserFlowProps) {
  const speedValues = {
    slow: 4,
    normal: 2.5,
    fast: 1.5,
  };

  const densityCount = {
    sparse: 3,
    normal: 5,
    dense: 8,
  };

  const duration = speedValues[speed];
  const lineCount = densityCount[density];

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Laser lines flowing */}
      {Array.from({ length: lineCount }).map((_, i) => {
        const yPosition = (100 / (lineCount + 1)) * (i + 1);
        const delay = i * 0.3;
        const isReverse = direction === "left" || (direction === "both" && i % 2 === 1);

        return (
          <motion.div
            key={i}
            className="absolute h-[2px]"
            style={{
              top: `${yPosition}%`,
              width: "30%",
              background: `linear-gradient(${isReverse ? "270deg" : "90deg"}, transparent, ${color}80, ${color}, ${color}80, transparent)`,
              boxShadow: `0 0 10px ${color}60, 0 0 20px ${color}40`,
            }}
            initial={{ x: isReverse ? "400%" : "-100%" }}
            animate={{ x: isReverse ? "-100%" : "400%" }}
            transition={{
              duration: duration + (i * 0.2),
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}

      {/* Subtle glow particles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: color,
            boxShadow: `0 0 6px ${color}, 0 0 12px ${color}80`,
            top: `${20 + i * 30}%`,
          }}
          initial={{ x: "-10%", opacity: 0 }}
          animate={{
            x: "110%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: duration * 1.5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Vertical variant for sidebars/dividers
export function LaserFlowVertical({
  color = "#FBBF24",
  className,
  speed = "normal",
}: Omit<LaserFlowProps, "direction" | "density">) {
  const speedValues = {
    slow: 3,
    normal: 2,
    fast: 1,
  };

  const duration = speedValues[speed];

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <motion.div
        className="absolute w-[2px] left-1/2 -translate-x-1/2"
        style={{
          height: "40%",
          background: `linear-gradient(180deg, transparent, ${color}80, ${color}, ${color}80, transparent)`,
          boxShadow: `0 0 10px ${color}60, 0 0 20px ${color}40`,
        }}
        initial={{ y: "-100%" }}
        animate={{ y: "350%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

// Border variant - laser flows around an element with rounded corners
export function LaserFlowBorder({
  color = "#FBBF24",
  className,
  children,
  borderRadius = "1rem",
  duration = 5,
}: {
  color?: string;
  className?: string;
  children?: React.ReactNode;
  borderRadius?: string;
  duration?: number;
}) {
  return (
    <div className={cn("relative p-[2px]", className)} style={{ borderRadius }}>
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        {/* Rotating conic gradient for laser effect */}
        <motion.div
          className="absolute -inset-[100%]"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 30%, ${color} 35%, ${color} 40%, transparent 45%, transparent 100%)`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Glow layer */}
        <motion.div
          className="absolute -inset-[100%] blur-[2px]"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 28%, ${color}90 35%, ${color}90 40%, transparent 47%, transparent 100%)`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Inner content with background */}
      <div
        className="relative bg-bg-card/80 backdrop-blur-sm"
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
      >
        {children}
      </div>
    </div>
  );
}
