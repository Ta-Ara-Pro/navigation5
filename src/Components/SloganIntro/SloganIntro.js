// src/Components/SloganIntro/SloganIntro.js
import React, { useEffect } from 'react';
import './SloganIntro.css';
import subtract from '../../Assets/Subtract.png';
import { useTranslation } from 'react-i18next';

const SloganIntro = ({ onFinish }) => {
  const { t } = useTranslation();
  useEffect(() => {
    const timer = setTimeout(onFinish, 4000); // extended to show words
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-container">
      <div className="circle-wrapper">
        <svg className="circle" viewBox="0 0 100 100">
          <circle
            className="progress-ring"
            cx="50"
            cy="50"
            r="45"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        <img src={subtract} alt="Subtract" className="intro-image" />
        <div className="slogan-words">
        <span className="word word1">{t('signpost')}</span>
          <span className="word word2">{t('for')}</span>
          <span className="word word3">{t('growth')}</span>
        </div>
      </div>
    </div>
  );
};

export default SloganIntro;
