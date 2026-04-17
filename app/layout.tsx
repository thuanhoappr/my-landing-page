import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pickleball cho Người Nhập Môn",
  description:
    "Chuẩn bị online gọn gàng — ra sân tập chơi có nhịp, có checklist; gặp Coach là vào bài luôn.",
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

