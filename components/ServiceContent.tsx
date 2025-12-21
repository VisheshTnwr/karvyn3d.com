// "use client"; 
// import { motion } from 'framer-motion';
// import Image from "next/image";
// import { SERVICES } from "@/constants/services";

// export default function ServiceContent() {
//   return (
//     <>
//       <div className="mb-16 text-center lg:text-left">
//         <h2 className="text-4xl font-heading text-slate-900 mb-4">Core Capabilities</h2>
//         <p className="text-slate-500 text-lg max-w-2xl lg:mx-0 mx-auto">
//           From single bespoke research tools to batches of 1,000 retail-ready units. 
//           Our facility is optimized for high-mix, low-volume production.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {SERVICES.map((service, index) => (
//           <motion.div 
//             key={index} 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="industrial-card group relative overflow-hidden rounded-xl p-8"
//           >
//             <div className="mb-6 w-14 h-14 flex items-center justify-center bg-orange-50 border border-orange-100 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
//               <service.icon size={28} strokeWidth={1.5} />
//             </div>
            
//             <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
//             <p className="text-sm text-slate-600 leading-relaxed mb-8">
//               {service.description}
//             </p>
            
//             <a href="#contact" className="absolute bottom-8 left-8 text-slate-900 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
//               Inquire Now <span className="text-accent">→</span>
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </>
//   );
// }
















































"use client";
import { motion } from 'framer-motion';
import Image from "next/image";
import { SERVICES } from "@/constants/services";
import { useState } from "react";

export default function ServiceContent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mb-16 text-center lg:text-left">
        <h2 className="text-4xl font-heading text-slate-900 mb-4">Core Capabilities</h2>
        <p className="text-slate-500 text-lg max-w-2xl lg:mx-0 mx-auto">
          From single bespoke research tools to batches of 1,000 retail-ready units. 
          Our facility is optimized for high-mix, low-volume production.
        </p>
      </div>

      <div className="relative w-full px-4">
        
        {/* REFINED CENTRAL INDICATOR 
            - pointer-events-none ensures users can't "click" it
            - High contrast orange highlights to command attention
        */}
        <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0 flex-col justify-around py-32 pointer-events-none">
          {[1, 2].map((i) => (
            <motion.div 
              key={i}
              animate={{ 
                opacity: hoveredIndex !== null ? 0 : 1,
                scale: hoveredIndex !== null ? 0.8 : 1
              }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-12">
                {/* Left Pointer */}
                <motion.div 
                  animate={{ x: [-10, 0, -10] }} 
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="flex gap-1 text-orange-500 font-black text-2xl"
                >
                  <span>«</span><span>«</span>
                </motion.div>
                
                <span className="text-slate-400 font-black tracking-[0.4em] uppercase text-[11px] bg-white px-6 py-2 border border-slate-100 rounded-full shadow-sm whitespace-nowrap">
                  Hover for more details
                </span>

                {/* Right Pointer */}
                <motion.div 
                  animate={{ x: [10, 0, 10] }} 
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="flex gap-1 text-orange-500 font-black text-2xl"
                >
                  <span>»</span><span>»</span>
                </motion.div>
              </div>
              
              <div className="h-[1px] w-80 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* GRID: 2 columns with edge alignment */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-y-24 w-full relative z-10">
          {SERVICES.map((service, index) => {
            const isRightEdge = (index + 1) % 2 === 0;
            const morphId = `title-${index}`;
            const iconMorphId = `icon-${index}`;
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={index} 
                className={`flex w-full ${isRightEdge ? 'justify-end' : 'justify-start'}`}
              >
                <motion.div 
                  initial="initial"
                  whileHover="hovered"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative h-[380px] w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-lg cursor-pointer group hover:z-50 transition-all duration-300"
                >
                  {/* BACK LAYER: Specification Sheet (Blueprint) */}
                  <div 
                    className="absolute inset-0 z-10 p-10 flex flex-col justify-between rounded-2xl"
                    style={{ 
                      backgroundColor: '#f8fafc',
                      backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', 
                      backgroundSize: '24px 24px' 
                    }}
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4 min-h-[40px]">
                        {isHovered && (
                          <>
                            <motion.div layoutId={iconMorphId} className="text-orange-600">
                              <service.icon size={26} />
                            </motion.div>
                            <motion.h3 
                              layoutId={morphId}
                              transition={{ type: "spring", stiffness: 100, damping: 20 }}
                              className="text-xl font-bold text-slate-900 leading-tight"
                            >
                              {service.title}
                            </motion.h3>
                          </>
                        )}
                      </div>

                      <motion.div
                        variants={{
                          initial: { opacity: 0, x: -15 },
                          hovered: { opacity: 1, x: 0, transition: { delay: 0.15 } }
                        }}
                      >
                        <span className="text-[10px] font-bold tracking-[0.3em] text-orange-600 uppercase mb-3 block border-b border-orange-100 pb-2">
                          Engineering Specifications
                        </span>
                        <p className="text-sm text-slate-800 font-semibold leading-relaxed">
                          {service.description}
                        </p>
                      </motion.div>
                    </div>

                    <motion.div
                      variants={{
                        initial: { opacity: 0 },
                        hovered: { opacity: 1, transition: { delay: 0.25 } }
                      }}
                      className="pt-4 border-t border-slate-200"
                    >
                      <div className="text-slate-900 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-orange-600 transition-all">
                        Initialize Workflow <span className="text-orange-500">→</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* FRONT LAYER: Sliding Image Cover + Footer Heading */}
                  <motion.div 
                    variants={{
                      initial: { x: 0 },
                      hovered: { x: isRightEdge ? "-100%" : "100%" }
                    }}
                    transition={{ type: "spring", stiffness: 90, damping: 20 }}
                    className="absolute inset-0 z-20 w-full h-full rounded-2xl bg-white flex flex-col overflow-hidden shadow-md group-hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="relative w-full h-3/4 overflow-hidden">
                      <Image 
                        src={service.imageUrl} 
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="w-full h-1/4 flex items-center px-8 bg-white border-t border-slate-100">
                      <div className="flex items-center gap-4">
                        {!isHovered && (
                          <>
                            <motion.div layoutId={iconMorphId} className="text-orange-500">
                              <service.icon size={26} />
                            </motion.div>
                            <motion.h3 
                              layoutId={morphId}
                              transition={{ type: "spring", stiffness: 100, damping: 20 }}
                              className="text-xl font-bold text-slate-900 leading-tight"
                            >
                              {service.title}
                            </motion.h3>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}