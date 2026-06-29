"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Ruler, Zap, Repeat, LucideIcon } from "lucide-react";

const problemBlocks = [
  {
    icon: Ruler,
    title: "Design & Engineering",
    body: "Juvenile animals, non-standard species, and morphologically variable subjects require instruments sized and shaped to them — not to the average rodent a manufacturer imagined."
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    body: "Physical prototypes built fast, in the right material for the application. Advanced FDM manufacturing across engineering-grade polymers — PETG, TPU, ASA, PETG-CF — with real tolerances and real performance characteristics."
  },
  {
    icon: Repeat,
    title: "Low-Volume Manufacturing",
    body: "Beyond the prototype. We produce small production runs with consistent quality — without the tooling costs or minimum order quantities that conventional manufacturing demands. Right-sized for the stage your product is at."
  }
];

function InteractiveIcon({ icon: Icon, isHovered }: { icon: LucideIcon; isHovered: boolean }) {
  if (Icon === Ruler) {
    return (
      <motion.div
        animate={isHovered ? {
          rotate: [-10, 10, -10],
          y: [-3, 3, -3]
        } : { rotate: 0, y: 0 }}
        transition={isHovered ? {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        } : { duration: 0 }}
      >
        <Icon size={24} strokeWidth={2} />
      </motion.div>
    );
  }
  if (Icon === Zap) {
    return (
      <motion.div
        animate={isHovered ? {
          scale: [1, 1.2, 1],
          opacity: [1, 0.6, 1]
        } : { scale: 1, opacity: 1 }}
        transition={isHovered ? {
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        } : { duration: 0 }}
      >
        <Icon size={24} strokeWidth={2} />
      </motion.div>
    );
  }
  if (Icon === Repeat) {
    return (
      <motion.div
        animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
        transition={isHovered ? {
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        } : { duration: 0 }}
      >
        <Icon size={24} strokeWidth={2} />
      </motion.div>
    );
  }
  return <Icon size={24} strokeWidth={2} />;
}

function ProblemCard({ block, idx }: { block: typeof problemBlocks[0]; idx: number }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white md:bg-white/80 md:backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm group hover:border-orange-600/50 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 relative overflow-hidden"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, rgba(249, 115, 22, 0.05), transparent 80%)`
          }}
        />
      )}

      <div className="relative z-10 flex items-start gap-5">
        <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all duration-300 shrink-0 shadow-sm">
          <InteractiveIcon icon={block.icon} isHovered={isHovered} />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            {block.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm font-medium">
            {block.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ResearchGap() {
  return (
    <section id="problem" className="section-padding px-6 border-t border-slate-200 relative overflow-hidden bg-slate-50/20">
      
      {/* Ambient drifting background orbs */}
      <motion.div
        animate={{
          x: [0, 25, -25, 0],
          y: [0, -25, 25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-orange-100/20 blur-3xl pointer-events-none z-0 hidden md:block"
      />
      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-orange-50/30 blur-3xl pointer-events-none z-0 hidden md:block"
      />

      {/* Blueprint drifting line pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-0 hidden md:block">
        <svg className="absolute inset-0 w-full h-full text-slate-200/60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="research-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#research-grid)"
            animate={{
              x: [-15, 15, -15],
              y: [-15, 15, -15],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Larger, easier to read text */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 space-y-8 relative">
            
            {/* Spinning technical schematic vector background */}
            <div className="absolute -left-10 -top-10 w-96 h-96 opacity-[0.03] text-orange-600 pointer-events-none select-none z-0 hidden md:block">
              <motion.svg
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
              >
                <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="60" />
                <circle cx="100" cy="100" r="40" strokeDasharray="8 4" />
                <line x1="20" y1="100" x2="180" y2="100" />
                <line x1="100" y1="20" x2="100" y2="180" />
                <path d="M 50 50 L 150 150 M 50 150 L 150 50" strokeDasharray="2 2" />
              </motion.svg>
            </div>

            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-orange-600 tech-label block mb-4">
                   What we do
                </span>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-8 leading-[1.05]">
                  Engineering hardware from idea to production.
                </h2>
                <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-semibold">
                  We don&apos;t specialise in a single stage of product development. From early concept and CAD engineering through to electronics integration, physical prototyping, and low-volume manufacturing — we run the full path. That means a single point of accountability from the first sketch to the finished product in your hands.
                </p>
              </div>

              <div className="space-y-6 text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
                <p className="text-lg md:text-xl font-medium text-slate-700">
                  Modern neuroscience demands instruments that account for exact morphology and electromagnetic constraints without compromise.
                </p>
                <p className="text-lg md:text-xl text-slate-600 font-medium">
                  Adapting general-purpose equipment introduces variability and forces researchers to spend time on engineering workarounds rather than actual research.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-6 grid gap-5 relative z-10">
            {problemBlocks.map((block, idx) => (
              <ProblemCard key={idx} block={block} idx={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}