import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <div className="logo-icon">🚀</div>
          <div className="logo-text">
            <h1>SudaTech</h1>
            <p>{t('nav.home')}</p>
          </div>
        </div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home">{t('nav.home')}</a>
          <a href="#about">{t('nav.about')}</a>
          <a href="#features">{t('nav.features')}</a>
          <a href="#impact">{t('nav.impact')}</a>
          <a href="#team">{t('nav.team')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" onClick={toggleLanguage}>
            {i18n.language === 'ar' ? 'EN' : 'العربية'}
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
