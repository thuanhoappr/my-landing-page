const MODULES = [
  "Module 1 - Nen tang de khong mat suc, khong roi",
  "Module 2 - Serve & Return cho danh doi",
  "Module 3 - Len luoi & giu doi hinh",
  "Module 4 - NVZ/Dink du dung: giu bong thap, giam loi, tao nhip cho doi ban",
  "Module 5 - Phoi hop 2 nguoi: giao tiep, phan vai",
  "Module 6 - Chien thuat toi gian (shot selection) ap dung ngay",
];

export function Curriculum() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">Curriculum 6 Modules</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {MODULES.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
