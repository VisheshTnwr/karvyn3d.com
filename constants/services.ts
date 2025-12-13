// visheshtnwr/karvyn3d-intro/karvyn3d-intro-41ef54dda356c1bc3e2c43bba9e8a441646cbe10/constants/services.ts

import { Cpu, Gift, FlaskConical, Zap, BookOpen, Component } from "lucide-react";

export const SERVICES = [
  {
    title: "Scalable Micro-Manufacturing",
    description: "Precision production runs for PCB housings and custom mechanical parts. Scalability without the factory gatekeepers.",
    icon: Component,
    imageUrl: "/images/pCB Housing.jpeg", // ADDED
  },
  {
    title: "Next-Gen Corporate Branding",
    description: "Bespoke employee joining kits, themed marketing items, and gifts that actually stay on the desk. Design-led impact.",
    icon: Gift,
    imageUrl: "/images/service-corporate-branding.jpg", // ADDED
  },
  {
    title: "Specialized Labware & R&D",
    description: "Custom design and fabrication of lab equipment and research-grade hardware tailored to your specific experimentation.",
    icon: FlaskConical,
    imageUrl: "/images/service-labware-rnd.jpg", // ADDED
  },
  {
    title: "High-Fidelity Prototyping",
    description: "Move from CAD to physical at record speed. Rapid iterations that help you validate concepts and de-risk your project.",
    icon: Zap,
    imageUrl: "/images/service-prototyping.jpg", // ADDED
  },
  {
    title: "Academic & Research Products",
    description: "Precision-built components for educational modules and complex research projects where off-the-shelf isn't an option.",
    icon: BookOpen,
    imageUrl: "/images/service-academic-products.jpg", // ADDED
  }
];