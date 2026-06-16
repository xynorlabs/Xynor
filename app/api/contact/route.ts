import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // move logic here OR import SAFE function only
    const result = {
      success: true,
      message: "Contact received",
    };

    return NextResponse.json(result, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}