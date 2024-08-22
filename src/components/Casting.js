import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Casting.css';
import backgroundImage from '../assets/casting/background.png';

const Casting = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language;

  const handleRegisterClick = () => {
    navigate('/casting');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // Delay by 0 milliseconds to ensure it happens after navigation
  };

  const handleScriptSubmitClick = () => {
    navigate('/submit-script');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  return (
    <div className="casting-container" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="casting-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="casting-content" style={{ fontFamily: currentLang === 'ar' ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>
          <h1>{t('exploringTalents')}</h1>
          <h2>{t('shareExperience')}</h2>
          <button className="casting-button" onClick={handleRegisterClick}>
            {t('registerNow')}
          </button>
          <div className="script-submission">
            <h3>{t('shareYourScript')}</h3>
            <p>{t('inviteMessage')}</p>
            <button className="casting-button" onClick={handleScriptSubmitClick}>
              {t('submitScript')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casting;
