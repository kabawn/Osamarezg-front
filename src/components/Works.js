// src/components/Works.js
import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Works.css";

import poster1 from "../assets/posters/bnat.jpg";
import poster2 from "../assets/posters/el saraya final option 3 V1.jpg";
import poster3 from "../assets/posters/Poster ALsraya Part 1.png";
import poster4 from "../assets/posters/zangat alreh 2.jpg";
import poster5 from "../assets/posters/Poster Ghasaq.jpg";
import poster11 from "../assets/posters/albarony.jpg";
import poster6 from "../assets/posters/Poster Zaeman.jpg";
import poster7 from "../assets/posters/zangat alreh.jpg";
import poster8 from "../assets/posters/Poster dragnof.jpg";
import poster9 from "../assets/posters/Rubik.png";
import poster10 from "../assets/posters/The Random.jpeg";
import poster12 from "../assets/posters/fobya.webp";

const works = [
   { poster: poster1, videoUrl: "https://drive.google.com/file/d/1eylvo1WyWEYjr_ev6EAjKMGDmoEkFKQE/preview" },
   { poster: poster2, videoUrl: "https://drive.google.com/file/d/13XMRlIacqdeG2vOWvWIR4MyFR-4goBBs/preview" },
   { poster: poster3, videoUrl: "https://drive.google.com/file/d/1-iUHLSsIo6rixbpUU6X1Egu9h2i7brqf/preview" },
   { poster: poster4, videoUrl: "https://drive.google.com/file/d/1dznZw2BELbMcG_YT_ul1ZxReYOZL2oND/preview" },
   { poster: poster5, videoUrl: "https://drive.google.com/file/d/1s4ch2V0maW3iMV7aI3amrt6h1M7dryvc/preview" },
   { poster: poster11, videoUrl: "https://drive.google.com/file/d/1Ff53Gvqz6kAHysdEu8seMcniCqFFo2uZ/preview" },
   { poster: poster6, videoUrl: "https://drive.google.com/file/d/1C6wxji6XQZt2Xj_rpw_quWASzmgbMSLZ/preview" },
   { poster: poster7, videoUrl: "https://drive.google.com/file/d/14C1gL_-02t88i-NOTJR9yNZ0dFmpqEm9/preview" },
   { poster: poster8, videoUrl: "https://drive.google.com/file/d/1WTIDzRKLSecQoHgnQU2VbMBLQhNjbI5u/preview" },
   { poster: poster9, videoUrl: "https://www.youtube.com/embed/427jDNBQFWg" },
   { poster: poster10, videoUrl: "https://www.youtube.com/embed/427jDNBQFWg" },
   { poster: poster12, videoUrl: "https://www.youtube.com/embed/427jDNBQFWg" },
];

const Works = () => {
   const { t, i18n } = useTranslation();
   const currentLang = i18n.language;
   const isRtl = currentLang === "ar";

   const [showMore, setShowMore] = useState(false);
   const [selectedVideo, setSelectedVideo] = useState(null);

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
            <Row>
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

         <Modal show={selectedVideo !== null} onHide={handleClose} centered>
            <Modal.Body className="video-modal">
               {selectedVideo && (
                  <iframe
                     width="100%"
                     height="400px"
                     src={selectedVideo}
                     frameBorder="0"
                     allow="autoplay; encrypted-media"
                     allowFullScreen
                     title="Selected Video"
                  ></iframe>
               )}
            </Modal.Body>
         </Modal>
      </section>
   );
};

export default Works;
