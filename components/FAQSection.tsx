const FAQS = [
  {
    q: "Khoa hoc nay co phu hop nguoi moi khong?",
    a: "Co. Noi dung duoc thiet ke cho nguoi moi va nguoi can he thong lai cach danh doi.",
  },
  {
    q: "Moi ngay can bao nhieu thoi gian hoc?",
    a: "Khoang 15-20 phut/ngay la du de theo kip lo trinh 4 tuan.",
  },
  {
    q: "Hoc online roi co can Coach offline khong?",
    a: "Nen co. Khoa hoc giup ban vao buoi offline voi Coach hieu qua va tap trung hon.",
  },
  {
    q: "Noi dung tap trung danh don hay danh doi?",
    a: "Tap trung vao Pickleball danh doi cho nguoi ban ron.",
  },
  {
    q: "Toi da biet danh co ban, co nen hoc?",
    a: "Nen. Khoa hoc giup he thong hoa va toi uu phoi hop 2 nguoi.",
  },
  {
    q: "Co bai tap thuc hanh khong?",
    a: "Co checklist va bai tap toi gian de ban ap dung ngay khi ra san.",
  },
  {
    q: "Toi co the hoc lai video nhieu lan khong?",
    a: "Co, ban co the hoc lai de cuong co nen tang truoc moi buoi tap.",
  },
  {
    q: "Khi nao nen len luoi trong danh doi?",
    a: "Ban se hoc quy tac len luoi an toan theo tinh huong Serve/Return cu the.",
  },
  {
    q: "NVZ/Dink co kho khong?",
    a: "Khong can qua phuc tap, muc tieu la du dung de giam loi va giu nhip rally.",
  },
  {
    q: "Sau khi dang ky thi nhan gi?",
    a: "Ban duoc chuyen qua trang cam on de nhan huong dan, link nhom va qua tang.",
  },
];

export function FAQSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold md:text-3xl">FAQ</h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
            >
              <summary className="cursor-pointer font-semibold text-slate-100">
                {faq.q}
              </summary>
              <p className="mt-2 text-slate-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
