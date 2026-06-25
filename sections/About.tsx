"use client";
import { Zap, ShieldCheck, Microscope, FlaskConical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const aboutPoints = [
  { 
    id: "design",
    icon: ShieldCheck, 
    title: "In-House Engineering", 
    desc: "We don't just print files; we engineer solutions. Every product in our lineup is conceived and validated in-house using parametric design. This ensures that every clip, housing, and restraint meets exact mechanical tolerances.",
    stat: "100% Design Ownership"
  },
  { 
    id: "materials",
    icon: FlaskConical, 
    title: "Application-Specific Materials", 
    desc: "Our material selection is driven by protocol, not cost. We utilize research-grade PETG, TPU, and Polycarbonate chosen for non-ferromagnetic properties, autoclave compatibility, and chemical resistance in lab environments.",
    stat: "Bio-Compatible & MRI-Safe"
  },
  { 
    id: "validation",
    icon: Microscope, 
    title: "Lab-Ready Validation", 
    desc: "Moving beyond 'looks-like' prototypes to 'works-like' instruments. We stress-test our designs against real-world experimental protocols, ensuring reliability where off-the-shelf laboratory equipment falls short.",
    stat: "Research-Grade Integrity"
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="section-padding px-6 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
              The Karvyn<span className="text-orange-600">3D</span> Standard
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-500 tracking-tight">
              Where aesthetic utility meets <span className="text-orange-600">production precision.</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <div className="relative order-2 lg:order-1 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="w-16 h-1 bg-orange-600 rounded-full" />
                
                <h4 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight">
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

          <div className="space-y-6 order-1 lg:order-2">
            {aboutPoints.map((point, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full text-left p-6 lg:p-8 rounded-[2rem] border-2 transition-all duration-300 flex items-center gap-6 group cursor-pointer outline-none ${
                    isActive 
                      ? "border-orange-600 bg-white shadow-xl z-10" 
                      : "border-slate-50 bg-slate-50 hover:border-orange-200"
                  }`}
                >
                  <div className={`w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl border-2 transition-all duration-500 ${
                    isActive 
                      ? "bg-orange-600 text-white border-orange-600" 
                      : "bg-white text-slate-400 border-slate-100 group-hover:text-orange-600 group-hover:border-orange-600"
                  }`}>
                    <point.icon size={32} />
                  </div>

                  <div className="flex-1">
                    <h5 className={`text-lg lg:text-xl font-bold transition-colors ${
                      isActive ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"
                    }`}>
                      {point.title}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}