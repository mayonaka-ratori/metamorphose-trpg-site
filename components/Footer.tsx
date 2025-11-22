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
          
          {/* ↓ 追加: キャラクターシート */}
          <a 
            href="https://metamorphose-cs.web.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-white"
          >
            キャラクターシート
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>

          <Link href="/guideline" className="transition-colors hover:text-white">ガイドライン</Link>
          <Link href="/terms-of-use" className="transition-colors hover:text-white">利用規約</Link>
        </nav>
      </div>
    </footer>
  );
};