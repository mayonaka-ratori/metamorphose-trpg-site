// ファイルパス: components/Header.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#1a1a1a]/80 backdrop-blur-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-white hover:text-gray-300" onClick={closeMenu}>
          メタモルフォゼ
        </Link>

        <button
          className="rounded-md p-2 text-white transition-colors hover:bg-zinc-800 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開閉する"
          aria-expanded={isMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        {/* PC用メニュー */}
        <div className="hidden items-center space-x-6 text-sm font-medium text-zinc-300 md:flex">
          <Link href="/beginner" className="text-teal-400 transition-colors hover:text-teal-300">初めての方へ</Link>
          <div className="h-4 w-px bg-zinc-700"></div>
          <Link href="/rule" className="transition-colors hover:text-white">ルール</Link>
          <Link href="/scenarios" className="transition-colors hover:text-white">シナリオ</Link>
          <Link href="/download" className="transition-colors hover:text-white">ダウンロード</Link>
          
          {/* ↓ 追加: キャラクターシート (外部リンク) */}
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
        </div>

        {/* スマホ用メニュー */}
        <div className={`w-full md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="mt-4 flex flex-col space-y-2 border-t border-zinc-800 pt-4">
            <Link href="/beginner" className="rounded-md bg-zinc-800/50 px-3 py-2 text-base font-bold text-teal-400 transition-colors hover:bg-zinc-800 hover:text-teal-300" onClick={closeMenu}>初めての方へ</Link>
            <Link href="/rule" className="rounded-md px-3 py-2 text-base text-gray-200 transition-colors hover:bg-zinc-800 hover:text-white" onClick={closeMenu}>ルール</Link>
            <Link href="/scenarios" className="rounded-md px-3 py-2 text-base text-gray-200 transition-colors hover:bg-zinc-800 hover:text-white" onClick={closeMenu}>シナリオ</Link>
            <Link href="/download" className="rounded-md px-3 py-2 text-base text-gray-200 transition-colors hover:bg-zinc-800 hover:text-white" onClick={closeMenu}>ダウンロード</Link>
            
            {/* ↓ 追加: スマホ用メニュー */}
            <a 
              href="https://metamorphose-cs.web.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md px-3 py-2 text-base text-gray-200 transition-colors hover:bg-zinc-800 hover:text-white"
              onClick={closeMenu}
            >
              キャラクターシート
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>

            <Link href="/guideline" className="rounded-md px-3 py-2 text-base text-gray-200 transition-colors hover:bg-zinc-800 hover:text-white" onClick={closeMenu}>ガイドライン</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};