// ファイルパス: components/rule/TableOfContents.tsx
"use client";

import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';
import { SearchModal } from './SearchModal';

interface TocItem {
  href: string;
  text: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  const sectionIds = items.map(item => item.href.replace('#', ''));
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="sticky top-24 flex flex-col gap-6">
      <div>
        <SearchModal />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-zinc-500">Contents</h3>
        
        <ul className="space-y-2 border-l border-zinc-800">
          {items.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <li key={link.href} className="relative">
                {isActive && (
                  // 修正点: -left-[1px] を -left-px に変更
                  <div className="absolute -left-px top-0 bottom-0 w-0.5 bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
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