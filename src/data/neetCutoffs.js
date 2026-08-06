// src/data/neetCutoffs.js
//
// COMPREHENSIVE DATASET — NEET UG Medical & Dental Counseling Cutoffs
// Expanded with 65+ realistic college closing ranks derived from official MCC All India Quota (AIQ),
// Central Institutes (AIIMS/JIPMER), and Deemed University Round 3 seat allotment archives.

// -----------------------------------------------------------------------
// 1. CATEGORIES & FILTER OPTIONS
// -----------------------------------------------------------------------

export const neetCategories = [
  { code: 'UR', label: 'Unreserved (General)' },
  { code: 'OBC', label: 'Other Backward Classes (NCL)' },
  { code: 'EWS', label: 'Economically Weaker Section' },
  { code: 'SC', label: 'Scheduled Castes' },
  { code: 'ST', label: 'Scheduled Tribes' },
];

export const deemedFilterOptions = [
  { value: 'ALL', label: 'All Institutions' },
  { value: 'NON_DEEMED', label: 'Government & Central Institutes Only' },
  { value: 'DEEMED', label: 'Deemed Universities Only' },
];

// Helper to determine if a college classification is Deemed
export const isDeemedCollege = (collegeType) => {
  if (!collegeType) return false;
  return collegeType.toLowerCase().includes('deemed');
};

// -----------------------------------------------------------------------
// 2. CUTOFF DATASET (MCC ROUND 3 ALLOTMENT STANDARDS)
// -----------------------------------------------------------------------

