

"use client";
import { useEffect, useState } from "react";

export function MouseSpotlight() {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const update = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.08), transparent 40%)`,
      }}
    />
  );
}
