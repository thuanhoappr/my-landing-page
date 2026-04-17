const FAQS = [
  {
    q: "Mình mới tập — có bị “tụt lại” so với người quen sân không?",
    a: "Không sao cả. Mình thiết kế để bạn vào được nhịp đôi sớm: ít chuyện bay bổng, nhiều chuyện “hôm nay ra sân làm đúng 2–3 việc”.",
  },
  {
    q: "Mỗi ngày chỉ có chút xíu thời gian — có theo nổi không?",
    a: "Được. Mình bóp theo kiểu người bận: khoảng 15–20 phút mỗi ngày, nhưng mỗi tuần phải thấy chỗ khác khi đánh đôi.",
  },
  {
    q: "Học online vậy… rồi có cần Coach trực tiếp không?",
    a: "Nên có — nhưng kiểu khác: bạn mang câu hỏi và checklist lên, Coach không còn phải mất giờ kể lại từ đầu. Buổi đó ăn tiền hơn cho bạn.",
  },
  {
    q: "Khóa này nặng đánh đơn hay đánh đôi?",
    a: "Đôi. Nếu bạn chỉ muốn solo highlight reel thì mình vẫn vui cho bạn — nhưng đó không phải món chính ở đây.",
  },
  {
    q: "Mình đánh được rồi — học thêm có “dư” không?",
    a: "Nếu bạn vẫn có cảm giác “đánh được mà sao cứ thua kiểu ngớ ngẩn” thì không dư. Mình giúp bạn hệ thống lại phần hay gây điểm / gây lỗi trong đôi.",
  },
  {
    q: "Có đồ để tập ở nhà không, hay toàn lý thuyết?",
    a: "Có checklist và bài tập tối giản — thứ bạn mang ra sân là được, không cần sân nhà mini cầu kỳ.",
  },
  {
    q: "Mình hay quên — có xem lại được không?",
    a: "Có. Bạn cứ xem lại phần nào “đang kẹt” trước khi xuống sân; pickleball nhớ bằng lặp lại, không nhớ bằng nghe một lần.",
  },
  {
    q: "Lên lưới kiểu gì cho khỏi… nổ tim?",
    a: "Mình dạy theo tình huống: khi nào lên để ăn điểm, khi nào ở lại cho chắc — tránh kiểu “thấy người ta lên mình lên”.",
  },
  {
    q: "NVZ / dink có phải kiểu nghệ sĩ không?",
    a: "Không cần đẹp như clip TikTok. Mình chỉ cần bạn dink đủ an toàn, giữ rally, rồi chờ thời điểm dứt điểm — thực dụng là chính.",
  },
  {
    q: "Đăng ký xong thì sao?",
    a: "Bạn sang trang cảm ơn để nhận quà, vào nhóm nếu cần, và bổ sung Zalo để mình gửi tài liệu cho kịp.",
  },
];

export function FAQSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="landing-heading text-2xl md:text-3xl">
          Hỏi nhanh — đáp thẳng
        </h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((faq) => (
            <details key={faq.q} className="glass-panel p-4">
              <summary className="cursor-pointer font-semibold text-white drop-shadow-sm">
                {faq.q}
              </summary>
              <p className="mt-2 text-slate-100 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
