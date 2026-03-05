"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { GradualBlurOnScroll } from "@/components/animations/GradualBlur";
import {
  HiSparkles,
  HiRocketLaunch,
  HiCommandLine,
  HiCpuChip,
} from "react-icons/hi2";
import { HiTrendingUp } from "react-icons/hi";
import ShinyText from "@/components/reactbits/ShinyText";
import { cn } from "@/lib/utils";

const aiFeatures = [
  {
    icon: HiRocketLaunch,
    title: "Faster Delivery",
    description:
      "AI-assisted development means your project launches sooner — without cutting corners on quality.",
  },
  {
    icon: HiSparkles,
    title: "Smarter Features",
    description:
      "Add intelligent chatbots, personalization, and automation that engage visitors 24/7.",
  },
  {
    icon: HiTrendingUp,
    title: "Better Conversions",
    description:
      "Data-driven insights and smart UX that turn more visitors into paying customers.",
  },
];

type Token = { text: string; color: string };

const codeLines: Token[][] = [
  [
    { text: "import", color: "text-purple-400" },
    { text: " { ", color: "text-text-muted" },
    { text: "ai", color: "text-bright" },
    { text: " } ", color: "text-text-muted" },
    { text: "from", color: "text-purple-400" },
    { text: " '@brightbyte/engine'", color: "text-green-400" },
  ],
  [],
  [
    { text: "export", color: "text-purple-400" },
    { text: " default", color: "text-purple-400" },
    { text: " async", color: "text-purple-400" },
    { text: " function", color: "text-purple-400" },
    { text: " build", color: "text-sky-300" },
    { text: "() {", color: "text-text-muted" },
  ],
  [
    { text: "  const", color: "text-purple-400" },
    { text: " site", color: "text-text-primary" },
    { text: " = ", color: "text-text-muted" },
    { text: "await", color: "text-purple-400" },
    { text: " ai", color: "text-bright" },
    { text: ".", color: "text-text-muted" },
    { text: "generate", color: "text-sky-300" },
    { text: "({", color: "text-text-muted" },
  ],
  [
    { text: "    brand", color: "text-text-primary" },
    { text: ": ", color: "text-text-muted" },
    { text: "'your-company'", color: "text-green-400" },
    { text: ",", color: "text-text-muted" },
  ],
  [
    { text: "    pages", color: "text-text-primary" },
    { text: ": [", color: "text-text-muted" },
    { text: "'home'", color: "text-green-400" },
    { text: ", ", color: "text-text-muted" },
    { text: "'about'", color: "text-green-400" },
    { text: ", ", color: "text-text-muted" },
    { text: "'contact'", color: "text-green-400" },
    { text: "],", color: "text-text-muted" },
  ],
  [
    { text: "    style", color: "text-text-primary" },
    { text: ": ", color: "text-text-muted" },
    { text: "'modern-minimal'", color: "text-green-400" },
    { text: ",", color: "text-text-muted" },
  ],
  [
    { text: "    optimize", color: "text-text-primary" },
    { text: ": [", color: "text-text-muted" },
    { text: "'seo'", color: "text-green-400" },
    { text: ", ", color: "text-text-muted" },
    { text: "'speed'", color: "text-green-400" },
    { text: ", ", color: "text-text-muted" },
    { text: "'a11y'", color: "text-green-400" },
    { text: "],", color: "text-text-muted" },
  ],
  [{ text: "  })", color: "text-text-muted" }],
  [],
  [
    { text: "  await", color: "text-purple-400" },
    { text: " site", color: "text-text-primary" },
    { text: ".", color: "text-text-muted" },
    { text: "deploy", color: "text-sky-300" },
    { text: "()", color: "text-text-muted" },
  ],
  [{ text: "}", color: "text-text-muted" }],
];

const buildOutput = [
  { icon: "check", text: "12 components generated", delay: 0 },
  { icon: "check", text: "Performance score: 98/100", delay: 0.15 },
  { icon: "check", text: "Deployed to production", delay: 0.3 },
];

