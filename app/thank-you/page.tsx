import Link from "next/link";
import { ZaloUpdateForm } from "@/components/ZaloUpdateForm";

const ZALO_GROUP_URL = "https://zalo.me/your-group-link";
const TELEGRAM_URL = "https://t.me/your-group-link";
const OUTLINE_URL = "#";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-10">
        <p className="mb-2 text-sm uppercase tracking-widest text-emerald-300">
          Dang ky thanh cong
        </p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Cam on ban da dang ky
          <span className="block text-emerald-300">
            Pickleball Coach-Ready
          </span>
        </h1>
        <p className="mt-4 text-slate-300">
          Qua tang ngay hom nay: bo Outline 4 tuan + Checklist truoc buoi ra san
          voi Coach de vao thuc hanh nhanh hon.
        </p>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold">Buoc tiep theo</h2>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="mb-3 text-sm text-slate-300">
              1) Dien Zalo de nhan tai lieu va cap nhat nhanh.
            </p>
            <ZaloUpdateForm />
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="mb-3 text-sm text-slate-300">
              2) Vao nhom de nhan thong bao lich hoc va tai lieu.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={ZALO_GROUP_URL}
                className="rounded-lg bg-emerald-400 px-4 py-2 font-semibold text-slate-900 transition hover:bg-emerald-300"
                target="_blank"
              >
                Vao Zalo
              </Link>
              <Link
                href={TELEGRAM_URL}
                className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-100 transition hover:border-slate-500"
                target="_blank"
              >
                Vao Telegram
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="mb-3 text-sm text-slate-300">
              3) Tai outline/checklist de bat dau ngay.
            </p>
            <Link
              href={OUTLINE_URL}
              className="text-emerald-300 underline underline-offset-4"
              target="_blank"
            >
              Tai bo Outline + Checklist (placeholder)
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
