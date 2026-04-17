const WINDOW_MS = 60 * 1000;
const LIMIT_PER_WINDOW = 6;

type RateEntry = {
  count: number;
  startAt: number;
};

const rateStore = new Map<string, RateEntry>();

type LeadInput = {
  fullName: string;
  email: string;
  phone?: string;
  goal: string;
  note?: string;
  pageUrl?: string;
  consent?: boolean;
  companyWebsite?: string;
};

type ZaloInput = {
  email: string;
  zalo: string;
};

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  return "unknown";
}

export function rateLimitByIp(ip: string, path: string) {
  const key = `${path}:${ip}`;
  const now = Date.now();
  const current = rateStore.get(key);

  if (!current || now - current.startAt > WINDOW_MS) {
    rateStore.set(key, { count: 1, startAt: now });
    return true;
  }

  if (current.count >= LIMIT_PER_WINDOW) {
    return false;
  }

  current.count += 1;
  rateStore.set(key, current);
  return true;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateLeadInput(input: unknown):
  | { ok: true; data: LeadInput }
  | { ok: false; message: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, message: "Dữ liệu gửi lên không hợp lệ." };
  }

  const body = input as Record<string, unknown>;
  const fullName = String(body.fullName ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const phone = String(body.phone ?? "").trim();
  const goal = String(body.goal ?? "").trim();
  const note = String(body.note ?? "").trim();
  const pageUrl = String(body.pageUrl ?? "").trim();
  const consent = Boolean(body.consent ?? true);
  const companyWebsite = String(body.companyWebsite ?? "").trim();

  if (companyWebsite.length > 0) {
    return { ok: false, message: "Yêu cầu bị từ chối." };
  }
  if (fullName.length < 2) {
    return { ok: false, message: "Vui lòng nhập tên hoặc nickname." };
  }
  if (!isEmail(email)) {
    return { ok: false, message: "Email không hợp lệ." };
  }
  if (!goal) {
    return { ok: false, message: "Vui lòng chọn mục tiêu." };
  }
  if (!consent) {
    return { ok: false, message: "Vui lòng đồng ý nhận thông tin từ khóa học." };
  }

  return {
    ok: true,
    data: {
      fullName,
      email,
      phone,
      goal,
      note,
      pageUrl,
      consent,
      companyWebsite,
    },
  };
}

export function validateZaloInput(input: unknown):
  | { ok: true; data: ZaloInput }
  | { ok: false; message: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, message: "Dữ liệu gửi lên không hợp lệ." };
  }

  const body = input as Record<string, unknown>;
  const email = String(body.email ?? "").trim().toLowerCase();
  const zalo = String(body.zalo ?? "").trim();

  if (!isEmail(email)) {
    return { ok: false, message: "Email không hợp lệ." };
  }
  if (zalo.length < 2) {
    return { ok: false, message: "Vui lòng nhập Zalo." };
  }

  return { ok: true, data: { email, zalo } };
}

export function buildLeadPayload(data: LeadInput, request: Request) {
  return {
    event: "lead_create",
    submittedAt: new Date().toISOString(),
    fullName: data.fullName,
    email: data.email,
    phone: data.phone ?? "",
    zalo: "",
    goal: data.goal,
    stage: "New",
    source: "landing-coach-ready",
    pageUrl: data.pageUrl || request.headers.get("origin") || "/",
    note: data.note ?? "",
    consent: "yes",
  };
}

export function buildZaloPayload(data: ZaloInput) {
  return {
    event: "zalo_update",
    submittedAt: new Date().toISOString(),
    email: data.email,
    zalo: data.zalo,
    stage: "New",
    source: "landing-coach-ready",
    pageUrl: "/thank-you",
  };
}
