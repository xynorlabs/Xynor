

"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const AICore = dynamic(() => import("./ai-core-scene").then((m) => m.AICoreScene), {
  ssr: false,
});

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32">
      <div className="absolute inset-0 grid-pattern mask-radial" />
      <div className="absolute inset-0 -z-10">
        <AICore />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#6366F1]" />
          <span>AI Engineering Company</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span className="text-white/50">Now building in stealth</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-space text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          Build AI Systems
          <br />
          <span className="gradient-text text-glow">That Move</span>{" "}
          <span className="text-white/40">Businesses</span>
          <br />
          <span className="text-white/40">Forward.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-base text-white/60 md:text-lg"
        >
          AI Agents. Computer Vision. Enterprise Automation.
          <br className="hidden md:block" />
          We engineer intelligent systems that transform how businesses operate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Start Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/solutions"
            className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition-all hover:bg-white/10"
          >
            Explore Solutions
            <span className="text-white/50 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 gap-8 border-t border-white/5 pt-12 md:grid-cols-4"
        >
          {[
            { v: "12+", l: "AI Systems Deployed" },
            { v: "8", l: "Industry Verticals" },
            { v: "99.9%", l: "Uptime" },
            { v: "40ms", l: "Avg. Inference" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-space text-3xl font-bold text-white md:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs text-white/50 md:text-sm">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
