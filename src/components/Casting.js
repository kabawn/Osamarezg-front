// src/components/Casting.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Casting.css';
import backgroundImage from '../assets/casting/background.png';

const Casting = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language;

  const handleButtonClick = () => {
    navigate('/casting'); // Navigate to the /casting route
  };

  return (
    <div className="casting-container" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="casting-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="casting-content" style={{ fontFamily: currentLang === 'ar' ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>
          <h1>{t('exploringTalents')}</h1>
          <h2>{t('shareExperience')}</h2>
          <button className="casting-button" onClick={handleButtonClick}>{t('registerNow')}</button>
        </div>
      </div>
    </div>
  );
};

export default Casting;
