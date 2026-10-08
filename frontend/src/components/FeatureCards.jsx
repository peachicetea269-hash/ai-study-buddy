import { BookOpenCheck, BrainCircuit, Target } from 'lucide-react';

export default function FeatureCards() {
  const features = [
    {
      icon: <BookOpenCheck size={24} className="text-brand-500" />,
      title: "Clear explanations",
      description: "Understand difficult concepts in simple language."
    },
    {
      icon: <BrainCircuit size={24} className="text-purple-500" />,
      title: "Quick quizzes",
      description: "Test your understanding immediately."
    },
    {
      icon: <Target size={24} className="text-emerald-500" />,
      title: "Difficulty aware",
      description: "Content adapts to your selected level."
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left p-6">
              <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-slate-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
