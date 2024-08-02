// src/components/Hero.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import heroVideo from '../assets/introhero.mp4'; // Ensure you have this video

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';

  return (
    <div className="hero-container" dir={isRtl ? 'rtl' : 'ltr'}>
      <video className="hero-video" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text" style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>
        <h1>{t('welcomeToMyUniverse')}</h1>
        <p>{t('heroText')}</p>
      </div>
    </div>
  );
};

export default Hero;
