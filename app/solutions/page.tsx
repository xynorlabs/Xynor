
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { BentoGrid } from "@/components/bento-grid/bento-grid";
import { EnterpriseCTA } from "@/components/enterprise-cta/enterprise-cta";

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-space text-5xl font-bold md:text-7xl">
            Solutions that <span className="gradient-text">scale</span>.
          </h1>
          <p className="mt-6 text-lg text-white/60">
            From AI agents to computer vision — we engineer systems that drive measurable business outcomes.
          </p>
        </div>
      </section>
      <BentoGrid />
      <EnterpriseCTA />
      <Footer />
    </main>
  );
}
