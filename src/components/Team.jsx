import { useTranslation } from 'react-i18next';
import './Team.css';

export default function Team() {
  const { t } = useTranslation();

  return (
    <section id="team" className="team light">
      <div className="container">
        <div className="section-header">
          <h2>{t('team.title')}</h2>
          <p className="section-subtitle">{t('team.subtitle')}</p>
        </div>

        <div className="team-grid">
          <div className="team-member animate-fadeInUp">
            <div className="member-avatar">👨‍💼</div>
            <h3>{t('team.lead.name')}</h3>
            <p className="member-title">{t('team.lead.title')}</p>
            <p className="member-bio">{t('team.lead.bio')}</p>
            <div className="member-socials">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Email</a>
            </div>
          </div>
        </div>

        <div className="team-cta">
          <h3>هل تريد الانضمام إلى فريقنا؟</h3>
          <p>نحن نبحث عن متطوعين ومتخصصين للمساهمة في هذا المشروع الرائع</p>
          <button className="btn btn-secondary">تواصل معنا</button>
        </div>
      </div>
    </section>
  );
}
