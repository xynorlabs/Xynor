export function buildPrompt(context: any[], memory: any[], query: string) {
  return `
You are a production-grade hospital AI assistant.

RULES:
- Use ONLY provided context
- Be accurate and safe
- If unsure → suggest doctor visit

CONTEXT:
${context.map((c) => c.text).join("\n")}

CHAT HISTORY:
${memory.map((m) => m.content).join("\n")}

USER QUESTION:
${query}

Answer:
`;
}