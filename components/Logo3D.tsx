"use client";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// @ts-ignore
import { ThreeMFLoader } from "three/examples/jsm/loaders/3MFLoader";
import Image from "next/image";
import * as THREE from "three";

// Fallback to the original SVG logo if WebGL or file loading fails
const LogoFallback = () => (
  <div className="relative w-40 h-40 flex-shrink-0 flex items-center justify-center bg-transparent">
    <Image
      src="/logo.svg"
      alt="Karvyn3D Logo"
      fill
      sizes="160px"
      className="object-contain"
      priority
    />
  </div>
);

// Standard Error Boundary to catch ThreeJS / WebGL rendering errors
class ErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("R3F WebGL Logo Error caught in boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Controller to manage auto-rotation of the model and user horizontal spin
function CameraController({ model, isHovered }: { model: THREE.Group; isHovered: boolean }) {
  const controlsRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (!isHovered) {
      // Rotate the model itself slowly during idle
      model.rotation.y += delta * 0.45;

      if (controlsRef.current) {
        controlsRef.current.update();
      }
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableDamping={true}
      dampingFactor={0.06}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
    />
  );
}

export default function Logo3D() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loadedModel, setLoadedModel] = useState<THREE.Group | null>(null);
  const [loadError, setLoadError] = useState(false);
  
  // Guard to prevent double-loading in React 19 Strict Mode
  const isLoadedRef = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    if (isLoadedRef.current) return;

    const loader = new ThreeMFLoader();
    loader.load(
      "/3d_models/Logo/Karvyn3D_Logo.3mf",
      (model) => {
        if (isLoadedRef.current) return;
        isLoadedRef.current = true;

        try {
          const box = new THREE.Box3().setFromObject(model);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          // Center the loaded model's geometry
          model.position.set(-center.x, -center.y, -center.z);

          // Map parent groups to alternating colors
          const parentColors = new Map<THREE.Object3D, string>();
          let componentCount = 0;

          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              const parent = child.parent;
              if (parent) {
                if (!parentColors.has(parent)) {
                  // Alternate brand colors: parent 0 is Dark Slate (#0f172a), parent 1 is Orange (#ea580c)
                  const color = componentCount % 2 === 0 ? "#0f172a" : "#ea580c";
                  parentColors.set(parent, color);
                  componentCount++;
                }

                const hexColor = parentColors.get(parent)!;
                const isBlack = hexColor === "#0f172a";
                child.material = new THREE.MeshBasicMaterial({
                  color: new THREE.Color(hexColor),
                  side: THREE.FrontSide, // Render only front faces to avoid back-face overlapping
                  polygonOffset: true,
                  polygonOffsetFactor: isBlack ? -2 : 2, // Pull black forward (-2), push orange back (2)
                  polygonOffsetUnits: isBlack ? -2 : 2
                });
              }
            }
          });

          // Wrap in a group for unified scaling
          const parentGroup = new THREE.Group();
          parentGroup.add(model);

          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            // Scale to fit footer frame boundaries nicely
            const scaleFactor = 2.6 / maxDim;
            parentGroup.scale.set(scaleFactor, scaleFactor, scaleFactor);
          }

          setLoadedModel(parentGroup);
        } catch (err) {
          console.error("Error processing loaded 3MF logo model:", err);
          setLoadError(true);
        }
      },
      undefined,
      (err) => {
        console.error("Failed to load 3MF logo file:", err);
        setLoadError(true);
      }
    );
  }, []);

  if (!isMounted || loadError || !loadedModel) {
    return <LogoFallback />;
  }

  return (
    <div
      className="w-40 h-40 relative flex items-center justify-center cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ErrorBoundary fallback={<LogoFallback />}>
        <Suspense fallback={<LogoFallback />}>
          <Canvas camera={{ position: [0, 0, 4.0], fov: 45 }}>
            <primitive object={loadedModel} dispose={null} />
            <CameraController model={loadedModel} isHovered={isHovered} />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
