"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import ServiceContent from "@/components/ServiceContent";
import Capabilities from "@/sections/Process";
import Contact from "@/sections/Contact";
import ResearchGap from "@/sections/ResearchGap"; // Imported the new section
import HowWeWork from "@/sections/WhoWeServe";
import Sectors from "@/sections/Sectors";
import dynamic from "next/dynamic";

const Logo3D = dynamic(() => import("@/components/Logo3D"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Section 1: The Research Gap (Replaces the old About) */}
      <ResearchGap />

      {/* Section 2: Capability / Instruments Section */}
      <section id="instruments" className="py-24 px-6 border-y border-slate-100/50">
        <div className="max-w-7xl mx-auto">
          <ServiceContent />
        </div>
      </section>

      {/* Sectors Section */}
      <Sectors />

      {/* Section 3: Capabilities */}
      <Capabilities />

      {/* Section 4: How We Work */}
      <HowWeWork />

      {/* Section 5: Contact / CTA */}
      <Contact />

      <footer className="py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-slate-500">

            {/* Column 1: Brand Info */}
            <div className="space-y-4 md:pl-10">
              <div className="w-40 h-40 -mt-10 -ml-2">
                <Logo3D />
              </div>
              
              <div className="w-40 -ml-2 text-center relative z-10 -mt-8">
                <h4 className="inline-block bg-white px-2 py-1 text-base font-bold text-slate-900 uppercase tracking-[0.2em] select-none">
                  Karvyn 3D
                </h4>
              </div>
              <p className="leading-relaxed pt-2">
                Proprietary Lab Instruments & <br/>
                Research Tools.
              </p>
              <p className="pt-4 opacity-50 text-xs">
                © {new Date().getFullYear()} Karvyn 3D.
              </p>
            </div>

            {/* Column 2: Instruments */}
            <div className="space-y-4">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest">Instruments</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#instruments" className="hover:text-orange-600 transition-colors">
                    MRI Restraints
                  </a>
                </li>
                <li>
                  <a href="#instruments" className="hover:text-orange-600 transition-colors">
                    Behavioral Rigs
                  </a>
                </li>
                <li>
                  <a href="#instruments" className="hover:text-orange-600 transition-colors">
                    Avian Cradles
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation */}
            <div className="space-y-4">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest">Links</h4>
              <ul className="space-y-3">
                <li><a href="#problem" className="hover:text-orange-600 transition-colors">What we do</a></li>
                <li><a href="#instruments" className="hover:text-orange-600 transition-colors">Instruments</a></li>
                <li><a href="#sectors" className="hover:text-orange-600 transition-colors">Sectors</a></li>
                <li><a href="#capabilities" className="hover:text-orange-600 transition-colors">Capabilities</a></li>
                <li><a href="#work" className="hover:text-orange-600 transition-colors">How We Work</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="space-y-6 md:pl-8 md:border-l border-slate-100">
              <div className="space-y-2">
                <h4 className="text-orange-600 font-bold uppercase tracking-widest">Get in Touch</h4>
                <div className="space-y-1">
                  <a
                    href="mailto:hello@karvyn3d.com"
                    className="block text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    info@karvyn3d.com
                  </a>
                  <p className="text-xs text-slate-400">Gurugram, India</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </main>
  );
}