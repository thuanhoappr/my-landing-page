const WEEKS = [
  {
    title: "Tuần 1 — Dựng nền",
    desc: "Ôn khung đánh đôi căn bản, vị trí đúng, quy tắc di chuyển tiết kiệm sức.",
  },
  {
    title: "Tuần 2 — Mở rally",
    desc: "Serve và return cho đánh đôi để vào rally có lợi thế sớm.",
  },
  {
    title: "Tuần 3 — Lên lưới & NVZ",
    desc: "Chọn thời điểm lên lưới, giữ đội hình và dùng dink/NVZ đủ dùng.",
  },
  {
    title: "Tuần 4 — Phối hợp & chiến thuật",
    desc: "Giao tiếp hai người, phân vai và chọn cú đánh tối giản, áp dụng ngay.",
  },
];

export function Roadmap4Weeks() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">
          Lộ trình bốn tuần cho người bận rộn
        </h2>
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
