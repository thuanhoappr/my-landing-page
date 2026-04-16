const OUTCOMES = [
  "Biết dùng khung đánh đôi căn bản để không rối đội hình.",
  "Serve và return có mục đích, tạo lợi thế từ hai chạm đầu tiên.",
  "Lên lưới đúng lúc, đúng vị trí, không đốt sức vô ích.",
  "Hiểu NVZ và dink đủ dùng để giảm lỗi và giữ nhịp rally.",
  "Phối hợp với bạn đánh rõ ràng nhờ quy tắc giao tiếp ngắn gọn.",
  "Biết chọn cú đánh đơn giản nhưng hiệu quả theo tình huống.",
  "Có checklist trước buổi tập trực tiếp với Coach để tiết kiệm thời gian.",
  "Sau bốn tuần, vào sân tập trung vào thực chiến thay vì học lại từ đầu.",
];

export function OutcomesSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">
          Giải pháp & lợi ích bạn nhận được
        </h2>
        <p className="mt-3 text-slate-300">
          Coach-Ready kết nối học online với buổi ra sân: bạn nắm nền tảng và
          checklist trước, Coach đi thẳng vào thực hành và chỉnh sửa từng
          tình huống đánh đôi.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {OUTCOMES.map((item) => (
            <p
              key={item}
              className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-100"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
