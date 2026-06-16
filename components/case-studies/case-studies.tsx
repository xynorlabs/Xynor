


"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    industry: "Manufacturing",
    problem: "Manual quality inspection on assembly lines caused 8% defect leakage and high labor costs.",
    approach: "Deployed real-time computer vision system with custom defect detection models on edge devices.",
    impact: ["92% defect detection accuracy", "70% reduction in inspection cost", "40ms inference per frame"],
  },
  {
    industry: "FinTech",
    problem: "Fraud detection rules were missing 30% of sophisticated attacks while flagging too many false positives.",
    approach: "Built ensemble ML pipeline with graph neural networks and behavioral analysis.",
    impact: ["85% fraud catch rate", "60% fewer false positives", "Real-time at 100K txn/sec"],
  },
  {
    industry: "Healthcare",
    problem: "Radiologists spent 40% of time on routine scans, creating bottlenecks.",
    approach: "Fine-tuned vision model for triage with explainable AI overlays.",
    impact: ["3x faster scan processing", "96% accuracy on critical cases", "FDA-aligned documentation"],
  },
];

export function CaseStudies() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            Case Studies
          </div>
          <h2 className="font-space text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Real problems.
            <br />
            <span className="gradient-text">Real impact.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.industry}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="glass group grid gap-6 rounded-3xl p-8 transition-all hover:border-white/20 md:grid-cols-3"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-white/40">Industry</div>
                <div className="mt-1 font-space text-xl font-semibold">{c.industry}</div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40">Problem</div>
                  <p className="mt-1 text-white/70">{c.problem}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40">Approach</div>
                  <p className="mt-1 text-white/70">{c.approach}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40">Impact</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.impact.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-[#6366F1]/30 bg-[#6366F1]/10 px-3 py-1 text-sm text-white"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
