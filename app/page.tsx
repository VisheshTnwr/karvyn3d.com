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

      <footer className="py-12 border-t border-slate-200 bg-white text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm text-slate-500">
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest mb-4">Karvyn3D</h4>
            <p>Industrial Additive Manufacturing Partner. <br/>Precision FDM Solutions.</p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>Bridge Production</li>
              <li>Labware Engineering</li>
              <li>Corporate Artifacts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>NDA Request</li>
            </ul>
          </div>
          <div>
            <p className="opacity-70">© {new Date().getFullYear()} Karvyn3D.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}