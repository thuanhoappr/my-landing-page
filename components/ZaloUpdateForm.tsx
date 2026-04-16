"use client";

import { useState } from "react";

export function ZaloUpdateForm() {
  const [email, setEmail] = useState("");
  const [zalo, setZalo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/zalo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, zalo }),
      });
      const data = (await response.json()) as { ok: boolean; message?: string };
      if (!response.ok || !data.ok) {
        setError(data.message ?? "Chưa cập nhật được Zalo. Bạn thử lại giúp mình nhé.");
        return;
      }
      setSuccess(
        "Xong rồi — mình đã ghi nhận Zalo. Tài liệu sẽ tới tay bạn sớm thôi.",
      );
      setEmail("");
      setZalo("");
    } catch {
      setError("Lỗi kết nối. Kiểm tra mạng rồi thử lại giúp mình.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label className="block">
        <span className="mb-1 block text-sm text-slate-200">
          Email bạn vừa đăng ký *
        </span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 focus:ring"
          required
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm text-slate-200">Zalo của bạn *</span>
        <input
          type="text"
          value={zalo}
          onChange={(event) => setZalo(event.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 focus:ring"
          placeholder="Số điện thoại hoặc Zalo ID là được"
          required
        />
      </label>

      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      {success ? <p className="text-sm text-emerald-300">{success}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-emerald-400 px-4 py-2 font-semibold text-slate-900 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-300"
      >
        {isSubmitting ? "Đang gửi…" : "Gửi Zalo cho mình"}
      </button>
    </form>
  );
}
