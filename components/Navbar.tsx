"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-4 border-slate-200 shadow-sm"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <nav className="container mx-auto max-w-7xl px-6 flex justify-between items-center">
        {/* LOGO AND NAME SECTION */}
        <Link href="/" className="flex items-center gap-4 group">
          {/* The Icon Container */}
          <div className="relative w-16 h-16 flex-shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo.svg"
              alt="Karvyn3D Logo"
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>

          {/* The Text Span with centering and 5px upward offset */}
          <span
            className="text-3xl font-heading font-bold tracking-tight text-slate-900 -mt-[6px] -ml-[25px]"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            KARVYN<span className="text-orange-600">3D</span>
          </span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="#solutions"
            className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="#about"
            className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors"
          >
            Why Us
          </Link>
          <Link
            href="#process"
            className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors"
          >
            Workflow
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2.5 text-sm bg-slate-900 text-white font-bold rounded-lg hover:bg-orange-600 hover:text-white transition-all shadow-md"
          >
            Contact Us!
          </Link>
        </div>
      </nav>
    </header>
  );
}
