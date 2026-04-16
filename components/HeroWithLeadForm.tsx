"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

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

const GOAL_OPTIONS = [
  "Bắt đầu từ con số 0",
  "Cải thiện kỹ năng đánh đôi căn bản",
  "Biết cách lên lưới và giữ đội hình",
  "Phối hợp với bạn đánh tốt hơn",
  "Chuẩn bị đi tập với Coach hiệu quả",
];

export function HeroWithLeadForm() {
  const router = useRouter();
  const [form, setForm] = useState<LeadFormData>({
    fullName: "",
    email: "",
    phone: "",
    goal: GOAL_OPTIONS[0],
    note: "",
    pageUrl: "",
    consent: true,
    companyWebsite: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const headlineOptions = useMemo(
    () => [
      "Đánh đôi Pickleball không còn rối: học online, ra sân tập trung vào điều quan trọng",
      "Người bận rộn vẫn tiến bộ ở đánh đôi: lộ trình online trước, Coach tối ưu sau",
      "Ra sân có kế hoạch rõ ràng: học đúng thứ cần cho đánh đôi",
      "Không cần tập nhiều, chỉ cần tập đúng: Coach-Ready cho người ít thời gian",
      "Từ mơ hồ đến tự tin đánh đôi: chuẩn bị online để vào sân thực hành nhanh",
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
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-emerald-300">
            Pickleball Coach-Ready
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Pickleball Coach-Ready: Học online để ra sân tập hiệu quả
          </h1>
          <p className="text-lg text-slate-300">
            Định vị: Pickleball đánh đôi cho người bận rộn; học online để ra sân
            tập trực tiếp cùng Coach hiệu quả hơn.
          </p>
          <p className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-200">
            Học online trước để buổi ra sân với Coach đi thẳng vào thực hành.
          </p>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="mb-3 text-sm font-semibold text-slate-200">
              Năm phương án tiêu đề chính (headline)
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
              {headlineOptions.map((headline) => (
                <li key={headline}>{headline}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-slate-200">
              Hai phương án tiêu đề phụ (sub-headline)
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>
                Dành cho người mới và người bận rộn: học 15–20 phút mỗi ngày, ra
                sân có checklist rõ ràng.
              </li>
              <li>
                Tập trung vào đánh đôi thực chiến: serve, return, lên lưới, phối
                hợp hai người và chiến thuật tối giản.
              </li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl"
        >
          <h2 className="mb-4 text-xl font-semibold">
            Đăng ký nhận lộ trình và quà tặng
          </h2>
          <div className="space-y-4">
            <Input
              label="Họ và tên *"
              value={form.fullName}
              onChange={(value) => setForm((prev) => ({ ...prev, fullName: value }))}
              required
            />
            <Input
              label="Email *"
              type="email"
              value={form.email}
              onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
              required
            />
            <Input
              label="Điện thoại (tùy chọn)"
              value={form.phone}
              onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
            />

            <label className="block">
              <span className="mb-1 block text-sm text-slate-200">
                Mục tiêu của bạn *
              </span>
              <select
                value={form.goal}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, goal: event.target.value }))
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none ring-emerald-400/40 focus:ring"
                required
              >
                {GOAL_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-sm text-slate-200">
                Ghi chú (tùy chọn)
              </span>
              <textarea
                value={form.note}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, note: event.target.value }))
                }
                rows={3}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none ring-emerald-400/40 focus:ring"
                placeholder="Mục tiêu cụ thể hoặc khó khăn hiện tại của bạn…"
              />
            </label>

            <label className="flex items-start gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, consent: event.target.checked }))
                }
                className="mt-0.5"
              />
              Tôi đồng ý nhận hướng dẫn và thông tin từ khóa học.
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

            {error ? <p className="text-sm text-rose-300">{error}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-emerald-400 px-4 py-2 font-semibold text-slate-900 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-300"
            >
              {isSubmitting ? "Đang gửi…" : "Đăng ký ngay"}
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
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-slate-200">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none ring-emerald-400/40 focus:ring"
        required={required}
      />
    </label>
  );
}
