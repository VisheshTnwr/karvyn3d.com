"use client";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding px-6">
      <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-xl">
        {/* Keeping the existing layout structure to preserve the "theme" */}
        <div className="grid lg:grid-cols-3 gap-16 relative z-10 items-center">
          <div className="lg:col-span-2">
            <span className="text-orange-600 text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
              Work With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
              Have a hardware problem that needs engineering?
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              Tell us what you&apos;re trying to build — the application, the
              constraints, and where you are in the process. We&apos;ll respond
              with a direct assessment of what we can do.
            </p>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-4">
            <a
              href="mailto:info@karvyn3d.com"
              className="w-full text-center bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              Email Us <Mail size={16} />
            </a>

            <a
              href="#instruments"
              className="w-full text-center border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:border-slate-900 hover:text-slate-900 transition-all"
            >
              View Instruments
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
