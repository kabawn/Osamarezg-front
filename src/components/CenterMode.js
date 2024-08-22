import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CenterMode.css";

import recentWork2 from "../assets/el saraya final option 3 V1.png";
import recentWork3 from "../assets/zangat alreh 2.jpg";
import recentWork5 from "../assets/alsraya1.jpg";
import recentWork6 from "../assets/bnat.jpg";

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
   const isRtl = currentLang === "ar";

   const settings = {
      className: "center-slider",
      centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 300,
      arrows: false,
      dots: true,
      dotsClass: "slick-dots custom-dots",
      autoplay: true,
      autoplaySpeed: 5000,
      appendDots: (dots) => <div className="custom-dots-container">{dots}</div>,
      customPaging: (i) => <button>{i + 1}</button>,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               centerPadding: "40px",
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               centerPadding: "40px",
            },
         },
      ],
   };

   const handleLinkClick = () => {
      window.scrollTo(0, 0);
   };

   let sliderRef;

   const works = [
      {
         id: 1,
         image: recentWork6,
         title: { ar: "مسلسل بنات العم", en: "Banat Al-am" },
         description: {
            ar: "تدور أحداث مسلسل بنات العم في وقتنا الحالي حيث تعيش خلود في منزل عمها نوري بعد وفاة والدها وزواج والدتها وسفرها إلى الخارج. تتربى خلود وتكبر في كنف عمها الحاج نوري بصحبة ابنة عمها عفاف التي تماثلها في العمر وتدرس معها في نفس الكلية وتبدوان في قمة الانسجام كأختين وليس بنات عم.",
            en: "The series Banat Al-Om takes place in the present day where Khulood lives with her uncle Nouri after her father's death and her mother's remarriage and travel abroad. Khulood grows up in the care of her uncle Hajj Nouri, alongside her cousin Afaf, who is the same age and studies in the same college. They appear to be in perfect harmony as sisters, not just cousins.",
         },
         year: 2024,
         link: "/works/1",
      },
      {
         id: 2,
         image: recentWork3,
         title: { ar: "مسلسل زنقة الريح ( الجزء الثاني )", en: "Zanqat Al-Reeh (Part 2)" },
         description: {
            ar: "دراما تاريخية اجتماعية، تدور أحداثها سنة 1945 بمدينة طرابلس في ليبيا، تُبرز معاناة الشعب الليبي في ظل حكم الإدارة البريطانية التي نُصِّبت على ليبيا بعد الحرب العالمية الثانية وهزيمة إيطاليا.",
            en: "A historical social drama set in 1945 in Tripoli, Libya, highlighting the suffering of the Libyan people under British administration imposed after World War II and the defeat of Italy.",
         },
         year: 2021,
         link: "/works/4",
      },
      {
         id: 3,
         image: recentWork5,
         title: { ar: " مسلسل السرايا (الجزء الاول) ", en: "Alsaraya (Part 1)" },
         description: {
            ar: "يؤرخ لواحدة من اهم الفترات في التاريخ الليبي التي شهدت صراعا كبيرا على السلطة وهي فترة حكم الأسرة القرمانللية لأيالة طرابلس وتحديدا في عهد ( علي باشا القرمانللي ) تجري في الفترة الواقعة ما بين عامي 1784 و1795 وينقل لنا ما يحدث خلف اسوار السرايا من صراع خفي بين ابناء علي باشا.",
            en: "Chronicles one of the most significant periods in Libyan history that witnessed a great power struggle during the Qaramanli dynasty's rule over the Tripoli province, specifically in the era of Ali Pasha Qaramanli between 1784 and 1795, revealing the hidden conflicts behind the walls of the Saraya among Ali Pasha's sons.",
         },
         year: 2022,
         link: "/works/3",
      },
      {
         id: 4,
         image: recentWork2,
         title: { ar: "مسلسل السرايا (الجزء الثاني)", en: "Alsaraya (Part 2)" },
         description: {
            ar: "يسرد الجزء الثاني من مسلسل السرايا الفترة من سنة 1800 إلى 1811، مع التركيز على حكم يوسف باشا القرمانلي. كانت هذه الحقبة مليئة بالتحديات الداخلية والخارجية، بما في ذلك الأطماع الأجنبية ومؤامرات القناصل والصراعات الداخلية حول الخلافة. يبرز المسلسل تأسيس أول دولة حقيقية على التراب الليبي واستراتيجيات يوسف لموازنة هذه التحديات والأحداث التاريخية الرئيسية التي أعادت تشكيل المنطقة.",
            en: "The second part of Alsaraya narrates the period from 1800 to 1811, focusing on the rule of Yusuf Pasha Qaramanli. This era was full of internal and external challenges, including foreign ambitions, consular conspiracies, and internal conflicts over succession. The series highlights the establishment of the first real state on Libyan soil and Yusuf's strategies to balance these challenges and the key historical events that reshaped the region.",
         },
         year: 2023,
         link: "/works/2",
      },
   ];

   return (
      <div className="wrapper">
         <div className="section-header">
            <h2 style={{ fontFamily: isRtl ? "Tajawal, sans-serif" : "Raleway, sans-serif" }}>
               {t("recentWorks")}
            </h2>
            <p
               style={{
                  fontFamily: isRtl ? "Tajawal, sans-serif" : "Raleway, sans-serif",
                  direction: isRtl ? "rtl" : "ltr",
                  textAlign: "center",
               }}
            >
               {t("recentWorksDescription")}
            </p>
         </div>
         <Slider ref={(c) => (sliderRef = c)} {...settings}>
            {works.map((work) => (
               <div key={work.id}>
                  <Link to={work.link} onClick={handleLinkClick}>
                     <img src={work.image} alt={`Slide ${work.id}`} />
                     <div className={`carousel-content ${isRtl ? "rtl" : "ltr"}`}>
                        <h2>{work.title[currentLang]}</h2>
                        <p>{work.description[currentLang]}</p>
                        <span>{work.year}</span>
                     </div>
                  </Link>
               </div>
            ))}
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
