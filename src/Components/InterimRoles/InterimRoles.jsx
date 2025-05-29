import React from 'react';
import { useTranslation } from 'react-i18next';
import './InterimRoles.css';
import greenTick from '../../Assets/greenTick.png';
import blueTick from '../../Assets/blueTick.png';
import paperPlane from '../../Assets/paperplane.png';

const interimData = [
  {
    role: 'CMO',
    color: '#7CCFB3',
    tick: greenTick
  },
  {
    role: 'CBO',
    color: '#418FDE',
    tick: blueTick
  }
];



const comparisonData = [
  {
    role: 'CMO'
  },
  {
    role: 'CBO'
  }
];

const InterimRoles = () => {
  const { t, i18n} = useTranslation();
  const deliverables0 = [
   t('InterimRoles.deliverables0.Strategic'),
    t('InterimRoles.deliverables0.Clear'),
    t('InterimRoles.deliverables0.Consistency Across Touchpoints'),
    t('InterimRoles.deliverables0.Adaptability & Innovation'),
    t('InterimRoles.deliverables0.Internal Brand Alignment'),
    t('InterimRoles.deliverables0.Performance-Driven Brand Management'),
    t('InterimRoles.deliverables0.Customer-Centric Experience')
  ];

  const cboMetrics = [
    {
      title: t('InterimRoles.cboMetrics.Engagement')
    },
    {
      title: t('InterimRoles.cboMetrics.Awareness')
    },
    {
      title: t('InterimRoles.cboMetrics.Loyalty')
    },
    {
      title: t('InterimRoles.cboMetrics.Voice')
    }
  ];
  
  return (
    <>
      <div className="interim-container" id="cmo-cbo">
        {interimData.map((roleData, index) => (
          <div className="interim-column0" key={index}>
            <h2>
              {t("InterimRoles.titlePrefix")}{' '}
              <span style={{ color: roleData.color }}>{roleData.role}?</span>
            </h2>
            <p className="interim-desc">{t(`InterimRoles.roles.${roleData.role}`)}</p>
            <div className="interim-column">
              <div className="deliver-section">
                <h3>{t('InterimRoles.deliverTitle', { role: roleData.role })}</h3>
                <ul>
                  {deliverables0.map((item, i) => (
                    <li key={i}>
                      <img src={roleData.tick} alt="tick" />
                      <div>
                        <strong>{t(`InterimRoles.deliverables.${item}`) ? item : ''}</strong>
                        <p>{t(`InterimRoles.deliverables.${item}`)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <img
          src="/interim-navi.svg"
          alt="navi"
          style={{ position: 'absolute', right: '7rem', bottom: '-18%', width: '15%' }}
        />
      </div>

      {/* 30/60/90 Plan Section */}
      <div className="plan-wrapper">
        <h2 className="plan-title">
          {t('InterimRoles.planTitle')}
          <span className="blue-text"> CBO </span>
          {/* {i18n.language === 'en' ? 'Plan' : ''} */}
        </h2>
        <p className="plan-subtitle">{t('InterimRoles.planSubtitle')}</p>
        <div className="plan-circles">
          <div className="circle-block0">
            <img src={require('../../Assets/30.png')} alt="30" className="circle-number" />
            <h4>{t('InterimRoles.plan.foundationTitle')}</h4>
            <p>{t('InterimRoles.plan.foundationDesc')}</p>
          </div>
          <div className="circle-block1">
            <img src={require('../../Assets/60.png')} alt="60" className="circle-number" />
            <h4>{t('InterimRoles.plan.strategyTitle')}</h4>
            <p>{t('InterimRoles.plan.strategyDesc')}</p>
          </div>
          <div className="circle-block2">
            <img src={require('../../Assets/90.png')} alt="90" className="circle-number" />
            <h4>{t('InterimRoles.plan.activationTitle')}</h4>
            <p>{t('InterimRoles.plan.activationDesc')}</p>
          </div>
          <img
            src="/interimFullRings.svg"
            alt="rings"
            style={{ position: 'absolute', left: '5%', bottom: '-18%', width: '40%', zIndex: 0 }}
          />
        </div>
        <img src={paperPlane} alt="plane" className="plane-icon" />

        {/* Metrics Box */}
        <div className="metrics-section">
          <h3 className="metrics-title">{t('InterimRoles.metricsTitle0')}</h3>
          <p className="metrics-des">
            {t('InterimRoles.metricsSubtitle')
            .split('\n')
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            </p>
          <div className="metrics-box">
            <h4>{t('InterimRoles.metricsTitle')}</h4>
            <ul>
              {cboMetrics.map((metric, i) => (
                <li key={i}>
                  <img src={blueTick} alt="tick" />
                  <div>
                    <strong className="title-metric">{t(`InterimRoles.metrics.${metric.title}`) ? metric.title : ''}</strong>
                    <p className="des-metric">{t(`InterimRoles.metrics.${metric.title}`)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="metrics-note">{t('InterimRoles.metricsNote')}</p>
          </div>
          <img
            src="/navi.svg"
            alt="navi"
            style={{ position: 'absolute', right: '27%', top: '-23%', width: '7%', zIndex: 5 }}
          />
          <img
            src="/interimFullRings.svg"
            alt="rings"
            style={{ position: 'absolute', right: '15%', bottom: '-20%', opacity: 0.6, width: '48%', zIndex: 0 }}
          />
        </div>

        {/* Comparison Section */}
        <div className="2" id="vs-section">
          <h3 className="metrics-title">{t('InterimRoles.comparisonTitle')}</h3>
          <p className="metrics-des">
            {t('InterimRoles.comparisonSubtitle')
             .split('\n')
             .map((line, index) => (
               <React.Fragment key={index}>
                 {line}
                 <br />
               </React.Fragment>
             ))}
            </p>

          <div className="comparison-section">
            {comparisonData.map((item, index) => {
              const role = item.role;
              return (
                <div className="interim-column-vs" key={index}>
                  <div className="comparison-item">
                    <h2>Interim {role}:</h2>
                    <div className="desc-with-icon">
                      <img
                        src={role === 'CMO' ? greenTick : blueTick}
                        alt="tick"
                        className="comparison-tick"
                      />
                      <p className="interim-desc">{t(`InterimRoles.comparison.Interim ${role}`)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default InterimRoles;
