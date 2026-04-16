export function WhoForSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
          <h3 className="text-xl font-semibold text-emerald-200">
            Dành cho ai
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-100">
            <li>Người mới bắt đầu Pickleball đánh đôi.</li>
            <li>Người bận rộn, mỗi ngày chỉ có khoảng 15–20 phút để học.</li>
            <li>Đã đánh nhưng chưa có hệ thống, dễ rối đội hình.</li>
            <li>
              Muốn học online trước để buổi tập trực tiếp với Coach hiệu quả
              hơn.
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-5">
          <h3 className="text-xl font-semibold text-rose-200">
            Không phù hợp nếu
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-100">
            <li>
              Mong muốn nội dung thi đấu nâng cao, chuyên nghiệp ngay lập tức.
            </li>
            <li>Không có kế hoạch ra sân thực hành.</li>
            <li>Chỉ cần lý thuần túy, không cần checklist ứng dụng.</li>
            <li>Không muốn phối hợp đánh đôi mà chỉ đánh đơn.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
