"use client";
import { Zap, Component, Users, Rocket, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const aboutPoints = [
  { 
    id: "quality",
    icon: Component, 
    title: "Small-Batch, Zero Compromise", 
    desc: "We prioritize quality over volume. Every part, whether it's a single prototype or a batch of 100, passes meticulous QA standards. Our commitment to precision means your components aren't just parts; they are industrial-grade solutions.",
    stat: "100% QA Inspection"
  },
  { 
    id: "workflow",
    icon: Users, 
    title: "Engineer-to-Engineer Workflow", 
    desc: "You talk directly to the team fabricating your parts. This streamlined loop cuts lead times and eliminates communication friction. By removing middlemen, we ensure that technical requirements are translated perfectly from file to final build.",
    stat: "Zero Friction Comms"
  },
  { 
    id: "materials",
    icon: Rocket, 
    title: "Industrial-Grade Materials", 
    desc: "We utilize specialized PLA+, PETG, and Carbon Fiber composites, sourcing only materials optimized for structural function. Every filament in our inventory is chosen for specific mechanical properties like thermal resistance and high tensile strength.",
    stat: "CF-Reinforced Options"
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="py-32 px-6 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTERED TOP HEADING */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-orange-600 mb-6 tracking-tighter">
              Why Karvyn3D?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              The difference is <span className="text-orange-600">intentional.</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* LEFT SIDE: THE DYNAMIC DESCRIPTION */}
          <div className="relative order-2 lg:order-1 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="space-y-8"
              >
                <div className="w-16 h-1 bg-orange-600 rounded-full" />
                
                <h4 className="text-4xl font-bold text-slate-900 leading-tight">
                  {aboutPoints[activeIndex].title}
                </h4>
                
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                  {aboutPoints[activeIndex].desc}
                </p>
                
                <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-slate-200">
                  <Zap size={16} className="text-orange-500" />
                  {aboutPoints[activeIndex].stat}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: THE CLICKABLE CONTROL TILES */}
          <div className="space-y-6 order-1 lg:order-2">
            {aboutPoints.map((point, index) => {
              const isActive = activeIndex === index;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  // cursor-pointer added here
                  className={`w-full text-left p-6 lg:p-8 rounded-[2rem] border-2 transition-all duration-300 flex items-center gap-6 group relative cursor-pointer outline-none ${
                    isActive 
                      ? "border-orange-600 bg-white shadow-2xl shadow-orange-900/10 scale-105 z-10" 
                      : "border-slate-50 bg-slate-50 hover:border-orange-200 hover:bg-white hover:shadow-xl hover:-translate-y-1"
                  }`}
                  whileHover={!isActive ? { scale: 1.02 } : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon Frame */}
                  <div className={`w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl border-2 transition-all duration-500 ${
                    isActive 
                      ? "bg-orange-600 text-white border-orange-600 rotate-12" 
                      : "bg-white text-slate-400 border-slate-100 group-hover:border-orange-500 group-hover:text-orange-600"
                  }`}>
                    <point.icon size={32} />
                  </div>

                  <div className="flex-1">
                    <h5 className={`text-lg lg:text-xl font-bold transition-colors ${
                      isActive ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"
                    }`}>
                      {point.title}
                    </h5>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="text-orange-600 text-[10px] font-black mt-2 flex items-center gap-2 uppercase tracking-[0.2em]"
                      >
                        Active Specification <ArrowRight size={12} />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}