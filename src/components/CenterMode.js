// src/components/CenterMode.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CenterMode.css';

import recentWork1 from '../assets/zangt1.jpg';
import recentWork2 from '../assets/alzaeman.jpg';
import recentWork3 from '../assets/zangt1.jpg';
import recentWork4 from '../assets/gaseq.jpg'; // New image
import recentWork5 from '../assets/alsraya1.jpg'; // New image
import recentWork6 from '../assets/bnat.jpg'; // New image

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

function CenterMode() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';

  const settings = {
    className: 'center-slider',
    centerMode: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    arrows: false, // We'll handle the arrows manually
    dots: true,
    dotsClass: 'slick-dots custom-dots', // Apply the custom class
    autoplay: true,
    autoplaySpeed: 5000,
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

  let sliderRef;

  return (
    <div className="wrapper">
      <div className="section-header">
        <h2 style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>{t('recentWorks')}</h2>
        <p style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>{t('recentWorksDescription')}</p>
      </div>
      <Slider ref={c => (sliderRef = c)} {...settings}>
        <div>
          <img src={recentWork1} alt="Slide 1" />
          <div className={`carousel-content ${isRtl ? 'rtl' : 'ltr'}`}>
            <h2>مسلسل زنقة الريح (الجزء الاول) </h2>
            <p>مسلسل ( زنقة الريح )  دراما تاريخية اجتماعية، تدور أحداثها سنة 1945 في مدينة طرابلس في ليبيا، يُبرز معاناة الشعب الليبي في ظل حكم الإدارة البريطانية التي نصّبت حاكم على ليبيا بعد الحرب العالمية الثانية وهزيمة إيطاليا</p>
            <span>2019</span>
          </div>
        </div>
        <div>
          <img src={recentWork2} alt="Slide 2" />
          <div className={`carousel-content ${isRtl ? 'rtl' : 'ltr'}`}>
            <h2>مسلسل الزعيمان </h2>
            <p>يتناول المسلسل قصة حياة المناضل الليبي ( سليمان الباروني ) و و المناضل الليبي ( بشير السعداوي )  في الفترة من سنة 1887 حتى 1923 من خلال سرد درامي مختلف وجديد.</p>
            <span>2020</span>
          </div>
        </div>
        <div>
          <img src={recentWork3} alt="Slide 3" />
          <div className={`carousel-content ${isRtl ? 'rtl' : 'ltr'}`}>
            <h2>مسلسل زنقة الريح ( الجزء الثاني ) </h2>
            <p>دراما تاريخية اجتماعية، تدور أحداثها سنة 1945 بمدينة طرابلس في ليبيا، تُبرز معاناة الشعب الليبي في ظل حكم الإدارة البريطانية التي نُصِّبت على ليبيا بعد الحرب العالمية الثانية وهزيمة إيطاليا.. </p>
            <span>2021</span>
          </div>
        </div>
        <div>
          <img src={recentWork4} alt="Slide 4" />
          <div className={`carousel-content ${isRtl ? 'rtl' : 'ltr'}`}>
            <h2>مسلسل غسق</h2>
            <p>يؤرخ مسلسل (غسق) لملحمة ( البنيان المرصوص ) و هي معركة قام بها الجيش الليبي ضد تنظيم الدولة ( داعش ) الذي قام بالسيطرة على مدينة سرت الليبية في فترة ما و في نفس الوقت يرصد المسلسل الأوضاع داخل مدينة سرت تحت سيطرة التنظيم </p>
            <span>2021</span>
          </div>
        </div>
        <div>
          <img src={recentWork5} alt="Slide 5" />
          <div className={`carousel-content ${isRtl ? 'rtl' : 'ltr'}`}>
            <h2>  مسلسل السرايا  الجزء الاول</h2>
            <p>يؤرخ لواحدة من اهم الفترات في التاريخ الليبي التي شهدت صراعا كبيرا على السلطة وهي فترة حكم الأسرة القرمانللية لأيالة طرابلس وتحديدا في عهد ( علي باشا القرمانللي ) تجري في الفترة الواقعة ما بين عامي 1784 و1795 وينقل لنا ما يحدث خلف اسوار السرايا من صراع خفي بين ابناء علي باشا </p>
            <span>2022</span>
          </div>
        </div>
        <div>
          <img src={recentWork6} alt="Slide 6" />
          <div className={`carousel-content ${isRtl ? 'rtl' : 'ltr'}`}>
            <h2>مسلسل بنات العم</h2>
            <p>تدور أحداث مسلسل بنات العم في وقتنا الحالي حيث تعيش خلود في منزل عمها نوري بعد وفاة والدها وزواج والدتها وسفرها إلى الخارج. تتربى خلود وتكبر في كنف عمها الحاج نوري بصحبة ابنة عمها عفاف التي تماثلها في العمر وتدرس معها في نفس الكلية وتبدوان في قمة الانسجام كأختين وليس بنات عم.</p>
            <span>Mar 15, 2022</span>
          </div>
        </div>
      </Slider>
      <div className="custom-dots-navigation">
        <CustomPrevArrow onClick={() => sliderRef.slickPrev()} />
        <div className="custom-dots-container">
          <ul className="custom-dots"></ul>
        </div>
        <CustomNextArrow onClick={() => sliderRef.slickNext()} />
      </div>
    </div>
  );
}

export default CenterMode;
