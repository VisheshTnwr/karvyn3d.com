"use client";
import { Zap, Component, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const aboutPoints = [
  { 
    icon: Component, 
    title: "Small-Batch, Zero Compromise", 
    desc: "We prioritize quality over volume. Every part, whether it's a single prototype or a batch of 100, passes meticulous QA standards.",
  },
  { 
    icon: Users, 
    title: "Engineer-to-Engineer Workflow", 
    desc: "You talk directly to the team fabricating your parts. This streamlined loop cuts lead times and eliminates communication friction.",
  },
  { 
    icon: Rocket, 
    title: "Industrial-Grade Materials", 
    desc: "We utilize specialized PLA+, PETG, and Carbon Fiber composites, sourcing only materials optimized for structural function.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
            Why Karvyn3D
          </span>
          <h2 className="text-5xl font-heading text-slate-900 mb-6 leading-tight">
            The difference is <span className="text-accent">Intentional.</span>
          </h2>
          <p className="text-xl text-slate-500 mb-8 leading-relaxed font-medium">
            We are not a traditional factory. We are a design and production studio built for the modern creator. We focus on bridging the gap between digital design and tangible, functional products using precision hardware.
          </p>
        </motion.div>

        <div className="space-y-6">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white rounded-xl text-accent border border-slate-200 shadow-sm">
                  <point.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}