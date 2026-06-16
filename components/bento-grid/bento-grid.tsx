
"use client";
import { motion } from "framer-motion";
import { Bot, Eye, Cog, BarChart3, Code2, Lightbulb, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Autonomous agents that execute multi-step workflows across your tools and data.",
    size: "lg",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Visual intelligence for quality, safety, and automation.",
    size: "md",
    gradient: "from-[#06B6D4] to-[#6366F1]",
  },
  {
    icon: Cog,
    title: "Enterprise Automation",
    desc: "End-to-end process automation at scale.",
    size: "md",
    gradient: "from-[#8B5CF6] to-[#EC4899]",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    desc: "Forecast trends, demand, and risks with custom models.",
    size: "md",
    gradient: "from-[#10B981] to-[#06B6D4]",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Bespoke AI-powered applications built for your domain.",
    size: "md",
    gradient: "from-[#F59E0B] to-[#EF4444]",
  },
  {
    icon: Lightbulb,
    title: "AI Consulting",
    desc: "Strategy, architecture, and roadmap for AI adoption.",
    size: "lg",
    gradient: "from-[#6366F1] to-[#06B6D4]",
  },
];

export function BentoGrid() {
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
            <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]" />
            Solutions
          </div>
          <h2 className="font-space text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Engineered for <span className="gradient-text">Scale</span>
          </h2>
        </motion.div>

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={cn(
                "group glass relative cursor-pointer overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-white/20",
                s.size === "lg" ? "md:col-span-2 md:row-span-2" : "md:col-span-2 lg:col-span-2"
              )}
            >
              <div
                className={cn(
                  "absolute -inset-px rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  s.gradient
                )}
                style={{ filter: "blur(40px)", opacity: 0.1 }}
              />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div
                    className={cn(
                      "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
                      s.gradient
                    )}
                  >
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-space text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.desc}</p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-sm text-white/50 transition-colors group-hover:text-white">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
