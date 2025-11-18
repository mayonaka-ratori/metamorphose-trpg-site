// ファイルパス: components/ui/Button.tsx
import Link from 'next/link';
import React from 'react';

// ボタンの見た目の種類を定義します
type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  href?: string; // hrefは必須ではなくなります
  children: React.ReactNode;
  variant?: ButtonVariant;
  target?: string;
  className?: string;
}

export const Button = ({ 
  href, 
  children, 
  variant = 'primary', 
  target,
  className = '' 
}: ButtonProps) => {
  
  const baseClasses = 'inline-block rounded-md px-5 py-2 font-medium transition-colors';
  
  // 見た目の種類に応じたスタイル
  const variantClasses = {
    primary: 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300',
    secondary: 'bg-zinc-700 text-white hover:bg-zinc-600',
  };

  // hrefがない（押せない）場合のスタイル
  const disabledClasses = 'cursor-not-allowed bg-zinc-700 text-zinc-500';

  const finalClasses = href 
    ? `${baseClasses} ${variantClasses[variant]} ${className}`
    : `${baseClasses} ${disabledClasses} ${className}`;

  // hrefがある場合はLinkコンポーネント、ない場合は単なるspanとして表示します
  if (href) {
    return (
      <Link 
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={finalClasses}
      >
        {children}
      </Link>
    );
  }

  return (
    <span className={finalClasses}>
      {children}
    </span>
  );
};