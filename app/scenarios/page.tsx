// ファイルパス: app/scenarios/page.tsx
import { PageContainer } from '@/components/PageContainer';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

const ScenarioCard = ({
  title,
  catchphrase,
  description,
  author,
  illustrator,
  design,
  tags,
  buttons,
  imageUrl = "/placeholder.png"
}: {
  title: string;
  catchphrase?: string;
  description: string;
  author: string;
  illustrator?: string;
  design?: string;
  tags: string[];
  buttons: { text: string; href?: string; }[];
  imageUrl?: string;
}) => {
  return (
    <section className="grid grid-cols-1 items-start gap-8 rounded-lg bg-zinc-900 p-4 md:grid-cols-3 md:bg-transparent md:p-0">
      <div className="relative h-96 w-full overflow-hidden rounded-lg bg-zinc-800 md:col-span-1">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <div className="md:col-span-2">
        {/* ↓ スマートフォン表示(md未満)での文字サイズを調整 */}
        <h2 className="text-2xl font-bold text-teal-400 md:text-3xl">{title}</h2>
        {catchphrase && <p className="mt-2 text-base italic text-zinc-400 md:text-lg">{catchphrase}</p>}
        <p className="mt-4 text-zinc-400">{author} {illustrator && `/ イラスト: ${illustrator}`}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300">{tag}</span>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-zinc-300">
          {description.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          {buttons.map((button) => (
            <Button
              key={button.text}
              href={button.href}
              target={button.href ? "_blank" : undefined}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ScenariosPage() {
  const scenarios = [
    {
      title: "You were my buddy.",
      catchphrase: "――相棒の不始末は、自分でつける。",
      description: "見た目が人間のまま「怪物」となった元バディと対決するソロシナリオです。",
      author: "真夜中",
      illustrator: "ペペロン",
      tags: ["１人用", "初心者向け", "ロストあり"],
      buttons: [
        { text: "TALTOで読む", href: "https://talto.cc/projects/D02MF5LmoGVFvykc6au2G" },
        { text: "キットをダウンロード" },
        { text: "トレーラー" },
      ],
    },
    {
      title: "君が英雄（バケモノ）になるまで",
      description: "怪物から大切な人を守るために英雄（バケモノ）になるＰＣと、その大切な人である人間のＰＣのふたりで遊ぶ破滅の物語です。",
      author: "椅子塚サクサク",
      design: "冬墨",
      tags: ["２人用"],
      buttons: [
        { text: "TALTOで読む", href: "https://talto.cc/projects/cpkfKmkyDahbsY0Pr0EGX" },
        { text: "キットをダウンロード" },
        { text: "トレーラー" },
      ],
    },
    {
      title: "怪想リグレット",
      description: "完全に人でなくなる前に何かを成し遂げたい変貌者と、それにつき合うことになった人間。\nふたりで未練を晴らすために駆け回る２人用シナリオです。\nキットはシナリオが入力されたココフォリアルーム付き。",
      author: "椅子塚サクサク",
      illustrator: "isa",
      tags: [],
      buttons: [
        { text: "キットをダウンロード", href: "https://fujimi-trpg-online.jp/archives/001/202510/Metamorphose_s1_KaisoRegret.zip" },
        { text: "トレーラー", href: "https://fujimi-trpg-online.jp/themes/system/images/fileicon/archive.svg" },
      ],
    },
    {
      title: "フリークスティーパーティー",
      description: "人から怪物へと変わりつつある変貌者たちの友人グループが開く、普通じゃないお茶会。\nちょっぴりコミカル、ブラックに遊びたい方向けの２～５人用シナリオです。\nキットはシナリオが入力されたココフォリアルーム付き。",
      author: "椅子塚サクサク",
      illustrator: "翔太郎",
      tags: [],
      buttons: [
        { text: "キットをダウンロード", href: "https://fujimi-trpg-online.jp/archives/001/202510/Metamorphose_s2_FreaksTeaParty.zip" },
        { text: "トレーラー", href: "https://fujimi-trpg-online.jp/themes/system/images/fileicon/archive.svg" },
      ],
    },
    {
      title: "朝の歌",
      description: "やがて生贄となる「神子」と、その世話役であり、最後には命を奪う役割を担う幼馴染の２人用シナリオ。\n因習と怪化現象がかみ合ったことで起きる悲劇を描きます。\n※ルールブック同梱",
      author: "長月",
      illustrator: "南つるよし",
      tags: [],
      buttons: [
        { text: "トレーラー", href: "https://fujimi-trpg-online.jp/themes/system/images/fileicon/archive.svg" },
      ],
    },
    {
      title: "逢う魔が時に",
      description: "だんだんと怪物になっていく「大切な人」を匿う、GMレスの１人用シナリオです。15分～から遊べます。\n※ルールブック同梱",
      author: "真夜中",
      illustrator: "りょうつむり",
      tags: ["１人用", "初心者向け", "ルール付き"],
      buttons: [
        { text: "トレーラー", href: "https://fujimi-trpg-online.jp/archives/001/202510/%E9%80%A2%E3%81%86%E9%AD%94%E3%81%8C%E6%99%82%E3%81%AB_%E3%82%B7%E3%83%8A%E3%83%AA%E3%82%AA%E3%83%88%E3%83%AC%E3%83%BC%E3%83%A9%E3%83%BC.zip" },
      ],
    },
    {
      title: "愛もあなたも胃の中に",
      description: "大切な人によって理不-尽な最後を迎える確定ロスト、ジャーナル（記述）形式の１人用シナリオです。\n※ルールブック同梱",
      author: "椅子塚サクサク・真夜中",
      design: "冬墨",
      tags: ["１人用", "ジャーナル形式", "確定ロスト"],
      buttons: [
        { text: "トレーラー", href: "https://fujimi-trpg-online.jp/themes/system/images/fileicon/archive.svg" },
      ],
    },
  ];

  return (
    <PageContainer>
      <h1 className="mb-8 border-b border-zinc-800 pb-4 text-3xl font-bold text-teal-400 md:text-4xl">シナリオ</h1>
      <div className="space-y-8 md:space-y-16">
        {scenarios.map((scenario, index) => (
          <ScenarioCard key={index} {...scenario} />
        ))}
      </div>
    </PageContainer>
  );
}