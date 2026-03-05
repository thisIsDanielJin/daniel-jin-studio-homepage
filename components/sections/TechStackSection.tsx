"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiVercel,
  SiDocker,
  SiKubernetes,
  SiGraphql,
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

const row1: TechItem[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
];

const row2: TechItem[] = [
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

function MarqueeRow({
  items,
  reverse = false,
  speed = 30,
}: {
  items: TechItem[];
  reverse?: boolean;
  speed?: number;
}) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="group/marquee relative overflow-hidden">
      {/* Gradient edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-6 w-max group-hover/marquee:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {repeated.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="group/item relative flex items-center gap-3 px-5 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-[var(--brand-color-dim)] transition-all duration-300 cursor-default shrink-0"
            style={
              {
                "--brand-color": tech.color,
                "--brand-color-dim": `${tech.color}40`,
              } as React.CSSProperties
            }
          >
            {/* Brand color glow on hover */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                boxShadow: `0 0 20px ${tech.color}15, inset 0 0 20px ${tech.color}08`,
              }}
            />
            <tech.icon className="relative w-5 h-5 text-text-muted group-hover/item:text-[var(--brand-color)] transition-colors duration-300" />
            <span className="relative text-sm font-medium text-text-muted group-hover/item:text-text-primary transition-colors duration-300 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStackSection() {
  return (
    <Section id="tech" background="primary" containerSize="full" className="!pb-16 md:!pb-20">
      <div className="relative">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(251, 191, 36, 0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-bright/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8 mb-10 md:mb-14 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-bright/60 uppercase tracking-widest mb-4"
            >
              Tech Stack
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-text-primary"
            >
              Built With Modern Tech
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto"
            >
              Fast, reliable, and future-proof technologies
            </motion.p>

            {/* Gradient accent line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 mx-auto h-px w-48 bg-gradient-to-r from-transparent via-bright/40 to-transparent"
            />
          </div>

          {/* Marquee rows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <MarqueeRow items={row1} speed={35} />
            <MarqueeRow items={row2} reverse speed={40} />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
