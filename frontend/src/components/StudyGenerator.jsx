import { Search, Loader2 } from 'lucide-react';

export default function StudyGenerator({ 
  topic, 
  setTopic, 
  difficulty, 
  setDifficulty, 
  onGenerate, 
  loading 
}) {
  const isButtonDisabled = !topic.trim() || loading;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mb-8">
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        <form onSubmit={onGenerate} className="flex flex-col gap-6">
          
          <div>
            <label htmlFor="topic-input" className="block text-sm font-semibold text-slate-800 mb-2">
              What do you want to learn?
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 transition-colors ${loading ? 'text-slate-300' : 'text-slate-400'}`} />
              </div>
              <input
                id="topic-input"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                disabled={loading}
                placeholder="e.g. Binary Classification, Operating Systems, Photosynthesis..."
                className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                aria-label="Study topic"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between pt-2">
            
            <div className="flex-1 w-full md:w-auto">
              <label className="sr-only">Difficulty Level</label>
              <div className={`flex bg-slate-100 p-1 rounded-lg w-full md:w-fit transition-opacity ${loading ? 'opacity-60 pointer-events-none' : ''}`}>
                {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setDifficulty(level)}
                    disabled={loading}
                    className={`flex-1 md:flex-none px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      difficulty === level
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                    aria-pressed={difficulty === level}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isButtonDisabled}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              aria-label={loading ? "Generating study guide" : "Generate study guide"}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Generating...
                </>
              ) : (
                'Generate Study Guide'
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
