// ファイルパス: components/PageContainer.tsx
import React from 'react';

type MaxWidth = 'max-w-2xl' | 'max-w-3xl' | 'max-w-4xl' | 'max-w-5xl';

interface PageContainerProps {
  children: React.ReactNode;
  maxWidth?: MaxWidth;
}

export const PageContainer = ({ children, maxWidth = 'max-w-4xl' }: PageContainerProps) => {
  // 修正点: py-12 (48px) -> py-12 md:py-20
  // スマホでは少し詰め、PCではゆったりさせる
  const containerClasses = `container mx-auto px-4 py-12 md:py-20 ${maxWidth}`;
  
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};