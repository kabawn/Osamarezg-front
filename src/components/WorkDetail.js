import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./WorkDetail.css";

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

//  import video1 from '../assets/videos/bnat.mp4';
// import video2 from "../assets/videos/SarayaS2.mp4";
// import video3 from "../assets/videos/SarayaS1.mp4";
// import video4 from '../assets/videos/zanghatS2.mp4';
// import video5 from '../assets/videos/Ghassek.mp4';
// import video6 from '../assets/videos/Zaymen.mp4';
// import video7 from "../assets/videos/zanghatS1.mp4";
// import video8 from '../assets/videos/Dragunov.mp4';
// import video9 from '../assets/videos/el barouni.mp4'

import btsAlsaraya1 from "../assets/bts/alsraya/1.jpg";
import btsAlsaraya2 from "../assets/bts/alsraya/2.jpg";
import btsAlsaraya3 from "../assets/bts/alsraya/3.jpg";
import btsAlsaraya4 from "../assets/bts/alsraya/4.jpg";
import btsAlsaraya5 from "../assets/bts/alsraya/5.jpg";
import btsAlsaraya6 from "../assets/bts/alsraya/6.jpg";

import btsAlsaraya21 from "../assets/bts/alsraya2/1.jpg";
import btsAlsaraya22 from "../assets/bts/alsraya2/2.jpg";
import btsAlsaraya23 from "../assets/bts/alsraya2/3.jpg";
import btsAlsaraya24 from "../assets/bts/alsraya2/4.jpg";
import btsAlsaraya25 from "../assets/bts/alsraya2/5.jpg";
import btsAlsaraya26 from "../assets/bts/alsraya2/6.jpg";
import btsAlsaraya27 from "../assets/bts/alsraya2/7.jpg";
import btsAlsaraya28 from "../assets/bts/alsraya2/8.jpg";
import btsAlsaraya29 from "../assets/bts/alsraya2/9.jpg";
import btsAlsaraya210 from "../assets/bts/alsraya2/10.jpg";
import btsAlsaraya211 from "../assets/bts/alsraya2/11.jpg";
import btsAlsaraya212 from "../assets/bts/alsraya2/12.jpg";

import btsBanatAlam1 from "../assets/bts/bnat/1.jpg";
import btsBanatAlam2 from "../assets/bts/bnat/2.jpg";
import btsBanatAlam3 from "../assets/bts/bnat/3.jpg";
import btsBanatAlam4 from "../assets/bts/bnat/4.jpg";
import btsBanatAlam5 from "../assets/bts/bnat/5.jpg";
import btsBanatAlam6 from "../assets/bts/bnat/6.jpg";

import btszanget1 from "../assets/bts/zanget2/1.jpg";
import btszanget2 from "../assets/bts/zanget2/2.jpg";
import btszanget3 from "../assets/bts/zanget2/3.jpg";
import btszanget4 from "../assets/bts/zanget2/4.jpg";
import btszanget5 from "../assets/bts/zanget2/5.jpg";
import btszanget6 from "../assets/bts/zanget2/6.jpg";

import btsalzaeman1 from "../assets/bts/alzaeman/1.jpg";
import btsalzaeman2 from "../assets/bts/alzaeman/2.jpg";
import btsalzaeman3 from "../assets/bts/alzaeman/3.jpg";
import btsalzaeman4 from "../assets/bts/alzaeman/4.jpg";
import btsalzaeman5 from "../assets/bts/alzaeman/5.jpg";
import btsalzaeman6 from "../assets/bts/alzaeman/6.jpg";

import btselbarony1 from "../assets/bts/elbarony/1.png";
import btselbarony2 from "../assets/bts/elbarony/2.png";
import btselbarony3 from "../assets/bts/elbarony/3.png";
import btselbarony4 from "../assets/bts/elbarony/4.png";
import btselbarony5 from "../assets/bts/elbarony/5.png";
import btselbarony6 from "../assets/bts/elbarony/6.png";
import btselbarony7 from "../assets/bts/elbarony/7.png";

import btsrubik1 from "../assets/bts/rubik/1.jpg";
import btsrubik2 from "../assets/bts/rubik/2.jpg";
import btsrubik3 from "../assets/bts/rubik/3.jpg";
import btsrubik4 from "../assets/bts/rubik/4.jpg";
import btsrubik5 from "../assets/bts/rubik/5.jpg";
import btsrubik6 from "../assets/bts/rubik/6.jpg";
import btsrubik7 from "../assets/bts/rubik/7.jpg";
import btsrubik8 from "../assets/bts/rubik/8.jpg";
import btsrubik9 from "../assets/bts/rubik/9.jpg";
import btsrubik10 from "../assets/bts/rubik/10.jpg";
import btsrubik11 from "../assets/bts/rubik/11.jpg";
import btsrubik12 from "../assets/bts/rubik/12.jpg";

import btsdragnuf1 from "../assets/bts/dragnof/1.jpg";
import btsdragnuf2 from "../assets/bts/dragnof/2.jpg";
import btsdragnuf3 from "../assets/bts/dragnof/3.jpg";
import btsdragnuf4 from "../assets/bts/dragnof/4.jpg";
import btsdragnuf5 from "../assets/bts/dragnof/5.jpg";
import btsdragnuf6 from "../assets/bts/dragnof/6.jpg";

import btstherandom1 from "../assets/bts/therandom/1.jpg";
import btstherandom2 from "../assets/bts/therandom/2.jpg";
import btstherandom3 from "../assets/bts/therandom/3.jpg";
import btstherandom4 from "../assets/bts/therandom/4.jpg";
import btstherandom5 from "../assets/bts/therandom/5.jpg";
import btstherandom6 from "../assets/bts/therandom/6.jpg";
import btstherandom7 from "../assets/bts/therandom/7.jpg";
import btstherandom8 from "../assets/bts/therandom/8.jpg";
import btstherandom9 from "../assets/bts/therandom/9.jpg";

