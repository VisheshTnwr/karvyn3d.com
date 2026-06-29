"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Sliders, Terminal, Sparkles, HelpCircle } from "lucide-react";

type SystemState = "BOOT" | "IDLE" | "STIMULUS" | "RESPONSE_WINDOW" | "SUCCESS" | "PUNISHMENT" | "CORRECT_REJECTION" | "OMISSION";
type StimulusType = "GO" | "NOGO";

interface LogLine {
  time: string;
  type: "system" | "input" | "servo" | "state";
  text: string;
}

export default function MechatronicsSimulator() {
  const [sysState, setSysState] = useState<SystemState>("BOOT");
  const [stimType, setStimType] = useState<StimulusType>("GO");
  const [peckForce, setPeckForce] = useState(380); // in grams
  const [gateOpen, setGateOpen] = useState(false);
  const [ledColor, setLedColor] = useState<"off" | "green" | "red" | "orange">("off");
  const [consoleLogs, setConsoleLogs] = useState<LogLine[]>([]);
  const [latency, setLatency] = useState<number | null>(null);
  
  const responseStartTime = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Helper to add lines to virtual serial log
  const addLog = (text: string, type: LogLine["type"] = "system") => {
    const elapsed = ((performance.now() - responseStartTime.current) / 1000).toFixed(2);
    const timestamp = sysState === "BOOT" ? "0.00" : elapsed;
    setConsoleLogs((prev) => [...prev.slice(-20), { time: timestamp, type, text }]);
  };

  // Scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [consoleLogs]);

  // System Boot Simulator
  useEffect(() => {
    responseStartTime.current = performance.now();
    addLog("ESP32-S3 booting...", "system");
    
    const t1 = setTimeout(() => {
      addLog("Initializing FSR Sensor on Analog Pin GPIO 34...", "system");
      addLog("Initializing MG996R Servo on PWM Pin GPIO 4...", "system");
    }, 600);

    const t2 = setTimeout(() => {
      addLog("Calibration complete. Threshold set to 150g.", "system");
      setSysState("IDLE");
      setLedColor("green");
      addLog("System state: IDLE. Glowing Green. Waiting for trial trigger.", "state");
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Trigger the trial run
  const handleTriggerTrial = () => {
    if (sysState !== "IDLE") return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLatency(null);
    setSysState("STIMULUS");
    setLedColor("off");
    
    addLog(`STATE: STIMULUS. Triggering audio source: ${stimType === "GO" ? "GO_REWARD_3KHz.wav" : "NOGO_PUNISH_1KHz.wav"}`, "state");
    addLog(`LED Indicator: OFF during auditory stimulus presentation.`, "system");

    // Audio finishes playing, start response window
    timeoutRef.current = setTimeout(() => {
      setSysState("RESPONSE_WINDOW");
      setLedColor("orange");
      addLog("STATE: RESPONSE WINDOW. Listening for FSR peck input (Threshold 150g). Timeout in 5.0s", "state");
      responseStartTime.current = performance.now();

      // Set timeout for omission/correct rejection if no peck
      timeoutRef.current = setTimeout(() => {
        handleTimeout();
      }, 5000);
    }, 1500);
  };

  // Handle timeout (no peck within 5 seconds)
  const handleTimeout = () => {
    if (stimType === "GO") {
      setSysState("OMISSION");
      setLedColor("red");
      addLog("TIMEOUT REACHED: No peck registered for GO stimulus. Outcome: OMISSION.", "state");
    } else {
      setSysState("CORRECT_REJECTION");
      setLedColor("green");
      addLog("TIMEOUT REACHED: No peck registered for NO-GO stimulus. Outcome: CORRECT REJECTION.", "state");
    }

    timeoutRef.current = setTimeout(() => {
      resetToIdle();
    }, 3000);
  };

  // Reset to idle state
  const resetToIdle = () => {
    setSysState("IDLE");
    setLedColor("green");
    setGateOpen(false);
    addLog("System returned to IDLE state. Ready for next trial.", "state");
  };

  // Simulate peck event
  const handlePeck = () => {
    if (sysState !== "RESPONSE_WINDOW") return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    const currentForce = peckForce;
    addLog(`FSR Analog Input: Peck force registered = ${currentForce}g`, "input");

    if (currentForce < 150) {
      addLog(`Force ${currentForce}g below threshold (150g). Accidental brush filtered. Still listening...`, "input");
      // Resume timeout
      timeoutRef.current = setTimeout(() => {
        handleTimeout();
      }, 3000);
      return;
    }

    const elapsed = ((performance.now() - responseStartTime.current) / 1000);
    setLatency(elapsed);

    if (stimType === "GO") {
      setSysState("SUCCESS");
      setLedColor("green");
      setGateOpen(true);
      addLog(`GO STIMULUS + VALID PECK = SUCCESS! Latency: ${elapsed.toFixed(3)}s`, "state");
      addLog("SERVO: Actuating Gate to -120° (Open) to deliver seed reward.", "servo");
    } else {
      setSysState("PUNISHMENT");
      setLedColor("red");
      addLog(`NO-GO STIMULUS + VALID PECK = ERROR! Latency: ${elapsed.toFixed(3)}s`, "state");
      addLog("PUNISHMENT: Activating Time-out phase. Red LED strobe active.", "system");
    }

    timeoutRef.current = setTimeout(() => {
      resetToIdle();
    }, 4000);
  };

  // Hard reboot button
  const handleReboot = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSysState("BOOT");
    setGateOpen(false);
    setLedColor("off");
    setConsoleLogs([]);
    setLatency(null);
    responseStartTime.current = performance.now();
    addLog("ESP32-S3 Hard Reboot triggered by operator.", "system");
    
    setTimeout(() => {
      addLog("Booting ESP32-S3 module...", "system");
      addLog("Calibration complete. Threshold set to 150g.", "system");
      setSysState("IDLE");
      setLedColor("green");
      addLog("System state: IDLE. Waiting for trial.", "state");
    }, 1500);
  };

  return (
    <section id="interactive-bas" className="py-24 px-6 border-t border-slate-200 bg-slate-50/50 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full text-slate-300" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded border border-orange-200 bg-orange-50 text-orange-600 tech-label shadow-sm">
            <Sparkles size={12} className="animate-spin" />
            Interactive Hardware Lab
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-none">
            B.A.S. Mechatronics Simulator
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-semibold leading-relaxed">
            Test the microcontroller state machine of the Behavioural Assessment System (B.A.S.) designed for corvid cognitive research.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Operator Control Console */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Sliders size={18} className="text-orange-600" />
                  Operator Panel
                </h3>
                <button
                  onClick={handleReboot}
                  className="p-2 text-xs font-bold text-slate-400 hover:text-orange-600 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                  title="Reboot ESP32"
                >
                  <RotateCcw size={14} />
                  Reboot MCU
                </button>
              </div>

              {/* Step 1: Auditory Stimulus Selector */}
              <div className="space-y-3">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  1. Auditory Stimulus Type
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setStimType("GO")}
                    disabled={sysState !== "IDLE"}
                    className={`p-3 rounded-xl border-2 font-bold text-xs uppercase tracking-wider text-center transition-all ${
                      stimType === "GO"
                        ? "border-orange-500 bg-orange-50/50 text-orange-600 shadow-sm"
                        : "border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200 disabled:opacity-50"
                    }`}
                  >
                    GO (Reward Sound)
                  </button>
                  <button
                    onClick={() => setStimType("NOGO")}
                    disabled={sysState !== "IDLE"}
                    className={`p-3 rounded-xl border-2 font-bold text-xs uppercase tracking-wider text-center transition-all ${
                      stimType === "NOGO"
                        ? "border-orange-500 bg-orange-50/50 text-orange-600 shadow-sm"
                        : "border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200 disabled:opacity-50"
                    }`}
                  >
                    NO-GO (Punish Sound)
                  </button>
                </div>
              </div>

              {/* Step 2: Trigger Auditory Stimulus */}
              <div className="space-y-3">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  2. Auditory Stimulation
                </span>
                <button
                  onClick={handleTriggerTrial}
                  disabled={sysState !== "IDLE"}
                  className="w-full py-3.5 bg-slate-900 hover:bg-orange-600 disabled:bg-slate-100 disabled:text-slate-400 text-white rounded-xl font-bold uppercase tracking-widest text-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play size={14} fill="currentColor" />
                  Trigger Trial Playback
                </button>
              </div>

              {/* Step 3: Peck Force & Target Interaction */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-baseline">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    3. Analog Force Sensor (FSR)
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                    {peckForce}g
                  </span>
                </div>
                
                <input
                  type="range"
                  min="30"
                  max="800"
                  value={peckForce}
                  onChange={(e) => setPeckForce(Number(e.target.value))}
                  disabled={sysState === "BOOT"}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />

                <div className="flex justify-between text-[8px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  <span>Light Brush (30g)</span>
                  <span className="text-orange-500 font-extrabold">Threshold (150g)</span>
                  <span>Hard Peck (800g)</span>
                </div>

                <div className="relative">
                  <button
                    onClick={handlePeck}
                    disabled={sysState !== "RESPONSE_WINDOW"}
                    className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-md flex flex-col items-center justify-center gap-1 border-2 select-none ${
                      sysState === "RESPONSE_WINDOW"
                        ? "bg-orange-50 border-orange-500 text-orange-600 hover:scale-[0.99] cursor-pointer animate-pulse"
                        : "bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    <span className="text-xs font-black">CLICK TO PECK TARGET</span>
                    <span className="text-[9px] font-mono opacity-80">
                      {sysState === "RESPONSE_WINDOW" ? "SYSTEM LISTENING..." : "WAITING FOR TRIAL..."}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats Panel */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 grid grid-cols-2 gap-4 text-center font-mono">
              <div className="border-r border-slate-200/60">
                <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">ESP32 Status</span>
                <span className={`text-xs font-bold uppercase ${
                  sysState === "SUCCESS" || sysState === "CORRECT_REJECTION" ? "text-emerald-600" :
                  sysState === "PUNISHMENT" || sysState === "OMISSION" ? "text-red-500" :
                  sysState === "RESPONSE_WINDOW" ? "text-amber-500" : "text-slate-600"
                }`}>
                  {sysState}
                </span>
              </div>
              <div>
                <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Response Latency</span>
                <span className="text-xs font-bold text-slate-900">
                  {latency ? `${latency.toFixed(3)}s` : "--"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: ESP32 Hardware Visualizer & Serial Console */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Visualizer: Mechatronic Gate & ESP32 Board */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 text-white flex-1 flex flex-col justify-between min-h-[300px] shadow-2xl relative">
              
              {/* LED Indicators */}
              <div className="absolute top-6 right-6 flex items-center gap-3 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase">GPIO 25/26 LED</span>
                <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 shadow-md ${
                  ledColor === "green" ? "bg-emerald-500 border-emerald-300 shadow-emerald-500/50 animate-pulse" :
                  ledColor === "red" ? "bg-rose-500 border-rose-300 shadow-rose-500/50 animate-pulse" :
                  ledColor === "orange" ? "bg-amber-500 border-amber-300 shadow-amber-500/50 animate-pulse" :
                  "bg-neutral-800 border-neutral-700 shadow-none"
                }`} />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-orange-500 block mb-4 uppercase">
                  Hardware Assembly View
                </span>
                
                {/* Visual Representation of the Crow test Gate */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
                  
                  {/* Motorized Slide Gate Visualizer */}
                  <div className="bg-black/60 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">MG996R Reward Gate</span>
                    
                    {/* The Sliding Mechanism */}
                    <div className="w-24 h-36 bg-slate-950 border border-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center shadow-inner">
                      {/* Seed Reward in background */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-orange-950/20">
                        <span className="text-3xl">🌾</span>
                        <span className="text-[8px] font-mono font-bold text-orange-400 tracking-wider uppercase mt-1">REWARD</span>
                      </div>
                      
                      {/* Sliding Gate door */}
                      <motion.div
                        animate={{ y: gateOpen ? "75%" : "0%" }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        className="absolute inset-0 bg-slate-800 border-b border-slate-700 flex items-center justify-center shadow-md z-10"
                      >
                        <div className="w-1.5 h-12 bg-slate-950 rounded-full opacity-60" />
                      </motion.div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">Servo Status:</span>
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                        gateOpen ? "bg-emerald-500/20 text-emerald-400" : "bg-neutral-800 text-neutral-400"
                      }`}>
                        {gateOpen ? "Open (-120°)" : "Closed (0°)"}
                      </span>
                    </div>
                  </div>

                  {/* ESP32 pin schematic visualization */}
                  <div className="space-y-4 font-mono text-xs text-slate-300">
                    <div className="border border-slate-800 bg-black/20 p-4 rounded-xl space-y-2.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] text-slate-500">PIN GPIO 34 (ANALOG)</span>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                          sysState === "RESPONSE_WINDOW" ? "bg-amber-500/20 text-amber-400" : "bg-neutral-800 text-neutral-500"
                        }`}>
                          FSR Sensor
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] text-slate-500">PIN GPIO 4 (PWM)</span>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                          gateOpen ? "bg-emerald-500/20 text-emerald-400" : "bg-neutral-800 text-neutral-500"
                        }`}>
                          Servo Gate
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] text-slate-500">PIN GPIO 25/26 (DIGITAL)</span>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                          ledColor !== "off" ? "bg-orange-500/20 text-orange-400" : "bg-neutral-800 text-neutral-500"
                        }`}>
                          RGB LEDs
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-[10px] text-slate-400 flex gap-2 leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5">
                      <HelpCircle size={14} className="shrink-0 text-orange-500 mt-0.5" />
                      <span>In a GO trial, pecking the button triggers the servo. In a NO-GO trial, pecking triggers a time-out.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual ESP32 Serial Monitor Console */}
            <div className="bg-slate-950 border border-slate-900 rounded-3xl p-6 shadow-2xl flex flex-col h-[220px]">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-3">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-400 flex items-center gap-2 uppercase">
                  <Terminal size={14} className="text-orange-500" />
                  ESP32 Serial Monitor (115200 baud)
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow shadow-emerald-500/50 animate-ping" />
              </div>

              {/* Console log list */}
              <div className="flex-1 overflow-y-auto space-y-1.5 font-mono text-[11px] leading-normal text-emerald-400 pr-2 custom-scrollbar">
                {consoleLogs.length === 0 ? (
                  <p className="text-slate-500 italic">No serial output detected.</p>
                ) : (
                  consoleLogs.map((log, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-slate-600 shrink-0 select-none">[{log.time}s]</span>
                      <span className={`
                        ${log.type === "input" ? "text-amber-400" : ""}
                        ${log.type === "servo" ? "text-cyan-400" : ""}
                        ${log.type === "state" ? "text-emerald-300 font-bold" : ""}
                        ${log.type === "system" ? "text-slate-400" : ""}
                      `}>
                        {log.text}
                      </span>
                    </div>
                  ))
                )}
                <div ref={terminalEndRef} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
