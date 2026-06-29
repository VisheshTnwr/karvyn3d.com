"use client";
import { motion, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Updated to reflect actual research instrument assets
const carouselImages = [
  {
    src: "/images/BAS/bas4.jpg",
    label: "B.A.S: Behavioural Assessment System"
  },
  {
    src: "/images/rat-restraint/rat-restraint6.png", 
    label: "MRI Rat Restrainer • Unsedated Neuroimaging"
  },
  {
    src: "/images/Falcon-Tube/falcon-tube5.jpg",
    label: "Falcon Tube Holder"
  },
  {
    src: "/images/joystick/joystick5.jpg",
    label: "MRI Task Joystick Holder"
  },
  {
    src: "/images/Beam-Walk/beam-walk4.png",
    label: "Beam Walk: Behavioural Assessment Test"
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
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Mouse position state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth springs for the movement
  const springX = useSpring(0, { stiffness: 70, damping: 30 });
  const springY = useSpring(0, { stiffness: 70, damping: 30 });

  useEffect(() => {
    springX.set(mousePos.x);
    springY.set(mousePos.y);
  }, [mousePos, springX, springY]);

  // Transform springs into pixel movement - Increased range for more visibility
  const gridX = useTransform(springX, [-1, 1], [-60, 60]);
  const gridY = useTransform(springY, [-1, 1], [-60, 60]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };


  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const nextIdx = (currentIndex + 1) % carouselImages.length;
      scrollToSlide(nextIdx);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Animated Technical Grid Background */}
      <motion.div 
        className="absolute inset-[-100px] opacity-[0.25] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          x: gridX,
          y: gridY
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: New Product-Focused Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-2xl"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-200 bg-slate-50 text-slate-900 tech-label mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"/>
            Product Design & Development
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.05] tracking-tight"
          >
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                className="block"
              >
                From first sketch to
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
                className="block text-orange-600"
              >
                finished product
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
                className="block text-orange-600"
              >
                end to end.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-700 mb-10 max-w-xl leading-relaxed font-medium"
          >
            Karvyn 3D is a product design and development firm. We take complex hardware problems — across industrial, research, and emerging technology sectors — and engineer them into physical products through precision CAD, electronics, and advanced manufacturing.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton>
              <a href="#problem" className="px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-orange-600 transition-colors text-center shadow-lg block">
                The Problem We Solve
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#instruments" className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold text-sm uppercase tracking-wider rounded-lg hover:border-slate-900 hover:text-slate-900 transition-colors text-center block">
                See Our Instruments
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.8 }}
             className="mt-12 border-t border-slate-100 pt-8"
          >
            <p className="text-slate-500 tech-label mb-4">Supporting Research In</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-700 font-bold text-sm">
               <span>Neuroimaging Labs</span>
               <span>Behavioural Neuroscience</span>
               <span>Avian Research</span>
               <span>University Facilities</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Carousel Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative block h-[350px] sm:h-[480px] lg:h-[600px] w-full bg-slate-100 rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden group/carousel"
        >
          {/* Programmatic Scroll Container (hidden overflow prevents manual scrolling) */}
          <div
            ref={scrollContainerRef}
            className="w-full h-full flex overflow-x-hidden scroll-smooth"
          >
            {carouselImages.map((image, idx) => (
              <div
                key={idx}
                className="w-full h-full min-w-full relative snap-start snap-always"
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className={image.src.includes('beam-walk') ? "object-contain p-8" : "object-cover"}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={idx <= 1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={() => {
              const prevIdx = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
              scrollToSlide(prevIdx);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-orange-600 hover:text-white z-20 text-slate-800 cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => {
              const nextIdx = (currentIndex + 1) % carouselImages.length;
              scrollToSlide(nextIdx);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-orange-600 hover:text-white z-20 text-slate-800 cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
           
          {/* Active slide label */}
          <div className="absolute bottom-6 left-6 sm:left-8 z-20 pointer-events-none">
             <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm py-2 px-4 rounded-full border border-slate-200 shadow-sm">
               <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse"></div>
               <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600">
                 {carouselImages[currentIndex].label}
               </span>
             </div>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 right-6 sm:right-8 flex gap-2 z-20">
            {carouselImages.map((_, i) => (
              <button 
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex ? 'w-8 bg-orange-600' : 'w-2.5 bg-white/60 hover:bg-white/90'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
