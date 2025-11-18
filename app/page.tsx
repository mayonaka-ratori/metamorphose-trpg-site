// ファイルパス: app/page.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const FeatureCard = ({ title, description, buttonText, buttonHref }: { title: string, description: string, buttonText: string, buttonHref: string }) => {
  return (
    <div className="rounded-lg border border-zinc-800 bg-black p-6 text-center shadow-md">
      <h3 className="mb-2 text-xl font-bold text-teal-400 md:text-2xl">{title}</h3>
      <p className="mb-4 text-sm text-zinc-400 md:text-base">{description}</p>
      <div className="mt-4">
        <Button href={buttonHref}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <section className="relative flex h-96 items-center justify-center border-b border-zinc-800">
        <Image src="/main-visual.jpg" alt="メタモルフォゼ メインビジュアル" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4 text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">怪化と変貌のRPG</h1>
          <p className="mt-2 text-5xl font-extrabold text-white md:text-6xl">メタモルフォゼ</p>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>
            <span className="font-bold text-teal-400">[UPDATE]</span> 本サイトのプロトタイプを公開しました。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-teal-400">『メタモルフォゼ』とは？</h2>
          <div className="leading-relaxed text-zinc-300">
            <p>
              ここは、現代によく似た世界。<br />
              ひとつ違うのは、人間がおぞましい怪物に変貌してしまう『怪化現象』があること。<br />
              ひとたび変貌が起きれば、止める術はない。
            </p>
            <p className="mt-4">
              人でなく、まだ怪物でもない存在は「変貌者」と呼ばれる。<br />
              変貌が進行し、姿も精神も人から離れていくうち、ワタシはワタシでなくなっていく――。
            </p>
          </div>
        </div>
      </section>
      
      <section className="border-t border-zinc-800 bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          {/* ↓ max-w-5xl lg:grid-cols-4 を max-w-4xl md:grid-cols-2 に修正 */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <FeatureCard title="ルール" description="ゲームの概要や主なルールを解説しています。" buttonText="詳しく見る" buttonHref="/rule" />
            <FeatureCard title="シナリオ" description="様々な物語をここから遊べます。" buttonText="一覧を見る" buttonHref="/scenarios" />
            <FeatureCard title="ダウンロード" description="キャラクターシートやココフォリア素材など。" buttonText="一覧を見る" buttonHref="/download" />
            <FeatureCard title="ガイドライン" description="ときには創作も。" buttonText="確認する" buttonHref="/guideline" />
          </div>
        </div>
      </section>
    </div>
  );
}