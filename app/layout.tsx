// ファイルパス: app/layout.tsx
import type { Metadata } from "next";
// ↓ Oswaldフォントをインポートします
import { Noto_Sans_JP, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Noto Sans JP の設定
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-noto-sans-jp', // CSS変数として利用
  display: 'swap',
});

// Oswald フォントの設定
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-oswald', // CSS変数として利用
  display: 'swap',
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "メタモルフォゼ TRPG公式サイト",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "怪化と変貌のRPG『メタモルフォゼ』の公式サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${oswald.variable} scroll-smooth`} suppressHydrationWarning>
      <body className={`flex min-h-screen flex-col text-sm font-sans`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}