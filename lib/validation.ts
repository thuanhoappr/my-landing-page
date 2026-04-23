const WINDOW_MS = 60 * 1000;
const LIMIT_PER_WINDOW = 6;

type RateEntry = {
  count: number;
  startAt: number;
};

const rateStore = new Map<string, RateEntry>();

type LeadInput = {
  fullName: string;
  phone: string;
  experience: string;
  obstacle: string;
  goal: string;
  pageUrl?: string;
  companyWebsite?: string;
};

type ZaloInput = {
  phone: string;
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

/** SĐT VN: cho phép dấu cách, +84, tối thiểu 9 chữ số */
function isVietnamesePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("84") && digits.length >= 11) return true;
  if (digits.startsWith("0") && digits.length >= 9 && digits.length <= 11)
    return true;
  return digits.length >= 9 && digits.length <= 11;
}

export function validateLeadInput(input: unknown):
  | { ok: true; data: LeadInput }
  | { ok: false; message: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, message: "Dữ liệu gửi lên không hợp lệ." };
  }

  const body = input as Record<string, unknown>;
  const fullName = String(body.fullName ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const experience = String(body.experience ?? "").trim();
  const obstacle = String(body.obstacle ?? "").trim();
  const goal = String(body.goal ?? "").trim();
  const pageUrl = String(body.pageUrl ?? "").trim();
  const companyWebsite = String(body.companyWebsite ?? "").trim();

  if (companyWebsite.length > 0) {
    return { ok: false, message: "Yêu cầu bị từ chối." };
  }
  if (fullName.length < 2) {
    return { ok: false, message: "Vui lòng nhập tên hoặc nickname." };
  }
  if (!phone || !isVietnamesePhone(phone)) {
    return {
      ok: false,
      message: "Vui lòng nhập số điện thoại hợp lệ (Zalo/SĐT).",
    };
  }
  if (!experience) {
    return { ok: false, message: "Vui lòng chọn kinh nghiệm của bạn." };
  }
  if (!goal) {
    return { ok: false, message: "Vui lòng chọn mong muốn của bạn." };
  }

  return {
    ok: true,
    data: {
      fullName,
      phone,
      experience,
      obstacle,
      goal,
      pageUrl,
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
  const phone = String(body.phone ?? "").trim();
  const zalo = String(body.zalo ?? "").trim();

  if (!phone || !isVietnamesePhone(phone)) {
    return { ok: false, message: "Số điện thoại không hợp lệ." };
  }
  if (zalo.length < 2) {
    return { ok: false, message: "Vui lòng nhập Zalo." };
  }

  return { ok: true, data: { phone, zalo } };
}

export function buildLeadPayload(data: LeadInput, request: Request) {
  return {
    event: "lead_create",
    submittedAt: new Date().toISOString(),
    fullName: data.fullName,
    phone: data.phone,
    experience: data.experience,
    obstacle: data.obstacle,
    goal: data.goal,
    stage: "New",
    source: "pickleball30phut-landing",
    pageUrl: data.pageUrl || request.headers.get("origin") || "/",
  };
}

export function buildZaloPayload(data: ZaloInput) {
  return {
    event: "zalo_update",
    submittedAt: new Date().toISOString(),
    phone: data.phone,
    zalo: data.zalo,
    stage: "New",
    source: "pickleball30phut-landing",
    pageUrl: "/thank-you",
  };
}
