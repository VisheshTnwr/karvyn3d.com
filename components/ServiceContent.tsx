// "use client";
// import { motion } from 'framer-motion';
// import Image from "next/image";
// import { SERVICES } from "@/constants/services";
// import { useState } from "react";

// export default function ServiceContent() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <>
//       <div className="mb-16 text-center lg:text-left">
//         <h2 className="text-4xl font-heading text-slate-900 mb-4">Core Capabilities</h2>
//         <p className="text-slate-500 text-lg max-w-2xl lg:mx-0 mx-auto">
//           From single bespoke research tools to batches of 1,000 retail-ready units. 
//           Our facility is optimized for high-mix, low-volume production.
//         </p>
//       </div>

//       <div className="relative w-full px-4">
        
//         {/* REFINED CENTRAL INDICATOR 
//             - pointer-events-none ensures users can't "click" it
//             - High contrast orange highlights to command attention
//         */}
//         <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0 flex-col justify-around py-32 pointer-events-none">
//           {[1, 2].map((i) => (
//             <motion.div 
//               key={i}
//               animate={{ 
//                 opacity: hoveredIndex !== null ? 0 : 1,
//                 scale: hoveredIndex !== null ? 0.8 : 1
//               }}
//               className="flex flex-col items-center gap-4"
//             >
//               <div className="flex items-center gap-12">
//                 {/* Left Pointer */}
//                 <motion.div 
//                   animate={{ x: [-10, 0, -10] }} 
//                   transition={{ repeat: Infinity, duration: 1.2 }}
//                   className="flex gap-1 text-orange-500 font-black text-2xl"
//                 >
//                   <span>«</span><span>«</span>
//                 </motion.div>
                
//                 <span className="text-slate-400 font-black tracking-[0.4em] uppercase text-[11px] bg-white px-6 py-2 border border-slate-100 rounded-full shadow-sm whitespace-nowrap">
//                   Hover for more details
//                 </span>

//                 {/* Right Pointer */}
//                 <motion.div 
//                   animate={{ x: [10, 0, 10] }} 
//                   transition={{ repeat: Infinity, duration: 1.2 }}
//                   className="flex gap-1 text-orange-500 font-black text-2xl"
//                 >
//                   <span>»</span><span>»</span>
//                 </motion.div>
//               </div>
              
//               <div className="h-[1px] w-80 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
//             </motion.div>
//           ))}
//         </div>

//         {/* GRID: 2 columns with edge alignment */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-y-24 w-full relative z-10">
//           {SERVICES.map((service, index) => {
//             const isRightEdge = (index + 1) % 2 === 0;
//             const morphId = `title-${index}`;
//             const iconMorphId = `icon-${index}`;
//             const isHovered = hoveredIndex === index;

//             return (
//               <div 
//                 key={index} 
//                 className={`flex w-full ${isRightEdge ? 'justify-end' : 'justify-start'}`}
//               >
//                 <motion.div 
//                   initial="initial"
//                   whileHover="hovered"
//                   onHoverStart={() => setHoveredIndex(index)}
//                   onHoverEnd={() => setHoveredIndex(null)}
//                   className="relative h-[380px] w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-lg cursor-pointer group hover:z-50 transition-all duration-300"
//                 >
//                   {/* BACK LAYER: Specification Sheet (Blueprint) */}
//                   <div 
//                     className="absolute inset-0 z-10 p-10 flex flex-col justify-between rounded-2xl"
//                     style={{ 
//                       backgroundColor: '#f8fafc',
//                       backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', 
//                       backgroundSize: '24px 24px' 
//                     }}
//                   >
//                     <div className="flex flex-col gap-6">
//                       <div className="flex items-center gap-4 min-h-[40px]">
//                         {isHovered && (
//                           <>
//                             <motion.div layoutId={iconMorphId} className="text-orange-600">
//                               <service.icon size={26} />
//                             </motion.div>
//                             <motion.h3 
//                               layoutId={morphId}
//                               transition={{ type: "spring", stiffness: 100, damping: 20 }}
//                               className="text-xl font-bold text-slate-900 leading-tight"
//                             >
//                               {service.title}
//                             </motion.h3>
//                           </>
//                         )}
//                       </div>

