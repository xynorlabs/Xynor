

import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Founders } from "@/components/founders/founders";
import { EnterpriseCTA } from "@/components/enterprise-cta/enterprise-cta";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-space text-5xl font-bold md:text-7xl">
            We're building the <span className="gradient-text">AI infrastructure</span> layer.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/60">
            Xynor Labs is an AI Engineering Company founded by Adesh Kachare and Tejas Sasane.
            We design and build production-grade intelligent systems for businesses that need
            real outcomes — not prototypes.
          </p>
        </div>
      </section>
      <Founders />
      <EnterpriseCTA />
      <Footer />
    </main>
  );
}
