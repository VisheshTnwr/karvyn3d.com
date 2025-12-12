"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { isSubmitting, isSubmitSuccessful } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // We will connect this to an email service later
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading
  };

  return (
    <section id="contact" className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
      {/* Aesthetic Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to build <br/><span className="text-blue-400">something great?</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-md">
            Upload your designs or describe your needs. Our engineers usually respond with a detailed quotation within **4 working hours**.
          </p>
          
          <ul className="space-y-6">
            {["NDA Protected", "Material Consultation", "Global Shipping"].map((item) => (
              <li key={item} className="flex items-center gap-4 text-slate-300 font-medium">
                <CheckCircle2 className="text-blue-400 w-6 h-6" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl"
        >
          {isSubmitSuccessful ? (
            <div className="py-20 text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
              <p className="text-slate-500">Check your inbox for a confirmation email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                  <input {...register("name")} className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Work Email</label>
                  <input {...register("email")} type="email" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600" placeholder="john@company.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Service Category</label>
                <select {...register("service")} className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600">
                  <option>Small Scale Manufacturing</option>
                  <option>Lab Equipment Design</option>
                  <option>Corporate Gifting</option>
                  <option>Research Prototyping</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Project Brief</label>
                <textarea {...register("message")} className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 min-h-[120px]" placeholder="Tell us about dimensions, quantity, and material preferences..." required />
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Get My Free Quote"}
                <Send size={20} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}