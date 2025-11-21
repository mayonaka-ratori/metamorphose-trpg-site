// ファイルパス: components/rule/TableOfContents.tsx
"use client";

import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';
import { SearchModal } from './SearchModal';

interface TocItem {
  href: string; // ID (#...)
  text: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  // ID部分だけ抽出してフックに渡す
  const sectionIds = items.map(item => item.href.replace('#', ''));
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="sticky top-24 flex flex-col gap-6">
      {/* 検索ボタン */}
      <div>
        <SearchModal />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-zinc-500">Contents</h3>
        
        {/* 
          修正方針: 
          絶対配置のマーカーバーを廃止し、各リストアイテム自体に border-l (左線) を持たせる設計に変更。
          これにより、項目が2行以上になってもレイアウトが崩れず、線も自然に伸びるようになります。
        */}
        <ul className="space-y-2 border-l border-zinc-800">
          {items.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <li key={link.href} className="relative">
                {/* アクティブな時の左線（光るアクセント） */}
                {isActive && (
                  <div className="absolute -left-[1px] top-0 bottom-0 w-0.5 bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
                )}
                
                <Link 
                  href={link.href} 
                  className={`block py-1 pl-4 text-sm transition-colors duration-200 ${
                    isActive 
                      ? "font-bold text-teal-400" 
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};