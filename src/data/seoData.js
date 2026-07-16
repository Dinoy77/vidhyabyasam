export const seoConfigurations = {
  home: {
    title: "Vidyabhyasam | Top Educational Portal for Medical & Engineering Admissions",
    description: "Discover top medical and engineering colleges in India. Get expert guidance on NEET UG, FMGE, INI CET, MBBS, BAMS, B.Sc Nursing, and admissions with Vidyabhyasam.",
    keywords: "Vidyabhyasam, medical colleges India, engineering colleges, NEET UG guidance, MBBS admission, educational portal India, how to get mbbs admission in india, best college search portal, help me find a good engineering college, neet ug counselling guidance, find colleges for low neet score, medical admission consultants online, admissions 2026, entrance exam latest news, counselling schedule 2026, seat allotment result, application form details, exam notification, higher education india, admission portal, Vidyabhyasam news, kcet result, neet ranking, neet result, vidyabhyasam, neet 2026, reneet, kcet, comedk result, comedk, lbs, lbskerala2026, lbs kerala result, lbs result, lbs 2026, education portal, results, engineering colleges Kerala, best B.Tech colleges Karnataka, top medical colleges South India, nursing colleges Tamil Nadu, KEAM 2026, NEET 2026, KCET 2026, college admission guidance, Vidyabhyasam",
    url: "/",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Vidyabhyasam",
      "url": "https://vidyabhyasam.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://vidyabhyasam.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },

  // Use this dynamically for individual college pages
  dynamicCollege: (collegeName, collegeId) => ({
    title: `${collegeName} - Admission, Fees, Courses & Rankings`,
    description: `Get complete details about ${collegeName} including courses offered, fee structure, placement records, and admission process.`,
    keywords: `${collegeName}, ${collegeName} admission, ${collegeName} fees, medical college details, engineering college details, is ${collegeName} good for mbbs, ${collegeName} hostel facilities, how much are the fees for ${collegeName}, ${collegeName} real reviews, direct admission in ${collegeName}, ${collegeName} campus life`,
    url: `/college/${collegeId}`,
    schemaData: {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": collegeName,
      "url": `https://vidyabhyasam.com/college/${collegeId}`
    }
  }),

  // Dynamic news configuration generator based on your slug implementation
  dynamicNews: (newsItem, slug) => ({
    title: `${newsItem.title} | Vidyabhyasam Education News`,
    description: newsItem.description,
    keywords: `${newsItem.title.toLowerCase()}, ${newsItem.state} education news, ${newsItem.state} admission updates, ${newsItem.courses.join(", ")}, admissions 2026, entrance exam latest news, counselling schedule 2026, seat allotment result, application form details, exam notification, higher education india, admission portal, Vidyabhyasam news, kcet result, neet ranking, neet result, vidyabhyasam, neet 2026, reneet, kcet, comedk result, comedk, lbs, lbskerala2026, lbs kerala result, lbs result, lbs 2026, education portal, results`,
    url: `/news/${slug}`,
    schemaData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": newsItem.title,
      "description": newsItem.description,
      "datePublished": newsItem.publishedAt,
      "publisher": {
        "@type": "Organization",
        "name": "Vidyabhyasam",
        "url": "https://vidyabhyasam.com/"
      }
    }
  }),

  // --- NEW: KEAM College Predictor page ---
  keamPredictor: {
    title: "KEAM College Predictor 2026 | Check Your Rank-wise Engineering & Pharmacy College",
    description: "Free KEAM College Predictor for Kerala. Enter your KEAM rank and category to instantly check which engineering and B.Pharm colleges you can get, based on official CEE Kerala cutoff data.",
    keywords: "KEAM college predictor, KEAM rank predictor, KEAM 2026 predictor, which college will I get with my KEAM rank, KEAM cutoff 2026, KEAM engineering college predictor, KEAM b pharm predictor, KEAM rank wise colleges, CEE Kerala cutoff, KEAM category wise cutoff, KEAM SM cutoff, KEAM EWS cutoff, KEAM SC ST cutoff, best engineering college for my KEAM rank, KEAM CSE cutoff rank, KEAM ECE cutoff rank, KEAM mechanical cutoff, KEAM civil engineering cutoff, KEAM IT cutoff, government engineering colleges Kerala KEAM rank, private engineering colleges Kerala KEAM, KEAM last rank 2025, KEAM allotment prediction, KEAM counselling college list, KEAM rank vs college chart, will I get CET Trivandrum with my rank, will I get TKM Kollam, will I get Model Engineering College, KEAM Rajagiri cutoff, KEAM Saintgits cutoff, KEAM pharmacy colleges list, B.Pharm KEAM cutoff Kerala, KEAM predictor free, KEAM 2026 college finder",
    url: "/keam-predictor",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "KEAM College Predictor",
      "url": "https://vidyabhyasam.com/keam-predictor",
      "applicationCategory": "EducationApplication",
      "description": "Enter your KEAM rank and category to see which Kerala engineering and B.Pharm colleges you have a realistic chance of getting, based on official CEE Kerala allotment cutoff data.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vidyabhyasam",
        "url": "https://vidyabhyasam.com/"
      }
    }
  },

  topIndianMedicalColleges: {
    title: "Top Medical Colleges in India | Rankings, Fees & Admissions",
    description: "Explore the comprehensive list of the top medical colleges in India. Compare rankings, fee structures, facilities, and admission criteria for MBBS.",
    keywords: "top medical colleges in india, best MBBS colleges india, top medical institutions, NEET cutoffs india, which is the best medical college in india, low fee private medical colleges in india, top 10 mbbs colleges, where to study mbbs in india, government medical college cutoffs, mbbs colleges with best hospitals",
    url: "/articles/TopIndianMedicalColleges",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top Medical Colleges in India",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  },

  topKeralaMedicalColleges: {
    title: "Top Medical Colleges in Kerala | NEET Cutoffs & Rankings",
    description: "A complete guide to the best medical colleges in Kerala. Check out state rankings, fee structures, and NEET UG admission processes.",
    keywords: "top medical colleges kerala, best MBBS colleges in kerala, KEAM medical, Kerala NEET cutoff, best mbbs colleges in kerala with low fees, kerala medical college ranking, how to get mbbs seat in kerala, kerala private medical colleges list, keam mbbs cut off marks, nri quota in kerala medical colleges",
    url: "/articles/TopKeralaMedicalColleges",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top Medical Colleges in Kerala",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  },

  neetUgGuide: {
    title: "Ultimate NEET UG Guide | Exam Pattern, Syllabus & Tips",
    description: "Crack NEET UG with our comprehensive guide. Get details on the latest syllabus, exam pattern, eligibility, and expert preparation strategies.",
    keywords: "NEET UG guide, NEET preparation, NEET syllabus, how to crack NEET, medical entrance exam india, how to prepare for neet at home, best books for neet ug, can I crack neet in 6 months, neet exam pattern explained, tips to score 650+ in neet, easiest chapters for neet biology",
    url: "/articles/NeetUgGuide",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ultimate NEET UG Guide"
    }
  },

  topKarnatakaMedicalColleges: {
    title: "Top Medical Colleges in Karnataka | Fees & Admissions",
    description: "Discover the top-ranked medical colleges in Karnataka. Find detailed information on MBBS fees, infrastructure, and KEA counseling.",
    keywords: "top medical colleges karnataka, best MBBS colleges karnataka, Karnataka NEET counseling, KEA medical, bangalore best medical colleges, karnataka private mbbs fees, direct admission in karnataka medical colleges, kea counselling process for mbbs, top ranked medical colleges in bangalore, management quota fees in karnataka",
    url: "/articles/TopKarnatakaMedicalColleges",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top Medical Colleges in Karnataka"
    }
  },

  fmgeGuide: {
    title: "FMGE Preparation Guide | Exam Pattern & Best Strategies",
    description: "Your complete guide to clearing the Foreign Medical Graduates Examination (FMGE). Learn about the exam pattern, passing criteria, and study tips.",
    keywords: "FMGE guide, MCI screening test, FMGE preparation, foreign medical graduates india, how to pass fmge in first attempt, fmge passing marks, is fmge exam very tough, best coaching for mci screening test, fmge study plan, what happens if I fail fmge",
    url: "/articles/FmgeGuide",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "FMGE Preparation Guide"
    }
  },

  topTamilNaduMedicalColleges: {
    title: "Top Medical Colleges in Tamil Nadu | Rankings & Fees",
    description: "Explore the highest-rated medical institutions in Tamil Nadu. View government and private college rankings, fees, and admission details.",
    keywords: "top medical colleges tamil nadu, best MBBS tamil nadu, TN medical selection, tamil nadu NEET cutoff, best medical colleges in chennai, tamil nadu mbbs government quota fees, top 10 private medical colleges in tamil nadu, tn medical counselling dates, cmc vellore admission details, lowest fee medical colleges in tamil nadu",
    url: "/articles/TopTamilNaduMedicalColleges",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top Medical Colleges in Tamil Nadu"
    }
  },

  mbbsCourseGuide: {
    title: "MBBS Course Guide | Eligibility, Fees, Syllabus & Scope",
    description: "Everything you need to know about the MBBS course in India. Learn about the curriculum, duration, career prospects, and post-graduation options.",
    keywords: "MBBS course details, MBBS syllabus, MBBS duration, career after MBBS, how to become a doctor, is mbbs very difficult, what is the total cost of mbbs in india, life of an mbbs student, salary of mbbs doctor in india, subjects in 1st year mbbs, is doing mbbs from private college worth it",
    url: "/articles/MbbsCourseGuide",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "MBBS Course Guide"
    }
  },

  iniCetGuide: {
    title: "INI CET Complete Guide | Exam Pattern, Syllabus & Prep",
    description: "Master the INI CET for postgraduate medical admissions at AIIMS, JIPMER, PGIMER, and NIMHANS. Get exam dates, syllabus, and preparation tips.",
    keywords: "INI CET guide, AIIMS PG, JIPMER PG, INI CET preparation, medical PG entrance, how to crack ini cet, ini cet vs neet pg, aiims pg entrance exam details, ini cet previous year question papers, how many hours to study for ini cet, best mock tests for ini cet",
    url: "/articles/IniCetGuide",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "INI CET Complete Guide"
    }
  },

  bamsCourseGuide: {
    title: "BAMS Course Details | Ayurveda Admission, Fees & Career",
    description: "Comprehensive guide to Bachelor of Ayurvedic Medicine and Surgery (BAMS). Find out about eligibility, subjects, and scope of Ayurveda in India.",
    keywords: "BAMS course guide, ayurveda course, BAMS syllabus, career after BAMS, AYUSH counselling, is bams a good career option, bams vs mbbs which is better, ayurvedic doctor salary in india, how to get bams admission without neet, total fees for bams course, can bams doctors do surgery",
    url: "/articles/BamsCourseGuide",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "BAMS Course Details"
    }
  },

  medicalCollegesKerala: {
    title: "Directory of Medical Colleges in Kerala | Govt & Private",
    description: "Browse our complete directory of all government and private medical colleges located in Kerala. Find contact details, fee structures, and seat matrix.",
    keywords: "medical colleges kerala list, private medical colleges kerala, government medical colleges kerala, kerala MBBS seats, list of all medical colleges in kerala, kerala govt medical colleges, new medical colleges in kerala, mbbs seats in kerala 2024, kerala medical college contact numbers, self financing medical colleges kerala",
    url: "/articles/MedicalCollegesKerala",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Medical Colleges in Kerala"
    }
  },

  medicalCollegesKarnataka: {
    title: "Directory of Medical Colleges in Karnataka | Govt & Private",
    description: "A complete list of medical colleges in Karnataka. Explore campus details, MBBS seat intake, and placement reviews for top institutions.",
    keywords: "medical colleges karnataka list, private medical colleges karnataka, government medical colleges karnataka, bangalore medical colleges, list of medical colleges in bangalore, karnataka medical colleges with low cutoff, minority medical colleges in karnataka, rguhs affiliated medical colleges, st johns medical college bangalore, best campuses in karnataka",
    url: "/articles/MedicalCollegesKarnataka",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Medical Colleges in Karnataka"
    }
  },

  bscNursingCourseGuide: {
    title: "B.Sc Nursing Course Guide | Admission, Fees & Scope",
    description: "Discover the B.Sc Nursing course details. Learn about eligibility criteria, syllabus, top nursing colleges, and career opportunities in healthcare.",
    keywords: "BSc nursing course, nursing admission, BSc nursing syllabus, top nursing colleges india, career in nursing, is bsc nursing a good career, bsc nursing admission without neet, salary of bsc nursing in india, difference between gnm and bsc nursing, best nursing colleges for girls, scope of bsc nursing abroad",
    url: "/articles/BscNursingCourseGuide",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "B.Sc Nursing Course Guide"
    }
  },

  bPharmCourseGuide: {
    title: "B.Pharm Course Details | Syllabus, Admission & Career",
    description: "Complete guide to the Bachelor of Pharmacy (B.Pharm) program. Explore eligibility, subjects taught, top pharmacy colleges, and job prospects.",
    keywords: "BPharm course, pharmacy admission, BPharm syllabus, top pharmacy colleges, career in pharmacy, what to do after b pharm, b pharm salary in india per month, is pharmacy a good career, d pharm vs b pharm, medical shop license after b pharm, pharma companies hiring freshers",
    url: "/articles/BPharmCourseGuide",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "B.Pharm Course Details"
    }
  },

  aiimsNursingGuide: {
    title: "AIIMS Nursing Entrance Exam Guide | Application & Syllabus",
    description: "Prepare for the AIIMS B.Sc and M.Sc Nursing entrance exams. Get the latest information on application dates, exam pattern, and preparation resources.",
    keywords: "AIIMS nursing exam, AIIMS BSc nursing, AIIMS nursing preparation, AIIMS nursing syllabus, top nursing entrance, how to clear aiims bsc nursing entrance, aiims nursing paper pattern, can boys apply for aiims bsc nursing, aiims nursing previous year papers, aiims delhi nursing cutoff, what is the stipend for aiims bsc nursing",
    url: "/articles/AiimsNursingGuide",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "AIIMS Nursing Entrance Exam Guide"
    }
  },

  topIndianEngineeringColleges: {
    title: "Top Elite Engineering Colleges in South India",
    description: "A definitive guide to the highest-rated technical institutions across the southern states.",
    keywords: "engineering colleges south india, top btech colleges, engineering rankings, engineering, top 10 colleges in kerala, top colleges in south india, top engineering colleges in kerala, top engineering colleges in karnataka, best btech colleges in south india, top engineering colleges with good placements, cs engineering colleges in bangalore, how to get admission in nit south india, highest package engineering colleges, btech computer science fees in private colleges",
    url: "/articles/TopIndianEngineeringColleges",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top Elite Engineering Colleges in South India",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  },

  /* --- Individual Static News Item Configurations --- */
  newsKeamFirstAllotment: {
    title: "KEAM 2026 First Phase Seat Allotment Released - Check Memo & Details",
    description: "CEE Kerala has officially published the First Phase Allotment List for Engineering and B.Pharm courses. Check your allotment memo, remit fees, and report to your assigned college.",
    keywords: "keam 2026 first allotment list, cee kerala allotment link, how to check keam seat allotment, keam engineering allotment memo, cee.kerala.gov.in allotment 2026, keam option entry results, btech allotment kerala, keam first round result",
    url: "/news/keam-2026-first-phase-seat-all",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "KEAM 2026 — First Phase Seat Allotment Released",
      "datePublished": "2026-07-04",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  },

  newsNimhansUgAdmissions: {
    title: "NIMHANS 2026 UG Admissions: B.Sc Nursing & Allied Health Sciences",
    description: "NIMHANS Bangalore UG Admissions for psychiatric nursing and allied health sciences are currently progressing toward the entrance exam phase. Download your admit card from the official portal.",
    keywords: "nimhans bsc nursing admission 2026, nimhans ug entrance exam date, nimhans allied health sciences application, nimhans.ac.in ug admit card, psychiatric nursing bangalore, nimhans ug courses entry schedule",
    url: "/news/nimhans-2026-ug-admissions-pro",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "NIMHANS 2026 — UG Admissions Progressing",
      "datePublished": "2026-06-03",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  },

  newsLbsKeralaNursingExtended: {
    title: "LBS Kerala 2026: Nursing & Paramedical Application Deadline Extended",
    description: "LBS Centre Kerala has extended the application window for B.Sc Nursing and Paramedical courses until July 10. Admission is purely merit-based on Plus Two results.",
    keywords: "lbs kerala bsc nursing registration last date, lbs nursing paramedical application form 2026, lbs centre nursing merit list, lbscentre.in registration extended, kerala paramedical form date, gnm admission lbs kerala",
    url: "/news/lbs-kerala-2026-nursing-param",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "LBS Kerala 2026 — Nursing & Paramedical Form Extended to July 10",
      "datePublished": "2026-07-08",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  },

  newsKcetRound1Allotment: {
    title: "KCET 2026: Option Modification Closes; Round 1 Real Allotment on July 15",
    description: "KEA Karnataka has closed the option entry editing window following the mock results. The final Round 1 real seat allotment results for B.Tech and B.Pharm will launch on July 15.",
    keywords: "kcet 2026 round 1 allotment result date, kea karnataka mock allotment modification, kcet real seat allotment status, cetonline.karnataka.gov.in result 2026, kcet engineering option entry close, kea round 1 allotment",
    url: "/news/kcet-2026-option-modification",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "KCET 2026 — Option Modification Closed; Round 1 Allotment on July 15",
      "datePublished": "2026-07-09",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  },

  newsComedkChoiceFilling: {
    title: "COMEDK UGET 2026: Round 1 Mock Choice Filling Live on July 11",
    description: "COMEDK has published the revised engineering seat matrix listing 24,626 available seats. Approved candidates can begin mock choice filling from July 11 to July 13.",
    keywords: "comedk 2026 choice filling dates, comedk round 1 mock allotment, comedk engineering seat matrix, comedk.org counselling portal, comedk choice locking timeline, karnataka private engineering counseling",
    url: "/news/comedk-uget-2026-round-1-mock",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "COMEDK UGET 2026 — Round 1 Mock Choice Filling Opens July 11",
      "datePublished": "2026-07-07",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  },

  newsTneaChoiceFilling: {
    title: "TNEA 2026 Engineering Counselling: Round 1 Choice Filling Begins July 20",
    description: "DOTE Tamil Nadu is triggering Round 1 choice filling on July 20 for top-ranked applicants (Ranks 1 to 37,976). Provisional allotments will issue on July 24.",
    keywords: "tnea 2026 round 1 choice filling link, tnea online rank list, dote tamil nadu engineering seat allotment, tneaonline.org login, tamil nadu engineering counselling steps, tnea round 1 dates",
    url: "/news/tnea-2026-round-1-choice-fill",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "TNEA 2026 — Round 1 Choice Filling Begins July 20",
      "datePublished": "2026-07-01",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  },

  newsApEapcetCounselling: {
    title: "AP EAPCET 2026: Phase 1 Web Counselling Schedule & Option Entry Live",
    description: "APSCHE has initiated Phase 1 web counselling for AP EAMCET qualifiers. Complete online processing fee payments, slot booking, and web options entry in mid-July.",
    keywords: "ap eapcet 2026 web options date, ap eamcet phase 1 counselling schedule, apsche slot booking certificate verification, cets.apsche.ap.gov.in web options, andhra pradesh engineering counselling links",
    url: "/news/ap-eapcet-2026-phase-1-web-co",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "AP EAPCET 2026 — Phase 1 Web Counselling Schedule Live",
      "datePublished": "2026-07-05",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  },

  newsTsEapcetAllotmentLive: {
    title: "TS EAPCET (EAMCET) 2026: Phase 1 Seat Allotment Results Live Today",
    description: "TGCHE is releasing the Phase 1 Seat Allotment results today, July 10, 2026. Log in to download your allocation memo, pay your tuition fee, and self-report.",
    keywords: "ts eapcet 2026 phase 1 seat allotment results, tgche eamcet allotment list today, how to check ts eapcet allotment memo, tgeapcet.nic.in logging, telangana engineering first round allotment live",
    url: "/news/ts-eapcet-eamcet-2026-phase",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "TS EAPCET (EAMCET) 2026 — Phase 1 Seat Allotment Result Live",
      "datePublished": "2026-07-10",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  },

  newsKeralaPlusTwoSayResult: {
    title: "Kerala Plus Two SAY Result 2026: DHSE Improvement Results Expected Soon",
    description: "DHSE Kerala is expected to declare the Higher Secondary SAY (Save A Year) and Improvement examination results soon. Check status updates at KITE Kerala.",
    keywords: "kerala plus two say result 2026 date, dhse kerala improvement result expected link, results.kite.kerala.gov.in supplementary, plus two say exam result, dhse plus two improvement marksheet",
    url: "/news/kerala-plus-two-say-2026-dhs",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "Kerala Plus Two SAY 2026 — DHSE Improvement Result Expected Soon",
      "datePublished": "2026-07-03",
      "publisher": { "@type": "Organization", "name": "Vidyabhyasam" }
    }
  }
};