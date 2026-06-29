"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Very Subtle Breathing Orange Gradient */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[5%] left-[5%] w-[70%] h-[70%] bg-orange-200/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [20, -20, 20],
          y: [10, -10, 10],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[5%] right-[5%] w-[60%] h-[60%] bg-orange-100/10 blur-[120px] rounded-full"
      />
    </div>
  );
}
