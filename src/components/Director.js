import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Director.css";
import directorImage from "../assets/herodirector.jpg";

import awardImageSeptymos from "../assets/awards/septymos.jpg";
import awardImageAsbu from "../assets/awards/asbu.png";
import awardImageYouthMagazine from "../assets/award.png";
import awardImageArabFilmFestival from "../assets/awards/arab_film_festival.jpg";
import awardImageMaghrebiFilmFestival from "../assets/awards/maghrebi_film_festival.jpeg";
import awardImageArtCityFestival from "../assets/award.png";
import awardMondal from "../assets/awards/mondal cario.jpg";
import awardInternational from "../assets/awards/International Cinema.jpg";

import directorImageosama from "../assets/osamaoknoback.png";
import fobyaPoter from "../assets/posters/fobya.webp";
import ayad from "../assets/posters/ayad.webp";
import theRandomPoster from "../assets/posters/The Random.webp";
import dragunovPoster from "../assets/posters/Poster dragnof.webp";
import rubikPoster from "../assets/posters/Rubik.webp";
import zankaAlReehPoster from "../assets/posters/zangat alreh.webp";
import azzaimanPoster from "../assets/posters/Poster Zaeman.webp";
import albaronyPoster from "../assets/posters/albarony.webp";
import ghasakPoster from "../assets/posters/Poster Ghasaq.webp";
import zankatArreehPartTwoPoster from "../assets/posters/zangat alreh 2.webp";
import alsarayaPoster from "../assets/posters/Poster ALsraya Part 1.webp";
import alsarayaPartTwoPoster from "../assets/posters/el saraya final option 3 V1.webp";
import banatAlamPoster from "../assets/posters/bnat.webp";

