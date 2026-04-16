const MODULES = [
  "Module 1 — Nền tảng để không mất sức, không rối",
  "Module 2 — Serve & return cho đánh đôi",
  "Module 3 — Lên lưới & giữ đội hình",
  "Module 4 — NVZ/dink đủ dùng: giữ bóng thấp, giảm lỗi, tạo nhịp cho đội",
  "Module 5 — Phối hợp hai người: giao tiếp, phân vai",
  "Module 6 — Chiến thuật tối giản (chọn cú đánh) áp dụng ngay",
];

export function Curriculum() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">
          Chương trình sáu module — đánh đôi
        </h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {MODULES.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
