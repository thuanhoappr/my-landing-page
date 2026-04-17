const WEEKS = [
  {
    title: "Tuần 1 — Cho cơ thể đỡ “ngơ” trên sân",
    desc: "Kết quả: bạn đứng đúng chỗ, di chuyển ít hơn nhưng lại che sân tốt hơn — hết kiểu chạy loạn xạ mà vẫn lỗ hổng.",
  },
  {
    title: "Tuần 2 — Mở trận có ý đồ",
    desc: "Kết quả: serve và return không còn “đưa bóng qua cho có”; bạn bắt nhịp rally theo hướng mình muốn.",
  },
  {
    title: "Tuần 3 — Lên lưới & NVZ: từ sợ sang… dùng được",
    desc: "Kết quả: bạn biết khi nào lên để gây áp lực, khi nào giữ chân; ở NVZ không còn chỉ đứng chịu trận.",
  },
  {
    title: "Tuần 4 — Đôi ăn ý, điểm đến tự nhiên hơn",
    desc: "Kết quả: hai người hiểu vai, nói ít mà vẫn khớp; chọn cú đánh theo tình huống — trận “đỡ rối” hẳn.",
  },
];

export function Roadmap4Weeks() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="landing-heading text-2xl md:text-3xl">
          4 tuần — mỗi tuần một sự tự tin, không xếp lịch kiểu marathon
        </h2>
        <p className="landing-muted mt-2 text-base">
          Thiết kế cho người bận: mỗi ngày một chút, nhưng mỗi tuần phải thấy
          “chơi khác đi” khi ra sân đôi.
        </p>
        <div className="mt-6 space-y-3">
          {WEEKS.map((week) => (
            <div
              key={week.title}
              className="glass-panel p-4 md:p-5"
            >
              <p className="font-semibold text-emerald-300 drop-shadow-sm">
                {week.title}
              </p>
              <p className="mt-1 text-slate-100">{week.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
