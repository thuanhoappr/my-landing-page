const ITEMS = [
  {
    title: "Lịch trình dày đặc",
    body: "Sáng bận ở văn phòng, tối về mệt — không có thời gian theo khóa kéo dài hàng tháng.",
  },
  {
    title: "Sợ chấn thương",
    body: "Lâu ngày không vận động, lo tự tập sai tư thế sẽ đau nhức xương khớp, ảnh hưởng công việc.",
  },
  {
    title: "Choáng ngợp thông tin",
    body: "Video trên mạng nhiều nhưng luật và kỹ thuật rườm rà — không biết bắt đầu từ đâu, chọn vợt ra sao.",
  },
  {
    title: "Ngại ra sân vì “gà mờ”",
    body: "Muốn chơi cùng hội bạn nhưng sợ đánh hỏng, kéo lùi cả đội — mất tự tin.",
  },
];

export function ProblemInsightSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="landing-heading text-2xl md:text-3xl">
          Bạn có đang bỏ lỡ trào lưu mới chỉ vì những “rào cản” này?
        </h2>
        <p className="landing-lead mt-3 text-base leading-relaxed md:text-lg">
          Đừng lo — rất nhiều người bận rộn giống bạn cũng từng gặp những khó khăn
          này trước khi tìm thấy lộ trình phù hợp với nhịp công việc.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {ITEMS.map((item) => (
            <li key={item.title} className="glass-panel p-4 text-slate-100 md:p-5">
              <p className="font-semibold text-emerald-300 drop-shadow-sm">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed md:text-base">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
