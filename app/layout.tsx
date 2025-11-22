// ファイルパス: app/layout.tsx
import type { Metadata } from "next";
import { Noto_Sans_JP, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-oswald',
  display: 'swap',
});

// ↓ サイトの基本情報を定義
const siteName = "怪化と変貌のRPG メタモルフォゼ";
const siteDescription = "日常は、ある日突然崩れ去る。人間がおぞましい怪物に変貌してしまう『怪化現象』に翻弄される、怪化と変貌のRPG公式サイト。";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://metamorphose-trpg-site-hof4.vercel.app/"; 

export const metadata: Metadata = {
  // ベースとなるURL（OGP画像などを絶対パスで解決するために必須）
  metadataBase: new URL(siteUrl),
  
  // タイトルのテンプレート設定
  // 各ページで title: "ページ名" とすると "ページ名 | サイト名" になります
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,

  // キーワード（SEO用）
  keywords: ["TRPG", "メタモルフォゼ", "怪化", "変貌", "怪物", "無料シナリオ"],

  // OGP設定（SNSシェア用）
  openGraph: {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    locale: "ja_JP",
    type: "website",
    // 画像は app/opengraph-image.png が自動で割り当てられますが、
    // 明示的に設定する場合は以下のように書きます（今回は自動に任せるので省略可）
  },

  // Twitter設定
  twitter: {
    card: "summary_large_image", // 大きな画像で表示
    title: siteName,
    description: siteDescription,
    creator: "@SkSkcearD", // 著者のID
    // 画像は app/twitter-image.png が自動で割り当てられます
  },

  // 著者情報
  authors: [{ name: "椅子塚サクサク", url: "https://x.com/SkSkcearD" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${oswald.variable} scroll-smooth`} suppressHydrationWarning>
      <body className={`flex min-h-screen flex-col text-sm font-sans bg-black text-zinc-100 antialiased`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}