"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { SERVICES } from "@/constants/services";
import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react"; 

export default function ServiceContent() {
  const [selectedService, setSelectedService] = useState<(typeof SERVICES)[0] | null>(null);

  // --- SCROLL LOCK LOGIC ---
  useEffect(() => {
    if (selectedService) {
      // Disable scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  return (
    <section className="py-20 relative">
      <div className="mb-20 text-center lg:text-left">
        <h2 className="text-4xl font-heading text-slate-900 mb-4 tracking-tight">Core Capabilities</h2>
        <p className="text-slate-500 text-lg max-w-2xl lg:mx-0 mx-auto leading-relaxed">
          From single bespoke research tools to batches of 1,000 retail-ready units. 
          Our facility is optimized for high-mix, low-volume production.
        </p>
      </div>

      <div className="flex flex-col gap-16 lg:gap-24 w-full px-4">
        {SERVICES.map((service, index) => {
          const isFlipped = index % 2 !== 0;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${isFlipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-white`}
            >
              {/* CONTENT SIDE */}
              <div 
                className="flex-1 p-8 lg:p-12 flex flex-col justify-between relative"
                style={{ 
                  backgroundColor: '#f8fafc',
                  backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', 
                  backgroundSize: '24px 24px' 
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-orange-600 border border-slate-100">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-orange-600 uppercase mb-4 block border-b border-orange-100 pb-2 w-fit">
                    Engineering Specs
                  </span>
                  <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-slate-200">
                  {/* --- NEW STYLED BOLD BUTTON --- */}
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="group/btn relative inline-flex items-center gap-4 px-6 py-3 bg-white border-2 border-slate-900 rounded-full text-slate-900 font-black uppercase tracking-widest text-[10px] transition-all duration-300 hover:bg-slate-900 hover:text-white shadow-[4px_4px_0px_0px_rgba(249,115,22,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                  >
                    Learn More Detail
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* IMAGE SIDE */}
              <div className="flex-1 relative min-h-[350px] overflow-hidden">
                <Image 
                  src={service.imageUrl} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* DETAILED POP-UP MODAL (Kept exactly as it was) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div 
              layoutId={selectedService.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-white rounded-full shadow-lg border border-slate-100 hover:text-orange-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 h-[300px] md:h-[400px] gap-1 p-2 bg-slate-100">
                <div className="relative h-full w-full md:col-span-2 rounded-tl-2xl overflow-hidden">
                  <Image src={selectedService.imageUrl} alt="Main detail" fill className="object-cover" />
                </div>
                <div className="grid grid-rows-2 gap-1 h-full">
                  <div className="relative h-full w-full rounded-tr-2xl overflow-hidden bg-slate-200">
                     <Image src={selectedService.imageUrl} alt="Detail 2" fill className="object-cover opacity-80" />
                  </div>
                  <div className="relative h-full w-full overflow-hidden bg-slate-300">
                     <Image src={selectedService.imageUrl} alt="Detail 3" fill className="object-cover opacity-60" />
                  </div>
                </div>
              </div>

              <div 
                className="p-8 lg:p-16"
                style={{ 
                  backgroundColor: '#f8fafc',
                  backgroundImage: 'linear-gradient(#e2e8f0 1.5px, transparent 1.5px), linear-gradient(90deg, #e2e8f0 1.5px, transparent 1.5px)', 
                  backgroundSize: '40px 40px' 
                }}
              >
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-white rounded-2xl shadow-md text-orange-600">
                      <selectedService.icon size={40} />
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                      {selectedService.title}
                    </h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-orange-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Project Overview</h4>
                      <p className="text-xl text-slate-700 leading-relaxed font-medium">
                        {selectedService.description} This advanced process is utilized for creating high-precision industrial components with extreme structural integrity. 
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-slate-200">
                      <div>
                        <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-4">Technical Capabilities</h4>
                        <ul className="space-y-3 text-slate-600 font-medium">
                          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Precision: ±0.05mm</li>
                          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Material: Industrial Grade Thermo-Polymers</li>
                          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Lead Time: 24-48 Hours</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-4">Ready to Start?</h4>
                        <p className="text-sm text-slate-500 mb-6">Our engineers are ready to review your CAD files and provide a technical feasibility report.</p>
                        <a href="#contact" onClick={() => setSelectedService(null)} className="block w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors">
                          Request Technical Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}