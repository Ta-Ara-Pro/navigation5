// src/Components/SloganIntro/IntroWrapper.js
import React, { useState } from 'react';
import SloganIntro from './SloganIntro';
import HomePage from '../../Pages/HomePage/HomePage';

const IntroWrapper = () => {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? <SloganIntro onFinish={() => setShowIntro(false)} /> : <HomePage />;
};

export default IntroWrapper;
