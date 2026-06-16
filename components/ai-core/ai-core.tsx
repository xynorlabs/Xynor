

"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./scene").then((m) => m.Scene), { ssr: false });

export function AICore() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]" />
              AI Core
            </div>
            <h2 className="font-space text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              An <span className="gradient-text">Intelligent</span> Engine
              <br /> at the Center
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Our proprietary AI orchestration layer connects models, data, and agents into a single
              adaptive system that learns and evolves with your business.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { t: "Adaptive Learning", d: "Models that improve continuously from your data." },
                { t: "Real-time Inference", d: "Sub-50ms response times for production workloads." },
                { t: "Multi-modal Support", d: "Text, vision, audio, and structured data unified." },
              ].map((f) => (
                <div key={f.t} className="flex gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4]" />
                  <div>
                    <div className="font-medium text-white">{f.t}</div>
                    <div className="text-sm text-white/50">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            <Scene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
