const FAQS = [
  {
    q: "Khóa học này có phù hợp người mới không?",
    a: "Có. Nội dung được thiết kế cho người mới và người cần hệ thống lại cách đánh đôi.",
  },
  {
    q: "Mỗi ngày cần bao nhiêu thời gian học?",
    a: "Khoảng 15–20 phút mỗi ngày là đủ để theo kịp lộ trình bốn tuần.",
  },
  {
    q: "Học online rồi có cần Coach trực tiếp không?",
    a: "Nên có. Khóa học giúp bạn vào buổi tập trực tiếp với Coach tập trung và hiệu quả hơn.",
  },
  {
    q: "Nội dung tập trung đánh đơn hay đánh đôi?",
    a: "Tập trung vào Pickleball đánh đôi cho người bận rộn.",
  },
  {
    q: "Tôi đã biết đánh cơ bản, có nên học không?",
    a: "Nên. Khóa học giúp hệ thống hóa và tối ưu phối hợp hai người.",
  },
  {
    q: "Có bài tập thực hành không?",
    a: "Có checklist và bài tập tối giản để bạn áp dụng ngay khi ra sân.",
  },
  {
    q: "Tôi có thể xem lại nội dung nhiều lần không?",
    a: "Có. Bạn có thể ôn lại để củng cố nền tảng trước mỗi buổi tập.",
  },
  {
    q: "Khi nào nên lên lưới trong đánh đôi?",
    a: "Bạn sẽ học quy tắc lên lưới an toàn theo từng tình huống serve và return cụ thể.",
  },
  {
    q: "NVZ và dink có khó không?",
    a: "Không cần quá phức tạp; mục tiêu là đủ dùng để giảm lỗi và giữ nhịp rally.",
  },
  {
    q: "Sau khi đăng ký tôi nhận được gì?",
    a: "Bạn được chuyển sang trang cảm ơn để nhận hướng dẫn, liên kết nhóm và quà tặng.",
  },
];

export function FAQSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">Câu hỏi thường gặp</h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
            >
              <summary className="cursor-pointer font-semibold text-slate-100">
                {faq.q}
              </summary>
              <p className="mt-2 text-slate-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
