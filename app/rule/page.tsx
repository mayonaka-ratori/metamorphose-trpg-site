// ファイルパス: app/rule/page.tsx
"use client";

import Link from 'next/link';
import { PageContainer } from '@/components/PageContainer'; 
import { useState } from 'react';

const PreparationItemCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900/50 p-6">
      <h3 className="mb-2 text-lg font-bold text-zinc-100">{title}</h3>
      <div className="text-zinc-400">{children}</div>
    </div>
  );
};

export default function RulePage() {
  const [isTocOpen, setIsTocOpen] = useState(false);

  const tocLinks = [
    { href: "#whats-metamorphose", text: "『メタモルフォゼ』とは？" },
    { href: "#what-can-do", text: "『メタモルフォゼ』でできること" },
    { href: "#worldview", text: "世界観紹介" },
    { href: "#game-system", text: "ゲームシステム紹介" },
    { href: "#what-to-prepare", text: "用意するもの" },
  ];

  return (
    <PageContainer>
      <h1 className="mb-8 border-b border-zinc-800 pb-4 text-4xl font-bold text-teal-400">ルール</h1>

      <div className="grid grid-cols-1 gap-x-12 md:grid-cols-4">
        {/* --- スマートフォン用の開閉式目次 --- */}
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

        {/* --- PC用の固定目次 --- */}
        <aside className="hidden md:col-span-1 md:block">
          <nav className="sticky top-24">
            <h3 className="mb-4 font-bold text-zinc-400">目次</h3>
            <ul className="space-y-3">
              {tocLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-400 transition-colors hover:text-white">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* --- 右カラム：コンテンツ --- */}
        <div className="md:col-span-3">
          <article className="space-y-12 leading-relaxed text-zinc-300">
            <section id="whats-metamorphose">
              <h2 className="mb-4 text-2xl font-bold text-teal-400">『メタモルフォゼ』とは？</h2>
              <div className="space-y-4">
                <p>ここは、現代によく似た世界。ひとつだけ違うのは、人間がおぞましい怪物に変貌してしまう『怪化現象』があること。</p>
                <p>ひとたび変貌が起きれば、止める術はない。人でなく、まだ怪物でもない存在は「変貌者」と呼ばれ、やがて変貌が進行し、姿も精神も人から離れていくうち、ワタシはワタシでなくなり、怪物に成り果てる――。</p>
                <p>そんな『怪化現象』のある世界で、変貌者と人間の織り成す物語を紡いでみませんか？</p>
              </div>
            </section>

            <section id="what-can-do">
              <h2 className="mb-4 text-2xl font-bold text-teal-400">『メタモルフォゼ』でできること</h2>
              <div className="space-y-4">
                <p>『メタモルフォゼ』は、専任の進行役（ＧＭ）なしに、ボイスセッションで１時間から遊べる、ロールプレイ重視のTRPGです。</p>
                <p>あなたが演じるキャラクターは、怪物へと変貌していく「変貌者」か、そんな変貌者とかかわりを持つ「人間」。</p>
                <div>
                  <p className="font-bold text-zinc-100">変貌者なら……</p>
                  <ul className="list-inside list-disc pl-2">
                    <li>変貌を隠し、できる限り「人」として生きようとする</li>
                    <li>得た力を利用し、好き放題にふるまう</li>
                    <li>「処分」しようと迫る人間から逃れたり戦ったり</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-zinc-100">人間なら……</p>
                  <ul className="list-inside list-disc pl-2">
                    <li>変わりゆく大切な人を守るため奔走する</li>
                    <li>完全な怪物となる前に、大切な人を手にかけようとする</li>
                    <li>怪物や変貌者を私欲のために利用しようとする</li>
                  </ul>
                </div>
                <p>……など、「人が怪物に変貌する世界」を舞台に多様な物語を深く味わうことができます。</p>
              </div>
            </section>

            <section id="worldview">
              <h2 className="mb-4 text-2xl font-bold text-teal-400">世界観紹介</h2>
              <div className="space-y-4">
                <p>『怪化現象』とは、なんの前触れもなく、人間から怪物への変貌がはじまること。</p>
                <ul className="list-inside list-disc pl-2">
                  <li>異形化や姿かたちの変化</li>
                  <li>異能や特殊能力</li>
                  <li>趣味嗜好や精神性の大幅な変化</li>
                </ul>
                <p>など、変貌にこれといって決まったルールはありません。</p>
                <p>確実なのは、いずれ必ず怪物となること。怪物はこの世界において駆除対象であること。そして、変貌者を人間と怪物のどちらとみなすかは、人による、ということです。</p>
              </div>
            </section>

            <section id="game-system">
              <h2 className="mb-4 text-2xl font-bold text-teal-400">ゲームシステム紹介</h2>
              <div className="space-y-4">
                <p>『メタモルフォゼ』は、シナリオという物語の単位で遊びます。シナリオごとに期初転結があり、登場キャラクターが置かれる状況も異なります。</p>
                <p>変貌者は、シナリオ中に【変貌の進行】によって、体や心が変貌していきます。その人をその人たらしめるものが消えてゆき、やがて怪物に成り果てるのです。また人間にも『怪化現象』が発生することがあります（プレイヤーが任意に起こすこともできます）。</p>
                <div>
                  <p className="font-bold text-zinc-100">★チェックポイント</p>
                  <p>自分が自分ではなくなっていく。知っている人がバケモノになっていく。そういった状況で生まれるドラマや感情の動きを、思う存分味わうために「チェックポイント」というルールがあります。これは、シナリオの各場面で起きる重要な出来事を指定するものです。チェックポイントは、プレイヤー側で用意することもできます。</p>
                </div>
              </div>
            </section>
            
            <section id="what-to-prepare">
              <h2 className="mb-4 text-2xl font-bold text-teal-400">用意するもの</h2>
              <div className="space-y-6">
                <PreparationItemCard title="ルールブック">
                  <p>電子版でもOK。初めて遊ぶ際は全員で１冊あればOKです。</p>
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
          </article>
        </div>
      </div>
    </PageContainer>
  );
}