import { NextResponse } from "next/server";
import {
  buildZaloPayload,
  getClientIp,
  rateLimitByIp,
  validateZaloInput,
} from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!rateLimitByIp(ip, "zalo")) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = validateZaloInput(body);
    if (!parsed.ok) {
      return NextResponse.json(
        { ok: false, message: parsed.message },
        { status: 400 },
      );
    }

    const endpoint =
      process.env.FORMSPREE_ZALO_URL ?? process.env.FORMSPREE_LEAD_URL;
    if (!endpoint) {
      return NextResponse.json(
        {
          ok: false,
          message: "Missing FORMSPREE_ZALO_URL or FORMSPREE_LEAD_URL env.",
        },
        { status: 500 },
      );
    }

    const payload = buildZaloPayload(parsed.data);
    const encoded = new URLSearchParams(payload).toString();

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encoded,
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "Failed to update Zalo." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unexpected server error." },
      { status: 500 },
    );
  }
}