import btsfobya1 from "../assets/bts/fobya/1.jpg";
import btsfobya2 from "../assets/bts/fobya/2.jpg";
import btsfobya3 from "../assets/bts/fobya/3.jpg";
import btsfobya4 from "../assets/bts/fobya/4.jpg";
import btsfobya5 from "../assets/bts/fobya/5.jpg";
import btsfobya6 from "../assets/bts/fobya/6.jpg";
import btsfobya7 from "../assets/bts/fobya/7.jpg";
import btsfobya8 from "../assets/bts/fobya/8.jpg";
import btsfobya9 from "../assets/bts/fobya/9.jpg";

import btsayad1 from "../assets/bts/ayad/1.jpg";
import btsayad2 from "../assets/bts/ayad/2.jpg";
import btsayad3 from "../assets/bts/ayad/3.jpg";
import btsayad4 from "../assets/bts/ayad/4.jpg";
import btsayad5 from "../assets/bts/ayad/5.jpg";
import btsayad6 from "../assets/bts/ayad/6.jpg";
import btsayad7 from "../assets/bts/ayad/7.jpg";
import btsayad8 from "../assets/bts/ayad/8.jpg";
import btsayad9 from "../assets/bts/ayad/9.jpg";
import btsayad10 from "../assets/bts/ayad/10.jpg";
import btsayad11 from "../assets/bts/ayad/11.jpg";
import btsayad12 from "../assets/bts/ayad/12.jpg";

import btsqaseq1 from "../assets/bts/gaseq/1.jpg";
import btsqaseq2 from "../assets/bts/gaseq/2.jpg";
import btsqaseq3 from "../assets/bts/gaseq/3.jpg";
import btsqaseq4 from "../assets/bts/gaseq/4.jpg";
import btsqaseq5 from "../assets/bts/gaseq/5.jpg";
import btsqaseq6 from "../assets/bts/gaseq/6.jpg";
import btsqaseq7 from "../assets/bts/gaseq/7.jpg";
import btsqaseq8 from "../assets/bts/gaseq/8.jpg";
import btsqaseq9 from "../assets/bts/gaseq/9.jpg";
import btsqaseq10 from "../assets/bts/gaseq/10.jpg";
import btsqaseq11 from "../assets/bts/gaseq/11.jpg";
import btsqaseq12 from "../assets/bts/gaseq/12.jpg";

