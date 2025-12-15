// components/DroneSkeletonScene.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

// Drone Skeleton Component
function DroneSkeleton() {
  const assemblyRef = useRef<THREE.Group>(null);
  
  // Materials
  const accentMaterial = new THREE.MeshStandardMaterial({
    color: '#ea580c', // Industrial Orange (Accent)
    roughness: 0.5,
    metalness: 0.9,
  });

  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: '#0f172a', // Dark Slate (Structure)
    roughness: 0.2,
    metalness: 0.8,
  });

  // Animation Logic (Continuous Rotation Only)
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (assemblyRef.current) {
      // Continuous, steady rotation around the Y axis (non-interactive)
      assemblyRef.current.rotation.y = t * 0.4; 
    }
  });

  // --- GEOMETRIES (Simple Quad-Rotor Frame) ---
  const armLength = 5;
  const armRadius = 0.15;
  const hubSize = 1;

  return (
    <group ref={assemblyRef} scale={0.8} rotation={[0.2, 0, 0]}>
        
      {/* Central Hub (Main Body) */}
      <mesh material={accentMaterial}>
        <boxGeometry args={[hubSize, hubSize / 2, hubSize]} />
      </mesh>

      {/* Arms - Simple X shape for a Quadcopter skeleton */}
      {/* Arm 1: +X / -X direction */}
      <mesh position={[armLength / 2, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={bodyMaterial}>
          <cylinderGeometry args={[armRadius, armRadius, armLength, 12]} />
      </mesh>
      <mesh position={[-armLength / 2, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={bodyMaterial}>
          <cylinderGeometry args={[armRadius, armRadius, armLength, 12]} />
      </mesh>
      
      {/* Arm 2: +Z / -Z direction */}
      <mesh position={[0, 0, armLength / 2]} rotation={[Math.PI / 2, 0, 0]} material={bodyMaterial}>
          <cylinderGeometry args={[armRadius, armRadius, armLength, 12]} />
      </mesh>
      <mesh position={[0, 0, -armLength / 2]} rotation={[Math.PI / 2, 0, 0]} material={bodyMaterial}>
          <cylinderGeometry args={[armRadius, armRadius, armLength, 12]} />
      </mesh>


      {/* Motor Mounts / End Connectors (Accent) - Spheres */}
      {[[armLength/2, 0, 0], [-armLength/2, 0, 0], [0, 0, armLength/2], [0, 0, -armLength/2]].map((pos, index) => (
          <mesh key={index} position={pos} material={accentMaterial}>
              <sphereGeometry args={[0.3, 12, 12]} />
          </mesh>
      ))}

      {/* Landing Gear - Simple cylinders for a skeleton prototype look */}
      <mesh position={[hubSize/2, -0.7, 0]} material={bodyMaterial}>
          <boxGeometry args={[0.15, 1.5, hubSize + 0.5]} />
      </mesh>
      <mesh position={[-hubSize/2, -0.7, 0]} material={bodyMaterial}>
          <boxGeometry args={[0.15, 1.5, hubSize + 0.5]} />
      </mesh>

    </group>
  );
}

export default function DroneSkeletonScene() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
        
        {/* Lighting for Light Theme */}
        <ambientLight intensity={1.5} color="#ffffff" />
        <directionalLight position={[10, 15, 10]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-10, 5, 5]} intensity={1.5} color="#ea580c" />
        <pointLight position={[0, 5, 0]} intensity={1} color="#ffffff" />
        
        <DroneSkeleton />
        
        {/* Soft Shadow on the "floor" */}
        <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.2} far={10} color="#000000" />
        
        {/* Environment for subtle reflections */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}