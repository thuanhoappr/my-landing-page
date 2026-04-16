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
  "Bat dau tu con so 0",
  "Cai thien ky nang danh doi can ban",
  "Biet cach len luoi va giu doi hinh",
  "Phoi hop voi ban danh tot hon",
  "Chuan bi di tap voi Coach hieu qua",
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
      "Danh doi Pickleball khong con roi: hoc online, ra san tap trung vao dieu quan trong",
      "Nguoi ban ron van danh doi tien bo: lo trinh online truoc, Coach toi uu sau",
      "Ra san co ke hoach ro rang: hoc dung thu can cho danh doi",
      "Khong can tap nhieu, chi can tap dung: Coach-Ready cho nguoi it thoi gian",
      "Tu mo ho den biet danh doi: chuan bi online de vao san thuc hanh nhanh",
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
        setError(data.message ?? "Khong gui duoc thong tin. Vui long thu lai.");
        return;
      }

      router.push("/thank-you");
    } catch {
      setError("Khong ket noi duoc may chu. Vui long thu lai.");
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
            Pickleball Coach-Ready: Hoc online de ra san tap hieu qua
          </h1>
          <p className="text-lg text-slate-300">
            Dinh vi: Pickleball danh doi cho nguoi ban ron; hoc online de ra san
            tap offline voi Coach hieu qua.
          </p>
          <p className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-200">
            Hoc online truoc de buoi ra san voi Coach di thang vao thuc hanh.
          </p>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="mb-3 text-sm font-semibold text-slate-200">
              5 headline options:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
              {headlineOptions.map((headline) => (
                <li key={headline}>{headline}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-slate-200">
              2 subheadline options:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>
                Danh cho nguoi moi va nguoi ban ron: hoc 15-20 phut/ngay, vao san
                co checklist ro rang.
              </li>
              <li>
                Tap trung vao danh doi thuc chien: serve, return, len luoi, phoi
                hop 2 nguoi va chien thuat toi gian.
              </li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl"
        >
          <h2 className="mb-4 text-xl font-semibold">
            Dang ky nhan lo trinh + qua tang
          </h2>
          <div className="space-y-4">
            <Input
              label="FullName *"
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
              label="Phone (optional)"
              value={form.phone}
              onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
            />

            <label className="block">
              <span className="mb-1 block text-sm text-slate-200">Goal *</span>
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
                Note (optional)
              </span>
              <textarea
                value={form.note}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, note: event.target.value }))
                }
                rows={3}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none ring-emerald-400/40 focus:ring"
                placeholder="Muc tieu cu the hoac kho khan hien tai cua ban..."
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
              Toi dong y nhan huong dan va thong tin tu khoa hoc.
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
              {isSubmitting ? "Dang gui..." : "Dang ky ngay"}
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
