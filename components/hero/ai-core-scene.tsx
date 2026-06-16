

"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.6}>
          <MeshDistortMaterial
            color="#6366F1"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.1}
            metalness={0.8}
            emissive="#8B5CF6"
            emissiveIntensity={0.4}
          />
        </Sphere>
      </Float>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.012} color="#06B6D4" transparent opacity={0.7} sizeAttenuation />
      </points>
    </group>
  );
}

export function AICoreScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366F1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
      <Core />
      <Environment preset="night" />
    </Canvas>
  );
}
