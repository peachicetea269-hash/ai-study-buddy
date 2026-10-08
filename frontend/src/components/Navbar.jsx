import { BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-brand-500 text-white p-2 rounded-xl shadow-soft">
            <BookOpen size={24} />
          </div>
          <div>
            <h1 className="font-bold text-xl leading-tight text-slate-900">AI Study Buddy</h1>
            <span className="text-xs font-medium text-brand-600 hidden sm:block">AI Learning Assistant</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}
