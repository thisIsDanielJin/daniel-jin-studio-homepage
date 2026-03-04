import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies. From landing pages to complex applications, I deliver clean, performant code.",
    icon: "HiCode",
    features: [
      "Responsive design",
      "Fast loading times",
      "SEO optimization",
      "Modern tech stack",
    ],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description:
      "Beautiful, interactive user interfaces with React and Next.js. Smooth animations, intuitive UX, and pixel-perfect implementations.",
    icon: "HiTemplate",
    features: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: "backend-api",
    title: "Backend & APIs",
    description:
      "Robust server-side solutions and API integrations. Whether you need a custom backend or integration with existing services.",
    icon: "HiDatabase",
    features: [
      "REST APIs",
      "Database design",
      "Authentication",
      "Third-party integrations",
    ],
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description:
      "Strategic advice for your digital projects. I help you choose the right technologies and architecture for your specific needs.",
    icon: "HiLightBulb",
    features: [
      "Tech stack selection",
      "Architecture planning",
      "Code reviews",
      "Performance optimization",
    ],
  },
];
