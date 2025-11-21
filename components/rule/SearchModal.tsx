// ファイルパス: components/rule/SearchModal.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import { searchIndex, SearchItem } from '@/app/rule/search-index';

export const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [mounted, setMounted] = useState(false); // マウント確認用
  const inputRef = useRef<HTMLInputElement>(null);

  // クライアントサイドでのみポータルを使用するためのフラグ
  useEffect(() => {
    setMounted(true);
  }, []);

  // ショートカットキー (Ctrl+K / Cmd+K) の監視
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // モーダルが開いたときにフォーカス＆スクロール固定
  useEffect(() => {
    if (isOpen) {
      // 背景スクロールを防止
      document.body.style.overflow = 'hidden';
      if (inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    } else {
      // スクロールロック解除
      document.body.style.overflow = 'unset';
    }
    
    // クリーンアップ関数
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // 検索処理
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = searchIndex.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.content.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered);
  }, [query]);

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
  };

  // モーダルの中身（ポータルで転送する部分）
  const modalContent = (
    // z-indexをstyleで直接指定し、Tailwindのバージョンによる警告を回避します
    <div 
      className="fixed inset-0 flex items-start justify-center bg-black/80 p-4 pt-[15vh] backdrop-blur-sm"
      style={{ zIndex: 9999 }}
    >
      {/* 背景クリックで閉じるための透明なレイヤー */}
      <div className="absolute inset-0" onClick={handleClose} />

      <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl">
        
        {/* 検索入力エリア */}
        <div className="flex items-center border-b border-zinc-800 px-4 py-3">
          <Search className="mr-3 h-5 w-5 text-zinc-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="キーワードを入力（例：怪化、判定、戦闘...）"
            className="h-6 w-full bg-transparent text-base text-zinc-100 placeholder-zinc-500 focus:outline-none"
          />
          <button onClick={handleClose} className="ml-2 text-zinc-500 hover:text-zinc-300">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 結果表示エリア */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length > 0 ? (
            <ul className="space-y-1">
              {results.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/rule#${item.sectionId}`}
                    onClick={handleClose}
                    className="block rounded-md px-4 py-3 transition-colors hover:bg-zinc-800"
                  >
                    <div className="font-bold text-teal-400">{item.title}</div>
                    <div className="mt-1 line-clamp-2 text-xs text-zinc-400">{item.content}</div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : query ? (
            <div className="py-8 text-center text-zinc-500">該当するルールが見つかりません</div>
          ) : (
            <div className="py-8 text-center text-sm text-zinc-600">キーワードを入力して検索</div>
          )}
        </div>
        
        {/* フッター */}
        <div className="border-t border-zinc-800 bg-zinc-900/50 px-4 py-2 text-xs text-zinc-500">
          <span className="mr-2">↑↓ で移動</span>
          <span className="mr-2">Enter で選択</span>
          <span>Esc で閉じる</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* トリガーボタン（ここは元の場所に表示） */}
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">ルールを検索...</span>
        <span className="inline sm:hidden">検索</span>
        <kbd className="hidden rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 sm:inline-block">
          Ctrl K
        </kbd>
      </button>

      {/* モーダル本体（ポータルでbody直下に転送） */}
      {mounted && isOpen && createPortal(modalContent, document.body)}
    </>
  );
};