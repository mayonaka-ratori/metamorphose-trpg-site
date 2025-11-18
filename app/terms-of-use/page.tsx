// ファイルパス: app/terms-of-use/page.tsx
import { PageContainer } from "@/components/PageContainer";
import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <PageContainer maxWidth="max-w-3xl">
      <div className="mb-8 border-b border-zinc-800 pb-4">
        {/* ↓ スマートフォン表示(md未満)での文字サイズを調整 */}
        <h1 className="text-3xl font-bold text-teal-400 md:text-4xl">
          『怪化と変貌のRPG メタモルフォゼ』公式サイト ご利用規約
        </h1>
      </div>

      <article className="space-y-8 text-zinc-300">
        <p>
          この利用規約（以下、「本規約」といいます。）は、『怪化と変貌のRPG メタモルフォゼ』公式サイト（以下、「当サイト」といいます。）の利用に関する条件を定めるものです。ユーザーの皆様は、本規約に同意の上、当サイトをご利用ください。
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-teal-400">第1条（適用）</h2>
          <p>本規約は、当サイトを利用するすべてのユーザーに適用されます。</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-teal-400">第2条（二次創作活動について）</h2>
          <p>当サイトのコンテンツを利用した二次創作活動に関する条件は、本規約のいかなる条項よりも、別途定める「<Link href="/guideline" className="text-teal-400 underline hover:text-teal-300">二次創作ガイドライン</Link>」が優先して適用されるものとします。二次創作活動を行う際は、必ずガイドラインの内容をご確認ください。</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-teal-400">第3条（著作権および知的財産権）</h2>
          <ol className="list-inside list-decimal space-y-4">
            <li>当サイトに掲載されている文章、画像、ロゴ、デザイン、および当サイトを通じて配布されるキャラクターシート、シナリオ、各種素材（以下、総称して「本コンテンツ」といいます。）に関する著作権およびその他の知的財産権は、別途記載がある場合を除き、すべて「椅子塚サクサク」および「株式会社KADOKAWA」（以下、総称して「権利者」といいます。）に帰属します。</li>
            <li>「二次創作ガイドライン」で許可されている範囲を除き、本コンテンツを権利者に無断で複製、転載、改変、再配布、販売、または公衆送信する行為を固く禁じます。</li>
            <li>
              <strong className="font-bold text-zinc-100">（シナリオの改変）</strong> ユーザーは、個人的に遊ぶ目的に限り、当サイトで配布される公式シナリオを自由に改変することができます。ただし、改変したシナリオを用いて遊ぶ際には、事前に参加者全員へ改変している旨を伝え、同意を得るものとします。
              <blockquote className="mt-2 rounded-md border-l-4 border-zinc-700 bg-zinc-800 p-4 italic text-zinc-400">
                <strong>【つまりこういうこと！】</strong><br />
                公式シナリオは、自分たちが遊ぶために自由にアレンジしてOKです！ただし、一緒に遊ぶ友達には「このシナリオ、公式から変えてる部分があるけどいいかな」と確認を取ってください。
              </blockquote>
            </li>
            <li>
              <strong className="font-bold text-zinc-100">（シナリオの翻訳）</strong> ユーザーは、個人的に遊ぶ目的に限り、当サイトで配布される公式シナリオを外国語へ翻訳することができます。ただし、翻訳したシナリオをインターネット上で公開したり、不特定多数へ配布したりする行為は、個人的な利用の範囲を超えるため、これを禁じます。
              <blockquote className="mt-2 rounded-md border-l-4 border-zinc-700 bg-zinc-800 p-4 italic text-zinc-400">
                <strong>【つまりこういうこと！】</strong><br />
                海外の友達と遊ぶために、シナリオを翻訳するのはOKです！でも、翻訳したものをブログに載せたり、ファイルとして配ったりするのはやめてね。
              </blockquote>
            </li>
          </ol>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-teal-400">第4条（禁止事項）</h2>
          <p>ユーザーは、当サイトの利用にあたり、以下の行為をしてはなりません。</p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>当サイトの運営を妨害するおそれのある行為</li>
            <li>権利者、他のユーザー、またはその他の第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-teal-400">第5条（免責事項）</h2>
          <ol className="list-inside list-decimal space-y-2">
            <li>当サイトは、本コンテンツの正確性、完全性、安全性等について、いかなる保証も行うものではありません。</li>
            <li>当サイトは、ユーザーが当サイトを利用したこと、または利用できなかったことによって生じたいかなる損害についても、一切の責任を負いません。</li>
            <li>当サイトは、予告なくサイトの運営を中断または中止することがあります。これによりユーザーに生じた損害についても、一切の責任を負いません。</li>
          </ol>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-teal-400">第6条（規約の変更）</h2>
          <p>当サイトは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の規約は、当サイトに掲載された時点から効力を生じるものとします。</p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-teal-400">第7条（準拠法・裁判管轄）</h2>
          <p>本規約の解釈にあっては、日本法を準拠法とします。当サイトに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
        </section>

        <div className="pt-4 text-right text-zinc-400">
          <p>以上</p>
          <p>制定日: 2025年10月20日</p>
        </div>

      </article>
    </PageContainer>
  );
}