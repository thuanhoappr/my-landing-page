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

/** `value` gửi Formspree/Make giữ nguyên; `label` chỉ để hiển thị gọn trong select */
const GOAL_CHOICES: { value: string; label: string }[] = [
  {
    value: "Mình mới cầm vợt — muốn vào sân mà không ngại ngùng",
    label: "Mới chơi — vào sân không ngại",
  },
  {
    value: "Đánh được rồi nhưng đánh đôi vẫn rối, muốn gọn lại từng bước",
    label: "Đánh đôi rối — cần gọn từng bước",
  },
  {
    value: "Muốn lên lưới đúng lúc, đỡ hụt hơi và đỡ đứng sai chỗ",
    label: "Lên lưới đúng lúc, đỡ mất sức",
  },
  {
    value: "Muốn ăn ý với bạn đánh — ít la hét, nhiều điểm hơn",
    label: "Ăn ý đồng đội — ít ồn, nhiều điểm",
  },
  {
    value: "Sắp tập với Coach — muốn buổi đó vào game luôn, không mất nửa giờ làm quen",
    label: "Sắp gặp Coach — vào game luôn",
  },
];

export function HeroWithLeadForm() {
  const router = useRouter();
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

  const headlineOptions = useMemo(
    () => [
      "Đánh đôi không còn kiểu “đánh cho vui rồi thua vì rối” — bạn biết mình đang làm gì trên sân.",
      "Bận nhưng vẫn tiến bộ: học online gọn, ra sân là có việc để làm, không lãng phí buổi tập.",
      "Không cần tập nhiều — chỉ cần tập đúng thứ khiến điểm số đôi của bạn đổi khác.",
      "Ra sân mà trong đầu có sơ đồ: ai đứng đâu, lúc nào lên lưới, lúc nào giữ nhịp.",
      "Từ “mình đánh được” sang “đội mình chơi có chủ đích” — đúng tinh thần pickleball đôi.",
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
            Pickleball Coach-Ready
          </p>
          <h1 className="landing-heading text-3xl leading-tight md:text-5xl md:leading-tight">
            Pickleball Coach-Ready: học online để ra sân đánh “trí tuệ hơn”!
          </h1>
          <p className="landing-lead text-lg leading-relaxed">
            Dành cho người bận rộn, không muốn đứng trên sân kiểu mò mẫm. Bạn học
            để hiểu tấm bản đồ, lộ trình sẽ trải qua. Khi gặp Coach offline, bớt
            thời gian nói lý thuyết suông — tập luyện và nhảy thẳng vào bóng,
            tình huống thực tế, vị trí trên sân có chủ đích rõ ràng, cụ thể.
          </p>
          <p className="rounded-lg border border-emerald-400/35 bg-emerald-950/40 p-3 text-sm leading-relaxed text-emerald-50 shadow-lg backdrop-blur-md">
            <strong className="font-semibold text-emerald-100">Học online trước</strong> để ra
            sân với Coach không còn là buổi “lý thuyết kéo dài”, mà là buổi bạn
            đánh bóng có mục đích.
          </p>

          <div className="glass-panel p-4 md:p-5">
            <p className="mb-3 text-sm font-semibold text-white">
              Bạn có mong muốn này khi ra sân pickleball ?
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-100">
              {headlineOptions.map((headline) => (
                <li key={headline}>{headline}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-white">
              Mục đích của khóa học online này giúp bạn điều gì?
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-100">
              <li>
                Cho người mới lẫn người quay lại sau vài tháng bận: mỗi ngày
                15–20 phút, ra sân có checklist — không còn cảm giác “hôm nay tập
                cái gì ta?”.
              </li>
              <li>
                Không xây “bảo tàng kỹ thuật”. Chỉ lấy đúng thứ hay xảy ra trong
                đôi: serve, return, lên lưới, NVZ, nói chuyện với đồng đội, rồi
                chọn cú đánh cho điểm — gọn, thực dụng, đánh được ngay.
              </li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-panel-lg h-fit border-white/20 p-4 shadow-2xl sm:p-5"
        >
          <div className="border-b border-white/10 pb-3">
            <h2 className="text-base font-semibold leading-snug text-white drop-shadow-md sm:text-lg">
              <span className="font-normal text-slate-300">Đăng ký · </span>
              Quà tặng Thực chiến ra sân!
            </h2>
            <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
              Form ngắn — không spam.
            </p>
          </div>

          <div className="mt-4 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                label="Tên / Nickname *"
                value={form.fullName}
                onChange={(value) => setForm((prev) => ({ ...prev, fullName: value }))}
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
            </div>

            <Input
              label="Zalo (SĐT, tuỳ chọn)"
              value={form.phone}
              onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
              placeholder="VD: 0912…"
              compact
            />

            <label className="block">
              <span className="mb-0.5 block text-xs font-medium text-slate-200">
                Ưu tiên của bạn *
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
                placeholder="VD: hay pop-up, kẹt NVZ…"
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
              Đồng ý nhận email từ khóa học
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
              {isSubmitting ? "Đang gửi…" : "Nhận quà & lộ trình"}
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
