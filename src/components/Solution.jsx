import { useTranslation } from 'react-i18next';
import './Solution.css';

export default function Solution() {
  const { t } = useTranslation();

  const highlights = [
    {
      key: 'dataLite',
      icon: '⚡',
      title: t('solution.highlights.dataLite.title'),
      description: t('solution.highlights.dataLite.description')
    },
    {
      key: 'offline',
      icon: '📱',
      title: t('solution.highlights.offline.title'),
      description: t('solution.highlights.offline.description')
    },
    {
      key: 'localized',
      icon: '🎓',
      title: t('solution.highlights.localized.title'),
      description: t('solution.highlights.localized.description')
    }
  ];

  return (
    <section className="solution dark">
      <div className="container">
        <div className="section-header">
          <h2>{t('solution.title')}</h2>
          <p className="section-subtitle">{t('solution.subtitle')}</p>
          <p className="section-description">{t('solution.description')}</p>
        </div>

        <div className="grid grid-3">
          {highlights.map((item) => (
            <div key={item.key} className="card dark-card animate-fadeInUp">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
