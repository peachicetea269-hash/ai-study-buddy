import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="text-center py-16 px-4 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-8 shadow-sm">
        <Sparkles size={16} className="text-brand-500" />
        AI-powered learning
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
        Understand anything.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Learn it faster.</span>
      </h2>
      
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Turn any topic into a clear explanation and a quick quiz, tailored to your level.
      </p>
    </section>
  );
}
