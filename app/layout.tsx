import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pickleball Coach-Ready",
  description: "Học online để ra sân tập hiệu quả",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

