const OUTCOMES = [
  "Biet dung khung danh doi co ban de khong roi doi hinh.",
  "Serve va Return co muc dich, tao loi the tu 2 cham bong dau tien.",
  "Len luoi dung luc, dung vi tri, khong dot suc vo ich.",
  "Hieu NVZ/Dink du dung de giam loi va giu nhip rally.",
  "Phoi hop voi ban danh ro rang qua quy tac giao tiep ngan gon.",
  "Biet chon cu danh don gian nhung hieu qua theo tinh huong.",
  "Co checklist truoc buoi offline voi Coach de tiet kiem thoi gian.",
  "Sau 4 tuan, vao san tap trung vao thuc chien thay vi hoc lai tu dau.",
];

export function OutcomesSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">Ket qua ban nhan duoc</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {OUTCOMES.map((item) => (
            <p
              key={item}
              className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-100"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
