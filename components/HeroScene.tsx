"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Geometries() {
  // Explicitly type the ref as a THREE.Group
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the group
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Main Orange Object */}
        <mesh>
          <icosahedronGeometry args={[2, 0]} />
          <meshStandardMaterial 
            color="#ea580c" // Industrial Orange
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>

        {/* Wireframe Ghost Object */}
        <mesh scale={[1.2, 1.2, 1.2]}>
          <icosahedronGeometry args={[2, 1]} />
          <meshBasicMaterial 
            color="#0f172a" 
            wireframe 
            transparent 
            opacity={0.1} 
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[500px]"> {/* Ensure explicit height */}
      <Canvas gl={{ antialias: true }} dpr={[1, 2]}> {/* Handle high-DPI screens */}
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        
        {/* Simple Directional Lights (No internet required) */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#ea580c" />

        <Geometries />
        
        {/* Shadow on the "floor" */}
        <ContactShadows resolution={512} scale={20} blur={2} opacity={0.2} far={10} color="#000000" />
      </Canvas>
    </div>
  );
}