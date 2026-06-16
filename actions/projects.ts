
"use server";
import { prisma } from "@/lib/prisma";

export async function getProjects(opts?: { featured?: boolean; limit?: number }) {
  return prisma.project.findMany({
    where: { published: true, ...(opts?.featured && { featured: true }) },
    orderBy: { createdAt: "desc" },
    take: opts?.limit,
    include: { metrics: true },
  });
}

export async function getProject(slug: string) {
  return prisma.project.findUnique({
    where: { slug },
    include: { metrics: true, author: true },
  });
}