function TerminalMockup() {
  const codeBaseDelay = 0.4;
  const lineStagger = 0.08;
  const buildStartDelay = codeBaseDelay + codeLines.length * lineStagger + 0.3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative"
    >
      {/* Glow behind terminal */}
      <div className="absolute -inset-6 bg-bright/[0.06] rounded-3xl blur-3xl" />

      <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#0D0D0F] shadow-2xl shadow-black/40">
        {/* Terminal header */}
        <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          {/* File tab */}
          <div className="ml-4 flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.06] border border-white/[0.06]">
            <svg
              className="w-3.5 h-3.5 text-sky-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-[11px] text-text-secondary font-mono">
              build.ts
            </span>
          </div>
        </div>

        {/* Code content with line numbers */}
        <div className="p-4 font-mono text-[13px] leading-[1.7]">
          {codeLines.map((tokens, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: codeBaseDelay + i * lineStagger,
              }}
              className="flex group/line hover:bg-white/[0.02] -mx-4 px-4 rounded"
            >
              {/* Line number */}
              <span className="shrink-0 w-8 text-right mr-4 text-text-muted/30 text-xs leading-[1.85] select-none group-hover/line:text-text-muted/50 transition-colors">
                {i + 1}
              </span>
              {/* Code tokens */}
              <span className="flex-1">
                {tokens.length === 0 ? (
                  <span>&nbsp;</span>
                ) : (
                  tokens.map((token, j) => (
                    <span key={j} className={token.color}>
                      {token.text}
                    </span>
                  ))
                )}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Build output */}
        <div className="border-t border-white/5 bg-white/[0.01] px-4 py-3 font-mono text-xs space-y-1.5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: buildStartDelay - 0.15 }}
            className="text-text-muted/50 flex items-center gap-2"
          >
            <span className="text-bright">$</span>
            <span>brightbyte build --deploy</span>
          </motion.div>
          {buildOutput.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: buildStartDelay + item.delay,
              }}
              className="flex items-center gap-2"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: buildStartDelay + item.delay + 0.1,
                }}
                className="text-green-400"
              >
                ✓
              </motion.span>
              <span className="text-text-secondary">{item.text}</span>
            </motion.div>
          ))}
          {/* Blinking cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: buildStartDelay + 0.6 }}
            className="flex items-center gap-2 text-text-muted/50"
          >
            <span className="text-bright">$</span>
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                times: [0, 0.49, 0.5, 1],
                ease: "linear",
              }}
              className="inline-block w-1.5 h-3.5 bg-bright"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function AISection() {
  return (
    <Section id="ai" background="secondary">
      <div className="relative">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(251, 191, 36, 0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-bright/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-bright text-sm font-medium mb-6"
            >
              <HiCpuChip className="w-4 h-4" />
              AI-Powered Development
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <GradualBlurOnScroll
                text="Built Smarter"
                className="text-text-primary"
              />
              <br />
              <span className="text-bright">
                with <ShinyText text="AI" color="#FBBF24" shineColor="#FDE68A" speed={3} className="text-bright" />
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-secondary text-lg max-w-2xl mx-auto"
            >
              I use AI at every step — from writing code to building smart
              features into your website. You get faster results and a site that
              actually works for you.
            </motion.p>
          </div>

          {/* Two-column: Features + Terminal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Features */}
            <div className="space-y-5">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Animated gradient border on hover */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-bright/0 via-bright/50 to-bright/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-bright/0 via-bright/30 to-bright/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex gap-4 bg-bg-card rounded-2xl p-5 border-[1.5px] border-white/8 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-bright/5">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-bright/5 via-transparent to-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon */}
                    <div className="relative shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-bright/20 to-bright/5 flex items-center justify-center border border-bright/20 group-hover:border-bright/40 group-hover:shadow-lg group-hover:shadow-bright/20 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-bright" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-base font-bold text-text-primary group-hover:text-bright transition-colors duration-300 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Terminal mockup */}
            <TerminalMockup />
          </div>

          {/* Bottom: workflow indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { icon: HiCommandLine, label: "AI Code Generation" },
              { icon: HiSparkles, label: "Smart Optimization" },
              { icon: HiCpuChip, label: "Automated Testing" },
              { icon: HiRocketLaunch, label: "Rapid Deployment" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 text-text-muted hover:text-text-secondary transition-colors"
              >
                <item.icon className="w-4 h-4 text-bright/60" />
                <span className="text-sm">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
