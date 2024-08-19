import React, { useState } from "react";
import axios from "../axios"; // Adjust the path as necessary
import { useTranslation } from "react-i18next";
import { Container, Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CastingPage.css";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus",
  "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia",
  "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
  "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
  "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
  "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan",
  "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe"
];

const CastingPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    phoneNumber: "",
    nationality: "",
    photos: [],
    video: null,
  });

  const [photoPreviews, setPhotoPreviews] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

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

      const newPreviews = newPhotos.map((file) => URL.createObjectURL(file));
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

    if (loading) return; // Prevent multiple submissions

    setLoading(true); // Set loading state to true
    setErrorMessage("");
    setSuccessMessage("");

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("age", formData.age);
    data.append("gender", formData.gender);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("nationality", formData.nationality);

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
          nationality: "",
          photos: [],
          video: null,
        });
        setPhotoPreviews([]);
      } else {
        setErrorMessage(t("errorCasting"));
      }
    } catch (error) {
      setErrorMessage(t("errorCastingTryAgain"));
    } finally {
      setLoading(false); // Set loading state to false
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
              <Form.Control
                as="select"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
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

            <Form.Group controlId="nationality" className="mt-3">
              <Form.Label>{t("nationality")}</Form.Label>
              <Form.Control
                as="select"
                value={formData.nationality}
                onChange={handleInputChange}
                required
              >
                <option value="">{t("nationality")}...</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="photos" className="mt-3">
              <Form.Label>{t("uploadPhotos")}</Form.Label>
              <Form.Control
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
              <div className="photo-previews mt-2">
                {photoPreviews.map((src, index) => (
                  <div key={index} className="preview-container">
                    <img
                      src={src}
                      alt={`Preview ${index + 1}`}
                      className="preview-image"
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemovePhoto(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="video" className="mt-3">
              <Form.Label>{t("uploadVideo")}</Form.Label>
              <Form.Control
                type="file"
                accept="video/*"
                onChange={handleFileChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mt-4 button"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  {t("loading")}...
                </>
              ) : (
                t("submit")
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CastingPage;
