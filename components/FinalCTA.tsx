export function FinalCTA() {
  return (
    <section className="px-4 pb-16 pt-10">
      <div className="mx-auto max-w-5xl">
        <div className="glass-cta p-8 text-center md:p-10">
          <h2 className="landing-heading text-2xl md:text-3xl">
            Đừng trì hoãn nữa — sân chơi đang chờ bạn
          </h2>
          <p className="landing-lead mx-auto mt-3 max-w-2xl text-base md:text-lg">
            Đăng ký hôm nay để nhận buổi tập thử miễn phí (có vợt) — hoặc chọn ưu
            đãi khóa học nếu bạn đã sẵn sàng bắt đầu.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#lead-form"
              className="inline-block rounded-lg bg-emerald-400 px-6 py-2.5 font-semibold text-slate-900 shadow-lg transition hover:bg-emerald-300"
            >
              Đăng ký / Tập thử miễn phí
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
