"use client";
import { Ruler, Cpu, FlaskConical, Factory } from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    category: "Mechanical",
    title: "CAD & Parametric Engineering",
    desc: "Full 3D mechanical design in Autodesk Fusion 360 and FreeCAD. Parametric models built for variant families, toleranced for manufacturing, and structured for iteration.",
    tags: ["Fusion 360", "FreeCAD", "Parametric Design", "GD&T"],
    icon: Ruler
  },
  {
    category: "Electronics",
    title: "Embedded Systems & Firmware",
    desc: "Sensor integration, microcontroller-based control logic, actuator systems, and serial communication — designed, coded, and integrated into the physical product.",
    tags: ["ESP32", "Sensors", "Servos", "Firmware", "Serial Comms"],
    icon: Cpu
  },
  {
    category: "Materials",
    title: "Material Engineering & Selection",
    desc: "Material choice is an engineering decision, not a default. We characterise and select polymers for the specific demands of each application — mechanical load, chemical exposure, temperature, or regulatory environment.",
    tags: ["PETG", "TPU 95A", "PETG-CF", "ASA", "PLA"],
    icon: FlaskConical
  },
  {
    category: "Manufacturing",
    title: "Advanced FDM Production",
    desc: "Multi-machine FDM manufacturing capability for prototypes and low-volume runs. Process-controlled printing, validated profiles per material, and production-quality outputs — not desktop hobbyist results.",
    tags: ["FDM", "Multi-Material", "Low-Volume Runs", "Process Control"],
    icon: Factory
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-padding px-6 border-t border-slate-200 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-orange-600 tech-label block mb-4">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            The technical stack <br className="hidden md:inline" /> behind every build.
          </h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl leading-relaxed font-semibold">
            Each project draws from a set of capabilities that have been developed and proven across real client work. We don&apos;t subcontract the hard parts.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {capabilities.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-full hover:border-orange-600/60 hover:shadow-md transition-all duration-300 group"
            >
              {/* Icon & Category Badge */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-slate-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-100 transition-colors duration-300 mb-6 shadow-sm">
                  <item.icon size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 leading-snug tracking-tight">
                  {item.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-slate-600 leading-relaxed font-medium text-sm mb-6">
                {item.desc}
              </p>

              {/* Tags Container */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-100">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-200/50 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}