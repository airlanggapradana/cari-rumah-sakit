import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning={true}>
      <ThemeProvider defaultTheme="system" attribute="class">
        <body className={`${manrope.className}`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
