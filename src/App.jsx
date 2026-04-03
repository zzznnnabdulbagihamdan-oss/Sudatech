import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Impact from './components/Impact';
import Team from './components/Team';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import './App.css';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'ar';
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Impact />
        <Team />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;
