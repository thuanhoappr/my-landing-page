export function WhoForSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
          <h3 className="text-xl font-semibold text-emerald-200">
            Who it is for
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-100">
            <li>Nguoi moi bat dau Pickleball danh doi.</li>
            <li>Nguoi ban ron, moi ngay chi co 15-20 phut hoc.</li>
            <li>Da danh nhung chua co he thong va de roi doi hinh.</li>
            <li>Muon tap truoc online de buoi offline voi Coach hieu qua hon.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-5">
          <h3 className="text-xl font-semibold text-rose-200">
            Who it is not for
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-100">
            <li>Nguoi muon noi dung thi dau nang cao chuyen nghiep ngay lap tuc.</li>
            <li>Nguoi khong co ke hoach ra san thuc hanh.</li>
            <li>Nguoi tim khoa hoc chi ly thuyet, khong can checklist ung dung.</li>
            <li>Nguoi khong muon phoi hop danh doi ma chi danh don.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
