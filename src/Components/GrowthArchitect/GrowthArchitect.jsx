import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './GrowthArchitect.css';
import strategy from '../../Assets/555.png';
import icon1 from '../../Assets/blueTick.png';
import chartSuccess from "../../Assets/chart-success.png";

const services = [
  { key: 'customerCentricity', icon: icon1 },
  { key: 'technologyData', icon: icon1 },
  { key: 'brandStrategy', icon: icon1 },
  { key: 'marketingOutreach', icon: icon1 },
  { key: 'revenueGrowth', icon: icon1 }
];

const GrowthArchitect = () => {
  const { t } = useTranslation();

  return (
    <section className="strategy-section" id="growth">
      <div className="strategy-inner">
        <div className="strategy-content">
          <h1 style={{ fontSize: "25px" }}>
            <Trans i18nKey="growthArchitect.heading" components={[<br />]} />
          </h1>
          <img src={chartSuccess} alt="" />
          <div className="strategy-text">
            <p style={{ marginTop: "1rem" }}>
              <Trans
                i18nKey="growthArchitect.paragraph1"
                components={[<br />, <br />, <br />]}
              />
            </p>
            <p className="intro2">
              <strong>{t('growthArchitect.subheading')}</strong>
            </p>
          </div>

          <div className="strategy-services">
            {services.map((service, index) => (
              <div className="service-item" key={index}>
                <div className="service-icon2">
                  <img src={service.icon} alt="service icon" />
                </div>
                <div className="service-info">
                  <h4>{t(`growthArchitect.services.${service.key}.title`)}</h4>
                  <p style={{ paddingRight: "12rem", marginTop: "-0.1rem" }}>
                    {t(`growthArchitect.services.${service.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="strategy-image-1"
          style={{
            backgroundImage: `url('/ringsRight.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            backgroundSize: 'auto 100%',
          }}
        >
          <div className="image-container">
            <img src={strategy} alt="Compass" className="strategy-full-image-1" />
            <span className="strategy-label-1">{t('growthArchitect.imageLabel')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthArchitect;
