

import { Navbar } from "@/components/navbar/navbar";
import { prisma } from "@/lib/prisma";
import { TrendingUp, Users, FileText, Mail } from "lucide-react";

export default async function DashboardPage() {
  const [leads, contacts, blogs, subscribers] = await Promise.all([
    prisma.lead.count(),
    prisma.contact.count(),
    prisma.blog.count({ where: { published: true } }),
    prisma.newsletter.count({ where: { active: true } }),
  ]);

  const stats = [
    { label: "Total Leads", value: leads, icon: Users, color: "from-[#6366F1] to-[#8B5CF6]" },
    { label: "Contacts", value: contacts, icon: Mail, color: "from-[#06B6D4] to-[#6366F1]" },
    { label: "Published Blogs", value: blogs, icon: FileText, color: "from-[#8B5CF6] to-[#EC4899]" },
    { label: "Subscribers", value: subscribers, icon: TrendingUp, color: "from-[#10B981] to-[#06B6D4]" },
  ];

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-space text-4xl font-bold">Dashboard</h1>
          <p className="mt-2 text-white/50">Overview of platform activity</p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-6">
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.color}`}>
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <div className="font-space text-3xl font-bold">{s.value}</div>
                <div className="mt-1 text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}  