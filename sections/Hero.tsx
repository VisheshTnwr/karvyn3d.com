"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Image array using the assets available in your public folder
const carouselImages = [
  {
    src: "/images/drone.jpg",
    label: "Professional Drone Components • Carbon Fiber Nylon"
  },
  {
    src: "/images/PCB Housing.jpg",
    label: "PCB Housing Prototype • Internal Fitment Check"
  },
  {
    src: "/images/Lab Equipment.png",
    label: "Laboratory Instrumentation • Chemical Resistant"
  },
  {
    src: "/images/Corporate Gifting.png",
    label: "Custom Corporate Solutions • Short-Run Batch"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 bg-white overflow-hidden">
      {/* Subtle Technical Grid Background - Blueprint Style */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-200 bg-slate-50 text-slate-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"/>
            Agile Manufacturing Partner
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-heading text-slate-900 mb-6 leading-[1.1] tracking-tight"
          >
            Production Quality. <br />
            <span className="text-accent">Zero Tooling.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium"
          >
            We bridge the gap between prototyping and mass production. 
            Deploy your product <strong>weeks ahead of schedule</strong> with our industrial bridge manufacturing and design validation services.
          </motion.p>

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

        {/* Right Column: Image Carousel Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block h-[600px] w-full bg-slate-100 rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={carouselImages[currentIndex].src}
                alt="Manufacturing Gallery"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle gradient overlay to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
           
          {/* Dynamic Overlay Label */}
          <div className="absolute bottom-6 left-8 z-20">
             <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm py-2 px-4 rounded-full border border-slate-200 shadow-sm">
               <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
               <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600">
                 {carouselImages[currentIndex].label}
               </span>
             </div>
          </div>

          {/* Carousel Progress Indicators */}
          <div className="absolute bottom-8 right-8 flex gap-2 z-20">
            {carouselImages.map((_, i) => (
              <div 
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/50'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}