"use client";

import { LaserFlow } from "@/components/animations/LaserFlow";

export function LaserDivider() {
  return (
    <div className="relative h-16 w-full overflow-hidden">
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-bright/20 rounded-full blur-xl" />

      {/* Laser flows */}
      <LaserFlow
        color="#FBBF24"
        speed="normal"
        density="sparse"
        direction="both"
        className="opacity-60"
      />

      {/* Center line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bright/30 to-transparent" />
    </div>
  );
}
