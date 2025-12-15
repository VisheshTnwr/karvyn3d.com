"use client"; 
import { motion } from 'framer-motion';
import Image from "next/image";
import { SERVICES } from "@/constants/services";

export default function ServiceContent() {
  return (
    <>
      <div className="mb-16 text-center lg:text-left">
        <h2 className="text-4xl font-heading text-slate-900 mb-4">Core Capabilities</h2>
        <p className="text-slate-500 text-lg max-w-2xl lg:mx-0 mx-auto">
          From single bespoke research tools to batches of 1,000 retail-ready units. 
          Our facility is optimized for high-mix, low-volume production.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="industrial-card group relative overflow-hidden rounded-xl p-8"
          >
            <div className="mb-6 w-14 h-14 flex items-center justify-center bg-orange-50 border border-orange-100 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <service.icon size={28} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              {service.description}
            </p>
            
            <a href="#contact" className="absolute bottom-8 left-8 text-slate-900 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
              Inquire Now <span className="text-accent">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
}