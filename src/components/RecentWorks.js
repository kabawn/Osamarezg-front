import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import recentWork1 from '../assets/hero11.jpg'; // Replace with your actual image paths
import recentWork2 from '../assets/hero22.jpg'; // Replace with your actual image paths
import recentWork3 from '../assets/hero33.jpg'; // Replace with your actual image paths
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideWrapper = styled.div`
  padding: 10px;
  text-align: center;
  transition: transform 0.5s ease;
`;

const CarouselImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CarouselCaption = styled.div`
  color: black;
  text-align: center;
  h3, p, .date-location {
    font-family: 'Raleway', sans-serif;
    margin: 0;
  }
  h3 {
    margin-bottom: 5px;
    font-size: 1.2rem;
  }
  p {
    margin-bottom: 5px;
    font-size: 1rem;
  }
  .date-location {
    font-size: 0.9rem;
    color: #777;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    transform: scale(0.8); /* Scale down all slides */
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0.5;
  }

  .slick-center {
    transform: scale(1.0); /* Scale up the center slide only */
    opacity: 1;
  }
`;

const RecentWorks = () => {
  const works = [
    {
      img: recentWork1,
      title: 'Recent Work 1',
      description: 'Description of the recent work 1',
      date: 'Libya, Sep 24, 2019',
    },
    {
      img: recentWork2,
      title: 'Recent Work 2',
      description: 'Description of the recent work 2',
      date: 'Libya, Oct 19, 2021',
    },
    {
      img: recentWork3,
      title: 'Recent Work 3',
      description: 'Description of the recent work 3',
      date: 'Libya, Sep 24, 2023',
    },
  ];

  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    infinite: true,
    dots: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    afterChange: current => console.log(`After change: ${current}`),
  };

  return (
    <section id="recent-works" style={{ padding: '50px 0', backgroundColor: '#fff', color: '#000' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2>Recent Works</h2>
        <p>
          Discover my new and innovative works. Experience a unique cinematic journey that transports you to mesmerizing worlds and tells impactful stories. Explore a diverse collection of films that combine artistry and storytelling. Get ready to be moved and inspired.
        </p>
      </div>
      <StyledSlider {...settings}>
        {works.map((work, index) => (
          <SlideWrapper key={index}>
            <CarouselImage src={work.img} alt={work.title} />
            <CarouselCaption>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <div className="date-location">{work.date}</div>
            </CarouselCaption>
          </SlideWrapper>
        ))}
      </StyledSlider>
    </section>
  );
};

export default RecentWorks;
