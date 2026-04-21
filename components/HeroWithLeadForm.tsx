"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  SITE_BRAND,
  SITE_COACH_LINE,
  SITE_TAGLINE,
  formatPhoneDisplay,
  getSitePublicConfig,
} from "@/lib/siteConfig";

type LeadFormData = {
  fullName: string;
  email: string;
  phone: string;
  goal: string;
  note: string;
  pageUrl: string;
  consent: boolean;
  companyWebsite: string;
};

const GOAL_CHOICES: { value: string; label: string }[] = [
  {
    value: "Tập thử miễn phí (có vợt sẵn)",
    label: "Tập thử miễn phí (có vợt)",
  },
  {
    value: "Mua khóa học ưu đãi 99K",
    label: "Mua khóa học ưu đãi 99K",
  },
  {
    value: "Muốn xem giáo trình tập online trước khi quyết định",
    label: "Xem giáo trình / tư vấn thêm",
  },
];

export function HeroWithLeadForm() {
  const router = useRouter();
  const { adminPhoneRaw, zaloOaUrl } = getSitePublicConfig();
  const adminTelHref =
    adminPhoneRaw.length > 0
      ? `tel:${adminPhoneRaw.replace(/\s/g, "")}`
      : null;
  const adminPhoneLabel =
    adminPhoneRaw.length > 0 ? formatPhoneDisplay(adminPhoneRaw) : null;

  const [form, setForm] = useState<LeadFormData>({
    fullName: "",
    email: "",
    phone: "",
    goal: GOAL_CHOICES[0].value,
    note: "",
    pageUrl: "",
    consent: true,
    companyWebsite: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const pillars = useMemo(
    () => [
      "Giáo trình thực chiến: bỏ lý thuyết rườm rà, tập trung đánh được ngay.",
      "Thời gian linh hoạt: trưa, tối hoặc cuối tuần — tùy lịch rảnh của bạn.",
      "HLV tận tâm: chỉnh từng dáng đứng, cách vung vợt, tránh tập sai tư thế.",
      "An toàn: đúng kỹ thuật từ đầu — hạn chế chấn thương khi vận động lại.",
    ],
    [],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          pageUrl:
            typeof window !== "undefined"
              ? window.location.href
              : "http://localhost:3000/",
        }),
      });
      const data = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setError(
          data.message ??
            "Không gửi được thông tin. Vui lòng thử lại trong giây lát.",
        );
        return;
      }

      router.push("/thank-you");
    } catch {
      setError("Không kết nối được máy chủ. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="lead-form" className="px-4 pb-12 pt-10 md:pb-16 md:pt-14">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-10">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-300 drop-shadow-md">
            {SITE_BRAND} · {SITE_TAGLINE}
          </p>
          <h1 className="landing-heading text-3xl leading-tight md:text-5xl md:leading-tight">
            Muốn tập Pickleball nhưng bận rộn, chưa có thời gian ra sân?
          </h1>
          <p className="landing-lead text-lg leading-relaxed">
            {SITE_COACH_LINE}. Khóa{" "}
            <strong className="font-semibold text-emerald-200">
              &quot;Nhập Môn Tốc Độ&quot;
            </strong>{" "}
            dành cho người đi làm: tập đúng kỹ thuật ngay từ đầu — tránh chấn
            thương — tự tin ra sân giao lưu cùng đồng nghiệp, bạn bè.
          </p>

          <div className="grid grid-cols-3 gap-2 text-center sm:gap-3">
            <div className="glass-panel px-2 py-3 sm:px-3">
              <p className="text-lg font-bold text-emerald-300 sm:text-xl">100+</p>
              <p className="text-[10px] text-slate-300 sm:text-xs">
                Học viên tốt nghiệp
              </p>
            </div>
            <div className="glass-panel px-2 py-3 sm:px-3">
              <p className="text-lg font-bold text-emerald-300 sm:text-xl">100%</p>
              <p className="text-[10px] text-slate-300 sm:text-xs">
                Tự tin ra sân
              </p>
            </div>
            <div className="glass-panel px-2 py-3 sm:px-3">
              <p className="text-lg font-bold text-emerald-300 sm:text-xl">5★</p>
              <p className="text-[10px] text-slate-300 sm:text-xs">
                Đánh giá chất lượng
              </p>
            </div>
          </div>

          <p className="rounded-lg border border-emerald-400/35 bg-emerald-950/40 p-3 text-sm leading-relaxed text-emerald-50 shadow-lg backdrop-blur-md">
            <strong className="font-semibold text-emerald-100">
              Làm chủ kiến thức tập luyện cơ bản
            </strong>{" "}
            chỉ sau vài buổi — cam kết thông tin đơn giản, dễ hiểu để bạn tự tin
            nhập môn.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {adminTelHref && adminPhoneLabel ? (
              <a
                href={adminTelHref}
                className="rounded-lg border border-white/20 bg-black/35 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:border-emerald-400/40"
              >
                Gọi / SMS: {adminPhoneLabel}
              </a>
            ) : null}
            <a
              href={zaloOaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-400 px-3 py-2 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-emerald-300"
            >
              Chat Zalo
            </a>
          </div>

          <div className="glass-panel p-4 md:p-5">
            <p className="mb-3 text-sm font-semibold text-white">
              Khóa &quot;Nhập Môn Tốc Độ&quot; — bạn nhận được gì?
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-100">
              {pillars.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-panel-lg h-fit border-white/20 p-4 shadow-2xl sm:p-5"
        >
          <div className="border-b border-white/10 pb-3">
            <h2 className="text-base font-semibold leading-snug text-white drop-shadow-md sm:text-lg">
              Đăng ký ngay — nhận buổi tập thử miễn phí
            </h2>
            <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
              Có sẵn vợt · Thông tin bảo mật — chúng tôi không spam.
            </p>
          </div>

          <div className="mt-4 space-y-3">
            <Input
              label="Tên / Nickname *"
              value={form.fullName}
              onChange={(value) => setForm((prev) => ({ ...prev, fullName: value }))}
              required
              compact
            />

            <Input
              label="Điện thoại *"
              value={form.phone}
              onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
              placeholder="VD: 0912345678"
              required
              compact
            />

            <Input
              label="Email *"
              type="email"
              value={form.email}
              onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
              required
              compact
            />

            <label className="block">
              <span className="mb-0.5 block text-xs font-medium text-slate-200">
                Bạn muốn *
              </span>
              <select
                value={form.goal}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, goal: event.target.value }))
                }
                className="w-full rounded-md border border-white/15 bg-black/40 px-2.5 py-2 text-sm text-slate-50 outline-none ring-emerald-400/50 backdrop-blur-sm focus:ring-2"
                required
              >
                {GOAL_CHOICES.map(({ value, label }) => (
                  <option
                    key={value}
                    value={value}
                    className="bg-slate-900 text-slate-100"
                  >
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <details className="rounded-md border border-white/10 bg-black/20 px-2 py-1.5 backdrop-blur-sm">
              <summary className="cursor-pointer select-none text-xs font-medium text-slate-300 hover:text-slate-100">
                Ghi chú (tuỳ chọn)
              </summary>
              <textarea
                value={form.note}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, note: event.target.value }))
                }
                rows={2}
                className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-2 py-1.5 text-xs text-slate-50 placeholder:text-slate-500 outline-none focus:ring-1 focus:ring-emerald-400/50"
                placeholder="Giờ rảnh, khu vực, mức độ đã chơi…"
              />
            </details>

            <label className="flex items-center gap-2 text-xs text-slate-200">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, consent: event.target.checked }))
                }
                className="shrink-0"
              />
              Đồng ý nhận thông tin từ khóa học
            </label>

            <input
              type="text"
              value={form.companyWebsite}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, companyWebsite: event.target.value }))
              }
              autoComplete="off"
              tabIndex={-1}
              className="hidden"
              aria-hidden="true"
            />

            {error ? (
              <p className="rounded-md bg-rose-950/50 px-2 py-1.5 text-xs leading-snug text-rose-200 ring-1 ring-rose-500/30">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-emerald-400 px-3 py-2.5 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-300"
            >
              {isSubmitting ? "Đang gửi…" : "Gửi đăng ký"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  compact = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  compact?: boolean;
}) {
  return (
    <label className="block">
      <span
        className={
          compact
            ? "mb-0.5 block text-xs font-medium text-slate-200"
            : "mb-1 block text-sm font-medium text-slate-100"
        }
      >
        {label}
      </span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={
          compact
            ? "w-full rounded-md border border-white/15 bg-black/40 px-2.5 py-2 text-sm text-slate-50 outline-none ring-emerald-400/50 backdrop-blur-sm placeholder:text-slate-500 focus:ring-2"
            : "w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/50 backdrop-blur-sm focus:ring-2"
        }
        required={required}
      />
    </label>
  );
}
