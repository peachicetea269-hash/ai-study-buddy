import { Lightbulb, Loader2, AlertCircle, RefreshCcw } from 'lucide-react';

export default function EmptyState({ loading, error, onRetry }) {
  if (loading) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 mb-24 text-center">
        <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Loader2 className="animate-spin text-brand-500 mb-6" size={40} />
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Generating your study guide...
          </h3>
          <p className="text-slate-500 max-w-sm mx-auto">
            This might take a few moments as our AI analyzes the topic and prepares your explanation and quiz.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 mb-24 text-center">
        <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-red-200 bg-red-50">
          <AlertCircle className="text-red-500 mb-4" size={40} />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Something went wrong
          </h3>
          <p className="text-slate-600 max-w-md mx-auto mb-6">
            {error}
          </p>
          <button 
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            <RefreshCcw size={16} />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mb-24 text-center">
      <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-dashed border-slate-300 bg-slate-50/50">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-slate-400">
          <Lightbulb size={32} />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          Your study guide will appear here
        </h3>
        <p className="text-slate-500 max-w-sm mx-auto">
          Enter a topic above and generate an AI-powered explanation and quiz.
        </p>
      </div>
    </div>
  );
}
