import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = isMuted;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting && !video.paused) {
            video.pause();
          } else if (entry.isIntersecting && video.paused) {
            video.play().catch((error) => {
              console.error('Play failed:', error);
            });
          }
        },
        {
          threshold: 0.5,
        }
      );

      observer.observe(video);

      return () => {
        observer.disconnect();
      };
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="hero-container" dir={isRtl ? 'rtl' : 'ltr'}>
      <video
        className="hero-video"
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
      >
        <source src={require('../assets/herovideo.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text" style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>
        <h1>{t('welcomeToMyUniverse')}</h1>
        <p>{t('heroText')}</p>
      </div>
      <button className="sound-toggle" onClick={toggleMute}>
        <i className={isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up'}></i>
      </button>
    </div>
  );
};

export default Hero;
