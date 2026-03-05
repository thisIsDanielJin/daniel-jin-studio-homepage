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
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Supercharge your website with AI-powered features. From intelligent chatbots to personalized experiences that engage visitors and boost conversions.",
    icon: "HiSparkles",
    features: [
      "AI Chatbots",
      "Smart automation",
      "Personalization",
      "Content generation",
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
];
