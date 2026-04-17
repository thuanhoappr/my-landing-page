import Link from "next/link";
import { ZaloUpdateForm } from "@/components/ZaloUpdateForm";
import { LANDING_BACKGROUND_IMAGE } from "@/lib/landingBackground";

const ZALO_GROUP_URL = "https://zalo.me/your-group-link";
const TELEGRAM_URL = "https://t.me/your-group-link";
const OUTLINE_URL = "#";

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0 bg-slate-950 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${LANDING_BACKGROUND_IMAGE}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <main className="relative z-10 min-h-screen px-4 py-12 text-slate-50 antialiased">
        <div className="glass-panel-lg mx-auto max-w-3xl border-white/20 p-6 md:p-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-emerald-300 drop-shadow-sm">
            Đăng ký thành công
          </p>
          <h1 className="landing-heading text-3xl leading-tight md:text-4xl">
            Cảm ơn bạn — chỗ này là phần thưởng cho quyết định “tôi muốn chơi đôi
            cho ra hồn”
            <span className="mt-2 block text-emerald-300 drop-shadow-md">
              Pickleball Coach-Ready
            </span>
          </h1>
          <p className="landing-lead mt-4 text-base leading-relaxed">
            Mình để sẵn cho bạn bộ outline 4 tuần và checklist trước buổi ra sân
            với Coach — không phải để đọc cho vui, mà để bạn mở ra là biết hôm
            nay mình cần sửa đúng một hai thứ gì.
          </p>

          <section className="mt-8 space-y-6">
            <h2 className="text-xl font-semibold text-white drop-shadow-md">
              Ba bước nhỏ — làm xong là ổn
            </h2>

            <div className="glass-panel p-4 md:p-5">
              <p className="mb-3 text-sm leading-relaxed text-slate-100">
                1) Cho mình Zalo — để gửi tài liệu và khớp đúng người với email
                bạn vừa đăng ký.
              </p>
              <ZaloUpdateForm />
            </div>

            <div className="glass-panel p-4 md:p-5">
              <p className="mb-3 text-sm leading-relaxed text-slate-100">
                2) Vào nhóm — chỗ nhận lịch, nhắc buổi tập, và đôi khi là… một
                clip ngắn mình thấy đội hay mắc lỗi gì.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={ZALO_GROUP_URL}
                  className="rounded-lg bg-emerald-400 px-4 py-2 font-semibold text-slate-900 shadow-md transition hover:bg-emerald-300"
                  target="_blank"
                >
                  Mở Zalo
                </Link>
                <Link
                  href={TELEGRAM_URL}
                  className="rounded-lg border border-white/20 bg-black/30 px-4 py-2 font-semibold text-white backdrop-blur-sm transition hover:border-white/35"
                  target="_blank"
                >
                  Mở Telegram
                </Link>
              </div>
            </div>

            <div className="glass-panel p-4 md:p-5">
              <p className="mb-3 text-sm leading-relaxed text-slate-100">
                3) Tải outline + checklist — rồi chọn một buổi sắp tới để thử đúng
                checklist đó trên sân.
              </p>
              <Link
                href={OUTLINE_URL}
                className="font-medium text-emerald-300 underline underline-offset-4 transition hover:text-emerald-200"
                target="_blank"
              >
                Tải bộ outline và checklist (liên kết minh họa)
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
