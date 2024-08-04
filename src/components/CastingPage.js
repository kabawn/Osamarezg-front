import React, { useState } from "react";
import axios from "../axios"; // Adjust the path as necessary
import { useTranslation } from "react-i18next";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CastingPage.css";

const CastingPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    phoneNumber: "",
    nationality: "", // Add nationality
    photos: [],
    video: null,
  });

  const [photoPreviews, setPhotoPreviews] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    if (id === "photos") {
      const newPhotos = Array.from(files);
      const totalPhotos = formData.photos.length + newPhotos.length;

      if (totalPhotos > 3) {
        setErrorMessage(t("errorUploadPhotos"));
        return;
      }

      const updatedPhotos = [...formData.photos, ...newPhotos];
      setFormData({ ...formData, photos: updatedPhotos });

      const newPreviews = newPhotos.map(file => URL.createObjectURL(file));
      setPhotoPreviews([...photoPreviews, ...newPreviews]);
    } else if (id === "video") {
      if (files[0].size > 100 * 1024 * 1024) {
        // 100 MB
        setErrorMessage(t("errorUploadVideoSize"));
        return;
      }
      setFormData({ ...formData, video: files[0] });
    }
  };

  const handleRemovePhoto = (index) => {
    const updatedPhotos = formData.photos.filter((_, i) => i !== index);
    const updatedPreviews = photoPreviews.filter((_, i) => i !== index);
    setFormData({ ...formData, photos: updatedPhotos });
    setPhotoPreviews(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("age", formData.age);
    data.append("gender", formData.gender);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("nationality", formData.nationality); // Add nationality

    for (let i = 0; i < formData.photos.length; i++) {
      data.append("photos", formData.photos[i]);
    }
    if (formData.video) {
      data.append("video", formData.video);
    }

    try {
      const response = await axios.post("/submit-casting", data);
      if (response.status === 200) {
        setSuccessMessage(t("successCasting"));
        setFormData({
          fullName: "",
          age: "",
          gender: "",
          phoneNumber: "",
          nationality: "", // Reset nationality
          photos: [],
          video: null,
        });
        setPhotoPreviews([]);
      } else {
        setErrorMessage(t("errorCasting"));
      }
    } catch (error) {
      setErrorMessage(t("errorCastingTryAgain"));
    }
  };

  return (
    <Container
      fluid
      className={`casting-page ${currentLang === "ar" ? "rtl" : "ltr"}`}
      dir={currentLang === "ar" ? "rtl" : "ltr"}
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
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName">
              <Form.Label>{t("fullName")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("fullName")}
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="age" className="mt-3">
              <Form.Label>{t("age")}</Form.Label>
              <Form.Control
                type="number"
                placeholder={t("age")}
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="gender" className="mt-3">
              <Form.Label>{t("gender")}</Form.Label>
              <Form.Control as="select" value={formData.gender} onChange={handleInputChange} required>
                <option value="">{t("gender")}...</option>
                <option value="male">{t("male")}</option>
                <option value="female">{t("female")}</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="phoneNumber" className="mt-3">
              <Form.Label>{t("phoneNumber")}</Form.Label>
              <Form.Control
                type="tel"
                placeholder={t("phoneNumber")}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="nationality" className="mt-3"> {/* Add nationality */}
              <Form.Label>{t("nationality")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("nationality")}
                value={formData.nationality}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="photos" className="mt-3">
              <Form.Label>{t("uploadPhotos")}</Form.Label>
              <Form.Control type="file" multiple accept="image/*" onChange={handleFileChange} />
              <div className="photo-previews mt-2">
                {photoPreviews.map((src, index) => (
                  <div key={index} className="preview-container">
                    <img src={src} alt={`Preview ${index + 1}`} className="preview-image" />
                    <Button variant="danger" size="sm" onClick={() => handleRemovePhoto(index)}>Remove</Button>
                  </div>
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="video" className="mt-3">
              <Form.Label>{t("uploadVideo")}</Form.Label>
              <Form.Control type="file" accept="video/*" onChange={handleFileChange} />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 button">
              {t("submit")}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CastingPage;
