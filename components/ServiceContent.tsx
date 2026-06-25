"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SERVICES } from "@/constants/services";
import { useState, useEffect } from "react";
import {
  X,
  ArrowRight,
  ShieldCheck,
  Microscope,
  FlaskConical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ServiceContent() {
  const [selectedService, setSelectedService] = useState<
    (typeof SERVICES)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0); // Reset index when opening new popup
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedService?.gallery) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedService.gallery.length,
      );
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedService?.gallery) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedService.gallery.length) %
          selectedService.gallery.length,
      );
    }
  };

  return (
    <section id="instruments" className="py-24 relative overflow-hidden">
      <div className="mb-24 text-center lg:text-left max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-12 bg-orange-600" />
          <span className="text-orange-600 tech-label">
            Product Catalogue
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight max-w-3xl leading-[1.1]">
          Designed from first principles. <br />
          Delivered as finished products.
        </h2>

        <p className="text-slate-800 text-lg max-w-2xl lg:mx-0 leading-relaxed font-semibold">
          Each instrument begins as a research problem. We engineer the
          solution, test it alongside active researchers, and deliver a
          lab-ready product.
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:gap-16 w-full px-4 max-w-7xl mx-auto">
        {SERVICES.map((service, index) => {
          if (service.title.toLowerCase().includes("corporate")) return null;
          const isFlipped = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${isFlipped ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-white/40 backdrop-blur-md`}
            >
              <div
                className="flex-1 p-8 lg:p-12 flex flex-col justify-between relative"
                style={{
                  backgroundImage:
                    "radial-gradient(#e2e8f0 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/80 rounded-xl shadow-sm text-orange-600 border border-slate-100">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {service.subtitle && (
                    <p className="text-xs font-black uppercase tracking-wider text-orange-600 mb-4 font-heading">
                      {service.subtitle}
                    </p>
                  )}

                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/80 text-slate-600 rounded-full tech-label border border-slate-100">
                      In-House Design
                    </span>
                    <span className="px-3 py-1 bg-orange-50/80 text-orange-600 rounded-full tech-label border border-orange-100">
                      Lab Validated
                    </span>
                  </div>

                  {service.problem && (
                    <div className="bg-slate-50/80 border-l-2 border-orange-500 p-4 mb-6 rounded-r-2xl">
                      <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">
                        The Problem
                      </span>
                      <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                        {service.problem}
                      </p>
                    </div>
                  )}

                  <p className="text-lg text-slate-800 font-semibold leading-relaxed mb-6">
                    {service.description.length > 200
                      ? `${service.description.slice(0, 200)}...`
                      : service.description}
                    {service.description.length > 200 && (
                      <button
                        onClick={() => setSelectedService(service)}
                        className="text-orange-600 font-bold ml-2 hover:underline cursor-pointer inline-flex items-center"
                      >
                        Read More
                      </button>
                    )}
                  </p>

                  {service.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] font-extrabold uppercase tracking-wider text-slate-600 bg-white border border-slate-200/50 px-2.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative z-10 pt-6 border-t border-slate-200/50">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="group/btn relative inline-flex items-center gap-4 px-8 py-4 bg-slate-900 rounded-xl text-white font-bold uppercase tracking-widest text-[10px] transition-all duration-300 hover:bg-orange-600 shadow-lg active:scale-95"
                  >
                    View Specifications
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </div>

              <div className="flex-1 relative min-h-[400px] overflow-hidden bg-slate-100/50">
                <Image
                  onClick={() => setSelectedService(service)}
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className={`${
                    service.imageFit === "contain"
                      ? "object-contain p-8 md:p-12"
                      : "object-cover"
                  } transition-transform duration-700 group-hover:scale-105 cursor-pointer`}
                />
                {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-[10px] font-black uppercase text-slate-900">
                  K3D Reference: {index + 101}
                </div> */}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="relative w-full max-w-7xl max-h-[95vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] p-2 bg-slate-100 rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-10 xl:p-12">
                <div className="flex flex-col xl:flex-row gap-10 xl:gap-16">
                  {/* Left Column: Slideshow */}
                  <div className="w-full xl:flex-[1.5] space-y-6">
                    <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group/slider">
                      <Image
                        src={
                          selectedService.gallery?.[currentImageIndex] ||
                          selectedService.imageUrl
                        }
                        alt={`${selectedService.title} view ${currentImageIndex + 1}`}
                        fill
                        className="object-contain transition-opacity duration-300"
                      />

                      {selectedService.gallery &&
                        selectedService.gallery.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-orange-600 hover:text-white"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-orange-600 hover:text-white"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </>
                        )}
                    </div>

                    {/* Thumbnail Strip */}
                    {selectedService.gallery && (
                      <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                        {selectedService.gallery.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`relative w-24 md:w-32 aspect-square flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all bg-slate-50 ${currentImageIndex === i ? "border-orange-600 scale-95" : "border-transparent opacity-70 hover:opacity-100"}`}
                          >
                            <Image
                              src={img}
                              alt="thumbnail"
                              fill
                              className="object-contain p-1"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Information */}
                  <div className="w-full xl:flex-1 space-y-8">
                    <div>
                      {selectedService.subtitle && (
                        <p className="text-xs font-black uppercase tracking-wider text-orange-600 mb-2 font-heading">
                          {selectedService.subtitle}
                        </p>
                      )}
                      <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-slate-900 tracking-tighter mb-4">
                        {selectedService.title}
                      </h2>
                      <p className="text-base md:text-lg text-slate-700 leading-relaxed font-semibold mb-6">
                        {selectedService.description}
                      </p>

                      {selectedService.problem && (
                        <div className="bg-slate-50 border-l-2 border-orange-500 p-4 rounded-r-2xl">
                          <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">
                            The Challenge / Requirement
                          </span>
                          <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                            {selectedService.problem}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <ShieldCheck
                          className="text-orange-600 mb-2"
                          size={20}
                        />
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Safety Class
                        </p>
                        <p className="text-sm font-bold text-slate-900">
                          Lab-Safe / MRI-Grade
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <Microscope
                          className="text-orange-600 mb-2"
                          size={20}
                        />
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Precision
                        </p>
                        <p className="text-sm font-bold text-slate-900">
                          ±0.05mm Tolerance
                        </p>
                      </div>
                    </div>

                    {selectedService.tags && (
                      <div className="pt-6 border-t border-slate-100">
                        <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px] mb-3">
                          Project Capabilities
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedService.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 bg-slate-50 border border-slate-200/50 px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-6 border-t border-slate-100">
                      <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                        <FlaskConical size={14} className="text-orange-600" />
                        Application Context
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Validated through iterative stress-testing and
                        parametric analysis. Optimized for high-field imaging
                        environments and chemical resistance.
                      </p>
                    </div>

                    <a
                      href="#contact"
                      onClick={() => setSelectedService(null)}
                      className="block w-full text-center bg-slate-900 text-white py-5 rounded-xl font-bold text-sm hover:bg-orange-600 transition-colors shadow-lg"
                    >
                      Inquire About This Instrument
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
