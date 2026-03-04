"use client";

import { useEffect, useRef } from "react";

export function SpotlightEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      container.style.setProperty('--mouse-x', `${x}%`);
      container.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Main spotlight beam from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        {/* Light source glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-bright/30 blur-[100px] animate-spotlight" />

        {/* Main beam - conic gradient */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-60"
          style={{
            background: `
              conic-gradient(
                from 180deg at 50% 0%,
                transparent 30%,
                rgba(59, 130, 246, 0.02) 40%,
                rgba(59, 130, 246, 0.06) 47%,
                rgba(59, 130, 246, 0.12) 50%,
                rgba(59, 130, 246, 0.06) 53%,
                rgba(59, 130, 246, 0.02) 60%,
                transparent 70%
              )
            `
          }}
        />

        {/* Inner brighter beam */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-80"
          style={{
            background: `
              conic-gradient(
                from 180deg at 50% 0%,
                transparent 42%,
                rgba(59, 130, 246, 0.03) 46%,
                rgba(59, 130, 246, 0.1) 50%,
                rgba(59, 130, 246, 0.03) 54%,
                transparent 58%
              )
            `
          }}
        />
      </div>

      {/* Subtle mouse-following highlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 transition-all duration-700 ease-out pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          left: 'var(--mouse-x, 50%)',
          top: 'var(--mouse-y, 50%)',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Particle dots in the light beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-full overflow-hidden opacity-40">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-bright/60"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${10 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      {/* Floor glow / reflection */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px]">
        <div className="absolute inset-0 bg-gradient-to-t from-bright/5 via-bright/3 to-transparent rounded-t-full blur-2xl" />
      </div>

      {/* Ambient side glows */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-bright/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-[250px] h-[250px] bg-bright/5 rounded-full blur-[100px]" />
    </div>
  );
}
