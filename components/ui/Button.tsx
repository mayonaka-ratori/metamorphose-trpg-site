// ファイルパス: components/ui/Button.tsx
import Link from 'next/link';
import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  href?: string;
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
  
  // ↓ baseClassesから transition-colors を削除 (Linkコンポーネント自体に適用するため)
  const baseClasses = 'inline-block rounded-md px-5 py-2 font-medium';
  
  const variantClasses = {
    primary: 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300',
    secondary: 'bg-zinc-700 text-white hover:bg-zinc-600',
  };

  const disabledClasses = 'cursor-not-allowed bg-zinc-700 text-zinc-500';

  const finalClasses = href 
    ? `${baseClasses} ${variantClasses[variant]} ${className}`
    : `${baseClasses} ${disabledClasses} ${className}`;

  if (href) {
    return (
      // ↓ Linkコンポーネントにはglobals.cssで定義したトランジションが自動で適用されます
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

  // ↓ 押せないボタンには transition-colors を追加し、カーソルが外れた際の色の戻りを滑らかにします
  return (
    <span className={`${finalClasses} transition-colors`}>
      {children}
    </span>
  );
};