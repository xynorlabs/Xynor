"use client";

import { motion } from "framer-motion";
import { Database, Brain, Bot, Zap, TrendingUp } from "lucide-react";

const stages = [
  { icon: Database, label: "Data", desc: "Multi-source ingestion" },
  { icon: Brain, label: "Models", desc: "Custom & fine-tuned AI" },
  { icon: Bot, label: "Agents", desc: "Autonomous workers" },
  { icon: Zap, label: "Automation", desc: "End-to-end workflows" },
  { icon: TrendingUp, label: "Outcomes", desc: "Measurable business impact" },
];

export function Ecosystem() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
            AI Ecosystem
          </div>

          <h2 className="font-space text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            From <span className="gradient-text">Data</span> to{" "}
            <span className="text-white/40">Outcomes</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            A complete pipeline. We architect each layer of the AI stack.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center Timeline */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />

          {stages.map((stage, i) => {
            const Icon = stage.icon;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative mb-12"
              >
                {/* Mobile Layout */}
                <div className="flex flex-col items-center gap-6 lg:hidden">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#6366F1]/20 to-[#06B6D4]/20 backdrop-blur-xl">
                    <Icon className="h-7 w-7 text-white" />
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#06B6D4] opacity-20 blur-xl" />
                  </div>

                  <div className="glass w-full rounded-2xl p-6 text-center">
                    <div className="font-space text-sm font-medium text-white/50">
                      0{i + 1}
                    </div>
                    <div className="mt-1 font-space text-2xl font-bold">
                      {stage.label}
                    </div>
                    <div className="mt-1 text-sm text-white/50">
                      {stage.desc}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden items-center lg:flex">
                  {isLeft ? (
                    <>
                      <div className="flex flex-1 justify-end pr-12">
                        <div className="glass max-w-md rounded-2xl p-6 transition-all duration-300 group-hover:border-white/20">
                          <div className="font-space text-sm font-medium text-white/50">
                            0{i + 1}
                          </div>
                          <div className="mt-1 font-space text-2xl font-bold">
                            {stage.label}
                          </div>
                          <div className="mt-1 text-sm text-white/50">
                            {stage.desc}
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#6366F1]/20 to-[#06B6D4]/20 backdrop-blur-xl">
                        <Icon className="h-7 w-7 text-white" />
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#06B6D4] opacity-20 blur-xl" />
                      </div>

                      <div className="flex-1" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1" />

                      <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#6366F1]/20 to-[#06B6D4]/20 backdrop-blur-xl">
                        <Icon className="h-7 w-7 text-white" />
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#06B6D4] opacity-20 blur-xl" />
                      </div>

                      <div className="flex flex-1 justify-start pl-12">
                        <div className="glass max-w-md rounded-2xl p-6 transition-all duration-300 group-hover:border-white/20">
                          <div className="font-space text-sm font-medium text-white/50">
                            0{i + 1}
                          </div>
                          <div className="mt-1 font-space text-2xl font-bold">
                            {stage.label}
                          </div>
                          <div className="mt-1 text-sm text-white/50">
                            {stage.desc}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}