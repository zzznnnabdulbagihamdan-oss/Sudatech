import { useTranslation } from 'react-i18next';
import './Impact.css';

export default function Impact() {
  const { t } = useTranslation();

  const goals = [
    {
      key: 'access',
      icon: '🌍',
      title: t('impact.goals.access.title'),
      description: t('impact.goals.access.description')
    },
    {
      key: 'quality',
      icon: '📈',
      title: t('impact.goals.quality.title'),
      description: t('impact.goals.quality.description')
    },
    {
      key: 'sustainability',
      icon: '💚',
      title: t('impact.goals.sustainability.title'),
      description: t('impact.goals.sustainability.description')
    },
    {
      key: 'innovation',
      icon: '🚀',
      title: t('impact.goals.innovation.title'),
      description: t('impact.goals.innovation.description')
    }
  ];

  return (
    <section id="impact" className="impact dark">
      <div className="container">
        <div className="section-header">
          <h2>{t('impact.title')}</h2>
          <p className="section-subtitle">{t('impact.subtitle')}</p>
        </div>

        <div className="grid grid-2">
          {goals.map((goal) => (
            <div key={goal.key} className="impact-card animate-fadeInUp">
              <div className="impact-icon">{goal.icon}</div>
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
