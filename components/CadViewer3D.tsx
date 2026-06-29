"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Maximize2, RotateCcw, Box, HelpCircle } from "lucide-react";

type ViewMode = "wireframe" | "polymer" | "carbon";

function CadMesh({ mode }: { mode: ViewMode }) {
  const groupRef = useRef<THREE.Group>(null);

  // Slow continuous rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.15;
    }
  });

  const isWire = mode === "wireframe";
  
  // Set material parameters based on mode selection
  const color = mode === "wireframe" ? "#ea580c" : mode === "polymer" ? "#475569" : "#1e293b";
  const roughness = mode === "carbon" ? 0.95 : 0.55;
  const metalness = mode === "carbon" ? 0.3 : 0.05;

  return (
    <group ref={groupRef}>
      {/* Central main housing body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.2, 2]} />
        <meshStandardMaterial
          color={color}
          wireframe={isWire}
          roughness={roughness}
          metalness={metalness}
          transparent={isWire}
          opacity={isWire ? 0.8 : 1}
        />
      </mesh>

      {/* Internal sensor chamber */}
      <mesh position={[0, 0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.65, 0.65, 0.35, 32]} />
        <meshStandardMaterial
          color={color}
          wireframe={isWire}
          roughness={roughness}
          metalness={metalness}
        />
      </mesh>

      {/* Left mounting wing */}
      <mesh position={[-1.3, -0.4, 0]}>
        <boxGeometry args={[0.6, 0.2, 1.2]} />
        <meshStandardMaterial
          color={color}
          wireframe={isWire}
          roughness={roughness}
          metalness={metalness}
        />
      </mesh>

      {/* Right mounting wing */}
      <mesh position={[1.3, -0.4, 0]}>
        <boxGeometry args={[0.6, 0.2, 1.2]} />
        <meshStandardMaterial
          color={color}
          wireframe={isWire}
          roughness={roughness}
          metalness={metalness}
        />
      </mesh>

      {/* Boltholes (represented by cylinders) */}
      <mesh position={[-1.3, -0.3, 0.3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
        <meshStandardMaterial
          color={isWire ? color : "#0f172a"}
          wireframe={isWire}
        />
      </mesh>
      <mesh position={[-1.3, -0.3, -0.3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
        <meshStandardMaterial
          color={isWire ? color : "#0f172a"}
          wireframe={isWire}
        />
      </mesh>
      <mesh position={[1.3, -0.3, 0.3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
        <meshStandardMaterial
          color={isWire ? color : "#0f172a"}
          wireframe={isWire}
        />
      </mesh>
      <mesh position={[1.3, -0.3, -0.3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
        <meshStandardMaterial
          color={isWire ? color : "#0f172a"}
          wireframe={isWire}
        />
      </mesh>

      {/* Grid helper and orbit ring for wireframe view */}
      {isWire && (
        <>
          <gridHelper args={[6, 12, "#ea580c", "#334155"]} position={[0, -0.9, 0]} />
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <ringGeometry args={[2.2, 2.22, 64]} />
            <meshBasicMaterial color="#ea580c" side={THREE.DoubleSide} />
          </mesh>
        </>
      )}
    </group>
  );
}

export default function CadViewer3D() {
  const [mode, setMode] = useState<ViewMode>("wireframe");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center text-slate-500 font-mono text-xs rounded-2xl border border-slate-800">
        <Box className="animate-spin text-orange-600 mb-2" size={24} />
        Initializing WebGL 3D Context...
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 md:p-8 shadow-2xl flex flex-col md:flex-row gap-8 items-stretch">
      {/* 3D Canvas Box */}
      <div className="flex-1 relative aspect-square bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden min-h-[300px]">
        {/* Helper overlay labels */}
        <div className="absolute top-4 left-4 z-10 bg-black/60 border border-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-mono text-orange-500 flex items-center gap-1.5 select-none">
          <Maximize2 size={12} />
          Drag to Rotate / Scroll to Zoom
        </div>

        <Canvas camera={{ position: [0, 2, 4.5], fov: 45 }}>
          <ambientLight intensity={mode === "wireframe" ? 1.5 : 0.6} />
          {mode !== "wireframe" && (
            <>
              <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow />
              <pointLight position={[-5, 5, -5]} intensity={0.8} />
            </>
          )}
          <CadMesh mode={mode} />
          <OrbitControls enableZoom={true} enablePan={false} maxDistance={8} minDistance={2.5} />
        </Canvas>
      </div>

      {/* Inspector Details Panel */}
      <div className="w-full md:w-80 flex flex-col justify-between space-y-6">
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-orange-500 uppercase block mb-1">
              3D CAD Engine
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Sensor Bracket Model
            </h3>
          </div>

          {/* Mode Selector */}
          <div className="space-y-2">
            <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
              Render Mode
            </span>
            <div className="flex flex-col gap-2">
              {[
                { id: "wireframe", label: "Wireframe Blueprint", desc: "Interactive node alignment mesh" },
                { id: "polymer", label: "Matte PLA Polymer", desc: "Light grey test fit prototype" },
                { id: "carbon", label: "PETG-CF (Carbon Fiber)", desc: "Engineering grade structure" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setMode(btn.id as ViewMode)}
                  className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                    mode === btn.id
                      ? "border-orange-500 bg-orange-950/20 text-orange-400"
                      : "border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="block font-bold mb-0.5">{btn.label}</span>
                  <span className="text-[9px] opacity-80 font-medium">{btn.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Technical properties */}
          <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 space-y-2.5 font-mono text-[10px] text-slate-400">
            <div className="flex justify-between">
              <span>BOUNDING BOX:</span>
              <span className="font-bold text-white">52 x 24 x 40 mm</span>
            </div>
            <div className="flex justify-between">
              <span>VOLUME CAPACITY:</span>
              <span className="font-bold text-white">16.4 cc</span>
            </div>
            <div className="flex justify-between">
              <span>WEIGHT (PLA/CF):</span>
              <span className="font-bold text-white">18.2g / 22.4g</span>
            </div>
            <div className="flex justify-between">
              <span>WALL THICKNESS:</span>
              <span className="font-bold text-white">1.8 mm (Solid)</span>
            </div>
          </div>
        </div>

        <div className="text-[9px] font-medium text-slate-500 flex gap-2 leading-relaxed bg-slate-950/30 p-3 rounded-lg border border-slate-800/50">
          <HelpCircle size={14} className="shrink-0 text-orange-500 mt-0.5" />
          <span>Interactive preview of client mechatronic parts, toleranced to ±0.05mm and verified for FDM layer-deposition.</span>
        </div>
      </div>
    </div>
  );
}
