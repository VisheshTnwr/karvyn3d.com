import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Process from "@/sections/Process";
import Contact from "@/sections/Contact"; // Import the new section
import { SERVICES } from "@/constants/services";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-100 selection:text-blue-900 bg-white">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-slate-50/50">
        {/* ... (keep your existing services code) ... */}
      </section>

      <Process />

      <Contact /> {/* The Lead Generator */}

      {/* Simple Footer */}
      <footer className="py-12 border-t text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Karvyn3D Manufacturing. All rights reserved.
      </footer>
    </main>
  );
}