// sections/Hero.tsx

"use client";
import { motion } from "framer-motion";

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
    transition: { duration: 0.6 }, // Keep duration; omit explicit ease to satisfy typing
  },
};

export default function Hero() {
  return (
    <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-gray-950">
      {/* Background Radial Glow - Using your Lime-400 Accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full bg-accent/10 blur-[120px] rounded-full -z-10"
        style={{ height: 600 }}
      />

      <div className="max-w-7xl mx-auto text-center">
        {/* Main Staggered Content Container */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Child 1: Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-heading font-black uppercase tracking-widest mb-8 transition-colors"
          >
            3D Production Studio
          </motion.span>

          {/* Child 2: Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-heading tracking-tight text-white mb-8 leading-[1.05] transition-colors"
          >
            Digital Blueprints. <br />
            <span className="text-accent">Physical Perfection.</span>
          </motion.h1>

          {/* Child 3: Subheading/Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed transition-colors"
          >
            We bridge the gap between digital vision and physical utility.
            High-precision 3D production for labs, startups, and innovators who
            value{" "}
            <span className="text-white font-bold italic">
              aesthetic utility.
            </span>
          </motion.p>

          {/* Child 4: Primary & Secondary Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-accent text-black px-10 py-4 rounded-2xl font-heading font-black text-lg shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_40px_rgba(163,230,53,0.5)] transition-all transform hover:scale-105"
            >
              Start Batching
            </a>
            <a
              href="#services"
              className="px-10 py-4 rounded-2xl font-heading font-black text-lg border border-gray-800 text-white hover:bg-gray-900 transition transform hover:scale-105"
            >
              Capabilities
            </a>
          </motion.div>
        </motion.div>

        {/* Specialized Areas Bar - Animated to follow the main content load */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32 pt-16 border-t border-white/5"
        >
          <p className="text-[10px] font-heading font-black text-slate-500 uppercase tracking-[0.3em] mb-10 transition-colors">
            Fabricating Solutions for
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70">
            {[
              "R&D Labs",
              "Tech Startups",
              "Educational Projects",
              "Corporate Gifting",
            ].map((industry) => (
              <span
                key={industry}
                className="text-sm font-heading font-bold text-slate-300 border border-slate-800 px-4 py-2 rounded-lg transition-colors hover:border-accent hover:text-accent"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
