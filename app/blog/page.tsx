
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default async function BlogPage() {
  const posts = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 20,
    include: { author: true },
  });

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="font-space text-5xl font-bold md:text-7xl">
            <span className="gradient-text">Insights</span> & writing.
          </h1>
          <div className="mt-16 space-y-3">
            {posts.length === 0 ? (
              <p className="text-white/50">Articles coming soon.</p>
            ) : (
              posts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="glass block rounded-2xl p-6 hover:border-white/20">
                  <div className="text-xs text-white/40">{formatDate(p.createdAt)}</div>
                  <div className="mt-1 font-space text-2xl font-semibold">{p.title}</div>
                  <p className="mt-2 text-sm text-white/60">{p.excerpt}</p>
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
