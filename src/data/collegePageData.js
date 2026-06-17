export const nearbyPlacesMap = {
  "Bangalore": ["Bangalore", "Bengaluru", "Whitefield", "Electronic City", "Kengeri", "Nelamangala", "Yelahanka", "Hosakote"],
  "Mysore": ["Mysore", "Mysuru", "Mandya", "Srirangapatna", "Nanjangud", "Chamarajanagar"],
  "Mangalore": ["Mangalore", "Mangaluru", "Udupi", "Manipal", "Surathkal", "Moodabidri", "Nitte"],
  "Kochi": ["Kochi", "Cochin", "Ernakulam", "Aluva", "Kalamassery", "Angamaly", "Tripunithura", "Muvattupuzha", "Kakkanad"],
  "Trivandrum": ["Trivandrum", "Thiruvananthapuram", "Kazhakkoottam", "Neyyattinkara", "Attingal", "Nedumangad"],
  "Calicut": ["Calicut", "Kozhikode", "Malappuram", "Wayanad", "Thamarassery"],
  "Chennai": ["Chennai", "Kanchipuram", "Thiruvallur", "Tambaram", "Avadi", "Sriperumbudur", "Chengalpattu", "Katappakkam"],
  "Coimbatore": ["Coimbatore", "Pollachi", "Tiruppur", "Erode", "Ooty", "Nilgiris"],
  "Salem": ["Salem", "Namakkal", "Dharmapuri", "Krishnagiri"]
};

export const getDomainKeywords = (domain) => {
  switch (domain) {
    case 'Medical': 
      return [
        'medical', 'mbbs', 'md', 'ms', 'surgery', 
        'bds', 'dental', 'mdds',                        // Dental Allied
        'bpharm', 'mpharm', 'pharmacy', 'pharm.d',      // Pharmacy Allied
        'bams', 'bhms', 'ayurveda', 'homeopathy',       // Alternative Medicine
        'allied health', 'physiotherapy', 'bpt', 'mpt'  // Paramedical / Health Sciences
      ];
    case 'Engineering': 
      return [
        'engineering', 'b.tech', 'm.tech', 'b.e', 'm.e', 
        'computer science', 'information technology', 
        'barch', 'march', 'architecture',               // Architecture Allied
        'bca', 'mca', 'computer applications',          // IT & Software Allied
        'data science', 'artificial intelligence'
      ];
    case 'Nursing': 
      return [
        'nursing', 'b.sc nursing', 'm.sc nursing', 
        'post basic', 'gnm', 'anm', 'midwifery'          // Nursing Framework Extensions
      ];
    default: 
      return [];
  }
};

