const OUTCOMES = [
  {
    title: "Tự tin vung vợt",
    body: "Nắm luật chơi, giao bóng, trả giao bóng và dứt điểm cơ bản — tự tin ghép kèo với bất kỳ ai.",
  },
  {
    title: "Xả stress cực đã",
    body: "Đốt calo mỗi giờ chơi, đánh bay căng thẳng sau giờ ngồi liên tục trước màn hình.",
  },
  {
    title: "Tăng cường thể lực",
    body: "Vận động toàn thân hiệu quả nhưng thân thiện với xương khớp — hạn chế chấn thương.",
  },
  {
    title: "Mở rộng quan hệ",
    body: "Gia nhập cộng đồng Pickleball năng động, văn minh — kết nối bạn mới cùng sở thích.",
  },
];

export function OutcomesSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="landing-heading text-2xl md:text-3xl">
          Bạn sẽ nhận được gì sau khóa học này?
        </h2>
        <p className="landing-lead mt-3 text-base leading-relaxed md:text-lg">
          Tự tin ra sân, xả stress hiệu quả và mở rộng mối quan hệ — tất cả đều
          đang chờ bạn khi bạn bắt đầu đúng cách, đúng nhịp.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {OUTCOMES.map((item) => (
            <div key={item.title} className="glass-outcome p-4 leading-relaxed md:p-5">
              <p className="font-semibold text-emerald-300 drop-shadow-sm">{item.title}</p>
              <p className="mt-2 text-slate-100">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
