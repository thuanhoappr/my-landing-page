export function WhoForSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        <div className="glass-emerald p-5 md:p-6">
          <h3 className="text-xl font-semibold text-emerald-100 drop-shadow-sm">
            Nếu bạn là kiểu người này — vào đây là đúng chỗ
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-emerald-50/95">
            Không cần bạn giỏi từ đầu. Chỉ cần bạn muốn ra sân mà không thấy
            ngượng vì “không biết mình nên làm gì”.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-50">
            <li>
              Bạn mới cầm vợt, nghe mọi người nói chuyện pickleball như đã chơi
              mười năm — còn bạn thì đang lo không dính được bóng.
            </li>
            <li>
              Bạn bận công việc, con cái, lịch trùng — nhưng vẫn muốn mỗi lần
              xuống sân là có tiến bộ, dù chỉ 15–20 phút học ở nhà.
            </li>
            <li>
              Bạn đánh được rồi, nhưng cứ đánh đôi là rối: đứng chồng, ai cũng
              muốn xử lý, xong về nhà mới nhận ra mình lỗ vì… không nói với
              nhau.
            </li>
            <li>
              Bạn sắp book Coach — và bạn muốn buổi đó ăn tiền thật sự: vào bài
              luôn, không mất nửa buổi để “làm quen sân”.
            </li>
          </ul>
        </div>
        <div className="glass-rose p-5 md:p-6">
          <h3 className="text-xl font-semibold text-rose-100 drop-shadow-sm">
            Mình nói thẳng: khóa này có thể chưa hợp nếu bạn…
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-rose-50/95">
            Không phải vì bạn “chưa đủ level”. Đôi khi chỉ là… chưa đúng thứ bạn
            đang tìm lúc này.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-50">
            <li>
              Bạn đang cần lộ trình thi đấu nâng cao, chuyên sâu ngay — kiểu
              fine-tune từng milimet cho giải; khóa này ưu tiên người cần “đánh
              đôi ổn và có điểm” trước.
            </li>
            <li>
              Bạn không dự định ra sân thực hành — chỉ muốn nghe cho vui. Mình
              tin bạn hiểu: pickleball không tự vào tay nếu mình không cho nó
              thời gian trên sân.
            </li>
            <li>
              Bạn chỉ muốn một đống lý thuyết để… để đó. Trong khi mình bán cho
              bạn checklist áp vào trận: hôm nay sửa cái này, mai sửa cái kia.
            </li>
            <li>
              Bạn chỉ thích đánh đơn, không quan tâm chuyện phối hợp đôi — vậy
              thì đúng món nhưng sai chỗ; ở đây mình nói chuyện đôi suốt.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
