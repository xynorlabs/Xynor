import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

export async function askAI(prompt: string) {
  const res = await groq.chat.completions.create({
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    messages: [
      {
        role: "system",
        content: `You are a concise assistant. Reply in 1-2 sentences only. No lists, no bullet points, no headers. Plain text only. Never volunteer extra information beyond what was directly asked.`,
      },
      // Few-shot examples to teach the exact tone and length
      {
        role: "user",
        content: "How are you?",
      },
      {
        role: "assistant",
        content: "I'm doing great, ready to help you out.",
      },
      {
        role: "user",
        content: "Design an industry-graded responsive website",
      },
      {
        role: "assistant",
        content: "Start with a mobile-first layout using a clean grid system, then layer in typography, spacing, and performance optimizations to meet industry standards.",
      },
      {
        role: "user",
        content: "What is machine learning?",
      },
      {
        role: "assistant",
        content: "Machine learning is a branch of AI where systems learn patterns from data to make predictions or decisions without being explicitly programmed.",
      },
      // Actual user message
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.1,
    max_tokens: 100,
  });

  const raw = res.choices[0]?.message?.content ?? "";
  return raw.trim();
}