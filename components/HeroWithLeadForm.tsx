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
  "Mình mới cầm vợt — muốn vào sân mà không ngại ngùng",
  "Đánh được rồi nhưng đánh đôi vẫn rối, muốn gọn lại từng bước",
  "Muốn lên lưới đúng lúc, đỡ hụt hơi và đỡ đứng sai chỗ",
  "Muốn ăn ý với bạn đánh — ít la hét, nhiều điểm hơn",
  "Sắp tập với Coach — muốn buổi đó vào game luôn, không mất nửa giờ làm quen",
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
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-emerald-300">
            Pickleball Coach-Ready
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Pickleball Coach-Ready: học online để ra sân đánh đôi “có nội dung”
          </h1>
          <p className="text-lg text-slate-300">
            Dành cho người bận rộn nhưng không muốn đứng trên sân kiểu mò mẫm.
            Bạn học trước phần nền và cách đọc trận đôi; khi gặp Coach, ta bỏ
            thời gian nói suông — nhảy thẳng vào bóng, vào vị trí, vào tình
            huống.
          </p>
          <p className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-200">
            Một câu thôi: học online trước để buổi ra sân với Coach không còn là
            buổi “lý thuyết kéo dài”, mà là buổi bạn đập bóng có mục đích.
          </p>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="mb-3 text-sm font-semibold text-slate-200">
              Nếu bạn đang viết quảng cáo / bài đăng, đây là vài câu mở “dính”
              người chơi
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
              {headlineOptions.map((headline) => (
                <li key={headline}>{headline}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-slate-200">
              Hai hướng sub-headline gợi ý
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-300">
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
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl"
        >
          <h2 className="mb-2 text-xl font-semibold">
            Để lại thông tin — mình gửi bạn lộ trình và phần quà kèm sân
          </h2>
          <p className="mb-4 text-sm text-slate-400">
            Không spam. Chỉ những thứ giúp bạn vào sân đỡ ngượng hơn và đánh đôi
            có nhịp hơn.
          </p>
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
                Bạn đang muốn điều gì nhất lúc này? *
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
                Ghi chú thêm (tùy chọn)
              </span>
              <textarea
                value={form.note}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, note: event.target.value }))
                }
                rows={3}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none ring-emerald-400/40 focus:ring"
                placeholder="Ví dụ: hay pop-up lỗi, hay bị kẹt ở NVZ, hay không hiểu khi nào nên ở lại sau lưới…"
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
              {isSubmitting ? "Đang gửi…" : "Gửi cho mình — mình lo phần còn lại"}
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
