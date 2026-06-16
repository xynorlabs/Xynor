const memoryStore: Record<string, any[]> = {};

export function addMemory(userId: string, message: string) {
  if (!memoryStore[userId]) memoryStore[userId] = [];

  memoryStore[userId].push({
    role: "user",
    content: message,
    time: Date.now(),
  });

  // keep last 10 messages only
  memoryStore[userId] = memoryStore[userId].slice(-10);
}

export function getMemory(userId: string) {
  return memoryStore[userId] || [];
}