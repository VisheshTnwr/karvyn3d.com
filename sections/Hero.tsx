export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Psychology: The 'Badge' builds instant authority */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Now accepting Q4 Manufacturing Orders
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          Industrial Grade <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">3D Production.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-12 leading-relaxed">
          We bridge the gap between digital design and physical reality for labs, 
          corporates, and engineering teams.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-blue-600/20">
            Start Your Project
          </button>
        </div>

        {/* The Trust Bar */}
        <div className="pt-12 border-t border-slate-100">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by innovators in</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {["Biotech Labs", "Robotics", "Education", "Consumer Tech", "Automotive"].map((industry) => (
              <span key={industry} className="text-xl font-bold text-slate-700">{industry}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}