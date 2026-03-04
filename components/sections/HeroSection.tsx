"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/motion";
import Link from "next/link";
import { HiBolt, HiArrowRight } from "react-icons/hi2";

function LaserFlowVisual() {
  // Pre-generate stable random values for particles
  const particles = [
    { x: -45, y: -30, duration: 3.2, delay: 0.1 },
    { x: 50, y: -25, duration: 2.8, delay: 0.4 },
    { x: -30, y: 45, duration: 3.5, delay: 0.7 },
    { x: 40, y: 35, duration: 2.9, delay: 1.0 },
    { x: -50, y: 10, duration: 3.1, delay: 1.3 },
    { x: 25, y: -40, duration: 3.4, delay: 1.6 },
    { x: -20, y: -45, duration: 2.7, delay: 1.9 },
    { x: 45, y: 20, duration: 3.3, delay: 0.2 },
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      {/* Incoming laser beams from edges */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="laserBeamH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="laserBeamV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal laser beams */}
        <motion.g filter="url(#glow)">
          {/* Left to center */}
          <motion.rect
            x="-50" y="248" width="80" height="4" rx="2"
            fill="url(#laserBeamH)"
            initial={{ x: -100 }}
            animate={{ x: 200 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "easeIn" }}
          />
          {/* Right to center */}
          <motion.rect
            x="370" y="248" width="80" height="4" rx="2"
            fill="url(#laserBeamH)"
            initial={{ x: 400 }}
            animate={{ x: 130 }}
            transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 2, ease: "easeIn" }}
          />
        </motion.g>

        {/* Diagonal laser beams */}
        <motion.g filter="url(#glow)">
          {/* Top-left to center */}
          <motion.line
            x1="0" y1="0" x2="200" y2="250"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration: 1.2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
          />
          {/* Top-right to center */}
          <motion.line
            x1="400" y1="0" x2="200" y2="250"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration: 1.2, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
          />
          {/* Bottom-left to center */}
          <motion.line
            x1="0" y1="500" x2="200" y2="250"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0.5, 0] }}
            transition={{ duration: 1.2, delay: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          {/* Bottom-right to center */}
          <motion.line
            x1="400" y1="500" x2="200" y2="250"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0.5, 0] }}
            transition={{ duration: 1.2, delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
          />
        </motion.g>
      </svg>

      {/* Central glowing orb */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative"
      >
        {/* Outer rotating ring */}
        <div className="absolute inset-0 -m-24">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bright/30 to-transparent" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-bright/30 to-transparent" />
          </motion.div>
        </div>

        {/* Counter-rotating ring */}
        <div className="absolute inset-0 -m-16">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bright/20 to-transparent" />
          </motion.div>
        </div>

        {/* Pulsing outer rings */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -m-14 rounded-full border border-bright/20"
        />
        <motion.div
          animate={{ scale: [1.1, 1.4, 1.1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -m-10 rounded-full border border-bright/15"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -m-6 rounded-full border-2 border-bright/30"
        />

        {/* Core orb */}
        <div className="relative w-36 h-36">
          {/* Glow backdrop */}
          <div className="absolute inset-0 rounded-full bg-bright/40 blur-[50px]" />
          <div className="absolute inset-0 rounded-full bg-bright/20 blur-[80px] scale-[2]" />

          {/* Main orb with gradient */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-bright-soft via-bright to-electric"
            style={{
              boxShadow: `
                0 0 60px rgba(59, 130, 246, 0.6),
                0 0 120px rgba(59, 130, 246, 0.4),
                inset 0 0 40px rgba(255, 255, 255, 0.4)
              `
            }}
          />

          {/* Inner shine */}
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/50 blur-sm" />

          {/* Icon in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <HiBolt className="w-14 h-14 text-white drop-shadow-lg" />
            </motion.div>
          </div>
        </div>

        {/* Floating energy particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              x: [0, particle.x],
              y: [0, particle.y],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-bright"
            style={{
              boxShadow: '0 0 12px rgba(59, 130, 246, 0.9)',
            }}
          />
        ))}
      </motion.div>

      {/* Text below orb */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <span className="text-bright font-bold text-sm tracking-[0.3em] uppercase">Your Brand</span>
        <div className="mt-2 text-text-muted text-xs">powered by BrightByte</div>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary">
      {/* Background subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 70% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 30% 60%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)
          `
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <Container className="relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            {/* Tagline */}
            <motion.div variants={fadeIn} className="mb-8">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-text-secondary text-sm font-medium backdrop-blur-sm">
                <HiBolt className="w-4 h-4 text-bright" />
                Putting your brand in the spotlight
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8"
            >
              <span className="text-text-primary">Stand out.</span>
              <br />
              <span className="text-glow">Get found.</span>
              <br />
              <span className="text-text-primary">Grow.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              Your customers are searching online. Are they finding you?
              I build websites that put your business in the <span className="text-bright font-medium">spotlight</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-glow" asChild>
                <Link href="#contact">
                  Start Your Project
                  <HiArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-text-primary hover:bg-white/10" asChild>
                <Link href="#projects">See My Work</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 flex flex-wrap gap-8 sm:gap-12 justify-center lg:justify-start"
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "20+", label: "Projects Delivered" },
                { value: "100%", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-bright">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted mt-1 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Laser Flow Visual */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <LaserFlowVisual />
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center text-text-muted"
        >
          <span className="text-xs font-medium mb-3 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-bright"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
