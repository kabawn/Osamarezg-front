// src/pages/CastingPage.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CastingPage.css";

const CastingPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <Container
      fluid
      className={`casting-page ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <Row className="hero-image">
        <Col>
          <h1 className="text-center hero-text">{t("castingPageHeader")}</h1>
          <p className="text-center hero-text">{t("castingPageText")}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
        <h1 className="text-center hero-text">{t("castingtextupform")}</h1>

          <Form>
            <Form.Group controlId="fullName">
              <Form.Label>{t("fullName")}</Form.Label>
              <Form.Control type="text" placeholder={t("fullName")} />
            </Form.Group>

            <Form.Group controlId="age" className="mt-3">
              <Form.Label>{t("age")}</Form.Label>
              <Form.Control type="number" placeholder={t("age")} />
            </Form.Group>

            <Form.Group controlId="gender" className="mt-3">
              <Form.Label>{t("gender")}</Form.Label>
              <Form.Control as="select">
                <option>{t("gender")}...</option>
                <option>{t("male")}</option>
                <option>{t("female")}</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="phoneNumber" className="mt-3">
              <Form.Label>{t("phoneNumber")}</Form.Label>
              <Form.Control type="tel" placeholder={t("phoneNumber")} />
            </Form.Group>

            <Form.Group controlId="photos" className="mt-3">
              <Form.Label>{t("uploadPhotos")}</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>

            <Form.Group controlId="video" className="mt-3">
              <Form.Label>{t("uploadVideo")}</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Button  variant="primary" type="submit" className="mt-4 button">
              {t("submit")}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CastingPage;
