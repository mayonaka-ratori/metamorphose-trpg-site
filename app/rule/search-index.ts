// ファイルパス: app/rule/search-index.ts

// 検索対象のデータ構造
export type SearchItem = {
  id: string;
  title: string;
  content: string;
  sectionId: string; // リンク先のID（#whats-metamorphoseなど）
};

export const searchIndex: SearchItem[] = [
  // 「メタモルフォゼとは」セクションは削除されたため、インデックスからも削除
  // { id: "1", title: "メタモルフォゼとは", ... }, 
  // { id: "2", title: "変貌者", ... }, 

  {
    id: "3",
    title: "できること：変貌者",
    content: "変貌を隠して生きる、力を利用する、処分しようとする人間と戦う。",
    sectionId: "what-can-do"
  },
  {
    id: "4",
    title: "できること：人間",
    content: "大切な人を守る、大切な人を手にかける、怪物や変貌者を利用する。",
    sectionId: "what-can-do"
  },
  {
    id: "5",
    title: "世界の設定：怪化現象",
    content: "なんの前触れもなく人間から怪物への変貌が始まること。異形化、異能、精神変化など。変貌に決まったルールはない。",
    sectionId: "worldview"
  },
  {
    id: "8",
    title: "変貌の進行",
    content: "変貌者が怪物へと近づいていく流れ。人間としての特徴を消し、怪物としての特徴を獲得する。",
    sectionId: "game-system"
  },
  {
    id: "9",
    title: "怪化現象の発生",
    content: "人間が変貌者となり、怪物となる運命が定まること。人間としての特徴を最低1つ消し、怪物としての特徴を獲得する。",
    sectionId: "game-system"
  },
  {
    id: "10",
    title: "ロスト",
    content: "キャラクターが以降の展開に登場できない状態になること。死亡するか、すべての人間としての特徴を失った場合になる。",
    sectionId: "game-system"
  },
  {
    id: "6",
    title: "チェックポイント",
    content: "シナリオの各場面で起きる重要な出来事を指定するルール。自分が自分ではなくなっていく状況やドラマを味わうためのもの。",
    sectionId: "game-system"
  },
  {
    id: "7",
    title: "用意するもの",
    content: "ルールブック、キャラクターシート、筆記用具、６面体サイコロ（シナリオによる）。BOOK☆WALKERで購入可能。",
    sectionId: "what-to-prepare"
  }
];