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
          Cảm ơn bạn — chỗ này là phần thưởng cho quyết định “tôi muốn chơi đôi
          cho ra hồn”
          <span className="mt-2 block text-emerald-300">
            Pickleball Coach-Ready
          </span>
        </h1>
        <p className="mt-4 text-slate-300">
          Mình để sẵn cho bạn bộ outline bốn tuần và checklist trước buổi ra sân
          với Coach — không phải để đọc cho vui, mà để bạn mở ra là biết hôm
          nay mình cần sửa đúng một hai thứ gì.
        </p>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold">Ba bước nhỏ — làm xong là ổn</h2>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="mb-3 text-sm text-slate-300">
              1) Cho mình Zalo — để gửi tài liệu và khớp đúng người với email bạn
              vừa đăng ký.
            </p>
            <ZaloUpdateForm />
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="mb-3 text-sm text-slate-300">
              2) Vào nhóm — chỗ nhận lịch, nhắc buổi tập, và đôi khi là… một
              clip ngắn mình thấy đội hay mắc lỗi gì.
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
              3) Tải outline + checklist — rồi chọn một buổi sắp tới để thử đúng
              checklist đó trên sân.
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
