import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
   en: {
      translation: {
         // English translations
         biography: "Biography",
         filmography: "Filmography",
         awards: "Awards",
         episodes: "Number of episodes",
         duration: "Episode duration",
         productionCompany: "Production company",
         productionYear: "Year of production",
         producer: "Producer",
         writer: "Writer",
         director: "Director",
         cast: "Cast",
         watchFullShow: "Watch Full Show",
         behindTheScenes: "Images",
         close: "Close",
         home: "Home",
         about: "About",
         credits: "Credits",
         contact: "Contact",
         trailer: "Trailer",
         fullName: "Full Name",
         age: "Age",
         gender: "Gender",
         nationality: "Nationality",

         phoneNumber: "Phone Number",
         uploadPhotos: "Upload Photos",
         uploadVideo: "Upload Video",
         submit: "Submit",
         castingPageHeader: "Casting Call",
         castingPageText: "Potential Collaboration in Our Upcoming Projects.",
         casting: "Casting",
         male: "Male",
         female: "Female",
         castingtextupform:
            "We invite you to submit your previous work or a new demo performance. Please send them here along with your contact details for casting consideration.",
         exploringTalents: "Exploring Talents:",
         shareExperience: "Share Your Artistic Experience with Us!",
         registerNow: "Register Now",
         welcomeToMyUniverse: "Welcome to the universe of Director Osama Rezg",
         heroText:
            "Through the lens, the human spirit is captured, telling stories that are worthy of  contemplation.",
         aboutOsama: "ABOUT OSAMA REZG",
         aboutDescription1:
            "Osama Rezg is a prominent Libyan director who earned degrees in directing and film production from the UK. He founded the media production companies Al-Sura for Media Production and ART Production. Rezg directed notable dramas such as (Phobia), (Zanqat Al-Reeh), and (Al-Za'imaan). His first feature film was (Al-Barouni) in 2021. He also directed the series (Banat Al-Am), which was streamed on the (Shahid) platform and achieved great success. In 2021, he was named one of the 40 most influential figures in Libya under the age of 40.",
         recentWorks: "RECENT WORKS",
         recentWorksDescription:
            "Discover new and innovative works. Embark on a unique cinematic journey that transports you to mesmerizing worlds and tells powerful stories. Explore a diverse collection of projects that blend artistry with storytelling. Prepare to be moved and inspired.",
         directorsWorks: "DIRECTOR'S WORKS",
         showMore: "SHOW MORE",
         showLess: "SHOW LESS",
         blog: "BLOG", // Removed duplicate key
         blogIntro:
            "Explore the world of cinema with our exceptional blog. Stay updated with the latest articles and film news, valuable tips, and reviews of remarkable works. Learn from industry professionals' experiences and discover creative techniques. Join our community and share your thoughts. Follow us for the latest updates and engaging articles in the world of cinema.",
         seeMore: "See More",
         testimonials: "TESTIMONIALS",
         testimonialVideo: "Testimonial Video",
         motassim: "Motassim Alnahar",
         shoukran: "Shoukran Mortaja",
         pierre: "Pierre Dagher",
         sryinactor: "Syrian actor",
         sryinactress: "Syrian actress",
         lebaniseactor: "Lebanese actor",
         uploadScript: "Upload Script (PDF or Word)",
         scriptSubmission: "Script Submission",
         sendScript: "Send Script",
         scriptIntro:
            "If you have a script and would like to share it with us, please fill out the form below.",
         bioText: `Osama Rezg is a prominent Libyan director who earned degrees in directing and film production from the UK. He founded the media production companies Al-Sura for Media Production and ART Production. Rizk directed notable dramas such as (Phobia), (Zanqat Al-Reeh), and (Al-Za'imaan). His first feature film was (Al-Barouni) in 2021. He also directed the series (Banat Al-Am), which was streamed on the (Shahid) platform and achieved great success. In 2021, he was named one of the 40 most influential figures in Libya under the age of 40.`,
         keepInTouch: "KEEP IN TOUCH",
         email: "email@example.com",
         haveQuestions: "HAVE ANY QUESTIONS?",
         namePlaceholder: "Name",
         emailPlaceholder: "Email",
         descriptionPlaceholder: "Description",
         submitButton: "Submit",
         showreelTitle: "Welcome to the Director's Showreel",
         showreelDescription: "Experience the finest works and creativity of the director.",
         directorsWord: "DIRECTOR'S WORKS",
         exclusive: "Exclusive",
         errorUploadPhotos: "Please upload at least one photo.",
         errorUploadVideo: "Please upload a video.",
         errorUploadVideoSize: "Video file size should not exceed 100 MB.",
         successCasting: "Thanks for submitting for the casting. We will contact you soon.",
         errorCasting: "Failed to submit casting data.",
         errorCastingTryAgain: "Error submitting casting data. Please try again later.",
         signout: "Sign out",
         login: "Login",
         sex: "Gender",
         selectSex: "Select Sex",
         DirectorBlog: "Director's Blog",
         Latest: "Latest insights and articles from the director.",
         readmore: "Read More",
         shareYourScript: "Share Your Script",
         inviteMessage:
            "We invite you to share your script with us. Click the button below to submit your script.",
         submitScript: "Submit Script",
         contactDirector:
            "If you would like to contact the director, you can do that through these social media platforms:",
         contactTitle: "Contact the Director",
         developedBy: "This site is developed by Modern Code Company",
         workLink: "Previous works",
         submissionSuccess: "Submission Successful",
         thankYou: "Thank you for your submission. We will review it and contact you soon.",
         submitting: "Submitting...",
         workLinks: "Links of your previous works. ",
         addAnotherLink: "Add Another Link",
         remove: "Remove",
         successMessage: "Thanks for submitting your script. We will contact you soon.",
         journey: "A Journey in Film and Drama",
         bioText1:
            "Osama Rezg is a Director known for his outstanding contributions to the Libyan dramatic scene. In 2009, he received a prestigious scholarship from the British cultural center (Leader Culture Ship International ) and received several diplomas in film directing and production from London and Scotland.",
         bioText2:
            "He went to work in Dubai for two years, where he directed several commercials and documentary films. In mid-2007, he returned to Libya and was one of the founders of the Allibiya channel since its launch, directing several successful programs that have won local awards.",
         bioText3:
            "In 2008, he directed the important documentary film Al-Nihum.. Sayed Alkalimat (Master of Words) about the Libyan philosopher Al-Sadiq Al-Nihum.",
         bioText4:
            "His first work of drama was the comedy series Ala Alhawaa (On Air) written by author Saleh Abu Al-Sunun and produced by Allibiya Channel in 2008. It is a satirical comedy work with 15 episodes.",
         bioText5:
            "In 2009, he participated in the direction of the drama series Kul Yum Ehkaya (Every Day is a Story). For the first time in Libya, three directors directed the same work and shared the approach of the episodes, which were separate stories.",
         bioText6:
            "In 2003, he established his company Alsora for Media Production. Through it, he produced the series Ala Alhawa (On Air), Kul Yum Ehkaya (Every Day is a Story), and several documentary works and commercials.",
         bioText7:
            "In 2013, he participated in the establishment of ART Production with the producer Walid Ellafi. The company is considered the most important and productive in Libya for drama and cinema and is one of the companies of the AMG Media Group.",
         bioText8:
            "In 2013, he directed the series Phobia for the writer Siraj Hweidi and producer Walid Ellafi. The series won Arab awards, the special jury's shield at the Cairo Radio and Television Festival. The series caused a big stir when it was shown because of its criticism of politicians in Libya after the revolution. The series won the Best Series, Best Text, Best Direction, and Best Actor from the Septimus Award held annually in Libya.",
         bioText9:
            "In 2014, he directed the drama (Dragunov) written by Siraj Hweidi and produced by Walid Ellafi . It discusses Libyan society and conditions before and during the revolution. The distinguished newspaper (www.liberation.fr) took an interest in the series and published a lengthy article about it. The series won the Best Series, Best Actor, and Best Direction from the Septimus award, held annually in Libya.",
         bioText10:
            "In 2017, he directed the short film Al Ashwai (The Random) written by Siraj Hweidi and produced by Walid Ellafi , which participated in over 20 film festivals. It won the Bronze award from the Gabes Festival for Arab Film, the Best African Film award from the Art Festival in Cameroon, and a special mention from the jury at the Oujda Festival in Morocco.",
         bioText11:
            "In 2017, he directed the series Rubik written by Siraj Hweidi and produced by Walid Ellafi The 15-episode series won the Best Series, Best Actress, and Best Direction from the Septimus Award annually in Libya.",
         bioText12:
            "In 2019, he directed the historical series ( Zankat Arreeh ) written by Abdulrahman Haqiq and produced by Walid Ellafi . The series speaks about the city of Tripoli in 1945, during the British administration of Libya after Italy's defeat in World War II, and how all races and religions lived together in perfect harmony in one city before the English occupation created discord and problems among the people of the same country. The series won Best Direction, Best Series, Best Actor, Best Actress, and Best New Face from the annual Septimus Award in Libya.",
         bioText13:
            "In 2020, he directed the historical series (Al-Za'imain) produced by Walid Ellafi . It is the most significant production in the history of Libyan drama and discusses the history of Libyan struggle against Italian colonialism. The series won the Best Direction, Best Series, Best Actor, Best Actress, and Best New Face awards from the annual Septimus Award in Libya.",
         bioText14:
            "In 2021, he directed the film (Al-Baroni), produced by Walid Ellafi. This was Osama Rezg's first full-length feature film, depicting the life story of Libyan fighter Suleiman Al-Baroni.",
         bioText15:
            "In 2021, he directed the epic series (Ghasaq) written by Siraj Hweidi and produced by Walid Ellafi. The series portrays the battle of Bnniyan Almarsous, in which Libyans fought against the terrorist organization ISIS in Sirte, liberating it from terrorism.",
         bioText16:
            "Also, in 2021, he served as the executive producer for the series Zanghet Alreeh – Part Two, written by Abdulrahman Haqiq, directed by Abdul Salam Rezg, and produced by Walid Ellafi.",
         bioText17:
            "In 2022, he directed the historical series Alssaraya, which covers an essential period in Libyan history, namely, the reign of the Karamanli family from 1780 to 1795. This era was characterized by bloody conflicts, epidemics, famines, and internal battles among the sons of Pasha Ali Pasha Al-Karamanli.",
         bioText18: "In 2023, he directed the second part of the series Alssaraya.",
         bioText19:
            "In 2024, he directed the series (Banat Al Amm), which is the first Libyan series to be shown on the famous platform (Shahid) and achieved the second ranking in the highest viewers in the Shahid platform in Libya.",
         bioText20:
            "In 2021, Osama Rezg was selected as one of the 40 most influential figures in Libya under 40.",
         bioText21:
            "As Art Production Company reached its tenth anniversary since its establishment, the company has become number one in Libya and the Maghreb, thanks to Osama Rezg's management and continuous work in development, diversification, and perseverance every year to produce Libyan-Maghrebi works. These productions are now watched regionally and across the Arab world for their professional content and high execution standards. Arab celebrities who participated in the series produced by the company have recognized its professionalism and the international standards it operates with under Osama Rezg's leadership. He has combined artistic vision as a director with wise management, strict leadership, and intelligent production to achieve the highest technical and creative levels with budgets more minor than those of Arab shows in the Gulf countries, Egypt, and the Middle East.",
         or: "Or you can contact us using the form",
         rabie: "Rabie Kati",
         morocoactor: "Moroccan actor",
         mohamed: "Mohamed Othman",
         libyenactor: "Libyen actor",
      },
   },
   ar: {
      translation: {
         // Arabic translations
         biography: "السيرة الذاتية",
         awards: "الجوائز :",
         episodes: "عدد الحلقات",
         duration: "زمن الحلقة",
         productionCompany: "شركة الإنتاج",
         productionYear: "سنة الإنتاج",
         producer: "المنتج",
         writer: "الكاتب",
         director: "المخرج",
         cast: "طاقم التمثيل",
         watchFullShow: "مشاهدة العرض الكامل",
         behindTheScenes: "صور ",
         close: "إغلاق",
         home: "الرئيسية",
         about: "عن المخرج",
         credits: "الأعمال",
         blog: "مدونة", // Removed duplicate key
         contact: "تواصل",
         trailer: "فيديو الاعلان ",
         fullName: "الاسم الثلاثي",
         age: "العمر",
         gender: "الجنس",
         phoneNumber: "رقم هاتف",
         uploadPhotos: "رفع الصور",
         uploadVideo: "رفع الفيديو",
         submit: "إرسال",
         castingPageHeader: "نداء تجارب الأداء",
         castingPageText: "مشاركة محتملة في أعمالنا المستقبلية",
         casting: "تجارب الأداء",
         male: "ذكر",
         female: "انثى",
         castingtextupform:
            "شاركنا أعمالك السابقة أو أداءك  التجريبي الجديد، عبر إرسالها هنا مصحوبة ببيانات التواصل معك.",
         exploringTalents: "استكشاف المواهب:",
         shareExperience: "شارك تجربتك الفنية معنا!",
         registerNow: "سجل الآن",
         welcomeToMyUniverse: "مرحبًا بكم في عالم المخرج أسامة رزق",
         heroText: "من خلال العدسة، يتم التقاط روح الإنسان، ورواية قصص تستحق التأمل .",
         aboutOsama: "عن أسامة رزق",
         aboutDescription1:
            "أسامة رزق هو مخرج ليبي بارز حصل على شهادات في الإخراج والإنتاج السينمائي من بريطانيا، وأسس شركتي الصورة للإنتاج الإعلامي و ART Production. أخرج أعمالًا درامية مميزة منها (فوبيا) و(زنقة الريح) و(الزعيمان)، وأول فيلم طويل له كان (الباروني) في 2021. كما أخرج مسلسل (بنات العم) الذي عُرض على منصة (شاهد) وحقق نجاحًا كبيرًا. في 2021، تم اختياره كواحد من أكثر 40 شخصية مؤثرة في ليبيا تحت سن 40.",
         recentWorks: "الأعمال الأخيرة",
         recentWorksDescription:
            "اكتشف أعمالًا جديدة ومبتكرة، انطلق في رحلة سينمائية فريدة تنقلك إلى عوالم ساحرة وتحكي قصصًا مؤثرة، استكشف مجموعة متنوعة من المشاريع التي تمزج بين الفن والسرد القصصي، استعد لتكون متأثراً ومستلهماً.",
         directorsWorks: "أعمال المخرج",
         showMore: "عرض المزيد",
         showLess: "عرض أقل",
         blogIntro:
            "استكشف عالم السينما مع مدونتنا المتميزة، وابقَ على اطلاع بأحدث المقالات وأخبار الأفلام، والنصائح القيمة، ومراجعات الأعمال الرائعة. تعلم من تجارب المحترفين في الصناعة، واكتشف التقنيات الإبداعية. انضم إلى مجتمعنا وشارك بأفكارك، وتابعنا للحصول على آخر التحديثات والمقالات المثيرة في عالم السينما.",
         seeMore: "شاهد المزيد",
         testimonials: "الشهادات",
         testimonialVideo: "فيديو الشهادة",
         motassim: "معصم النهار",
         shoukran: "شكران مرتجى",
         pierre: "بيار داغر",
         sryinactor: "ممثل سوري",
         sryinactress: "ممثلة سورية",
         lebaniseactor: "ممثل لبناني",
         uploadScript: "تحميل السيناريو (PDF أو Word)",
         scriptSubmission: "إرسال سيناريو",
         sendScript: "إرسال سيناريو",
         scriptIntro: "إذا كان لديك سيناريو وترغب في مشاركته معنا ، يرجى ملء النموذج أدناه.",
         filmography: "قائمة الاعمال",
         journey: "رحلة عبر الفن",
         bioText:
            "أسامة رزق هو مخرج معروف بمساهماته المميزة في المشهد الدرامي الليبي. في عام 2009 ، حصل على منحة مرموقة من المركز الثقافي البريطاني (Leader Culture Ship International ) وحصل على العديد من شهادات في الإخراج والإنتاج السينمائي من لندن واسكتلندا. ذهب للعمل في دبي لمدة سنتين و قام بإخراج عدة إعلانات تجارية و افلام وثائيقية عاد منتصف سنة 2007 إلى ليبيا و كان احد مؤسسي قناة ( الليبية الفضائية ) منذ انطلاقها و أخرج عدة برامج ناجحة متحصلة على جوائزة محلية. اخرج الفيلم الوثائقي المهم ( النيهوم ....سيد الكلمات ) الذي يتحدث عن الفيلسوف الليبي ( الصادق النيهوم ) 2008. كان أول عمل درامي له المسلسل الكوميدي ( على الهواء ) من تأليف الكاتب صالح ابو السنون و انتاج قناة الليبية سنة 2008 و هو عمل كوميدي ساخر في 15 حلقة. سنة 2009 قام بالمشاركة في إخراج المسلسل الدرامي ( كل يوم حكاية ) و هو تجربة لأول مرة في ليبيا ان يقوم ثلاثة مخرجين بإخراج نفس العمل و يتقاسمون إخراج الحلقات التي كانت عبارة عن قصص منفصلة. اسس شركته الخاصة ( الصورة للأنتاج الاعلامي ) سنة 2003 قام من خلالها بإنتاج مسلسل ( على الهواء ) و مسلسل ( كل يوم حكاية ) و عدة اعمال تسجيلية و اعلانات تجارية. في سنة 2013 شارك في تأسيس شركة ART Production مع المنتج وليد اللافي التي تعتبر الشركة الاهم و الاكثر انتاجاً في ليبيا للدراما و السينما وهي احدى شركات مجموعة AMG الاعلامية. في سنة 2013 اخرج مسلسل ( فوبيا ) للكاتب ( سراج هويدي ) المنتج وليد اللافي تحصل على جوائز عربية درع لجنة التحكيم الخاصة في مونديال القاهرة للإذاعة و التلفزيون. المسلسل اثار ضجة كبيرة عند عرضه بسبب انتقاده للسياسيين في ليبيا بعد الثورة. المسلسل تحصل على جائزة افضل مسلسل و افضل نص و افضل اخراج و افضل ممثل من جائزة سيبتموس التي تقام سنويا في ليبيا. سنة 2014 اخرج المسلسل الدرامي ( دراجنوف ) للكاتب سراج هويدي المنتج وليد اللافي و الذي يتحدث عن المجتمع الليبي و كيف تغيرت الأوضاع الأسرية و الحياتية في ليبيا قبل الثورة و اثنائها و اهتمت صحيفة ( www.liberation.fr) العريقة بالمسلسل و افردت مقالة مطولة على المسلسل بالاضافة الى الموقع الشهير ( Hollywood deadline.com) تحصل المسلسل على جائزة افضل مسلسل و افضل ممثل و افضل اخراج من جائزة سيبتموس التي تقام سنويا في ليبيا. سنة 2017 اخرج الفيلم القصير ( العشوائي ) تأليف الكاتب سراج هويدي المنتج وليد اللافي الذي شارك في اكثر من 20 مهرجان سينمائي فاز بالجائزة البرونزية من مهرجان قابس للفيلم العربي و جائزة افضل فيلم افريقي من مهرجان ارت بالكاميرون و تنويه خاص من لجنة التحكيم في مهرجان وجدة بالمغرب. سنة 2017 قام بإخراج مسلسل ( روبيك ) تأليف الكاتب سراج هويدي المنتج وليد اللافي من 15 حلقة تحصل على جائزة افضل مسلسل افضل ممثلة افضل اخراج من جائزة سيبتموس التي تقام سنويا في ليبيا. سنة 2019 قام بإخراج المسلسل التاريخي ( زنقة الريح ) تأليف الكاتب عبد الرحمن حقيق المنتج وليد اللافي يتحدث عن مدينة طرابلس سنة 1945 فترة الادارة البريطانية لليبيا بعد هزيمة ايطاليا في الحرب العالمية الثانية وكيف كانت جميع الاعراق والديانات تعيش معا في مدينة واحدة بإنسجام كامل قبل ان يقوم الاحتلال الانجليزي بصنع الفتن و المشاكل بين ابناء الوطن الواحد. تحصل على جائزة افضل إخراج افضل مسلسل افضل ممثل افضل ممثلة افضل وجه جديد من جائزة سيبتموس التي تقام سنويا في ليبيا. سنة 2020 قام بإخراج المسلسل التاريخي مسلسل ( الزعيمان ) 2020 المنتج وليد اللافي و هو اضخم انتاج في تاريخ الدراما الليبية يتحدث عن تاريخ الجهاد الليبي ضد الاستعمار الايطالي تحصل على جائزة افضل اخراج افضل مسلسل افضل ممثل افضل ممثلة افضل وجه جديد. فيلم ( الباروني ) 2021 انتاج وليد اللافي اول فيلم سينمائي طويل للمخرج اسامة رزق يتناول سيرة حياة المناضل الليبي سليمان الباروني و قصة حياته. سنة 2021 اخرج المسلسل الملحمي ( غسق ) تأليف سراج هويدي انتاج وليد اللافي يتحدث المسلسل عن ملحمة البنيان المرصوص التي قاتل فيها الليبيين تنظيم داعش الارهابي في مدينة سرت و تحريرها من الارهاب. سنة 2021 قام بمهمة المنتج المنفذ لمسلسل ( زنقة الريح – الجزء التاني ) تأليف عبد الرحمن حقيق اخراج عبد السلام رزق المنتج وليد اللافي. سنة 2022 اخرج المسلسل التاريخ ( السرايا ) الذي يتناول حقبة مهمة من تاريخ ليبيا و هي فترة حكم عائلة القرمانللي في الفترة من 1780 حتى 1795 و ما يتحتويه تلك الحقبة من صراعات دموية و اوبئة و مجاعة اقتتال داخلي بين ابناء الباشا علي باشا القرمانللي. سنة 2023 اخرج الجزء الثاني من مسلسل ( السرايا ). سنة 2024 اخرج مسلسل ( بنات العم ) و هو اول مسلسل ليبي يعرض على المنصة الشهيرة ( شاهد ) و حقق الترتيب التاني في الاعلى مشاهدة في منصة شاهد في ليبيا. في سنة 2021 تم اختيار اسامة رزق من ضمن 40 اهم شخصية مؤثرة في ليبيا تحت عمر 40 سنة. مع وصول شركة Art Production الى عشرة سنوات من تاسيسها اصبحت الشركة رقم واحد في ليبيا و المغرب الكبير بفضل ادارة اسامة رزق و عمله المستمر في التطوير و التنويع و المثابرة في كل سنة لصناعة اعمال ليبية مغاربية اصبحت تشاهد عربيا و اقليميا لمستواها المحترف في المحتوى و التنفيذ بمهنية عالية شهد بها النجوم العرب الذين شاركوا في المسلسلات التي انتجتهم الشركة و الذين صرحوا بإحترافية الشركة و المستوى العالمي الذي تعمل به بقيادة اسامة رزق الذي استطاع الجمع ما بين الرؤية الفنية كمخرج و الادارة الحكيمة و القيادة الصارمة و الذكاء في الانتاج للحصول على اعلى مستوى تقني و فني بميزانيات اقل من ميزانيات الانتاجات العربية في دول الخليج و مصر و الشرق الاوسط.",
         keepInTouch: "ابقى على تواصل",
         bioText2: "و انتقل الى الحياة الاخرى",
         email: "البريد الالكتروني",
         haveQuestions: "هل لديك أي أسئلة؟",
         namePlaceholder: "الاسم",
         emailPlaceholder: "البريد الإلكتروني",
         descriptionPlaceholder: "الوصف",
         submitButton: "إرسال",
         showreelTitle: "مرحبًا بكم في عرض أعمال المخرج",
         showreelDescription: "اكتشف أفضل أعمال وإبداعات مخرجنا.",
         directorsWord: "اعمال المخرج",
         exclusive: "حصري",
         errorUploadPhotos: "يرجى تحميل على الاقل صور واحدة",
         errorUploadVideoSize: "يجب ألا يتجاوز حجم ملف الفيديو 100 ميجابايت.",
         successCasting: "شكرًا لتقديم طلب التمثيل. سنتواصل معك قريبًا.",
         errorCasting: "فشل في تقديم بيانات التمثيل.",
         errorCastingTryAgain: "حدث خطأ أثناء تقديم بيانات التمثيل. يرجى المحاولة مرة أخرى لاحقًا.",
         login: "تسجيل الدخول",
         signout: "تسجيل الخروج",
         nationality: "الجنسية اختار البلد",
         country: "البلد",
         sex: "الجنس",
         selectSex: "اختر الجنس",
         DirectorBlog: "مدونة المخرج",
         Latest: "مقالات من المخرج",
         readmore: "اقرا المزيد",
         shareYourScript: "شارك سيناريو",
         inviteMessage:
            "ندعوك لمشاركة السيناريو معنا. اضغط على الزر أدناه لتقديم السيناريو الخاص بك.",
         submitScript: "تقديم السيناريو",
         contactDirector:
            "إذا كنت ترغب في الاتصال بنا ، يمكنك القيام بذلك من خلال هذه المنصات الاجتماعية:",

         contactTitle: "الاتصال بنا",
         developedBy: " تطوير  شركة البرمجة الحديثة",
         workLinks: "روابط لأعمالك السابقة",
         workLink: "روابط لأعمالك السابقة",
         remove: "إزالة",
         addAnotherLink: "إضافة رابط اخر",
         errorUploadVideo: "يرجى تحميل فيديو",
         submissionSuccess: "تم الإرسال بنجاح",
         thankYou: "شكرًا لتقديمك. سنقوم بمراجعته وسنتواصل معك قريبًا.",
         submitting: "جاري الإرسال...",
         successMessage: "شكرًا لتقديم السيناريو الخاص بك. سنتواصل معك قريبًا.",
         bioText1:
            "أسامة رزق هو مخرج معروف بمساهماته المميزة في المشهد الدرامي الليبي. في عام 2009 ، حصل على منحة مرموقة من المركز الثقافي البريطاني (Leader Culture Ship International ) وحصل على العديد من شهادات في الإخراج والإنتاج السينمائي من لندن واسكتلندا.",
         bioText2:
            "ذهب للعمل في دبي لمدة سنتين و قام بإخراج عدة إعلانات تجارية و افلام وثائيقية عاد منتصف سنة 2007 إلى ليبيا و كان احد مؤسسي قناة ( الليبية الفضائية ) منذ انطلاقها و أخرج عدة برامج ناجحة متحصلة على جوائزة محلية.",
         bioText3:
            "اخرج الفيلم الوثائقي المهم ( النيهوم ....سيد الكلمات ) الذي يتحدث عن الفيلسوف الليبي ( الصادق النيهوم ) 2008.",
         bioText4:
            "كان أول عمل درامي له المسلسل الكوميدي ( على الهواء ) من تأليف الكاتب صالح ابو السنون و انتاج قناة الليبية سنة 2008 و هو عمل كوميدي ساخر في 15 حلقة.",
         bioText5:
            "سنة 2009 قام بالمشاركة في إخراج المسلسل الدرامي ( كل يوم حكاية ) و هو تجربة لأول مرة في ليبيا ان يقوم ثلاثة مخرجين بإخراج نفس العمل و يتقاسمون إخراج الحلقات التي كانت عبارة عن قصص منفصلة.",
         bioText6:
            "اسس شركته الخاصة ( الصورة للأنتاج الاعلامي ) سنة 2003 قام من خلالها بإنتاج مسلسل ( على الهواء ) و مسلسل ( كل يوم حكاية ) و عدة اعمال تسجيلية و اعلانات تجارية.",
         bioText7:
            "في سنة 2013 شارك في تأسيس شركة ART Production مع المنتج وليد اللافي التي تعتبر الشركة الاهم و الاكثر انتاجاً في ليبيا للدراما و السينما وهي احدى شركات مجموعة AMG الإعلامية.",
         bioText8:
            "في سنة 2013 اخرج مسلسل ( فوبيا ) للكاتب ( سراج هويدي ) المنتج وليد اللافي تحصل على جوائز عربية درع لجنة التحكيم الخاصة في مونديال القاهرة للإذاعة و التلفزيون ,المسلسل اثار ضجة كبيرة عند عرضه بسبب انتقاده للسياسيين في ليبيا بعد الثورة المسلسل تحصل على جائزة افضل مسلسل و افضل نص و افضل اخراج و افضل ممثل من جائزة سيبتموس التي تقام سنويا في ليبيا.",
         bioText9:
            "سنة 2014 اخرج المسلسل الدرامي ( دراجنوف ) للكاتب سراج هويدي  المنتج وليد اللافي و الذي يتحدث عن المجتمع الليبي و كيف تغيرت الأوضاع الأسرية و الحياتية في ليبيا قبل الثورة و اثنائها و اهتمت صحيفة ( www.liberation.fr) العريقة بالمسلسل و افردت مقالة مطولة على المسلسل بالاضافة الى الموقع الشهير ( Hollywood deadline.com)  تحصل المسلسل على جائزة افضل مسلسل و افضل ممثل و افضل اخراج من جائزة سيبتموس التي تقام سنويا في ليبيا.",
         bioText10:
            "سنة 2017 اخرج الفيلم القصير ( العشوائي ) تأليف الكاتب سراج هويدي المنتج وليد اللافي الذي شارك في اكثر من 20 مهرجان سينمائي فاز بالجائزة البرونزية من مهرجان قابس للفيلم العربي و جائزة افضل فيلم افريقي من مهرجان ارت بالكاميرون و تنويه خاص من لجنة التحكيم في مهرجان وجدة بالمغرب.",
         bioText11:
            "سنة 2017 قام  بإخراج مسلسل ( روبيك ) تأليف الكاتب سراج هويدي المنتج وليد اللافي من 15 حلقة تحصل على جائزة افضل مسلسل افضل ممثلة افضل اخراج من جائزة سيبتموس التي تقام سنويا في ليبيا.",
         bioText12:
            "سنة 2019 قام بإخراج المسلسل التاريخي  ( زنقة الريح ) تأليف الكاتب عبد الرحمن حقيق المنتج وليد اللافي يتحدث عن مدينة طرابلس سنة 1945 فترة الادارة البريطانية لليبيا بعد هزيمة ايطاليا في الحرب العالمية الثانية وكيف كانت جميع الاعراق والديانات تعيش معا في مدينة واحدة بإنسجام كامل قبل ان يقوم الاحتلال الانجليزي بصنع الفتن و المشاكل بين ابناء الوطن الواحد ...تحصل على جائزة افضل إخراج افضل مسلسل افضل ممثل افضل ممثلة افضل وجه جديد من جائزة سيبتموس التي تقام سنويا في ليبيا.",
         bioText13:
            "سنة 2020 قام بإخراج المسلسل التاريخي مسلسل ( الزعيمان ) 2020 المنتج وليد اللافي و هو اضخم انتاج في تاريخ الدراما الليبية يتحدث عن تاريخ الجهاد الليبي ضد الاستعمار الايطالي تحصل على جائزة افضل اخراج افضل مسلسل افضل ممثل افضل ممثلة افضل وجه جديد.",
         bioText14:
            "فيلم ( الباروني ) 2021 انتاج وليد اللافي اول فيلم سينمائي طويل للمخرج اسامة رزق يتناول سيرة حياة المناضل الليبي سليمان الباروني و قصة حياته.",
         bioText15:
            "سنة 2021 اخرج المسلسل الملحمي ( غسق ) تأليف سراج هويدي انتاج وليد اللافي يتحدث المسلسل عن ملحمة البنيان المرصوص التي قاتل فيها الليبيين تنظيم داعش الارهابي في مدينة سرت و تحريرها من الارهاب.",
         bioText16:
            "سنة 2021 قام بمهمة المنتج المنفذ لمسلسل ( زنقة الريح – الجزء التاني ) تأليف عبد الرحمن حقيق اخراج عبد السلام رزق المنتج وليد اللافي.",
         bioText17:
            "سنة 2022 اخرج المسلسل التاريخ ( السرايا ) الذي يتناول حقبة مهمة من نتاريخ ليبيا و هي فترة حكم عائلة القرمانللي في الفترة من 1780 حتى 1795 و ما يتحتويه تلك الحقبة من صراعات دموية و اوبئة و مجاعة اقتتال داخلي بين ابناء الباشا علي باشا القرمانللي.",
         bioText18: "سنة 2023 اخرج الجزء الثاني من مسلسل ( السرايا ).",
         bioText19:
            "سنة 2024 اخرج مسلسل ( بنات العم ) و هو اول مسلسل ليبي يعرض على المنصة الشهيرة ( شاهد ) و حقق الترتيب التاني في الاعلى مشاهد في منصة شاهد في ليبيا.",
         bioText20:
            "في سنة 2021 تم اختيار اسامة رزق من ضمن 40 اهم شخصية مؤثرة في ليبيا تحت عمر 40 سنة.",
         bioText21:
            "مع وصول شركة Art Productıon  الى عشرة سنوات من تاسيسها اصبحت الشركة رقم واحد في ليبيا و المغرب الكبير  بفضل ادارة اسامة رزق و عمله المستمر في التطوير و التنويع  و المثابرة في كل سنة لصناعة اعمال ليبية مغاربية اصبحت تشاهد عربيا و اقليميا لمستواها المحترف في المحتوى و التنفيذ بمهنية عالية شهد بها النجوم العرب الذين شاركو في المسلسلات التي انتجتهم الشركة و الذين صرحو بإحترافية الشركة و المستوى العالمي الذي تعمل  به بقيادة اسامة رزق الذي استطاع الجمع ما بين الرؤية الفنية كمخرج و الادارة الحكيمة و القيادة الصارمة و الذكاء في الانتاج للحصول على اعلى مستوى تقني و فني بميزانيات اقل من ميزانيات الانتاجات العربية في دول الخليج و مصر و الشرق الاوسط.",
         or: "او يمكنكم التواصل عبر النموذج",
         rabie: "ربيع القاطي",
         morocoactor: "ممثل مغربي",
         mohamed: "محمد عثمان",
         libyenactor: "ممثل ليبي",
      },
   },
};

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
   resources,
   lng: savedLanguage, // Use saved language from localStorage
   keySeparator: false,
   interpolation: {
      escapeValue: false,
   },
});

export default i18n;
