"use client";

import { Section, SectionHeader } from "@/components/layout/Section";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { techStack } from "@/data/techStack";
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
} from "react-icons/si";

const iconMap: Record<string, IconType> = {
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
};

export function TechStackSection() {
  return (
    <Section id="tech" background="primary">
      <SectionHeader
        title="Built With Modern Tech"
        subtitle="Fast, reliable, and future-proof technologies"
      />

      <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {techStack.map((tech) => {
          const Icon = iconMap[tech.icon] || SiReact;

          return (
            <StaggerItem key={tech.name}>
              <div className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-bg-card border border-white/5 hover:border-bright/20 transition-all duration-300">
                <div className="w-10 h-10 flex items-center justify-center text-text-muted group-hover:text-bright transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-medium text-text-muted group-hover:text-text-primary transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
