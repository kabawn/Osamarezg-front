import React, { useState } from 'react';
import axios from '../axios'; // Ensure the path is correct
import { useTranslation } from 'react-i18next';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ScriptSubmission.css';
import heroImage from '../assets/writer.jpeg';

const ScriptSubmission = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';

  const initialFormData = {
    fullName: '',
    country: '',
    sex: '',
    phone: '',
    email: '',
    scriptFile: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    if (id === 'scriptFile') {
      if (files[0].size > 10 * 1024 * 1024) { // 10 MB limit for script files
        setErrorMessage('Script file size should not exceed 10 MB.');
        return;
      }
      setFormData({ ...formData, scriptFile: files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('country', formData.country);
    data.append('sex', formData.sex);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('scriptFile', formData.scriptFile);

    try {
      const response = await axios.post('/submit-script', data);
      if (response.status === 200) {
        setSuccessMessage('Thanks for submitting your script. We will contact you soon.');
        setFormData(initialFormData); // Reset the form
      } else {
        setErrorMessage('Failed to submit script.');
      }
    } catch (error) {
      setErrorMessage('Error submitting script. Please try again later.');
    }
  };

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
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="fullName">
                <Form.Label>{t('fullName')}</Form.Label>
                <Form.Control type="text" placeholder={t('fullName')} value={formData.fullName} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="country" className="mt-3">
                <Form.Label>{t('country')}</Form.Label>
                <Form.Control type="text" placeholder={t('country')} value={formData.country} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="sex" className="mt-3">
                <Form.Label>{t('sex')}</Form.Label>
                <Form.Control as="select" value={formData.sex} onChange={handleInputChange} required>
                  <option value="">{t('selectSex')}</option>
                  <option value="male">{t('male')}</option>
                  <option value="female">{t('female')}</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="phone" className="mt-3">
                <Form.Label>{t('phoneNumber')}</Form.Label>
                <Form.Control type="tel" placeholder={t('phoneNumber')} value={formData.phone} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="email" className="mt-3">
                <Form.Label>{t('email')}</Form.Label>
                <Form.Control type="email" placeholder={t('email')} value={formData.email} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="scriptFile" className="mt-3">
                <Form.Label>{t('uploadScript')}</Form.Label>
                <Form.Control type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
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
