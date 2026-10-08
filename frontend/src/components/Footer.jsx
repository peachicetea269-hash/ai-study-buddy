import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <BookOpen size={20} className="text-brand-500" />
          AI Study Buddy
        </div>
        <div className="text-slate-500 text-sm font-medium">
          Built for smarter learning.
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-200/50 px-3 py-1 rounded-full">
          Frontend prototype
        </div>
      </div>
    </footer>
  );
}
