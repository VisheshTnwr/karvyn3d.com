// visheshtnwr/karvyn3d-intro/karvyn3d-intro-41ef54dda356c1bc3e2c43bba9e8a441646cbe10/app/page.tsx

import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Process from "@/sections/Process";
import Contact from "@/sections/Contact";
import MaterialGuide from "@/sections/MaterialGuide";
import ServiceContent from "@/components/ServiceContent"; // ADDED IMPORT
// The following imports are no longer needed here as they are in ServiceContent.tsx:
// import { SERVICES } from "@/constants/services";
// import { motion } from 'framer-motion';
// import Image from "next/image"; 


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-accent/30">
      <Navbar />
      <Hero />
      
      <About />
      
      {/* SERVICES SECTION */}
      <section id="services" className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          {/* Replaced animated Service logic with Client Component */}
          <ServiceContent />
        </div>
      </section>

      <MaterialGuide />
      <Process />
      <Contact />

      {/* NEW: Detailed Footer with Important Links */}
      <footer className="py-20 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-white/5 pb-10">
            
            {/* Column 1: Logo and Pitch */}
            <div className="col-span-2 md:col-span-2">
              <div className="text-3xl font-heading text-white mb-4 transition-colors">
                KARVYN<span className="text-accent">3D</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm">
                Your specialized 3D production studio. From digital blueprints to physical perfection in small-batch manufacturing.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-heading font-black uppercase tracking-widest text-accent mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Studio</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Capabilities</a></li>
                <li><a href="#materials" className="text-slate-400 hover:text-white transition-colors">Materials Guide</a></li>
              </ul>
            </div>

            {/* Column 3: Project Flow */}
            <div>
              <h4 className="text-sm font-heading font-black uppercase tracking-widest text-accent mb-4">Project Flow</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#process" className="text-slate-400 hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Get a Quote</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Column 4: Connect */}
            <div>
              <h4 className="text-sm font-heading font-black uppercase tracking-widest text-accent mb-4">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright and Bottom Info */}
          <div className="pt-8 text-center md:text-left">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Karvyn3D. Small-Batch Manufacturing Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}