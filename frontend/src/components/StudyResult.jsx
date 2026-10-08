import { BookOpen } from 'lucide-react';

export default function StudyResult({ result, onClear }) {
  if (!result) return null;

  const { topic, difficulty, result: content } = result;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mb-16">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-brand-50 text-brand-600 p-2 rounded-xl">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                {topic || 'Study Guide'}
              </h2>
              <span className="text-sm font-medium text-slate-500">
                AI Generated Explanation & Quiz
              </span>
            </div>
          </div>
          
          {difficulty && (
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold whitespace-nowrap">
              Level: {difficulty}
            </div>
          )}
        </div>

        <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-slate-900 mb-8">
          <div className="whitespace-pre-wrap text-slate-700 text-lg">
            {content || 'No content provided.'}
          </div>
        </div>

        <div className="flex justify-center border-t border-slate-100 pt-6">
          <button
            onClick={onClear}
            className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            Generate Another
          </button>
        </div>

      </div>
    </div>
  );
}
