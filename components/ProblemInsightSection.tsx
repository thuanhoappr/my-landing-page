const ITEMS = [
  "Bạn bận rộn nên đi tập không đều, lên sân thường đánh theo cảm giác.",
  "Mỗi buổi tập học quá nhiều thứ cùng lúc, dễ rơi vào tình trạng rối chiến thuật.",
  "Đánh đôi nhưng chưa rõ vai trò của mình trong từng pha bóng.",
  "Serve và return chưa có chủ đích cho đánh đôi, dễ mất nhịp ngay từ đầu rally.",
  "Lên lưới sai thời điểm khiến mất sức và để hở sân.",
  "NVZ và dink nghe phức tạp nên ngại tập, trong khi chỉ cần đủ dùng là đã khác hẳn.",
  "Học online và tập trực tiếp chưa nối liền, gặp Coach vẫn mất thời gian làm quen.",
];

export function ProblemInsightSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">Điểm đau & góc nhìn</h2>
        <p className="mt-3 text-slate-300">
          Bạn không cần thêm một khóa lý thuyết dài dòng. Bạn cần một lộ trình
          gọn, ra sân là áp dụng được ngay cho đánh đôi.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-slate-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
