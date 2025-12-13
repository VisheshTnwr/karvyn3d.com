"use client";
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const { register, handleSubmit, formState: { isSubmitting, isSubmitSuccessful } } = useForm();

  return (
    <section id="contact" className="py-32 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-heading text-white mb-8 leading-tight text-center lg:text-left">Let&apos;s Build <br /><span className="text-accent">The Future.</span></h2>
          <p className="text-gray-400 text-lg mb-12 text-center lg:text-left">
            Skip the gatekeepers. Get direct engineering support for your small-batch needs. Our team responds with detailed quotations within <span className="text-white font-bold">4 working hours.</span>
          </p>
          <div className="space-y-4">
            {["NDA Protected Conversations", "End-to-End Design Support", "Express Global Shipping"].map((t) => (
              <div key={t} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={20} className="text-accent" /> {t}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl">
          {isSubmitSuccessful ? (
            <div className="text-center py-12">
              <CheckCircle2 size={64} className="text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-heading text-white mb-2">Manifested.</h3>
              <p className="text-gray-400">We will reach out to audit your project soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(async (d) => { console.log(d); await new Promise(r => setTimeout(r, 1500)); })} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input {...register("name")} placeholder="Your Name" required className="w-full bg-gray-800 border-none rounded-2xl p-4 text-white focus:ring-2 focus:ring-accent outline-none" />
                <input {...register("email")} type="email" placeholder="Work Email" required className="w-full bg-gray-800 border-none rounded-2xl p-4 text-white focus:ring-2 focus:ring-accent outline-none" />
              </div>
              <select {...register("service")} className="w-full bg-gray-800 border-none rounded-2xl p-4 text-white focus:ring-2 focus:ring-accent outline-none">
                <option>Small Batch Production</option>
                <option>Labware Engineering</option>
                <option>Corporate Branding</option>
                <option>R&D Implementation</option>
                <option>Personalised Gifting</option>
              </select>
              <textarea {...register("message")} placeholder="Project Scope (Dimensions, material, quantity...)" required className="w-full bg-gray-800 border-none rounded-2xl p-4 text-white h-32 focus:ring-2 focus:ring-accent outline-none" />
              <button disabled={isSubmitting} className="w-full bg-accent text-black py-5 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:bg-accent/90 transition flex items-center justify-center gap-3">
                {isSubmitting ? "Syncing..." : "Get My Free Quote"} <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}