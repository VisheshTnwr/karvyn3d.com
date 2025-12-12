"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Project Consultation",
    desc: "We review your 3D models (STL/STEP) and discuss material requirements based on your part's function.",
    color: "bg-blue-600"
  },
  {
    title: "Optimized Slicing",
    desc: "Our engineers optimize orientation and support structures to ensure maximum strength and surface finish.",
    color: "bg-cyan-500"
  },
  {
    title: "Precision Printing",
    desc: "Parts are printed using industrial FDM or SLA machines with constant monitoring for quality control.",
    color: "bg-indigo-600"
  },
  {
    title: "Finishing & Delivery",
    desc: "Post-processing (support removal, sanding, or curing) followed by express shipping to your door.",
    color: "bg-slate-900"
  }
];

export default function Process() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How it works</h2>
          <p className="text-slate-500 text-lg">A seamless journey from digital file to physical product.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connector Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />

          {steps.map((step, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              key={idx} 
              className="flex flex-col items-center text-center"
            >
              <div className={`w-24 h-24 ${step.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mb-8 shadow-xl border-8 border-white`}>
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}