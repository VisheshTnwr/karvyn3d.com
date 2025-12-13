import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Process from "@/sections/Process";
import Contact from "@/sections/Contact";
import MaterialGuide from "@/sections/MaterialGuide";
import { SERVICES } from "@/constants/services";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-accent/30">
      <Navbar />
      <Hero />
      
      <About />
      
      {/* SERVICES SECTION */}
      <section id="services" className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl font-heading text-white mb-6 uppercase tracking-tight">
              Our Core <span className="text-accent">Capabilities</span>
            </h2>
            <p className="text-lg text-slate-400">
              Tailored 3D production solutions designed for small-scale projects, 
              research needs, and unique corporate branding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={index} 
                className="group p-10 bg-slate-900/40 border border-white/5 rounded-[32px] hover:border-accent/50 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-black transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-heading text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                  {service.description}
                </p>
                <a href="#contact" className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all text-sm uppercase tracking-widest">
                  Inquire Now <span className="text-lg">→</span>
                </a>
              </div>
            ))}
          </div>
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