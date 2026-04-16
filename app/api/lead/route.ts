import { NextResponse } from "next/server";
import {
  buildLeadPayload,
  getClientIp,
  rateLimitByIp,
  validateLeadInput,
} from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!rateLimitByIp(ip, "lead")) {
      return NextResponse.json(
        {
          ok: false,
          message: "Bạn gửi quá nhiều yêu cầu. Vui lòng thử lại sau ít phút.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = validateLeadInput(body);
    if (!parsed.ok) {
      return NextResponse.json(
        { ok: false, message: parsed.message },
        { status: 400 },
      );
    }

    const endpoint = process.env.FORMSPREE_LEAD_URL;
    if (!endpoint) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Máy chủ chưa cấu hình FORMSPREE_LEAD_URL. Vui lòng liên hệ quản trị.",
        },
        { status: 500 },
      );
    }

    const payload = buildLeadPayload(parsed.data, request);
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
        { ok: false, message: "Không lưu được thông tin. Vui lòng thử lại sau." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Đã xảy ra lỗi máy chủ. Vui lòng thử lại sau." },
      { status: 500 },
    );
  }
}
