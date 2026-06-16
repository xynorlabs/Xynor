
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 transition-all duration-500",
          scrolled ? "top-2" : "top-4"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between rounded-full border border-white/10 px-6 py-3 transition-all duration-500",
            scrolled ? "glass-strong shadow-2xl" : "bg-white/5 backdrop-blur-md"
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-7 w-7">
              <div className="absolute inset-0 rotate-45 rounded-md bg-gradient-to-br from-[#6366F1] to-[#06B6D4]" />
              <div className="absolute inset-1 rotate-45 rounded bg-[#050505]" />
            </div>
            <span className="font-space text-base font-semibold tracking-tight">
              Xynor<span className="text-white/50">Labs</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] sm:flex"
            >
              Get Started
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="rounded-full p-2 text-white/80 hover:bg-white/5 md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-1/2 top-20 z-40 w-[95%] max-w-md -translate-x-1/2 rounded-2xl border border-white/10 bg-[#050505]/95 p-4 backdrop-blur-2xl md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-white/80 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-black"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
