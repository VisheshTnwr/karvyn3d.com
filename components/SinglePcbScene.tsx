// // components/SinglePcbScene.tsx
// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
// import * as THREE from "three";
// import { useRef } from "react";

// // --- Single PCB Assembly Component (Self-Contained) ---
// function PcbAssembly() {
//   const assemblyRef = useRef<THREE.Group>(null);
  
//   // Materials (Adjusted for Light Background: Orange Accent, Darker Body)
//   const topMaterial = new THREE.MeshStandardMaterial({ 
//     color: '#ea580c', // Orange Accent
//     roughness: 0.3,
//     metalness: 0.5,
//     transparent: true,
//     opacity: 0.8,
//   });

//   const bottomMaterial = new THREE.MeshStandardMaterial({
//     color: '#0f172a', // Slate 900
//     roughness: 0.2,
//     metalness: 0.8,
//   });

//   const pcbMaterial = new THREE.MeshStandardMaterial({
//     color: '#0a8f4c', // Classic PCB Green
//     roughness: 0.5,
//     metalness: 0.1,
//   });
  
//   const chipMaterial = new THREE.MeshStandardMaterial({
//     color: '#a1a1aa', // Slate 400 
//     roughness: 0.1,
//     metalness: 0.9,
//   });

//   // --- DIMENSIONS & POSITIONS ---
//   const HousingDims = [4, 1.5, 6]; // W, H, D
//   const LidHeight = HousingDims[1] / 2;
//   const PCBThickness = 0.08;
//   const Gap = 0.15; 
  
//   // Center Y position 
//   const center_Y = LidHeight + Gap + PCBThickness / 2; 
  
//   // Position for chips on top of the PCB (FIXED: Use PCBThickness / 2)
//   const chip_Y_Offset = PCBThickness / 2;

//   // Animation Logic (Continuous Rotation Only)
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
    
//     if (assemblyRef.current) {
//       // Continuous, steady rotation around the Y axis (non-interactive)
//       assemblyRef.current.rotation.y = t * 0.4; 
//     }
//   });

//   // --- GEOMETRIES ---
//   return (
//     <group ref={assemblyRef} scale={1.0} rotation={[0.4, 0, 0]}> 
      
//       {/* 1. Top Housing Part (Lid) - Positioned above the PCB */}
//       <mesh material={topMaterial} position={[0, center_Y, 0]}>
//         <boxGeometry args={[HousingDims[0], LidHeight, HousingDims[2]]} />
//       </mesh>

//       {/* 2. PCB Board (Green) - In the middle (Y=0) */}
//       <mesh material={pcbMaterial} position={[0, 0, 0]}>
//         <boxGeometry args={[HousingDims[0] - 0.2, PCBThickness, HousingDims[2] - 0.2]} />
        
//         {/* Simulated Chips / Components (on PCB) - Using fixed offset */}
//         <mesh material={chipMaterial} position={[0, chip_Y_Offset, 0]}> 
//           <boxGeometry args={[0.8, 0.15, 1.5]} />
//         </mesh>
//         <mesh material={chipMaterial} position={[1.2, chip_Y_Offset, 2.2]}> 
//           <boxGeometry args={[0.3, 0.1, 0.3]} />
//         </mesh>
//       </mesh>

//       {/* 3. Bottom Housing Part (Dark Slate) - Positioned below the PCB */}
//       <mesh material={bottomMaterial} position={[0, -center_Y, 0]}>
//         <boxGeometry args={[HousingDims[0], LidHeight, HousingDims[2]]} />
//         {/* Simulating Internal Features (Screw Bosses) */}
//         {[
//             [1.5, LidHeight - 0.4, 2.5], [1.5, LidHeight - 0.4, -2.5], 
//             [-1.5, LidHeight - 0.4, 2.5], [-1.5, LidHeight - 0.4, -2.5]
//         ].map((pos, index) => (
//             <mesh key={index} position={pos} material={topMaterial}>
//                 <cylinderGeometry args={[0.1, 0.1, 0.4, 12]} />
//             </mesh>
//         ))}
//       </mesh>

//     </group>
//   );
// }

// export default function SinglePcbScene() {
//   return (
//     <div className="w-full h-full min-h-[500px]">
//       <Canvas 
//           // CRITICAL STABILITY FIX: Prevents WebGL context loss
//           gl={{ antialias: true, preserveDrawingBuffer: true }} 
//           dpr={[1, 2]}
//       >
//         <PerspectiveCamera makeDefault position={[5, 4, 7]} fov={30} />
        
//         {/* Lighting and Environment */}
//         <ambientLight intensity={1.5} color="#ffffff" />
//         <directionalLight position={[10, 15, 10]} intensity={2.5} color="#ffffff" />
//         {/* Adjusted accent color in lighting for theme consistency */}
//         <pointLight position={[-10, 5, 5]} intensity={1.5} color="#ea580c" /> 
//         <pointLight position={[0, 5, 0]} intensity={1} color="#ffffff" />
        
//         <PcbAssembly />
        
//         <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.2} far={10} color="#000000" />
//         <Environment preset="studio" />
//       </Canvas>
//     </div>
//   );
// }