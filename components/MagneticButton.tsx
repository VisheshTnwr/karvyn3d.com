"use client";
import { motion, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Distance from center
    const xDist = clientX - (left + width / 2);
    const yDist = clientY - (top + height / 2);
    
    // Multiplier is much lower (0.1) and we cap the movement at 12px to prevent overlap
    const moveX = Math.max(-12, Math.min(12, xDist * 0.1));
    const moveY = Math.max(-12, Math.min(12, yDist * 0.1));
    
    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const springConfig = { damping: 15, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position, x, y]);

  return (
    <div 
      className="relative" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={ref}
        style={{ x, y }}
      >
        {children}
      </motion.div>
    </div>
  );
}
