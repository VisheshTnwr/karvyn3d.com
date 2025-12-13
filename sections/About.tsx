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
    title: "High-Performance Filaments", 
    desc: "We utilize specialized PLA+ and PETG filaments, sourcing only materials optimized for structural function and aesthetic durability.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4 block">
            About Our Studio
          </span>
          <h2 className="text-5xl font-heading text-white mb-6 leading-tight">
            The difference is <span className="text-accent-readable">Intentional.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            We are not a traditional factory. We are a design and production studio built for the modern creator. We focus on bridging the gap between digital design and tangible, functional products using precision FDM hardware.
          </p>
        </motion.div>

        <div className="space-y-8">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.1 }}
              className="p-6 bg-gray-950 rounded-2xl border border-white/5 hover:border-accent/40 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-start gap-4">
                {/* FIXED: Added shrink-0 and fixed w/h to prevent squishing */}
                <div className="w-12 h-12 shrink-0 aspect-square flex items-center justify-center bg-accent/10 rounded-xl text-accent">
                  <point.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-white mb-2 leading-none">{point.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}