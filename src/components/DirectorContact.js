import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../i18n";

const DirectorContact = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const isMobileDevice = () => {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  };

  const openFacebookApp = () => {
   const fbAppUrl = "fb://profile/osama.rezg";
   const fallbackUrl = "https://www.facebook.com/profile.php?id=100089768952105";
 
   if (isMobileDevice()) {
     window.location.href = fbAppUrl;
 
     setTimeout(() => {
       if (window.location.href === fbAppUrl) {
         window.open(fallbackUrl, "_blank", "noopener,noreferrer");
       }
     }, 500);
   } else {
     window.open(fallbackUrl, "_blank", "noopener,noreferrer");
   }
 };

  return (
    <div style={styles.background}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title
                  className="text-center"
                  style={{
                    ...styles.title,
                    fontFamily: isArabic ? "Tajawal, sans-serif" : "Raleway, sans-serif",
                  }}
                >
                  {t("contactTitle")}
                </Card.Title>
                <p
                  style={{
                    ...styles.text,
                    fontFamily: isArabic ? "Tajawal, sans-serif" : "Raleway, sans-serif",
                  }}
                >
                  {t("contactDirector")}
                </p>
                <div className="text-center">
                  <Button variant="link" onClick={openFacebookApp}>
                    <FaFacebook size={30} style={styles.icon} />
                  </Button>
                  <Button
                    variant="link"
                    href="https://www.instagram.com/osamarezg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={30} style={styles.icon} />
                  </Button>
                  <Button
                    variant="link"
                    href="https://x.com/OsamaRezg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={30} style={styles.icon} />
                  </Button>
                  <Button
                    variant="link"
                    href="https://www.linkedin.com/in/osama-rezg-62a61743/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} style={styles.icon} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <h3
              style={{
                ...styles.texto,
                fontFamily: isArabic ? "Tajawal, sans-serif" : "Raleway, sans-serif",
              }}
            >
              {t("or")}
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  background: {
    backgroundColor: "#000000", // Black background
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "180px", // Set margin bottom to zero or adjust as needed
  },
  title: {
    color: "#000000",
  },
  text: {
    color: "#000000",
    textAlign: "center",
  },

  texto: {
    color: "#ffffff",
    textAlign: "center",
    padding: "70px",
  },
  icon: {
    margin: "0 15px",
    color: "#007bff",
  },
};

export default DirectorContact;
