const STEPS = [
  {
    title: "1 — Giáo trình thực chiến",
    desc: "Bỏ lý thuyết rườm rà: tập trung những kỹ thuật cốt lõi để từ con số 0 tới người chơi tự tin trong thời gian ngắn.",
  },
  {
    title: "2 — Thời gian cực kỳ linh hoạt",
    desc: "Trưa, tối hoặc cuối tuần — tùy lịch rảnh. Phù hợp người đi làm, không cần cam kết khóa kéo dài vô hạn.",
  },
  {
    title: "3 — Huấn luyện viên tận tâm",
    desc: "Chỉnh sửa từng dáng đứng, cách vung vợt — để bạn không tự “mò” sai trên sân.",
  },
  {
    title: "4 — An toàn tuyệt đối",
    desc: "Chơi đúng kỹ thuật từ đầu — giảm nguy cơ đau nhức khi vận động lại sau thời gian dài ít vận động.",
  },
];

export function Roadmap4Weeks() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="landing-heading text-2xl md:text-3xl">
          Khóa học &quot;Nhập Môn Tốc Độ&quot;
        </h2>
        <p className="landing-muted mt-2 text-base">
          Chúng tôi chắt lọc phần quan trọng nhất để bạn vào sân có việc làm ngay
          — không lãng phí buổi tập vì… không biết bắt đầu từ đâu.
        </p>
        <div className="mt-6 space-y-3">
          {STEPS.map((step) => (
            <div key={step.title} className="glass-panel p-4 md:p-5">
              <p className="font-semibold text-emerald-300 drop-shadow-sm">{step.title}</p>
              <p className="mt-1 text-slate-100">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
