// constants/services.ts

import { Factory, FlaskConical, Box, Cpu, GraduationCap, Layers } from "lucide-react";

export const SERVICES = [
  {
    title: "Bridge Manufacturing",
    description: "Launch products weeks ahead of hard tooling. Scalable production of 50–1,000 units using engineering-grade thermoplastics. Ideal for pilot runs and market testing.",
    icon: Factory,
    imageUrl: "/images/PCB Housing.jpg", 
  },
  {
    title: "PCB & Electronics Enclosures",
    description: "ESD-safe and UL-rated housings designed for perfect component fitment. We handle snap-fit optimization, thermal management, and assembly tolerances.",
    icon: Cpu,
    imageUrl: "/images/service-prototyping.jpg", 
  },
  {
    title: "Custom Labware Solutions",
    description: "Bespoke scientific apparatus for specific experimental protocols. From micro-fluidic jigs to custom centrifuge rotors, we fabricate what catalogues don't sell.",
    icon: FlaskConical,
    imageUrl: "/images/service-labware-rnd.jpg", 
  },
  {
    title: "Corporate Brand Engineering",
    description: "Physicalize your brand values. Premium, functional onboarding kits and executive artifacts—not just trinkets. Vapor-smoothed finishes and Pantone matching available.",
    icon: Box,
    imageUrl: "/images/service-corporate-branding.jpg", 
  },
  {
    title: "Advanced Design Validation",
    description: "Move from 'looks-like' to 'works-like'. High-fidelity functional prototyping to validate ergonomics, assembly, and mechanical stress before mass production.",
    icon: Layers,
    imageUrl: "/images/service-prototyping.jpg", 
  },
  {
    title: "Institutional Research Support",
    description: "Partnering with universities for grant-backed projects. We provide infrastructure for student innovation and complex geometry fabrication for PhD research.",
    icon: GraduationCap,
    imageUrl: "/images/service-academic-products.jpg", 
  }
];