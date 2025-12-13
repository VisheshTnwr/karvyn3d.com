// components/ServiceContent.tsx

"use client"; // MARKED AS A CLIENT COMPONENT
import { motion } from 'framer-motion';
import Image from "next/image";
import { SERVICES } from "@/constants/services";

// Define motion variants for services
const serviceContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const serviceItem = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function ServiceContent() {
  return (
    <>
      {/* Title block motion */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-2xl mb-20"
      >
        <h2 className="text-4xl font-heading text-white mb-6 uppercase tracking-tight">
          Our Core <span className="text-accent">Capabilities</span>
        </h2>
        <p className="text-lg text-slate-400">
          Tailored 3D production solutions designed for small-scale projects, 
          research needs, and unique corporate branding.
        </p>
      </motion.div>

      {/* Service Cards Container */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={serviceContainer}
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {SERVICES.map((service, index) => (
          <motion.div 
            key={index} 
            variants={serviceItem}
          >
            {/* Image and content wrapper */}
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group bg-slate-900/40 border border-white/5 rounded-[32px] hover:border-accent/50 transition-all duration-500 overflow-hidden shadow-xl"
            >
              {/* Service Image (New Element) */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-8">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-heading text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                  {service.description}
                </p>
                <a href="#contact" className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all text-sm uppercase tracking-widest">
                  Inquire Now <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}