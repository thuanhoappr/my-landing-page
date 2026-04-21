import Link from "next/link";
import { ZaloUpdateForm } from "@/components/ZaloUpdateForm";
import { LANDING_BACKGROUND_IMAGE } from "@/lib/landingBackground";
import {
  SITE_BRAND,
  SITE_TAGLINE,
  formatPhoneDisplay,
  getSitePublicConfig,
} from "@/lib/siteConfig";

export default function ThankYouPage() {
  const { adminPhoneRaw, zaloGroupUrl, zaloOaUrl } = getSitePublicConfig();
  const adminTelHref =
    adminPhoneRaw.length > 0
      ? `tel:${adminPhoneRaw.replace(/\s/g, "")}`
      : null;
  const adminPhoneLabel =
    adminPhoneRaw.length > 0 ? formatPhoneDisplay(adminPhoneRaw) : null;

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
            Cảm ơn bạn đã tin tưởng {SITE_BRAND}
            <span className="mt-2 block text-emerald-300 drop-shadow-md">
              {SITE_TAGLINE}
            </span>
          </h1>
          <p className="landing-lead mt-4 text-base leading-relaxed">
            Đội ngũ sẽ liên hệ qua email và số điện thoại bạn vừa gửi để xác nhận
            lịch tập thử hoặc gói ưu đãi. Nếu bạn muốn được nhắn Zalo nhanh hơn,
            hãy bổ sung Zalo bên dưới.
          </p>

          {(adminTelHref && adminPhoneLabel) || zaloOaUrl ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {adminTelHref && adminPhoneLabel ? (
                <a
                  href={adminTelHref}
                  className="rounded-lg border border-white/20 bg-black/35 px-4 py-2 font-semibold text-white backdrop-blur-sm transition hover:border-emerald-400/40"
                >
                  Gọi admin: {adminPhoneLabel}
                </a>
              ) : null}
              <a
                href={zaloOaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-400 px-4 py-2 font-semibold text-slate-900 shadow-md transition hover:bg-emerald-300"
              >
                Mở Zalo OA / chat
              </a>
            </div>
          ) : null}

          <section className="mt-8 space-y-6">
            <h2 className="text-xl font-semibold text-white drop-shadow-md">
              Ba bước tiếp theo
            </h2>

            <div className="glass-panel p-4 md:p-5">
              <p className="mb-3 text-sm leading-relaxed text-slate-100">
                1) Bổ sung Zalo — để đội ngũ gửi tài liệu và khớp đúng người với
                email/SĐT bạn đã đăng ký.
              </p>
              <ZaloUpdateForm />
            </div>

            <div className="glass-panel p-4 md:p-5">
              <p className="mb-3 text-sm leading-relaxed text-slate-100">
                2) Vào nhóm Zalo — nhận lịch, nhắc buổi tập và cập nhật từ cộng
                đồng.
              </p>
              <a
                href={zaloGroupUrl}
                className="inline-block rounded-lg bg-emerald-400 px-4 py-2 font-semibold text-slate-900 shadow-md transition hover:bg-emerald-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tham gia nhóm Zalo
              </a>
            </div>

            <div className="glass-panel p-4 md:p-5">
              <p className="mb-3 text-sm leading-relaxed text-slate-100">
                3) Kiểm tra email — có thể có hướng dẫn hoặc xác nhận từ hệ thống
                gửi lead (Formspree / email admin).
              </p>
              <Link
                href="/"
                className="font-medium text-emerald-300 underline underline-offset-4 transition hover:text-emerald-200"
              >
                ← Quay lại trang chính
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
