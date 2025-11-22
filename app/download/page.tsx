// ファイルパス: app/download/page.tsx
import Image from 'next/image';
import { PageContainer } from '@/components/PageContainer';
import { Button } from '@/components/ui/Button';

// ... (ResponsiveTableRow コンポーネントは変更なし)
const ResponsiveTableRow = ({ title, description, href, buttonText }: { title: string, description: string, href: string, buttonText: string }) => {
  return (
    <>
      <tr className="hidden border-b border-zinc-800 last:border-b-0 md:table-row">
        <td className="p-4 font-bold">{title}</td>
        <td className="p-4 text-zinc-400">{description}</td>
        <td className="w-40 p-4 text-right">
          <Button href={href} variant="secondary" target="_blank" className="text-sm">
            {buttonText}
          </Button>
        </td>
      </tr>
      <tr className="block border-b border-zinc-800 last:border-b-0 md:hidden">
        <td className="block p-4">
          <h3 className="font-bold text-zinc-100">{title}</h3>
          <p className="mt-1 text-zinc-400">{description}</p>
          <div className="mt-3 text-right">
            <Button href={href} variant="secondary" target="_blank" className="text-sm">
              {buttonText}
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};

// ... (DownloadCard コンポーネントは変更なし)
const DownloadCard = ({ title, description, href, buttonText, imageUrl }: { title: string, description: string, href: string, buttonText: string, imageUrl: string }) => {
  return (
    <div className="rounded-lg border border-zinc-800 bg-black p-6 text-center shadow-md">
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="mt-4 mb-2 text-xl font-bold text-teal-400">{title}</h3>
      <p className="mb-4 text-zinc-400">{description}</p>
      <Button href={href} target="_blank">
        {buttonText}
      </Button>
    </div>
  );
};

export default function DownloadPage() {
  return (
    <PageContainer>
      <h1 className="mb-8 border-b border-zinc-800 pb-4 text-3xl font-bold text-teal-400 md:text-4xl">ダウンロード</h1>

      {/* キャラクター管理 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-teal-400">キャラクター管理</h2>
        <div className="overflow-hidden rounded-lg border border-zinc-800">
          <table className="w-full text-left">
            <tbody className="divide-y divide-zinc-800 md:divide-y-0">
              <ResponsiveTableRow
                title="キャラクターシート"
                description="印刷して使えるＰＤＦです"
                href="https://fujimi-trpg-online.jp/media-download/31/5ce895e7d11cdafd/PDF/"
                buttonText="ダウンロード"
              />
              <ResponsiveTableRow
                title="キャラクターシートサイト"
                description="WEBで使えるキャラクターシートサイト。保存にはログインが必要です。"
                href="https://metamorphose-cs.web.app/"
                buttonText="サイトへ移動"
              />
            </tbody>
          </table>
        </div>
      </section>

      {/* その他配布物 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-teal-400">その他配布物</h2>
        <div className="overflow-hidden rounded-lg border border-zinc-800">
          <table className="w-full text-left">
            <tbody className="divide-y divide-zinc-800 md:divide-y-0">
              <ResponsiveTableRow
                title="ルールまとめ"
                description="すぐ参照できる、印刷もできるＰＤＦです"
                href="https://fujimi-trpg-online.jp/media-download/32/cc1dee14513c59a0/PDF/"
                buttonText="ダウンロード"
              />
            </tbody>
          </table>
        </div>
      </section>
      
      {/* ココフォリア素材 */}
      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-teal-400">ココフォリア素材</h2>
          {/* ↓ 追加: クレジット表記 */}
          <p className="text-sm text-zinc-500">ココフォリアデザイン：きこ様</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <DownloadCard
            title="汎用ルーム【明】"
            description="明るい雰囲気のセッションで使える汎用ルームデータです。"
            href="/metam_ccfolia_light.zip"
            buttonText="ダウンロード"
            imageUrl="/ccfolia-light.jpg"
          />
          <DownloadCard
            title="汎用ルーム【クール】"
            description="クールで都会的な雰囲気の汎用ルームデータです。"
            href="/metam_ccfolia_cool.zip"
            buttonText="ダウンロード"
            imageUrl="/ccfolia-cool.jpg"
          />
          <DownloadCard
            title="汎用ルーム【ダーク】"
            description="ダークでシリアスな雰囲気の汎用ルームデータです。"
            href="/metam_ccfolia_dark.zip"
            buttonText="ダウンロード"
            imageUrl="/ccfolia-dark.jpg"
          />
        </div>
      </section>
    </PageContainer>
  );
}