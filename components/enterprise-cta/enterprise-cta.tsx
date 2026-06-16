


"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function EnterpriseCTA() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#06B6D4]/10 p-12 text-center md:p-20"
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#6366F1]/30 to-[#06B6D4]/30 blur-3xl" />

          <div className="relative">
            <h2 className="font-space text-4xl font-bold leading-tight md:text-6xl">
              Let's build something
              <br />
              <span className="gradient-text text-glow">extraordinary.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/60">
              Whether you're scaling AI infrastructure or building from scratch — let's talk about your roadmap.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              >
                Schedule Strategy Call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="mailto:xynorlabs@gmail.com"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all hover:bg-white/10"
              >
                xynorlabs@gmail.com
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
