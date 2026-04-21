const FAQS = [
  {
    q: "Tập thử miễn phí có gì?",
    a: "Một buổi trải nghiệm có sẵn vợt, phù hợp người mới — để bạn cảm nhận nhịp chơi trước khi quyết định.",
  },
  {
    q: "Khóa ưu đãi 99K gồm những gì?",
    a: "Là mức ưu đãi trên landing — chi tiết gói sẽ được xác nhận khi đội ngũ liên hệ qua SĐT/Email bạn để lại.",
  },
  {
    q: "Mình bận, có theo nổi không?",
    a: "Có. Nội dung được thiết kế cho người đi làm: học theo khung ngắn, linh hoạt trưa/tối/cuối tuần.",
  },
  {
    q: "Chưa có vợt thì sao?",
    a: "Buổi tập thử có vợt sẵn. Sau đó đội ngũ có thể tư vấn chọn vợt phù hợp mức đầu tư của bạn.",
  },
  {
    q: "Có Coach PPR (USA) tham gia không?",
    a: "Chương trình theo tinh thần thực chiến cùng định hướng từ Coach PPR (USA) — phần cụ thể sẽ được xác nhận khi bạn đăng ký.",
  },
  {
    q: "Sau khi điền form thì sao?",
    a: "Bạn sẽ chuyển sang trang cảm ơn; đội ngũ có thể liên hệ qua email/SĐT. Bạn cũng có thể bổ sung Zalo để khớp nhanh hơn.",
  },
];

export function FAQSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="landing-heading text-2xl md:text-3xl">Hỏi nhanh — đáp gọn</h2>
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
