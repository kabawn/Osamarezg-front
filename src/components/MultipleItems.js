import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MultipleItems.css';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrow'; // Import custom arrows

const MultipleItems = ({ testimonials, openModal }) => {
  const [autoplay, setAutoplay] = useState(false);
  const [sliderKey, setSliderKey] = useState(0); // Key to force re-render
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    autoplay: autoplay, // Autoplay controlled by state
    autoplaySpeed: 5000,
    arrows: false, // We'll handle the arrows manually
    dotsClass: 'slick-dots custom-dots', // Apply the custom class
    appendDots: dots => (
      <div className="custom-dots-container">
        {dots}
      </div>
    ),
    customPaging: i => (
      <button>
        {i + 1}
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
        },
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoplay(true); // Start autoplay after 8 seconds
      setSliderKey(prevKey => prevKey + 1); // Force re-render to apply autoplay
    }, 8000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="slider-wrapper">
      <Slider key={sliderKey} ref={sliderRef} {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-2">
            <div className="card h-100">
              <img
                src={testimonial.image}
                className="card-img-top"
                alt={testimonial.title}
                onClick={() => openModal(testimonial.videoUrl)}
              />
              <div className="card-body">
                <h5 className="card-title">{testimonial.title}</h5>
                <p className="card-text">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="custom-dots-navigation">
        <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <div className="custom-dots-container">
          <ul className="custom-dots"></ul>
        </div>
        <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  );
};

export default MultipleItems;