export const collegePageConfig = {
  // ==========================================
  //                NURSING
  // ==========================================
  // --- SOUTH INDIA REGIONAL ---
  "TopNursingSouthIndia": {
    eyebrow: "Zonal Rankings",
    title: "Top Nursing Colleges in South India",
    subtitle: "Discover the premier nursing institutions across the southern states.",
    introText: "South India is home to some of the most advanced healthcare and nursing training facilities in the country. Explore the top-ranked institutions offering exceptional clinical exposure and global placement opportunities.",
    seoTitle: "Top 10 Nursing Colleges in South India (2026 Rankings)",
    filters: { isSouthIndia: true, domain: "Nursing" }
  },
  "TopGovtNursingColleges": {
    eyebrow: "Public Institutions",
    title: "Top Government Nursing Colleges in South India",
    subtitle: "Ranking the highest-rated public nursing institutions.",
    introText: "Government nursing colleges offer highly subsidized tuition structures alongside massive clinical case variations in state-run hospitals. Discover the most prestigious public nursing environments.",
    seoTitle: "Top Government Nursing Colleges in South India | Fee & Admission",
    filters: { isSouthIndia: true, type: "Government", domain: "Nursing" }
  },
  "TopPrivateNursingSouthIndia": {
    eyebrow: "Private Institutions",
    title: "Top Private Nursing Colleges in South India",
    subtitle: "Premium infrastructure and global placements.",
    introText: "Private nursing institutions often feature ultra-modern simulation labs and direct recruitment tie-ups with international hospital chains. Here are the top-rated private campuses.",
    seoTitle: "Top Private Nursing Colleges in South India | Placements & Fees",
    filters: { isSouthIndia: true, type: "Private", domain: "Nursing" }
  },

  // --- STATE LEVEL ---
  "NursingCollegesKerala": {
    eyebrow: "State Rankings",
    title: "Top Nursing Colleges in Kerala",
    subtitle: "The definitive list of premier nursing institutions in God's Own Country.",
    introText: "Kerala is globally renowned for exporting highly skilled nursing professionals. Explore the top institutions that maintain this legacy of healthcare excellence.",
    seoTitle: "Top 10 Nursing Colleges in Kerala | 2026 Rankings & Fees",
    filters: { state: "Kerala", domain: "Nursing" }
  },
  "NursingCollegesKarnataka": {
    eyebrow: "State Rankings",
    title: "Top Nursing Colleges in Karnataka",
    subtitle: "Leading healthcare education hubs in Karnataka.",
    introText: "From massive medical cities in Bangalore to specialized campuses in Manipal, Karnataka offers exceptional B.Sc and M.Sc Nursing programs.",
    seoTitle: "Top Nursing Colleges in Karnataka | Admissions & Rankings",
    filters: { state: "Karnataka", domain: "Nursing" }
  },
  "NursingCollegesTamilNadu": {
    eyebrow: "State Rankings",
    title: "Top Nursing Colleges in Tamil Nadu",
    subtitle: "Pioneering nursing education in Tamil Nadu.",
    introText: "Tamil Nadu's robust healthcare infrastructure provides nursing students with unparalleled practical training and clinical rotations.",
    seoTitle: "Top Nursing Colleges in Tamil Nadu | 2026 Rankings",
    filters: { state: "Tamil Nadu", domain: "Nursing" }
  },

  // --- KERALA CITIES ---
  "NursingCollegesKochi": {
    eyebrow: "City Rankings",
    title: "Top Nursing Colleges in Kochi",
    subtitle: "Premier nursing education in Kerala's commercial capital.",
    introText: "Kochi hosts some of the most advanced multi-specialty hospitals in the state, offering nursing students excellent hands-on clinical experience.",
    seoTitle: "Top Nursing Colleges in Kochi, Kerala | 2026 Admissions",
    filters: { state: "Kerala", city: "Kochi", domain: "Nursing" }
  },
  "NursingCollegesTrivandrum": {
    eyebrow: "City Rankings",
    title: "Top Nursing Colleges in Trivandrum",
    subtitle: "Leading nursing institutes in the capital city.",
    introText: "Trivandrum combines prestigious government medical colleges with elite private nursing schools.",
    seoTitle: "Top Nursing Colleges in Trivandrum | Fees & Placements",
    filters: { state: "Kerala", city: "Trivandrum", domain: "Nursing" }
  },
  "NursingCollegesCalicut": {
    eyebrow: "City Rankings",
    title: "Top Nursing Colleges in Calicut",
    subtitle: "Excellence in healthcare education in Northern Kerala.",
    introText: "Calicut (Kozhikode) is a historic hub for medical education, offering top-tier nursing programs with extensive public healthcare exposure.",
    seoTitle: "Top Nursing Colleges in Calicut | 2026 Rankings",
    filters: { state: "Kerala", city: "Calicut", domain: "Nursing" }
  },

  // --- KARNATAKA CITIES ---
  "NursingCollegesBangalore": {
    eyebrow: "City Rankings",
    title: "Top Nursing Colleges in Bangalore",
    subtitle: "Nursing education in India's tech and medical metropolis.",
    introText: "Bangalore's massive hospital networks ensure nursing students receive world-class training and immediate placement opportunities.",
    seoTitle: "Top Nursing Colleges in Bangalore | 2026 Rankings & Fees",
    filters: { state: "Karnataka", city: "Bangalore", domain: "Nursing" }
  },
  "NursingCollegesMysore": {
    eyebrow: "City Rankings",
    title: "Top Nursing Colleges in Mysore",
    subtitle: "Quality nursing programs in the heritage city.",
    introText: "Mysore offers a serene learning environment combined with rigorous clinical training at attached heritage and modern hospitals.",
    seoTitle: "Top Nursing Colleges in Mysore | Admissions 2026",
    filters: { state: "Karnataka", city: "Mysore", domain: "Nursing" }
  },
  "NursingCollegesMangalore": {
    eyebrow: "City Rankings",
    title: "Top Nursing Colleges in Mangalore",
    subtitle: "Coastal Karnataka's premier nursing hubs.",
    introText: "Mangalore is famously known as a massive educational hub, drawing nursing aspirants from across the country for its high-standard institutions.",
    seoTitle: "Top Nursing Colleges in Mangalore | Rankings & Placements",
    filters: { state: "Karnataka", city: "Mangalore", domain: "Nursing" }
  },

  // --- TAMIL NADU CITIES ---
  "NursingCollegesChennai": {
    eyebrow: "City Rankings",
    title: "Top Nursing Colleges in Chennai",
    subtitle: "Elite nursing institutions in the healthcare capital.",
    introText: "Chennai is often referred to as India's health capital, providing nursing graduates with unmatched exposure to advanced medical technologies.",
    seoTitle: "Top Nursing Colleges in Chennai | 2026 Guide",
    filters: { state: "Tamil Nadu", city: "Chennai", domain: "Nursing" }
  },
  "NursingCollegesCoimbatore": {
    eyebrow: "City Rankings",
    title: "Top Nursing Colleges in Coimbatore",
    subtitle: "Leading nursing education in the Manchester of South India.",
    introText: "Coimbatore's rapidly expanding medical sector makes it a prime destination for aspiring nurses seeking strong clinical foundations.",
    seoTitle: "Top Nursing Colleges in Coimbatore | Placements & Fees",
    filters: { state: "Tamil Nadu", city: "Coimbatore", domain: "Nursing" }
  },
  "NursingCollegesSalem": {
    eyebrow: "City Rankings",
    title: "Top Nursing Colleges in Salem",
    subtitle: "Exceptional nursing training centers in Salem.",
    introText: "Salem offers dedicated nursing colleges known for their rigorous academic discipline and excellent regional placement records.",
    seoTitle: "Top Nursing Colleges in Salem | 2026 Rankings",
    filters: { state: "Tamil Nadu", city: "Salem", domain: "Nursing" }
  },

  // ==========================================
  //                MEDICAL
  // ==========================================
  "MedicalCollegesBangalore": {
    eyebrow: "City Rankings",
    title: "Top Medical Colleges in Bangalore",
    subtitle: "Leading MBBS and PG Medical institutes in the IT capital.",
    introText: "Bangalore hosts some of India's most prestigious medical colleges, offering state-of-the-art research facilities and immense clinical exposure.",
    seoTitle: "Top Medical Colleges in Bangalore | 2026 MBBS Admissions",
    filters: { state: "Karnataka", city: "Bangalore", domain: "Medical" }
  },
  "MedicalCollegesMysore": {
    eyebrow: "City Rankings",
    title: "Top Medical Colleges in Mysore",
    subtitle: "Premier medical education in the heritage city.",
    introText: "Mysore's medical institutions are celebrated for their rich legacy, experienced faculty, and strong emphasis on community medicine.",
    seoTitle: "Top Medical Colleges in Mysore | Rankings & Fees",
    filters: { state: "Karnataka", city: "Mysore", domain: "Medical" }
  },
  "MedicalCollegesMangalore": {
    eyebrow: "City Rankings",
    title: "Top Medical Colleges in Mangalore",
    subtitle: "Coastal healthcare and medical research hubs.",
    introText: "Mangalore is a dominant force in South Indian medical education, home to sprawling campuses and multispecialty teaching hospitals.",
    seoTitle: "Top Medical Colleges in Mangalore | 2026 Rankings",
    filters: { state: "Karnataka", city: "Mangalore", domain: "Medical" }
  },
  "MedicalCollegesKochi": {
    eyebrow: "City Rankings",
    title: "Top Medical Colleges in Kochi",
    subtitle: "Advanced medical education in Kerala's commercial hub.",
    introText: "Kochi is at the forefront of medical technology in Kerala, providing medical students with exposure to advanced robotics and modern healthcare practices.",
    seoTitle: "Top Medical Colleges in Kochi | Fees & Admissions",
    filters: { state: "Kerala", city: "Kochi", domain: "Medical" }
  },
  "MedicalCollegesTrivandrum": {
    eyebrow: "City Rankings",
    title: "Top Medical Colleges in Trivandrum",
    subtitle: "Historic and prestigious medical campuses.",
    introText: "Trivandrum houses some of the oldest and most respected medical colleges in India, known for academic rigor and vast patient influx.",
    seoTitle: "Top Medical Colleges in Trivandrum | 2026 Rankings",
    filters: { state: "Kerala", city: "Trivandrum", domain: "Medical" }
  },
  "MedicalCollegesCalicut": {
    eyebrow: "City Rankings",
    title: "Top Medical Colleges in Calicut",
    subtitle: "Excellence in clinical training in Malabar.",
    introText: "Calicut remains a prime destination for medical aspirants, boasting institutions that lead in medical research and community healthcare.",
    seoTitle: "Top Medical Colleges in Calicut | Placements & Fees",
    filters: { state: "Kerala", city: "Calicut", domain: "Medical" }
  },
  "MedicalCollegesChennai": {
    eyebrow: "City Rankings",
    title: "Top Medical Colleges in Chennai",
    subtitle: "Elite medical training in India's healthcare capital.",
    introText: "Chennai is globally recognized for its medical infrastructure, giving MBBS and PG students unparalleled opportunities to learn from top specialists.",
    seoTitle: "Top Medical Colleges in Chennai | 2026 Guide",
    filters: { state: "Tamil Nadu", city: "Chennai", domain: "Medical" }
  },
  "MedicalCollegesCoimbatore": {
    eyebrow: "City Rankings",
    title: "Top Medical Colleges in Coimbatore",
    subtitle: "Emerging hubs for quality medical education.",
    introText: "Coimbatore blends excellent academic environments with rapidly growing super-specialty hospitals, ideal for hands-on clinical training.",
    seoTitle: "Top Medical Colleges in Coimbatore | 2026 Rankings",
    filters: { state: "Tamil Nadu", city: "Coimbatore", domain: "Medical" }
  },
  "MedicalCollegesSalem": {
    eyebrow: "City Rankings",
    title: "Top Medical Colleges in Salem",
    subtitle: "Premier healthcare institutions in the region.",
    introText: "Salem offers high-quality medical programs that serve a vast regional population, ensuring a rich clinical learning experience.",
    seoTitle: "Top Medical Colleges in Salem | Rankings & Admissions",
    filters: { state: "Tamil Nadu", city: "Salem", domain: "Medical" }
  },

  // ==========================================
  //               ENGINEERING
  // ==========================================
  "EngineeringCollegesBangalore": {
    eyebrow: "City Rankings",
    title: "Top Engineering Colleges in Bangalore",
    subtitle: "Learn and innovate in India's Silicon Valley.",
    introText: "Bangalore is the ultimate destination for engineering aspirants, offering direct access to global tech giants, startups, and top-tier placement opportunities.",
    seoTitle: "Top Engineering Colleges in Bangalore | 2026 Placements & Fees",
    filters: { state: "Karnataka", city: "Bangalore", domain: "Engineering" }
  },
  "EngineeringCollegesMysore": {
    eyebrow: "City Rankings",
    title: "Top Engineering Colleges in Mysore",
    subtitle: "Quality technical education in a serene environment.",
    introText: "Mysore boasts some of the state's most established engineering institutions, characterized by massive campuses and strong industry partnerships.",
    seoTitle: "Top Engineering Colleges in Mysore | 2026 Rankings",
    filters: { state: "Karnataka", city: "Mysore", domain: "Engineering" }
  },
  "EngineeringCollegesMangalore": {
    eyebrow: "City Rankings",
    title: "Top Engineering Colleges in Mangalore",
    subtitle: "Premier B.Tech institutes on the coast.",
    introText: "Mangalore attracts technical students nationwide with its renowned engineering colleges, modern infrastructure, and excellent campus life.",
    seoTitle: "Top Engineering Colleges in Mangalore | Fees & Admissions",
    filters: { state: "Karnataka", city: "Mangalore", domain: "Engineering" }
  },
  "EngineeringCollegesKochi": {
    eyebrow: "City Rankings",
    title: "Top Engineering Colleges in Kochi",
    subtitle: "Leading tech and engineering hubs in Kerala.",
    introText: "With a growing IT sector (Infopark/SmartCity), Kochi's engineering colleges provide excellent industry exposure and high-tech incubation centers.",
    seoTitle: "Top Engineering Colleges in Kochi | 2026 Placements",
    filters: { state: "Kerala", city: "Kochi", domain: "Engineering" }
  },
  "EngineeringCollegesTrivandrum": {
    eyebrow: "City Rankings",
    title: "Top Engineering Colleges in Trivandrum",
    subtitle: "Elite technical institutions in the capital.",
    introText: "Trivandrum is home to prestigious government and private engineering colleges, fueled by proximity to Technopark and space research organizations.",
    seoTitle: "Top Engineering Colleges in Trivandrum | 2026 Guide",
    filters: { state: "Kerala", city: "Trivandrum", domain: "Engineering" }
  },
  "EngineeringCollegesCalicut": {
    eyebrow: "City Rankings",
    title: "Top Engineering Colleges in Calicut",
    subtitle: "Top-tier engineering education in Malabar.",
    introText: "Anchored by institutes of national importance, Calicut offers an incredibly competitive and rewarding academic environment for engineering students.",
    seoTitle: "Top Engineering Colleges in Calicut | Rankings & Fees",
    filters: { state: "Kerala", city: "Calicut", domain: "Engineering" }
  },
  "EngineeringCollegesChennai": {
    eyebrow: "City Rankings",
    title: "Top Engineering Colleges in Chennai",
    subtitle: "India's traditional powerhouse of engineering education.",
    introText: "Chennai features a massive concentration of elite engineering colleges with deep ties to the automotive, manufacturing, and software industries.",
    seoTitle: "Top Engineering Colleges in Chennai | 2026 Rankings",
    filters: { state: "Tamil Nadu", city: "Chennai", domain: "Engineering" }
  },
  "EngineeringCollegesCoimbatore": {
    eyebrow: "City Rankings",
    title: "Top Engineering Colleges in Coimbatore",
    subtitle: "Industrial tie-ups and technical excellence.",
    introText: "Coimbatore, an industrial powerhouse, gives engineering students a massive advantage with curriculum integrated heavily with practical manufacturing and IT sectors.",
    seoTitle: "Top Engineering Colleges in Coimbatore | Admissions & Placements",
    filters: { state: "Tamil Nadu", city: "Coimbatore", domain: "Engineering" }
  },
  "EngineeringCollegesSalem": {
    eyebrow: "City Rankings",
    title: "Top Engineering Colleges in Salem",
    subtitle: "Quality B.Tech programs in central Tamil Nadu.",
    introText: "Salem provides robust engineering programs with a strong focus on practical skills, serving as an educational hub for the surrounding districts.",
    seoTitle: "Top Engineering Colleges in Salem | 2026 Rankings",
    filters: { state: "Tamil Nadu", city: "Salem", domain: "Engineering" }
  }
};