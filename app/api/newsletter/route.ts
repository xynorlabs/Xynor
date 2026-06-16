

import { NextResponse } from "next/server";
import { subscribeNewsletter } from "@/actions/newsletter";

export async function POST(req: Request) {
  const { email } = await req.json();
  const result = await subscribeNewsletter({ email });
  return NextResponse.json(result, { status: result.success ? 200 : 400 });
}
