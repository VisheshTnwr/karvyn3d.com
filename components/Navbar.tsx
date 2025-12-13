"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-gray-950/80 backdrop-blur-md py-4 border-white/10 shadow-lg" : "bg-transparent py-6 border-transparent"}`}>
      <nav className="container mx-auto max-w-7xl px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading tracking-tighter text-white">
          karvyn<span className="text-accent">3d</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-gray-400 hover:text-accent transition-colors font-medium text-[10px] uppercase tracking-[0.2em]">About</Link>
          <Link href="#services" className="text-gray-400 hover:text-accent transition-colors font-medium text-[10px] uppercase tracking-[0.2em]">Services</Link>
          {/* NEW: Materials Link */}
          <Link href="#materials" className="text-gray-400 hover:text-accent transition-colors font-medium text-[10px] uppercase tracking-[0.2em]">Materials</Link>
          <Link href="#process" className="text-gray-400 hover:text-accent transition-colors font-medium text-[10px] uppercase tracking-[0.2em]">Process</Link>
          <Link href="#contact" className="px-6 py-2.5 bg-accent text-black font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_15px_rgba(163,230,53,0.4)]">
            Start Batch
          </Link>
        </div>
      </nav>
      {/* Mobile menu logic intentionally omitted for brevity in final code */}
    </header>
  );
}