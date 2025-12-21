"use client";
import { FileSearch, Box, ShieldCheck, Truck } from "lucide-react";

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
  return (
    <section id="process" className="py-32 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">The Workflow</span>
          <h2 className="text-4xl font-heading text-slate-900">Engineered for Reliability</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-8 relative z-10 flex justify-center md:justify-start">
                <div className="w-20 h-20 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 text-2xl shadow-sm group-hover:border-accent group-hover:text-accent transition-all duration-300">
                  <step.icon size={36} strokeWidth={1.5} />
                </div>
                {/* Connector Line */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-20 w-full h-[2px] bg-slate-200 -z-10" />
                )}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}