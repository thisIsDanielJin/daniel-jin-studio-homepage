"use client";

import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const Scene = dynamic(() => import("./Scene").then((mod) => mod.Scene), {
  ssr: false,
  loading: () => null,
});

function SpotlightFallback() {
  return (
    <div className="absolute inset-0">
      {/* Spotlight cone fallback with CSS */}
      <div className="absolute top-0 right-[20%] w-[300px] h-[500px]">
        {/* Light source */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-[0_0_60px_30px_rgba(255,184,0,0.5)]" />

        {/* Light beam */}
        <div
          className="absolute top-8 left-1/2 -translate-x-1/2 w-full h-full animate-pulse"
          style={{
            background: 'linear-gradient(180deg, rgba(255,184,0,0.3) 0%, rgba(255,214,102,0.1) 50%, transparent 100%)',
            clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)',
          }}
        />
      </div>
    </div>
  );
}

export function HeroBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hasWebGL, setHasWebGL] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(!!gl);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) {
    return <SpotlightFallback />;
  }

  if (prefersReducedMotion || !hasWebGL) {
    return <SpotlightFallback />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Ambient light effect */}
      <div
        className="absolute top-0 right-0 w-full h-full opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 70% 20%, rgba(255, 184, 0, 0.15) 0%, transparent 60%)
          `
        }}
      />

      {/* 3D Spotlight Scene */}
      <div className="absolute right-[5%] top-0 w-[50%] h-full">
        <Suspense fallback={<SpotlightFallback />}>
          <Scene />
        </Suspense>
      </div>
    </div>
  );
}
