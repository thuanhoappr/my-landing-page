const ITEMS = [
  "Bạn bận quá, lịch tập cứ chập chờn — lên sân là kiểu “đánh cho đỡ cứng người”, chứ chưa kịp sửa gì.",
  "Buổi tập hay biến thành “hôm nay thử hết mọi thứ”: drop, drive, lob… xong về nhà vẫn không biết mình cần nhất cái nào cho đôi.",
  "Đánh đôi mà cứ cảm giác mình đang đánh một mình: không rõ lúc nào mình cover, lúc nào nhường cho bạn.",
  "Serve và return cứ an toàn quá — không sai, nhưng cũng chẳng tạo được áp lực; rally mở ra là thế trận đã nghiêng.",
  "Lên lưới kiểu “thấy người ta lên mình lên” — hết sức mà điểm không tới, còn dễ lộ sân.",
  "Nghe NVZ, dink… tưởng khó, nên né. Trong khi thật ra chỉ cần đủ để bóng qua lưới an toàn, trận đã khác hẳn.",
  "Học online một kiểu, ra sân Coach dạy một kiểu — mất mấy chục phút mới “khớp nhịp”, uổng buổi tập.",
];

export function ProblemInsightSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">
          Có quen không? Những “hạt cát” làm bạn khó chịu trên sân đôi
        </h2>
        <p className="mt-3 text-slate-300">
          Mình không bán cho bạn một đống thuật ngữ. Mình chỉ muốn bạn đỡ cảm
          giác “mình đánh được nhưng sao cứ thua kiểu ngớ ngẩn” — vì đánh đôi,
          thua thường đến từ nhịp và vị trí, không phải từ một cú hoành tráng
          nào cả.
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
