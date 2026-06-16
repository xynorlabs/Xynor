
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { AICore } from "@/components/ai-core/ai-core";
import { Ecosystem } from "@/components/ecosystem/ecosystem";
import { BentoGrid } from "@/components/bento-grid/bento-grid";
import { Founders } from "@/components/founders/founders";
import { Playground } from "@/components/playground/playground";
import { CaseStudies } from "@/components/case-studies/case-studies";
import { TechStack } from "@/components/tech-stack/tech-stack";
import { EnterpriseCTA } from "@/components/enterprise-cta/enterprise-cta";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AICore />
      <Ecosystem />
      <BentoGrid />
      <Founders />
      <Playground />
      <CaseStudies />
      <TechStack />
      <EnterpriseCTA />
      <Footer />
    </main>
  );
}
