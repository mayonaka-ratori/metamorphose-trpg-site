// ファイルパス: app/page.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { LiquidBackground } from '@/components/visual/LiquidBackground';
import { GlitchText } from '@/components/visual/GlitchText';
import { ScrollReveal } from '@/components/visual/ScrollReveal';
import Link from 'next/link';

const FeatureCard = ({ title, description, buttonText, buttonHref }: { title: string, description: string, buttonText: string, buttonHref: string }) => {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-zinc-800 bg-black/60 p-6 text-center shadow-md backdrop-blur-sm transition-colors hover:border-teal-900/50 hover:bg-black/80">
      <div>
        <h3 className="mb-2 text-xl font-bold text-teal-400 md:text-2xl">{title}</h3>
        <p className="mb-4 text-sm text-zinc-400 md:text-base">{description}</p>
      </div>
      <div className="mt-4">
        <Button href={buttonHref}>
          {buttonText}
        </Button>
      </div>
      <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-teal-500/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      
      <LiquidBackground />

      <div className="absolute top-0 left-0 right-0 h-[70vh] select-none md:fixed md:inset-0 md:h-auto">
        <Image 
          src="/main-visual.jpg" 
          alt="メインビジュアル" 
          fill 
          sizes="100vw"
          className="object-contain object-top opacity-60 grayscale-20 md:object-cover md:opacity-50"
          priority
        />
        
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent via-40% to-black to-80% md:from-black/70 md:via-transparent md:to-black/90"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10">
        
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-20 md:pb-32">
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
              
              <div className="mt-10">
                <Link 
                  href="/beginner" 
                  className="inline-block rounded-full border border-zinc-600 bg-black/40 px-6 py-2 text-sm font-bold text-zinc-100 backdrop-blur-md transition-all hover:border-teal-400 hover:bg-teal-900/30 hover:text-teal-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]"
                >
                  🔰 初めての方はこちら
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
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
        
        <section className="bg-linear-to-b from-transparent to-zinc-900/90 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <ScrollReveal delay={0.1}>
                <FeatureCard title="ルール" description="ゲームの概要や主なルールを解説しています" buttonText="詳しく見る" buttonHref="/rule" />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <FeatureCard title="シナリオ" description="様々な物語をここから遊べます" buttonText="一覧を見る" buttonHref="/scenarios" />
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <FeatureCard title="ダウンロード" description="キャラクターシートやココフォリア素材など" buttonText="一覧を見る" buttonHref="/download" />
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <FeatureCard title="ガイドライン" description="ときには創作も" buttonText="確認する" buttonHref="/guideline" />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.5} width="w-full">
              <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center justify-center gap-6 rounded-xl border border-zinc-800 bg-black/50 p-6 backdrop-blur-md md:flex-row md:p-8">
                <div className="relative h-[182px] w-32 shrink-0 overflow-hidden rounded-sm shadow-lg">
                  <Image 
                    src="/cover.png" 
                    alt="メタモルフォゼ ルールブック書影" 
                    fill 
                    sizes="128px"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col items-start text-left">
                  <p className="mb-4 text-sm font-bold text-zinc-400">『メタモルフォゼ』はこちらで購入できます</p>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="https://amzn.to/4rmCaj1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-md bg-[#FF9900]/10 px-4 py-2 text-amber-500 transition-colors hover:bg-[#FF9900]/20"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M12.5 7.5a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m-7-7.5A2.5 2.5 0 0 0 3 4.5v15A2.5 2.5 0 0 0 5.5 22h13A2.5 2.5 0 0 0 21 19.5v-15A2.5 2.5 0 0 0 18.5 2h-13z"/>
                       </svg>
                       <span className="font-bold underline decoration-dotted underline-offset-4 group-hover:text-amber-400">Amazonで購入する</span>
                    </a>

                    <a 
                      href="https://bookwalker.jp/de97a456b9-9ba6-4389-95cc-eba83bf13627/?acode=fx6aEUBc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-md bg-teal-900/20 px-4 py-2 text-teal-400 transition-colors hover:bg-teal-900/40"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                       <span className="font-bold underline decoration-dotted underline-offset-4 group-hover:text-teal-300">BOOK☆WALKERで購入する</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* お問い合わせ・SNSリンク */}
            <ScrollReveal delay={0.6} width="w-full">
              <div className="mx-auto mt-24 max-w-2xl text-center">
                <h2 className="mb-6 text-2xl font-bold text-zinc-200">お問い合わせ</h2>
                <p className="mb-8 text-zinc-400">
                  最新情報は著者・ドラゴンブック編集部のSNSよりご確認ください。
                </p>
                
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a 
                    href="https://x.com/SkSkcearD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    // 修正点: max-w-[240px] -> max-w-60 (Tailwind v4推奨)
                    className="flex w-full max-w-60 items-center justify-center gap-2 rounded-md bg-black border border-zinc-700 px-6 py-4 text-white transition-all hover:bg-zinc-900 hover:border-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                    </svg>
                    <span className="font-bold">著者</span>
                  </a>

                  <a 
                    href="https://x.com/dragonbook_game/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    // 修正点: max-w-[240px] -> max-w-60 (Tailwind v4推奨)
                    className="flex w-full max-w-60 items-center justify-center gap-2 rounded-md bg-black border border-zinc-700 px-6 py-4 text-white transition-all hover:bg-zinc-900 hover:border-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                    </svg>
                    <span className="font-bold">編集部</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>
      </div>
    </div>
  );
}