import React from 'react';
import './WhyIDoThis.css';
import checkIcon from '../../Assets/check-icon.png';
import { useTranslation } from 'react-i18next';



const WhyIDoThis = () => {
      const { t } = useTranslation();
      const benefits = [
        { label: t('benefits.0'), value: 9 },
        { label: t('benefits.1'), value: 8 },
        { label: t('benefits.2'), value: 8 },
        { label: t('benefits.3'), value: 9 },
        { label: t('benefits.4'), value: 7 },
      ];
  return (
    <section className="why-section">
    <div className="why-inner">
      <img src={'/motiveCircle.svg'} alt="circle"
        style={{ width: '350px', position: 'absolute', right: '25%', top: '28%' }} />
      <img src={'/motiveArrow.svg'} alt="arrow"
        style={{ width: '280px', position: 'absolute', right: '30%', top: '60%' }} />
      <img src={'/motiveRings.svg'} alt="rings"
        style={{ width: '400px', position: 'absolute', left: '0%', top: '0%' }} />

      <div className="why-left">
        <span className="tag">{t('why.tag')}</span>
        <h1>{t('why.heading')}</h1>
        <p className="description">{t('why.description')}</p>
        <ul className="checklist">
          {[0, 1, 2].map(index => (
            <li key={index}>
              <img src={checkIcon} alt="check" />
              {t(`why.list.${index}`)}
            </li>
          ))}
        </ul>
        <button className="more-btn">{t('why.button').split('→')[0]} <span>→</span></button>
      </div>

      <div className="why-right">
        <div className="chart-card">
          <h4>{t('why.chart_heading')}</h4>
          <ul className="bar-list">
            {benefits.map((item, index) => (
              <li key={index}>
                <div className="bar-item">
                  <span className="bar-label">{item.label}</span>
                  <div className="bar-wrapper">
                    <div className="bar-fill" style={{ width: `${(item.value / 10) * 100}%` }}></div>
                    <span className="bar-score">{item.value}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="score-note">{t('why.score_note')}</p>

      </div>
    </div>
  </section>
  );
};

export default WhyIDoThis;
