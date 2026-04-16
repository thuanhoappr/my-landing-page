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
          Đăng ký thành công
        </p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Cảm ơn bạn đã đăng ký
          <span className="block text-emerald-300">
            Pickleball Coach-Ready
          </span>
        </h1>
        <p className="mt-4 text-slate-300">
          Quà tặng hôm nay: bộ outline bốn tuần và checklist trước buổi ra sân
          với Coach để vào thực hành nhanh hơn.
        </p>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold">Bước tiếp theo</h2>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="mb-3 text-sm text-slate-300">
              1) Điền Zalo để nhận tài liệu và cập nhật nhanh cho đội ngũ hỗ
              trợ.
            </p>
            <ZaloUpdateForm />
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="mb-3 text-sm text-slate-300">
              2) Vào nhóm để nhận thông báo lịch học và tài liệu.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={ZALO_GROUP_URL}
                className="rounded-lg bg-emerald-400 px-4 py-2 font-semibold text-slate-900 transition hover:bg-emerald-300"
                target="_blank"
              >
                Mở Zalo
              </Link>
              <Link
                href={TELEGRAM_URL}
                className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-100 transition hover:border-slate-500"
                target="_blank"
              >
                Mở Telegram
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="mb-3 text-sm text-slate-300">
              3) Tải outline và checklist để bắt đầu ngay.
            </p>
            <Link
              href={OUTLINE_URL}
              className="text-emerald-300 underline underline-offset-4"
              target="_blank"
            >
              Tải bộ outline và checklist (liên kết minh họa)
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
