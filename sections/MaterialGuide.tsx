// sections/MaterialGuide.tsx
"use client";
import { Check } from "lucide-react";

export default function MaterialGuide() {
  return (
    <section id="materials" className="py-32 px-6 bg-[#0E121E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">Material Science</span>
            <h2 className="text-4xl font-heading text-white mb-6">Application-Specific Polymers</h2>
            <p className="text-gray-400 text-lg mb-8">
              We don&apos;t just print plastic; we select the right engineering material for your thermal, mechanical, and chemical requirements.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
               {["High-Temp Resistance", "Impact Modified", "ESD Safe", "Chemical Resistant"].map(feat => (
                 <div key={feat} className="flex items-center gap-3 text-sm text-white">
                   <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent"><Check size={12}/></div>
                   {feat}
                 </div>
               ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold text-white">Engineering Grade</h3>
                <span className="text-xs text-accent border border-accent/30 px-2 py-1 rounded">Production</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">PETG, ASA, ABS</p>
              <p className="text-sm text-gray-300">
                Functional parts requiring UV resistance, outdoor durability, or moderate heat deflection. Ideal for housings and mechanical brackets.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold text-white">Rapid Prototyping</h3>
                <span className="text-xs text-gray-400 border border-gray-700 px-2 py-1 rounded">Validation</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">PLA+, Matte PLA</p>
              <p className="text-sm text-gray-300">
                Cost-effective, high-stiffness materials perfect for form checks, fit testing, and visual models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}