import React, { useState } from 'react';
import axios from '../axios'; // Ensure the path is correct
import { useTranslation } from 'react-i18next';
import { Container, Form, Button, Row, Col, Alert, Modal, Spinner } from 'react-bootstrap';
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
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    if (id === 'scriptFile') {
      if (files[0].size > 10 * 1024 * 1024) { // 10 MB limit for script files
        setErrorMessage(t('fileSizeError'));
        return;
      }
      setFormData({ ...formData, scriptFile: files[0] });
      setErrors({ ...errors, scriptFile: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = t('requiredField');
    if (!formData.country) newErrors.country = t('requiredField');
    if (!formData.sex) newErrors.sex = t('requiredField');
    if (!formData.phone) newErrors.phone = t('requiredField');
    if (!formData.email) newErrors.email = t('requiredField');
    if (!formData.scriptFile) newErrors.scriptFile = t('requiredField');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);

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
        setLoading(false);
        setSuccessMessage(t('successMessage'));
        setFormData(initialFormData); // Reset the form
        setShowModal(true); // Show the success modal
      } else {
        setLoading(false);
        setErrorMessage(t('submitError'));
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(t('submitError'));
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
                <Form.Control 
                  type="text" 
                  placeholder={t('fullName')} 
                  value={formData.fullName} 
                  onChange={handleInputChange} 
                  isInvalid={!!errors.fullName} 
                  required 
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="country" className="mt-3">
                <Form.Label>{t('country')}</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder={t('country')} 
                  value={formData.country} 
                  onChange={handleInputChange} 
                  isInvalid={!!errors.country} 
                  required 
                />
                <Form.Control.Feedback type="invalid">
                  {errors.country}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="sex" className="mt-3">
                <Form.Label>{t('sex')}</Form.Label>
                <Form.Control 
                  as="select" 
                  value={formData.sex} 
                  onChange={handleInputChange} 
                  isInvalid={!!errors.sex} 
                  required
                >
                  <option value="">{t('selectSex')}</option>
                  <option value="male">{t('male')}</option>
                  <option value="female">{t('female')}</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.sex}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="phone" className="mt-3">
                <Form.Label>{t('phoneNumber')}</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder={t('phoneNumber')} 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  isInvalid={!!errors.phone} 
                  required 
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="email" className="mt-3">
                <Form.Label>{t('email')}</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder={t('email')} 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  isInvalid={!!errors.email} 
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="scriptFile" className="mt-3">
                <Form.Label>{t('uploadScript')}</Form.Label>
                <Form.Control 
                  type="file" 
                  accept=".pdf,.doc,.docx" 
                  onChange={handleFileChange} 
                  isInvalid={!!errors.scriptFile} 
                  required 
                />
                <Form.Control.Feedback type="invalid">
                  {errors.scriptFile}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-4 button" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    {' '}
                    {t('submitting')}
                  </>
                ) : (
                  t('submit')
                )}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t('submissionSuccess')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {t('thankYou')}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            {t('close')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ScriptSubmission;
