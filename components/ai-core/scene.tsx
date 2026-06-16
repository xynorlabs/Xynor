

"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

function RotatingCore() {
  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  const ref3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref1.current) { ref1.current.rotation.x = t * 0.2; ref1.current.rotation.y = t * 0.3; }
    if (ref2.current) { ref2.current.rotation.x = -t * 0.15; ref2.current.rotation.z = t * 0.1; }
    if (ref3.current) { ref3.current.rotation.y = t * 0.25; ref3.current.rotation.z = -t * 0.2; }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
      <Sphere ref={ref1} args={[1, 64, 64]}>
        <MeshDistortMaterial color="#6366F1" distort={0.5} speed={2} roughness={0.2} metalness={0.9} />
      </Sphere>
      <Torus ref={ref2} args={[1.8, 0.02, 16, 100]}>
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={2} />
      </Torus>
      <Torus ref={ref3} args={[2.2, 0.015, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={2} />
      </Torus>
    </Float>
  );
}

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#6366F1" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#06B6D4" />
      <RotatingCore />
    </Canvas>
  );
}
