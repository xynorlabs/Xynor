

"use client";
import { useEffect, useState } from "react";

export function useAnimation(threshold = 0.1) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold }
    );
    obs.observe(ref);
    return () => obs.disconnect();
  }, [ref, threshold]);

  return { ref: setRef, isVisible };
}
