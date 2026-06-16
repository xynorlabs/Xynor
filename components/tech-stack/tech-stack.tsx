
"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Network = dynamic(() => import("./network").then((m) => m.Network), { ssr: false });

const techs = ["Python", "PyTorch", "TensorFlow", "OpenCV", "FastAPI", "Next.js", "PostgreSQL", "Docker", "AWS"];

export function TechStack() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
            Technology
          </div>
          <h2 className="font-space text-4xl font-bold leading-tight md:text-5xl">
            Built on a <span className="gradient-text">battle-tested stack</span>.
          </h2>
        </motion.div>

        <div className="relative h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent">
          <Network />
          <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-3 p-8">
            {techs.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-full px-4 py-2 text-sm font-medium text-white"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
