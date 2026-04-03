import { useTranslation } from 'react-i18next';
import './Problem.css';

export default function Problem() {
  const { t } = useTranslation();

  const issues = [
    {
      key: 'disruption',
      icon: '📚',
      title: t('problem.issues.disruption.title'),
      description: t('problem.issues.disruption.description')
    },
    {
      key: 'connectivity',
      icon: '📡',
      title: t('problem.issues.connectivity.title'),
      description: t('problem.issues.connectivity.description')
    },
    {
      key: 'scarcity',
      icon: '👨‍🏫',
      title: t('problem.issues.scarcity.title'),
      description: t('problem.issues.scarcity.description')
    }
  ];

  return (
    <section id="about" className="problem light">
      <div className="container">
        <div className="section-header">
          <h2>{t('problem.title')}</h2>
          <p className="section-subtitle">{t('problem.subtitle')}</p>
        </div>

        <div className="grid grid-3">
          {issues.map((issue) => (
            <div key={issue.key} className="card animate-fadeInUp">
              <div className="card-icon">{issue.icon}</div>
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
