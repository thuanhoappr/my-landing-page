const OUTCOMES = [
  "Bạn nhìn sân bằng “mắt đôi”: biết đâu là chỗ an toàn, đâu là chỗ đang lộ — đỡ đứng chồng lên bạn đánh.",
  "Hai cú mở trận (serve + return) không còn kiểu “đưa bóng qua lưới cho xong”; bạn biết mình đang ép đối thủ về đâu.",
  "Lên lưới không còn là cảm giác hồi hộp mù — bạn biết khi nào lên để ăn điểm, khi nào ở lại cho chắc.",
  "NVZ không còn là nỗi sợ mang tên Instagram — chỉ cần dink đủ dùng để giảm lỗi, giữ rally, rồi tìm cú kết thúc.",
  "Bạn và đồng đội nói ít thôi nhưng hiểu nhau: ai cover, ai giữ line, ai chịu trách nhiệm cú nào.",
  "Bạn chọn cú đánh theo tình huống — không phải theo “cú mình thích nhất”. Đó mới là pickleball có điểm.",
  "Trước buổi với Coach, bạn có checklist: hôm nay sửa 2–3 thứ cụ thể — không lãng phí giờ quý của bạn.",
  "Sau bốn tuần, cảm giác lên sân là “mình có kế hoạch”, không phải “mình đến cho có mặt”.",
];

export function OutcomesSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="landing-heading text-2xl md:text-3xl">
          Bạn nhận được gì — nói thẳng, không vòng vo
        </h2>
        <p className="landing-lead mt-3 text-base leading-relaxed md:text-lg">
          Coach-Ready không cố nhồi bạn thật nhiều “tính năng”. Mình chỉ quan
          tâm một thứ: sau mỗi tuần, bạn ra sân đánh đôi có cảm giác kiểm soát
          hơn — ít lỗi ngớ ngẩn hơn, nhiều rally có chủ đích hơn, và buổi tập
          với Coach đi thẳng vào chỗ cần sửa.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {OUTCOMES.map((item) => (
            <p
              key={item}
              className="glass-outcome p-4 leading-relaxed md:p-5"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
