// src/components/ScriptSubmission.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ScriptSubmission.css';
import heroImage from '../assets/writer.jpeg'; // Ensure you have this image in the correct path

const ScriptSubmission = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';

  return (
    <>
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className="hero-text" style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>{t('scriptSubmission')}</h1>
      </div>
      <Container className={`script-submission-container ${isRtl ? 'rtl' : 'ltr'}`}>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="intro-text" style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>
              {t('scriptIntro')}
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group controlId="fullName">
                <Form.Label>{t('fullName')}</Form.Label>
                <Form.Control type="text" placeholder={t('fullName')} />
              </Form.Group>
              <Form.Group controlId="age" className="mt-3">
                <Form.Label>{t('age')}</Form.Label>
                <Form.Control type="number" placeholder={t('age')} />
              </Form.Group>
              <Form.Group controlId="phoneNumber" className="mt-3">
                <Form.Label>{t('phoneNumber')}</Form.Label>
                <Form.Control type="tel" placeholder={t('phoneNumber')} />
              </Form.Group>
              <Form.Group controlId="script" className="mt-3">
                <Form.Label>{t('uploadScript')}</Form.Label>
                <Form.Control type="file" accept=".pdf,.doc,.docx" />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-4 button">
                {t('submit')}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ScriptSubmission;
