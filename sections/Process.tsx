"use client";
import { FileSearch, Box, ShieldCheck, Truck, CheckCircle2, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const steps = [
  { 
    icon: FileSearch,
    title: "Design Review", 
    desc: "Our engineers review your CAD for wall thickness, tolerances, and printability. We propose optimizations to reduce cost and failure risk." 
  },
  { 
    icon: Box,
    title: "Agile Fabrication", 
    desc: "Production begins on our calibrated FDM farms using industrial-grade polymers (PLA+, PETG, PC) tailored to your specs." 
  },
  { 
    icon: ShieldCheck,
    title: "Quality Assurance", 
    desc: "Every batch undergoes dimensional accuracy checks and visual inspection. We ensure consistent layer adhesion and surface finish." 
  },
  { 
    icon: Truck,
    title: "Secure Logistics", 
    desc: "Parts are securely packed with batch tracking. Digital files are archived in our secure vault for instant re-ordering." 
  }
];

export default function Process() {
  const [visitedSteps, setVisitedSteps] = useState<number[]>([]);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isComplete = visitedSteps.length === steps.length;

  const handleMouseEnter = (idx: number) => {
    const isFirstStep = idx === 0;
    const isPreviousStepVisited = visitedSteps.includes(idx - 1);

    if ((isFirstStep || isPreviousStepVisited) && !visitedSteps.includes(idx)) {
      hoverTimeoutRef.current = setTimeout(() => {
        setVisitedSteps((prev) => [...prev, idx]);
      }, 200); 
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  return (
    <section id="process" className="py-32 px-6 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="text-orange-600 text-xs font-bold tracking-[0.3em] uppercase block mb-3">
            Sequential Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            {isComplete ? "System Optimized" : "Engineered for Reliability"}
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12 lg:gap-8 relative">
          {steps.map((step, idx) => {
            const isVisited = visitedSteps.includes(idx);
            const isLast = idx === steps.length - 1;
            const isLocked = idx !== 0 && !visitedSteps.includes(idx - 1) && !isVisited;

            return (
              <div 
                key={idx} 
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                className={`relative group flex flex-col items-center md:items-start ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="mb-10 relative w-full flex justify-center md:justify-start items-center">
                  
                  {!isLast && (
                    <div className="hidden md:block absolute top-1/2 left-20 w-full h-[3px] -translate-y-1/2 z-0">
                      <div className="absolute inset-0 bg-slate-200 rounded-full" />
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: isVisited ? "100%" : "0%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-orange-600 rounded-full shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                      />
                    </div>
                  )}

                  <motion.div 
                    animate={{ 
                      borderColor: isVisited ? "#ea580c" : "#e2e8f0",
                      color: isVisited ? "#ea580c" : isLocked ? "#cbd5e1" : "#94a3b8",
                      scale: isVisited ? 1.08 : 1,
                      backgroundColor: isVisited ? "#ffffff" : "#f1f5f9"
                    }}
                    className="w-20 h-20 border-2 rounded-2xl flex items-center justify-center relative shadow-sm z-10 bg-white"
                  >
                    {!isVisited && !isLocked && (
                        <motion.div 
                            className="absolute bottom-0 left-0 right-0 bg-orange-50 -z-10 rounded-xl"
                            initial={{ height: 0 }}
                            whileHover={{ height: "100%" }}
                            transition={{ duration: 0.5 }}
                        />
                    )}

                    {isLocked && <Lock size={16} className="absolute opacity-20" />}

                    <AnimatePresence>
                      {isLast && isComplete && (
                        <>
                          {/* --- RESTORED RADIATING PULSE --- */}
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: 1.8, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                            className="absolute inset-0 bg-orange-400 rounded-2xl -z-10"
                          />
                          
                          <motion.div 
                            initial={{ scale: 0, y: 10 }}
                            animate={{ scale: 1, y: 0 }}
                            className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-1.5 shadow-xl border-2 border-white z-50"
                          >
                            <CheckCircle2 size={20} strokeWidth={3} />
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>

                    <step.icon size={36} strokeWidth={isVisited ? 2 : 1.5} />
                  </motion.div>
                </div>

                <div className="text-center md:text-left z-10">
                  <motion.h3 
                    animate={{ opacity: isLocked ? 0.3 : 1, color: isVisited ? "#0f172a" : "#64748b" }}
                    className="text-lg font-bold mb-3"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    animate={{ opacity: isLocked ? 0.2 : 1 }}
                    className="text-sm text-slate-500 leading-relaxed font-medium"
                  >
                    {step.desc}
                  </motion.p>
                </div>
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {isComplete && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-20 text-center"
            >
              <button 
                onClick={() => setVisitedSteps([])}
                className="group flex items-center gap-2 mx-auto text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-orange-600 transition-all px-6 py-2 rounded-full border border-slate-200 hover:border-orange-200 bg-white shadow-sm"
              >
                <span className="group-hover:rotate-180 transition-transform duration-500 italic">⟲</span>
                Reset Workflow Sequence
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}