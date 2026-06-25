"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Engineering Brief",
    desc: "We take the problem — not just the spec. Function, environment, constraints, and production intent all inform the brief. We ask the questions that shape the right design before any CAD work begins."
  },
  {
    number: "02",
    title: "Design & Architecture",
    desc: "Mechanical design, material selection, and electronics architecture developed in parallel. Fusion 360 models built parametrically for variant flexibility. Design decisions documented for manufacturing traceability."
  },
  {
    number: "03",
    title: "Prototype & Validate",
    desc: "Physical prototypes in final or representative materials. Performance tested against the brief. Iteration is expected — we build that into the timeline, not around it."
  },
  {
    number: "04",
    title: "Refine & Lock",
    desc: "Design locked based on validated prototype data. Manufacturing files prepared, tolerances confirmed, and production process characterised before any volume is committed."
  },
  {
    number: "05",
    title: "Deliver",
    desc: "Finished product — whether a single validated prototype or a low-volume production run — delivered ready to use. No handoff chaos. What we engineered is what you receive."
  }
];

function StepVisual({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <svg className="w-full h-full text-orange-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.rect
            x="20" y="15" width="60" height="70" rx="4"
            stroke="currentColor" strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
          {/* Shimmering content lines in the document */}
          <motion.line 
            x1="32" y1="32" x2="68" y2="32" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: 1, opacity: [0.4, 1, 0.4] }} 
            transition={{ 
              pathLength: { delay: 0.2 },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }} 
          />
          <motion.line 
            x1="32" y1="44" x2="68" y2="44" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: 1, opacity: [0.4, 1, 0.4] }} 
            transition={{ 
              pathLength: { delay: 0.4 },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.0 }
            }} 
          />
          <motion.line 
            x1="32" y1="56" x2="56" y2="56" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: 1, opacity: [0.4, 1, 0.4] }} 
            transition={{ 
              pathLength: { delay: 0.6 },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
            }} 
          />
          <motion.path
            d="M60 68 L66 74 L78 62"
            stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8 }}
          />
        </svg>
      );
    case 1:
      return (
        <svg className="w-full h-full text-orange-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gentle continuous tilt for the main design canvas */}
          <motion.rect
            x="25" y="25" width="50" height="50" rx="8"
            stroke="currentColor" strokeWidth="2"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: [45, 50, 40, 45] }}
            transition={{
              pathLength: { duration: 1 },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ transformOrigin: "center" }}
          />
          <motion.line x1="15" y1="20" x2="15" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.5 }} />
          <motion.line x1="15" y1="20" x2="25" y2="20" stroke="currentColor" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.5 }} />
          <motion.line x1="15" y1="80" x2="25" y2="80" stroke="currentColor" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.5 }} />
          <text x="4" y="53" fill="currentColor" className="text-[7px] font-mono opacity-60">h: 50</text>
          <motion.circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
        </svg>
      );
    case 2:
      return (
        <svg className="w-full h-full text-orange-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="15" y1="80" x2="85" y2="80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <motion.path
            d="M 20 80 Q 35 60 50 80 T 80 80"
            stroke="currentColor" strokeWidth="4" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
          />
          {/* Dial pointer moving dynamically */}
          <motion.path
            d="M 45 25 L 55 25 L 52 45 L 50 50 L 48 45 Z"
            fill="currentColor"
            animate={{ x: [-12, 12, -12], y: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );
    case 3:
      return (
        <svg className="w-full h-full text-orange-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
          {/* Rotating outer compass ring indicating locked precision tolerances */}
          <motion.circle
            cx="50"
            cy="50"
            r="34"
            stroke="#10b981"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
          <line x1="50" y1="12" x2="50" y2="88" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="12" y1="50" x2="88" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <motion.rect
            x="32" y="32" width="36" height="36"
            stroke="#10b981" strokeWidth="2"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <text x="35" y="27" fill="#10b981" className="text-[6px] font-mono font-bold tracking-wider">LOCKED</text>
          <text x="38" y="76" fill="currentColor" className="text-[7px] font-mono font-bold">±0.05 mm</text>
        </svg>
      );
    case 4:
      return (
        <svg className="w-full h-full text-orange-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Float the entire mechatronic package / box group continuously */}
          <motion.g
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.path
              d="M 50 20 L 80 35 L 80 65 L 50 80 L 20 65 L 20 35 Z"
              stroke="currentColor" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.path
              d="M 20 35 L 50 50 L 80 35 M 50 50 L 50 80"
              stroke="currentColor" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.path
              d="M 50 20 L 68 10 M 50 20 L 32 10"
              stroke="currentColor" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            />
            <motion.circle
              cx="50" cy="35" r="10" fill="#10b981"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
            />
            <motion.path
              d="M 46 35 L 49 38 L 55 32"
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.g>
        </svg>
      );
    default:
      return null;
  }
}

export default function HowWeWork() {
  return (
    <section id="work" className="section-padding px-6 border-t border-slate-200 overflow-hidden bg-slate-50/10 relative">
      
      {/* Ambient drifting background orbs to match the rest of the site */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-orange-100/10 blur-3xl pointer-events-none z-0"
      />
      <motion.div
        animate={{
          x: [0, -25, 25, 0],
          y: [0, 25, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-orange-50/20 blur-3xl pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <span className="text-orange-600 tech-label block mb-4">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            A clear path from problem to product.
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-semibold">
            Every engagement runs through the same disciplined process — whether it starts from a napkin sketch or an engineering brief.
          </p>
        </div>

        {/* Free-Flowing Alternating Step Rows */}
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
              >
                {/* Text Content Column */}
                <div
                  className={`col-span-1 md:col-span-7 flex flex-col justify-center order-1 md:order-none ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="space-y-3"
                  >
                    {/* Big Floating Step Number badge */}
                    <span className="block text-6xl md:text-7xl font-black text-orange-600/10 font-heading leading-none -mb-2">
                      {step.number}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Free-Flowing Visual Column */}
                <div
                  className={`col-span-1 md:col-span-5 flex items-center justify-center order-2 md:order-none ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center"
                  >
                    <StepVisual index={idx} />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
