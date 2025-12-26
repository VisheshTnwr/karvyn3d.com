"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import ServiceContent from "@/components/ServiceContent";
import Process from "@/sections/Process";
import Contact from "@/sections/Contact";
import About from "@/sections/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <Hero />
      
      {/* Capability Section */}
      <section id="solutions" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <ServiceContent />
        </div>
      </section>

      {/* Trust/About Section */}
      <About /> 

      <Process />
      
      <Contact />

      <footer className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-slate-500">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest">Karvyn3D</h4>
              <p className="leading-relaxed">
                Industrial Additive Manufacturing Partner. <br/>
                Precision FDM Solutions.
              </p>
              <p className="pt-4 opacity-50 text-xs">
                © {new Date().getFullYear()} Karvyn3D.
              </p>
            </div>

            {/* Column 2: Solutions */}
            <div className="space-y-4">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest">Solutions</h4>
              <ul className="space-y-3">
                <li className="hover:text-orange-600 transition-colors cursor-pointer">Bridge Production</li>
                <li className="hover:text-orange-600 transition-colors cursor-pointer">Labware Engineering</li>
                <li className="hover:text-orange-600 transition-colors cursor-pointer">Corporate Artifacts</li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="space-y-4">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest">Legal</h4>
              <ul className="space-y-3">
                <li className="hover:text-orange-600 transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-orange-600 transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-orange-600 transition-colors cursor-pointer">NDA Request</li>
              </ul>
            </div>

            {/* Column 4: PRIMARY FOCUS - Contact & Address */}
            <div className="space-y-6 md:pl-8 md:border-l border-slate-100">
              <div className="space-y-2">
                <h4 className="text-orange-600 font-bold uppercase tracking-widest">Get in Touch</h4>
                <a 
                  href="tel:+917015317181" 
                  className="block text-xl font-bold text-slate-900 hover:text-orange-600 transition-colors tracking-tight"
                >
                  Mob: +91 88148 84014
                </a>
              </div>

              <div className="space-y-2">
                <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Location</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  1st floor, shop no. 102/3, <br />
                  Jacub Pura, Gurugram, <br />
                  Haryana - 122001
                </p>
              </div>

              {/* <a 
                href="https://maps.google.com" 
                target="_blank" 
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-widest group"
              >
                View on Map 
                <span className="text-orange-500 transition-transform group-hover:translate-x-1">→</span>
              </a> */}
            </div>

          </div>
        </div>
      </footer>
    </main>
  );
}