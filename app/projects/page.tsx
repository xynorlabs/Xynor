

import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { getProjects } from "@/actions/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="font-space text-5xl font-bold md:text-7xl">
            Our <span className="gradient-text">work</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            A selection of systems we've built for clients across industries.
          </p>

          <div className="mt-16 space-y-4">
            {projects.length === 0 ? (
              <p className="text-white/50">Projects coming soon.</p>
            ) : (
              projects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="glass group flex items-center justify-between rounded-2xl p-6 transition-all hover:border-white/20"
                >
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/40">{p.category}</div>
                    <div className="mt-1 font-space text-2xl font-semibold">{p.title}</div>
                    <p className="mt-2 max-w-2xl text-sm text-white/60">{p.description}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
