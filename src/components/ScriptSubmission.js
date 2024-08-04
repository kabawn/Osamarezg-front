// src/components/ScriptSubmission.js
import React, { useState } from 'react';
import axios from '../axios'; // Make sure the path is correct
import { useTranslation } from 'react-i18next';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ScriptSubmission.css';
import heroImage from '../assets/writer.jpeg';

const ScriptSubmission = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phoneNumber: '',
    photos: [],
    video: null
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    if (id === 'photos') {
      if (files.length > 3) {
        setErrorMessage('You can upload up to 3 images only.');
        return;
      }
      setFormData({ ...formData, photos: files });
    } else if (id === 'video') {
      if (files[0].size > 100 * 1024 * 1024) { // 100 MB
        setErrorMessage('Video file size should not exceed 100 MB.');
        return;
      }
      setFormData({ ...formData, video: files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('age', formData.age);
    data.append('phoneNumber', formData.phoneNumber);

    for (let i = 0; i < formData.photos.length; i++) {
      data.append('photos', formData.photos[i]);
    }
    if (formData.video) {
      data.append('video', formData.video);
    }

    try {
      const response = await axios.post('/submit-casting', data);
      if (response.status === 200) {
        setSuccessMessage('Thanks for submitting for the casting. We will contact you soon.');
      } else {
        setErrorMessage('Failed to submit casting data.');
      }
    } catch (error) {
      setErrorMessage('Error submitting casting data. Please try again later.');
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
              <Form.Group controlId="age" className="mt-3">
                <Form.Label>{t('age')}</Form.Label>
                <Form.Control type="number" placeholder={t('age')} value={formData.age} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="phoneNumber" className="mt-3">
                <Form.Label>{t('phoneNumber')}</Form.Label>
                <Form.Control type="tel" placeholder={t('phoneNumber')} value={formData.phoneNumber} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group controlId="photos" className="mt-3">
                <Form.Label>{t('uploadPhotos')}</Form.Label>
                <Form.Control type="file" multiple accept="image/*" onChange={handleFileChange} />
              </Form.Group>
              <Form.Group controlId="video" className="mt-3">
                <Form.Label>{t('uploadVideo')}</Form.Label>
                <Form.Control type="file" accept="video/*" onChange={handleFileChange} />
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
