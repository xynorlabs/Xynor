

"use server";
import { prisma } from ".././lib/prisma";
import { LeadSchema, type LeadInput } from ".././lib/validations";

export async function createLead(data: LeadInput) {
  const parsed = LeadSchema.safeParse(data);
  if (!parsed.success) return { success: false, error: parsed.error.flatten().fieldErrors };

  try {
    const lead = await prisma.lead.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      problem: parsed.data.problem,
      source: parsed.data.source,
    },
  });
    return { success: true, id: lead.id };
  } catch {
    return { success: false, error: "Failed to create lead" };
  }
}
