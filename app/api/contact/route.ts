

import { NextResponse } from "next/server";
import { submitContact } from "@/actions/contact";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await submitContact(body);
  return NextResponse.json(result, { status: result.success ? 200 : 400 });
}
