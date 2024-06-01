import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Cari Info Rumah Sakit",
  description: "Mencari informasi ketersediaan kamar rumah sakit di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${manrope.className}`}>{children}</body>
    </html>
  );
}
