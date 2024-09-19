import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import MultipleItems from './MultipleItems'; // Adjust the path if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';

// Import images
import image1 from '../assets/testimonials/Motassim Alnahar.jpg';
import image2 from '../assets/testimonials/shokran.png';
import image3 from '../assets/testimonials/byar.jpg';
import image4 from '../assets/testimonials/rabiea.png';
import image5 from '../assets/testimonials/mohamed.png';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      title: t('motassim'),
      text: t('sryinactor'),
      image: image1,
      videoUrl: "https://drive.google.com/file/d/18W9Xr1RYIArgaoJDpbbNS9Wx7yUbqqMx/preview",
    },
    {
      id: 2,
      title: t('shoukran'),
      text: t('sryinactress'),
      image: image2,
      videoUrl: "https://drive.google.com/file/d/1Z6rnlIiKwFSXBHg9FxizmfbFT1cAq_y0/preview",
    },
    {
      id: 3,
      title: t('pierre'),
      text: t('lebaniseactor'),
      image: image3,
      videoUrl: "https://drive.google.com/file/d/104CuPF3TYmgS28ZhBC4ModyFVtDdAjoZ/preview",
    },
    {
      id: 4,
      title: t('rabie'),
      text: t('morocoactor'),
      image: image4,
      videoUrl: "https://drive.google.com/file/d/1SMMKcEy1ApKrmku9sG4kh86H3jQ6B_DP/preview",
    },
    {
      id: 5,
      title: t('mohamed'),
      text: t('libyenactor'),
      image: image5,
      videoUrl: "https://drive.google.com/file/d/1ui6Gjix50UNNKLleXu5i8uPMTz2m0GSB/preview",
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

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'scroll-left 4s ease-in-out';
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollWidth / 2 - sliderRef.current.clientWidth / 2,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>{t('testimonials')}</h1>
      </div>
      <div ref={sliderRef} className={`testimonials-content ${isRtl ? 'rtl' : 'ltr'}`}>
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
