import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>SudaTech</h4>
            <p>{t('footer.description')}</p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1Lj1fesWZV/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">f</a>
              <a href="https://www.linkedin.com/in/abdulbagi-hamdan-adam-ismail-097742340" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">in</a>
              <a href="https://wa.me/249965656367" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">W</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('nav.about')}</h4>
            <ul>
              <li><a href="#about">{t('problem.title')}</a></li>
              <li><a href="#features">{t('features.title')}</a></li>
              <li><a href="#impact">{t('impact.title')}</a></li>
              <li><a href="#team">{t('team.title')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('nav.contact')}</h4>
            <ul>
              <li><a href="mailto:zzznnnabdulbagihamdan@gmail.com">zzznnnabdulbagihamdan@gmail.com</a></li>
              <li><a href="tel:+249128020157">+249 128 020 157</a></li>
              <li><a href="https://wa.me/249965656367" target="_blank" rel="noopener noreferrer">WhatsApp: +249 965 656 367</a></li>
              <li><a href="#contact">تواصل معنا</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social Media</h4>
            <ul>
              <li><a href="https://www.linkedin.com/in/abdulbagi-hamdan-adam-ismail-097742340" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/share/1Lj1fesWZV/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://wa.me/249965656367" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:zzznnnabdulbagihamdan@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <p>Made with ❤️ for Education</p>
        </div>
      </div>
    </footer>
  );
}
