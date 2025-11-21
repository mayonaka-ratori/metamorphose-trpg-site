// ファイルパス: components/GlossaryTerm.tsx
import { Tooltip } from "@/components/ui/Tooltip"; 
import { glossary } from "@/app/rule/glossary-data";

export const GlossaryTerm = ({ term }: { term: keyof typeof glossary }) => {
  const description = glossary[term];

  if (!description) {
    return <span>{term}</span>;
  }

  return (
    <Tooltip 
      /* 
         修正箇所: contentの中身を <p> から <span> に変更しました。
         これにより、親要素の <p> と競合せず、エラーが解消されます。
      */
      content={<span className="block text-left leading-normal">{description}</span>}
    >
      <span 
        tabIndex={0} // キーボードフォーカスを可能にする
        className="cursor-help font-bold text-teal-400 underline decoration-dotted underline-offset-4 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
      >
        {term}
      </span>
    </Tooltip>
  );
};