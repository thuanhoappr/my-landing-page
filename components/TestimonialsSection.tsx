const TESTIMONIALS = [
  {
    name: "Hoc vien A (placeholder)",
    quote:
      "Truoc day minh len san khong biet bat dau tu dau. Sau 2 tuan da biet dung doi hinh va danh tu tin hon.",
  },
  {
    name: "Hoc vien B (placeholder)",
    quote:
      "Checklist truoc buoi tap voi Coach rat huu ich, tiet kiem kha nhieu thoi gian lam quen.",
  },
  {
    name: "Hoc vien C (placeholder)",
    quote:
      "Module phoi hop 2 nguoi giup doi minh giao tiep tot hon, giam loi va giu nhip tran dau tot.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">
          Cam nhan hoc vien (placeholder)
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.name}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
            >
              <p className="text-slate-200">"{item.quote}"</p>
              <p className="mt-3 text-sm font-semibold text-emerald-300">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
