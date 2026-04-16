const TESTIMONIALS = [
  {
    name: "Học viên A (minh họa)",
    quote:
      "Trước đây mình lên sân không biết bắt đầu từ đâu. Sau hai tuần đã biết giữ đội hình và tự tin hơn hẳn.",
  },
  {
    name: "Học viên B (minh họa)",
    quote:
      "Checklist trước buổi tập với Coach rất hữu ích, tiết kiệm đáng kể thời gian làm quen.",
  },
  {
    name: "Học viên C (minh họa)",
    quote:
      "Module phối hợp hai người giúp đội mình giao tiếp tốt hơn, giảm lỗi và giữ nhịp trận đấu ổn định.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">
          Cảm nhận học viên (minh họa)
        </h2>
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
