import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../i18n';

const DirectorContact = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <div style={styles.background}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title className="text-center" style={{...styles.title, fontFamily: isArabic ? 'Tajawal, sans-serif' : 'Raleway, sans-serif'}}>
                  {t('contactTitle')}
                </Card.Title>
                <p style={{...styles.text, fontFamily: isArabic ? 'Tajawal, sans-serif' : 'Raleway, sans-serif'}}>
                  {t('contactDirector')}
                </p>
                <div className="text-center">
                  <Button variant="link" href="https://www.facebook.com/osama.rezg">
                    <FaFacebook size={30} style={styles.icon} />
                  </Button>
                  <Button variant="link" href="https://www.instagram.com/osamarezg">
                    <FaInstagram size={30} style={styles.icon} />
                  </Button>
                  <Button variant="link" href="https://x.com/OsamaRezg">
                    <FaTwitter size={30} style={styles.icon} />
                  </Button>
                  <Button variant="link" href="https://www.linkedin.com/in/osama-rezg-62a61743/">
                    <FaLinkedin size={30} style={styles.icon} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  background: {
    backgroundColor: '#000000', // Black background
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  title: {
    color: '#000000'
  },
  text: {
    color: '#000000',
    textAlign: 'center'
  },
  icon: {
    margin: '0 15px',
    color: '#007bff'
  }
};

export default DirectorContact;
