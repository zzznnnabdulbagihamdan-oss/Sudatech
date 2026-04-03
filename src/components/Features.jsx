import { useTranslation } from 'react-i18next';
import './Features.css';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      key: 'ai',
      icon: '🤖',
      title: t('features.items.ai.title'),
      description: t('features.items.ai.description')
    },
    {
      key: 'sync',
      icon: '🔄',
      title: t('features.items.sync.title'),
      description: t('features.items.sync.description')
    },
    {
      key: 'ui',
      icon: '✨',
      title: t('features.items.ui.title'),
      description: t('features.items.ui.description')
    },
    {
      key: 'curriculum',
      icon: '📖',
      title: t('features.items.curriculum.title'),
      description: t('features.items.curriculum.description')
    },
    {
      key: 'progress',
      icon: '📊',
      title: t('features.items.progress.title'),
      description: t('features.items.progress.description')
    },
    {
      key: 'community',
      icon: '👥',
      title: t('features.items.community.title'),
      description: t('features.items.community.description')
    }
  ];

  return (
    <section id="features" className="features light">
      <div className="container">
        <div className="section-header">
          <h2>{t('features.title')}</h2>
          <p className="section-subtitle">{t('features.subtitle')}</p>
        </div>

        <div className="grid grid-3">
          {features.map((feature) => (
            <div key={feature.key} className="feature-card animate-fadeInUp">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
