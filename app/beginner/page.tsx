// ファイルパス: app/beginner/page.tsx
"use client";

import { PageContainer } from "@/components/PageContainer";
import { ScrollReveal } from "@/components/visual/ScrollReveal";
import { NextChapter } from "@/components/ui/NextChapter";

// イラストのプレースホルダー
const IllustrationPlaceholder = ({ alt, color }: { alt: string; color: string }) => (
  <div className={`relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-zinc-800 ${color} bg-opacity-10 p-8`}>
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    <p className="z-10 text-center font-bold text-zinc-500">{alt}</p>
  </div>
);

export default function BeginnerPage() {
  return (
    <PageContainer>
      {/* 導入部 (Hero Section) */}
      <div className="text-center">
        <ScrollReveal>
          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-teal-400">WELCOME TO METAMORPHOSE</p>
          <h1 className="mb-8 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            ようこそ、<br />
            『メタモルフォゼ』の世界へ。
          </h1>
          <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-zinc-300">
            <p>
              これはあなたたちだけの物語を紡ぐゲームです。<br />
              想像力とコミュニケーション、そして進行を助ける決まり事と、<br className="hidden md:inline"/>
              共に遊ぶ仲間に支えられながら、最高の物語を描きましょう。
            </p>
            <p>
              大丈夫、難しいことはなにもありません。<br />
              興味を持ってくれた時点で、<br className="hidden md:inline"/>
              あなたはこのゲームを楽しむことができるはずですから。
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="mt-24 space-y-32">
        
        {/* Section 1: 怪物へと変わりゆく世界で */}
        <section className="grid gap-12 md:grid-cols-2 md:items-center">
          <ScrollReveal width="w-full">
            <IllustrationPlaceholder 
              alt="【イラストイメージ】日常の中に潜む異形、あるいは少しずつ崩れていく街並み" 
              color="bg-teal-900"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="mb-4 text-3xl font-bold text-teal-400">
              怪物へと変わりゆく世界で
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                この世界は、今あなたが生きている世界とよく似ています。<br />
                唯一違うのは、人間がなんの前触れもなくおぞましい怪物に変貌してしまうというところ。
              </p>
              <p>
                そんな世界で、あなたは怪物に変貌しつつある人間や、怪物に翻弄される人間の生き様を描いて、楽しむことができます。
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Section 2: シナリオという物語 */}
        <section className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* エラー解消済み: classNameによる順序指定が効くようになります */}
          <ScrollReveal width="w-full" delay={0.2} className="order-2 md:order-1">
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <h2 className="mb-4 text-3xl font-bold text-teal-400">
                シナリオという物語
              </h2>
              <p>
                あなたがこの世界の物語を楽しむために、『シナリオ』という筋書きが用意されています。
              </p>
              <p>
                「登場人物の立たされている状況」や「どのように怪物になっていくのか」「なにをしようとしているのか」など、内容はそれぞれ異なります。
              </p>
              <p className="font-bold text-zinc-100">
                さて、あなたはまだ人間であるうちに、なにをしますか？
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal width="w-full" className="order-1 md:order-2">
            <IllustrationPlaceholder 
              alt="【イラストイメージ】開かれた本、あるいは運命の分岐点を示すような抽象画" 
              color="bg-purple-900"
            />
          </ScrollReveal>
        </section>

        {/* Section 3: キャラクターを用意しよう */}
        <section className="grid gap-12 md:grid-cols-2 md:items-center">
          <ScrollReveal width="w-full">
             <IllustrationPlaceholder 
              alt="【イラストイメージ】鏡に映る自分、キャラクターシートを記入する手元" 
              color="bg-red-900"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
             <h2 className="mb-4 text-3xl font-bold text-teal-400">
              キャラクターを用意しよう
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                あなたをはじめ、ゲームの参加者たちは、自分の分身となる登場人物を用意します。<br />
                誰もが自分だけの『キャラクター』を通して、他の参加者の『キャラクター』と関わり合っていくのです。
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Section 4: ロールプレイをして遊ぼう */}
        <section className="grid gap-12 md:grid-cols-2 md:items-center">
          <ScrollReveal width="w-full" delay={0.2} className="order-2 md:order-1">
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <h2 className="mb-4 text-3xl font-bold text-teal-400">
                ロールプレイをして遊ぼう
              </h2>
              <p>
                ロールプレイとは、キャラクターになりきって演じること。
              </p>
              <p>
                キャラクターに扮してセリフを喋ってみたり、状況に応じた行動を取ってみたりする。<br />
                そういった演技を積み重ねていくことで、あなたたちの物語が形作られていくことになるのです。
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal width="w-full" className="order-1 md:order-2">
            <IllustrationPlaceholder 
              alt="【イラストイメージ】会話している人々のシルエット、または劇場の舞台" 
              color="bg-blue-900"
            />
          </ScrollReveal>
        </section>

      </div>

      {/* 次への導線 */}
      <NextChapter 
        title="物語を始める" 
        description="遊び方がわかったら、まずは詳しいルールを見てみましょう。"
        href="/rule"
        label="ARE YOU READY?"
      />
    </PageContainer>
  );
}