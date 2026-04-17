const MODULES: { promise: string; anchor: string }[] = [
  {
    promise:
      "Hết cảnh “đánh xong mệt mà chẳng biết mình vừa làm gì” — bạn có khung đánh đôi gọn trong đầu, chân theo đúng việc.",
    anchor: "Nền tảng: ít sức, ít rối, nhiều kiểm soát",
  },
  {
    promise:
      "Serve và return không còn là hai cú “cho qua”; đó là hai cú mở ra thế trận — bạn ép người ta chơi theo nhịp của mình.",
    anchor: "Mở trận đôi: serve & return có mùi điểm",
  },
  {
    promise:
      "Làm chủ khu vực lưới và phối hợp ăn ý với đồng đội — biến nửa sân phía bạn thành chỗ khó chơi, chứ không phải chỗ hở.",
    anchor: "Lên lưới & giữ đội hình: đứng đúng là đã thắng một nửa",
  },
  {
    promise:
      "NVZ không còn là nơi bạn “sống sót”; là nơi bạn giữ bóng thấp, giảm pop-up, rồi kiên nhẫn chờ cú đối thủ tặng điểm.",
    anchor: "Dink / NVZ: đủ dùng để không tự hại mình",
  },
  {
    promise:
      "Hết kiểu hai người cùng chạy một quả bóng — bạn và đồng đội biết ai lo line nào, ai hô gì, khi nào nhường, khi nào dứt điểm.",
    anchor: "Đôi nói ít mà hiểu: giao tiếp + phân vai",
  },
  {
    promise:
      "Không cần một trăm biến thể — chỉ cần vài lựa chọn đúng lúc: khi nào dink sâu, khi nào tốc độ, khi nào reset lại rally.",
    anchor: "Chiến thuật tối giản: chọn cú đánh như người chơi có kinh nghiệm",
  },
];

export function Curriculum() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="landing-heading text-2xl md:text-3xl">
          6 Module — mỗi module là một thứ bạn cảm nhận được trên sân
        </h2>
        <p className="landing-muted mt-2 text-base">
          Không liệt kê cho đẹp. Mỗi phần là một câu trả lời cho câu hỏi: “Sau
          module này, trận đôi của tôi khác chỗ nào?”
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {MODULES.map((item, index) => (
            <li
              key={item.promise}
              className="glass-panel p-5 md:p-6"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-emerald-300/95">
                Module {index + 1}
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
