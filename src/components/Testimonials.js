import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import MultipleItems from './MultipleItems'; // Adjust the path if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';

// Import images
import image1 from '../assets/testimonials/Motassim Alnahar.jpg';
import image2 from '../assets/testimonials/shokran.png';
import image3 from '../assets/testimonials/byar.jpg';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const testimonials = [
    {
      id: 1,
      title: t('motassim'),
      text: t('sryinactor'),
      image: image1,
      videoUrl: "https://www.youtube.com/embed/k-ZP46eBhWk",
    },
    {
      id: 2,
      title: t('shoukran'),
      text: t('sryinactress'),
      image: image2,
      videoUrl: "https://www.youtube.com/embed/Y5hkyFCbkW4",
    },
    {
      id: 3,
      title: t('pierre'),
      text: t('lebaniseactor'),
      image: image3,
      videoUrl: "https://www.youtube.com/embed/D6qe8lHJVmM",
    },
  ];

  const openModal = (url) => {
    setVideoUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoUrl('');
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>{t('testimonials')}</h1>
      </div>
      <div className={`testimonials-content ${isRtl ? 'rtl' : 'ltr'}`}>
        <MultipleItems testimonials={testimonials} openModal={openModal} />
      </div>

      <Modal show={modalIsOpen} onHide={closeModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>{t('testimonialVideo')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="video-container">
            <iframe
              width="100%"
              height="400px"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={t('testimonialVideo')}
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Testimonials;
