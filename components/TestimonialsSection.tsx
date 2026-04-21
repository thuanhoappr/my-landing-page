const TESTIMONIALS = [
  {
    name: "Chị Mai — nhân sự",
    quote:
      "Mình bận tối mịt, sợ tập sai đau lưng. Sau vài buổi đã dám ra sân ghép kèo với team công ty.",
  },
  {
    name: "Anh Hùng — kỹ sư",
    quote:
      "Trước xem clip tùm lum, rối luật. Giờ nắm khung cơ bản, đỡ ngượng khi chơi cùng hội.",
  },
  {
    name: "Cặp Thu — Lan",
    quote:
      "Tập thử có vợt sẵn là điểm cộng lớn. Vợ chồng mình vào nhịp nhanh hơn mình nghĩ.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="landing-heading text-2xl md:text-3xl">
          Học viên nói gì sau khi bắt đầu?
        </h2>
        <p className="landing-muted mt-2 text-sm md:text-base">
          Hơn 100 học viên đã qua lộ trình nhập môn — phản hồi ngắn gọn, đúng chất
          người đi làm muốn: nhanh, rõ, áp dụng được.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article key={item.name} className="glass-panel p-4 md:p-5">
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
