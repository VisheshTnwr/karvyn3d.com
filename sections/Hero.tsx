// sections/Hero.tsx
"use client";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

// DYNAMIC IMPORT FIX: Correctly imports the stable SinglePcbScene component
const PcbHousingScene = dynamic(() => import('@/components/SinglePcbScene'), { 
  ssr: false,
  loading: () => (
    // Light Theme loading style
    <div className="flex items-center justify-center w-full h-full bg-slate-50 text-slate-300">
      <span className="animate-pulse font-heading font-bold">LOADING PRECISION HOUSING...</span>
    </div>
  )
});

// 1. Define the container variant with stagger delay
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, // Delay before the first child starts animating (0.2s initial pause)
      staggerChildren: 0.15, // Delay between each successive child animation
    },
  },
};

// 2. Define the individual item variant (slide up and fade in)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    // EXACT STYLE REQUESTED: Light theme background and min-height setting
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 bg-white overflow-hidden">
      {/* Subtle Technical Grid Background - Blueprint Style */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content (Staggered Animation) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Child 1: Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-200 bg-slate-50 text-slate-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"/>
            Agile Manufacturing Partner
          </motion.span>

          {/* Child 2: Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-heading text-slate-900 mb-6 leading-[1.1] tracking-tight"
          >
            Production Quality. <br />
            <span className="text-accent">Zero Tooling.</span>
          </motion.h1>

          {/* Child 3: Subheading/Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium"
          >
            We bridge the gap between prototyping and mass production. 
            Deploy your product <strong>weeks ahead of schedule</strong> with our industrial bridge manufacturing and design validation services.
          </motion.p>

          {/* Child 4: Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="px-8 py-4 bg-accent text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-orange-700 transition-colors text-center shadow-lg shadow-orange-200">
              Start Your Batch
            </a>
            <a href="#solutions" className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold text-sm uppercase tracking-wider rounded-lg hover:border-slate-900 hover:text-slate-900 transition-colors text-center">
              Explore Capabilities
            </a>
          </motion.div>

          {/* Specialized Areas Bar - Animated to follow the main content load */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.8 }}
             className="mt-16 border-t border-slate-100 pt-8"
          >
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Trusted By Innovators In</p>
            <div className="flex flex-wrap gap-8 text-slate-500 font-semibold text-sm">
               <span>Tech Startups</span>
               <span className="text-slate-300">•</span>
               <span>Research Labs</span>
               <span className="text-slate-300">•</span>
               <span>Universities</span>
               <span className="text-slate-300">•</span>
               <span>Consumer Electronics</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block h-[600px] w-full bg-slate-50 rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden"
        >
          {/* Using the component variable name PcbHousingScene as defined above */}
           {/* <PcbHousingScene /> */}
           
           {/* Overlay Label */}
           <div className="absolute bottom-6 left-8 pointer-events-none">
             <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
               <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">PCB Housing Prototype • Internal Fitment Check</span>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}