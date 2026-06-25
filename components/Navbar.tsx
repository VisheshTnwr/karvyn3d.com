"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: "#problem", label: "What we do" },
    { href: "#instruments", label: "Instruments" },
    { href: "#sectors", label: "Sectors" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#work", label: "How We Work" },
  ];

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
        <Link href="/" className="flex items-center gap-4 group z-50">
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

          <span
            className="text-3xl font-heading font-bold tracking-tight text-slate-900 -mt-[6px] -ml-[25px]"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            KARVYN<span className="text-orange-600">3D</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-orange-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-6 py-2.5 text-[10px] bg-slate-900 text-white font-black uppercase tracking-widest rounded-lg hover:bg-orange-600 hover:shadow-lg transition-all"
          >
            Work With Us
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden z-50 p-2 text-slate-900 hover:text-orange-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-40 flex flex-col p-8 pt-32"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-2xl font-bold uppercase tracking-widest text-slate-900 hover:text-orange-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="w-full py-4 bg-slate-900 text-white text-center font-black uppercase tracking-widest rounded-xl hover:bg-orange-600 transition-colors shadow-lg"
                >
                  Work With Us
                </Link>
              </div>
              
              <div className="mt-auto border-t border-slate-100 pt-8">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Get In Touch</p>
                <a href="mailto:info@karvyn3d.com" className="text-lg font-medium text-slate-900">info@karvyn3d.com</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
