import React from 'react';
import { useTranslation } from 'react-i18next';
import './Interim.css';

import strategy from '../../Assets/interim.png';
import flag from '../../Assets/flag.png';
import health from '../../Assets/health.png';
import routeSquare from '../../Assets/route-square.png';
import pictureFrame from '../../Assets/picture-frame.png';

const Interim = () => {
  const { t } = useTranslation(''); // Assume your namespace is 'interimSection'

  return (
    <section className="interim-section" id="marketing">
      <div className="interim-container">
        <div className="interim-image">
          <img src={strategy} alt={t('alt.strategy')} />
        </div>

        <div className="interim-text">
          <div className="interim-title">
            <h2>{t('interim-title')}</h2>
            <img src={flag} alt={t('alt.flag')} />
          </div>

          <p className="intro">
            {t('intro_part1')} <br />
            {t('intro_part2')}
          </p>

          <div className="interim-points">
            <div className="point">
              <img src={health} alt={t('alt.health')} />
              <p>
                <strong>{t('points.core_strength.title')}</strong> {t('points.core_strength.description')}
              </p>
            </div>
            <div className="point">
              <img src={routeSquare} alt={t('alt.route')} />
              <p>
                <strong>{t('points.industry_focus.title')}</strong> {t('points.industry_focus.description')}
              </p>
            </div>
            <div className="point">
              <img src={pictureFrame} alt={t('alt.network')} />
              <p>
                <strong>{t('points.network.title')}</strong> {t('points.network.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interim;
