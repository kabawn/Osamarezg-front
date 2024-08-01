// src/components/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Import custom styles for the footer

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className={`footer text-white py-5 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>{t('keepInTouch')}</h5>
            <p>{t('email')}</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/osama.rezg" className="text-white ">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://x.com/OsamaRezg" className="text-white ">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/osamarezg/" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/osama-rezg-62a61743/" className="text-white">
              <i class="bi bi-linkedin"></i>
                            </a>
            </div>
          </div>
          <div className="col-md-6">
            <h5>{t('haveQuestions')}</h5>
            <form>
              <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control" placeholder={t('namePlaceholder')} />
                </div>
                <div className="col">
                  <input type="email" className="form-control" placeholder={t('emailPlaceholder')} />
                </div>
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="3" placeholder={t('descriptionPlaceholder')}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">{t('submitButton')}</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
