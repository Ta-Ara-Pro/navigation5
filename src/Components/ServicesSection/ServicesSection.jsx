import React from 'react';
import './ServicesSection.css';
import icon1 from '../../Assets/icon11.png';
import icon2 from '../../Assets/icon12.png';
import icon3 from '../../Assets/icon13.png';
import icon4 from '../../Assets/icon14.png';
import icon5 from '../../Assets/icon15.png';
import icon6 from '../../Assets/icon16.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const { t } = useTranslation();
      const navigate = useNavigate();
  

  const services = [
    {
      icon: icon1,
      title: t('servicesSection.services.0.title'),
      description: t('servicesSection.services.0.description'),
    },
    {
      icon: icon2,
      title: t('servicesSection.services.1.title'),
      description: t('servicesSection.services.1.description'),
    },
    {
      icon: icon3,
      title: t('servicesSection.services.2.title'),
      description: t('servicesSection.services.2.description'),
    },
    {
      icon: icon4,
      title: t('servicesSection.services.3.title'),
      description: t('servicesSection.services.3.description'),
    },
    {
      icon: icon5,
      title: t('servicesSection.services.4.title'),
      description: t('servicesSection.services.4.description'),
    },
    {
      icon: icon6,
      title: t('servicesSection.services.5.title'),
      description: t('servicesSection.services.5.description'),
    },
  ];

  return (
    <section className="services-section">
      <div className="services-inner">
        <div className="services-header" style={{ backgroundColor: '#E4F1F0' }}>
          <h2 className="title-services">{t('servicesSection.heading')}</h2>
          <p className="subtitle-services">{t('servicesSection.subtitle')}</p>
          <p className="description-services">{t('servicesSection.description')}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt="icon" className="service-icon-1" />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-button">
          <button className="cta-button-interim" onClick={() => navigate('/interim#Interim-hero')}>
            {t('servicesSection.cta1')} <span>→</span>
          </button>
          <button className="cta-button-services" onClick={() => navigate('/consulting#consulting-hero')}>
            {t('servicesSection.cta2')} <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
