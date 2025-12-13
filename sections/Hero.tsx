"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-gray-950">
      {/* Background Radial Glow - Using your Lime-400 Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-accent/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          {/* Badge using Poppins Font */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-heading font-black uppercase tracking-widest mb-8 transition-colors">
            3D Production Studio
          </span>
          
          {/* UPDATED HEADLINE: The Technical Studio Vibe */}
          <h1 className="text-5xl md:text-8xl font-heading tracking-tight text-white mb-8 leading-[1.05] transition-colors">
            Digital Blueprints. <br /> 
            <span className="text-accent">Physical Perfection.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed transition-colors">
            We bridge the gap between digital vision and physical utility. High-precision 3D production for labs, startups, and innovators who value <span className="text-white font-bold italic">aesthetic utility.</span>
          </p>

          {/* Primary & Secondary Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-accent text-black px-10 py-4 rounded-2xl font-heading font-black text-lg shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_40px_rgba(163,230,53,0.5)] transition-all transform hover:scale-105">
              Start Batching
            </a>
            <a href="#services" className="px-10 py-4 rounded-2xl font-heading font-black text-lg border border-gray-800 text-white hover:bg-gray-900 transition transform hover:scale-105">
              Capabilities
            </a>
          </div>
        </motion.div>

        {/* Specialized Areas Bar */}
        <div className="mt-32 pt-16 border-t border-white/5">
          <p className="text-[10px] font-heading font-black text-slate-500 uppercase tracking-[0.3em] mb-10 transition-colors">
            Fabricating Solutions for
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70">
            {["R&D Labs", "Tech Startups", "Educational Projects", "Corporate Gifting"].map((industry) => (
              <span key={industry} className="text-sm font-heading font-bold text-slate-300 border border-slate-800 px-4 py-2 rounded-lg transition-colors hover:border-accent hover:text-accent">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}