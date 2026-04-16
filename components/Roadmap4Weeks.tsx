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
        <h2 className="text-2xl font-bold md:text-3xl">
          Bốn tuần — mỗi tuần một lớp tự tin, không xếp lịch kiểu marathon
        </h2>
        <p className="mt-2 text-slate-400">
          Thiết kế cho người bận: mỗi ngày một chút, nhưng mỗi tuần phải thấy
          “chơi khác đi” khi ra sân đôi.
        </p>
        <div className="mt-6 space-y-3">
          {WEEKS.map((week) => (
            <div
              key={week.title}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
            >
              <p className="font-semibold text-emerald-300">{week.title}</p>
              <p className="mt-1 text-slate-300">{week.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