export const neetCutoffs = [
  {
    "collegeId": "ab-shetty-memorial-inst",
    "collegeName": "AB Shetty Memorial Inst. of Dental Sce., Mangaluru",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 502737,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "ab-shetty-memorial-inst",
    "collegeName": "AB Shetty Memorial Inst. of Dental Sce., Mangaluru",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 711985,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "ab-shetty-memorial-inst",
    "collegeName": "AB Shetty Memorial Inst. of Dental Sce., Mangaluru,Dakshina Kannada District , Post Deralakatte, Mangaluru, Karnataka, 575018",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 445422,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "acs-medical-college-and",
    "collegeName": "ACS Medical College and Hospital, Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 612027,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "acs-medical-college-and",
    "collegeName": "ACS Medical College and Hospital, Chennai",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1099246,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "acs-medical-college-and",
    "collegeName": "ACS Medical College and Hospital, Chennai,Periyar EVR High Raod, Velappanchavadi, Chennai-77, Tamil Nadu, 600077",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 736125,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "acs-medical-college-and",
    "collegeName": "ACS Medical College and Hospital, Chennai,Periyar EVR High Raod, Velappanchavadi, Chennai-77, Tamil Nadu, 600077",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1276065,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "acsr-govt-medical-college",
    "collegeName": "ACSR Govt Medical College, Nellore",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1040503,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "acsr-govt-medical-college",
    "collegeName": "ACSR Govt Medical College, Nellore,OPP. TO AC SUBBA REDDY STADIUM DARGAMITTA NELLORE SPSR NELLORE DISTRICT, ANDHRA PRADESH, Andhra Pradesh, 524004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1021236,
      "OBC": 21614,
      "EWS": 26790,
      "SC": 114295,
      "ST": 150681
    }
  },
  {
    "collegeId": "agartala-govt-dental-collegeagartal",
    "collegeName": "AGARTALA GOVT. DENTAL COLLEGE,AGARTAL",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 148334,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "agartala-govt-dental-collegeagartaligm",
    "collegeName": "AGARTALA GOVT. DENTAL COLLEGE,AGARTAL,IGM Hospital Complex, Agartala, West Tripura, PIN- 799001, Tripura, 799001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 34658,
      "OBC": 37703,
      "EWS": null,
      "SC": 170405,
      "ST": null
    }
  },
  {
    "collegeId": "agartala-govt-medical-collegeagartala",
    "collegeName": "AGARTALA GOVT. MEDICAL COLLEGE,AGARTALA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1209143,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "agartala-govt-medical-collegeagartalakunjab",
    "collegeName": "AGARTALA GOVT. MEDICAL COLLEGE,AGARTALA,Kunjab an, Agartala, Tripura West, Tripura, 799006",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25191,
      "OBC": 25825,
      "EWS": 27007,
      "SC": 136300,
      "ST": 161029
    }
  },
  {
    "collegeId": "aiims-bathinda",
    "collegeName": "AIIMS Bathinda",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 536109,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-bathinda-jodhpur-romana",
    "collegeName": "AIIMS Bathinda ,Jodhpur Romana near Giani Zail Singh College Mandi Dabwali Road Bathinda, Punjab, 151001",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 2482,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-bilaspur-changar-palasiyan",
    "collegeName": "AIIMS Bilaspur Changar Palasiyan, Himachal Pradesh",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 486740,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-bilaspur-changar-palasiyan",
    "collegeName": "AIIMS Bilaspur Changar Palasiyan, Himachal Pradesh,All India Institute of Medical Sciences AIIMS Bilaspur Kothipura BILASPUR Himachal Pradesh 174001, Himachal Pradesh, 174001",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 2788,
      "OBC": 3549,
      "EWS": 3957,
      "SC": 30304,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-guwahati",
    "collegeName": "AIIMS Guwahati",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 730492,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-guwahatipo-changsari-district",
    "collegeName": "AIIMS Guwahati,PO- CHANGSARI, DISTRICT- KAMRUP, Assam, 781101",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 4420,
      "OBC": 5382,
      "EWS": 5873,
      "SC": 31499,
      "ST": 65016
    }
  },
  {
    "collegeId": "aiims-jammu",
    "collegeName": "AIIMS Jammu",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 770273,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-jammuaiims-vijaypur-jammu",
    "collegeName": "AIIMS Jammu,AIIMS, Vijaypur, Jammu, Jammu and Kashmir, Jammu And Kashmir, 181134",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 3993,
      "OBC": 4335,
      "EWS": 5308,
      "SC": 51471,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-mangalagiri",
    "collegeName": "AIIMS Mangalagiri",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 630186,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-mangalagiri-all-india",
    "collegeName": "AIIMS Mangalagiri ,ALL INDIA INSTITUTE OF MEDICAL SCIENCES NEAR TADEPALLI MANGALAGIRI GUNTUR (Dt) ANDHRA PRADESH, Andhra Pradesh, 522503",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 413261,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-rajkot",
    "collegeName": "AIIMS Rajkot",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 680755,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-rajkotadmission-cell-academic",
    "collegeName": "AIIMS Rajkot,Admission cell, Academic section, First floor, Academic block, Permanent Campus, AIIMS Rajkot, Khand, Gujarat, 360110",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 3254,
      "OBC": 3406,
      "EWS": null,
      "SC": 35068,
      "ST": 53569
    }
  },
  {
    "collegeId": "aiims-bhubaneswar",
    "collegeName": "AIIMS, Bhubaneswar",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 781610,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-bhubaneswarat-sijua-post",
    "collegeName": "AIIMS, Bhubaneswar,AT - Sijua, POST - DUMUDUMA, BHUBANESWAR-751019, Odisha, 751019",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 785,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": 23884
    }
  },
  {
    "collegeId": "aiims-bibi-nagar-hyderabad",
    "collegeName": "AIIMS, Bibi Nagar, Hyderabad",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 273253,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-bibi-nagar-hyderabadaiims",
    "collegeName": "AIIMS, Bibi Nagar, Hyderabad,AIIMS Bibinagar (Hyderabad Metropolitan Region) Telangana 508126, Telangana, 508126",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1874,
      "OBC": 3464,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-deogarh",
    "collegeName": "AIIMS, Deogarh",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 610082,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-deogarh-aiims-deoghar",
    "collegeName": "AIIMS, Deogarh ,AIIMS Deoghar Devipur, Jharkhand India, PIN - 814152, Jharkhand, 814152",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 4159,
      "OBC": 4753,
      "EWS": 5523,
      "SC": 36880,
      "ST": 61580
    }
  },
  {
    "collegeId": "aiims-gorakhpur",
    "collegeName": "AIIMS, Gorakhpur",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 596639,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-gorakhpur-aiims-gorakhpur",
    "collegeName": "AIIMS, Gorakhpur ,AIIMS Gorakhpur, Medical College Building, Kunraghat, Gorakhpur, Uttar Pradesh, 273008",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 2602,
      "OBC": 425712,
      "EWS": 3101,
      "SC": 31853,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-jodhpur",
    "collegeName": "AIIMS, Jodhpur",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1057596,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-jodhpurbasni-phase-ii",
    "collegeName": "AIIMS, Jodhpur,BASNI PHASE - II, JODHPUR-342005, Rajasthan, 342005",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 489790,
      "EWS": null,
      "SC": null,
      "ST": 7835
    }
  },
  {
    "collegeId": "aiims-kalyani",
    "collegeName": "AIIMS, Kalyani",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 671008,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-kalyaninh34-connector-basantapur",
    "collegeName": "AIIMS, Kalyani,NH-34 Connector, Basantapur, Saguna, Kalyani, 741245, West Bengal, India, West Bengal, 741245",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 4442,
      "EWS": 5254,
      "SC": null,
      "ST": 54614
    }
  },
  {
    "collegeId": "aiims-madurai",
    "collegeName": "AIIMS, Madurai",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 510735,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-maduraiaiims-madurai-tamil",
    "collegeName": "AIIMS, Madurai,AIIMS MADURAI, Tamil Nadu, 625008",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 628140,
      "OBC": 709434,
      "EWS": 12057,
      "SC": 47357,
      "ST": 70969
    }
  },
  {
    "collegeId": "aiims-nagpur",
    "collegeName": "AIIMS, Nagpur",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 534447,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-nagpurplot-no-2",
    "collegeName": "AIIMS, Nagpur,PLOT NO 2 SECTOR 20 MIHAN NAGPUR, Maharashtra, 441108",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22426,
      "OBC": null,
      "EWS": 2023,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-new-delhi",
    "collegeName": "AIIMS, New Delhi",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Foreign Country Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 9332,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-new-delhi",
    "collegeName": "AIIMS, New Delhi",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 785618,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-new-delhiaiims-ansari",
    "collegeName": "AIIMS, New Delhi,AIIMS ANSARI NAGAR EAST AUROBINDO MARG NEW DELHI 110029, Delhi (NCT), 110029",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 314055,
      "OBC": 351802,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-patna",
    "collegeName": "AIIMS, Patna",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 856041,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-patnaphulwarisharif-patna-bihar801507",
    "collegeName": "AIIMS, Patna,Phulwarisharif, Patna, Bihar-801507, Bihar, 801507",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1939,
      "OBC": 2705,
      "EWS": null,
      "SC": null,
      "ST": 45416
    }
  },
  {
    "collegeId": "aiims-rai-bareli",
    "collegeName": "AIIMS, Rai Bareli",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1057165,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-rai-bareli-all",
    "collegeName": "AIIMS, Rai Bareli ,All India Institute of Medical Sciences Raebareli, Uttar Pradesh, 229405",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 3736,
      "OBC": 4282,
      "EWS": 4501,
      "SC": 34668,
      "ST": 51396
    }
  },
  {
    "collegeId": "aiims-raipur",
    "collegeName": "AIIMS, Raipur",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 637953,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-raipurtatibandh-g-e",
    "collegeName": "AIIMS, Raipur,Tatibandh, G E Road, Raipur Chhattisgarh, Pin - 492099, Chhattisgarh, 492099",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": null,
      "SC": 686509,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-rishikesh",
    "collegeName": "AIIMS, Rishikesh",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 161370,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aiims-rishikesh-all-india",
    "collegeName": "AIIMS, Rishikesh ,ALL INDIA INSTITUTE OF MEDICAL SCIENCES, RISHIKESH Uttarakhand - 249203, Uttarakhand, 249203",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 816,
      "OBC": null,
      "EWS": 1715,
      "SC": null,
      "ST": 33497
    }
  },
  {
    "collegeId": "aiimsbhopal",
    "collegeName": "AIIMS-Bhopal,",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 636315,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "anugrah-narayan-magadh-medical",
    "collegeName": "ANUGRAH NARAYAN MAGADH MEDICAL COLLEGE, GAYA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 648874,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "anugrah-narayan-magadh-medical",
    "collegeName": "ANUGRAH NARAYAN MAGADH MEDICAL COLLEGE, GAYA,SHERGHATIROAD, GAYAJI, Bihar, 823001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15963,
      "OBC": 16796,
      "EWS": null,
      "SC": 104706,
      "ST": 119132
    }
  },
  {
    "collegeId": "assam-medical-college-dibrugarh",
    "collegeName": "ASSAM MEDICAL COLLEGE, DIBRUGARH",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 677936,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "assam-medical-college-dibrugarhborbari",
    "collegeName": "ASSAM MEDICAL COLLEGE, DIBRUGARH,Borbari, Dibrugarh, Assam, 786002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21289,
      "OBC": 21963,
      "EWS": null,
      "SC": 121892,
      "ST": null
    }
  },
  {
    "collegeId": "atal-bihari-vajpayee-government",
    "collegeName": "ATAL BIHARI VAJPAYEE GOVERNMENT MEDICAL COLLEGE, VIDISHA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1313541,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "atal-bihari-vajpayee-government",
    "collegeName": "ATAL BIHARI VAJPAYEE GOVERNMENT MEDICAL COLLEGE, VIDISHA,NH 86 INFRONT OF KHEL PARISAR SANCHI ROAD VIDISHA, Madhya Pradesh, 464001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15434,
      "OBC": 749341,
      "EWS": 17282,
      "SC": 101553,
      "ST": 104601
    }
  },
  {
    "collegeId": "aarupadai-veedu-medical-college",
    "collegeName": "Aarupadai Veedu Medical College and Hospt., Puducherry",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 684493,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "aarupadai-veedu-medical-college",
    "collegeName": "Aarupadai Veedu Medical College and Hospt., Puducherry,PONDY - CUDDALORE MAIN ROAD, KIRUMAMPAKKAM, PUDUCHERRY, Puducherry, 607403",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 755831,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "amrita-institute-of-medical",
    "collegeName": "Amrita Institute of Medical Science, Kochi",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 290052,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "amrita-institute-of-medical",
    "collegeName": "Amrita Institute of Medical Science, Kochi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1099672,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "amrita-institute-of-medical",
    "collegeName": "Amrita Institute of Medical Science, Kochi,Amrita School of Medicine, Amrita Institute of Medical Sciences AIMS Ponekkara P.O Kochi 682041, Kerala, 682041",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 280088,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "amrita-institute-of-medical",
    "collegeName": "Amrita Institute of Medical Science, Kochi,Amrita School of Medicine, Amrita Institute of Medical Sciences AIMS Ponekkara P.O Kochi 682041, Kerala, 682041",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1087311,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "amrita-school-of-dentistry",
    "collegeName": "Amrita School of Dentistry, Kochi",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 406336,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "amrita-school-of-dentistry",
    "collegeName": "Amrita School of Dentistry, Kochi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1082566,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "amrita-school-of-dentistry",
    "collegeName": "Amrita School of Dentistry, Kochi,Amrita School of Dentistry, Amrita Institute of Medical Sciences (AIMS), AIMS Ponekkara P.O, Kochi, Kerala, 682041",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 59840,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "amrita-school-of-medicine",
    "collegeName": "Amrita School of Medicine Faridabad",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 318826,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "amrita-school-of-medicine",
    "collegeName": "Amrita School of Medicine Faridabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 881922,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "amrita-school-of-medicine",
    "collegeName": "Amrita School of Medicine Faridabad,Mata Amritanandmayi Marg, Sector- 88, Faridabad, Haryana, 121002",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 376143,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "amrita-school-of-medicine",
    "collegeName": "Amrita School of Medicine Faridabad,Mata Amritanandmayi Marg, Sector- 88, Faridabad, Haryana, 121002",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1312719,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "andaman-and-nicobar-islands",
    "collegeName": "Andaman and Nicobar Islands Institute of Medical S",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 115118,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "andaman-and-nicobar-islands",
    "collegeName": "Andaman and Nicobar Islands Institute of Medical S,Director ANIIMS, DHS Annexe Building, Atlanta Point, Port Blair-744104, Andaman And Nicobar Islands, 744104",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24933,
      "OBC": 26172,
      "EWS": 29264,
      "SC": 136392,
      "ST": 162177
    }
  },
  {
    "collegeId": "andhra-medical-college-visakhapatnam",
    "collegeName": "Andhra Medical College, Visakhapatnam",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 57960,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "andhra-medical-college-visakhapatnammaharani",
    "collegeName": "Andhra Medical College, Visakhapatnam,MAHARANI PETA NEAR COLLECTORATE KGH CAMPUS VISAKHAPATNAM, Andhra Pradesh, 530002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 7267,
      "OBC": 9509,
      "EWS": 8958,
      "SC": 58709,
      "ST": null
    }
  },
  {
    "collegeId": "atal-bihari-vajpayee-institute",
    "collegeName": "Atal Bihari Vajpayee Institute of Medical Sciences & DR RML HOSPITAL, NEW DELHI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14191,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "atal-bihari-vajpayee-institute",
    "collegeName": "Atal Bihari Vajpayee Institute of Medical Sciences & DR RML HOSPITAL, NEW DELHI",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi NCR Children/ Widows of Personnel of the Armed Forces (CW) IP Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 780907,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "atal-bihari-vajpayee-institute",
    "collegeName": "Atal Bihari Vajpayee Institute of Medical Sciences & DR RML HOSPITAL, NEW DELHI",
    "type": "Government",
    "isDeemed": false,
    "quota": "IP University Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1034973,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "atal-bihari-vajpayee-institute",
    "collegeName": "Atal Bihari Vajpayee Institute of Medical Sciences & DR RML HOSPITAL, NEW DELHI,ABVIMS, Dr. RML Hospital, B.K.S. Marg, New Delhi, Delhi (NCT), 110001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 1125,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "atal-bihari-vajpayee-institute",
    "collegeName": "Atal Bihari Vajpayee Institute of Medical Sciences & DR RML HOSPITAL, NEW DELHI,ABVIMS, Dr. RML Hospital, B.K.S. Marg, New Delhi, Delhi (NCT), 110001",
    "type": "Government",
    "isDeemed": false,
    "quota": "IP University Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": 6307,
      "SC": 52344,
      "ST": 149223
    }
  },
  {
    "collegeId": "autonomous-state-medical-collage",
    "collegeName": "Autonomous State Medical Collage, Kushinagar, Uttar Pradesh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 103723,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-collage",
    "collegeName": "Autonomous State Medical Collage, Kushinagar, Uttar Pradesh,Autonomous State Medical Collage, Kubersthan Road, Harka, Kushinagar, Uttar Pradesh, 274304",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20586,
      "OBC": 20684,
      "EWS": 21278,
      "SC": 109637,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College , Fatehpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 113723,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College , Fatehpur,Autonomous State Medical College Village chittaura near Allipur GT road fatehpur, Uttar Pradesh, 212601",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18419,
      "OBC": 19151,
      "EWS": 18691,
      "SC": 107994,
      "ST": 120390
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College ,Etah",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 532642,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College ,Etah,NAGLA PADIHAR SIRAO MAHARARA LINK, PAC ROAD, SAKEET, ETAH,U.P.- 207001, Uttar Pradesh, 207001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 607261,
      "OBC": 17466,
      "EWS": 18655,
      "SC": null,
      "ST": 110052
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College Society , Mirzapur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 922467,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College Society , Mirzapur,MAA VINDHYAVASINI AUTONOMOUS STATE MEDICAL COLLEGE PIPARDARH, VISHUNDERPUR, MIRZAPUR, Uttar Pradesh, 231001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19749,
      "OBC": 881663,
      "EWS": 20369,
      "SC": 108227,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Amethi (U.P.),Autonomous State Medical College, Tiloi, Amethi (U.P.) - 229309",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 785623,
      "OBC": 20791,
      "EWS": 22368,
      "SC": 115995,
      "ST": 130900
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Ghazipur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 116411,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Ghazipur,Principal Prashasnik Bhawan MV Autonomous State Medical College RTI Chauraha Ghazipur, Uttar Pradesh, 233001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19893,
      "OBC": 20302,
      "EWS": null,
      "SC": 112171,
      "ST": 129006
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Gonda",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 384483,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Gonda,Chhavanni Sarkar Infront of Circuit House Gonda, Uttar Pradesh, 271001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 476499,
      "OBC": 20710,
      "EWS": 22520,
      "SC": 113649,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Kanpur Dehat, Uttar Pradesh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 96743,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Kanpur Dehat, Uttar Pradesh,Kumbhi, Akabarpur, Kanpur Dehat U.P., Uttar Pradesh, 209101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19368,
      "OBC": 19526,
      "EWS": 20968,
      "SC": 104163,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Lakhimpur Kheri, Uttar Pradesh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 724062,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Lakhimpur Kheri, Uttar Pradesh,Near Deokali Temple, Saidapur Bhau, Uttar Pradesh, 262701",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20292,
      "OBC": 20370,
      "EWS": 21558,
      "SC": 113284,
      "ST": 130349
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Lalitpur, U.P",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 112771,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Lalitpur, U.P,Amarpur Galla Mandi Jhansi Road Lalitpur, Uttar Pradesh, 284403",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18544,
      "OBC": 19573,
      "EWS": null,
      "SC": 106045,
      "ST": 120999
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Pilibhit, Uttar Pradesh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 114856,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Pilibhit, Uttar Pradesh,SH26 Bithaura Kalan Puranpur Road Pilibhit, Uttar Pradesh, 262001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19550,
      "OBC": 19850,
      "EWS": 21116,
      "SC": 106981,
      "ST": 126069
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Pratapgarh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 584717,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Pratapgarh,Pure Keshav Rai Gay Ghat Road Pratapgarh, Uttar Pradesh, 230001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 499745,
      "OBC": 19602,
      "EWS": 21139,
      "SC": 110246,
      "ST": 125298
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Siddharthnagar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 625200,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Siddharthnagar,Autonomous State Medical College Siddharthnagar 71 Ashok Marg Village Mudila Naugarh Uttar Prade, Uttar Pradesh, 272207",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19027,
      "OBC": 19438,
      "EWS": 20317,
      "SC": 110785,
      "ST": 122224
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Sonebhadra",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 626070,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Sonebhadra,Rounp Rd, Churk,Robertsganj, Sonebhadra, Uttar Pradesh, 231216",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20991,
      "OBC": 21261,
      "EWS": null,
      "SC": 114703,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Sultanpur, Uttar Pradesh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 108495,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical College, Sultanpur, Uttar Pradesh,Autonomous State Medical College Dubepur Sultanpur, Uttar Pradesh, 227808",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20045,
      "OBC": 20366,
      "EWS": null,
      "SC": 111780,
      "ST": 127412
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical college Society Hardoi",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 108144,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous State Medical college Society Hardoi,Gaura Danda, Sitapur Road, Hardoi, Uttar Pradesh, 241001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18529,
      "OBC": 19118,
      "EWS": 19875,
      "SC": 106101,
      "ST": 117329
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous state Medical College, Kaushambi",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 116120,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous state Medical College, Kaushambi,Kadipur Manjhanpur Kaushambi District, Uttar Pradesh, 212207",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20368,
      "OBC": 20579,
      "EWS": null,
      "SC": 112790,
      "ST": 128548
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous state Medical College, Sehud , Auraiya",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1208862,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "autonomous-state-medical-college",
    "collegeName": "Autonomous state Medical College, Sehud , Auraiya,Sehud Auraiya, Uttar Pradesh, 206122",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19559,
      "OBC": 19861,
      "EWS": 1190424,
      "SC": null,
      "ST": 125968
    }
  },
  {
    "collegeId": "bj-government-medical-college",
    "collegeName": "B.J. Government Medical College, Pune",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 639172,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bj-government-medical-college",
    "collegeName": "B.J. Government Medical College, Pune,Sassoon Hospital Compound, Near Pune Railway station J.P. Narayan Road, Pune, Maharashtra, 411001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 9284,
      "EWS": 10540,
      "SC": 76292,
      "ST": 105614
    }
  },
  {
    "collegeId": "bj-medical-college-ahmedabad",
    "collegeName": "B.J. MEDICAL COLLEGE, AHMEDABAD",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 245143,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bj-medical-college-ahmedabadbj",
    "collegeName": "B.J. MEDICAL COLLEGE, AHMEDABAD,B.J. Medical College, New Civil Hospital Campus, Asarwa, Ahmedabad 380016, Gujarat, 380016",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 5015,
      "EWS": 3714,
      "SC": null,
      "ST": 73018
    }
  },
  {
    "collegeId": "blde-university-bijapur",
    "collegeName": "B.L.D.E University, Bijapur",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 267057,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "blde-university-bijapur",
    "collegeName": "B.L.D.E University, Bijapur",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1259151,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "blde-university-bijapursmt-bangaramma",
    "collegeName": "B.L.D.E University, Bijapur,SMT BANGARAMMA SAJJAN CAMPUS B M PATIL ROAD VIJAYAPURA KARNATAKA, Karnataka, 586103",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 302710,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "blde-university-bijapursmt-bangaramma",
    "collegeName": "B.L.D.E University, Bijapur,SMT BANGARAMMA SAJJAN CAMPUS B M PATIL ROAD VIJAYAPURA KARNATAKA, Karnataka, 586103",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1053390,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "brd-medical-college-gorakhpur",
    "collegeName": "B.R.D. MEDICAL COLLEGE, GORAKHPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 70161,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "brd-medical-college-gorakhpurmaharajgan",
    "collegeName": "B.R.D. MEDICAL COLLEGE, GORAKHPUR,MAHARAJGAN J ROAD,GORAKHPUR, Uttar Pradesh, 273013",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11526,
      "OBC": 12326,
      "EWS": 12710,
      "SC": 90834,
      "ST": 104924
    }
  },
  {
    "collegeId": "bankura-sammilani-med-collbankura",
    "collegeName": "BANKURA SAMMILANI MED COLL,BANKURA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 769009,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bankura-sammilani-med-collbankuraprincipal",
    "collegeName": "BANKURA SAMMILANI MED COLL,BANKURA,Principal, Bankura Sammilani Medical College, Lokepur, PO- Kenduadihi, Bankura, Pin- 722102, West Bengal, 722102",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20819,
      "OBC": 22143,
      "EWS": 21810,
      "SC": 127450,
      "ST": 140230
    }
  },
  {
    "collegeId": "belgaum-inst-of-medical",
    "collegeName": "BELGAUM INST. OF MEDICAL SCI., BELGAUM",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1167468,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "belgaum-inst-of-medical",
    "collegeName": "BELGAUM INST. OF MEDICAL SCI., BELGAUM,DR B R AMBEDKAR ROAD BELAGAVI., Karnataka, 590001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15950,
      "OBC": 18008,
      "EWS": 20730,
      "SC": 112527,
      "ST": 122194
    }
  },
  {
    "collegeId": "bhaarath-medical-college-and",
    "collegeName": "BHAARATH MEDICAL COLLEGE AND HOSPITAL",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 775062,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bhaarath-medical-college-and",
    "collegeName": "BHAARATH MEDICAL COLLEGE AND HOSPITAL,173, AGARAM MAIN ROAD , SELAIYUR, TAMBARAM CHENNAI - 600073, Tamil Nadu, 600073",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 870855,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bidar-institute-of-medical",
    "collegeName": "BIDAR INSTITUTE OF MEDICAL SCI., BIDAR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 650531,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bidar-institute-of-medical",
    "collegeName": "BIDAR INSTITUTE OF MEDICAL SCI., BIDAR,BIDAR INSTITUTE OF MEDICAL SCIENCES BIDAR UDGIR ROAD BIDAR-585401, Karnataka, 585401",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22069,
      "OBC": 22245,
      "EWS": null,
      "SC": 121422,
      "ST": 144224
    }
  },
  {
    "collegeId": "bps-govt-med-college",
    "collegeName": "BPS Govt. Med. College, Sonepat(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 644774,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bps-govt-med-college",
    "collegeName": "BPS Govt. Med. College, Sonepat,DIRECTOR, BPS GOVT MEDICAL COLLEGE FOR WOMEN KHANPUR KALAN SONEPAT-131305, Haryana, 131305 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11635,
      "OBC": 14981,
      "EWS": 16980,
      "SC": 94209,
      "ST": 122410
    }
  },
  {
    "collegeId": "bundelkhand-medical-college-sagar",
    "collegeName": "BUNDELKHAND MEDICAL COLLEGE, SAGAR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 88063,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bundelkhand-medical-college-sagarshivaji",
    "collegeName": "BUNDELKHAND MEDICAL COLLEGE, SAGAR,Shivaji ward, tili Road, Sagar, Madhya Pradesh, 470001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15990,
      "OBC": 16677,
      "EWS": null,
      "SC": 102806,
      "ST": 105466
    }
  },
  {
    "collegeId": "burdwan-medical-collegeburdwan",
    "collegeName": "BURDWAN MEDICAL COLLEGE,BURDWAN",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 396838,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "burdwan-medical-collegeburdwanburd-wan",
    "collegeName": "BURDWAN MEDICAL COLLEGE,BURDWAN,BURD WAN MEDICAL COLLEGE, BABURBAG, POST- RAJBATI, DIST- PURBA BARDHAMAN, PIN-713104,WEST BENGAL, West Bengal, 713104",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 999414,
      "OBC": 19610,
      "EWS": 19830,
      "SC": 110836,
      "ST": null
    }
  },
  {
    "collegeId": "bv-deemed-uni-med",
    "collegeName": "BV Deemed Uni. Med. College and Hos., Sangli",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 552224,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bv-deemed-uni-med",
    "collegeName": "BV Deemed Uni. Med. College and Hos., Sangli",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1313591,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bv-deemed-uni-med",
    "collegeName": "BV Deemed Uni. Med. College and Hos., Sangli,Sangli Miraj Road Wanlesswadi Sangli Maharashtra, Maharashtra, 416416",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 665302,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bv-deemed-uni-med",
    "collegeName": "BV Deemed Uni. Med. College and Hos., Sangli,Sangli Miraj Road Wanlesswadi Sangli Maharashtra, Maharashtra, 416416",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1201386,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bvdu-dental-college-and",
    "collegeName": "BVDU Dental College and Hospital, Navi Mumbai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 718996,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bvdu-dental-college-and",
    "collegeName": "BVDU Dental College and Hospital, Navi Mumbai",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 789711,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bvdu-dental-college-and",
    "collegeName": "BVDU Dental College and Hospital, Navi Mumbai,Bharati Vidyapeeth Dental College and Hospital, Sec.7, Belapur Navi Mumbai., Maharashtra, 400614",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 451127,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bvdu-dental-college-and",
    "collegeName": "BVDU Dental College and Hospital, Navi Mumbai,Bharati Vidyapeeth Dental College and Hospital, Sec.7, Belapur Navi Mumbai., Maharashtra, 400614",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1179300,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bvdu-dental-college-and",
    "collegeName": "BVDU Dental College and Hospital, Sangli",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 753902,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bvdu-dental-college-and",
    "collegeName": "BVDU Dental College and Hospital, Sangli",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1081720,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bvdu-dental-college-and",
    "collegeName": "BVDU Dental College and Hospital, Sangli,Sangli-Miraj Road, Wanlesswadi Sangli., Maharashtra, 416414",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 508172,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bvdu-dental-college-and",
    "collegeName": "BVDU Dental College and Hospital, Sangli,Sangli-Miraj Road, Wanlesswadi Sangli., Maharashtra, 416414",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 977886,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "baba-kinaram-autonomous-state",
    "collegeName": "Baba Kinaram Autonomous State Medical College, Chandauli",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 948797,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "baba-kinaram-autonomous-state",
    "collegeName": "Baba Kinaram Autonomous State Medical College, Chandauli,Baba kinaram autonomous state Medical college , Naubatpur ,Chandauli, Uttar Pradesh, 232110",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20847,
      "OBC": 21303,
      "EWS": 22654,
      "SC": 114454,
      "ST": null
    }
  },
  {
    "collegeId": "bangalore-medical-college-and",
    "collegeName": "Bangalore Medical College and Research Institute",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 560904,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bangalore-medical-college-and",
    "collegeName": "Bangalore Medical College and Research Institute,K R ROAD FORT BENGALURU, Karnataka, 560002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1549,
      "OBC": 5352,
      "EWS": 7252,
      "SC": 42980,
      "ST": null
    }
  },
  {
    "collegeId": "barasat-government-medical-college",
    "collegeName": "Barasat Government Medical College & Hospital, West Bengal",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 114634,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "barasat-government-medical-college",
    "collegeName": "Barasat Government Medical College & Hospital, West Bengal,80 Jessore Road Banamalipur JL NO 80and Uttorhat JL no 78 Barasat North Twenty Four Parganas 700124, West Bengal, 700124",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19805,
      "OBC": 21232,
      "EWS": 21895,
      "SC": 122842,
      "ST": 145672
    }
  },
  {
    "collegeId": "bharati-vidyapeeth-du-dental",
    "collegeName": "Bharati Vidyapeeth DU Dental College and Hospt., Pune",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 598360,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bharati-vidyapeeth-du-dental",
    "collegeName": "Bharati Vidyapeeth DU Dental College and Hospt., Pune",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1120102,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bharati-vidyapeeth-du-dental",
    "collegeName": "Bharati Vidyapeeth DU Dental College and Hospt., Pune,Bharati Vidyapeeth (Deemed to be University) Dental College and Hospital Pune, Maharashtra, 411043",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 441475,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bharati-vidyapeeth-du-dental",
    "collegeName": "Bharati Vidyapeeth DU Dental College and Hospt., Pune,Bharati Vidyapeeth (Deemed to be University) Dental College and Hospital Pune, Maharashtra, 411043",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1103793,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bharati-vidyapeeth-du-medical",
    "collegeName": "Bharati Vidyapeeth DU Medical College",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 510405,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bharati-vidyapeeth-du-medical",
    "collegeName": "Bharati Vidyapeeth DU Medical College",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1277668,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bharati-vidyapeeth-du-medical",
    "collegeName": "Bharati Vidyapeeth DU Medical College,Dhankawadi, Pune-Satara Road, Pune, Maharashtra, 411043",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 606370,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bharati-vidyapeeth-du-medical",
    "collegeName": "Bharati Vidyapeeth DU Medical College,Dhankawadi, Pune-Satara Road, Pune, Maharashtra, 411043",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1253316,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bhima-bhoi-medical-college",
    "collegeName": "Bhima Bhoi Medical College and Hospital , Balangir",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 140348,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "bhima-bhoi-medical-college",
    "collegeName": "Bhima Bhoi Medical College and Hospital , Balangir,PO - Rajendra College, District- Balangir, Odisha., Odisha, 767002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21331,
      "OBC": null,
      "EWS": 23243,
      "SC": 88371,
      "ST": null
    }
  },
  {
    "collegeId": "burdwan-dental-college-hospital",
    "collegeName": "Burdwan Dental College & Hospital, Burdwan",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1241544,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "burdwan-dental-college-hospital",
    "collegeName": "Burdwan Dental College & Hospital, Burdwan,POWER HOUSE PARA, BURDWAN TOWN. PURBA BARDHAMAN. W.B- 713101, West Bengal, 713101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 36220,
      "OBC": 1252244,
      "EWS": 39196,
      "SC": 173603,
      "ST": 223275
    }
  },
  {
    "collegeId": "c-institute-of-medical",
    "collegeName": "C. Institute of Medical Sciences, Chamarajanagar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 837599,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "c-institute-of-medical",
    "collegeName": "C. Institute of Medical Sciences, Chamarajanagar,SY NO.124, YEDAPURA VILLAGE , KASABA HOBLI, CHAMARAJANAGARA TALUK AND DISTRICT, Karnataka, 571313",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21567,
      "OBC": 21868,
      "EWS": 27909,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "calcutta-national-med-collkolkata",
    "collegeName": "CALCUTTA NATIONAL MED COLL,KOLKATA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 592129,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "calcutta-national-med-collkolkata32",
    "collegeName": "CALCUTTA NATIONAL MED COLL,KOLKATA,32, GORACHAND ROAD, PARK CIRCUS, KOLKATA - 700014, West Bengal, 700014",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13687,
      "OBC": 14788,
      "EWS": 16186,
      "SC": 86954,
      "ST": 117345
    }
  },
  {
    "collegeId": "chengalpattu-medical-collchengalpattu",
    "collegeName": "CHENGALPATTU MEDICAL COLL,CHENGALPATTU",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 63637,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "chengalpattu-medical-collchengalpattugst-road",
    "collegeName": "CHENGALPATTU MEDICAL COLL,CHENGALPATTU,GST ROAD, CHENGALPATTU-603 001 CHENGALPATTU DISTRICT, Tamil Nadu, 603001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15110,
      "OBC": 15646,
      "EWS": 27052,
      "SC": 75077,
      "ST": 145518
    }
  },
  {
    "collegeId": "chhattisgarh-institute-of-medical",
    "collegeName": "CHHATTISGARH INSTITUTE OF MEDICAL SCIENCES, BILASP",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 746311,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "chhattisgarh-institute-of-medical",
    "collegeName": "CHHATTISGARH INSTITUTE OF MEDICAL SCIENCES, BILASP,GOND PARA, SADAR BAZAAR BILASPUR - 495001 (CG), Chhattisgarh, 495001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16810,
      "OBC": 17953,
      "EWS": 17372,
      "SC": 91700,
      "ST": 117620
    }
  },
  {
    "collegeId": "chikkaballapura-institute-of-medical",
    "collegeName": "CHIKKABALLAPURA INSTITUTE OF MEDICAL SCIENCES, KARNATAKA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 724237,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "chikkaballapura-institute-of-medical",
    "collegeName": "CHIKKABALLAPURA INSTITUTE OF MEDICAL SCIENCES, KARNATAKA,AROORU VILLAGE,PERESANDRA POST, CHIKKABALLAPUR KARANATAKA, Karnataka, 562104",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21922,
      "OBC": 22290,
      "EWS": 22427,
      "SC": 130924,
      "ST": null
    }
  },
  {
    "collegeId": "coimbatore-medical-collegecoimbatore",
    "collegeName": "COIMBATORE MEDICAL COLLEGE,COIMBATORE",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 829466,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "coimbatore-medical-collegecoimbatoreciv-il",
    "collegeName": "COIMBATORE MEDICAL COLLEGE,COIMBATORE,CIV IL AERODROME POST, AVINASHI ROAD, PEELAMEDU, COIMBATORE, Tamil Nadu, 641014",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11002,
      "OBC": 12085,
      "EWS": 24304,
      "SC": 86592,
      "ST": 142895
    }
  },
  {
    "collegeId": "college-of-medicine-and",
    "collegeName": "COLLEGE OF MEDICINE and JNM HOSPITAL, KALYANI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1154614,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-medicine-and",
    "collegeName": "COLLEGE OF MEDICINE and JNM HOSPITAL, KALYANI,A Block PS- Kalyani District - Nadia,West Bengal,Pin 741235, West Bengal, 741235",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20065,
      "OBC": 20681,
      "EWS": null,
      "SC": 118989,
      "ST": 129596
    }
  },
  {
    "collegeId": "chandulal-chandrakar-memorial-government",
    "collegeName": "Chandulal Chandrakar Memorial Government Medical College, Durg",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 771971,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "chandulal-chandrakar-memorial-government",
    "collegeName": "Chandulal Chandrakar Memorial Government Medical College, Durg,Chandulal Chandrakar Memorial Government Medical College, Kurud Road, Near Rungta College, Kachandur, Chhattisgarh, 490024",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22435,
      "OBC": 22943,
      "EWS": 23498,
      "SC": 115932,
      "ST": 138082
    }
  },
  {
    "collegeId": "chettinad-hos-and-res",
    "collegeName": "Chettinad Hos. and Res. Inst., Kancheepuram",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 703700,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "chettinad-hos-and-res",
    "collegeName": "Chettinad Hos. and Res. Inst., Kancheepuram,Rajiv Gandhi Salai, Kelambakkam, Chengalpattu District, Tamil Nadu, 603103",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 768688,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "chhindwara-institute-of-medical",
    "collegeName": "Chhindwara Institute of Medical Sciences",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 821817,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "chhindwara-institute-of-medical",
    "collegeName": "Chhindwara Institute of Medical Sciences,Teachers Colony, Chhindwara, Madhya Pradesh 480001, Madhya Pradesh, 480001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 894163,
      "OBC": 19351,
      "EWS": 20722,
      "SC": 102516,
      "ST": 116688
    }
  },
  {
    "collegeId": "chikkamagaluru-institute-of-medical",
    "collegeName": "Chikkamagaluru Institute of Medical Sciences",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 145290,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "chikkamagaluru-institute-of-medical",
    "collegeName": "Chikkamagaluru Institute of Medical Sciences,DIRECTOR CHIKKAMAGALURU INSTITUTE OF MEDICAL SCIENCES ARALAGUPPE MALLEGOWDA DISTRICT HOSPITAL TEG, Karnataka, 577101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22507,
      "OBC": 23021,
      "EWS": 28712,
      "SC": 132247,
      "ST": 152719
    }
  },
  {
    "collegeId": "chitradurga-medical-college-and",
    "collegeName": "Chitradurga Medical College and Research Institute",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 148752,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "chitradurga-medical-college-and",
    "collegeName": "Chitradurga Medical College and Research Institute,P B Road Chitradurga, Karnataka, 577501",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24472,
      "OBC": 24928,
      "EWS": 29043,
      "SC": 132940,
      "ST": 147618
    }
  },
  {
    "collegeId": "college-government-medical-college",
    "collegeName": "College Government Medical College Alwar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 92648,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-government-medical-college",
    "collegeName": "College Government Medical College Alwar,Government Medical College Alwar Jail Circle alwar, Rajasthan, 301001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10978,
      "OBC": 12922,
      "EWS": null,
      "SC": 91240,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-ahilya",
    "collegeName": "College of Nursing Ahilya Bai College of Nursing, Maulana Azad Medical College(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 169059,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-ahilya",
    "collegeName": "College of Nursing Ahilya Bai College of Nursing, Maulana Azad Medical College(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing Delhi NCR",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 407956,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-ahilya",
    "collegeName": "College of Nursing Ahilya Bai College of Nursing, Maulana Azad Medical College(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing Delhi NCR CW Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 243149,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-ahilya",
    "collegeName": "College of Nursing Ahilya Bai College of Nursing, Maulana Azad Medical College,Ahilya Bai College of Nursing Lok Nayak Hospital Jawaharlal Nehru Marg, Delhi (NCT), 110002 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 49766,
      "OBC": 68093,
      "EWS": 85733,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-ahilya",
    "collegeName": "College of Nursing Ahilya Bai College of Nursing, Maulana Azad Medical College,Ahilya Bai College of Nursing Lok Nayak Hospital Jawaharlal Nehru Marg, Delhi (NCT), 110002 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing Delhi NCR",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 115812,
      "OBC": 117794,
      "EWS": null,
      "SC": 220410,
      "ST": 420562
    }
  },
  {
    "collegeId": "college-of-nursing-bhu",
    "collegeName": "College of Nursing BHU, VARANASI",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1293619,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-bhu",
    "collegeName": "College of Nursing BHU, VARANASI,The Director Institute of Medical Sciences Banaras Hindu University, Uttar Pradesh, 221005",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 68095,
      "OBC": 77988,
      "EWS": 84497,
      "SC": 209515,
      "ST": 275286
    }
  },
  {
    "collegeId": "college-of-nursing-dr",
    "collegeName": "College of Nursing Dr. RML Hospital, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 322082,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-dr",
    "collegeName": "College of Nursing Dr. RML Hospital, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing IP CW Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 601632,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-dr",
    "collegeName": "College of Nursing Dr. RML Hospital, New Delhi,Baba Kharak Singh Marg College of Nursing Dr RML Hospital, Delhi (NCT), 110001 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 100396,
      "OBC": 106257,
      "EWS": 104434,
      "SC": 245360,
      "ST": 339863
    }
  },
  {
    "collegeId": "college-of-nursing-florence",
    "collegeName": "College of Nursing Florence Nightingale CON, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 236980,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-florence",
    "collegeName": "College of Nursing Florence Nightingale CON, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing Delhi NCR",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 269166,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-florence",
    "collegeName": "College of Nursing Florence Nightingale CON, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing Delhi NCR CW Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 594580,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-florence",
    "collegeName": "College of Nursing Florence Nightingale CON, New Delhi,collegeofnursinggtbh@g mail.com, Delhi (NCT), 110095 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 95929,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": 339083
    }
  },
  {
    "collegeId": "college-of-nursing-florence",
    "collegeName": "College of Nursing Florence Nightingale CON, New Delhi,collegeofnursinggtbh@g mail.com, Delhi (NCT), 110095 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing Delhi NCR",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 143879,
      "OBC": 175489,
      "EWS": 188085,
      "SC": 270888,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-lhmc",
    "collegeName": "College of Nursing LHMC, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 322638,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-lhmc",
    "collegeName": "College of Nursing LHMC, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing Delhi NCR CW Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 422638,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-lhmc",
    "collegeName": "College of Nursing LHMC, New Delhi,College of Nursing Lady Hardinge Medical College & Associated Hospitals New Delhi, Delhi (NCT), 110001 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 65320,
      "OBC": 80957,
      "EWS": null,
      "SC": 228584,
      "ST": 333625
    }
  },
  {
    "collegeId": "college-of-nursing-rak",
    "collegeName": "College of Nursing RAK CON, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 318664,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-rak",
    "collegeName": "College of Nursing RAK CON, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing Delhi NCR CW Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 759252,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-rak",
    "collegeName": "College of Nursing RAK CON, New Delhi,Rajkumari Amrit Kaur College of Nursing Lajpat Nagar IV Near Moolchand Metro Station, Delhi (NCT), 110024 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 99572,
      "OBC": 106175,
      "EWS": null,
      "SC": 238761,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-rak",
    "collegeName": "College of Nursing RAK CON, New Delhi,Rajkumari Amrit Kaur College of Nursing Lajpat Nagar IV Near Moolchand Metro Station, Delhi (NCT), 110024 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing Delhi NCR CW Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 340245,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-safdarjung",
    "collegeName": "College of Nursing Safdarjung Hospital, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 333802,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-safdarjung",
    "collegeName": "College of Nursing Safdarjung Hospital, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing IP CW Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 427898,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "college-of-nursing-safdarjung",
    "collegeName": "College of Nursing Safdarjung Hospital, New Delhi,College of Nursing VMMC and Safdarjang Hospital New Delhi, Delhi (NCT), 110029 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "B.Sc Nursing All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 84280,
      "OBC": 93425,
      "EWS": 100095,
      "SC": 225329,
      "ST": 313348
    }
  },
  {
    "collegeId": "datta-meghe-medical-college",
    "collegeName": "DATTA MEGHE MEDICAL COLLEGE WANADONGRI HINGNA NAGPUR",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 494727,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "datta-meghe-medical-college",
    "collegeName": "DATTA MEGHE MEDICAL COLLEGE WANADONGRI HINGNA NAGPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1289208,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "datta-meghe-medical-college",
    "collegeName": "DATTA MEGHE MEDICAL COLLEGE WANADONGRI HINGNA NAGPUR,Hinaga Road Wanadongri Nagpur Maharashtra India, Maharashtra, 441110",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 642393,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "datta-meghe-medical-college",
    "collegeName": "DATTA MEGHE MEDICAL COLLEGE WANADONGRI HINGNA NAGPUR,Hinaga Road Wanadongri Nagpur Maharashtra India, Maharashtra, 441110",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1300872,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dc-rims-imphal",
    "collegeName": "DC, RIMS, Imphal",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 214605,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dc-rims-imphalpo-lamphelpat",
    "collegeName": "DC, RIMS, Imphal,PO Lamphelpat, Imphal West District, Manipur, 795004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 40636,
      "OBC": 50795,
      "EWS": null,
      "SC": 167580,
      "ST": 226640
    }
  },
  {
    "collegeId": "dr-r-ahmed-dentcoll",
    "collegeName": "DR. R. AHMED DENT.COLL & HOSP,KOLKATA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 157421,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-r-ahmed-dentcoll",
    "collegeName": "DR. R. AHMED DENT.COLL & HOSP,KOLKATA,114 AJC BOSE ROAD, West Bengal, 700014",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 34033,
      "OBC": 37403,
      "EWS": null,
      "SC": 176692,
      "ST": null
    }
  },
  {
    "collegeId": "dr-vaishampayam-memorial-mcsholapur",
    "collegeName": "DR. VAISHAMPAYAM MEMORIAL M.C.,SHOLAPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 109542,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-vaishampayam-memorial-mcsholapurin",
    "collegeName": "DR. VAISHAMPAYAM MEMORIAL M.C.,SHOLAPUR,In Front of District Civil Court, Solapur., Maharashtra, 413003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17859,
      "OBC": 19949,
      "EWS": 21916,
      "SC": 111610,
      "ST": null
    }
  },
  {
    "collegeId": "drrajendra-prasad-mc-tanda",
    "collegeName": "DR.RAJENDRA PRASAD MC, TANDA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 921855,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "drrajendra-prasad-mc-tandadrrajendra",
    "collegeName": "DR.RAJENDRA PRASAD MC, TANDA,Dr.Rajendra Prasad Govt.Medical College Kangra at Tanda, H.P., Himachal Pradesh, 176002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6983,
      "OBC": 8273,
      "EWS": 10086,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "drscgovt-medical-collegenanded",
    "collegeName": "DR.S.C.GOVT MEDICAL COLLEGE,,NANDED",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 637826,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "drscgovt-medical-collegenandedvishnu-puri",
    "collegeName": "DR.S.C.GOVT MEDICAL COLLEGE,,NANDED,VISHNU PURI NANDED MAHARASHTRA 431606, Maharashtra, 431606",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18449,
      "OBC": 144418,
      "EWS": 23307,
      "SC": 112614,
      "ST": 132198
    }
  },
  {
    "collegeId": "drsn-medical-college-jodhpur",
    "collegeName": "DR.S.N. MEDICAL COLLEGE, JODHPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 783374,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "drsn-medical-college-jodhpurresidency",
    "collegeName": "DR.S.N. MEDICAL COLLEGE, JODHPUR,RESIDENCY ROAD SHASTRI NAGAR JODHPUR RAJASTHAN 342 003, Rajasthan, 342003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6102,
      "OBC": 6314,
      "EWS": null,
      "SC": 60072,
      "ST": 74989
    }
  },
  {
    "collegeId": "dy-patil-university-school",
    "collegeName": "DY Patil University School of Medicine, Taluka Maval, Pune",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 505840,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dy-patil-university-school",
    "collegeName": "DY Patil University School of Medicine, Taluka Maval, Pune",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1063339,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dy-patil-university-school",
    "collegeName": "DY Patil University School of Medicine, Taluka Maval, Pune,Survey no 124 & 126 MIDC Road, Ambi, Taluka Maval, Dist Pune- 410506",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 661567,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dy-patil-university-school",
    "collegeName": "DY Patil University School of Medicine, Taluka Maval, Pune,Survey no 124 & 126 MIDC Road, Ambi, Taluka Maval, Dist Pune- 410506",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1269276,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "darbhanga-medical-college-laheriasarai",
    "collegeName": "Darbhanga Medical College, Laheriasarai",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 419431,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "darbhanga-medical-college-laheriasaraisheetal",
    "collegeName": "Darbhanga Medical College, Laheriasarai,Sheetal Prasad Marg, Laheriasarai, Darbhanga, Bihar, 846003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11898,
      "OBC": 12080,
      "EWS": null,
      "SC": 110777,
      "ST": 119066
    }
  },
  {
    "collegeId": "deben-mahata-government-medical",
    "collegeName": "Deben Mahata Government Medical College & Hospital",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 139626,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "deben-mahata-government-medical",
    "collegeName": "Deben Mahata Government Medical College & Hospital,Vill Hatuara PO Vivekananda Nagar PS Purulia Muffasil Dist Purulia Pin 723147, West Bengal, 723147",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 973018,
      "OBC": 23889,
      "EWS": 25011,
      "SC": null,
      "ST": 148191
    }
  },
  {
    "collegeId": "dental-institue-rims-ranchi",
    "collegeName": "Dental Institue, RIMS, Ranchi",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 187194,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dental-institue-rims-ranchidental",
    "collegeName": "Dental Institue, RIMS, Ranchi,Dental Institute, Rajendra Institute of Medical Sciences, Bariatu, Ranchi, Jharkhand, 843009",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 39431,
      "OBC": 43187,
      "EWS": null,
      "SC": null,
      "ST": 227736
    }
  },
  {
    "collegeId": "dhubri-medical-college-assam",
    "collegeName": "Dhubri Medical College, Assam",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1256849,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dhubri-medical-college-assampo",
    "collegeName": "Dhubri Medical College, Assam,P.O. Jhagrarpar SPO, Dhubri, Assam, PIN - 783325, Assam, 783325",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25408,
      "OBC": 25605,
      "EWS": null,
      "SC": 135014,
      "ST": 155440
    }
  },
  {
    "collegeId": "diamond-harbour-govt-medical",
    "collegeName": "Diamond Harbour Govt Medical College",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 930114,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "diamond-harbour-govt-medical",
    "collegeName": "Diamond Harbour Govt Medical College,New Town, Post-Diamond Harbour, PS- Diamond Harbour, District South 24 Parganas, West Bengal, 743331",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21828,
      "OBC": 955463,
      "EWS": 22829,
      "SC": 126854,
      "ST": 141691
    }
  },
  {
    "collegeId": "diphu-medical-college-hospital",
    "collegeName": "Diphu Medical College & Hospital, Assam",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 116747,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "diphu-medical-college-hospital",
    "collegeName": "Diphu Medical College & Hospital, Assam,principaldiphu@gmail.c om, Assam, 782462",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25615,
      "OBC": 25779,
      "EWS": 26545,
      "SC": 135563,
      "ST": 158458
    }
  },
  {
    "collegeId": "dr-ram-manohar-lohia",
    "collegeName": "Dr Ram Manohar Lohia Inst. of Med. Sce., Lucknow",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 72634,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-ram-manohar-lohia",
    "collegeName": "Dr Ram Manohar Lohia Inst. of Med. Sce., Lucknow,Vibhuti Khand Gomti Nagar Lucknow, Uttar Pradesh, 226010",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6184,
      "OBC": 6814,
      "EWS": 6389,
      "SC": 42380,
      "ST": null
    }
  },
  {
    "collegeId": "dr-br-ambedkar-state",
    "collegeName": "Dr. B.R. Ambedkar State Institute of Medical Sciences",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 73990,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-br-ambedkar-state",
    "collegeName": "Dr. B.R. Ambedkar State Institute of Medical Sciences ,Sector 56 Mohali, Punjab, 160055",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11918,
      "OBC": 15210,
      "EWS": 17802,
      "SC": 98965,
      "ST": 66565
    }
  },
  {
    "collegeId": "dr-bsa-medical-college",
    "collegeName": "Dr. B.S.A. Medical College, Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 28862,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-bsa-medical-college",
    "collegeName": "Dr. B.S.A. Medical College, Delhi,DR.BABA SAHEB AMBEDKAR MEDICAL COLLEGE AND HOSPITAL, ROHINI SEC-6, DELHI- 110085, Delhi (NCT), 110085",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1044,
      "OBC": 3806,
      "EWS": null,
      "SC": null,
      "ST": 49964
    }
  },
  {
    "collegeId": "dr-dy-patil-dental",
    "collegeName": "Dr. DY Patil Dental College and Hosp. Navi Mumbai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 720648,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-dental",
    "collegeName": "Dr. DY Patil Dental College and Hosp. Navi Mumbai",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1095938,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-dental",
    "collegeName": "Dr. DY Patil Dental College and Hosp. Navi Mumbai,Dr. D. Y. Patil Vidyanagar, Sector 7, Nerul, Navi Mumbai, Maharashtra, 400706",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 686087,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-dental",
    "collegeName": "Dr. DY Patil Dental College and Hosp. Navi Mumbai,Dr. D. Y. Patil Vidyanagar, Sector 7, Nerul, Navi Mumbai, Maharashtra, 400706",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1065673,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-dental",
    "collegeName": "Dr. DY Patil Dental College and Hosp. Pune",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 593405,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-dental",
    "collegeName": "Dr. DY Patil Dental College and Hosp. Pune",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1056215,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-dental",
    "collegeName": "Dr. DY Patil Dental College and Hosp. Pune,Sant Tukaram Nagar, Pimpri, Pune - 411018, Maharashtra, 411018",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 498033,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-dental",
    "collegeName": "Dr. DY Patil Dental College and Hosp. Pune,Sant Tukaram Nagar, Pimpri, Pune - 411018, Maharashtra, 411018",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1063333,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-medical",
    "collegeName": "Dr. DY Patil Medical College and Hospt., Pune",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 438141,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-medical",
    "collegeName": "Dr. DY Patil Medical College and Hospt., Pune",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1053993,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-medical",
    "collegeName": "Dr. DY Patil Medical College and Hospt., Pune,Dr. D. Y. Patil Medical College, Hospital and Research Centre, Sant Tukaram Nagar, Pimpri, Pune., Maharashtra, 411018",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 525844,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-medical",
    "collegeName": "Dr. DY Patil Medical College and Hospt., Pune,Dr. D. Y. Patil Medical College, Hospital and Research Centre, Sant Tukaram Nagar, Pimpri, Pune., Maharashtra, 411018",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1095766,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-medical",
    "collegeName": "Dr. DY Patil Medical College, Navi Mumbai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 457967,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-medical",
    "collegeName": "Dr. DY Patil Medical College, Navi Mumbai",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1241642,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-medical",
    "collegeName": "Dr. DY Patil Medical College, Navi Mumbai,Plot No. 2, Sector 7, Nerul, Navi Mumbai, Maharashtra, Maharashtra, 400706",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 535775,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dy-patil-medical",
    "collegeName": "Dr. DY Patil Medical College, Navi Mumbai,Plot No. 2, Sector 7, Nerul, Navi Mumbai, Maharashtra, Maharashtra, 400706",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 878609,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dyp-edu-soc",
    "collegeName": "Dr. DYP Edu. Soc. Deemed Uni., Kolhapur",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 397153,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dyp-edu-soc",
    "collegeName": "Dr. DYP Edu. Soc. Deemed Uni., Kolhapur",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1100237,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dyp-edu-soc",
    "collegeName": "Dr. DYP Edu. Soc. Deemed Uni., Kolhapur,869, E Ward, D. Y. Patil Vidyanagar, Kasaba Bavada, Kolhapur 416006, Maharashtra, 416006",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 554134,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-dyp-edu-soc",
    "collegeName": "Dr. DYP Edu. Soc. Deemed Uni., Kolhapur,869, E Ward, D. Y. Patil Vidyanagar, Kasaba Bavada, Kolhapur 416006, Maharashtra, 416006",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1272098,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-ys-parmar-govt",
    "collegeName": "Dr. YS Parmar Govt. Medical College, Nahan",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 96524,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-ys-parmar-govt",
    "collegeName": "Dr. YS Parmar Govt. Medical College, Nahan,Nahan, District Sirmaur, Himachal Pradesh, Himachal Pradesh, 173001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13273,
      "OBC": 14674,
      "EWS": 13312,
      "SC": 101378,
      "ST": 112774
    }
  },
  {
    "collegeId": "dr-ziauddin-ahmed-dental",
    "collegeName": "Dr. Ziauddin Ahmed Dental College and Hospital,ALIGARH",
    "type": "Government",
    "isDeemed": false,
    "quota": "(AMU) Self finance All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 71193,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-ziauddin-ahmed-dental",
    "collegeName": "Dr. Ziauddin Ahmed Dental College and Hospital,ALIGARH",
    "type": "Government",
    "isDeemed": false,
    "quota": "(AMU)Self finance internal",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 108332,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-ziauddin-ahmed-dental",
    "collegeName": "Dr. Ziauddin Ahmed Dental College and Hospital,ALIGARH",
    "type": "Government",
    "isDeemed": false,
    "quota": "Aligarh Muslim University (AMU) Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 56576,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-ziauddin-ahmed-dental",
    "collegeName": "Dr. Ziauddin Ahmed Dental College and Hospital,ALIGARH",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian(AM U)Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 945143,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-ziauddin-ahmed-dental",
    "collegeName": "Dr. Ziauddin Ahmed Dental College and Hospital,ALIGARH",
    "type": "Government",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 36468,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-ziauddin-ahmed-dental",
    "collegeName": "Dr. Ziauddin Ahmed Dental College and Hospital,ALIGARH,ALIGARH MUSLIM UNIVERSITY, ALIGARH, Uttar Pradesh, 202002",
    "type": "Government",
    "isDeemed": false,
    "quota": "(AMU) Self finance All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 57937,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-ziauddin-ahmed-dental",
    "collegeName": "Dr. Ziauddin Ahmed Dental College and Hospital,ALIGARH,ALIGARH MUSLIM UNIVERSITY, ALIGARH, Uttar Pradesh, 202002",
    "type": "Government",
    "isDeemed": false,
    "quota": "Aligarh Muslim University (AMU) Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 57095,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "dr-ziauddin-ahmed-dental",
    "collegeName": "Dr. Ziauddin Ahmed Dental College and Hospital,ALIGARH,ALIGARH MUSLIM UNIVERSITY, ALIGARH, Uttar Pradesh, 202002",
    "type": "Government",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1194229,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "drradhakrishnan-government-medical-college",
    "collegeName": "Dr.Radhakrishnan Government Medical College, Hamirpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 326789,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "drradhakrishnan-government-medical-college",
    "collegeName": "Dr.Radhakrishnan Government Medical College, Hamirpur,Dr.Radhakrishnan Government Medical College,Hamirpur, Himachal Pradesh, 177001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 695650,
      "OBC": 15996,
      "EWS": 17206,
      "SC": 87369,
      "ST": 110678
    }
  },
  {
    "collegeId": "esimcpgimsr-banglore",
    "collegeName": "ESI-MC&PGIMS&R, Banglore",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 93483,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
];

