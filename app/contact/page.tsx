"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { motion } from "framer-motion";
import { submitContact } from "@/actions/contact";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
    service: "AI Agents",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // client validation
    if (form.message.trim().length < 10) {
      setError("Message must be at least 10 characters long.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Phone number is required.");
      return;
    }

    setLoading(true);

    try {
      const res = await submitContact(form);

      if (res?.success) {
        setDone(true);

        // optional reset
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          budget: "",
          message: "",
          service: "AI Agents",
        });
      } else {
        setError(
        typeof res?.error === "string"
          ? res.error
          : "Something went wrong. Please try again."
      );
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-space text-5xl font-bold md:text-7xl">
              Let's <span className="gradient-text">talk</span>.
            </h1>
            <p className="mt-6 text-lg text-white/60">
              Tell us about your project. We'll respond within 24 hours.
            </p>
          </motion.div>

          {done ? (
            <div className="glass rounded-3xl p-12 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[#06B6D4]" />
              <h2 className="mt-6 font-space text-2xl font-semibold">
                Message received
              </h2>
              <p className="mt-2 text-white/60">
                We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-8">

              {/* ERROR */}
              {error && (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
                  {error}
                </p>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  required
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                />

                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                />
              </div>

              {/* PHONE */}
              <input
                required
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              />

              {/* COMPANY */}
              <input
                placeholder="Company"
                value={form.company}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              />

              {/* BUDGET */}
              <input
                required
                placeholder="Budget (e.g. ₹50,000 - ₹1,00,000)"
                value={form.budget}
                onChange={(e) =>
                  setForm({ ...form, budget: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              />

              {/* SERVICE */}
              <select
                value={form.service}
                onChange={(e) =>
                  setForm({ ...form, service: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                {[
                  "AI Agents",
                  "Computer Vision",
                  "Automation",
                  "Predictive Analytics",
                  "Custom Software",
                  "Consulting",
                  "Other",
                ].map((s) => (
                  <option key={s} value={s} className="bg-[#050505]">
                    {s}
                  </option>
                ))}
              </select>

              {/* MESSAGE */}
              <textarea
                required
                rows={5}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              />

              {/* BUTTON */}
              <button
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-6 py-3.5 font-medium text-white disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}