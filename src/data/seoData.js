export const seoConfigurations = {
  home: {
    title: "Vidyabhyasam | Top Educational Portal for Medical & Engineering Admissions",
    description: "Discover top medical and engineering colleges in India. Get expert guidance on NEET UG, FMGE, INI CET, MBBS, BAMS, B.Sc Nursing, and admissions with Vidyabhyasam.",
    keywords: "Vidyabhyasam, medical colleges India, engineering colleges, NEET UG guidance, MBBS admission, educational portal India, how to get mbbs admission in india, best college search portal, help me find a good engineering college, neet ug counselling guidance, find colleges for low neet score, medical admission consultants online",
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
};