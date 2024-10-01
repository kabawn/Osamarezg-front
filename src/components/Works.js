import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Works.css";

import poster1 from "../assets/posters/bnat.webp";
import poster2 from "../assets/posters/el saraya final option 3 V1.webp";
import poster3 from "../assets/posters/Poster ALsraya Part 1.webp";
import poster4 from "../assets/posters/zangat alreh 2.webp";
import poster5 from "../assets/posters/Poster Ghasaq.webp";
import poster11 from "../assets/posters/albarony.webp";
import poster6 from "../assets/posters/Poster Zaeman.webp";
import poster7 from "../assets/posters/zangat alreh.webp";
import poster8 from "../assets/posters/Poster dragnof.webp";
import poster9 from "../assets/posters/Rubik1.webp";
import poster10 from "../assets/posters/The Random.webp";
import poster12 from "../assets/posters/fobya.webp";
import poster13 from "../assets/posters/ayad.webp";

const works = [
   {
      poster: poster1,
      videoUrl: "https://drive.google.com/file/d/1eylvo1WyWEYjr_ev6EAjKMGDmoEkFKQE/preview",
   },
   {
      poster: poster2,
      videoUrl: "https://drive.google.com/file/d/13XMRlIacqdeG2vOWvWIR4MyFR-4goBBs/preview",
   },
   {
      poster: poster3,
      videoUrl: "https://drive.google.com/file/d/1-iUHLSsIo6rixbpUU6X1Egu9h2i7brqf/preview",
   },
   {
      poster: poster4,
      videoUrl: "https://drive.google.com/file/d/1dznZw2BELbMcG_YT_ul1ZxReYOZL2oND/preview",
   },
   {
      poster: poster5,
      videoUrl: "https://drive.google.com/file/d/1s4ch2V0maW3iMV7aI3amrt6h1M7dryvc/preview",
   },
   {
      poster: poster11,
      videoUrl: "https://drive.google.com/file/d/1Ff53Gvqz6kAHysdEu8seMcniCqFFo2uZ/preview",
   },
   {
      poster: poster6,
      videoUrl: "https://drive.google.com/file/d/1C6wxji6XQZt2Xj_rpw_quWASzmgbMSLZ/preview",
   },
   {
      poster: poster7,
      videoUrl: "https://drive.google.com/file/d/14C1gL_-02t88i-NOTJR9yNZ0dFmpqEm9/preview",
   },
   {
      poster: poster8,
      videoUrl: "https://drive.google.com/file/d/1WTIDzRKLSecQoHgnQU2VbMBLQhNjbI5u/preview",
   },
   {
      poster: poster9,
      videoUrl: "https://drive.google.com/file/d/1KD2qUyb3rrqYEB2vhC7QrWiyrPf5wirP/preview",
   },
   {
      poster: poster10,
      videoUrl: "https://drive.google.com/file/d/1NIR01sPmEwPVq5KF0CnTYcfgwGl2Zt0O/preview",
   },
   {
      poster: poster13,
      videoUrl: "https://drive.google.com/file/d/1ZnjlzZ7fbfwkxSe3s71ZwJhL67M5hyX1/preview",
   },
   {
      poster: poster12,
      videoUrl: "https://drive.google.com/file/d/1o1BsCXUHVOr9vLr4HjN8ClBJfIQYRxqd/preview",
   },
   
];

const Works = () => {
   const { t, i18n } = useTranslation();
   const [isRtl, setIsRtl] = useState(i18n.language === "ar");
   const [showMore, setShowMore] = useState(false);
   const [selectedVideo, setSelectedVideo] = useState(null);

   useEffect(() => {
      setIsRtl(i18n.language === "ar");
   }, [i18n.language]);

   const displayedWorks = showMore ? works : works.slice(0, 6);

   const handleShowMore = () => {
      setShowMore(!showMore);
   };

   const handlePosterClick = (videoUrl) => {
      setSelectedVideo(videoUrl);
   };

   const handleClose = () => {
      setSelectedVideo(null);
   };

   return (
      <section id="works" className="works-section">
         <Container>
            <h2 style={{ fontFamily: isRtl ? "Tajawal, sans-serif" : "Raleway, sans-serif" }}>
               {t("directorsWorks")}
            </h2>
            <Row
               style={{
                  flexDirection: isRtl ? "row-reverse" : "row",
               }}
            >
               {displayedWorks.map((work, index) => (
                  <Col md={4} sm={6} xs={12} key={index} className="poster-col">
                     <div className="poster-container">
                        <img
                           src={work.poster}
                           alt={`Work ${index + 1}`}
                           className="poster"
                           onClick={() => handlePosterClick(work.videoUrl)}
                        />
                        <div className="play-icon" onClick={() => handlePosterClick(work.videoUrl)}>
                           &#9658;
                        </div>
                     </div>
                  </Col>
               ))}
            </Row>
            <div className="show-more">
               <button
                  onClick={handleShowMore}
                  style={{ fontFamily: isRtl ? "Tajawal, sans-serif" : "Raleway, sans-serif" }}
               >
                  {showMore ? t("showLess") : t("showMore")}
               </button>
            </div>
         </Container>

         <Modal
            show={selectedVideo !== null}
            onHide={handleClose}
            centered
            dialogClassName="video-modal-dialog"
         >
            <Modal.Body className="video-modal">
               {selectedVideo && (
                  <iframe
                     width="100%"
                     height="70vh"
                     src={selectedVideo}
                     frameBorder="0"
                     allow="autoplay; encrypted-media"
                     allowFullScreen
                     title="Selected Video"
                  ></iframe>
               )}
               <button className="close-button" onClick={handleClose}>
                  ×
               </button>
            </Modal.Body>
         </Modal>
      </section>
   );
};

export default Works;
