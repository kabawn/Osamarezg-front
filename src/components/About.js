import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import aboutImage from '../assets/osamaoknoback.png'; // Replace with your actual image path
import './About.css';

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';

  return (
    <section id="about" className="about-section" dir={isRtl ? 'rtl' : 'ltr'}>
      <Container>
        <Row className="align-items-center">
          <Col
            md={6}
            className={`about-text ${isRtl ? 'rtl' : ''}`}
            style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}
          >
            <h2>{t('aboutOsama')}</h2>
            <p>{t('aboutDescription1')}</p>
          </Col>
          <Col md={6}>
            <img
              src={aboutImage}
              alt={t('aboutOsama')}
              className="about-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
