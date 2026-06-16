
import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budget: z.string().optional(),
  service: z.string().optional(),
});

export const NewsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  problem: z.string().min(20),
  source: z.string().optional(),
});

export const ProjectSchema = z.object({
  title: z.string().min(3),
  slug: z.string(),
  description: z.string(),
  category: z.string(),
  tech: z.array(z.string()),
  image: z.string().optional(),
  link: z.string().optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
});

export const BlogSchema = z.object({
  title: z.string().min(3),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  coverImage: z.string().optional(),
  tags: z.array(z.string()),
  published: z.boolean().default(false),
  authorId: z.string(),
});

export type ContactInput = z.infer<typeof ContactSchema>;
export type NewsletterInput = z.infer<typeof NewsletterSchema>;
export type LeadInput = z.infer<typeof LeadSchema>;
