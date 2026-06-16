
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setHidden(true), 400);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-space text-4xl font-bold tracking-widest text-white"
          >
            Xynor<span className="gradient-text">LABS</span>
          </motion.div>
          <div className="mt-8 h-px w-64 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4]"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="mt-3 font-mono text-xs text-white/40">
            {Math.min(Math.round(progress), 100)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
