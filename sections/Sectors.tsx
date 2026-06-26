"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Target, Activity, Bot, Orbit } from "lucide-react";

const sectorsData = [
  {
    title: "Industrial & Automation",
    status: "PRIMARY FOCUS",
    desc: "Custom jigs, fixtures, tooling inserts, enclosures, and precision mechanical components for manufacturing and automation environments. Where exact-fit, low-volume hardware requirements fall between standard catalogue parts and full-scale tooling investment — Karvyn 3D fills that gap. Fast turnaround, real engineering.",
    icon: Settings,
    offsetClass: ""
  },
  {
    title: "Research & EdTech Hardware",
    status: "PRIMARY FOCUS",
    desc: "Precision instruments for neuroscience, behavioural research, and technical education — where experimental validity demands hardware engineered to the exact protocol, species, and environment. This is where Karvyn 3D's capabilities were proven, and where our deepest application knowledge sits.",
    icon: Target,
    offsetClass: "lg:mt-8"
  },
  {
    title: "MedTech",
    status: "EXPANDING INTO",
    desc: "Assistive devices, clinical tools, and precision medical hardware requiring exacting material selection, dimensional accuracy, and design for regulatory consideration. Our material engineering background and precision manufacturing capability make this a natural expansion.",
    icon: Activity,
    offsetClass: "lg:mt-16"
  },
  {
    title: "Robotics & Embedded Systems",
    status: "EXPANDING INTO",
    desc: "Custom actuator mounts, sensor housings, control enclosures, and electronics-integrated structural components for robotics applications. Our ESP32-based embedded systems work and mechatronics experience translates directly to this space.",
    icon: Bot,
    offsetClass: ""
  },
  {
    title: "Aerospace & UAV Systems",
    status: "EXPANDING INTO",
    desc: "Lightweight structural components, mount fixtures, and assembly tooling for unmanned aerial vehicles (UAVs) and satellite payloads. Vetting materials for temperature stability and strength-to-weight performance.",
    icon: Orbit,
    offsetClass: "lg:mt-8"
  }
];

function InteractiveIcon({ icon: Icon, isHovered }: { icon: any, isHovered: boolean }) {
  if (Icon === Settings) {
    return (
      <motion.div
        animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
        transition={isHovered ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0 }}
      >
        <Icon size={24} />
      </motion.div>
    );
  }
  if (Icon === Target) {
    return (
      <motion.div
        animate={isHovered ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={isHovered ? { duration: 1, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}
      >
        <Icon size={24} />
      </motion.div>
    );
  }
  if (Icon === Activity) {
    return (
      <motion.div
        animate={isHovered ? { scaleY: [1, 1.3, 0.8, 1.3, 1] } : { scaleY: 1 }}
        transition={isHovered ? { duration: 1, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}
      >
        <Icon size={24} />
      </motion.div>
    );
  }
  if (Icon === Bot) {
    return (
      <motion.div
        animate={
          isHovered
            ? { y: [-3, 3, -3], rotate: [-6, 6, -6] }
            : { y: 0, rotate: 0 }
        }
        transition={isHovered ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}
      >
        <Icon size={24} />
      </motion.div>
    );
  }
  if (Icon === Orbit) {
    return (
      <motion.div
        animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
        transition={isHovered ? { duration: 8, repeat: Infinity, ease: "linear" } : { duration: 0 }}
      >
        <Icon size={24} />
      </motion.div>
    );
  }
  return <Icon size={24} />;
}

function SectorCard({ sector, idx }: { sector: typeof sectorsData[0], idx: number }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isPrimary = sector.status === "PRIMARY FOCUS";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: idx * 0.05, type: "spring", stiffness: 100, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-white md:bg-white/70 md:backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 md:p-8 hover:border-orange-600/50 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden group ${sector.offsetClass}`}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(250px circle at ${coords.x}px ${coords.y}px, rgba(249, 115, 22, 0.06), transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10 space-y-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header row: Icon & Status badge */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/50 text-orange-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
              <InteractiveIcon icon={sector.icon} isHovered={isHovered} />
            </div>
            
            <span
              className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded border font-mono ${
                isPrimary
                  ? "border-orange-200 text-orange-600 bg-orange-50/80"
                  : "border-slate-200 text-slate-500 bg-slate-50"
              }`}
            >
              {sector.status}
            </span>
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              {sector.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {sector.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Sectors() {
  return (
    <section id="sectors" className="py-24 px-6 border-t border-slate-200 overflow-hidden bg-slate-50/20 relative">
      {/* Ambient drifting background orbs */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-orange-100/30 blur-3xl pointer-events-none z-0 hidden md:block"
      />
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-20 -right-20 w-[450px] h-[450px] rounded-full bg-orange-50/40 blur-3xl pointer-events-none z-0 hidden md:block"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 max-w-3xl">
          <span className="text-orange-600 tech-label block mb-4">
            Sectors
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            Where we work,<br />and where we&apos;re headed.
          </h2>
          <p className="text-slate-700 text-lg md:text-xl font-semibold leading-relaxed">
            Our engineering capability doesn&apos;t change by industry. What changes is the problem. We currently serve two sectors actively, and are building depth toward three more.
          </p>
        </div>

        {/* Dynamic Offset grid of sectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {sectorsData.map((sector, idx) => (
            <SectorCard key={idx} sector={sector} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
