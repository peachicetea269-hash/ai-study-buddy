import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudyGenerator from './components/StudyGenerator';
import EmptyState from './components/EmptyState';
import StudyResult from './components/StudyResult';
import FeatureCards from './components/FeatureCards';
import Footer from './components/Footer';
import { generateStudyGuide } from './lib/api';

function App() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Beginner');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async (e) => {
    if (e) e.preventDefault();
    const currentTopic = topic.trim();
    if (!currentTopic || loading) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await generateStudyGuide(currentTopic, difficulty);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setResult(null);
    setTopic('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1 w-full">
        <Hero />
        
        <StudyGenerator 
          topic={topic}
          setTopic={setTopic}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          onGenerate={handleGenerate}
          loading={loading}
        />

        {result ? (
          <StudyResult result={result} onClear={handleClear} />
        ) : (
          <EmptyState 
            loading={loading} 
            error={error} 
            onRetry={handleGenerate} 
          />
        )}

        
        <FeatureCards />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
