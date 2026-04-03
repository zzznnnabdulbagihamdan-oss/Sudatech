import { useTranslation } from 'react-i18next';
import './Hero.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fadeInUp">
            <h1>{t('hero.title')}</h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">{t('hero.cta')}</button>
              <button className="btn btn-outline">{t('hero.learnMore')}</button>
            </div>
          </div>
          <div className="hero-visual animate-slideInRight">
            <div className="hero-graphic">
              <div className="graphic-element graphic-1">📚</div>
              <div className="graphic-element graphic-2">🤖</div>
              <div className="graphic-element graphic-3">💡</div>
              <div className="graphic-element graphic-4">🌍</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
