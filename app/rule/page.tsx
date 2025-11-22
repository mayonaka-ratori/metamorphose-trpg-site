// ファイルパス: app/rule/page.tsx
"use client";

import Link from 'next/link';
import { PageContainer } from '@/components/PageContainer'; 
import { useState } from 'react';
import { TableOfContents } from '@/components/rule/TableOfContents';
import { AutoGlossary } from '@/components/rule/AutoGlossary';
import { SearchModal } from '@/components/rule/SearchModal';
import { NextChapter } from '@/components/ui/NextChapter';

const PreparationItemCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900/50 p-6">
      <h3 className="mb-2 text-lg font-bold text-zinc-100">{title}</h3>
      <div className="text-zinc-400 leading-relaxed">{children}</div>
    </div>
  );
};

export default function RulePage() {
  const [isTocOpen, setIsTocOpen] = useState(false);

  const tocLinks = [
    { href: "#what-can-do", text: "『メタモルフォゼ』でできること" },
    { href: "#worldview", text: "世界の設定" },
    { href: "#game-system", text: "主なルール" },
    { href: "#what-to-prepare", text: "用意するもの" },
  ];

  return (
    <PageContainer>
      <div className="mb-8 flex flex-col gap-4 border-b border-zinc-800 pb-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-4xl font-bold text-teal-400">ルール</h1>
        <div className="md:hidden">
          <SearchModal />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-12 md:grid-cols-4">
        <div className="mb-8 md:hidden">
          <button
            onClick={() => setIsTocOpen(!isTocOpen)}
            className="flex w-full items-center justify-between rounded-md bg-zinc-800 px-4 py-3 font-bold text-zinc-100"
          >
            <span>目次を見る</span>
            <svg
              className={`h-5 w-5 transform transition-transform ${isTocOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isTocOpen && (
            <nav className="mt-2 rounded-md bg-zinc-800 p-4">
              <ul className="space-y-3">
                {tocLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="block text-zinc-300 transition-colors hover:text-white" onClick={() => setIsTocOpen(false)}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <aside className="hidden md:col-span-1 md:block">
          <TableOfContents items={tocLinks} />
        </aside>

        <div className="md:col-span-3">
          <article className="space-y-24 leading-relaxed text-zinc-300">
            
            <section id="what-can-do" className="scroll-mt-24">
              <h2 className="mb-6 text-2xl font-bold text-teal-400 border-b border-zinc-800 pb-2">『メタモルフォゼ』でできること</h2>
              <div className="space-y-4">
                <p>『メタモルフォゼ』は、専任の進行役（ＧＭ）なしに、ボイスセッションで１時間から遊べる、ロールプレイ重視のTRPGです。</p>
                <p><AutoGlossary>あなたが演じるキャラクターは、怪物へと変貌していく「変貌者」か、そんな変貌者とかかわりを持つ「人間」。</AutoGlossary></p>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                  <div className="rounded-md bg-zinc-900/50 p-4">
                    <p className="mb-2 font-bold text-teal-200">変貌者なら……</p>
                    <ul className="list-inside list-disc space-y-1 pl-2 text-zinc-400">
                      <li>変貌を隠し、できる限り「人」として生きようとする</li>
                      <li>得た力を利用し、好き放題にふるまう</li>
                      <li>「処分」しようと迫る人間から逃れたり戦ったり</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-zinc-900/50 p-4">
                    <p className="mb-2 font-bold text-teal-200">人間なら……</p>
                    <ul className="list-inside list-disc space-y-1 pl-2 text-zinc-400">
                      <li>変わりゆく大切な人を守るため奔走する</li>
                      <li>完全な怪物となる前に、大切な人を手にかけようとする</li>
                      <li><AutoGlossary>怪物や変貌者を私欲のために利用しようとする</AutoGlossary></li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4"><AutoGlossary>……など、「人が怪物に変貌する世界」を舞台に多様な物語を深く味わうことができます。</AutoGlossary></p>
              </div>
            </section>

            <section id="worldview" className="scroll-mt-24">
              <h2 className="mb-6 text-2xl font-bold text-teal-400 border-b border-zinc-800 pb-2">世界の設定</h2>
              <div className="space-y-4">
                <p><AutoGlossary>『怪化現象』とは、なんの前触れもなく、人間から怪物への変貌がはじまること。</AutoGlossary></p>
                <ul className="list-inside list-disc pl-4 marker:text-teal-500">
                  <li>異形化や姿かたちの変化</li>
                  <li>異能や特殊能力</li>
                  <li>趣味嗜好や精神性の大幅な変化</li>
                </ul>
                <p>など、変貌にこれといって決まったルールはありません。</p>
                <p><AutoGlossary>確実なのは、いずれ必ず怪物となること。怪物はこの世界において駆除対象であること。そして、変貌者を人間と怪物のどちらとみなすかは、人による、ということです。</AutoGlossary></p>
              </div>
            </section>

            <section id="game-system" className="scroll-mt-24">
              <h2 className="mb-6 text-2xl font-bold text-teal-400 border-b border-zinc-800 pb-2">主なルール</h2>
              <div className="space-y-10">
                
                <div>
                  <h3 className="mb-3 text-lg font-bold text-teal-100 flex items-center gap-2">
                    <span className="text-teal-500">★</span>変貌の進行
                  </h3>
                  <p className="mb-2"><AutoGlossary>変貌者が怪物へと近づいていく流れ。</AutoGlossary></p>
                  <p>
                    変貌者の『キャラクター』は、【人間としての特徴】を指定された数選んで消してください。<br/>
                    その後、消した【人間としての特徴】の数だけ、【怪物としての特徴】を選択して獲得します。
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-bold text-teal-100 flex items-center gap-2">
                    <span className="text-teal-500">★</span>怪化現象の発生
                  </h3>
                  <p className="mb-2"><AutoGlossary>人間が変貌者となり、やがて怪物となる運命が定まったこと。</AutoGlossary></p>
                  <p>
                    人間のキャラクターが持つ【人間としての特徴】を最低１つ選んで消し、代わりに【怪物としての特徴】を選択して獲得してください。<br/>
                    このタイミングで、すべての【人間としての特徴】を消すことはできません。
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-bold text-teal-100 flex items-center gap-2">
                    <span className="text-teal-500">★</span>ロスト
                  </h3>
                  <p>
                    『キャラクター』が以降の展開に登場できない状態になること。<br/>
                    【死亡】するか、すべての【人間としての特徴】を失い、完全に怪物となった場合、【ロスト】となります。
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-bold text-teal-100 flex items-center gap-2">
                    <span className="text-teal-500">★</span>チェックポイント
                  </h3>
                  <div className="space-y-3">
                    <p><AutoGlossary>自分が自分ではなくなっていく。</AutoGlossary></p>
                    <p>知っている人がバケモノになっていく。</p>
                    <p>そういった状況で生まれるドラマや感情の動きを、思う存分味わうため、シナリオの各場面で起きる重要な出来事を指定するルールです。</p>
                    <p>シナリオの各場面で指定されています。</p>
                  </div>
                </div>

                {/* ↓ 追加: ★チェックポイントを用意する */}
                <div>
                  <h3 className="mb-3 text-lg font-bold text-teal-100 flex items-center gap-2">
                    <span className="text-teal-500">★</span>チェックポイントを用意する
                  </h3>
                  <div className="space-y-3">
                    <p>参加者は【チェックポイント】を事前に用意できます。</p>
                    <p>用意した【チェックポイント】を使いたい場合は、場面の描写、解説が読み上げられた後に使用を宣言しましょう。</p>
                    <p>その後、内容を他の参加者に共有し、どうするか検討した後にその場面に【チェックポイント】が新たに設定されます。<br/>
                    検討の結果、難しそうであれば却下されることもあります。</p>
                  </div>
                </div>

              </div>
            </section>
            
            <section id="what-to-prepare" className="scroll-mt-24">
              <h2 className="mb-6 text-2xl font-bold text-teal-400 border-b border-zinc-800 pb-2">用意するもの</h2>
              <div className="space-y-6">
                <PreparationItemCard title="ルールブック">
                  <p className="mb-2">電子版でもOK。初めて遊ぶ際は全員で１冊あればOKです。</p>
                  <div className="flex flex-col gap-3">
                    {/* ↓ 追加: Amazonへのリンク */}
                    <a 
                      href="https://amzn.to/4rmCaj1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg font-bold text-amber-500 hover:text-amber-400 underline decoration-dotted underline-offset-4"
                    >
                      Amazonで購入する
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                    
                    {/* BOOKWALKERへのリンク */}
                    <a 
                      href="https://bookwalker.jp/de97a456b9-9ba6-4389-95cc-eba83bf13627/?acode=fx6aEUBc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 underline decoration-dotted underline-offset-4"
                    >
                      BOOK☆WALKERで購入する
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </PreparationItemCard>

                <PreparationItemCard title="キャラクターシート">
                  <p><Link href="/download" className="text-teal-400 underline hover:text-teal-300">ダウンロード</Link>ページから入手できます。</p>
                </PreparationItemCard>

                <PreparationItemCard title="筆記用具">
                  <p>メモが取れるアプリなどでもOKです。</p>
                </PreparationItemCard>

                <PreparationItemCard title="その他">
                  <p>オンラインで遊ぶ場合はオンラインセッションツールと、通話できる環境を準備しましょう。</p>
                  <p>シナリオによっては６面体のサイコロを使う場合もあります。</p>
                </PreparationItemCard>
              </div>
            </section>

            <NextChapter 
              title="シナリオを探す" 
              description="ルールを把握したら、次は遊ぶシナリオを見つけましょう。様々な物語があなたを待っています。"
              href="/scenarios"
            />
          </article>
        </div>
      </div>
    </PageContainer>
  );
}