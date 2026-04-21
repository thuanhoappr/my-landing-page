/** Cấu hình công khai — đặt trong .env.local (NEXT_PUBLIC_...) */

function trimEnv(value: string | undefined) {
  return (value ?? "").trim();
}

export const SITE_BRAND = "Pickleball 30 Phút";
export const SITE_TAGLINE = "Học Nhanh Chơi Chất";
export const SITE_COACH_LINE =
  "Hướng dẫn Thực chiến Pickleball cùng Coach PPR (USA)";

/** SĐT Zalo Coach — override bằng NEXT_PUBLIC_ADMIN_PHONE / ZALO_* trong .env.local */
const DEFAULT_COACH_PHONE_DIGITS = "0919117687";
const DEFAULT_COACH_ZALO_CHAT = `https://zalo.me/${DEFAULT_COACH_PHONE_DIGITS}`;

export function getSitePublicConfig() {
  const adminPhoneRaw =
    trimEnv(process.env.NEXT_PUBLIC_ADMIN_PHONE) || DEFAULT_COACH_PHONE_DIGITS;
  const zaloOaUrl =
    trimEnv(process.env.NEXT_PUBLIC_ZALO_OA_URL) || DEFAULT_COACH_ZALO_CHAT;
  const zaloGroupUrl =
    trimEnv(process.env.NEXT_PUBLIC_ZALO_GROUP_URL) || zaloOaUrl;

  return {
    adminPhoneRaw,
    zaloGroupUrl,
    zaloOaUrl,
  };
}

/** Hiển thị SĐT (khoảng trắng), không đổi số gốc để copy */
export function formatPhoneDisplay(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.length <= 4) return raw;
  if (digits.startsWith("84") && digits.length >= 10) {
    const rest = digits.slice(2);
    return `+84 ${rest.slice(0, 2)} ${rest.slice(2, 5)} ${rest.slice(5)}`.trim();
  }
  if (digits.startsWith("0")) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`.trim();
  }
  return raw;
}
