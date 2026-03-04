import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard for a SaaS platform, featuring real-time data visualization, user management, and customizable reports.",
    image: "/images/projects/dashboard.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern online store with product catalog, shopping cart, secure checkout, and inventory management. Optimized for conversions.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    featured: true,
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    description:
      "An elegant website for a local restaurant featuring online reservations, menu display, and integration with delivery platforms.",
    image: "/images/projects/restaurant.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    featured: true,
  },
  {
    id: "portfolio-site",
    title: "Creative Portfolio",
    description:
      "A stunning portfolio site for a creative professional, showcasing their work with smooth animations and interactive galleries.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "Three.js"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
