"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export function Playground() {
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const generate = async () => {
    if (!problem.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/ai-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ problem }),
      });

      const data = await res.json();

      // 🔥 SAFE NORMALIZATION (IMPORTANT FIX)
      setResult({
        type: data?.type || "chat",
        message:
          data?.message ||
          data?.response ||
          JSON.stringify(data, null, 2),
        solution: data?.solution || "",
        architecture: data?.architecture || [],
        workflow: data?.workflow || "",
        impact: data?.impact || "",
      });
    } catch (err) {
      console.error("Frontend error:", err);

      setResult({
        type: "chat",
        message: "Something went wrong. Please check backend or console.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
            <Sparkles className="h-3 w-3 text-[#6366F1]" />
            AI Playground
          </div>

          <h2 className="font-space text-4xl font-bold leading-tight md:text-5xl">
            Describe a problem.
            <br />
            <span className="gradient-text">Get a blueprint.</span>
          </h2>
        </motion.div>

        {/* INPUT */}
        <div className="glass rounded-3xl p-6 md:p-8">
          <label className="mb-2 block text-sm text-white/60">
            Your business problem
          </label>

          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="e.g. We need to predict equipment failures before they happen..."
            rows={4}
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-white/30 focus:border-[#6366F1] focus:outline-none"
          />

          <button
            onClick={generate}
            disabled={loading}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-6 py-3.5 text-sm font-medium text-white transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Generate AI Solution
              </>
            )}
          </button>
        </div>

        {/* OUTPUT */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-6 rounded-3xl p-6 md:p-8"
          >
            <div className="mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#06B6D4]" />

              <span className="font-space text-lg font-semibold">
                {result.type === "solution"
                  ? "Suggested Solution"
                  : "AI Response"}
              </span>
            </div>

            {/* CHAT MODE */}
            {result.type !== "solution" && (
            <div className="text-white/80 text-lg">
              <ReactMarkdown>
                {result.message}
              </ReactMarkdown>
            </div>
            )}

            {/* SOLUTION MODE */}
            {result.type === "solution" && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40">
                    Solution
                  </div>
                  <div className="mt-1 font-space text-2xl font-semibold gradient-text">
                    {result.solution}
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40">
                    Architecture
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {result.architecture.map((a: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40">
                    Workflow
                  </div>
                  <p className="mt-1 text-white/70">
                    {result.workflow}
                  </p>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40">
                    Expected Impact
                  </div>
                  <p className="mt-1 text-white/70">
                    {result.impact}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}