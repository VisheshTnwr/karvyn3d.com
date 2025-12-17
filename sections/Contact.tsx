"use client";
import { useForm } from 'react-hook-form';
import { Lock, FileText, Send, CheckCircle2 } from 'lucide-react';
import { submitToGoogleSheets } from '@/app/actions/submit-form';
import { useState } from 'react';

type ContactFormData = {
  name: string;
  email: string;
  service: string;
  volume: string;
  message: string;
};

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { isSubmitting } } =
    useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const result = await submitToGoogleSheets(data);

    if (result.success) {
      setIsSuccess(true);
      reset(); // Clear the form
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      alert("Submission failed. Please try again or contact us directly.");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-xl">

        {/* Decorative background element */}
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-slate-900 pointer-events-none">
          <FileText size={300} strokeWidth={0.5} />
        </div>

        <div className="grid lg:grid-cols-3 gap-16 relative z-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-heading text-slate-900 mb-6">Start Your Project</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Skip the gatekeepers. Get direct engineering support for your small-batch needs.
            </p>
            <div className="space-y-4 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Response in 4 business hours
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                NDA Available on request
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Secure File Handling
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-500">
                  Our engineering team will review your specs and reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Work Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Service Interest
                    </label>
                    <select
                      {...register("service")}
                      className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                    >
                      <option>Bridge Manufacturing</option>
                      <option>Functional Prototyping</option>
                      <option>PCB Housing / Electronics</option>
                      <option>Corporate Branding / Kits</option>
                      <option>Labware Engineering</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Estimated Volume
                    </label>
                    <select
                      {...register("volume")}
                      className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                    >
                      <option>One-off Prototype</option>
                      <option>Low Volume (10 - 100)</option>
                      <option>Mid Volume (100 - 1000)</option>
                      <option>High Volume (1000+)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Project Specifications
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Material preference, tolerances, application context..."
                    className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 mt-8">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Lock size={14} />
                    <span>Secure 256-bit SSL Data Transfer</span>
                  </div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-accent hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Processing..." : "Submit Request"} <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
