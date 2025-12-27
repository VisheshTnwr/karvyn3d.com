"use client";
import { FileSearch, Box, ShieldCheck, Truck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
  // Container variants to stagger the children (the steps)
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.8, // Delay between each step starting its animation
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const lineVariants = {
    initial: { width: "0%" },
    animate: { 
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut" } 
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
            Engineered for Reliability
          </h2>
        </div>

        {/* Auto-playing staggered animation on viewport enter */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-4 gap-12 lg:gap-8 relative"
        >
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;

            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="relative flex flex-col items-center md:items-start"
              >
                {/* ICON & CONNECTOR LAYER */}
                <div className="mb-10 relative w-full flex justify-center md:justify-start items-center">
                  
                  {/* THE CONNECTOR LINE */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-1/2 left-20 w-full h-[3px] -translate-y-1/2 z-0">
                      {/* Gray Track */}
                      <div className="absolute inset-0 bg-slate-200 rounded-full" />
                      
                      {/* Auto-filling Orange Line */}
                      <motion.div 
                        variants={lineVariants}
                        className="absolute inset-0 bg-orange-600 rounded-full shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                      />
                    </div>
                  )}

                  {/* The Icon Box */}
                  <motion.div 
                    variants={{
                        initial: { borderColor: "#e2e8f0", color: "#94a3b8", backgroundColor: "#f1f5f9" },
                        animate: { 
                            borderColor: "#ea580c", 
                            color: "#ea580c", 
                            backgroundColor: "#ffffff",
                            transition: { delay: 0.5 } // Light up after the line reaches it
                        }
                    }}
                    className="w-20 h-20 border-2 rounded-2xl flex items-center justify-center relative shadow-sm z-10"
                  >
                    {/* Final Success Animation (Radiates only on the last icon) */}
                    {isLast && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }} // Triggers after all staggers complete
                        className="absolute inset-0 flex items-center justify-center"
                      >
                         {/* Radiating Pulse */}
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0.5 }}
                          animate={{ scale: 1.8, opacity: 0 }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                          className="absolute inset-0 bg-orange-400 rounded-2xl -z-10"
                        />
                        {/* Checkmark Badge */}
                        <motion.div 
                          initial={{ scale: 0, y: 10 }}
                          animate={{ scale: 1, y: 0 }}
                          className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-1.5 shadow-xl border-2 border-white z-50"
                        >
                          <CheckCircle2 size={20} strokeWidth={3} />
                        </motion.div>
                      </motion.div>
                    )}

                    <step.icon size={36} strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* TEXT LAYER */}
                <div className="text-center md:text-left z-10">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}