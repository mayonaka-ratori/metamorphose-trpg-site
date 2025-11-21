// 検索対象のデータ構造
export type SearchItem = {
  id: string;
  title: string;
  content: string;
  sectionId: string; // リンク先のID（#whats-metamorphoseなど）
};

export const searchIndex: SearchItem[] = [
  {
    id: "1",
    title: "メタモルフォゼとは",
    content: "現代によく似た世界で、人間がおぞましい怪物に変貌してしまう『怪化現象』がある世界観。",
    sectionId: "whats-metamorphose"
  },
  {
    id: "2",
    title: "変貌者",
    content: "怪化現象が発現した人間。人でなく、まだ怪物でもない存在。いずれ怪物になる。",
    sectionId: "whats-metamorphose"
  },
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
    title: "怪化現象",
    content: "なんの前触れもなく人間から怪物への変貌が始まること。異形化、異能、精神変化など。",
    sectionId: "worldview"
  },
  {
    id: "6",
    title: "チェックポイント",
    content: "シナリオの各場面で起きる重要な出来事を指定するルール。感情の動きやドラマを深く味わうためのもの。",
    sectionId: "game-system"
  },
  {
    id: "7",
    title: "用意するもの",
    content: "ルールブック、キャラクターシート、筆記用具、６面体サイコロ（シナリオによる）。",
    sectionId: "what-to-prepare"
  }
];