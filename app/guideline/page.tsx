// ファイルパス: app/guideline/page.tsx
import { PageContainer } from "@/components/PageContainer";
import Link from "next/link";

export default function GuidelinePage() {
  return (
    <PageContainer maxWidth="max-w-3xl">
      <div className="mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-bold text-teal-400 md:text-4xl">
          『怪化と変貌のRPG メタモルフォゼ』
        </h1>
        <h1 className="text-3xl font-bold text-teal-400 md:text-4xl">
          二次創作ガイドライン
        </h1>
      </div>

      <article className="space-y-8 leading-relaxed text-zinc-300">
        <p>
          本作のあらゆる「同人活動」の範疇に入る二次創作活動を無条件で許可します。
        </p>
        <p>
          電子や物理での有償販売や無償頒布、そしてどのような立場の方であっても、収益化を伴う配信や公演などを行うことが可能です。
          また、遊ぶために必要な情報を書籍から引用し、オンラインのキャラクターシートツールなどを使ってＷＥＢ上で保存・公開・使用することを許可します。
        </p>
        <p>
          二次創作を行う際は、次のようなクレジットを、視認性を確保したうえで必ず表示してください。
        </p>

        <div className="rounded-md border border-zinc-800 bg-black p-6 text-center font-mono text-zinc-400">
          <p>＃＃＃＃＃＃</p>
          <p>これは『メタモルフォゼ』のファン活動作品です。</p>
          <p>(C)Isuduka Sakusaku 2025 (C)KADOKAWA</p>
          <p>＃＃＃＃＃＃</p>
        </div>

        {/* --- ↓ 追加・変更箇所: SPLLに関する特記事項 --- */}
        <section className="my-12 rounded-xl border-l-4 border-teal-500 bg-zinc-900/50 p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-teal-400">
            ● 二次創作時にSPLLの申請は不要です
          </h2>
          <div className="space-y-4 text-zinc-200">
            <p>
              本作はTRPGライツ事務局によって策定された「テーブルトークRPG に関する二次創作活動のガイドライン」には批准していません。
            </p>
            <p>
              『スモールパブリッシャーリミテッドライセンス（SPLL）』の条件を満たすような二次創作活動を行う場合でも、<strong className="text-white decoration-teal-500 underline decoration-2 underline-offset-4">申請の必要はありません。</strong>
            </p>
            <p>
              上記のクレジット表記や素材使用のルールを守れば、好きなようにやってよい、ということです。
            </p>
            <p className="mt-4 rounded-md bg-red-900/20 p-4 text-sm font-bold text-red-300">
              ※ただし、公式イラストを「有償配布物」に同梱することは禁じます。<br/>
              （表紙や挿絵への使用はOKですが、素材としてそのまま再販売する行為はNGです）
            </p>
          </div>
        </section>
        {/* --- ↑ 追加ここまで --- */}

        <p>
          イラストを使用する場合には、以下の該当するイラストレーター名の名前を「イラスト：（イラストレーター名）」といった形式で表示してください。
        </p>

        <p>
          なお、ユーザーが著者・イラストレーターなど関係者の方々に許諾を求めて直接コンタクトを取る行為は、大変迷惑なものです。
          決して行わないでください。
        </p>
      </article>
    </PageContainer>
  );
}