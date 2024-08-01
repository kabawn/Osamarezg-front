import React from 'react';
import { useTranslation } from 'react-i18next';
import './Showreel.css';

const Showreel = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';

  // Your Google Drive video file ID
  const googleDriveVideoUrl = `https://drive.google.com/file/d/18NAJNGgZNnqgbvN459xaZtszIoEbf60X/preview`;

  return (
    <div className="showreel-container" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="showreel-text" style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>
        <h1 className='title'>{t('showreelTitle')}</h1>
        <p>{t('showreelDescription')}</p>
      </div>
      <iframe
        className="showreel-video"
        src={googleDriveVideoUrl}
        allow="autoplay"
        allowFullScreen
        title="Showreel Video"
      ></iframe>
    </div>
  );
};

export default Showreel;
