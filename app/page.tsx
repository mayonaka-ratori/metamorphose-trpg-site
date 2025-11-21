// ファイルパス: app/page.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { LiquidBackground } from '@/components/visual/LiquidBackground';
import { GlitchText } from '@/components/visual/GlitchText';
import { ScrollReveal } from '@/components/visual/ScrollReveal';
import Link from 'next/link';

const FeatureCard = ({ title, description, buttonText, buttonHref }: { title: string, description: string, buttonText: string, buttonHref: string }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-black/60 p-6 text-center shadow-md backdrop-blur-sm transition-colors hover:border-teal-900/50 hover:bg-black/80">
      <h3 className="mb-2 text-xl font-bold text-teal-400 md:text-2xl">{title}</h3>
      <p className="mb-4 text-sm text-zinc-400 md:text-base">{description}</p>
      <div className="mt-4">
        <Button href={buttonHref}>
          {buttonText}
        </Button>
      </div>
      {/* カードホバー時の装飾 */}
      <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-teal-500/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      
      {/* --- 1. 最背面: シェーダー背景 --- */}
      <LiquidBackground />

      {/* --- 2. その上: キービジュアル (侵食演出) --- */}
      <div className="fixed inset-0 z-0 select-none">
        <Image 
          src="/main-visual.jpg" 
          alt="メインビジュアル" 
          fill 
          // 修正点: スマホ時は object-contain (全体を収める) に変更
          // PC (md以上) は object-cover (全画面埋める) のまま
          className="object-contain object-top opacity-60 grayscale-20 md:object-cover md:object-center md:opacity-50"
          priority
        />
        
        {/* 修正点: スマホ時は画像の下端がシェーダーに馴染むようグラデーションを調整 */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black md:from-black/70 md:via-transparent md:to-black/90"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      </div>

      {/* --- 3. コンテンツレイヤー --- */}
      <div className="relative z-10">
        
        {/* ヒーローセクション */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-32">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="mb-4 text-3xl font-bold tracking-widest text-white drop-shadow-lg md:text-4xl">
                怪化と変貌のRPG
              </h1>
            </ScrollReveal>
            
            <div className="my-6">
              <GlitchText 
                text="メタモルフォゼ" 
                className="text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(45,212,191,0.5)] md:text-7xl" 
              />
            </div>
            
            <ScrollReveal delay={0.4}>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/rule" className="min-w-40 bg-teal-600/90 py-3 text-base shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:bg-teal-500 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                  ルールを読む
                </Button>
                <Link 
                  href="/scenarios" 
                  className="flex min-w-40 items-center justify-center rounded-md border border-zinc-400 bg-black/30 py-3 text-base font-medium text-zinc-100 transition-all hover:border-white hover:bg-black/50 hover:text-white backdrop-blur-sm"
                >
                  シナリオを探す
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* お知らせセクション */}
        <section className="border-y border-zinc-800/50 bg-black/60 py-4 backdrop-blur-md">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal width="w-full">
              <p className="text-zinc-300">
                <span className="mr-2 font-bold text-teal-400">[UPDATE]</span> 
                本サイトのプロトタイプを公開しました。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 世界観（About）セクション */}
        <section className="py-24">
          <div className="container mx-auto max-w-2xl px-4 text-center">
            <ScrollReveal>
              <h2 className="mb-8 text-3xl font-bold text-teal-400 shadow-teal-500/20 drop-shadow-lg md:text-4xl">『メタモルフォゼ』とは？</h2>
              <div className="space-y-6 text-lg leading-relaxed text-zinc-200">
                <p>
                  ここは、現代によく似た世界。<br />
                  ひとつ違うのは、人間がおぞましい怪物に変貌してしまう<br/>
                  『怪化現象』があること。<br />
                  ひとたび変貌が起きれば、止める術はない。
                </p>
                <p>
                  人でなく、まだ怪物でもない存在は<strong className="text-teal-300">「変貌者」</strong>と呼ばれる。<br />
                  変貌が進行し、姿も精神も人から離れていくうち、<br/>
                  ワタシはワタシでなくなっていく――。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        {/* コンテンツカードセクション */}
        <section className="bg-linear-to-b from-transparent to-zinc-900/90 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <ScrollReveal delay={0.1}>
                <FeatureCard title="ルール" description="ゲームの概要や主なルールを解説しています。" buttonText="詳しく見る" buttonHref="/rule" />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <FeatureCard title="シナリオ" description="様々な物語をここから遊べます。" buttonText="一覧を見る" buttonHref="/scenarios" />
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <FeatureCard title="ダウンロード" description="キャラクターシートやココフォリア素材など。" buttonText="一覧を見る" buttonHref="/download" />
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <FeatureCard title="ガイドライン" description="ときには創作も。" buttonText="確認する" buttonHref="/guideline" />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}