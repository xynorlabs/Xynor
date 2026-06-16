
"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Nodes() {
  const ref = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(40 * 3);
    for (let i = 0; i < 40; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const verts: number[] = [];
    for (let i = 0; i < 40; i++) {
      for (let j = i + 1; j < 40; j++) {
        const d =
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
          Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2);
        if (d < 4) {
          verts.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }
    geom.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geom;
  }, [positions]);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    if (linesRef.current) linesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={40} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#6366F1" transparent opacity={0.9} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <primitive object={lineGeometry} />
        <lineBasicMaterial color="#6366F1" transparent opacity={0.2} />
      </lineSegments>
    </>
  );
}

export function Network() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Nodes />
    </Canvas>
  );
}