//                       <motion.div
//                         variants={{
//                           initial: { opacity: 0, x: -15 },
//                           hovered: { opacity: 1, x: 0, transition: { delay: 0.15 } }
//                         }}
//                       >
//                         <span className="text-[10px] font-bold tracking-[0.3em] text-orange-600 uppercase mb-3 block border-b border-orange-100 pb-2">
//                           Engineering Specifications
//                         </span>
//                         <p className="text-sm text-slate-800 font-semibold leading-relaxed">
//                           {service.description}
//                         </p>
//                       </motion.div>
//                     </div>

//                     <motion.div
//                       variants={{
//                         initial: { opacity: 0 },
//                         hovered: { opacity: 1, transition: { delay: 0.25 } }
//                       }}
//                       className="pt-4 border-t border-slate-200"
//                     >
//                       <div className="text-slate-900 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-orange-600 transition-all">
//                         Initialize Workflow <span className="text-orange-500">→</span>
//                       </div>
//                     </motion.div>
//                   </div>

//                   {/* FRONT LAYER: Sliding Image Cover + Footer Heading */}
//                   <motion.div 
//                     variants={{
//                       initial: { x: 0 },
//                       hovered: { x: isRightEdge ? "-100%" : "100%" }
//                     }}
//                     transition={{ type: "spring", stiffness: 90, damping: 20 }}
//                     className="absolute inset-0 z-20 w-full h-full rounded-2xl bg-white flex flex-col overflow-hidden shadow-md group-hover:shadow-2xl transition-shadow duration-300"
//                   >
//                     <div className="relative w-full h-3/4 overflow-hidden">
//                       <Image 
//                         src={service.imageUrl} 
//                         alt={service.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
                    
//                     <div className="w-full h-1/4 flex items-center px-8 bg-white border-t border-slate-100">
//                       <div className="flex items-center gap-4">
//                         {!isHovered && (
//                           <>
//                             <motion.div layoutId={iconMorphId} className="text-orange-500">
//                               <service.icon size={26} />
//                             </motion.div>
//                             <motion.h3 
//                               layoutId={morphId}
//                               transition={{ type: "spring", stiffness: 100, damping: 20 }}
//                               className="text-xl font-bold text-slate-900 leading-tight"
//                             >
//                               {service.title}
//                             </motion.h3>
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }







































































"use client";
import { motion } from 'framer-motion';
import Image from "next/image";
import { SERVICES } from "@/constants/services";

export default function ServiceContent() {
  return (
    <section className="py-20">
      <div className="mb-20 text-center lg:text-left">
        <h2 className="text-4xl font-heading text-slate-900 mb-4 tracking-tight">Core Capabilities</h2>
        <p className="text-slate-500 text-lg max-w-2xl lg:mx-0 mx-auto leading-relaxed">
          From single bespoke research tools to batches of 1,000 retail-ready units. 
          Our facility is optimized for high-mix, low-volume production.
        </p>
      </div>

      {/* STACKED LAYOUT: One service per line, alternating directions */}
      <div className="flex flex-col gap-16 lg:gap-24 w-full px-4">
        {SERVICES.map((service, index) => {
          // Flip direction based on index (Card-Image vs Image-Card)
          const isFlipped = index % 2 !== 0;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${isFlipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-white`}
            >
              {/* CONTENT CARD (The old "Details" pop-up is now the main left/right side) */}
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
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-3 text-slate-900 font-bold uppercase tracking-widest text-xs hover:text-orange-600 transition-colors"
                  >
                    Initialize Order <span className="text-orange-500 text-lg">→</span>
                  </a>
                </div>
              </div>

              {/* IMAGE SIDE: Stitched physically to the card */}
              <div className="flex-1 relative min-h-[350px] overflow-hidden">
                <Image 
                  src={service.imageUrl} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle overlay that lightens on hover */}
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}