import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './WorksOnPage.css';
import { useTranslation } from "react-i18next";

import poster1 from "../assets/posters/bnat.webp";
import poster2 from "../assets/posters/el saraya final option 3 V1.webp";
import poster3 from "../assets/posters/Poster ALsraya Part 1.webp";
import poster4 from "../assets/posters/zangat alreh 2.webp";
import poster5 from "../assets/posters/Poster Ghasaq.webp";
import poster11 from "../assets/posters/albarony.webp";
import poster6 from "../assets/posters/Poster Zaeman.webp";
import poster7 from "../assets/posters/zangat alreh.webp";
import poster8 from "../assets/posters/Poster dragnof.webp";
import poster9 from "../assets/posters/Rubik.webp";
import poster10 from "../assets/posters/The Random.webp";
import poster12 from "../assets/posters/fobya.webp";
import poster13 from "../assets/posters/ayad.webp";


const works = [
  { id: 1, poster: poster1, title: 'Banat Alam', year: 2024 },
  { id: 2, poster: poster2, title: 'Alsaraya 2', year: 2023 },
  { id: 3, poster: poster3, title: 'Alsaraya - Part One', year: 2022 },
  { id: 4, poster: poster4, title: 'Zanka Al-Reeh 2', year: 2021 },
  { id: 5, poster: poster5, title: 'Ghasak', year: 2021 },
  { id: 11, poster: poster11, title: 'Albaroney', year: 2021 },
  { id: 6, poster: poster6, title: 'Azza’iman', year: 2020 },
  { id: 7, poster: poster7, title: 'Zanka Al-Reeh', year: 2019 },
  { id: 9, poster: poster9, title: 'Rubik', year: 2017 },
  { id: 10, poster: poster10, title: 'the random', year: 2015 },
  { id: 8, poster: poster8, title: 'Dragunov', year: 2014 },
  { id: 12, poster: poster12, title: 'Fobya', year: 2013 },
  { id: 13, poster: poster13, title: 'Ayad', year: 2015 },

];

const WorksOnPage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handlePosterClick = (id) => {
    navigate(`/works/${id}`);
  };

  return (
    <section id="works" className={`works-section ${currentLang === 'ar' ? 'arabic' : 'english'}`}>
      <Container>
        <h2>{t("directorsWord")}</h2>
        
        <Row>
          {works.map((work, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="poster-col">
              <div className="poster-container" onClick={() => handlePosterClick(work.id)}>
                <img src={work.poster} alt={`Work ${index + 1}`} className="poster" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WorksOnPage;
