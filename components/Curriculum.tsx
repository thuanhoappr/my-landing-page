const MODULES: { promise: string; anchor: string }[] = [
  {
    promise: "Luật chơi và luồng điểm cơ bản — hiểu nhanh để không bị “ngợp” khi xuống sân.",
    anchor: "Nhập môn: luật & sân chơi",
  },
  {
    promise: "Cầm vợt, tư thế chuẩn, động tác an toàn — tránh sai từ những buổi đầu.",
    anchor: "Kỹ thuật nền: vợt, chân, vai",
  },
  {
    promise: "Giao bóng và trả giao bóng ổn định — mở rally chứ không chỉ “đưa bóng qua lưới”.",
    anchor: "Serve & return thực chiến",
  },
  {
    promise: "Di chuyển gọn, chọn vị trí — đỡ chạy lung tung mà vẫn che được sân.",
    anchor: "Chân & vị trí cho người mới",
  },
  {
    promise: "Lưới và vùng NVZ: biết điểm dừng — giảm lỗi hay gặp khi mới chơi.",
    anchor: "Lên lưới an toàn",
  },
  {
    promise: "Gợi ý chọn vợt, khởi động, giữ nhịp tập — phù hợp người bận rộn.",
    anchor: "Thiết bị & thói quen tập",
  },
];

export function Curriculum() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="landing-heading text-2xl md:text-3xl">
          Giáo trình tập online — tối ưu cho người bận rộn
        </h2>
        <p className="landing-muted mt-2 text-base">
          Mỗi phần trả lời một câu hỏi: “Sau bài này, mình ra sân sẽ làm được thêm
          việc gì?” — học nhanh, chơi chất.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {MODULES.map((item, index) => (
            <li key={item.promise} className="glass-panel p-5 md:p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-emerald-300/95">
                Phần {index + 1}
              </p>
              <p className="mt-2 text-base font-semibold leading-snug text-white drop-shadow-sm">
                {item.promise}
              </p>
              <p className="mt-2 text-sm text-slate-200">{item.anchor}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
