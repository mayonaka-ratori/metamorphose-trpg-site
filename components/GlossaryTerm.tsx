// ファイルパス: components/GlossaryTerm.tsx
import { Tooltip } from "@/components/ui/tooltip"; // 自作Tooltipをインポート
import { glossary } from "@/app/rule/glossary-data";

export const GlossaryTerm = ({ term }: { term: keyof typeof glossary }) => {
  const description = glossary[term];

  if (!description) {
    return <span>{term}</span>;
  }

  return (
    <Tooltip content={<p>{description}</p>}>
      <span 
        tabIndex={0} // キーボードフォーカスを可能にする
        className="cursor-help font-bold text-teal-400 underline decoration-dotted underline-offset-4 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
      >
        {term}
      </span>
    </Tooltip>
  );
};