const Director = () => {
   const { t, i18n } = useTranslation();
   const navigate = useNavigate();
   const [isExpanded, setIsExpanded] = useState(false);

   const filmography = [
      { id: 1, title: { en: "Banat Alam", ar: "بنات عالم" }, year: 2024, poster: banatAlamPoster },
      {
         id: 2,
         title: { en: "Alsaraya - Part Two", ar: "السرايا - الجزء الثاني" },
         year: 2023,
         poster: alsarayaPartTwoPoster,
      },
      {
         id: 3,
         title: { en: "Alsaraya - Part one", ar: "السرايا - الجزء الأول" },
         year: 2022,
         poster: alsarayaPoster,
      },
      {
         id: 4,
         title: { en: "Zankat Arreeh - Part Two", ar: "  زنقة الريح - الجزء الثاني" },
         year: 2021,
         poster: zankatArreehPartTwoPoster,
      },
      { id: 5, title: { en: "Ghassaq", ar: "غسق" }, year: 2021, poster: ghasakPoster },
      { id: 11, title: { en: "Albarony", ar: "الباروني" }, year: 2020, poster: albaronyPoster },
      { id: 6, title: { en: "Azzaiman", ar: "الزعيمان" }, year: 2020, poster: azzaimanPoster },
      {
         id: 7,
         title: { en: "Zankat Al-Reeh - Part one", ar: "زنقة الريح - الجزء الاول " },
         year: 2019,
         poster: zankaAlReehPoster,
      },
      { id: 9, title: { en: "Rubik", ar: "روبيك" }, year: 2017, poster: rubikPoster },
      { id: 13, title: { en: "Ayad", ar: "عياد" }, year: 2015, poster: ayad },
      { id: 8, title: { en: "Dragunov", ar: "دراجنوف" }, year: 2014, poster: dragunovPoster },
      { id: 10, title: { en: "The Random", ar: "العشوائي" }, year: 2013, poster: theRandomPoster },
      { id: 12, title: { en: "Fobya", ar: "فوبيا" }, year: 2012, poster: fobyaPoter },
   ];

   const awards = [
      {
         title: " Best Historical Series for Alsraya (Part tow) 2023",
         titleAr:
            "جائزةافضل مسلسل تاريخي عن مسلسل السرايا – الجزء الثاني في مهرجان اتحاد اذاعات الدول العربية ASBU في تونس 2023",
         event: "ASBU Festival in Tunisia 2023",
         eventAr: "مهرجان اتحاد اذاعات الدول العربية ASBU في تونس 2023",
         image: awardImageAsbu,
      },
      {
         title: "Best drama director award for Alsaraya – Part One 2023",
         titleAr: "جائزة سيبتموس افضل مخرج دراما عن مسلسل 2023 ( السرايا )",
         event: "Septimius Award 2023",
         eventAr: "سيبتيموس 2023",
         image: awardImageSeptymos,
      },

      {
         title: "Best Film and Best Director Award for Al-Barony 2023",
         titleAr:
            "جائزة افضل فيلم و افضل اخراج في مهرجان السينما و الهجرة الدولي في مدينة وجدة – المغرب عن فيلم الباروني 2023",
         event: "International Cinema and Migration Festival in Oujda, Morocco 2023",
         eventAr: "مهرجان السينما و الهجرة الدولي في مدينة وجدة – المغرب 2023",
         image: awardInternational,
      },
      {
         title: "Best Historical Series for Alsaraya (Part one) 2022",
         titleAr:
            "جائزة افضل مسلسل تاريخي عن مسلسل السرايا الجزء الاول في مهرجان اتحاد اذاعات الدول العربية ASBU في جدة 2022",
         event: "ASBU Festival in Jeddah 2022",
         eventAr: "مهرجان اتحاد اذاعات الدول العربية ASBU في جدة 2022",
         image: awardImageAsbu,
      },
      {
         title: "Best drama director award for Ghasak 2022",
         titleAr: "جائزة سيبتموس افضل مخرج دراما عن مسلسل 2022 ( غسق )",
         event: "Septimius Award 2022",
         eventAr: "سيبتيموس 2022",
         image: awardImageSeptymos,
      },

      {
         title: "Second best drama series for Zankat Al-Reeh (Part one) 2021",
         titleAr:
            "جائزة تاني افضل مسلسل درامي عن مسلسل زنقة الريح الجزء الاول في مهرجان اتحاد اذاعات الدول العربية ASBU في تونس 2021",
         event: "ASBU Festival in Tunis 2021",
         eventAr: "مهرجان اتحاد اذاعات الدول العربية ASBU في تونس 2021",
         image: awardImageAsbu,
      },

      {
         title: "Best drama director award for The Two Leaders 2020",
         titleAr: "جائزة سبتيموس افضل مخرج دراما عن مسلسل 2020 ( الزعيمان )",
         event: "Septimius Award 2020",
         eventAr: "سيبتيموس 2020",
         image: awardImageSeptymos,
      },
      {
         title: "Best drama director award for Zankat Arreeh 2019",
         titleAr: "جائزة سيبتيموس.جائزة أفضل مخرج دراما 2019 ( زنقة الريح )",
         event: "Septimius Award 2019",
         eventAr: "سيبتيموس 2019",
         image: awardImageSeptymos,
      },
      {
         title: "Bronze award for The Random 2016",
         titleAr:
            "الجائزة البرونزية لفيلم (العشوائي) عن فئة الأفلام القصيرة بمهرجان الفيلم العربي بمدينة قابس في تونس 2016.",
         event: "Arab Film Festival in Gabes, Tunisia 2016",
         eventAr: "مهرجان الفيلم العربي بمدينة قابس في تونس 2016",
         image: awardImageArabFilmFestival,
      },
      {
         title: "Special mention for The Random 2016",
         titleAr:
            "تنويه خاص لفيلم (العشوائي) من لجنة التحكيم بمهرجان الفيلم المغاربي بوجدة في المغرب 2016.",
         event: "Maghrebi Film Festival in Oujda, Morocco, 2016",
         eventAr: "مهرجان الفيلم المغاربي بوجدة في المغرب 2016",
         image: awardImageMaghrebiFilmFestival,
      },
      {
         title: "Best African film award for Random 2016",
         titleAr: "جائزة أفضل فيلم إفريقي لفيلم (العشوائي) من مهرجان ART City بالكاميرون 2016.",
         event: "ART City Festival in Cameroon 2016",
         eventAr: "مهرجان ART City بالكاميرون 2016",
         image: awardImageArtCityFestival,
      },

      {
         title: "Best drama director award for Dragunov 2015",
         titleAr: " جائزة سيبتيموس.جائزة أفضل مخرج دراما 2015 (دراجنوف)",
         event: "Septimius Award 2015",
         eventAr: "سيبتيموس 2015",
         image: awardImageSeptymos,
      },
      {
         title: "Best drama director award 2014",
         titleAr: "جائزة سيبتيموس جائزة افضل مخرج درامي 2014",
         event: "Septimius Award 2014",
         eventAr: "سيبتيموس 2014",
         image: awardImageSeptymos,
      },
      {
         title: "Best drama director award for Phobia 2014",
         titleAr: "جائزة سيبتيموس.جائزة أفضل مخرج درامي 2014 (فوبيا)",
         event: "Septimius Award 2014",
         eventAr: "سيبتيموس 2014",
         image: awardImageSeptymos,
      },

      {
         title: "Special Jury Award for Phobia 2014",
         titleAr: "جائزة لجنة التحكيم الخاصة (فوبيا) مونديال القاهرة للإذاعة والتلفزيون2014.",
         event: "Cairo Radio and Television Festival 2014",
         eventAr: "مونديال القاهرة للإذاعة والتلفزيون 2014",
         image: awardMondal,
      },

      {
         title: "Best program director award 2013",
         titleAr: "جائزة مجلة الشبابية جائزة افضل مخرج برامج 2013",
         event: "Youth magazine 2013",
         eventAr: "مجلة الشبابية 2013",
         image: awardImageYouthMagazine,
      },

      {
         title: "Best program director award for Alamat Estifham 2013",
         titleAr: "جائزة أفضل مخرج برامج 2013 (علامة استفهام)",
         event: "Alamat Estifham 2013",
         eventAr: "علامة استفهام 2013",
         image: awardImageYouthMagazine,
      },

      {
         title: "Best program director award 2010",
         titleAr: "جائزة مجلة الشبابية جائزة افضل مخرج برامج 2010",
         event: "Youth magazine 2010",
         eventAr: "مجلة الشبابية 2010",
         image: awardImageYouthMagazine,
      },

      {
         title: "Best documentary film director award 2009",
         titleAr: "جائزة افضل مخرج لفيلم وثائقي 2009",
         event: "2009",
         eventAr: "2009",
         image: awardImageSeptymos,
      },
   ];

   useEffect(() => {
      const sections = document.querySelectorAll(".director-section");

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("fade-in");
                  observer.unobserve(entry.target);
               }
            });
         },
         {
            threshold: 0.1,
         }
      );

      sections.forEach((section) => {
         observer.observe(section);
      });

      const images = document.querySelectorAll("img[data-src]");

      const imageObserver = new IntersectionObserver(
         (entries, observer) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  const img = entry.target;
                  img.src = img.getAttribute("data-src");
                  img.removeAttribute("data-src");
                  observer.unobserve(img);
               }
            });
         },
         {
            threshold: 0.1,
         }
      );

      images.forEach((img) => {
         imageObserver.observe(img);
      });

      return () => {
         sections.forEach((section) => observer.unobserve(section));
         images.forEach((img) => imageObserver.unobserve(img));
      };
   }, []);

   const handlePosterClick = (id) => {
      navigate(`/works/${id}`);
   };

   const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
   };

   const truncatedText = t("bioText").slice(0, 300); // Adjust this length as needed

   return (
      <div className={`director-container ${i18n.language === "ar" ? "rtl" : "ltr"}`}>
         <div className="director-hero">
            <img src={directorImage} alt="Director" className="director-image" />
            <div className="director-info">
               <h2 className="director-title">{t("directorosama")}</h2>
               <p className="director-subtitle">{t("journey")}</p>
            </div>
         </div>
         <div className="director-content">
            <section className="director-section biography">
               <h2>{t("biography")}</h2>
               <div className="bio-card">
                  <img src={directorImageosama} alt="Osama Rezg" className="bio-image" />
                  <div className="bio-text">
                     <p>{t("bioText1")}</p>
                     <p>{t("bioText2")}</p>
                     <p>{t("bioText3")}</p>
                     <p>{t("bioText4")}</p>
                     <p>{t("bioText5")}</p>
                     <p>{t("bioText6")}</p>
                     <p>{t("bioText7")}</p>
                     <p>{t("bioText8")}</p>
                     <p>{t("bioText9")}</p>
                     <p>{t("bioText10")}</p>
                     <p>{t("bioText11")}</p>
                     <p>{t("bioText12")}</p>
                     <p>{t("bioText13")}</p>
                     <p>{t("bioText14")}</p>
                     <p>{t("bioText15")}</p>
                     <p>{t("bioText16")}</p>
                     <p>{t("bioText17")}</p>
                     <p>{t("bioText18")}</p>
                     <p>{t("bioText19")}</p>
                     <p>{t("bioText20")}</p>
                     <p>{t("bioText21")}</p>
                  </div>
               </div>
            </section>

            <section className="director-section filmography">
               <h2>{t("filmography")}</h2>
               <div className="grid-container">
                  {filmography.map((item, index) => (
                     <div key={index} className="grid-item">
                        <div className="poster" onClick={() => handlePosterClick(item.id)}>
                           <img
                              data-src={item.poster}
                              alt={item.title[i18n.language]}
                              className="lazy-load"
                           />
                        </div>
                        <div className="poster-info">
                           <h3>{item.title[i18n.language]}</h3>
                           <p>{item.year}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
            <section className="director-section awards">
               <h2>{t("awards")}</h2>
               <div className="grid-container">
                  {awards.map((item, index) => (
                     <div key={index} className="grid-item">
                        <div className="award">
                           <img data-src={item.image} alt="Award" className="lazy-load" />
                        </div>
                        <div className="award-info">
                           <h3>{i18n.language === "ar" ? item.titleAr : item.title}</h3>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
         </div>
      </div>
   );
};

export default Director;
