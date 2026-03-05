import { TechItem } from "@/types";

export const techStack: TechItem[] = [
  // Frontend
  { name: "React", icon: "SiReact", category: "frontend" },
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend" },
  { name: "Framer Motion", icon: "SiFramer", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "SiNodedotjs", category: "backend" },
  { name: "Go", icon: "SiGo", category: "backend" },
  { name: "PostgreSQL", icon: "SiPostgresql", category: "backend" },
  { name: "GraphQL", icon: "SiGraphql", category: "backend" },

  // Tools
  { name: "Git", icon: "SiGit", category: "tools" },
  { name: "Figma", icon: "SiFigma", category: "tools" },

  // Deployment
  { name: "Vercel", icon: "SiVercel", category: "deployment" },
  { name: "Docker", icon: "SiDocker", category: "deployment" },
  { name: "Kubernetes", icon: "SiKubernetes", category: "deployment" },
];

export const getTechByCategory = (category: TechItem["category"]) =>
  techStack.filter((tech) => tech.category === category);
