// ファイルパス: app/guideline/page.tsx
import { PageContainer } from "@/components/PageContainer";
import Link from "next/link";

export default function GuidelinePage() {
  return (
    <PageContainer maxWidth="max-w-3xl">
      <div className="mb-8 border-b border-zinc-800 pb-4">
        {/* ↓ スマートフォン表示(md未満)での文字サイズを調整 */}
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

        <p>
          ※本作はTRPGライツ事務局によって策定された「テーブルトークRPGに関する二次創作活動のガイドライン」には批准していません。
        </p>
        <p className="font-bold text-zinc-200">
          『スモールパブリッシャーリミテッドライセンス（SPLL）』の条件を満たすような活動を行う場合でも、申請の必要はありません。
        </p>

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