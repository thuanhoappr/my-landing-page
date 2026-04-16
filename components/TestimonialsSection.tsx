const TESTIMONIALS = [
  {
    name: "Bạn Lan (minh họa)",
    quote:
      "Trước giờ cứ sợ đánh đôi vì không biết mình đứng đâu cho đúng. Giờ xuống sân kiểu có bản đồ trong đầu, đỡ ngượng hẳn.",
  },
  {
    name: "Anh Tuấn (minh họa)",
    quote:
      "Checklist trước buổi với Coach là thứ mình không ngờ tới — không còn mất nửa tiếng ‘làm quen’ nữa, nhảy vào rally luôn.",
  },
  {
    name: "Cặp Minh — Hải (minh họa)",
    quote:
      "Hai đứa hay cãi nhau vì ai cũng tưởng mình cover. Sau phần phối hợp, đánh đôi đỡ ồn mà… điểm lại nhiều hơn.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">
          Người chơi nói gì (minh họa — để bạn hình dung vibe lớp)
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Đây là giọng điệu thật trên sân: ngắn, thẳng, không phải review kiểu
          marketing sáo rỗng.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.name}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
            >
              <p className="text-slate-200">“{item.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-emerald-300">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
