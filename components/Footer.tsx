// ファイルパス: components/Footer.tsx
"use client"; 

import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-zinc-800 bg-zinc-900">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-zinc-400">
          &copy; {year} 椅子塚サクサク・KADOKAWA. All Rights Reserved.
        </p>
        
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
          <Link href="/rule" className="transition-colors hover:text-white">ルール</Link>
          <Link href="/scenarios" className="transition-colors hover:text-white">シナリオ</Link>
          <Link href="/download" className="transition-colors hover:text-white">ダウンロード</Link>
          <Link href="/guideline" className="transition-colors hover:text-white">ガイドライン</Link>
          {/* ↓ 利用規約へのリンクを追加します */}
          <Link href="/terms-of-use" className="transition-colors hover:text-white">利用規約</Link>
        </nav>
      </div>
    </footer>
  );
};