const works = [
   {
      id: 1,
      poster: poster1,
      title: { en: "Banat Alam", ar: "بنات العم" },
      year: 2024,
      description: {
         en: "Banat Alam takes place in the present day, following the life of Khulood who lives with her uncle Nouri after the death of her father and her mother's remarriage and move abroad. Khulood grows up with her cousin Afaf in the same household. Despite being cousins, the two girls are as close as sisters, studying in the same college. Their dreARTand aspirations diverge, with Khulood seeking a luxurious life through marrying a wealthy and powerful man, while Afaf believes in personal success through hard work and self-reliance.",
         ar: "تدور أحداث مسلسل بنات العم في وقتنا الحالي حيث تعيش خلود في منزل عمها نوري بعد وفاة والدها وزواج والدتها وسفرها إلى الخارج. تتربى خلود وتكبر في كنف عمها الحاج نوري بصحبة ابنة عمها عفاف التي تماثلها في العمر وتدرس معها في نفس الكلية وتبدوان في قمة الانسجام كأختين وليس بنات عم. تتقاطع أحلام الفتاتين وتختلف بين جرأة خلود وطبيعتها المادية وسعيها للارتقاء في الحياة والارتباط بشخص قوي وغني يضمن لها الحياة الرغيدة التي تتمناها وبين نظرة عفاف المختلفة للحياة وإيمانها بأن قيمة الشخص الحقيقية تكمن في نجاحه الناتج عن اجتهاده الشخصي وليس الناتج عن اعتماده على الغير.",
      },
      trailer: "https://drive.google.com/file/d/1eylvo1WyWEYjr_ev6EAjKMGDmoEkFKQE/preview",
      fullShowLink: "https://shorturl.at/MkYRy",
      btsImages: [
         btsBanatAlam1,
         btsBanatAlam2,
         btsBanatAlam3,
         btsBanatAlam4,
         btsBanatAlam5,
         btsBanatAlam6,
      ],
      awards: {
         en: ["", ""],
         ar: [" ", " "],
      },
      details: {
         episodes: { en: "14 episodes", ar: "14 حلقة" },
         duration: { en: "55 to 60 minutes", ar: "55 إلى 60 دقيقة" },
         productionCompany: { en: "ART Production", ar: "ART Production" },
         productionYear: { en: "2024", ar: "2024" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Siraj Huwaidi", ar: "سراج هويدي" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Hind Al-Arfiyah, Aya Sho, Saeed Al-Mahdi, Mohamed Ramadan Bin Nasser, Jamal Saleh Freikh, Ahmed Ammar, Abdullah Al-Fandi, Yahya Al-Nimr, Noor Al-Maisawi, Salsabil Abdul Razzaq, Aisha Kamal",
            ar: "هند العرفية، آية شو، سعيد المهدي، محمد رمضان بن ناصر، جمال صالح فريخ، أحمد عمار، عبدالله الفاندي، يحي النمر، نور الميساوي، سلسبيل عبد الرزاق، عائشة كمال",
         },
      },
   },

   {
      id: 2,
      poster: poster2,
      title: { en: "Alsaraya - Part Two", ar: "مسلسل السرايا (الجزء الثاني)" },
      year: 2023,
      description: {
         en: 'The second part of "Alsaraya" narrates the period from 1800 to 1811, focusing on Yusuf Pasha Qaramanli’s rule. This era was full of internal and external challenges, including foreign ambitions, consular conspiracies, and internal conflicts over succession. The series highlights the establishment of the first real state on Libyan soil, Yusuf’s strategies to balance these challenges, and the key historical events that reshaped the region.',
         ar: 'ملخص المسلسل: يسرد الجزء الثاني من مسلسل "السرايا" الفترة من سنة 1800 إلى 1811، مع التركيز على حكم يوسف باشا القرمانلي. كانت هذه الحقبة مليئة بالتحديات الداخلية والخارجية، بما في ذلك الأطماع الأجنبية ومؤامرات القناصل والصراعات الداخلية حول الخلافة. يبرز المسلسل تأسيس أول دولة حقيقية على التراب الليبي واستراتيجيات يوسف لموازنة هذه التحديات والأحداث التاريخية الرئيسية التي أعادت تشكيل المنطقة.',
      },
      trailer: "https://drive.google.com/file/d/13XMRlIacqdeG2vOWvWIR4MyFR-4goBBs/preview",
      fullShowLink: "https://www.toog.ly/ar/detail/alsaraya/174735",
      btsImages: [
         btsAlsaraya21,
         btsAlsaraya22,
         btsAlsaraya23,
         btsAlsaraya24,
         btsAlsaraya25,
         btsAlsaraya26,
         btsAlsaraya27,
         btsAlsaraya28,
         btsAlsaraya29,
         btsAlsaraya210,
         btsAlsaraya211,
         btsAlsaraya212,
      ],
      awards: {
         en: [
            "Best Historical Series from the Arab States Broadcasting Union Festival - Tunisia (2023)",
         ],
         ar: ["أفضل مسلسل تاريخي من مهرجان اتحاد اذاعات الدول العربية - تونس (2023)"],
      },
      details: {
         episodes: { en: "13 episodes", ar: " 13 حلقة" },
         duration: { en: "55 to 60 minutes", ar: " 55 الى 60 دقيقة" },
         productionCompany: { en: "ART Production", ar: "ART Production" },
         productionYear: { en: "2023", ar: "2023" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Siraj Huwaidi", ar: "سراج هويدي" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Mohammed Othman, Pierre Dagher (Lebanon), Moatasem Al-Nahar (Syria), Shukran Murtaja (Syria), Rabie Al-Qati (Morocco), Nidal Kahlool, Jamal Saleh Freikh, Saeed Al-Mahdi, Wasif Al-Khawaildi, Randa Abdul Latif",
            ar: "محمد عثمان, بيير داغر (لبنان), معتصم النهار (سوريا), شكران مرتجى (سوريا), ربيع القاطي (المغرب), نضال كحلول, جمال صالح فريخ, سعيد المهدي, واصف الخويلدي, رندة عبد اللطيف",
         },
      },
   },
   {
      id: 3,
      poster: poster3,
      title: { en: "Alsaraya - Part One", ar: "مسلسل السرايا (الجزء الأول)" },
      year: 2022,
      description: {
         en: 'The first part of "Alsaraya" chronicles one of the most significant periods in Libyan history, focusing on the power struggle during the Qaramanli dynasty’s rule over Tripoli. Set between 1784 and 1795, it reveals the hidden conflicts within the royal family and the internal and external conspiracies against the state.',
         ar: 'ملخص المسلسل: يؤرخ الجزء الأول من "السرايا" لإحدى أهم الفترات في التاريخ الليبي، مركّزًا على الصراع على السلطة خلال حكم الأسرة القرمانلية لإيالة طرابلس. تدور الأحداث بين عامي 1784 و1795، كاشفةً عن الصراعات الخفية داخل العائلة الحاكمة والمؤامرات الداخلية والخارجية ضد الدولة.',
      },
      trailer: "https://drive.google.com/file/d/1-iUHLSsIo6rixbpUU6X1Egu9h2i7brqf/preview",
      fullShowLink:
         "https://www.toog.ly/ar/detail/alsaraya/174735?section-first=174738&section-second=174741",
      btsImages: [
         btsAlsaraya1,
         btsAlsaraya2,
         btsAlsaraya3,
         btsAlsaraya4,
         btsAlsaraya5,
         btsAlsaraya6,
      ],
      awards: {
         en: [
            "Best Historical Series from the Arab States Broadcasting Union Festival - Riyadh (2022)",
         ],
         ar: ["أفضل مسلسل تاريخي من مهرجان اتحاد اذاعات الدول العربية - الرياض (2022)"],
      },
      details: {
         episodes: { en: "14 episodes", ar: " 14 حلقة" },
         duration: { en: "55 to 60 minutes", ar: " 55 الى 60 دقيقة" },
         productionCompany: { en: "ART Production", ar: "ART Production" },
         productionYear: { en: "2022", ar: "2022" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Siraj Huwaidi", ar: "سراج هويدي" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Ali Al-Shoul, Anwar Al-Tir, Lubna Abdel Hamid, Abdul Basit Abu Qanda, Salah Al-Ahmar, Hassan Qarfallah, Muhannad Kalash, Saleh Al-Qarad, Abdullah Al-Fandi, Abdul Hamid Al-Taeb, Salma Zarrouq",
            ar: "علي الشول, أنور التير, لبنى عبد الحميد, عبد الباسط ابو قندة, صلاح الاحمر, حسن قرفال, مهند كلاش, صالح القراد, عبدالله الفاندي, عبد الحميد التائب, سلمى زروق",
         },
      },
   },

   {
      id: 4,
      poster: poster4,
      title: { en: "Zanka Al-Reeh - Part Two", ar: "مسلسل زنقة الريح (الجزء الثاني)" },
      year: 2021,
      description: {
         en: "Historical social drama set in 1945 in Tripoli, Libya, highlighting the suffering of the Libyan people under British administration after World War II and the defeat of Italy. The series also showcases the social life, customs, and traditions of Tripoli's diverse population, united in one city and one nation.",
         ar: "ملخص المسلسل: دراما تاريخية اجتماعية، تدور أحداثها سنة 1945 بمدينة طرابلس في ليبيا، تُبرز معاناة الشعب الليبي في ظل حكم الإدارة البريطانية بعد الحرب العالمية الثانية وهزيمة إيطاليا. يُبرز المسلسل الحياة الاجتماعية، والعادات والتقاليد بين سكان طرابلس من جميع الأديان والأعراق.",
      },
      trailer: "https://drive.google.com/file/d/1dznZw2BELbMcG_YT_ul1ZxReYOZL2oND/preview",
      fullShowLink: "https://www.toog.ly/ar/detail/zaget-alreeh/172116",
      btsImages: [btszanget1, btszanget2, btszanget3, btszanget4, btszanget5, btszanget6],
      awards: {
         en: [
            "Septimius Award for Best Series - Libya",
            "Best Director",
            "Best Writer",
            "Best Lead Actor",
            "Best Lead Actress",
            "Best New Face",
         ],
         ar: [
            "جائزة سيبتموس لأفضل مسلسل - ليبيا",
            "أفضل مخرج",
            "أفضل كاتب",
            "أفضل ممثل دور أول",
            "أفضل ممثلة دور أول",
            "أفضل وجه جديد",
         ],
      },
      details: {
         episodes: { en: "15 episodes", ar: "15 حلقة" },
         duration: { en: "45 to 60 minutes", ar: "45 الى 60 دقيقة" },
         productionCompany: { en: "ART Production", ar: "ART Production" },
         productionYear: { en: "2021", ar: "2021" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Abdulrahman Haqiq", ar: "عبد الرحمان حقيق" },
         director: { en: "Abdelsalam Rezg", ar: "عبد السلام رزق" },
         artisticProducer: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Mohamed Othman, Osama Al-Bahi, Lubna Abdel Hamid, Saleh Al-Qarad, Abdul Hamid Al-Taeb, Hassan Qarfallah, Ayoub Al-Qaib, Hind Al-Arfiyah",
            ar: "محمد عثمان, أسامة الباهي, لبنى عبد الحميد, صالح القراد, عبد الحميد التائب, حسن قرفال, أيوب القيب, هند العرفية",
         },
      },
   },

   {
      id: 5,
      poster: poster5,
      title: { en: "Ghasak", ar: "مسلسل غسق" },
      year: 2021,
      description: {
         en: 'Ghasak chronicles the epic battle of "Al-Bunyan Al-Marsous," where the Libyan army fought against ISIS to reclaim the city of Sirte. The series also depicts the conditions inside Sirte under ISIS control, as well as the situations in Misrata and Tripoli from September 2014 to December 2016.',
         ar: "ملخص المسلسل: يؤرخ مسلسل (غسق) لملحمة (البنيان المرصوص) وهي معركة قام بها الجيش الليبي ضد تنظيم الدولة (داعش) الذي سيطر على مدينة سرت الليبية، ويرصد المسلسل الأوضاع داخل مدينة سرت تحت سيطرة التنظيم، وكذلك الأوضاع في مدينتي مصراتة وطرابلس من سبتمبر 2014 حتى ديسمبر 2016 تاريخ سقوط آخر معاقل (داعش) في سرت، ويسرد نضال الشعب الليبي ضد التطرف والإرهاب.",
      },
      trailer: "https://drive.google.com/file/d/1s4ch2V0maW3iMV7aI3amrt6h1M7dryvc/preview",
      fullShowLink: "https://www.toog.ly/ar/detail/Ghasak/174516",
      btsImages: [
         btsqaseq1,
         btsqaseq2,
         btsqaseq3,
         btsqaseq4,
         btsqaseq5,
         btsqaseq6,
         btsqaseq7,
         btsqaseq8,
         btsqaseq9,
         btsqaseq10,
         btsqaseq11,
         btsqaseq12,
      ],
      awards: {
         en: [
            "Septimius Award for Best Series - Libya",
            "Best Director",
            "Best Writer",
            "Best Lead Actor",
            "Best Lead Actress",
            "Best New Face",
         ],
         ar: [
            "جائزة سيبتموس لأفضل مسلسل - ليبيا",
            "أفضل مخرج",
            "أفضل كاتب",
            "أفضل ممثل دور أول",
            "أفضل ممثلة دور أول",
            "أفضل وجه جديد",
         ],
      },
      details: {
         episodes: { en: "10 episodes", ar: "10 حلقات" },
         duration: { en: "60 minutes", ar: "60 دقيقة" },
         productionCompany: { en: "ART Production", ar: "ART Production" },
         productionYear: { en: "2021", ar: "2021" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Siraj Huwaidi", ar: "سراج هويدي" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Anwar Al-Tir, Rabie Kati (Morocco), Hind Al-Arfiyah, Mouadh Al-Ramili (Tunisia), Ali Al-Shoul, Nidal Kahlool, Mohamed Bin Nasser, Abdullah Al-Masri (Egypt), Osama Salah (Egypt)",
            ar: "أنور التير, ربيع القاطي (المغرب), هند العرفية, مهذب الرميلي (تونس), علي الشول, نضال كحلول, محمد بن ناصر, عبد الله المصري (مصر), اسامة صلاح (مصر)",
         },
      },
   },
   {
      id: 6,
      poster: poster6,
      title: { en: "Al-Za'iman", ar: "مسلسل الزعيمان" },
      year: 2020,
      description: {
         en: "The series narrates the life stories of the Libyan revolutionaries Suleiman Al-Barouni and Bashir Al-Saadawi from 1887 to 1923, highlighting their struggle against Italian colonization and efforts to unify Libya.",
         ar: "ملخص العمل: يتناول المسلسل قصة حياة المناضل الليبي (سليمان الباروني) والمناضل الليبي (بشير السعداوي) في الفترة من سنة 1887 حتى 1923 من خلال سرد درامي مختلف وجديد. يعتمد على سرد شخصية (زعيمة الباروني) ابنت المناضل (سليمان الباروني) لأهم الأحداث في تاريخ نضال الزعيمين مع باقي الزعماء الليبيين ممن قاوموا الاستعمار الإيطالي وأسهموا في جمع كلمة أبناء ليبيا لتوحيد الصفوف ضد الاستعمار ومن أجل الحصول على الاستقلال الكامل وتوحيد أقاليم ليبيا الثلاث برقة وفزان وطرابلس تحت راية واحدة.",
      },
      trailer: "https://drive.google.com/file/d/1C6wxji6XQZt2Xj_rpw_quWASzmgbMSLZ/preview",
      fullShowLink: "https://www.toog.ly/ar/detail/alzayman/174492",
      btsImages: [
         btsalzaeman1,
         btsalzaeman2,
         btsalzaeman3,
         btsalzaeman4,
         btsalzaeman5,
         btsalzaeman6,
      ],
      awards: {
         en: ["Septimius Award for Best Series - Libya", "Best Director", "Best Lead Actor"],
         ar: ["جائزة سيبتموس لأفضل مسلسل - ليبيا", "أفضل مخرج", "أفضل ممثل دور أول"],
      },
      details: {
         episodes: { en: "18 episodes", ar: "18 حلقة" },
         duration: { en: "40 to 50 minutes", ar: "40 إلى 50 دقيقة" },
         productionCompany: { en: "ART Production", ar: "ART Production" },
         productionYear: { en: "2020", ar: "2020" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Ezzat Shalabi, Ahmed Nabil", ar: "عزة شلبي، أحمد نبيل" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Rabie Kati (Morocco), Nadera Omran (Jordan), Saleh Al-Qarad, Abdul Hamid Al-Tayeb, Nisaf Bin Hafsia (Tunisia), Ali Al-Shoul",
            ar: "ربيع القاطي (المغرب), نادرة عمران (الأردن), صالح القراد, عبد الحميد التايب, نصاف بن حفصية (تونس), علي الشول",
         },
      },
   },
   {
      id: 7,
      poster: poster7,
      title: { en: "Zanqat Al-Reeh (Part One)", ar: "مسلسل زنقة الريح (الجزء الأول)" },
      year: 2019,
      description: {
         en: "Zanqat Al-Reeh is a historical social drama set in 1945 in Tripoli, Libya. The series highlights the suffering of the Libyan people under British administration, which was imposed after World War II and the defeat of Italy. It also showcases the social life, customs, and traditions that were prevalent among the residents of Tripoli, who shared their joys and sorrows regardless of their different religions and ethnicities.",
         ar: "ملخص المسلسل: مسلسل (زنقة الريح) دراما تاريخية اجتماعية، تدور أحداثها سنة 1945 في مدينة طرابلس في ليبيا، يُبرز معاناة الشعب الليبي في ظل حكم الإدارة البريطانية التي نصّبت حاكم على ليبيا بعد الحرب العالمية الثانية وهزيمة إيطاليا. في غياب أي اهتمام إعلامي أو حقوقي قامت الإدارة العسكرية البريطانية بتسهيل الإجراءات للجاليات الأجنبية على حساب أبناء الوطن، كما يبرز المسلسل الحياة الاجتماعية، والعادات والتقاليد التي كانت سائدة بين سكان طرابلس من جميع الأديان والأعراق، تجمعهم مدينة واحدة ووطن واحد، يتشاركون فيه أفراحهم وأحزانهم.",
      },
      trailer: "https://drive.google.com/file/d/14C1gL_-02t88i-NOTJR9yNZ0dFmpqEm9/preview",
      fullShowLink:
         "https://www.toog.ly/ar/detail/zaget-alreeh/172116?section-first=172119&section-second=172128",
      btsImages: [btszanget1, btszanget2, btszanget3, btszanget4, btszanget5, btszanget6],

      awards: {
         en: ["Second Best Social Series - ASBU Festival, Tunisia 2021"],
         ar: ["الترتيب الثاني أفضل مسلسل اجتماعي من مهرجان اتحاد إذاعات الدول العربية - تونس 2021"],
      },
      details: {
         episodes: { en: "20 episodes", ar: "20 حلقة" },
         duration: { en: "45 to 55 minutes", ar: "45 إلى 55 دقيقة" },
         productionCompany: { en: "ART Production", ar: "ART Production" },
         productionYear: { en: "2019", ar: "2019" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Abdul Rahman Haqiq", ar: "عبد الرحمان حقيق" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Mohamed Osman, Osama Al-Bahi, Najla Ben Abdallah (Tunisia), Hassan Qarfallah, Wasif Al-Khwailidi, Lubna Abdel Hamid, Saleh Al-Qarad, Abdul Hamid Al-Taeb",
            ar: "محمد عثمان، أسامة الباهي، نجلاء بن عبد الله (تونس)، حسن قرفال، واصف الخويلدي، لبنى عبد الحميد، صالح القراد، عبد الحميد التائب",
         },
      },
   },

   {
      id: 8,
      poster: poster8,
      title: { en: "Dragunov", ar: "مسلسل دراجنوف" },
      year: 2014,
      description: {
         en: "Dragunov is a Libyan drama series that chronicles the period before, during, and after the events of 2011. It explores the social impact and consequences following the fall of Muammar Gaddafi's regime, portraying the stories of various Libyan families and individuals from different social standings. The series delves into the divisions within Libyan society that emerged post-2011 and how these divisions evolved with shifting power dynamics.",
         ar: "مسلسل دراجنوف مسلسل درامي ليبي يؤرخ لمرحلة ما قبل أحداث 2011 ومرحلة الأحداث وما بعدها من الناحية الاجتماعية وتأثرها بما حدث بعد سقوط نظام معمر القذافي وتداعياته بطرح جريء ومتوازن. يصور مسلسل دراجنوف قصص مجموعة من العائلات والشخصيات الليبية تختلف من ناحية المكانة الاجتماعية وقربها للسلطة في النظام السابق والفجوة التي تحدث في هذا الوسط الاجتماعي بعد أحداث 2011 وانقسام المجتمع الليبي نتيجة تداعيات ما حدث واستمرار هذا الانقسام ودخوله لمرحلة أخرى بعد موت القذافي حيث أصبحت الانقسامات أكثر وضوحاً وأكثر تأثيراً مع اختلاف مراكز القوى داخل المجتمع. والدراجنوف هي بندقية قنص روسية وتعتبر من أشهر بنادق القنص في العالم واختيار هذا الاسم للعمل راجع لعلاقته بالحبكة الدرامية داخل العمل نفسه والتي تظهر في عدة مشاهد مهمة ومحورية داخله.",
      },
      trailer: "https://drive.google.com/file/d/1WTIDzRKLSecQoHgnQU2VbMBLQhNjbI5u/preview",
      fullShowLink: "https://www.toog.ly/ar/detail/draganof/172272",
      btsImages: [btsdragnuf1, btsdragnuf2, btsdragnuf3, btsdragnuf4, btsdragnuf5, btsdragnuf6],
      awards: {
         en: ["Best Director", "Best Action Sequence"],
         ar: ["أفضل مخرج", "أفضل تسلسل حركة"],
      },
      details: {
         episodes: { en: "15 episodes", ar: "15 حلقة" },
         duration: { en: "45 minutes", ar: "45 دقيقة" },
         productionCompany: { en: "ART Production", ar: "ART Production" },
         productionYear: { en: "2014", ar: "2014" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Siraj Huwaidi", ar: "سراج هويدي" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Mohamed Osman, Muhannad Kalash, Hisham Rustom (Tunisia), Souhir Ben Amara (Tunisia), Wasif Al-Khwailidi",
            ar: "محمد عثمان، مهند كلاش، هشام رستم (تونس)، سهير بن عمارة (تونس)، واصف الخويلدي",
         },
      },
   },

   {
      id: 9,
      poster: poster9, // Make sure to replace 'poster9' with the correct import or path
      title: { en: "Rubik", ar: "روبيك" },
      year: 2017,
      description: {
         en: "The series follows the story of Marwan, an orphaned young man whose parents died in the Libyan Airlines plane crash in 1992. Raised in his aunt's house, he was mistreated by her husband and forced to work in a car repair shop. He eventually becomes a criminal and a murderer after experiencing a love story.",
         ar: "يستعرض المسلسل قصة الشاب اليتيم (مروان) الذي توفي والداه في حادث سقوط طائرة الخطوط الليبية في عام 1992، ونشأ في بيت عمته حيث تعرض لمعاملة سيئة من زوجها واضطر للعمل في ورشة لتصليح السيارات، ثم تحول إلى مجرم وسفاح بعد مروره بقصة حب.",
      },
      trailer: "https://drive.google.com/file/d/1KD2qUyb3rrqYEB2vhC7QrWiyrPf5wirP/preview",
      fullShowLink: "https://www.youtube.com/@imagecomly/videos",
      btsImages: [
         btsrubik1,
         btsrubik2,
         btsrubik3,
         btsrubik4,
         btsrubik5,
         btsrubik6,
         btsrubik7,
         btsrubik8,
         btsrubik9,
         btsrubik10,
         btsrubik11,
         btsrubik12,
      ], // Add behind-the-scenes images if available
      awards: {
         en: [], // Add awards if any
         ar: [],
      },
      details: {
         episodes: { en: "10 episodes", ar: "10 حلقات" }, // Not applicable for movies
         duration: { en: "30 to 40 minutes", ar: "30 إلى 40 دقيقة" },
         productionCompany: { en: "ART Production", ar: "ART Productıon" },
         productionYear: { en: "2017", ar: "2017" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Siraj Huwaidi", ar: "سراج هويدي" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Wasif Al-Khuwailidi, Mohamed Osman, Munira Al-Balrouin, Mohamed Osman, Lubna Abdel Hamid, Fathi Kahlool",
            ar: "واصف الخويلدي، محمد عثمان، منيرة بالروين، محمد عثمان، لبنى عبد الحميد، فتحي كحلول",
         },
      },
   },

   {
      id: 10,
      poster: poster10, // Make sure to replace 'poster10' with the correct import or path
      title: { en: "The Random", ar: "العشوائي" },
      year: 2016,
      description: {
         en: "The Random is a short film that lasts 20 minutes and addresses an issue that has become very important in Libya and the Libyan society after the revolution: the issue of excluding and marginalizing others. Each Libyan tries to impose their opinion and reject different thoughts by force of arms. The film presents this issue in a satirical manner imbued with pain.",
         ar: "العشوائي ... فيلم قصير مدته 20 دقيقة يتناول القضية التي أصبحت مهمة للغاية في ليبيا والمجتمع الليبي بعد الثورة، قضية إقصاء وتهميش الآخر ومحاولة كل ليبي فرض رأيه ورفض الفكر الذي يختلف معه بقوة السلاح. الفيلم يطرح القضية بأسلوب ساخر مبطن بالألم.",
      },
      trailer: "https://drive.google.com/file/d/1NIR01sPmEwPVq5KF0CnTYcfgwGl2Zt0O/preview",
      fullShowLink: "https://www.toog.ly/ar/detail/ashwaiee/175062",
      btsImages: [
         btstherandom1,
         btstherandom2,
         btstherandom3,
         btstherandom4,
         btstherandom5,
         btstherandom6,
         btstherandom7,
         btstherandom8,
         btstherandom9,
      ],
      awards: {
         en: [
            "Oasis Award for Short Film from the Gabes Arab Film Festival 2016",
            "Special Mention from the Jury at the Oujda Maghreb Film Festival in Morocco 2017",
            "Best African Film Award at the ART CITY Festival in Cameroon 2016",
         ],
         ar: [
            "جائزة الواحة للفيلم القصير من مهرجان الفيلم العربي بقابس 2016",
            "تنويه خاص من لجنة التحكيم في مهرجان وجدة بالمغرب للفيلم المغاربي 2017",
            "جائزة افضل فيلم افريقي بمهرجان ART CITY بالكاميرون 2016",
         ],
      },
      details: {
         episodes: { en: "Moive", ar: "فيلم" }, // Not applicable for movies
         duration: { en: "20 minutes", ar: "20 دقيقة" },
         productionCompany: { en: "ART Production", ar: "ART Production" },
         productionYear: { en: "2016", ar: "2016" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Siraj Huwaidi", ar: "سراج هويدي" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Nader Al-Loulabi, Mohamed Osman, Wasif Al-Khuwailidi, Muhannad Kalash, Ramadan Al-Mazdawi",
            ar: "نادر اللولبي، محمد عثمان، واصف الخويلدي، مهند كلاش، رمضان المزداوي",
         },
      },
   },
   {
      id: 11,
      poster: poster11, // Make sure to replace 'poster8' with the correct import or path
      title: { en: "Al-Barouni", ar: "فيلم الباروني" },
      year: 2020,
      description: {
         en: 'The film "Al-Barouni" depicts a part of the life of the renowned Libyan freedom fighter Suleiman Pasha Al-Barouni, also known as "The Leader". Born in 1870 in Kabaw, Jabal Nafusa, Libya, he was a scholar, politician, poet, and one of the most significant fighters in Libya\'s history. Al-Barouni contributed to the establishment of the first Arab Republic, the Tripolitanian Republic, in 1918. He was an early fighter against Italian occupation, using both diplomacy and arms, paying a heavy price for his struggle. He was exiled from his homeland and died in 1940 in Muscat, Oman.',
         ar: "فيلم الباروني يتناول جزء من حياة المناضل الليبي المعروف ( سليمان باشا الباروني ) اشتهر بإسم ( الزعيم ) الذي ولد سنة 1870 في مدينة كاباو في جبل نفوسة ليبيا و اشتهر بأنه جمع العلم و الدين و السياسة و الشعر و الادب ، فأصبح احد اهم المناضلين في تاريخ ليبيا و ساهم في تأسيس أول جمهورية عربية وهي الجمهورية الطرابلسية التي شارك في تأسيسها سنة 1918. كان من اوائل المناضلين ضد الاحتلال الايطالي الذي واجهه بالسياسة و السلاح و دفع ثمناً باهضاً لنضاله و تم نفيه خارج وطنه حتى و افته المنية سنة 1940 في مسقط بعمان.",
      },
      trailer: "https://drive.google.com/file/d/1Ff53Gvqz6kAHysdEu8seMcniCqFFo2uZ/preview",
      fullShowLink: "https://www.toog.ly/ar/detail/barony/175074",
      btsImages: [
         btselbarony1,
         btselbarony2,
         btselbarony3,
         btselbarony4,
         btselbarony5,
         btselbarony6,
         btselbarony7,
      ], // Add behind-the-scenes images if available
      awards: {
         en: [], // Add awards if any
         ar: [],
      },
      details: {
         episodes: { en: "Moive", ar: "فيلم" }, // Not applicable for movies
         duration: { en: "2h:34m ", ar: " 2س26د" }, // Not applicable for movies
         productionCompany: { en: "ART Production", ar: "ART Productıon" },
         productionYear: { en: "2020", ar: "2020" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Azza Shalabi", ar: "عزة شلبي" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Rabie Al-Qati, Abdul Hamid Al-Tayeb, Nidal Kahlool",
            ar: "ربيع القاطي، عبد الحميد التائب، نضال كحلول",
         },
      },
   },

   {
      id: 12,
      poster: poster12, // Make sure to replace 'poster11' with the correct import or path
      title: { en: "Phobia", ar: "فوبيا" },
      year: 2013,
      description: {
         en: 'The series "Phobia" is a black comedy that addresses the fears experienced by Libyans after the Arab Spring revolution, and what happened to them during those difficult times.',
         ar: "يتناول مسلسل «فوبيا» في إطار الكوميديا السوداء، المخاوف التي يعيشها الليبيون بعد ثورة الربيع العربي، وما حدث لهم على مدار تلك اﻷوقات العصيبة التي جرت لهم.",
      },
      trailer: "https://drive.google.com/file/d/1o1BsCXUHVOr9vLr4HjN8ClBJfIQYRxqd/preview", // Add the trailer link if available
      fullShowLink: "https://www.toog.ly/ar/detail/fobia/175191",
      btsImages: [
         btsfobya1,
         btsfobya2,
         btsfobya3,
         btsfobya4,
         btsfobya5,
         btsfobya6,
         btsfobya7,
         btsfobya8,
         btsfobya9,
      ], // Add behind-the-scenes images if available
      awards: { en: [], ar: [] }, // Add awards if available
      details: {
         episodes: { en: "15 episodes", ar: "15 حلقة" }, // Not applicable for movies
         duration: { en: " 20 to 30 min", ar: "من 20 الى 30 دقيقة" }, // Add episode duration if available
         productionCompany: { en: "ART Production", ar: "ART Production" },
         productionYear: { en: "2013", ar: "2013" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Siraj Huwaidi", ar: "سراج هويدي" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Mohamed Osman, Wasif Al-Khuwailidi, Jamal Zayed, Ramadan Al-Mazdawi, Wafaa Nabil, Muhannad Kalash",
            ar: "محمد عثمان، واصف الخويلدي، جمال زايد، رمضان المزداوي، وفاء نبيل، مهند كلش",
         },
      },
   },

   {
      id: 13,
      poster: poster13, // Make sure to replace 'poster12' with the correct import or path
      title: { en: "Ayad", ar: "عياد" },
      year: 2015,
      description: {
         en: 'The series "Ayad" tells the story of a young man named Ayad, whom people describe as unlucky and nicknamed "Ayad the Misfortunate". He has failed at everything in his life. In contrast, his cousin Walid lives next door and is always lucky. In each episode, we watch the funny stories that happen to them.',
         ar: "يتناول المسلسل قصة شاب اسمه عياد يصفه الناس بأنه منحوس و اسم الشهرة ( عياد المتشحط ) لم يستطع ان ينجح في اي شيئ في حياته و على طرف النقيض يعيش بجانبه ابن عمه وليد المحظوظ دائما نشاهد مايحدث معهم في كل حلقة من قصص طريفة.",
      },
      trailer: "https://drive.google.com/file/d/1ZnjlzZ7fbfwkxSe3s71ZwJhL67M5hyX1/preview",
      fullShowLink: "https://www.youtube.com/@3yadmetshhet616/videos",
      btsImages: [
         btsayad1,
         btsayad2,
         btsayad3,
         btsayad4,
         btsayad5,
         btsayad6,
         btsayad7,
         btsayad8,
         btsayad9,
         btsayad10,
         btsayad11,
         btsayad12,
      ], // Add behind-the-scenes images if available
      awards: { en: [], ar: [] }, // Add awards if available
      details: {
         episodes: { en: "15", ar: "15" }, // Not applicable for movies
         duration: { en: "20 minutes", ar: "20 دقيقة" },
         productionCompany: { en: "Libya Al-Ahrar Channel", ar: "قناة ليبيا الاحرار" },
         productionYear: { en: "2015", ar: "2015" },
         producer: { en: "Walid Al-Lafi", ar: "وليد اللافي" },
         writer: { en: "Siraj Huwaidi", ar: "سراج هويدي" },
         director: { en: "Osama Rezg", ar: "أسامة رزق" },
         cast: {
            en: "Mohamed Osman, Mohamed Kara, Osama Al-Bahi, Munira Al-Barouni",
            ar: "محمد عثمان، محمد كارة، أسامة الباهي، منيرة بالروين",
         },
      },
   },

   // Add similar objects for other works
];

