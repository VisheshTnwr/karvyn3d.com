import {
  Cpu,
  FlaskConical,
  Microscope,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

export const SERVICES = [
  {
    title: "Crow Behavioural Test Gate",
    subtitle: "Mechatronics · Embedded Systems · Custom Enclosure",
    problem: "Behavioural research needed an automated gate mechanism with precise event-triggered actuation, data logging, and a compact physical form",
    description: "An automated gate system for avian behavioural research trials. ESP32-based control logic handles servo actuation triggered by force-sensitive resistors, with serial data output for experimental logging. The enclosure was designed and manufactured as an integrated system — electronics, mechanics, and mounting all resolved in a single package. Delivered with Karvyn 3D branding and clean cable management.",
    icon: Microscope,
    imageUrl: "/images/BAS/bas4.jpg",
    gallery: [
      "/images/BAS/bas.jpg",
      "/images/BAS/bas1.jpg",
      "/images/BAS/bas2.jpg",
      "/images/BAS/bas3.jpg",
      "/images/BAS/bas4.jpg",
      "/images/BAS/bas5.jpg",
    ],
    tags: ["ESP32 Firmware", "Servo Control", "FSR Sensing", "Data Logging", "Custom Enclosure Design", "FDM Manufacturing"]
  },
  {
    title: "Custom Rat Restrainers",
    subtitle: "Precision Fit · Material Engineering · MRI-Compatible",
    problem: "Unsedated animal imaging demanded restraint hardware sized to developmental stage and verified safe for high-field scanner environments",
    description: "A family of MRI-compatible restraint devices sized across the rat developmental range — from juvenile to adult. Structural components in verified scanner-safe PETG; animal-contact surfaces in clear TPU 95A. Adjustable positioning and modular construction for experimental flexibility. Iterated with active researchers through physical prototype trials.",
    icon: ShieldCheck,
    imageUrl: "/images/rat-restraint/rat-restraint.png",
    gallery: [
      "/images/rat-restraint/rat-restraint.png",
      "/images/rat-restraint/rat-restraint3.png",
      "/images/rat-restraint/rat-restraint4.png",
      "/images/rat-restraint/rat-restraint5.png",
      "/images/rat-restraint/rat-restraint6.png",
    ],
    tags: ["Parametric Sizing", "Material Selection", "PETG + TPU", "MRI Safety"],
    imageFit: "contain"
  },
  {
    title: "Falcon Tube Holder",
    subtitle: "Custom Tooling · Fixture Design",
    problem: "Non-standard tube geometry required a holder array that no catalogue supplier stocked",
    description: "Purpose-built storage and organisation hardware for a non-standard tube geometry. Exactly the kind of precision fit problem where a custom-engineered part outperforms any approximation from a supplier catalogue. Designed, prototyped, and delivered.",
    icon: FlaskConical,
    imageUrl: "/images/Falcon-Tube/falcon-tube1.jpg",
    gallery: [
      "/images/Falcon-Tube/falcon-tube2.jpg",
      "/images/Falcon-Tube/falcon-tube3.jpg",
      "/images/Falcon-Tube/falcon-tube4.jpg",
      "/images/Falcon-Tube/falcon-tube5.jpg",
      "/images/Falcon-Tube/falcon-tube6.jpg",
      "/images/Falcon-Tube/falcon-tube7.jpg",
    ],
    tags: ["Custom Fixture", "Precision Fit", "FDM Manufacturing"]
  },
  {
    title: "Beam Walk Test Apparatus",
    subtitle: "Modular Design · Repeatability · Structural Engineering",
    problem: "Fixed-format test apparatus couldn't support the variable beam widths and surface conditions a rigorous experimental protocol required",
    description: "A modular beam walk rig for rodent motor coordination assessment. Designed as an interchangeable system — beam width variants, calibrated surface textures, and stable end platforms — so the apparatus adapts to the protocol rather than constraining it. Built for trial-to-trial consistency.",
    icon: Cpu,
    imageUrl: "/images/Beam-Walk/beam-walk4.png",
    gallery: [
      "/images/Beam-Walk/beam-walk.png",
      "/images/Beam-Walk/beam-walk1.png",
      "/images/Beam-Walk/beam-walk3.png",
      "/images/Beam-Walk/beam-walk4.png",
    ],
    tags: ["Modular Architecture", "Variant Engineering", "Structural Design"],
    imageFit: "contain"
  },
  {
    title: "Joystick Stabiliser Base",
    subtitle: "Ergonomic Design · Material Application · Stability Engineering",
    problem: "A joystick required a wider, more stable base in a material compatible with a sensitive electromagnetic environment",
    description: "An expanded base platform for a control joystick, engineered for stability and material compatibility with a constrained electromagnetic environment. Demonstrates applied material selection and ergonomic hardware adaptation — capability directly relevant to industrial and assistive technology applications.",
    icon: GraduationCap,
    imageUrl: "/images/joystick/joystick5.jpg",
    gallery: [
      "/images/joystick/joystick5.jpg",
      "/images/joystick/joystick6.jpg",
      "/images/joystick/joystick7.jpg",
      "/images/joystick/joystick8.jpg",
      "/images/joystick/joystick9.jpg",
    ],
    tags: ["Ergonomic Engineering", "Material Compatibility", "Stability Design"]
  },
];
