"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "AI Agents", href: "/solutions#agents" },
      { label: "Computer Vision", href: "/solutions#vision" },
      { label: "Automation", href: "/solutions#automation" },
      { label: "Consulting", href: "/solutions#consulting" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Case Studies", href: "/projects" },
      { label: "Documentation", href: "/blog" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
];

const socials = [
  { label: "Twitter", href: "https://x.com/XynorLabs" },
  { label: "LinkedIn", href: "https://linkedin.com/in/xynor-labs-4926b2416" },
  { label: "GitHub", href: "https://github.com/XynorLabs" },
  { label: "YouTube", href: "https://www.youtube.com/@xynorlabs?si=F9swCc70z2MaYIjn" },
  { label: "Instagram", href: "https://www.instagram.com/xynor_labs?utm_source=qr&igsh=dW5jOTcwbWkyMmZj" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage("✅ Successfully subscribed!");
        setEmail("");
      } else {
        setMessage(data.error || "Subscription failed.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030303] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Main grid — brand + links */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-7 w-7">
              <Image
                src="/logos/xynor_logo_options_spacex_style.png"
                alt="Xynor Labs"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-space text-base font-semibold tracking-tight">
              Xynor<span className="text-white/50">Labs</span>
            </span>
          </Link>

            <p className="mt-4 max-w-sm text-sm text-white/50">
              AI Engineering Company. Building intelligent systems for the
              next generation of businesses.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition hover:border-white/20 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <div className="font-space text-sm font-semibold">
                {section.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter bar */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-white/[0.03] to-cyan-500/10 p-px">
          <div className="rounded-2xl bg-[#0a0a0a] px-6 py-6 sm:px-10 sm:py-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="shrink-0">
                <p className="font-space text-base font-semibold text-white">
                  Stay ahead of the curve
                </p>
                <p className="mt-1 text-sm text-white/40">
                  AI insights, project updates &amp; tech trends — no spam, ever.
                </p>
              </div>

              <form
                onSubmit={handleSubscribe}
                className="flex w-full flex-col gap-2 sm:max-w-md sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-cyan-500 focus:bg-white/[0.07]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="shrink-0 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? "Subscribing…" : "Subscribe →"}
                </button>
              </form>
            </div>

            {message && (
              <p className="mt-4 text-xs text-green-400">{message}</p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Xynor Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="privacy" className="hover:text-white">Privacy</a>
            <a href="terms" className="hover:text-white">Terms</a>
            <a href="security" className="hover:text-white">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}