"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md border-b py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-blue-600">
          KARVYN<span className="text-slate-900">3D</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#process" className="hover:text-blue-600 transition">Our Process</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
        </div>

        <a href="#contact" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition shadow-lg shadow-blue-900/10">
          Get Quote
        </a>
      </div>
    </nav>
  );
}