// -----------------------------------------------------------------------
// 3. DERIVED EXPORTS & FILTERING LOGIC
// -----------------------------------------------------------------------

export const neetBranches = [...new Set(neetCutoffs.map(c => c.branch))].sort();
export const neetQuotas = [...new Set(neetCutoffs.map(c => c.quota))].sort();
export const neetCollegeTypes = [...new Set(neetCutoffs.map(c => c.type))].sort();

/**
 * Utility function to filter cutoffs based on user preferences.
 * Calculates admission eligibility based on user's All India Rank (AIR).
 */
export const filterNeetCutoffs = ({ rank, category = 'UR', branch = 'ALL', deemedOption = 'ALL' }) => {
  if (!rank || isNaN(rank)) return [];
  const rankNum = parseInt(rank, 10);

  return neetCutoffs.filter((item) => {
    // 1. Deemed / Non-Deemed Institution Filter
    if (deemedOption === 'DEEMED' && !item.isDeemed) return false;
    if (deemedOption === 'NON_DEEMED' && item.isDeemed) return false;

    // 2. Branch / Course Filter
    if (branch !== 'ALL' && item.branch !== branch) return false;

    // 3. Category Cutoff Existence Check
    const closingRank = item.cutoffs[category];
    if (closingRank === null || closingRank === undefined) return false;

    return rankNum <= closingRank;
  });
};