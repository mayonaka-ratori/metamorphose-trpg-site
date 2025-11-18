// ファイルパス: components/PageContainer.tsx
import React from 'react';

// Tailwind CSSの最大幅クラスを型として定義
type MaxWidth = 'max-w-2xl' | 'max-w-3xl' | 'max-w-4xl' | 'max-w-5xl';

interface PageContainerProps {
  children: React.ReactNode;
  maxWidth?: MaxWidth; // オプションとしてmaxWidthプロパティを追加
}

export const PageContainer = ({ children, maxWidth = 'max-w-4xl' }: PageContainerProps) => {
  // プロパティで渡されたmaxWidth、またはデフォルトの'max-w-4xl'を適用
  const containerClasses = `container mx-auto px-4 py-12 ${maxWidth}`;
  
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};