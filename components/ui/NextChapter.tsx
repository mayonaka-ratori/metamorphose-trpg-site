// ファイルパス: components/ui/NextChapter.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NextChapterProps {
  title: string;
  description: string;
  href: string;
  label?: string;
}

export const NextChapter = ({ title, description, href, label = "NEXT STEP" }: NextChapterProps) => {
  return (
    <div className="mt-24 border-t border-zinc-800 pt-12">
      <p className="mb-4 text-xs font-bold tracking-widest text-zinc-500">{label}</p>
      <Link 
        href={href}
        className="group flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-teal-500/50 hover:bg-zinc-900"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-zinc-100 transition-colors group-hover:text-teal-400 md:text-3xl">
            {title}
          </h3>
          <ArrowRight className="h-8 w-8 -translate-x-2 text-zinc-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-teal-400 group-hover:opacity-100" />
        </div>
        <p className="text-zinc-400 group-hover:text-zinc-300">
          {description}
        </p>
      </Link>
    </div>
  );
};