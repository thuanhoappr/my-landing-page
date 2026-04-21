import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pickleball 30 Phút — Học Nhanh Chơi Chất",
  description:
    "Khóa Nhập Môn Tốc Độ cho người đi làm: thực chiến Pickleball cùng Coach PPR (USA). Tập thử miễn phí, có vợt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-slate-950 antialiased">{children}</body>
    </html>
  );
}

