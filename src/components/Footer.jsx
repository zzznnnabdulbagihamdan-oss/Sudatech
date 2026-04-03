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
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">𝕏</a>
              <a href="#" className="social-icon">in</a>
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
              <li><a href="mailto:support@sudatech.com">support@sudatech.com</a></li>
              <li><a href="tel:+249123456789">+249-123-456789</a></li>
              <li><a href="#">Khartoum, Sudan</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">{t('footer.links.privacy')}</a></li>
              <li><a href="#">{t('footer.links.terms')}</a></li>
              <li><a href="#">Cookie Policy</a></li>
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
