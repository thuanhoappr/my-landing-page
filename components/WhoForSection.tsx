export function WhoForSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        <div className="glass-emerald p-5 md:p-6">
          <h3 className="text-xl font-semibold text-emerald-100 drop-shadow-sm">
            Dành cho bạn nếu…
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-emerald-50/95">
            Bạn muốn một môn vận động vừa vui vừa gặp gỡ — nhưng cần lộ trình gọn,
            không kéo dài vô tận.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-50">
            <li>Bạn đi làm, lịch trình chật — cần khóa “vào đề” nhanh, tập đúng từ đầu.</li>
            <li>Bạn mới biết Pickleball và muốn tự tin ra sân giao lưu với đồng nghiệp, bạn bè.</li>
            <li>Bạn ngại vì chưa rành luật/kỹ thuật — muốn có người chỉnh tư thế, tránh chấn thương.</li>
            <li>Bạn muốn buổi tập thử miễn phí (có vợt) để cảm nhận trước khi cam kết.</li>
          </ul>
        </div>
        <div className="glass-rose p-5 md:p-6">
          <h3 className="text-xl font-semibold text-rose-100 drop-shadow-sm">
            Có thể chưa phù hợp nếu…
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-rose-50/95">
            Không phải ai cũng cần cùng một định dạng học — và điều đó bình thường.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-50">
            <li>Bạn đang tìm lộ trình thi đấu chuyên sâu ngay — khóa này ưu tiên nhập môn nhanh, an toàn.</li>
            <li>Bạn không dự định ra sân thực hành — Pickleball “vào tay” nhờ lặp lại trên sân.</li>
            <li>Bạn chỉ muốn nghe lý thuyết dài mà không cần checklist thực chiến.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
