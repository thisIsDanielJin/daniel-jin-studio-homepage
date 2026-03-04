"use client";

import { Section, SectionHeader } from "@/components/layout/Section";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { featuredProjects } from "@/data/projects";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export function ProjectsSection() {
  return (
    <Section id="projects" background="secondary">
      <SectionHeader
        title="Work That Delivers"
        subtitle="Recent projects that helped businesses grow their online presence"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <StaggerItem key={project.id}>
            <div className="group relative bg-bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-bright/20 transition-all duration-300">
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className={cn(
                  "absolute inset-0",
                  index === 0 && "bg-gradient-to-br from-bright/20 via-bright/10 to-electric/20",
                  index === 1 && "bg-gradient-to-br from-electric/20 via-bright/5 to-bright/20",
                  index === 2 && "bg-gradient-to-br from-bright/10 via-electric/10 to-bright/20"
                )} />

                {/* Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-xl bg-bg-primary/50 backdrop-blur-sm flex items-center justify-center border border-white/10">
                    <span className="text-2xl font-bold text-bright">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-bright/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-bg-primary font-semibold">
                    View Project
                    <HiArrowTopRightOnSquare className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-text-primary group-hover:text-bright transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
