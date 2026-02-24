import { NextResponse } from "next/server";
import { validateNegative } from "../../../../lib/negativity";

export async function POST(request: Request) {
  const { text } = (await request.json()) as { text?: string };

  if (!text || text.trim().length < 3) {
    return NextResponse.json({ ok: false, reason: "too-short" }, { status: 400 });
  }

  const result = validateNegative(text);
  return NextResponse.json(result);
}
