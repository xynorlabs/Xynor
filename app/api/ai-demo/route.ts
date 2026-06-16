import { NextResponse } from "next/server";
import { webSearch } from "@/lib/webSearch";
import { askAI } from "@/lib/llm";

export async function POST(req: Request) {
  try {
    const { problem } = await req.json();

    if (!problem) {
      return NextResponse.json({ error: "No input" }, { status: 400 });
    }

    // 1. SEARCH INTERNET
    const webContext = await webSearch(problem);

    // 2. BUILD PROMPT
    const prompt = `You are a sharp, direct AI assistant. Answer in plain conversational prose only.

STRICT RULES — never break these:
- NEVER use bullet points, numbered lists, or dashes
- NEVER use headers or bold text
- NEVER mention your own capabilities, availability, or system status
- For greetings like "how are you", reply in one short sentence only
- For technical or business questions, give a focused 2-4 sentence answer in plain prose
- Do not pad the answer with extra context the user did not ask for

WEB CONTEXT (use only if directly relevant):
${webContext}

USER MESSAGE:
${problem}

Reply now in plain prose, no lists, no formatting:`;

    // 3. GET AI RESPONSE
    const answer = await askAI(prompt);

    return NextResponse.json({
      message: answer,
      sources: webContext,
    });
  } catch (err: any) {
    return NextResponse.json({
      message: "AI failed",
      error: err?.message,
    });
  }
}