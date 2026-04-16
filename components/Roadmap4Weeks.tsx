const WEEKS = [
  {
    title: "Tuan 1 - Dung nen",
    desc: "On khung danh doi can ban, vi tri dung, quy tac di chuyen it ton suc.",
  },
  {
    title: "Tuan 2 - Khai mo rally",
    desc: "Tap Serve/Return cho danh doi de vao rally co loi the som.",
  },
  {
    title: "Tuan 3 - Len luoi & NVZ",
    desc: "Chon thoi diem len luoi, giu doi hinh va dung Dink/NVZ du dung.",
  },
  {
    title: "Tuan 4 - Phoi hop & Chien thuat",
    desc: "Giao tiep 2 nguoi, phan vai va shot selection don gian de ap dung ngay.",
  },
];

export function Roadmap4Weeks() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">
          Lo trinh 4 tuan cho nguoi ban ron
        </h2>
        <div className="mt-6 space-y-3">
          {WEEKS.map((week) => (
            <div
              key={week.title}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
            >
              <p className="font-semibold text-emerald-300">{week.title}</p>
              <p className="mt-1 text-slate-300">{week.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
