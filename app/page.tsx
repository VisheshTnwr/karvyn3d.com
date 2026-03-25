// "use client";
// import Navbar from "@/components/Navbar";
// import Hero from "@/sections/Hero";
// import ServiceContent from "@/components/ServiceContent";
// import Process from "@/sections/Process";
// import Contact from "@/sections/Contact";
// import About from "@/sections/About";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
//       <Navbar />
//       <Hero />

//       {/* Capability Section */}
//       <section id="solutions" className="py-24 px-6 bg-slate-50">
//         <div className="max-w-7xl mx-auto">
//           <ServiceContent />
//         </div>
//       </section>

//       {/* Trust/About Section */}
//       <About />

//       <Process />

//       <Contact />

//       <footer className="py-20 border-t border-slate-200 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-slate-500">

//             {/* Column 1: Brand Info */}
//             <div className="space-y-4">
//               <h4 className="text-slate-900 font-bold uppercase tracking-widest">Karvyn3D</h4>
//               <p className="leading-relaxed">
//                 Industrial Additive Manufacturing Partner. <br/>
//                 Precision FDM Solutions.
//               </p>
//               <p className="pt-4 opacity-50 text-xs">
//                 © {new Date().getFullYear()} Karvyn3D.
//               </p>
//             </div>

//             {/* Column 2: Solutions */}
//             <div className="space-y-4">
//               <h4 className="text-slate-900 font-bold uppercase tracking-widest">Solutions</h4>
//               <ul className="space-y-3">
//                 <li className="hover:text-orange-600 transition-colors cursor-pointer">Bridge Production</li>
//                 <li className="hover:text-orange-600 transition-colors cursor-pointer">Labware Engineering</li>
//                 <li className="hover:text-orange-600 transition-colors cursor-pointer">Corporate Artifacts</li>
//               </ul>
//             </div>

//             {/* Column 3: Legal */}
//             <div className="space-y-4">
//               <h4 className="text-slate-900 font-bold uppercase tracking-widest">Legal</h4>
//               <ul className="space-y-3">
//                 <li className="hover:text-orange-600 transition-colors cursor-pointer">Privacy Policy</li>
//                 <li className="hover:text-orange-600 transition-colors cursor-pointer">Terms of Service</li>
//                 <li className="hover:text-orange-600 transition-colors cursor-pointer">NDA Request</li>
//               </ul>
//             </div>

//             {/* Column 4: PRIMARY FOCUS - Contact, Email & Address */}
//             <div className="space-y-6 md:pl-8 md:border-l border-slate-100">
//               <div className="space-y-2">
//                 <h4 className="text-orange-600 font-bold uppercase tracking-widest">Get in Touch</h4>
//                 <div className="space-y-1">
//                   <a
//                     href="tel:+918814884014"
//                     className="block text-xl font-bold text-slate-900 hover:text-orange-600 transition-colors tracking-tight"
//                   >
//                     +91 88148 84014
//                   </a>
//                   <a
//                     href="mailto:info@karvyn3d.com"
//                     className="block text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
//                   >
//                     info@karvyn3d.com
//                   </a>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Location</h4>
//                 <p className="text-slate-600 leading-relaxed font-medium">
//                   1st floor, shop no. 102/3, <br />
//                   Jacub Pura, Gurugram, <br />
//                   Haryana - 122001
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export const dynamic = 'force-dynamic';

export default function StandbyPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white overflow-hidden px-6">
      {/* Subtle Light Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full" />

      <div className="relative z-10 text-center max-w-2xl">
        {/* Animated Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <div className="relative w-24 h-24 p-4 bg-white border border-slate-200 shadow-sm rounded-2xl">
            <Image
              src="/logo.svg"
              alt="Karvyn3D"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 font-poppins">
            KARVYN<span className="text-orange-600">3D</span>
          </h1>
        </motion.div>

        {/* Message Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50/50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
            </span>
            Standby Mode
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
            We are working on something <br className="hidden md:block" />
            
          </h2>

          <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">
            Our next-gen manufacturing center is currently under maintenance as
            we refine our product lineup. We&apos;ll be back online shortly.
          </p>
        </motion.div>

        {/* Contact/Social Trigger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-12 border-t border-slate-100"
        >
          <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">
            Specialized Manufacturer <br />
            <a
              href="mailto:contact@karvyn3d.com"
              className="text-orange-600 hover:text-orange-500 transition-colors font-bold"
            >
              info@karvyn3d.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay (Light Version) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </main>
  );
}
