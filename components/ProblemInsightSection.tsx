const ITEMS = [
  "Ban ban ron nen di tap khong deu, len san thuong danh theo cam giac.",
  "Moi buoi tap hoc nhieu thu cung luc nen de roi vao tinh trang roi chien thuat.",
  "Danh doi nhung chua ro vai tro cua minh trong tung pha bong.",
  "Serve/Return chua co chu dich cho danh doi, de mat nhip ngay tu dau rally.",
  "Len luoi dung thoi diem sai nen mat suc va de hở san.",
  "Dink/NVZ nghe phuc tap nen ngai tap, trong khi chi can du dung la da khac.",
  "Hoc online voi offline chua ket noi, nen gap Coach van mat thoi gian lam quen.",
];

export function ProblemInsightSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">Van de & Insight</h2>
        <p className="mt-3 text-slate-300">
          Ban khong can them mot khoa hoc ly thuyet dai. Ban can mot lo trinh
          ngan, de ra san va ap dung ngay cho danh doi.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-slate-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
