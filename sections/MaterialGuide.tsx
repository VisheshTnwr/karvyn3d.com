"use client";
import { HardHat, Feather, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const MATERIALS = [
  {
    icon: Feather,
    title: "PLA+ (Precision & Detail)",
    benefit: "SUPERIOR FINISH, ECO-FRIENDLY, SPEED",
    desc: "Engineered for maximum visual fidelity. Our PLA+ is tougher than standard PLA, offering better layer adhesion and a cleaner surface finish. Ideal for projects where aesthetic precision is the priority.",
    chooseFor: "Detailed Prototypes, Corporate Gifts, Art Pieces, Display Models.",
    color: "text-accent",
  },
  {
    icon: HardHat,
    title: "PETG (Strength & Resilience)",
    benefit: "HEAT RESISTANT, IMPACT TOUGH, FUNCTIONAL",
    desc: "Built for functional performance. PETG offers the durability needed for mechanical stress and temperature fluctuations. Perfect for PCB housings and lab equipment.",
    chooseFor: "PCB Housings, Lab Equipment, Custom Fittings, End-use Parts.",
    color: "text-accent",
  },
];

export default function MaterialGuide() {
  return (
    <section id="materials" className="py-32 px-6 bg-slate-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-heading text-white mb-6 uppercase tracking-tighter">
            Curated <span className="text-accent-readable">Materials</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg font-medium">
            We focus exclusively on high-performance filaments to ensure every part meets studio standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MATERIALS.map((material, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 bg-gray-900/50 border border-white/10 rounded-[2.5rem] flex flex-col hover:border-accent/50 transition-all duration-500 shadow-2xl"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <material.icon size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading text-white tracking-tight leading-none">{material.title}</h3>
              </div>
              
              <p className="text-gray-300 text-base mb-8 leading-relaxed font-medium">
                {material.desc}
              </p>

              <div className="mt-auto pt-8 border-t border-white/5">
                <p className="text-sm font-black text-accent-readable uppercase tracking-[0.1em] flex items-center gap-2 mb-4">
                  <CheckCircle size={18} className="shrink-0" /> {material.benefit}
                </p>
                <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Best for:</p>
                    <p className="text-sm text-gray-200 font-bold leading-relaxed">{material.chooseFor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}