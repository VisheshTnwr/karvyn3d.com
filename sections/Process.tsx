"use client";
import { motion } from 'framer-motion';

const steps = [
  { title: "Consultation", desc: "Digital audit of your CAD files to optimize for functional utility." },
  { title: "Optimization", desc: "Material-specific logic applied to ensure maximum part strength." },
  { title: "Fabrication", desc: "Meticulous batch production using precision FDM hardware." },
  { title: "QA & Dispatch", desc: "Individual quality inspections and express delivery." }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-heading text-white mb-6 uppercase tracking-tighter">
            How we <span className="text-accent-readable">Execute</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg font-medium">
            A high-speed workflow designed for digital native engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="relative p-8 bg-gray-900/30 border border-white/5 rounded-3xl text-center group hover:bg-gray-900/60 transition-all duration-300"
            >
              {/* Increased size and black-text contrast for the number */}
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center font-heading text-[1.5rem] text-black mb-8 mx-auto accent-glow">
                {idx + 1}
              </div>
              <h3 className="text-xl font-heading text-white mb-4 tracking-tight uppercase italic">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}