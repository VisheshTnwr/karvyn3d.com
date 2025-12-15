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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-white/90 backdrop-blur-md py-4 border-slate-200 shadow-sm" : "bg-transparent py-6 border-transparent"}`}>
      <nav className="container mx-auto max-w-7xl px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-bold tracking-tight text-slate-900">
          KARVYN<span className="text-accent-readable">3D</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link href="#solutions" className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors">Solutions</Link>
          <Link href="#about" className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors">Why Us</Link>
          <Link href="#process" className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors">Workflow</Link>
          <Link href="#contact" className="px-6 py-2.5 text-sm bg-slate-900 text-white font-bold rounded-lg hover:bg-accent hover:text-white transition-all shadow-md">
            Request Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}