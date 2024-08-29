import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "../axios"; // Import the Axios instance
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // Import custom styles for the footer

const Footer = () => {
  const { t, i18n } = useTranslation();

  // State variables for form data and submission status
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post("/send-email", formData);
      if (response.status === 200) {
        setStatus({ type: "success", message: t("emailSentMessage") });
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      }
    } catch (error) {
      setStatus({ type: "error", message: t("emailErrorMessage") });
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <footer className={`footer text-white py-5 ${i18n.language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>{t("keepInTouch")}</h5>
            <p>
              {t("email")}:
              <a href="mailto:osama@osamarezg.com" className="text-white">
                osama@osamarezg.com
              </a>
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/osama.rezg" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://x.com/OsamaRezg" className="text-white">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/osamarezg/" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/osama-rezg-62a61743/" className="text-white">
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://m.imdb.com/name/nm5891037/?ref_=nv_sr_srsg_0_tt_4_nm_4_in_0_q_osamarezg"
                className="text-white"
              >
                <i className="fab fa-imdb"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <h5>{t("haveQuestions")}</h5>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder={t("namePlaceholder")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder={t("emailPlaceholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="3"
                  placeholder={t("descriptionPlaceholder")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                {t("submitButton")}
              </button>
            </form>
            {status.message && (
              <div
                className={`mt-3 alert ${
                  status.type === "success" ? "alert-success" : "alert-danger"
                }`}
              >
                {status.message}
              </div>
            )}
          </div>
        </div>
        <div className="text-center mt-5">
          <p className="companyinfo">{t("developedBy")}</p>
          <a href="https://www.moderncode.ly" target="_blank" rel="noopener noreferrer">
            {/* <img
               src={logo}
               alt="Modern Code Company Logo"
               style={{ width: "100px", marginTop: "10px" }}
            /> */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
