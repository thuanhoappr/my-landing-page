import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pickleball Coach-Ready",
  description:
    "Học online gọn cho người bận — ra sân đánh đôi có nhịp, có checklist; gặp Coach là vào bài luôn.",
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

