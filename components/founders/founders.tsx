

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Adesh Kachare",
    role: "Founder & CEO",
    bio: "Architect of intelligent systems. Deep expertise in AI/ML, Computer Vision, and large-scale engineering.",
    tags: ["AI/ML", "Computer Vision", "Intelligent Systems"],
  },
  {
    name: "Tejas Sasane",
    role: "Co-Founder & COO",
    bio: "Engineering leader driving operational excellence and delivery of complex AI products.",
    tags: ["Engineering", "Operations", "Delivery"],
  },
];

export function Founders() {
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
            Built by Engineers
          </div>
          <h2 className="font-space text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            The people <span className="gradient-text">behind</span> the code.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:border-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#06B6D4]">
                  <div className="absolute inset-0 flex items-center justify-center font-space text-2xl font-bold text-white">
                    {f.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-space text-2xl font-semibold">{f.name}</div>
                  <div className="text-sm text-white/50">{f.role}</div>
                </div>
              </div>
              <p className="mt-6 text-white/70">{f.bio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
