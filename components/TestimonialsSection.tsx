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
        <h2 className="landing-heading text-2xl md:text-3xl">
          Người chơi đã học online nói gì ?
        </h2>
        <p className="landing-muted mt-2 text-sm md:text-base">
          Đây là giọng điệu thật trên sân: ngắn, thẳng, không phải review kiểu
          marketing sáo rỗng.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.name}
              className="glass-panel p-4 md:p-5"
            >
              <p className="text-slate-100">“{item.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-emerald-300 drop-shadow-sm">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
