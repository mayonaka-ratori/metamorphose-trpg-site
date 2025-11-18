// ファイルパス: app/layout.tsx
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
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
    // ↓ suppressHydrationWarning を追加して、Next.jsの警告を解消します
    <html lang="ja" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${notoSansJp.className} flex min-h-screen flex-col text-sm`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}