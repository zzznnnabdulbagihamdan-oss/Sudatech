import { useTranslation } from 'react-i18next';
import { Linkedin, Facebook, MessageCircle } from 'lucide-react';
import './Team.css';

export default function Team() {
  const { t } = useTranslation();

  const founder = {
    name: 'Abdulbagi Hamdan Adam Ismail',
    title: t('team.lead.title'),
    bio: t('team.lead.bio'),
    image: '/profile-real.jpg',
    links: [
      { 
        icon: Linkedin, 
        label: 'LinkedIn', 
        url: 'https://www.linkedin.com/in/abdulbagi-hamdan-adam-ismail-097742340',
        color: '#0a66c2'
      },
      { 
        icon: Facebook, 
        label: 'Facebook', 
        url: 'https://www.facebook.com/share/1Lj1fesWZV/',
        color: '#1877f2'
      },
      { 
        icon: MessageCircle, 
        label: 'WhatsApp', 
        url: 'https://wa.me/249965656367',
        color: '#10b981'
      }
    ]
  };

  return (
    <section id="team" className="team light">
      <div className="container">
        <div className="section-header">
          <h2>{t('team.title')}</h2>
          <p className="section-subtitle">{t('team.subtitle')}</p>
        </div>

        <div className="team-grid">
          <div className="team-member animate-fadeInUp">
            <div className="member-image-wrapper">
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="member-photo"
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="member-content">
              <h3 className="member-name">{founder.name}</h3>
              <p className="member-title">{founder.title}</p>
              <p className="member-bio">{founder.bio}</p>
              <div className="member-socials">
                {founder.links.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--link-color': link.color }}
                      title={link.label}
                    >
                      <Icon size={20} />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
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