const WorkDetail = () => {
   const { id } = useParams();
   const [modalShow, setModalShow] = useState(false);
   const [selectedImage, setSelectedImage] = useState(null);
   const { t, i18n } = useTranslation();

   const work = works.find((work) => work.id === parseInt(id));

   if (!work) {
      return <div>Work not found</div>;
   }

   const handleImageClick = (image) => {
      setSelectedImage(image);
      setModalShow(true);
   };

   const handleClose = () => {
      setModalShow(false);
      setSelectedImage(null);
   };

   const lang = i18n.language;

   return (
      <Container fluid className={`work-detail ${lang === "ar" ? "rtl" : "ltr"}`}>
         <Row>
            <Col md={6}>
               <img src={work.poster} alt={work.title[lang]} className="work-poster" />

               <Button href={work.fullShowLink} target="_blank" className="full-show-button">
                  {t("watchFullShow")}
               </Button>
            </Col>
            <Col md={6}>
               <h2>{work.title[lang]}</h2>
               {/* <p>{work.year}</p> */}
               <p>{work.description[lang]}</p>
               {work.details && (
                  <div>
                     <div className="work-row">
                        <div className="work-item">
                           <h5>
                              <strong>{t("episodes")}:</strong>
                           </h5>
                           <p>{work.details.episodes[lang]}</p>
                        </div>
                        <div className="work-item">
                           <h4>
                              <strong>{t("duration")}:</strong>
                           </h4>
                           <p>{work.details.duration[lang]}</p>
                        </div>
                     </div>

                     <div className="work-row">
                        <div className="work-item">
                           <h4>
                              <strong>{t("productionCompany")}:</strong>
                           </h4>
                           <p>{work.details.productionCompany[lang]}</p>
                        </div>
                        <div className="work-item">
                           <h4>
                              <strong>{t("productionYear")}:</strong>
                           </h4>
                           <p>{work.details.productionYear[lang]}</p>
                        </div>
                     </div>
                     <div className="work-row">
                        <div className="work-item">
                           <h4>
                              <strong>{t("producer")}:</strong>
                           </h4>
                           <p>{work.details.producer[lang]}</p>
                        </div>
                        <div className="work-item">
                           <h4>
                              <strong>{t("writer")}:</strong>
                           </h4>
                           <p>{work.details.writer[lang]}</p>
                        </div>
                        <div className="work-item">
                           <h4>
                              <strong>{t("director")}:</strong>
                           </h4>
                           <p>{work.details.director[lang]}</p>
                        </div>
                     </div>
                     <h4 className="cast">
                        <strong>{t("cast")}:</strong>
                     </h4>
                     <p>{work.details.cast[lang]}</p>
                  </div>
               )}

               {/* <h3 className="awardstitle">{t("awards")}</h3>
               <ul className="awards-list">
                  {work.awards[lang].map((award, index) => (
                     <li key={index}>{award}</li>
                  ))}
               </ul> */}
            </Col>
         </Row>

         <Row>
            <Col md={12}>
               <h3 className="video">
                  {t("trailer")}
                  <div className="videoitslef">
                     <iframe
                        width="60%"
                        height="500"
                        src={work.trailer}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="Trailer"
                     ></iframe>
                  </div>
               </h3>
            </Col>
         </Row>

         <h3 className="bts">{t("behindTheScenes")}</h3>
         <Row className="bts-images">
            {work.btsImages.map((image, index) => (
               <Col md={4} key={index}>
                  <img
                     src={image}
                     alt={`BTS ${index + 1}`}
                     className="bts-image"
                     onClick={() => handleImageClick(image)}
                  />
               </Col>
            ))}
         </Row>

         <Modal show={modalShow} onHide={handleClose} centered size="lg">
            <Modal.Body className="modal-content">
               {selectedImage && <img src={selectedImage} alt="BTS" className="modal-image" />}
               <Button variant="secondary" onClick={handleClose} className="close-button">
                  {t("close")}
               </Button>
            </Modal.Body>
         </Modal>
      </Container>
   );
};

export default WorkDetail;
