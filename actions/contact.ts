"use server";
import { prisma } from "../lib/prisma";
import { ContactSchema, type ContactInput } from "../lib/validations";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function submitContact(data: ContactInput) {
  const parsed = ContactSchema.safeParse(data);

  console.log("FORM DATA RECEIVED:", data);//changes
  console.log("PARSED RESULT:", parsed);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    console.log("Received Data:", parsed.data);

    const contact = await prisma.contact.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company,
        phone: parsed.data.phone,
        message: parsed.data.message,
        budget: parsed.data.budget,
        service: parsed.data.service,
      },
    });

    console.log("Inserted Contact:", contact);

    return { success: true };
  } catch (error) {
    console.error("DATABASE ERROR:", error);

    return {
      success: false,
      error: "Failed to submit. Try again.",
    };
  }
}