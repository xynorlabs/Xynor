"use server";

import { prisma } from "@/lib/prisma";
import { NewsletterSchema, type NewsletterInput } from "@/lib/validations";
import { revalidatePath } from "next/cache";

export async function subscribeNewsletter(data: NewsletterInput) {
  try {
    const parsed = NewsletterSchema.safeParse(data);

    if (!parsed.success) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      };
    }

    await prisma.newsletter.upsert({
      where: {
        email: parsed.data.email,
      },
      update: {
        active: true,
      },
      create: {
        email: parsed.data.email,
        active: true,
      },
    });

    // Refresh pages that display subscriber count
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Successfully subscribed.",
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    return {
      success: false,
      error: "Failed to subscribe. Please try again.",
    };
  }
}