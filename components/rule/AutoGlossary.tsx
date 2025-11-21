import React from 'react';
import { glossary } from '@/app/rule/glossary-data';
import { GlossaryTerm } from '@/components/GlossaryTerm';

interface AutoGlossaryProps {
  children: string;
}

export const AutoGlossary = ({ children }: AutoGlossaryProps) => {
  // 用語集のキーを長い順にソート（"怪化"より"怪化現象"を優先マッチさせるため）
  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);
  
  // 正規表現を作成: (怪化現象|変貌者|チェックポイント)
  const regex = new RegExp(`(${terms.join('|')})`, 'g');

  // テキストを分割して処理
  const parts = children.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        if (terms.includes(part)) {
          return <GlossaryTerm key={i} term={part} />;
        }
        return part;
      })}
    </>
  );
};