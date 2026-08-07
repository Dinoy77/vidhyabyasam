// src/data/neetCutoffs.js
//
// COMPREHENSIVE DATASET — NEET UG Medical & Dental Counseling Cutoffs
// Expanded with 65+ realistic college closing ranks derived from official MCC All India Quota (AIQ),
// Central Institutes (AIIMS/JIPMER), and Deemed University Round 3 seat allotment archives.

import { GiJawlessCyclop } from "react-icons/gi";

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
   {
    "collegeId": "esimcpgimsr-banglore",
    "collegeName": "ESI-MC&PGIMS&R, Banglore",
    "type": "Government",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 391353,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esimcpgimsr-bangloreesicmc-and-pgimsr",
    "collegeName": "ESI-MC&PGIMS&R, Banglore,ESICMC AND PGIMSR, Rajajinagar, Bengaluru, Karnataka, 560010",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 9180,
      "OBC": 12726,
      "EWS": 11395,
      "SC": 91002,
      "ST": null
    }
  },
  {
    "collegeId": "esimcpgimsr-bangloreesicmc-and-pgimsr",
    "collegeName": "ESI-MC&PGIMS&R, Banglore,ESICMC AND PGIMSR, Rajajinagar, Bengaluru, Karnataka, 560010",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 32853,
      "OBC": 36944,
      "EWS": 46175,
      "SC": null,
      "ST": 468396
    }
  },
  {
    "collegeId": "esic-college-of-nursing",
    "collegeName": "ESIC College of Nursing, Gulbarga, Karnataka",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme Nursing Quota (ESI-IP Quota Nursing)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 612278,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-college-of-nursing",
    "collegeName": "ESIC College of Nursing, Gulbarga, Karnataka,ESIC COLLEGE OF NURSING ESIC MEDICAL COLLEGE AND HOSPITAL SEDAM ROAD KALABURIGI, Karnataka, 585106",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme Nursing Quota (ESI-IP Quota Nursing)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 202482,
      "OBC": 218446,
      "EWS": 247451,
      "SC": 492135,
      "ST": 836942
    }
  },
  {
    "collegeId": "esic-college-of-nursing",
    "collegeName": "ESIC College of Nursing, Indiranagar, Bangalore",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme Nursing Quota (ESI-IP Quota Nursing)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 611602,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-college-of-nursing",
    "collegeName": "ESIC College of Nursing, Indiranagar, Bangalore,70 APPAREDDY PALYA 7TH MAIN INDIRANAGAR BENGALURU, Karnataka, 560008",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme Nursing Quota (ESI-IP Quota Nursing)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 147396,
      "OBC": 194237,
      "EWS": 279112,
      "SC": 489443,
      "ST": 960630
    }
  },
  {
    "collegeId": "esic-dental-college-and",
    "collegeName": "ESIC Dental College and Hospital",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 190648,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-dental-college-and",
    "collegeName": "ESIC Dental College and Hospital",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "IP University Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1006413,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-dental-college-and",
    "collegeName": "ESIC Dental College and Hospital,ESIC Hospital, Sector 15, Rohini, Delhi (NCT), 110085",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 35341,
      "OBC": 42049,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-dental-college-and",
    "collegeName": "ESIC Dental College and Hospital,ESIC Hospital, Sector 15, Rohini, Delhi (NCT), 110085",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "IP University Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 52270,
      "OBC": 68066,
      "EWS": 70488,
      "SC": 170740,
      "ST": 252193
    }
  },
  {
    "collegeId": "esic-dental-college-gulbarga",
    "collegeName": "ESIC Dental College, Gulbarga",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 138811,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-dental-college-gulbarga",
    "collegeName": "ESIC Dental College, Gulbarga",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 596344,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-dental-college-gulbargaesic",
    "collegeName": "ESIC Dental College, Gulbarga,ESIC MEDICAL COLLEGE & HOSPITAL CAMPUS, Sedam Road, Gulbarga, Karnataka, 585106",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 36256,
      "OBC": 42292,
      "EWS": 42780,
      "SC": 166822,
      "ST": null
    }
  },
  {
    "collegeId": "esic-dental-college-gulbargaesic",
    "collegeName": "ESIC Dental College, Gulbarga,ESIC MEDICAL COLLEGE & HOSPITAL CAMPUS, Sedam Road, Gulbarga, Karnataka, 585106",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 64353,
      "OBC": null,
      "EWS": 69195,
      "SC": 276059,
      "ST": 768641
    }
  },
  {
    "collegeId": "esic-medical-college-hospital",
    "collegeName": "ESIC MEDICAL COLLEGE & HOSPITAL, ANDHERI",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 87085,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-hospital",
    "collegeName": "ESIC MEDICAL COLLEGE & HOSPITAL, ANDHERI,Central Road, MIDC, Andheri( East), Mumbai",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 12130,
      "OBC": 14399,
      "EWS": 18498,
      "SC": 98632,
      "ST": 113244
    }
  },
  {
    "collegeId": "esic-medical-college-hospital",
    "collegeName": "ESIC MEDICAL COLLEGE & HOSPITAL, ANDHERI,Central Road, MIDC, Andheri( East), Mumbai",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 43571,
      "OBC": 49043,
      "EWS": 46688,
      "SC": 213578,
      "ST": 577459
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC MEDICAL COLLEGE AND HOSPITAL, NOIDA",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 591778,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC MEDICAL COLLEGE AND HOSPITAL, NOIDA",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 150177,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC MEDICAL COLLEGE AND HOSPITAL, NOIDA,A-3, TULSI MARG, SECTOR-24, NOIDA, UTTER PARDESH",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 686197,
      "OBC": 11674,
      "EWS": null,
      "SC": 89929,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC MEDICAL COLLEGE AND HOSPITAL, NOIDA,A-3, TULSI MARG, SECTOR-24, NOIDA, UTTER PARDESH",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 28366,
      "OBC": null,
      "EWS": null,
      "SC": 214488,
      "ST": 447580
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC MEDICAL COLLEGE AND HOSPITAL,BASAIDARAP UR",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 26969,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC MEDICAL COLLEGE AND HOSPITAL,BASAIDARAPUR, BASAIDARAPUR, NEW DELHI",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 8175,
      "EWS": 5446,
      "SC": 53612,
      "ST": 87699
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC MEDICAL COLLEGE AND HOSPITAL,BASAIDARAPUR, BASAIDARAPUR, NEW DELHI",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Delhi NCR Children/ Widows of Personnel of the Armed Forces (CW) IP Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 764025,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC MEDICAL COLLEGE AND HOSPITAL,BASAIDARAPUR, BASAIDARAPUR, NEW DELHI",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "IP University Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 646606,
      "OBC": 13370,
      "EWS": 11539,
      "SC": 84663,
      "ST": 195049
    }
  },
  {
    "collegeId": "esic-medical-college-naroda",
    "collegeName": "ESIC MEDICAL COLLEGE NARODA, BAPUNAGR,AHMEDABA D",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 697486,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-naroda",
    "collegeName": "ESIC MEDICAL COLLEGE NARODA, BAPUNAGR,AHMEDABAD,BA PUNAGAR, NEAR NARODA RAILWAY CROSING, HIMMATNAGAR HIGHWAY,PO KUBERNAGAR",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 12560,
      "OBC": 14052,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-naroda",
    "collegeName": "ESIC MEDICAL COLLEGE NARODA, BAPUNAGR,AHMEDABAD,BA PUNAGAR, NEAR NARODA RAILWAY CROSING, HIMMATNAGAR HIGHWAY,PO KUBERNAGAR",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 36049,
      "OBC": 42528,
      "EWS": 42975,
      "SC": 227789,
      "ST": 463423
    }
  },
  {
    "collegeId": "esic-medical-college-hospital",
    "collegeName": "ESIC Medical College & Hospital, Beltola, Guwahati,Pir Ajan Fakir Road, Beltola, Guwahati (Assam)",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 875303,
      "OBC": 19924,
      "EWS": null,
      "SC": 122478,
      "ST": 122869
    }
  },
  {
    "collegeId": "esic-medical-college-hospital",
    "collegeName": "ESIC Medical College & Hospital, Beltola, Guwahati,Pir Ajan Fakir Road, Beltola, Guwahati (Assam)",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 50112,
      "OBC": 51380,
      "EWS": 51304,
      "SC": 237652,
      "ST": 645840
    }
  },
  {
    "collegeId": "esic-medical-college-hospital",
    "collegeName": "ESIC Medical College & Hospital, Bihta",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 86004,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-hospital",
    "collegeName": "ESIC Medical College & Hospital, Bihta",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 208706,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-hospital",
    "collegeName": "ESIC Medical College & Hospital, Bihta,ESIC Medical College and Hospital, Bihta, Patna- 801103, Bihar, 801103",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14409,
      "OBC": 15972,
      "EWS": null,
      "SC": 97268,
      "ST": 114517
    }
  },
  {
    "collegeId": "esic-medical-college-hospital",
    "collegeName": "ESIC Medical College & Hospital, Bihta,ESIC Medical College and Hospital, Bihta, Patna- 801103, Bihar, 801103",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 43247,
      "OBC": 49309,
      "EWS": 47160,
      "SC": 229888,
      "ST": 596396
    }
  },
  {
    "collegeId": "esic-medical-college-hospitaljaipurlaxmi",
    "collegeName": "ESIC Medical College & Hospital,Jaipur,Laxmi Nagar, Ajmer Road, Sodala,Jaipur",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6481,
      "OBC": 8056,
      "EWS": null,
      "SC": 71773,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-hospitaljaipurlaxmi",
    "collegeName": "ESIC Medical College & Hospital,Jaipur,Laxmi Nagar, Ajmer Road, Sodala,Jaipur",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17071,
      "OBC": 21652,
      "EWS": 20089,
      "SC": 193635,
      "ST": 369920
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC Medical College AND PGIMSR, Chennai",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 830257,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC Medical College AND PGIMSR, Chennai",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 478438,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC Medical College AND PGIMSR, Chennai,ASHOK PILLAR ROAD, KK NAGAR, CHENNAI, Tamil Nadu, 600078",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15170,
      "OBC": 1065158,
      "EWS": 21240,
      "SC": 102421,
      "ST": 133619
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC Medical College AND PGIMSR, Chennai,ASHOK PILLAR ROAD, KK NAGAR, CHENNAI, Tamil Nadu, 600078",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 35231,
      "EWS": 50025,
      "SC": 201923,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC Medical College and Hospital Varanasi,ESIC Medical College and Hospital, Pndeypur Varanasii",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13639,
      "OBC": 954114,
      "EWS": 17113,
      "SC": 83902,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC Medical College and Hospital Varanasi,ESIC Medical College and Hospital, Pndeypur Varanasii",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 39006,
      "OBC": 45643,
      "EWS": 42674,
      "SC": 226530,
      "ST": 599846
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC Medical College and Hospital,Ludhiana",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 526701,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC Medical College and Hospital,Ludhiana,Bharat Nagar Chowk,Ludhiana",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 12420,
      "OBC": null,
      "EWS": 13069,
      "SC": 100011,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC Medical College and Hospital,Ludhiana,Bharat Nagar Chowk,Ludhiana",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 37648,
      "OBC": 46643,
      "EWS": 43055,
      "SC": 233837,
      "ST": 563010
    }
  },
  {
    "collegeId": "esic-medical-college-faridabad",
    "collegeName": "ESIC Medical College, Faridabad",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 82489,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-faridabad",
    "collegeName": "ESIC Medical College, Faridabad",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1065084,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-faridabadnh",
    "collegeName": "ESIC Medical College, Faridabad,NH 3 NIT FARIDABAD, Haryana, 121001",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 5864,
      "OBC": 8475,
      "EWS": 8083,
      "SC": null,
      "ST": 91665
    }
  },
  {
    "collegeId": "esic-medical-college-faridabadnh",
    "collegeName": "ESIC Medical College, Faridabad,NH 3 NIT FARIDABAD, Haryana, 121001",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16813,
      "OBC": 18710,
      "EWS": 21387,
      "SC": 123870,
      "ST": 371206
    }
  },
  {
    "collegeId": "esic-medical-college-gulbarga",
    "collegeName": "ESIC Medical College, Gulbarga",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 344846,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-gulbarga",
    "collegeName": "ESIC Medical College, Gulbarga",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 491879,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-gulbargaesic",
    "collegeName": "ESIC Medical College, Gulbarga,ESIC MEDICAL COLLEGE SEDAM ROAD GULBARGA, Karnataka, 585106",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14381,
      "OBC": 17301,
      "EWS": null,
      "SC": 110971,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-gulbargaesic",
    "collegeName": "ESIC Medical College, Gulbarga,ESIC MEDICAL COLLEGE SEDAM ROAD GULBARGA, Karnataka, 585106",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 44930,
      "OBC": 47404,
      "EWS": 54762,
      "SC": 210118,
      "ST": 505423
    }
  },
  {
    "collegeId": "esic-medical-college-hyderbad",
    "collegeName": "ESIC Medical College, Hyderbad",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1017997,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-hyderbad",
    "collegeName": "ESIC Medical College, Hyderbad",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 383567,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-medical-college-hyderbadsanathnagar",
    "collegeName": "ESIC Medical College, Hyderbad,Sanathnagar, Hyderabad, Telangana, 500038",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6515,
      "OBC": 9301,
      "EWS": 13990,
      "SC": 84047,
      "ST": 92240
    }
  },
  {
    "collegeId": "esic-medical-college-hyderbadsanathnagar",
    "collegeName": "ESIC Medical College, Hyderbad,Sanathnagar, Hyderabad, Telangana, 500038",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 35787,
      "OBC": 40698,
      "EWS": 35958,
      "SC": 168706,
      "ST": 481629
    }
  },
  {
    "collegeId": "esic-pgimsr-joka-kolkata",
    "collegeName": "ESIC PGIMSR, Joka, Kolkata, WB",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 108951,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-pgimsr-joka-kolkata",
    "collegeName": "ESIC PGIMSR, Joka, Kolkata, WB",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 522520,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "esic-pgimsr-joka-kolkata",
    "collegeName": "ESIC PGIMSR, Joka, Kolkata, WB,DIAMOND HARBOUR ROAD POST OFFICE JOKA KOLKATA 700104, West Bengal, 700104",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16307,
      "OBC": 18512,
      "EWS": 18441,
      "SC": 108358,
      "ST": null
    }
  },
  {
    "collegeId": "esic-pgimsr-joka-kolkata",
    "collegeName": "ESIC PGIMSR, Joka, Kolkata, WB,DIAMOND HARBOUR ROAD POST OFFICE JOKA KOLKATA 700104, West Bengal, 700104",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 48741,
      "OBC": 51767,
      "EWS": 55783,
      "SC": 214358,
      "ST": 616588
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC, Medical College and Hospital,Indore,ESIC, Medical College and Hospital, Nanda Nagar, Indore, Madhya Pradesh",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11469,
      "OBC": 13186,
      "EWS": 16768,
      "SC": 91366,
      "ST": 99078
    }
  },
  {
    "collegeId": "esic-medical-college-and",
    "collegeName": "ESIC, Medical College and Hospital,Indore,ESIC, Medical College and Hospital, Nanda Nagar, Indore, Madhya Pradesh",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 30150,
      "OBC": 34201,
      "EWS": 32700,
      "SC": 220144,
      "ST": 430839
    }
  },
  {
    "collegeId": "employees-state-insurance-corporation",
    "collegeName": "Employees State Insurance Corporation Medical College, Alwar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 70119,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "employees-state-insurance-corporation",
    "collegeName": "Employees State Insurance Corporation Medical College, Alwar",
    "type": "Government",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 269576,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "employees-state-insurance-corporation",
    "collegeName": "Employees State Insurance Corporation Medical College, Alwar,ESIC Medical College and Hospital Desula MIA Alwar Rajasthan India 301030, Rajasthan, 301030",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 9187,
      "OBC": 9399,
      "EWS": null,
      "SC": 61047,
      "ST": 84031
    }
  },
  {
    "collegeId": "employees-state-insurance-corporation",
    "collegeName": "Employees State Insurance Corporation Medical College, Alwar,ESIC Medical College and Hospital Desula MIA Alwar Rajasthan India 301030, Rajasthan, 301030",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19711,
      "OBC": 23596,
      "EWS": 22037,
      "SC": 146901,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-den-sci",
    "collegeName": "FACULTY OF DEN SCI, KG MED UNIV,LUCKNOW",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 922118,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-den-sci",
    "collegeName": "FACULTY OF DEN SCI, KG MED UNIV,LUCKNOW,SHAHMINA ROAD, CHOWK,LUCKNOW, Uttar Pradesh, 226003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 27731,
      "OBC": 27994,
      "EWS": 30124,
      "SC": 139651,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-dentistry-jamia",
    "collegeName": "Faculty of Dentistry, Jamia Millia Islamia, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Jamia Internal Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 57528,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-dentistry-jamia",
    "collegeName": "Faculty of Dentistry, Jamia Millia Islamia, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Muslim OBC Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 36930,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-dentistry-jamia",
    "collegeName": "Faculty of Dentistry, Jamia Millia Islamia, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Muslim Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 43150,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-dentistry-jamia",
    "collegeName": "Faculty of Dentistry, Jamia Millia Islamia, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Muslim ST Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 184436,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-dentistry-jamia",
    "collegeName": "Faculty of Dentistry, Jamia Millia Islamia, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Muslim Women Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 42045,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-dentistry-jamia",
    "collegeName": "Faculty of Dentistry, Jamia Millia Islamia, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian(Ja mia)Quot a",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 862025,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-dentistry-jamia",
    "collegeName": "Faculty of Dentistry, Jamia Millia Islamia, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 36021,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-dentistry-jamia",
    "collegeName": "Faculty of Dentistry, Jamia Millia Islamia, New Delhi,Faculty of Dentistry Jamia Millia Islamia A Central University Maulana Mohammad Ali Jauhar Marg, Delhi (NCT), 110025",
    "type": "Government",
    "isDeemed": false,
    "quota": "Muslim OBC Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 45398,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-dentistry-jamia",
    "collegeName": "Faculty of Dentistry, Jamia Millia Islamia, New Delhi,Faculty of Dentistry Jamia Millia Islamia A Central University Maulana Mohammad Ali Jauhar Marg, Delhi (NCT), 110025",
    "type": "Government",
    "isDeemed": false,
    "quota": "Muslim Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 37264,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "faculty-of-dentistry-jamia",
    "collegeName": "Faculty of Dentistry, Jamia Millia Islamia, New Delhi,Faculty of Dentistry Jamia Millia Islamia A Central University Maulana Mohammad Ali Jauhar Marg, Delhi (NCT), 110025",
    "type": "Government",
    "isDeemed": false,
    "quota": "Muslim ST Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": 221456
    }
  },
  {
    "collegeId": "faculty-of-dentistry-jamia",
    "collegeName": "Faculty of Dentistry, Jamia Millia Islamia, New Delhi,Faculty of Dentistry Jamia Millia Islamia A Central University Maulana Mohammad Ali Jauhar Marg, Delhi (NCT), 110025",
    "type": "Government",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 33868,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "fakhruddin-ali-ahmed-medical",
    "collegeName": "Fakhruddin Ali Ahmed Medical College, Barpeta",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 351903,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "fakhruddin-ali-ahmed-medical",
    "collegeName": "Fakhruddin Ali Ahmed Medical College, Barpeta,Jania Road, Jotigaon, Barpeta, Assam, Assam, 781301",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24634,
      "OBC": 24960,
      "EWS": 25558,
      "SC": 134903,
      "ST": 159221
    }
  },
  {
    "collegeId": "gsvm-medical-college-kanpur",
    "collegeName": "G.S.V.M. MEDICAL COLLEGE, KANPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 655619,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gsvm-medical-college-kanpurgsvm",
    "collegeName": "G.S.V.M. MEDICAL COLLEGE, KANPUR,G.S.V.M Medical College Kanpur Swaroop Nagar Kanpur U.P 208002, Uttar Pradesh, 208002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 9353,
      "OBC": 9513,
      "EWS": 11185,
      "SC": 65169,
      "ST": null
    }
  },
  {
    "collegeId": "gajra-raja-medical-college",
    "collegeName": "GAJRA RAJA MEDICAL COLLEGE, GWALIOR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 228687,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gajra-raja-medical-college",
    "collegeName": "GAJRA RAJA MEDICAL COLLEGE, GWALIOR,VEER SAVARKAR ROAD, GWALIOR, Madhya Pradesh, 474009",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10034,
      "OBC": 10675,
      "EWS": 11730,
      "SC": 84131,
      "ST": null
    }
  },
  {
    "collegeId": "gandhi-medical-college-bhopal",
    "collegeName": "GANDHI MEDICAL COLLEGE, BHOPAL",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 432210,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gandhi-medical-college-bhopalroyal",
    "collegeName": "GANDHI MEDICAL COLLEGE, BHOPAL,Royal Market Sultania Road Bhopal, Madhya Pradesh, 462001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 9417,
      "OBC": 10298,
      "EWS": 11253,
      "SC": 80004,
      "ST": 92870
    }
  },
  {
    "collegeId": "gdcptbds-univof-health-scirohtak",
    "collegeName": "GDC,PT.BDS UNIV.OF HEALTH SCI,ROHTAK",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 199957,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gdcptbds-univof-health-scirohtakpost",
    "collegeName": "GDC,PT.BDS UNIV.OF HEALTH SCI,ROHTAK,Post Graduate Institute of Dental Sciences, Rohtak, Haryana, 124001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 34616,
      "OBC": 36867,
      "EWS": null,
      "SC": 159232,
      "ST": 234437
    }
  },
  {
    "collegeId": "gitam-institue-of-med",
    "collegeName": "GITAM Institue of Med. Sce. and Res., Visakhapatnam",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 482169,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gitam-institue-of-med",
    "collegeName": "GITAM Institue of Med. Sce. and Res., Visakhapatnam",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1091369,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gitam-institue-of-med",
    "collegeName": "GITAM Institue of Med. Sce. and Res., Visakhapatnam,Gandhi Institute of Technology and Management (GITAM), Rushikonda, Visakhapatnam, Andhra Pradesh, 530045",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 615974,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gitam-institue-of-med",
    "collegeName": "GITAM Institue of Med. Sce. and Res., Visakhapatnam,Gandhi Institute of Technology and Management (GITAM), Rushikonda, Visakhapatnam, Andhra Pradesh, 530045",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1256104,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-dausa-rajasthan",
    "collegeName": "GMC DAUSA RAJASTHAN",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 561097,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-dausa-rajasthangmc-dausa",
    "collegeName": "GMC DAUSA RAJASTHAN,GMC DAUSA MITRAPURA BHANDAREJ MOD DAUSA, Rajasthan, 303303",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11364,
      "OBC": 13871,
      "EWS": null,
      "SC": 91995,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-jangaon",
    "collegeName": "GMC Jangaon",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 934284,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-jangaongmcjangaongmail-com-telangana",
    "collegeName": "GMC Jangaon,gmc.jangaon@gmail. com, Telangana, 506167",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24964,
      "OBC": 25268,
      "EWS": 28126,
      "SC": 121930,
      "ST": 151942
    }
  },
  {
    "collegeId": "gmc-karauli",
    "collegeName": "GMC KARAULI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 96892,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-karaulimandrayal-road-karauli",
    "collegeName": "GMC KARAULI,mandrayal road karauli, Rajasthan, 322241",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16674,
      "OBC": 16711,
      "EWS": null,
      "SC": 98597,
      "ST": 104061
    }
  },
  {
    "collegeId": "gmc-kamareddy",
    "collegeName": "GMC Kamareddy",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 147709,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-kamareddyoffice-of-the",
    "collegeName": "GMC Kamareddy,Office of the Principal, Government Medical College Devanpally, Kamareddy, Telangana, Telangana, 503111",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24777,
      "OBC": 25247,
      "EWS": 26296,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-azamgarh-up",
    "collegeName": "GMC, Azamgarh, UP",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 633656,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-azamgarh-upgovernment-medical",
    "collegeName": "GMC, Azamgarh, UP,Government Medical College and Super Facility Hospital Chakrapanpur Post Office-Kanaila, Azamgarh, Uttar Pradesh, 276128",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16361,
      "OBC": 16773,
      "EWS": 16757,
      "SC": 99261,
      "ST": 111781
    }
  },
  {
    "collegeId": "gmc-manjeri-kerala",
    "collegeName": "GMC, Manjeri, Kerala",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 96439,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-manjeri-keralagovernment-medical",
    "collegeName": "GMC, Manjeri, Kerala,GOVERNMENT MEDICAL COLLEGE, MANJERI, MALAPPURAM, Kerala, 676121",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10429,
      "OBC": null,
      "EWS": 29361,
      "SC": 129721,
      "ST": 126801
    }
  },
  {
    "collegeId": "gmc-rajamahendravaram",
    "collegeName": "GMC, Rajamahendravaram",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 899074,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-rajamahendravaramgovernm-ent-medical",
    "collegeName": "GMC, Rajamahendravaram,Governm ent Medical College,D.No.55- 4-1,Central Jail Road ,Near CTRI, Rajamahendravaram., Andhra Pradesh, 533105",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24601,
      "OBC": 25093,
      "EWS": 28638,
      "SC": 122156,
      "ST": 156331
    }
  },
  {
    "collegeId": "gmc-shahjhanpur",
    "collegeName": "GMC, Shahjhanpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 940973,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-shahjhanpurautonomous-state-medical",
    "collegeName": "GMC, Shahjhanpur,AUTONOMOUS STATE MEDICAL COLLEGE ALLIED PANDIT RAM PRASAD BISMIL HOSPITAL SHAHJAHANPUR UTTAR PRADESH, Uttar Pradesh, 242001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17521,
      "OBC": 17967,
      "EWS": 19738,
      "SC": 103526,
      "ST": 116490
    }
  },
  {
    "collegeId": "gmers-medical-college-morbi",
    "collegeName": "GMERS Medical College, Morbi",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 702071,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmers-medical-college-morbigibson",
    "collegeName": "GMERS Medical College, Morbi,Gibson middle school, Opp railway station, Morbi, Gujarat, 363641",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1003115,
      "OBC": 23902,
      "EWS": 26004,
      "SC": 120642,
      "ST": null
    }
  },
  {
    "collegeId": "gmers-medical-college-navsari",
    "collegeName": "GMERS Medical College, Navsari",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 132548,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmers-medical-college-navsariadarsh",
    "collegeName": "GMERS Medical College, Navsari,Adarsh Nivasi Shala Campus, At- Khambhlav, Po- Sultanpur, Via- Abrama, Ta - Jalalpore, Dist - Navsar, Gujarat, 396406",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18023,
      "OBC": 25251,
      "EWS": 27137,
      "SC": 127277,
      "ST": 148750
    }
  },
  {
    "collegeId": "gmers-medical-college-panchmahal",
    "collegeName": "GMERS Medical College, Panchmahal Godhra",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23265,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmers-medical-college-panchmahal",
    "collegeName": "GMERS Medical College, Panchmahal Godhra,Government Engineering College Campus, Godhra Lunawada Road, Chabanpur, Godhra, Gujarat, 389001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24610,
      "OBC": 25165,
      "EWS": 26718,
      "SC": 125941,
      "ST": 135975
    }
  },
  {
    "collegeId": "gmers-medical-college-porbandar",
    "collegeName": "GMERS Medical College, Porbandar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 132171,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmers-medical-college-porbandarbehind",
    "collegeName": "GMERS Medical College, Porbandar,Behind ITI and Navoday Vidyalay, Dharampur, Porbandar, Gujarat, 360578",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1037462,
      "OBC": 1086133,
      "EWS": 23913,
      "SC": 128747,
      "ST": 151013
    }
  },
  {
    "collegeId": "gmers-medical-college-rajpipla",
    "collegeName": "GMERS Medical College, Rajpipla",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 97658,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmers-medical-college-rajpiplagmers",
    "collegeName": "GMERS Medical College, Rajpipla,GMERS Medical College, Rajpipla Near Jakat Naka, Vadia Palace, Rajpipla Dist Narmada, GUJARAT., Gujarat, 393145",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24955,
      "OBC": 25343,
      "EWS": 27819,
      "SC": 120789,
      "ST": 134270
    }
  },
  {
    "collegeId": "goa-dental-college-hospital",
    "collegeName": "GOA DENTAL COLLEGE & HOSPITAL, GOA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1222420,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "goa-dental-college-hospital",
    "collegeName": "GOA DENTAL COLLEGE & HOSPITAL, GOA,Bambolim,Goa, Goa, 403202",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 44657,
      "OBC": 47822,
      "EWS": null,
      "SC": 145757,
      "ST": null
    }
  },
  {
    "collegeId": "goa-medical-college-panaji",
    "collegeName": "GOA MEDICAL COLLEGE, PANAJI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 391095,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "goa-medical-college-panajirajiv",
    "collegeName": "GOA MEDICAL COLLEGE, PANAJI,RAJIV GANDHI MEDICAL COMPLEX, BAMBOLIM, GOA, Goa, 403202",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 608056,
      "OBC": 16989,
      "EWS": 20327,
      "SC": 101960,
      "ST": 125649
    }
  },
  {
    "collegeId": "goverment-medical-college-nandurbar",
    "collegeName": "GOVERMENT MEDICAL COLLEGE NANDURBAR MAHARARASTRA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 483845,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "goverment-medical-college-nandurbar",
    "collegeName": "GOVERMENT MEDICAL COLLEGE NANDURBAR MAHARARASTRA,DISTRICT CIVIL HOSPITAL CAMPUS SAKRI ROAD NANDURBAR, Maharashtra, 425412",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 918447,
      "OBC": 21994,
      "EWS": 25308,
      "SC": 114763,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-hospital",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE & HOSPITAL, PHULBANI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 150662,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-hospital",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE & HOSPITAL, PHULBANI,TILAKPADA, PAKANGAON, PS& TEHSIL- KHAJURIPADA,PHULBANI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25486,
      "OBC": 25668,
      "EWS": 27733,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-medak",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE ,MEDAK",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 123199,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-medakpillikotyal",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE ,MEDAK,PILLIKOTYAL, MEDAK MANDAL, MEDAK DISTRICT, Telangana, 502110",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25379,
      "OBC": null,
      "EWS": 28725,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE AND GENERAL HOSPITAL, SATARA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 105181,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE AND GENERAL HOSPITAL, SATARA,GOVERNMENT MEDICAL COLLEGE AND GENERAL HOSPITAL SATARA DISTRICT CIVIL HOSPITAL CAMPUS SADAR BAZAR CA, Maharashtra, 415001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20711,
      "OBC": 21643,
      "EWS": 23855,
      "SC": 119282,
      "ST": 134232
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE AND HOSPITAL, CHANDIGAR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 106483,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE AND HOSPITAL, CHANDIGAR,GOVERNMENT MEDICAL COLLEGE AND HOSPITAL, SECTOR 32, CHANDIGARH, Chandigarh, 160030",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 51854,
      "OBC": 3556,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-karimnagar",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE Karimnagar Telangana",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 134682,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-karimnagar",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE Karimnagar Telangana,The Principal, Government Medical College Karimnagar, Jagtial NH 563, Kothapalli, Karimnagar, Telangana, 505451",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24755,
      "OBC": 1055405,
      "EWS": 27961,
      "SC": 132156,
      "ST": 149808
    }
  },
  {
    "collegeId": "government-medical-college-machilipatnam",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE MACHILIPATNAM",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1058240,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-machilipatnam",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE MACHILIPATNAM ,KARA AGRAHARAM NEAR RADAR STATION MACHILIPATNAM, KRISHNA DISTRICT, ANDHRA PRADESH -521002, Andhra Pradesh, 521002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25075,
      "OBC": 25328,
      "EWS": 28096,
      "SC": null,
      "ST": 157285
    }
  },
  {
    "collegeId": "government-medical-college-nandyal",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE NANDYAL",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 868093,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-nandyalprincipalgmcnandy",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE NANDYAL,principalgmcnandy ala@gmail.com, Andhra Pradesh, 518501",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24637,
      "OBC": 25274,
      "EWS": 29149,
      "SC": 128615,
      "ST": 157487
    }
  },
  {
    "collegeId": "government-medical-college-purnea",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE PURNEA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 749964,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-purneagovtmcpurneagm",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE PURNEA,govt.mcpurnea@gm ail.com, Bihar, 854301",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17514,
      "OBC": 20338,
      "EWS": 23353,
      "SC": 115420,
      "ST": 136153
    }
  },
  {
    "collegeId": "government-medical-college-akola",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, AKOLA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 785592,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-akolacollector",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, AKOLA,Collector Office Road, Near Ashok Watika, Akola. State Maharashtra. Pin 444001, Maharashtra, 444001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19411,
      "OBC": 19858,
      "EWS": 1115020,
      "SC": 115238,
      "ST": 123987
    }
  },
  {
    "collegeId": "government-medical-college-anantnag",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, ANANTNAG J&K",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 85055,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-baran",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, BARAN, RAJASTHAN",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 678151,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-baran",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, BARAN, RAJASTHAN,Melkhedi, Chhapar Melkhedi Road Baran, Rajasthan, 325205",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17217,
      "OBC": 17327,
      "EWS": null,
      "SC": 100308,
      "ST": 111274
    }
  },
  {
    "collegeId": "government-medical-college-bundi",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, BUNDI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 464899,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-bundigovt",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, BUNDI,GOVT MEDICAL COLLEGE BUNDI, Rajasthan, 323001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15614,
      "OBC": 16589,
      "EWS": null,
      "SC": 97538,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-handwara",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, HANDWARA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 444121,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-handwaramaidan",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, HANDWARA,MAIDAN CHOGAL, HANDWARA, KUPWARA, Jammu And Kashmir, 193221",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24396,
      "OBC": 24951,
      "EWS": 26395,
      "SC": 130231,
      "ST": 140295
    }
  },
  {
    "collegeId": "government-medical-college-latur",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, LATUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 119835,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-laturgovernment",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, LATUR,Government Medical College, Latur, Behind Old Railway Station, Near Marwadi Rajasthan Vidyalaya, Lat, Maharashtra, 413512",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20588,
      "OBC": 20803,
      "EWS": 24006,
      "SC": 117632,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-miraj",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, MIRAJ",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 603005,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-mirajpandharpur",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, MIRAJ,Pandharpur Road Miraj tal Miraj Dist sangli, Maharashtra, 416410",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18644,
      "OBC": 786461,
      "EWS": 23078,
      "SC": 108012,
      "ST": 132096
    }
  },
  {
    "collegeId": "government-medical-college-osmanabad",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, OSMANABAD",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 114643,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-osmanabadnew",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, OSMANABAD,New Building, Civil Hospital Compound, Marwad Galli, Osmanabad, Maharashtra, 413501",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23007,
      "OBC": 23227,
      "EWS": 25629,
      "SC": 121546,
      "ST": 134564
    }
  },
  {
    "collegeId": "government-medical-college-rajouri",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, RAJOURI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1048709,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-rajourigovernment",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, RAJOURI,Government Medical College, Kheora, Mehra, Rajouri, Jammu and Kashmir., Jammu And Kashmir, 185132",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21639,
      "OBC": 21777,
      "EWS": 22886,
      "SC": 117923,
      "ST": 116305
    }
  },
  {
    "collegeId": "government-medical-college-sangareddy",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, SANGAREDDY",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 950726,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-sangareddyopp",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, SANGAREDDY,OPP. TOWN POLICE STATION, NETAJI NAGAR, SANGAREDDY DISTRICT, TELANGANA - 502001, Telangana, 502001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23517,
      "OBC": 23662,
      "EWS": 27501,
      "SC": 116531,
      "ST": 150912
    }
  },
  {
    "collegeId": "government-medical-college-sriganganagar",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, SRIGANGANAGAR, RAJASTHAN",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 612342,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-sriganganagar",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, SRIGANGANAGAR, RAJASTHAN,Government Medical college sriganganagar rajasthan, Rajasthan, 335001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13407,
      "OBC": 13425,
      "EWS": 14611,
      "SC": 95945,
      "ST": 109913
    }
  },
  {
    "collegeId": "government-medical-college-surat",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, SURAT",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 384963,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-suratout",
    "collegeName": "GOVERNMENT MEDICAL COLLEGE, SURAT,Out Side Majura Gate, New Civil Hospital Campus, Opp. Income Tax office, Surat - 395001, Gujarat, 395001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 5503,
      "OBC": 8149,
      "EWS": null,
      "SC": 73788,
      "ST": 75126
    }
  },
  {
    "collegeId": "govt-den-coll-dental",
    "collegeName": "GOVT DEN COLL DENTAL WING PATIALA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 201219,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-den-coll-dental",
    "collegeName": "GOVT DEN COLL DENTAL WING PATIALA,Govt.Dental College and Hospital,Patiala, Punjab, 147001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 38471,
      "OBC": 45477,
      "EWS": 50669,
      "SC": 166110,
      "ST": 234889
    }
  },
  {
    "collegeId": "govt-dental-college-kannur",
    "collegeName": "GOVT DENTAL COLLEGE Kannur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 166717,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-kannurpariyaram",
    "collegeName": "GOVT DENTAL COLLEGE Kannur,Pariyaram Medical College P O, Kannur, Kerala- 670503., Kerala, 670503",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 32110,
      "OBC": null,
      "EWS": 59573,
      "SC": 167385,
      "ST": 241599
    }
  },
  {
    "collegeId": "govt-medical-college-vizianagaram",
    "collegeName": "GOVT MEDICAL COLLEGE VIZIANAGARAM",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 124670,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-vizianagaramopposite",
    "collegeName": "GOVT MEDICAL COLLEGE VIZIANAGARAM,Opposite Central Tribal University , Near JNTU Gajularega, Vizianagaram, Andhra Pradesh, 535003, Andhra Pradesh, 535003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25301,
      "OBC": 25481,
      "EWS": 27689,
      "SC": 117433,
      "ST": 157855
    }
  },
  {
    "collegeId": "govt-medical-college-wanaparthy",
    "collegeName": "GOVT MEDICAL COLLEGE, WANAPARTHY",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1058105,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-wanaparthy",
    "collegeName": "GOVT MEDICAL COLLEGE, WANAPARTHY ,Marrikunta, Pebbair Road, Wanaparthy District, Telangana state., Telangana, 509103",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1104692,
      "OBC": 24977,
      "EWS": 27505,
      "SC": 132514,
      "ST": 152717
    }
  },
  {
    "collegeId": "govt-college-of-dentistry",
    "collegeName": "GOVT. COLLEGE OF DENTISTRY, INDORE",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 199758,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-college-of-dentistry",
    "collegeName": "GOVT. COLLEGE OF DENTISTRY, INDORE,1 Sardar Patel Marg Indore, Madhya Pradesh, 452001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 38793,
      "OBC": 42454,
      "EWS": null,
      "SC": 180105,
      "ST": 230379
    }
  },
  {
    "collegeId": "govt-dc-research-instbangalore",
    "collegeName": "GOVT. D.C. & RESEARCH INST,BANGALORE",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 201011,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dc-research-instbangalorefort",
    "collegeName": "GOVT. D.C. & RESEARCH INST,BANGALORE,FORT, VICTORIA HOSPITAL CAMPUS, BANGALORE, Karnataka, 560002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 35021,
      "OBC": 44808,
      "EWS": null,
      "SC": 184434,
      "ST": 210667
    }
  },
  {
    "collegeId": "govt-dc-research-inst",
    "collegeName": "GOVT. DC & RESEARCH INSt., BELLARY",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 178180,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dc-research-inst",
    "collegeName": "GOVT. DC & RESEARCH INSt., BELLARY,GOVT DENTAL COLLEGE AND RI, VIMS CAMPUS, CANTONMENT BELLARY, Karnataka, 583104",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 47189,
      "OBC": 49378,
      "EWS": 53000,
      "SC": 149682,
      "ST": 240402
    }
  },
  {
    "collegeId": "govt-dental-coll-hosp",
    "collegeName": "GOVT. DENTAL COLL.& HOSP., JAMNAGAR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 205274,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-coll-hosp",
    "collegeName": "GOVT. DENTAL COLL.& HOSP., JAMNAGAR,Opp. City Police Line, Navagam Ghed, Jamnagar, Gujarat, 361008",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 40397,
      "OBC": 46806,
      "EWS": 40679,
      "SC": 176126,
      "ST": 229607
    }
  },
  {
    "collegeId": "govt-dental-college-hospahmedabad",
    "collegeName": "GOVT. DENTAL COLLEGE & HOSP,AHMEDABAD",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 203710,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-hospahmedabadnew",
    "collegeName": "GOVT. DENTAL COLLEGE & HOSP,AHMEDABAD,NEW CIVIL HOSPITAL CAMPUS, ASARWA, AHMEDABAD, Gujarat, 380016",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": null,
      "SC": 165514,
      "ST": 221425
    }
  },
  {
    "collegeId": "govt-dental-college-hospaurangabad",
    "collegeName": "GOVT. DENTAL COLLEGE & HOSP.,AURANGABAD",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 206111,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-hospaurangabadgover",
    "collegeName": "GOVT. DENTAL COLLEGE & HOSP.,AURANGABAD,Gover nment Medical College and Hospital Campus Dhanwantari Nagar Ghati Chha. Sambhajinagar Aurangaba, Maharashtra, 431001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 29619,
      "OBC": 47272,
      "EWS": 52122,
      "SC": 170480,
      "ST": 236598
    }
  },
  {
    "collegeId": "govt-dental-college-hospmumbai",
    "collegeName": "GOVT. DENTAL COLLEGE & HOSP.,MUMBAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 207467,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-hospmumbaist",
    "collegeName": "GOVT. DENTAL COLLEGE & HOSP.,MUMBAI,St Georges Hospital Compound P D Mellow road Fort Mumbai, Maharashtra, 400001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 38555,
      "OBC": 43347,
      "EWS": null,
      "SC": 179879,
      "ST": 200265
    }
  },
  {
    "collegeId": "govt-dental-college-hospnagpur",
    "collegeName": "GOVT. DENTAL COLLEGE & HOSP.,NAGPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 903910,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-hospnagpurgovernment",
    "collegeName": "GOVT. DENTAL COLLEGE & HOSP.,NAGPUR,Government Dental College And Hospital GMC Campus Nagpur, Maharashtra, 440003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 36869,
      "OBC": 42362,
      "EWS": 48494,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-kottayam",
    "collegeName": "GOVT. DENTAL COLLEGE, KOTTAYAM",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 920127,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-kottayamgovernment",
    "collegeName": "GOVT. DENTAL COLLEGE, KOTTAYAM,Government Dental College, P.O.Gandhinagar Kottayam- 686008, Kerala, 686008",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 27899,
      "OBC": 28796,
      "EWS": null,
      "SC": 189221,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-kozikode",
    "collegeName": "GOVT. DENTAL COLLEGE, KOZIKODE",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 168213,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-kozikodemedical",
    "collegeName": "GOVT. DENTAL COLLEGE, KOZIKODE,MEDICAL COLLEGE CAMPUS, MEDICAL COLLEGE P.O., KOZHIKODE, Kerala, 673008",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 26542,
      "OBC": null,
      "EWS": 36381,
      "SC": 166720,
      "ST": 235969
    }
  },
  {
    "collegeId": "govt-dental-college-raipur",
    "collegeName": "GOVT. DENTAL COLLEGE, RAIPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1200029,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-raipurnear",
    "collegeName": "GOVT. DENTAL COLLEGE, RAIPUR,Near Marahi Mata Mandir, Rajbandha Maidan, Raipur (C.G.), Chhattisgarh, 492001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 43734,
      "OBC": 47671,
      "EWS": null,
      "SC": 183282,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-shimla",
    "collegeName": "GOVT. DENTAL COLLEGE, SHIMLA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 150229,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-shimlahp",
    "collegeName": "GOVT. DENTAL COLLEGE, SHIMLA,HP GOVERNMENT DENTAL COLLEGE AND HOSPITAL SHIMLA, Himachal Pradesh, 171001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 33159,
      "OBC": 43256,
      "EWS": 45987,
      "SC": 171409,
      "ST": 191150
    }
  },
  {
    "collegeId": "govt-dental-college-trivandrum",
    "collegeName": "GOVT. DENTAL COLLEGE, TRIVANDRUM",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 175610,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-trivandrumgovt",
    "collegeName": "GOVT. DENTAL COLLEGE, TRIVANDRUM,Govt Dental College Thiruvananthapuram Kerala, Kerala, 695011",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 30005,
      "OBC": 35675,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dharamapuri-med-colldharmapuri",
    "collegeName": "GOVT. DHARAMAPURI MED COLL,DHARMAPURI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 100080,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dharamapuri-med-colldharmapurinethaj",
    "collegeName": "GOVT. DHARAMAPURI MED COLL,DHARMAPURI,NETHAJ I BYPASS ROAD DHARMAPURI, Tamil Nadu, 636701",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15804,
      "OBC": null,
      "EWS": 27761,
      "SC": null,
      "ST": 160130
    }
  },
  {
    "collegeId": "govt-kilpauk-medical-collegechennai",
    "collegeName": "GOVT. KILPAUK MEDICAL COLLEGE,CHENNAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 442807,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-kilpauk-medical-collegechennaino",
    "collegeName": "GOVT. KILPAUK MEDICAL COLLEGE,CHENNAI,No. 822, EVR Periyar salai , Kilpauk,Chennai, Tamil Nadu, 600010",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 9114,
      "OBC": 12033,
      "EWS": 25599,
      "SC": 56483,
      "ST": 119660
    }
  },
  {
    "collegeId": "govt-medical-college-kottayam",
    "collegeName": "GOVT. MEDICAL COLLEGE, KOTTAYAM",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1117753,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-kottayamgandhinagar",
    "collegeName": "GOVT. MEDICAL COLLEGE, KOTTAYAM,GANDHINAGAR P O KOTTAYAM KERALA 686008, Kerala, 686008",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 7279,
      "OBC": 8485,
      "EWS": null,
      "SC": 107132,
      "ST": 125638
    }
  },
  {
    "collegeId": "govt-medical-college-kozhikode",
    "collegeName": "GOVT. MEDICAL COLLEGE, KOZHIKODE",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 876255,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-kozhikodeprincipal",
    "collegeName": "GOVT. MEDICAL COLLEGE, KOZHIKODE,Principal, Govt. Medical College, Medical College (P.O)- Kozhikode, Kerala, 673008",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": 13617,
      "SC": null,
      "ST": 125063
    }
  },
  {
    "collegeId": "govt-medical-college-nagpur",
    "collegeName": "GOVT. MEDICAL COLLEGE, NAGPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 513361,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-nagpurhanuman",
    "collegeName": "GOVT. MEDICAL COLLEGE, NAGPUR,Hanuman Nagar,Nagpur, Maharashtra, 440003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 8699,
      "OBC": 11390,
      "EWS": 15580,
      "SC": 68627,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-collegeaurangabad",
    "collegeName": "GOVT. MEDICAL COLLEGE,AURANGABAD",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 89293,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-collegeaurangabadgo-vernment",
    "collegeName": "GOVT. MEDICAL COLLEGE,AURANGABAD,Go vernment Medical College, Aurangabad, Jubli Park, Panchakki Road, Aurangabad (M.S.)., Maharashtra, 431001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13686,
      "OBC": 15779,
      "EWS": 16345,
      "SC": 30490,
      "ST": 109737
    }
  },
  {
    "collegeId": "govt-medical-collegepatiala",
    "collegeName": "GOVT. MEDICAL COLLEGE,PATIALA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 368265,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-collegepatialasangrur-road",
    "collegeName": "GOVT. MEDICAL COLLEGE,PATIALA,Sangrur road Government Medical College, Patiala, Punjab, 147001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 393,
      "OBC": 11510,
      "EWS": 9925,
      "SC": 82842,
      "ST": 111933
    }
  },
  {
    "collegeId": "govt-medical-collegetirunelveli",
    "collegeName": "GOVT. MEDICAL COLLEGE,TIRUNELVELI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 682069,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-collegetirunelvelithe-dean",
    "collegeName": "GOVT. MEDICAL COLLEGE,TIRUNELVELI,THE DEAN, TIRUNELVELI MEDICAL COLLEGE, HIGHGROUND, TIRUNELVELI-11, Tamil Nadu, 627011",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1127815,
      "OBC": 13994,
      "EWS": 28311,
      "SC": 108362,
      "ST": 153183
    }
  },
  {
    "collegeId": "govt-mohan-kumaramangalam-mcsalem",
    "collegeName": "GOVT. MOHAN KUMARAMANGALAM M.C.,SALEM",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 755145,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-mohan-kumaramangalam-mcsalemmajeera",
    "collegeName": "GOVT. MOHAN KUMARAMANGALAM M.C.,SALEM,MAJEERA KOLLAPPATTI, Salem steel Plant Road Salem 636030 TamilNadu, Tamil Nadu, 636030",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13573,
      "OBC": 1127954,
      "EWS": 28224,
      "SC": 99026,
      "ST": 146942
    }
  },
  {
    "collegeId": "govt-vellore-medical-college",
    "collegeName": "GOVT. VELLORE MEDICAL COLLEGE, VELLORE",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 102687,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-vellore-medical-college",
    "collegeName": "GOVT. VELLORE MEDICAL COLLEGE, VELLORE,Government Vellore Medical College and Hospital, Adukkamparai, Vellore., Tamil Nadu, 632011",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15455,
      "OBC": 15971,
      "EWS": 25925,
      "SC": 102842,
      "ST": 138176
    }
  },
  {
    "collegeId": "govtmedical-college-amritsar",
    "collegeName": "GOVT.MEDICAL COLLEGE, AMRITSAR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 394311,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govtmedical-college-amritsarcircular-road",
    "collegeName": "GOVT.MEDICAL COLLEGE, AMRITSAR,CIRCULAR ROAD, AMRITSAR-143001, Punjab, 143001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10304,
      "OBC": 13682,
      "EWS": 12988,
      "SC": 89593,
      "ST": 115572
    }
  },
  {
    "collegeId": "govtmedical-college-kota",
    "collegeName": "GOVT.MEDICAL COLLEGE, KOTA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 735651,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govtmedical-college-kotarangbari-road",
    "collegeName": "GOVT.MEDICAL COLLEGE, KOTA,Rangbari Road Kota, Rajasthan, 324005",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 8335,
      "OBC": 8677,
      "EWS": 8727,
      "SC": 71830,
      "ST": 75310
    }
  },
  {
    "collegeId": "govtmedical-college-thrissur",
    "collegeName": "GOVT.MEDICAL COLLEGE, THRISSUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1119616,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govtmedical-college-thrissurgovtmedical-collegethrissurmedical",
    "collegeName": "GOVT.MEDICAL COLLEGE, THRISSUR,Govt.Medical College,Thrissur,Medical College P.O, Pin -680596, Thrissur District., Kerala, 680596",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 7547,
      "OBC": 8155,
      "EWS": 26159,
      "SC": 119686,
      "ST": null
    }
  },
  {
    "collegeId": "govtmedical-collegethiruvanant-hapuram",
    "collegeName": "GOVT.MEDICAL COLLEGE,THIRUVANANT HAPURAM",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 258759,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govtmedical-collegethiruvananth-apuram",
    "collegeName": "GOVT.MEDICAL COLLEGE,THIRUVANANTH APURAM",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 158157,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govtmedical-collegethiruvanantha-puramoffice-of",
    "collegeName": "GOVT.MEDICAL COLLEGE,THIRUVANANTHA PURAM,OFFICE OF THE PRINCIPAL,GOVT.MEDICAL COLLEGE THIRUVANANTHAPURAM,M EDICAL COLLEGE PO,KERALA, Kerala, 695011",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 4913,
      "OBC": 5764,
      "EWS": 24538,
      "SC": 99785,
      "ST": null
    }
  },
  {
    "collegeId": "grant-medical-coll-sir",
    "collegeName": "GRANT MEDICAL COLL & SIR J.J.HOSP,MUMBAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 557723,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "grant-medical-coll-sir",
    "collegeName": "GRANT MEDICAL COLL & SIR J.J.HOSP,MUMBAI,Sir JJ Group of HospitalCompound, Sir JJ Road, Byculla Mumbai, Maharashtra, 400008",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 169345,
      "OBC": 677552,
      "EWS": 7262,
      "SC": 30715,
      "ST": 90836
    }
  },
  {
    "collegeId": "gtmc-thiruvarur",
    "collegeName": "GTMC, THIRUVARUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 945362,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gtmc-thiruvarurmaster-plan-complex",
    "collegeName": "GTMC, THIRUVARUR,MASTER PLAN COMPLEX, VILAMAL VILLAGE, THIRUVARUR, Tamil Nadu, 610004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19584,
      "OBC": 1173976,
      "EWS": 29596,
      "SC": 134626,
      "ST": 160204
    }
  },
  {
    "collegeId": "guntur-medical-college-guntur",
    "collegeName": "GUNTUR MEDICAL COLLEGE, GUNTUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1058799,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "guntur-medical-college-gunturkannavarithoa",
    "collegeName": "GUNTUR MEDICAL COLLEGE, GUNTUR,Kannavarithoa Opp. NGOs Association Building, Andhra Pradesh, 522004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 12681,
      "OBC": 17454,
      "EWS": 22094,
      "SC": 30228,
      "ST": 88802
    }
  },
  {
    "collegeId": "guru-govind-singh-med",
    "collegeName": "GURU GOVIND SINGH MED COLL,FARIDKOT",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 736249,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "guru-govind-singh-med",
    "collegeName": "GURU GOVIND SINGH MED COLL,FARIDKOT,Sadiq Road, Faridkot., Punjab, 151203",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14394,
      "OBC": 17173,
      "EWS": 19128,
      "SC": 581456,
      "ST": 122656
    }
  },
  {
    "collegeId": "guwahati-medical-college-guwahati",
    "collegeName": "GUWAHATI MEDICAL COLLEGE, GUWAHATI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 103787,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "guwahati-medical-college-guwahatinarakasur",
    "collegeName": "GUWAHATI MEDICAL COLLEGE, GUWAHATI,Narakasur Hill top , Bhangagarh, Guwahati, Assam, 781032",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 12093,
      "OBC": 19553,
      "EWS": 20139,
      "SC": 88005,
      "ST": null
    }
  },
  {
    "collegeId": "gvmc-villupuram",
    "collegeName": "GVMC, VILLUPURAM",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1058225,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gvmc-villupuramthe-dean-government",
    "collegeName": "GVMC, VILLUPURAM,THE DEAN, GOVERNMENT VILLUPURAM MEDICAL COLLEGE, TRICHY TRUNK ROAD, MUNDIYAMPAKKAM, VILLUPURAM, Tamil Nadu, 605601",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1098028,
      "OBC": 17333,
      "EWS": 29524,
      "SC": null,
      "ST": 157282
    }
  },
  {
    "collegeId": "gadag-institute-of-medical",
    "collegeName": "Gadag Institute of Medical Sciences",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 634448,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gadag-institute-of-medical",
    "collegeName": "Gadag Institute of Medical Sciences,GADAG INSTITUTE OF MEDICAL SCIENCES GADAG Mallasamudra,Gadag- 582103, Karnataka, 582103",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22653,
      "OBC": 23389,
      "EWS": null,
      "SC": 123145,
      "ST": 150122
    }
  },
  {
    "collegeId": "gandhi-medical-college-musheerabad",
    "collegeName": "Gandhi Medical College Musheerabad Secunderabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 49216,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gandhi-medical-college-musheerabad",
    "collegeName": "Gandhi Medical College Musheerabad Secunderabad,MUSHEERABA D, SECUNDERABAD, Telangana, 500003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 2909,
      "OBC": 7999,
      "EWS": 7253,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-bahraich",
    "collegeName": "Gmc, Bahraich",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 101149,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gmc-bahraichkdc-road-bahraich271801",
    "collegeName": "Gmc, Bahraich,K.D.C Road Bahraich-271801, Uttar Pradesh, 271801",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18254,
      "OBC": 18949,
      "EWS": 19764,
      "SC": 107489,
      "ST": 121735
    }
  },
  {
    "collegeId": "goverment-dental-college-hospital",
    "collegeName": "Goverment Dental College & Hospital, Jalgaon",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 156913,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "goverment-dental-college-hospital",
    "collegeName": "Goverment Dental College & Hospital, Jalgaon ,Plot No.H- 08 09 05 MIDC Area Jalgaon, Maharashtra, 425003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 44477,
      "OBC": 50293,
      "EWS": 52370,
      "SC": 178140,
      "ST": null
    }
  },
  {
    "collegeId": "goverment-medical-college-and",
    "collegeName": "Goverment Medical College And Hospital Jalgaon",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 105797,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "goverment-medical-college-and",
    "collegeName": "Goverment Medical College And Hospital Jalgaon,GOVERNMENT MEDICAL COLLEGE, JILHA PETH, NEAR MAIN POST OFFICE, JALGAON, Maharashtra, 425001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19238,
      "OBC": 20707,
      "EWS": 23014,
      "SC": null,
      "ST": 124036
    }
  },
  {
    "collegeId": "goverment-medical-college-sheopur",
    "collegeName": "Goverment Medical College Sheopur, M.P",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 643974,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "goverment-medical-college-sheopur",
    "collegeName": "Goverment Medical College Sheopur, M.P,GMC Sheopur, Village Nagda, Near Nageshwar Temple Dist- Sheopur, M.P",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18722,
      "OBC": 18832,
      "EWS": 21070,
      "SC": 109950,
      "ST": 120444
    }
  },
  {
    "collegeId": "goverment-medical-college-bettiah",
    "collegeName": "Goverment Medical College, Bettiah",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 109962,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "goverment-medical-college-bettiahgovernment",
    "collegeName": "Goverment Medical College, Bettiah,Government Medical College Bettiah West Champaran Bihar- 845438, Bihar, 845438",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17432,
      "OBC": 19653,
      "EWS": null,
      "SC": null,
      "ST": 130821
    }
  },
  {
    "collegeId": "goverment-medical-college-datia",
    "collegeName": "Goverment Medical College, Datia",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 97510,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "goverment-medical-college-datianear",
    "collegeName": "Goverment Medical College, Datia,NEAR 29TH BATTALION, N.H.75, DATIA, Madhya Pradesh, 475661",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17623,
      "OBC": 18251,
      "EWS": 18641,
      "SC": 99014,
      "ST": 112318
    }
  },
  {
    "collegeId": "goverment-medical-college-gadchiroli",
    "collegeName": "Goverment Medical College, Gadchiroli",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 97641,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "goverment-medical-college-gadchiroligovernment",
    "collegeName": "Goverment Medical College, Gadchiroli,Government Medical College, Mul road complex, Gadchiroli, Maharashtra, 442605",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23922,
      "OBC": 24728,
      "EWS": 25532,
      "SC": 130601,
      "ST": 143244
    }
  },
  {
    "collegeId": "goverment-medical-college-singrauli",
    "collegeName": "Goverment Medical College, Singrauli",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 112485,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "goverment-medical-college-singrauligoverment",
    "collegeName": "Goverment Medical College, Singrauli,Goverment Medical College, Villege Naugadh,Singrauli, Madhya Pradesh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20820,
      "OBC": 21343,
      "EWS": 22701,
      "SC": 113098,
      "ST": 123716
    }
  },
  {
    "collegeId": "government-dental-college-hospital",
    "collegeName": "Government Dental College & Hospital, Srinagar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 168050,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-hospital",
    "collegeName": "Government Dental College & Hospital, Srinagar,Shireen Bagh Karan Nagar Srinagar Jammu and Kashmir India, Jammu And Kashmir, 190010",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 45580,
      "OBC": 46302,
      "EWS": 47427,
      "SC": 172040,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-dibrugarh",
    "collegeName": "Government Dental College Dibrugarh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 168122,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-dibrugarhi",
    "collegeName": "Government Dental College Dibrugarh,I Lane, inside Assam Medical college campus, Barbari, Dibrugarh- 786002, Assam, 786002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 47814,
      "OBC": 48915,
      "EWS": null,
      "SC": 182404,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-hyderabad",
    "collegeName": "Government Dental College Hyderabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 213984,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-hyderabadgovernment",
    "collegeName": "Government Dental College Hyderabad,GOVERNMENT DENTAL COLLEGE AND HOSPITAL, AFZALGUNJ, HYDERABAD - 500012, Telangana, 500012",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 43984,
      "OBC": 47955,
      "EWS": null,
      "SC": 183149,
      "ST": 233186
    }
  },
  {
    "collegeId": "government-dental-college-and",
    "collegeName": "Government Dental College and Hospital, Vijayawada",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 187445,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-and",
    "collegeName": "Government Dental College and Hospital, Vijayawada,Government Dental College and Hospital, Machavaram Post, Vijayawada - 520004, Andhra Pradesh, 520004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 33590,
      "OBC": 35112,
      "EWS": null,
      "SC": 176120,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-alappuzha",
    "collegeName": "Government Dental College, Alappuzha",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 172217,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-alappuzhagovernment",
    "collegeName": "Government Dental College, Alappuzha,Government Dental College T.D Medical College (PO) Alappuzha,Kerala, Kerala, 688005",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 40776,
      "OBC": 41971,
      "EWS": 54148,
      "SC": 162326,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-jodhpur",
    "collegeName": "Government Dental College, Jodhpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 38355,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-jodhpurresidency",
    "collegeName": "Government Dental College, Jodhpur,Residency Road Shastri Nagar Jodhpur Rajasthan",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 37448,
      "OBC": null,
      "EWS": 49568,
      "SC": 139644,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-silchar",
    "collegeName": "Government Dental College, Silchar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1145889,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-silchargovernment",
    "collegeName": "Government Dental College, Silchar,Government Dental College,Silchar,Hailakandi road,Near Silchar Medical College,Ghungoor,Silchar, Assam, 788014",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 48214,
      "OBC": 49645,
      "EWS": 52844,
      "SC": 180602,
      "ST": 200066
    }
  },
  {
    "collegeId": "government-dental-college-thrissur",
    "collegeName": "Government Dental College, Thrissur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 150123,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-dental-college-thrissurmedical",
    "collegeName": "Government Dental College, Thrissur,MEDICAL COLLEGE(P O) THRISSUR, Kerala, 680596",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 37882,
      "OBC": 38454,
      "EWS": null,
      "SC": 180041,
      "ST": null
    }
  },
  {
    "collegeId": "government-dentalcollege-and-hospital",
    "collegeName": "Government DentalCollege and Hospital Paithna Bhaganbigha Rahui Nalanda",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 215638,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-dentalcollege-and-hospital",
    "collegeName": "Government DentalCollege and Hospital Paithna Bhaganbigha Rahui Nalanda,Paithna- Bhaganbigha, Rahui, Nalanda, Bihar, 803118",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 32323,
      "OBC": 42702,
      "EWS": null,
      "SC": 180520,
      "ST": 233388
    }
  },
  {
    "collegeId": "government-doon-medcial-college",
    "collegeName": "Government Doon Medcial College, Dehradun",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 973538,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-doon-medcial-college",
    "collegeName": "Government Doon Medcial College, Dehradun,Government Doon Medical College, Dehrakhas Patel Nagar, Dehradun 248001, Uttarakhand, 248001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10125,
      "OBC": 875148,
      "EWS": 10772,
      "SC": 82017,
      "ST": 102566
    }
  },
  {
    "collegeId": "government-medcial-college-gondia",
    "collegeName": "Government Medcial College, Gondia",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 856657,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medcial-college-gondianear",
    "collegeName": "Government Medcial College, Gondia,NEAR NEHRU CHOWK, K.T.S. HOSPITAL CAMPUS, GONDIA., Maharashtra, 441601",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21637,
      "OBC": 965864,
      "EWS": 25054,
      "SC": 118927,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-hospital",
    "collegeName": "Government Medical College & Hospital, Alibag- Raigad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 94716,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-hospital",
    "collegeName": "Government Medical College & Hospital, Alibag- Raigad,Government Medical College of Alibag, Alibag beach limaye wadi Alibagh Maharashtra- 402201, Maharashtra, 402201",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 831158,
      "OBC": 22246,
      "EWS": 25382,
      "SC": 105312,
      "ST": 134649
    }
  },
  {
    "collegeId": "government-medical-college-hospital",
    "collegeName": "Government Medical College & Hospital, Alibag-Raigad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 64009,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-hospital",
    "collegeName": "Government Medical College & Hospital, Jalpaiguri",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 133067,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-hospital",
    "collegeName": "Government Medical College & Hospital, Jalpaiguri,Hospital Road, Jalpaiguri, West Bengal- 735101, West Bengal, 735101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22799,
      "OBC": 24544,
      "EWS": 25119,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-yadadri",
    "collegeName": "Government Medical College ,Yadadri",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 141574,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-yadadripagadipally",
    "collegeName": "Government Medical College ,Yadadri,PAGADIPALLY BHONGIR YADADRI BHUVANAGIRI, Telangana, 508116",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24680,
      "OBC": 25386,
      "EWS": 28813,
      "SC": 129387,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-chittorgarh",
    "collegeName": "Government Medical College Chittorgarh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 868162,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-chittorgarh",
    "collegeName": "Government Medical College Chittorgarh ,Government Medical College Chittorgarh Bojunda - Udaipur Road Chittorgarh, Rajasthan, 312025",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 12301,
      "OBC": 13285,
      "EWS": 16282,
      "SC": 82373,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-mahasamund",
    "collegeName": "Government Medical College Mahasamund Chhattisgarh",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 130865,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-mahasamund",
    "collegeName": "Government Medical College Mahasamund Chhattisgarh,In front of Sai temple raipur road village kharora Mahasamund, Chhattisgarh, 493445",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23229,
      "OBC": 24565,
      "EWS": 27114,
      "SC": 120890,
      "ST": 145338
    }
  },
  {
    "collegeId": "government-medical-college-narsampet",
    "collegeName": "Government Medical College Narsampet, Telangana",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 999235,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-narsampet",
    "collegeName": "Government Medical College Narsampet, Telangana,Sarwapuram, Pakhal road, Land mark- Bharath petrol pump, Narsamapet, Telangana, 506132",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 957117,
      "OBC": 25459,
      "EWS": 29272,
      "SC": 132028,
      "ST": 154855
    }
  },
  {
    "collegeId": "government-medical-college-nirmal",
    "collegeName": "Government Medical College Nirmal",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24424,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-nirmalbeside",
    "collegeName": "Government Medical College Nirmal,BESIDE DIVYA GARDEN , DIVYA NAGAR NIRMAL, Telangana, 504106",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25445,
      "OBC": 25718,
      "EWS": 29435,
      "SC": 133530,
      "ST": 155069
    }
  },
  {
    "collegeId": "government-medical-college-satna",
    "collegeName": "Government Medical College Satna",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1016849,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-satna",
    "collegeName": "Government Medical College Satna ,Near Kendriya Vidyalaya No. 2, Kripalpur Satna, Madhya Pradesh, 485001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18863,
      "OBC": 19721,
      "EWS": 20808,
      "SC": 110989,
      "ST": 121048
    }
  },
  {
    "collegeId": "government-medical-college-siddipet",
    "collegeName": "Government Medical College Siddipet",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 120548,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-siddipetsurvey",
    "collegeName": "Government Medical College Siddipet,Survey No 54, Ensanpalli Village, Siddipet Mandal, Siddipet, Telangana, 502114",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22590,
      "OBC": 23219,
      "EWS": 24331,
      "SC": null,
      "ST": 143103
    }
  },
  {
    "collegeId": "government-medical-college-suryapet",
    "collegeName": "Government Medical College Suryapet",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1315471,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-suryapetamaravadi",
    "collegeName": "Government Medical College Suryapet,AMARAVADI NAGAR, TALLAGADDA, SURYAPET- 508213 Suraypet Dist, Telangana, 508213",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 929839,
      "OBC": 22369,
      "EWS": 24639,
      "SC": 125873,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "Government Medical College and District General Hospital,Ratnagiri",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 114407,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "Government Medical College and District General Hospital,Ratnagiri,Hodekar Road, Udyamnagar, Patwardhanwadi, Ratnagiri, Maharashtra-415612, Maharashtra, 415612",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21314,
      "OBC": 21941,
      "EWS": 25695,
      "SC": 123553,
      "ST": 134076
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "Government Medical College and ESIC Hospital, Coimbatore",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1029480,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "Government Medical College and ESIC Hospital, Coimbatore",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 558306,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "Government Medical College and ESIC Hospital, Coimbatore,KAMARAJAR ROAD, VARADHARAJAPURAM, SINGANALLUR, COIMBATORE, Tamil Nadu, 641015",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1120931,
      "OBC": null,
      "EWS": 27105,
      "SC": 115647,
      "ST": 130919
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "Government Medical College and ESIC Hospital, Coimbatore,KAMARAJAR ROAD, VARADHARAJAPURAM, SINGANALLUR, COIMBATORE, Tamil Nadu, 641015",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": null,
      "SC": 188384,
      "ST": 525616
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "Government Medical College and Hospital, Jajpur, Odisha (Renamed as Jajati Keshari Medical College and Hospital, Jajpur)",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 590717,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "Government Medical College and Hospital, Jajpur, Odisha (Renamed as Jajati Keshari Medical College and Hospital, Jajpur),Dean and Principal, Government Medical College and Hospital, Jajpur, Renamed as Maharaja Jajati Kesh, Odisha, 755001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1029750,
      "OBC": 23679,
      "EWS": null,
      "SC": 115037,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "Government Medical College and Hospital, Keonjhar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 141327,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-and",
    "collegeName": "Government Medical College and Hospital, Keonjhar,AT- KABITRA, NEAR DD COLLEGE, KEONJHARGARH, PS- TOWN POLICE STATION, DIST-KEONJHAR, ODISHA, Odisha, 758001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23605,
      "OBC": 24566,
      "EWS": 26677,
      "SC": 119171,
      "ST": 150055
    }
  },
  {
    "collegeId": "government-medical-college-amravati",
    "collegeName": "Government Medical College, Amravati",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22015,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-amravati",
    "collegeName": "Government Medical College, Amravati ,Government Medical College District Women Hospital Campus Daffrin Shrikrishna Peth Amravati, Maharashtra, 444601",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21579,
      "OBC": 22364,
      "EWS": null,
      "SC": 118303,
      "ST": 130344
    }
  },
  {
    "collegeId": "government-medical-college-ananthapuram",
    "collegeName": "Government Medical College, Ananthapuram",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 97260,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-ananthapuramgovernmen",
    "collegeName": "Government Medical College, Ananthapuram,GOVERNMEN T MEDICAL COLLEGE ANANTHAPURAMU, Andhra Pradesh, 515001",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22485,
      "OBC": 22819,
      "EWS": 26931,
      "SC": 123195,
      "ST": 150040
    }
  },
  {
    "collegeId": "government-medical-college-anantnag",
    "collegeName": "Government Medical College, Anantnag",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 168231,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-anantnagverinag",
    "collegeName": "Government Medical College, Anantnag,verinag Road Dialgam Anantnag 192210, Jammu And Kashmir, 192210",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21671,
      "OBC": 22979,
      "EWS": 23614,
      "SC": 128337,
      "ST": 129248
    }
  },
  {
    "collegeId": "government-medical-college-ariyalur",
    "collegeName": "Government Medical College, Ariyalur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 151726,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-ariyalur",
    "collegeName": "Government Medical College, Ariyalur ,1 COLLEGE ROAD GOVERNMENT MEDICAL COLLEGE ARIYALUR TAMIL NADU PIN 621713, Tamil Nadu, 621713",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19655,
      "OBC": 20307,
      "EWS": 29570,
      "SC": 134336,
      "ST": 159250
    }
  },
  {
    "collegeId": "government-medical-college-buldhana",
    "collegeName": "Government Medical College, BULDHANA,",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 116364,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-buldhana",
    "collegeName": "Government Medical College, BULDHANA, ,DISTRICT WOMEN HOSPITAL, T.B. HOSPITAL CAMPUS, DHAD ROAD, BULDHANA., Maharashtra, 443001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23157,
      "OBC": 23759,
      "EWS": null,
      "SC": 126190,
      "ST": 140919
    }
  },
  {
    "collegeId": "government-medical-college-banswara",
    "collegeName": "Government Medical College, Banswara, Rajasthan",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1297532,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-banswara",
    "collegeName": "Government Medical College, Banswara, Rajasthan,MADARESHWAR, RATLAM ROAD BANSWARA, Rajasthan, 327001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17135,
      "OBC": 17320,
      "EWS": 18640,
      "SC": 100702,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-baramulla",
    "collegeName": "Government Medical College, Baramulla",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 108934,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-baramulla",
    "collegeName": "Government Medical College, Baramulla ,Kanth Bagh Baramulla, Jammu and Kashmir, Jammu And Kashmir, 193101",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23723,
      "OBC": 24333,
      "EWS": 25440,
      "SC": 129804,
      "ST": 134753
    }
  },
  {
    "collegeId": "government-medical-college-bhadradri",
    "collegeName": "Government Medical College, Bhadradri, Kothagudem",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 27655,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-bhadradri",
    "collegeName": "Government Medical College, Bhadradri, Kothagudem,Besides Sammakka Saarakka temple, Opp KSM Petrol bunk, end of 6th Battalion Rd, Palvancha, Telangana, Telangana, 507118",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25342,
      "OBC": 25462,
      "EWS": 28618,
      "SC": 133388,
      "ST": 151630
    }
  },
  {
    "collegeId": "government-medical-college-bhandara",
    "collegeName": "Government Medical College, Bhandara",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 809364,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-bhandaradistrict",
    "collegeName": "Government Medical College, Bhandara,District Hospital Campus, Sant Kabir Ward, Bhandara, Maharashtra, 441904",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 909911,
      "OBC": 24140,
      "EWS": 26905,
      "SC": 129179,
      "ST": 137961
    }
  },
  {
    "collegeId": "government-medical-college-bhilwara",
    "collegeName": "Government Medical College, Bhilwara",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 556124,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-bhilwarasindari",
    "collegeName": "Government Medical College, Bhilwara,Sindari Ke Balaji Road Sanganer Bhilwara, Rajasthan, 311001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 9607,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-churachandpur",
    "collegeName": "Government Medical College, Churachandpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 682344,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-churachandpurhiangtam",
    "collegeName": "Government Medical College, Churachandpur,Hiangtam Lamka, I.B. Road, Churachandpur District, Manipur, 795128",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1119200,
      "OBC": 26166,
      "EWS": 29587,
      "SC": 132946,
      "ST": 159217
    }
  },
  {
    "collegeId": "government-medical-college-dholpur",
    "collegeName": "Government Medical College, Dholpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 947809,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-dholpur411",
    "collegeName": "Government Medical College, Dholpur,411, OLD BARI ROAD, DHOLPUR, Rajasthan, 328001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15637,
      "OBC": 16202,
      "EWS": 16430,
      "SC": 97673,
      "ST": 103167
    }
  },
  {
    "collegeId": "government-medical-college-dindigul",
    "collegeName": "Government Medical College, Dindigul",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1070479,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-dindigul1",
    "collegeName": "Government Medical College, Dindigul,1 Nallampatti Road Adiyanoothu village Dindigul, Tamil Nadu, 624003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1028297,
      "OBC": 18830,
      "EWS": 29975,
      "SC": 135642,
      "ST": 160648
    }
  },
  {
    "collegeId": "government-medical-college-doda",
    "collegeName": "Government Medical College, Doda",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 633921,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-dodagovernment",
    "collegeName": "Government Medical College, Doda,Government Medical College & Hospital Ghat Doda, Jammu And Kashmir, 182202",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21995,
      "OBC": 22796,
      "EWS": 22948,
      "SC": 126944,
      "ST": 132128
    }
  },
  {
    "collegeId": "government-medical-college-esic",
    "collegeName": "Government Medical College, ESIC, Kollam",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 125299,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-esic",
    "collegeName": "Government Medical College, ESIC, Kollam",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1197948,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-esic",
    "collegeName": "Government Medical College, ESIC, Kollam,Parippally Kollam 691574, Kerala, 691574",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11585,
      "OBC": 12312,
      "EWS": 27149,
      "SC": 115768,
      "ST": 147023
    }
  },
  {
    "collegeId": "government-medical-college-esic",
    "collegeName": "Government Medical College, ESIC, Kollam,Parippally Kollam 691574, Kerala, 691574",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 33773,
      "EWS": 56491,
      "SC": 174940,
      "ST": 578106
    }
  },
  {
    "collegeId": "government-medical-college-eluru",
    "collegeName": "Government Medical College, Eluru",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 927401,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-elurusurvey",
    "collegeName": "Government Medical College, Eluru,SURVEY NO 60, BEHIND OLD BUS STAND, ELURU, Andhra Pradesh, 534005",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1120864,
      "OBC": 25120,
      "EWS": 28135,
      "SC": 127391,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-hanumangarh",
    "collegeName": "Government Medical College, Hanumangarh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 85998,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-hanumangarhganganagar",
    "collegeName": "Government Medical College, Hanumangarh,Ganganagar- sangria Bypass Road Hanumangarh Junction, Rajasthan, 335512",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15789,
      "OBC": 16287,
      "EWS": null,
      "SC": 99115,
      "ST": 109960
    }
  },
  {
    "collegeId": "government-medical-college-hingoli",
    "collegeName": "Government Medical College, Hingoli",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 891703,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-hingoligovernment",
    "collegeName": "Government Medical College, Hingoli,Government Medical College, Washim Road, Balsond, Hingoli, Maharashtra, 431513",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24562,
      "OBC": 24793,
      "EWS": 26277,
      "SC": 131495,
      "ST": 146137
    }
  },
  {
    "collegeId": "government-medical-college-jagtial",
    "collegeName": "Government Medical College, Jagtial",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1025507,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-jagtialgovernment",
    "collegeName": "Government Medical College, Jagtial,Government Medical College, Jagtial, Jagtial Village, Jagtial Tehsil, Jagtial Dist, Telangana, 505327",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24749,
      "OBC": 25625,
      "EWS": 29263,
      "SC": 132865,
      "ST": 154384
    }
  },
  {
    "collegeId": "government-medical-college-jaisalmer",
    "collegeName": "Government Medical College, Jaisalmer",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 93826,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-jaisalmer",
    "collegeName": "Government Medical College, Jaisalmer , NH68, Ramgarh Road, Badabagh, Jaisalmer",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17513,
      "OBC": 17608,
      "EWS": null,
      "SC": 101237,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-jalna",
    "collegeName": "Government Medical College, Jalna",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 599042,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-jalnagovernment",
    "collegeName": "Government Medical College, Jalna,Government Medical College, Global Gurukul School, in front of Sushiladevi Lawns, Ambad-Mantha Bypas, Maharashtra, 431213",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 872406,
      "OBC": 24979,
      "EWS": 26337,
      "SC": 131383,
      "ST": 139363
    }
  },
  {
    "collegeId": "government-medical-college-jhunjhunu",
    "collegeName": "Government Medical College, Jhunjhunu, Rajasthan",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 588641,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-jhunjhunu",
    "collegeName": "Government Medical College, Jhunjhunu, Rajasthan,jjnmedicalcollege@ gmail.com, Rajasthan, 333001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 901297,
      "OBC": 15351,
      "EWS": null,
      "SC": 98653,
      "ST": 106302
    }
  },
  {
    "collegeId": "government-medical-college-kallakurichi",
    "collegeName": "Government Medical College, Kallakurichi",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 138714,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-kallakurichi",
    "collegeName": "Government Medical College, Kallakurichi ,S.NO 251, AGARAKOTTALAM ROAD, SIRUVANGUR, KALLAKURICHI, Tamil Nadu, 606213",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20379,
      "OBC": 20408,
      "EWS": 29997,
      "SC": 135812,
      "ST": 161502
    }
  },
  {
    "collegeId": "government-medical-college-kanker",
    "collegeName": "Government Medical College, Kanker, Chhattisgarh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1012658,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-kanker",
    "collegeName": "Government Medical College, Kanker, Chhattisgarh,Late Smt. Indira Gandhi Memorial Government Medical College, Kanker, Chhattisgarh, Chhattisgarh, 494334",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 927021,
      "OBC": 24614,
      "EWS": 26727,
      "SC": 120613,
      "ST": 142016
    }
  },
  {
    "collegeId": "government-medical-college-kasaragod",
    "collegeName": "Government Medical College, Kasaragod, Kerala,Ukkinadka, Badiadka, Panchayath",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16876,
      "OBC": 17970,
      "EWS": null,
      "SC": 112500,
      "ST": 158381
    }
  },
  {
    "collegeId": "government-medical-college-kathua",
    "collegeName": "Government Medical College, Kathua",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1172216,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-kathuachak",
    "collegeName": "Government Medical College, Kathua,Chak Sajjan Kathua, Jammu And Kashmir, 184101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14842,
      "OBC": 16909,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-khammam",
    "collegeName": "Government Medical College, Khammam",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 129932,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-khammamwyra",
    "collegeName": "Government Medical College, Khammam,Wyra Road, Khammam, Telangana, 507002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23859,
      "OBC": 23893,
      "EWS": null,
      "SC": 125821,
      "ST": 144547
    }
  },
  {
    "collegeId": "government-medical-college-kodangal",
    "collegeName": "Government Medical College, Kodangal",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24335,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-kodangalsurvey",
    "collegeName": "Government Medical College, Kodangal,Survey Number 51, Kokat, Besides Mother and Child Hospital, Tandur, Vikarabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25507,
      "OBC": 25766,
      "EWS": 29580,
      "SC": 132834,
      "ST": 157255
    }
  },
  {
    "collegeId": "government-medical-college-konni",
    "collegeName": "Government Medical College, Konni",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1095563,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-konni",
    "collegeName": "Government Medical College, Konni ,GOVERNMENT MEDICAL COLLEGE KONNI KUMMANNOOR PO KONNI PATHANAMTHITTA 689691, Kerala, 689691",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13587,
      "OBC": 985431,
      "EWS": 29355,
      "SC": 133845,
      "ST": 159265
    }
  },
  {
    "collegeId": "government-medical-college-korbacg",
    "collegeName": "Government Medical College, Korba(C.G.)",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1078705,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-korbacggovt",
    "collegeName": "Government Medical College, Korba(C.G.),Govt. Medical College, Village Jhagrha, Balco-urga Road, City Korba C.G., Chhattisgarh, 495683",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24296,
      "OBC": 24748,
      "EWS": 25759,
      "SC": 1114323,
      "ST": 132026
    }
  },
  {
    "collegeId": "government-medical-college-krishnagiri",
    "collegeName": "Government Medical College, Krishnagiri",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1045980,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-krishnagiriblock1",
    "collegeName": "Government Medical College, Krishnagiri,Block-1, Polupalli, Krishnagiri, Tamil Nadu, 635115",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19612,
      "OBC": 19817,
      "EWS": null,
      "SC": 134095,
      "ST": 154472
    }
  },
  {
    "collegeId": "government-medical-college-mahabubabad",
    "collegeName": "Government Medical College, Mahabubabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 141607,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-mahabubabadgovernment",
    "collegeName": "Government Medical College, Mahabubabad,Government Medical College, Mahabubabad, 551-1-P Mahabubabad Village Mahabubabad, Telangana, 506101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24348,
      "OBC": 1161107,
      "EWS": null,
      "SC": 122557,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-mahabubangar",
    "collegeName": "Government Medical College, Mahabubangar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 558819,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-mahabubangargovernment",
    "collegeName": "Government Medical College, Mahabubangar,Government Medical College Mahabubnagar,Thirumala Hills, Edira Village.Mahabubnagar, Telangana, 509002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21393,
      "OBC": 23259,
      "EWS": 23466,
      "SC": null,
      "ST": 119558
    }
  },
  {
    "collegeId": "government-medical-college-maheshwaram",
    "collegeName": "Government Medical College, Maheshwaram, Telangana",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 106467,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-maheshwaram",
    "collegeName": "Government Medical College, Maheshwaram, Telangana,BIET COLLEGE CAMPUS, MANGALPALLY VILLAGE, IBRAHIMPATNAM, RANGAREDDY DISTRICT, Telangana, 501510",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21259,
      "OBC": 25423,
      "EWS": 28606,
      "SC": 132024,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-mancherial",
    "collegeName": "Government Medical College, Mancherial",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 135567,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-mancherialgovernment",
    "collegeName": "Government Medical College, Mancherial,Government Medical College 708 Garmilla Village , Mancherial Tehsil Mancherial., Telangana, 504208",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25091,
      "OBC": 25639,
      "EWS": 27467,
      "SC": 133725,
      "ST": 154131
    }
  },
  {
    "collegeId": "government-medical-college-mumbai",
    "collegeName": "Government Medical College, Mumbai, Maharashtra",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 45429,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-mumbai",
    "collegeName": "Government Medical College, Mumbai, Maharashtra,Gokuldas Tejpal Hospital Premises L T Marg Near L T Marg Police Station Near Crawford Market Mumbai, Maharashtra, 400001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10468,
      "OBC": 12550,
      "EWS": null,
      "SC": 93252,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-nagapattinam",
    "collegeName": "Government Medical College, Nagapattinam",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 154776,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-nagapattinamno1manalm",
    "collegeName": "Government Medical College, Nagapattinam,NO.1,MANALM EDU, ORATHUR VILLAGE, NAGAPATTINAM TK, NAGAPATTINAM DISTRICT, Tamil Nadu, 611108",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21092,
      "OBC": 21606,
      "EWS": 29661,
      "SC": 135882,
      "ST": 161652
    }
  },
  {
    "collegeId": "government-medical-college-nagarkurnool",
    "collegeName": "Government Medical College, Nagarkurnool",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 866312,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-nagarkurnoolsy",
    "collegeName": "Government Medical College, Nagarkurnool,Sy no. 237, Uyyalawada village, Nanagarkurnool, Telangana, 509209",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 919523,
      "OBC": 1098545,
      "EWS": 27815,
      "SC": 128708,
      "ST": 152004
    }
  },
  {
    "collegeId": "government-medical-college-narayanpet",
    "collegeName": "Government Medical College, Narayanpet, Telangana",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 142347,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-narayanpet",
    "collegeName": "Government Medical College, Narayanpet, Telangana,Government Medical College Narayanpet Jajapur Narayanpet District Telangana Pincode 509210, Telangana, 509210",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25292,
      "OBC": 25664,
      "EWS": null,
      "SC": null,
      "ST": 156540
    }
  },
  {
    "collegeId": "government-medical-college-nashik",
    "collegeName": "Government Medical College, Nashik",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 72412,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-nashikhindu",
    "collegeName": "Government Medical College, Nashik,Hindu Hruday Samrat Vandaniya Balasaheb Thakare Hospital and Bytco Hospital Near Durga mata mandir M, Maharashtra, 422214",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15483,
      "OBC": 19051,
      "EWS": null,
      "SC": 106813,
      "ST": 126140
    }
  },
  {
    "collegeId": "government-medical-college-nilgiris",
    "collegeName": "Government Medical College, Nilgiris",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1059199,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-nilgirisno",
    "collegeName": "Government Medical College, Nilgiris,No. 1, INDU NAGAR, MYSORE ROAD, UDHAGAMANDALAM, NILGIRIS DISTRICT, Tamil Nadu, 643005",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": 29977,
      "SC": 135266,
      "ST": 159742
    }
  },
  {
    "collegeId": "government-medical-college-nizamabad",
    "collegeName": "Government Medical College, Nizamabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 105026,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-nizamabadrproad",
    "collegeName": "Government Medical College, Nizamabad,R.P.Road, Near Bustand, Khaleelwadi Nizamabad, Telangana, 503001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22448,
      "OBC": 22818,
      "EWS": null,
      "SC": 110438,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-omandurar",
    "collegeName": "Government Medical College, Omandurar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 81149,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-omandurargovernment",
    "collegeName": "Government Medical College, Omandurar,GOVERNMENT MEDICAL COLLEGE, OMANDURAR GOVERNMENT ESTATE, WALAJA ROAD, CHENNAI - 600 002., Tamil Nadu, 600002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 12902,
      "OBC": 14238,
      "EWS": null,
      "SC": 59491,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-pali",
    "collegeName": "Government Medical College, Pali",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 87766,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-palinh",
    "collegeName": "Government Medical College, Pali,NH- 62,SumerpurRoad,Ramasia.H emawas,Pali, Rajasthan, 306401",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10739,
      "OBC": null,
      "EWS": null,
      "SC": 78869,
      "ST": 93545
    }
  },
  {
    "collegeId": "government-medical-college-parbhani",
    "collegeName": "Government Medical College, Parbhani",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 599793,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-parbhaniiti",
    "collegeName": "Government Medical College, Parbhani,ITI CAMPUS, BEHIND DSM COLLEGE, JINTUR ROAD, PARBHANI - 431401, Maharashtra, 431401",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22949,
      "OBC": 23487,
      "EWS": 23985,
      "SC": 129165,
      "ST": 139769
    }
  },
  {
    "collegeId": "government-medical-college-quthbullapur",
    "collegeName": "Government Medical College, Quthbullapur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 86163,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-quthbullapurgovernment",
    "collegeName": "Government Medical College, Quthbullapur,Government Medical College Quthbullapur, Plot A2-2B ECIL cross roads Kushaiguda Hyderabad Medch, Telangana, 500062",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22606,
      "OBC": null,
      "EWS": 27998,
      "SC": 117960,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-rajnandgaon",
    "collegeName": "Government Medical College, Rajnandgaon",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 127131,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-rajnandgaonbharat",
    "collegeName": "Government Medical College, Rajnandgaon,Bharat Ratna Late Shri Atal Bihari Vajpayee Memorial Medical College, Pendri, Rajnandgaon. Chhattisg, Chhattisgarh, 491441",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19804,
      "OBC": 21247,
      "EWS": null,
      "SC": 111107,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-ramagundam",
    "collegeName": "Government Medical College, Ramagundam",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 803458,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-ramagundamsurvey",
    "collegeName": "Government Medical College, Ramagundam,SURVEY NUMBER 92 95 96 MALKAPUR VILLAGE RAMAGUNDAM, Telangana, 505209",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1113178,
      "OBC": 24128,
      "EWS": 26439,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-ramanathapuram",
    "collegeName": "Government Medical College, Ramanathapuram",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 781291,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-ramanathapuramno",
    "collegeName": "Government Medical College, Ramanathapuram,No 1, Pattinamkathan, Collectorate Backside, Ramanathapuram., Tamil Nadu, 623503",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20511,
      "OBC": 21048,
      "EWS": 29876,
      "SC": 136143,
      "ST": 161014
    }
  },
  {
    "collegeId": "government-medical-college-sawai",
    "collegeName": "Government Medical College, Sawai Madhopur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1004190,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-sawai",
    "collegeName": "Government Medical College, Sawai Madhopur,Government Medical College, Sawai Madhopur Village Thingla, Sawai Madhopur, Rajasthan, Rajasthan, 322001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16350,
      "OBC": 17027,
      "EWS": 17471,
      "SC": 99348,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-seoni",
    "collegeName": "Government Medical College, Seoni, Madhya Pradesh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 111935,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-seoni",
    "collegeName": "Government Medical College, Seoni, Madhya Pradesh,Government Medical College, Kandipaar Village, Seoni, Madhya Pradesh, 480661",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19799,
      "OBC": 20049,
      "EWS": 21089,
      "SC": 109608,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-sindhudurg",
    "collegeName": "Government Medical College, Sindhudurg",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 717607,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-sindhudurgdean",
    "collegeName": "Government Medical College, Sindhudurg,Dean Government Medical College Sindhudurg, Maharashtra, 416812",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23076,
      "OBC": 23363,
      "EWS": 25475,
      "SC": 126698,
      "ST": 136446
    }
  },
  {
    "collegeId": "government-medical-college-sundargarh",
    "collegeName": "Government Medical College, Sundargarh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 754386,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-sundargarhat",
    "collegeName": "Government Medical College, Sundargarh,At- Chitabhanga,Po-Sankara,Dist- Sundargarh,Odisha,Pin- 770001, Odisha, 770001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23339,
      "OBC": null,
      "EWS": null,
      "SC": 117962,
      "ST": 149644
    }
  },
  {
    "collegeId": "government-medical-college-thiruvallur",
    "collegeName": "Government Medical College, Thiruvallur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1167724,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-thiruvallurblock",
    "collegeName": "Government Medical College, Thiruvallur,BLOCK 1 MASTER PLAN COMPLEX, THIRUVALLUR COLLECTORATE, PERUMBAKKAM VILLAGE, THIRUVALLUR, TAMIL NADU , Tamil Nadu, 602001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16363,
      "OBC": 17425,
      "EWS": 28538,
      "SC": 96548,
      "ST": 157982
    }
  },
  {
    "collegeId": "government-medical-college-tiruppur",
    "collegeName": "Government Medical College, Tiruppur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 147463,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-tiruppur18",
    "collegeName": "Government Medical College, Tiruppur,18 DHARAPURAM ROAD TIRUPPUR TAMILNADU 641608, Tamil Nadu, 641608",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": 29797,
      "SC": 135085,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-tonk",
    "collegeName": "Government Medical College, Tonk",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 96928,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-tonkgovernment",
    "collegeName": "Government Medical College, Tonk,Government Medical College, Yusufpura charai, Rajasthan",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17169,
      "OBC": 17331,
      "EWS": null,
      "SC": 101029,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-virudhunagar",
    "collegeName": "Government Medical College, Virudhunagar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1062708,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-virudhunagar1",
    "collegeName": "Government Medical College, Virudhunagar,1 COLLECTORATE MASTER PLAN COMPLEX KOORAIKUNDU VILLAGE VIRUDHUNAGAR, Tamil Nadu, 626002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17247,
      "OBC": 18847,
      "EWS": null,
      "SC": 136372,
      "ST": 161133
    }
  },
  {
    "collegeId": "government-medical-college-washim",
    "collegeName": "Government Medical College, Washim",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 839378,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-washimgovernment",
    "collegeName": "Government Medical College, Washim,Government Medical College, Washim District womens Hospital building, Nalanda Nagar, Chikhali Road, Maharashtra, 444505",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24466,
      "OBC": 24931,
      "EWS": 26579,
      "SC": 128039,
      "ST": 143127
    }
  },
  {
    "collegeId": "government-medical-college-wayanad",
    "collegeName": "Government Medical College, Wayanad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 12491,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-wayanadhospital",
    "collegeName": "Government Medical College, Wayanad,Hospital Rd, Thazhe Angadi, Mananthavady, Kerala 670645",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14769,
      "OBC": 15152,
      "EWS": 29472,
      "SC": 128490,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-ambernath",
    "collegeName": "Government Medical college, Ambernath",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 108752,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-ambernathsurvey",
    "collegeName": "Government Medical college, Ambernath,Survey No.128, Jambhulgaon Road, Ambernath West, District Thane, Maharashtra, 421505",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20024,
      "OBC": 21718,
      "EWS": 20409,
      "SC": 123067,
      "ST": 136883
    }
  },
  {
    "collegeId": "government-medical-college-haridwar",
    "collegeName": "Government Medical college, Haridwar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 104063,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-haridwarjagjeetpur",
    "collegeName": "Government Medical college, Haridwar,Jagjeetpur Laksar road Haridwar, Uttarakhand, 249408",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15415,
      "OBC": 19112,
      "EWS": 19970,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-namakkal",
    "collegeName": "Government medical College, Namakkal",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1145270,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-namakkal353",
    "collegeName": "Government medical College, Namakkal,353 MASTER PLAN COMPLEX SILUVAMPATTY NAMAKKAL, Tamil Nadu, 637003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18921,
      "OBC": null,
      "EWS": 29433,
      "SC": 134263,
      "ST": 161066
    }
  },
  {
    "collegeId": "government-medical-college-thalarasingi",
    "collegeName": "Government medical College, Thalarasingi village, Paderu",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 150789,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-medical-college-thalarasingi",
    "collegeName": "Government medical College, Thalarasingi village, Paderu,TALARASINGI VILLAGE,PADERU, ASR DISTRICT, Andhra Pradesh, 531024",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25334,
      "OBC": 25539,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-of-medical-college",
    "collegeName": "Government of Medical College and Hospital, Balasore",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 85852,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "government-of-medical-college",
    "collegeName": "Government of Medical College and Hospital, Balasore,Remuna, Balasore, 756019, Odisha, 756019",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1092926,
      "OBC": 20113,
      "EWS": 20866,
      "SC": 93286,
      "ST": 149202
    }
  },
  {
    "collegeId": "govt-dental-college-rims",
    "collegeName": "Govt Dental College RIMS Kadapa",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 225653,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-rims",
    "collegeName": "Govt Dental College RIMS Kadapa,PRINCIPAL GOVT DENTAL COLLEGE, RIMS, PUTLAMPALLI KADAPA State ANDHRA PRADESH Pin 516004, Andhra Pradesh, 516004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 48688,
      "OBC": 49949,
      "EWS": 52769,
      "SC": 176345,
      "ST": 241429
    }
  },
  {
    "collegeId": "govt-medical-college-badaun",
    "collegeName": "Govt Medical College Badaun",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 106452,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-badaungunera",
    "collegeName": "Govt Medical College Badaun,Gunera Wazidpur Ujhani Road Badaun U.P. 243601",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16066,
      "OBC": 16929,
      "EWS": 17379,
      "SC": 100034,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-baramati",
    "collegeName": "Govt Medical College Baramati",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 95112,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-baramatiplot",
    "collegeName": "Govt Medical College Baramati,Plot No P107 MIDC area Opposite Women Hospital Baramati Taluka Baramati District Pune, Maharashtra, 413133",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13890,
      "OBC": 16915,
      "EWS": 19563,
      "SC": 93467,
      "ST": 120996
    }
  },
  {
    "collegeId": "govt-medical-college-barmer",
    "collegeName": "Govt Medical College Barmer Rajasthan",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 95406,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-barmer",
    "collegeName": "Govt Medical College Barmer Rajasthan,NH-15, JAISALMER ROAD, VILLAGE-JALIPA, BARMER, Rajasthan, 344001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13865,
      "OBC": 14754,
      "EWS": null,
      "SC": 90279,
      "ST": 100855
    }
  },
  {
    "collegeId": "govt-medical-college-basti",
    "collegeName": "Govt Medical College Basti",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 626802,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-bastirampur",
    "collegeName": "Govt Medical College Basti,RAMPUR TAHSIL SADAR BASTI BASTI, Uttar Pradesh, 272124",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18430,
      "OBC": 18806,
      "EWS": 19273,
      "SC": 108453,
      "ST": 116051
    }
  },
  {
    "collegeId": "govt-medical-college-faizabad",
    "collegeName": "Govt Medical College Faizabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 105067,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-faizabad",
    "collegeName": "Govt Medical College Faizabad ,GANJA PARGANA- HAVELI AWADH, TAHSIL- SADAR AYODHYA (FAIZABAD), Uttar Pradesh, 224001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16165,
      "OBC": 16835,
      "EWS": 18667,
      "SC": 97911,
      "ST": 107947
    }
  },
  {
    "collegeId": "govt-medical-college-firozabad",
    "collegeName": "Govt Medical College Firozabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1252703,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-firozabaddaulattapur",
    "collegeName": "Govt Medical College Firozabad,DAULATTAPUR JALESHAR ROAD NARKHI FIROZABAD, Uttar Pradesh, 283203",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16479,
      "OBC": 17273,
      "EWS": null,
      "SC": null,
      "ST": 112116
    }
  },
  {
    "collegeId": "govt-medical-college-kannur",
    "collegeName": "Govt Medical College Kannur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 114542,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-kannurpo",
    "collegeName": "Govt Medical College Kannur,P.O Pariyaram Medical College, Kannur, Kerala 670503, Kerala, 670503",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11650,
      "OBC": 11877,
      "EWS": 28738,
      "SC": 125961,
      "ST": 137232
    }
  },
  {
    "collegeId": "govt-medical-college-nalgonda",
    "collegeName": "Govt Medical College Nalgonda",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1202783,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-nalgondaoffice",
    "collegeName": "Govt Medical College Nalgonda,OFFICE OF THE PRINCIPAL, GOVERNMENT MEDICAL COLLGEGE,GANDHAMVARI GUDEM,SLBC,SAGAR ROAD,NALGONDA,TELA, Telangana, 508004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22637,
      "OBC": 23202,
      "EWS": null,
      "SC": 126040,
      "ST": 145525
    }
  },
  {
    "collegeId": "govt-medical-college-ratlam",
    "collegeName": "Govt Medical College Ratlam",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 792211,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-ratlamgram",
    "collegeName": "Govt Medical College Ratlam,Gram Banjali, Sailana Road, NH927A, Madhya Pradesh 457001, India, Madhya Pradesh, 457001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13959,
      "OBC": null,
      "EWS": null,
      "SC": 91920,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-shahdol",
    "collegeName": "Govt Medical College Shahdol",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1186460,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-shahdolgram",
    "collegeName": "Govt Medical College Shahdol,GRAM CHAMPA KUDRI ROAD NEAR NEW BUS STAND SHAHDOL MP, Madhya Pradesh, 484001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19132,
      "OBC": 19508,
      "EWS": 19899,
      "SC": 110702,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-vikarabad",
    "collegeName": "Govt Medical College Vikarabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 126434,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-vikarabad",
    "collegeName": "Govt Medical College Vikarabad ,ANANTHAGIRI HILLS VIKARABAD VIKARABAD DISTRICT TELANGANA 501101, Telangana, 501101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25392,
      "OBC": 25693,
      "EWS": 28771,
      "SC": 134192,
      "ST": 156857
    }
  },
  {
    "collegeId": "govt-medical-college-churu",
    "collegeName": "Govt Medical College, Churu",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 91685,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-churushekhawat",
    "collegeName": "Govt Medical College, Churu,Shekhawat Colony, Civil Lines Road,Churu, Rajasthan, 331001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11548,
      "OBC": 12207,
      "EWS": null,
      "SC": 80810,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-dungarpur",
    "collegeName": "Govt Medical College, Dungarpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 985532,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-dungarpurvillage",
    "collegeName": "Govt Medical College, Dungarpur,VILLAGE- THANA DUNGARPUR, Rajasthan, 314001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1022189,
      "OBC": 15232,
      "EWS": 15562,
      "SC": 90276,
      "ST": 102692
    }
  },
  {
    "collegeId": "govt-medical-college-ernakulam",
    "collegeName": "Govt Medical College, Ernakulam",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 893562,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-ernakulamhmt",
    "collegeName": "Govt Medical College, Ernakulam,HMT COLONY P O, KALAMASSERY, ERNAKULAM DISTRICT, Kerala, 683503",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11149,
      "OBC": 11625,
      "EWS": 28133,
      "SC": 117560,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-idukki",
    "collegeName": "Govt Medical College, Idukki",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 376372,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-idukkiprincipal",
    "collegeName": "Govt Medical College, Idukki,Principal, Govt Medical College Idukki, Idukki colony P.O.,Idukki District, Kerala, 685602",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 894551,
      "OBC": 14756,
      "EWS": 29504,
      "SC": 133417,
      "ST": 158046
    }
  },
  {
    "collegeId": "govt-medical-college-jogulamba",
    "collegeName": "Govt Medical College, Jogulamba, Gadwal",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 130512,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-jogulamba",
    "collegeName": "Govt Medical College, Jogulamba, Gadwal,GMC Jogulamba Gadwal, Near Doulath peer Dargah, Doudharpally, Ring Road, Sangala Cheruvu, Gadwal Tow, Telangana, 509125",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25129,
      "OBC": 25216,
      "EWS": null,
      "SC": 132805,
      "ST": 151485
    }
  },
  {
    "collegeId": "govt-medical-college-mulugu",
    "collegeName": "Govt Medical College, Mulugu, Telangana",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 94550,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-mulugu",
    "collegeName": "Govt Medical College, Mulugu, Telangana,gmc.mulugu@gmail .com, Telangana, 506343",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25517,
      "OBC": 25774,
      "EWS": 29410,
      "SC": 134132,
      "ST": 159079
    }
  },
  {
    "collegeId": "govt-medical-college-nagaur",
    "collegeName": "Govt Medical College, Nagaur Bikaner Road, Nagaur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 101593,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-nagaur",
    "collegeName": "Govt Medical College, Nagaur Bikaner Road, Nagaur,gmcnagaur@gmail.co m, Rajasthan, 341001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15959,
      "OBC": 17065,
      "EWS": null,
      "SC": 100025,
      "ST": 109833
    }
  },
  {
    "collegeId": "govt-medical-college-palakkad",
    "collegeName": "Govt Medical College, Palakkad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 137398,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-palakkadnh544",
    "collegeName": "Govt Medical College, Palakkad,NH-544, EAST YAKKARA, KUNNATHURMEDU POST, PALAKKAD-678013, Kerala, 678013",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13829,
      "OBC": 14342,
      "EWS": null,
      "SC": 130147,
      "ST": 154537
    }
  },
  {
    "collegeId": "govt-medical-college-shivpuri",
    "collegeName": "Govt Medical college Shivpuri",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 95669,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-shivpurinear",
    "collegeName": "Govt Medical college Shivpuri,Near Katha Mill, Gwalior Bypass Highway, Shivpuri, Madhya Pradesh, 473638",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16919,
      "OBC": 17022,
      "EWS": 17073,
      "SC": 95974,
      "ST": 111337
    }
  },
  {
    "collegeId": "govt-dental-college-pudukkottai",
    "collegeName": "Govt dental college Pudukkottai",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 138659,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-dental-college-pudukkottaigovt",
    "collegeName": "Govt dental college Pudukkottai,GOVT DENTAL COLLEGE MULLUR PUDUKKOTTAI, Tamil Nadu, 622003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 42009,
      "OBC": 44293,
      "EWS": null,
      "SC": 160513,
      "ST": null
    }
  },
  {
    "collegeId": "govt-institute-of-medcial",
    "collegeName": "Govt institute of Medcial Sciences, GREATER NOIDA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 75015,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-institute-of-medcial",
    "collegeName": "Govt institute of Medcial Sciences, GREATER NOIDA,GOVERNMENT INSTITUTE OF MEDICAL SCIENCES GREATER NOIDA GAUTAM BUDH NAGAR UTTAR PRADESH, Uttar Pradesh, 201310",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6760,
      "OBC": 9983,
      "EWS": 10796,
      "SC": 65741,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-jayashankar",
    "collegeName": "Govt. Medical College Jayashankar Bhupalpally",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 129319,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-jayashankar",
    "collegeName": "Govt. Medical College Jayashankar Bhupalpally,Manzoor Nagar Road, Besides thousand quarters, Jayashankar, Bhupalpally, Telangana, 506169",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25616,
      "OBC": 25820,
      "EWS": 28213,
      "SC": 132653,
      "ST": 156909
    }
  },
  {
    "collegeId": "govt-medical-college-karur",
    "collegeName": "Govt. Medical College Karur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 839727,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-karursanapiratti",
    "collegeName": "Govt. Medical College Karur,SANAPIRATTI VILLAGE NORTH GANDHIGRAMAM KARUR TAMILNADU, Tamil Nadu, 639004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16561,
      "OBC": 16740,
      "EWS": 29923,
      "SC": 136003,
      "ST": 158247
    }
  },
  {
    "collegeId": "govt-medical-college-rajanna",
    "collegeName": "Govt. Medical College Rajanna Sircilla",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 122589,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-rajanna",
    "collegeName": "Govt. Medical College Rajanna Sircilla,GOVERNMENT MEDICAL COLLEGE NEAR KASTURBA GIRLS SCHOOL PEDDUR SIRCILLA DISTRICT RAJANNA SIRCILLA, Telangana, 505301",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24900,
      "OBC": 25159,
      "EWS": 28079,
      "SC": 133235,
      "ST": 149420
    }
  },
  {
    "collegeId": "govt-medical-college-and",
    "collegeName": "Govt. Medical College and Hospital, Chandrapur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 406411,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-and",
    "collegeName": "Govt. Medical College and Hospital, Chandrapur,GOVT. MEDICAL COLLEGE CHANDRAPUR, RAM NAGAR, CHANDRAPUR, Maharashtra, 442401",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19681,
      "OBC": 21027,
      "EWS": 24425,
      "SC": 118628,
      "ST": 133088
    }
  },
  {
    "collegeId": "govt-medical-college-jammu",
    "collegeName": "Govt. Medical College, Jammu",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 202684,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-jammugovernment",
    "collegeName": "Govt. Medical College, Jammu,GOVERNMENT MEDICAL COLLEGE, BAKSHI NAGAR, JAMMU 180001, Jammu And Kashmir, 180001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10820,
      "OBC": 11301,
      "EWS": null,
      "SC": 85589,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-kannauj",
    "collegeName": "Govt. Medical College, Kannauj",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 532373,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-kannaujtirwa",
    "collegeName": "Govt. Medical College, Kannauj,Tirwa Road, Kannauj, Uttar Pradesh, 209732",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 642228,
      "OBC": 13799,
      "EWS": 15185,
      "SC": 90851,
      "ST": 110330
    }
  },
  {
    "collegeId": "govt-medical-college-khandwa",
    "collegeName": "Govt. Medical College, Khandwa",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 991072,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-khandwaluvkush",
    "collegeName": "Govt. Medical College, Khandwa,Luv-Kush Nagar,Mundi Road,Khandwa (M.P.), Madhya Pradesh, 450001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 946638,
      "OBC": 18219,
      "EWS": null,
      "SC": 106142,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-kumuram",
    "collegeName": "Govt. Medical College, Kumuram Bheem Asifabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 889755,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-kumuram",
    "collegeName": "Govt. Medical College, Kumuram Bheem Asifabad ,Government Medical College Ankushapur District Kumuram Bheem Asifabad Telangana, Telangana, 504293",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25523,
      "OBC": 25712,
      "EWS": 28016,
      "SC": 130144,
      "ST": 155242
    }
  },
  {
    "collegeId": "govt-medical-college-sirohi",
    "collegeName": "Govt. Medical College, Sirohi (rajasthan)",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 98233,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-sirohi",
    "collegeName": "Govt. Medical College, Sirohi (rajasthan),SIROHI SHIVGANJ HIGHWAY,NEAR AMBESHWAR ,VILLAGE- KOLAR, TEHSIL- SIVGANJ,DIST- SIROHI, Rajasthan, 307030",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14864,
      "OBC": 15508,
      "EWS": null,
      "SC": 94691,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-srinagar",
    "collegeName": "Govt. Medical College, Srinagar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 864942,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-srinagaradministrative",
    "collegeName": "Govt. Medical College, Srinagar,Administrative Block Government Medical College Karan Nagar Srinagar, Jammu And Kashmir, 190010",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 17185,
      "EWS": 20631,
      "SC": 105359,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-udhampur",
    "collegeName": "Govt. Medical College, Udhampur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 813421,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-medical-college-udhampurdhar",
    "collegeName": "Govt. Medical College, Udhampur,Dhar Road near Sallain Tallab opp Head Post Office Udhampur, Jammu And Kashmir, 182101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19310,
      "OBC": 20834,
      "EWS": null,
      "SC": null,
      "ST": 115457
    }
  },
  {
    "collegeId": "govt-pudukkottai-medical-college",
    "collegeName": "Govt. Pudukkottai Medical College Hopt., Pudukkott",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 153785,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-pudukkottai-medical-college",
    "collegeName": "Govt. Pudukkottai Medical College Hopt., Pudukkott,MULLUR PUDUKKOTTAI PO PUDUKKOTTAI, Tamil Nadu, 622004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18459,
      "OBC": 18973,
      "EWS": 29653,
      "SC": null,
      "ST": 160401
    }
  },
  {
    "collegeId": "govt-sivgangai-m-c",
    "collegeName": "Govt. Sivgangai M. C. Sivagangai",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1116101,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "govt-sivgangai-m-c",
    "collegeName": "Govt. Sivgangai M. C. Sivagangai,MANAMADURAI MAIN ROAD, KEELA VANIYANKUDI, SIVAGANGAI, Tamil Nadu, 630561",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19210,
      "OBC": 19496,
      "EWS": 29875,
      "SC": 134961,
      "ST": 160692
    }
  },
  {
    "collegeId": "graphic-era-institute-of",
    "collegeName": "Graphic Era Institute Of Medical Science",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 478912,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "graphic-era-institute-of",
    "collegeName": "Graphic Era Institute Of Medical Science",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 725378,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "graphic-era-institute-of",
    "collegeName": "Graphic Era Institute Of Medical Science,Graphic Era Institute of Medical Sciences 16th Milestone Chakrata Road Dehradun Uttarakhand, Uttarakhand, 248007",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 582337,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "graphic-era-institute-of",
    "collegeName": "Graphic Era Institute Of Medical Science,Graphic Era Institute of Medical Sciences 16th Milestone Chakrata Road Dehradun Uttarakhand, Uttarakhand, 248007",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1098428,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gulbarga-institute-of-medical",
    "collegeName": "Gulbarga Institute of Medical Sciences, Gulbarga",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1070971,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "gulbarga-institute-of-medical",
    "collegeName": "Gulbarga Institute of Medical Sciences, Gulbarga,Gulbarga Institute of Medical Sciences, Veeresh Nagar, Sedam Road, Kalaburagi, Karnataka, 585105",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20050,
      "OBC": 21407,
      "EWS": 25427,
      "SC": 117722,
      "ST": 129845
    }
  },
  {
    "collegeId": "hassan-inst-medical-sciences",
    "collegeName": "HASSAN INST. MEDICAL SCIENCES, HASSAN",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 462877,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "hassan-inst-medical-sciences",
    "collegeName": "HASSAN INST. MEDICAL SCIENCES, HASSAN,K R PURAM, BEHIND DC OFFICE,HASSAN, Karnataka, 573201",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18762,
      "OBC": 20234,
      "EWS": 24903,
      "SC": 118540,
      "ST": 133599
    }
  },
  {
    "collegeId": "haveri-institute-of-medical",
    "collegeName": "Haveri Institute of Medical Sciences, Karnataka",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 126658,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "haveri-institute-of-medical",
    "collegeName": "Haveri Institute of Medical Sciences, Karnataka,Devagiri- Yellapura, Haveri-581110, Karnataka, 581110",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23733,
      "OBC": 23839,
      "EWS": 27635,
      "SC": 126951,
      "ST": 152995
    }
  },
  {
    "collegeId": "hinduhridayasamrat-balasaheb-thackeray-medical",
    "collegeName": "Hinduhridayasamrat Balasaheb Thackeray Medical College and Dr. R. N. Cooper Municipal General Hospital, Maharashtra",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 394628,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "hinduhridayasamrat-balasaheb-thackeray-medical",
    "collegeName": "Hinduhridayasamrat Balasaheb Thackeray Medical College and Dr. R. N. Cooper Municipal General Hospital, Maharashtra,JUHU, VILEPARLE WEST MUMBAI, Maharashtra, 400056",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6782,
      "OBC": 11420,
      "EWS": 1213192,
      "SC": 86841,
      "ST": 102783
    }
  },
  {
    "collegeId": "ims-bhu-dental-varanasi",
    "collegeName": "IMS BHU Dental, Varanasi",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1260223,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "ims-bhu-dental-varanasiinstitute",
    "collegeName": "IMS BHU Dental, Varanasi,Institute of Medical Sciences, Banaras Hindu University, Uttar Pradesh, 221105",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 28654,
      "OBC": 29946,
      "EWS": 32703,
      "SC": 164888,
      "ST": 175233
    }
  },
  {
    "collegeId": "indira-gandhi-govtmedical-coll",
    "collegeName": "INDIRA GANDHI GOVT.MEDICAL COLL., NAGPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 102641,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "indira-gandhi-govtmedical-coll",
    "collegeName": "INDIRA GANDHI GOVT.MEDICAL COLL., NAGPUR,MAYO HOSPITAL CENTRAL AVENUE ROAD NEAR RAM ZULA NAGPUR, Maharashtra, 440018",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13084,
      "OBC": 14613,
      "EWS": 16459,
      "SC": 87652,
      "ST": 109255
    }
  },
  {
    "collegeId": "indira-gandhi-medical-coll",
    "collegeName": "INDIRA GANDHI MEDICAL COLL., SHIMLA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 476905,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "indira-gandhi-medical-coll",
    "collegeName": "INDIRA GANDHI MEDICAL COLL., SHIMLA,IGMC SHIMLA NEAR LAKKARBAZAR SHIMLA, Himachal Pradesh, 171001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6571,
      "OBC": 7698,
      "EWS": 7676,
      "SC": 45401,
      "ST": null
    }
  },
  {
    "collegeId": "inst-of-pg-med",
    "collegeName": "INST OF PG MED EDU & RESEARCH,KOLKATA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 269372,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "inst-of-pg-med",
    "collegeName": "INST OF PG MED EDU & RESEARCH,KOLKATA,244 AJC Bose Road, Kolkata, West Bengal, 700020",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6327,
      "OBC": 8662,
      "EWS": null,
      "SC": 67250,
      "ST": 71259
    }
  },
  {
    "collegeId": "instof-medsciences-bhuvaranasi",
    "collegeName": "INST.OF MED.SCIENCES, BHU,VARANASI",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 674805,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "instof-medsciences-bhuvaranasiinstitute-of",
    "collegeName": "INST.OF MED.SCIENCES, BHU,VARANASI,Institute of Medical Sciences, Banaras Hindu University, Uttar Pradesh, 211005",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1709,
      "OBC": 2620,
      "EWS": null,
      "SC": 20606,
      "ST": null
    }
  },
  {
    "collegeId": "irt-perundurai-medical-college",
    "collegeName": "IRT Perundurai Medical College, Perundurai",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 142071,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "irt-perundurai-medical-college",
    "collegeName": "IRT Perundurai Medical College, Perundurai,GOVERNMENT ERODE MEDICAL COLLEGE PERUNDURAI, PERUNDURAI SANATORIUM POST ERODE DISTRICT, Tamil Nadu, 638053",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15799,
      "OBC": 16188,
      "EWS": 28556,
      "SC": 125728,
      "ST": null
    }
  },
  {
    "collegeId": "indira-gandhi-govt-dental",
    "collegeName": "Indira Gandhi Govt. Dental College, Jammu",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 205686,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "indira-gandhi-govt-dental",
    "collegeName": "Indira Gandhi Govt. Dental College, Jammu,Indira Gandhi Govt. Dental College, Rehari Chungi, Jammu, Jammu And Kashmir, 180005",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 41690,
      "OBC": 45692,
      "EWS": null,
      "SC": 178098,
      "ST": null
    }
  },
  {
    "collegeId": "indira-gandhi-institute-of",
    "collegeName": "Indira Gandhi Institute of Dental Sciences, Pondicherry",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 847005,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "indira-gandhi-institute-of",
    "collegeName": "Indira Gandhi Institute of Dental Sciences, Pondicherry,SBV Pondicherry Campus, Pillaiyarkuppam,, Puducherry, 607402",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 548962,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "indira-gandhi-institute-of",
    "collegeName": "Indira Gandhi Institute of Medical Sciences, Patna",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 91343,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "indira-gandhi-institute-of",
    "collegeName": "Indira Gandhi Institute of Medical Sciences, Patna,RAZA BAZAR, SHEIKHPURA, PATNA, Bihar, 800014",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 8317,
      "OBC": 8853,
      "EWS": 8631,
      "SC": 96049,
      "ST": null
    }
  },
  {
    "collegeId": "indira-gandhi-medical-college",
    "collegeName": "Indira Gandhi Medical College & RI, Puducherry",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 690647,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "indira-gandhi-medical-college",
    "collegeName": "Indira Gandhi Medical College & RI, Puducherry,Vazhudavour Road, Kadirkamam, Puducherry, 605009",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1112674,
      "OBC": 1172766,
      "EWS": 26307,
      "SC": 127289,
      "ST": 134248
    }
  },
  {
    "collegeId": "institute-of-dental-sciences",
    "collegeName": "Institute of Dental Sciences, Bhubaneswar",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 774006,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "institute-of-dental-sciences",
    "collegeName": "Institute of Dental Sciences, Bhubaneswar,K8, Kalinga Nagar, PO-Mahalaxmi Vihar, Bhubaneswar, Odisha, 751029",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 766013,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "institute-of-medical-sciences",
    "collegeName": "Institute of Medical Sciences & SUM Hospital, Campus II",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 277116,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "institute-of-medical-sciences",
    "collegeName": "Institute of Medical Sciences & SUM Hospital, Campus II",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1212647,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "institute-of-medical-sciences",
    "collegeName": "Institute of Medical Sciences & SUM Hospital, Campus II,At- Nakhara, Po-Phulnakhara, Bhubaneswar, Khordha, Odisha, 754001",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1169349,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "institute-of-medical-sciences",
    "collegeName": "Institute of Medical Sciences & SUM Hospital, Campus II,At- Nakhara, Po-Phulnakhara, Bhubaneswar, Khordha, Odisha, 754001",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 396950,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "institute-of-medical-sciences",
    "collegeName": "Institute of Medical Sciences and SUM Host., Bhubaneswar",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1112422,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "institute-of-medical-sciences",
    "collegeName": "Institute of Medical Sciences and SUM Host., Bhubaneswar",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 285309,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "institute-of-medical-sciences",
    "collegeName": "Institute of Medical Sciences and SUM Host., Bhubaneswar,K 8 Kalinga Nagar Po Mahalaxmi Vihar Bhubaneswar, Odisha, 751029",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1097578,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "institute-of-medical-sciences",
    "collegeName": "Institute of Medical Sciences and SUM Host., Bhubaneswar,K 8 Kalinga Nagar Po Mahalaxmi Vihar Bhubaneswar, Odisha, 751029",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 398720,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "j-r-medical-college",
    "collegeName": "J R MEDICAL COLLEGE AND HOSPITAL, TAMIL NADU",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 821077,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "j-r-medical-college",
    "collegeName": "J R MEDICAL COLLEGE AND HOSPITAL, TAMIL NADU,Chennai-Trichy NH- 45,Kiledaiyalam, Tindivanam Taluk,Villupuram District., Tamil Nadu, 604302",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 903981,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawahar-lal-nehru-medical",
    "collegeName": "JAWAHAR LAL NEHRU MEDICAL, AJMER",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 581553,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawahar-lal-nehru-medical",
    "collegeName": "JAWAHAR LAL NEHRU MEDICAL, AJMER,NEAR PATEL STADIUM AJMER, Rajasthan, 305001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 7505,
      "OBC": 7787,
      "EWS": null,
      "SC": 60827,
      "ST": null
    }
  },
  {
    "collegeId": "jhalawar-medical-college-jhalawar",
    "collegeName": "JHALAWAR MEDICAL COLLEGE, Jhalawar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1065503,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jhalawar-medical-college-jhalawar",
    "collegeName": "JHALAWAR MEDICAL COLLEGE, Jhalawar ,NH-52, KOTA ROAD,JHALAWAR,RAJASTH AN, Rajasthan, 326001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 758496,
      "OBC": 10614,
      "EWS": 11593,
      "SC": 76687,
      "ST": 75686
    }
  },
  {
    "collegeId": "jipmer-karaikal",
    "collegeName": "JIPMER KARAIKAL",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Internal - Puducher ry UT Domicile",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 449518,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jipmer-karaikal",
    "collegeName": "JIPMER KARAIKAL",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 948886,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jipmer-karaikaljipmer-academic-campus",
    "collegeName": "JIPMER KARAIKAL,JIPMER Academic Campus, FCI Link Road, Kovilpathu, Karaikal - 609602, Puducherry, 609602",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Internal - Puducher ry UT Domicile",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 48316,
      "OBC": null,
      "EWS": null,
      "SC": 163196,
      "ST": null
    }
  },
  {
    "collegeId": "jipmer-karaikaljipmer-academic-campus",
    "collegeName": "JIPMER KARAIKAL,JIPMER Academic Campus, FCI Link Road, Kovilpathu, Karaikal - 609602, Puducherry, 609602",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 5731,
      "OBC": 7700,
      "EWS": 8126,
      "SC": 46346,
      "ST": 71488
    }
  },
  {
    "collegeId": "jipmer-puducherry",
    "collegeName": "JIPMER PUDUCHERRY",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Internal - Puducher ry UT Domicile",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 599794,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jipmer-puducherry",
    "collegeName": "JIPMER PUDUCHERRY",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1040877,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jipmer-puducherrydhanvantari-nagar-gorimedu",
    "collegeName": "JIPMER PUDUCHERRY,Dhanvantari Nagar Gorimedu Puducherry, Puducherry, 605006",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Internal - Puducher ry UT Domicile",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22390,
      "OBC": 41771,
      "EWS": null,
      "SC": 135577,
      "ST": null
    }
  },
  {
    "collegeId": "jipmer-puducherrydhanvantari-nagar-gorimedu",
    "collegeName": "JIPMER PUDUCHERRY,Dhanvantari Nagar Gorimedu Puducherry, Puducherry, 605006",
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
      "SC": null,
      "ST": 12503
    }
  },
  {
    "collegeId": "jln-ims-imphal",
    "collegeName": "JLN IMS, IMPHAL",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 147410,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jln-ims-imphalprompat-imphal",
    "collegeName": "JLN IMS, IMPHAL,Prompat, Imphal East, Manipur, Manipur, 795005",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25834,
      "OBC": 26012,
      "EWS": null,
      "SC": null,
      "ST": 156083
    }
  },
  {
    "collegeId": "jln-medical-college-datta",
    "collegeName": "JLN Medical College, Datta Meghe, Wardha",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 493710,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jln-medical-college-datta",
    "collegeName": "JLN Medical College, Datta Meghe, Wardha",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1307331,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jln-medical-college-datta",
    "collegeName": "JLN Medical College, Datta Meghe, Wardha,Sawangi (Meghe), Wardha, Maharashtra State,India, Maharashtra, 442107",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 596063,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jln-medical-college-datta",
    "collegeName": "JLN Medical College, Datta Meghe, Wardha,Sawangi (Meghe), Wardha, Maharashtra State,India, Maharashtra, 442107",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1071678,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jss-dental-college-mysuru",
    "collegeName": "JSS Dental College, Mysuru",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 602066,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jss-dental-college-mysuruthe",
    "collegeName": "JSS Dental College, Mysuru,The Principal JSS Dental College and Hospital Medical Institutions Campus Bannimantap S S Nagar Mysu, Karnataka, 570015",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 606098,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jss-medical-college-mysuru",
    "collegeName": "JSS Medical College, Mysuru",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 163330,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jss-medical-college-mysuru",
    "collegeName": "JSS Medical College, Mysuru",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1244680,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jss-medical-college-mysuruthe",
    "collegeName": "JSS Medical College, Mysuru,The Principal JSS Medical College and Hospital Medical Institutions Campus S S Nagar Mysuru, Karnataka, 570015",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 167972,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jss-medical-college-mysuruthe",
    "collegeName": "JSS Medical College, Mysuru,The Principal JSS Medical College and Hospital Medical Institutions Campus S S Nagar Mysuru, Karnataka, 570015",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1044482,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jagadguru-gangadhar-mahaswamigalu-moorusavi",
    "collegeName": "Jagadguru Gangadhar Mahaswamigalu Moorusavi rmath Medical College, Hubballi",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 291015,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jagadguru-gangadhar-mahaswamigalu-moorusavi",
    "collegeName": "Jagadguru Gangadhar Mahaswamigalu Moorusavi rmath Medical College, Hubballi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1233064,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jagadguru-gangadhar-mahaswamigalu-moorusavir",
    "collegeName": "Jagadguru Gangadhar Mahaswamigalu Moorusavir math Medical College, Hubballi",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 198103,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jagadguru-gangadhar-mahaswamigalu-moorusavir",
    "collegeName": "Jagadguru Gangadhar Mahaswamigalu Moorusavir math Medical College, Hubballi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1026309,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jagadguru-gangadhar-mahaswamigalu-moorusavirma",
    "collegeName": "Jagadguru Gangadhar Mahaswamigalu Moorusavirma th Medical College, Hubballi,KLE Jagadguru Gangadhar Mahaswamigalu Moorusavirmath Medical College Gabbur Cross Hubballi, Karnataka, 580028",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 394117,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jagadguru-gangadhar-mahaswamigalu-moorusavirma",
    "collegeName": "Jagadguru Gangadhar Mahaswamigalu Moorusavirma th Medical College, Hubballi,KLE Jagadguru Gangadhar Mahaswamigalu Moorusavirmath Medical College Gabbur Cross Hubballi, Karnataka, 580028",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 672925,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jannayak-karpoori-thakur-medical",
    "collegeName": "Jannayak Karpoori Thakur Medical college and Hospital, Madhepura",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 835024,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jannayak-karpoori-thakur-medical",
    "collegeName": "Jannayak Karpoori Thakur Medical college and Hospital, Madhepura,JAJHAT SABAILA SINGHESHWAR ROAD DISTRICT MADHEPURA, Bihar, 852128",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20091,
      "OBC": 20887,
      "EWS": 23287,
      "SC": 113844,
      "ST": null
    }
  },
  {
    "collegeId": "jawahar-lal-nehru-medical",
    "collegeName": "Jawahar Lal Nehru Medical College, Belagavi",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 165197,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawahar-lal-nehru-medical",
    "collegeName": "Jawahar Lal Nehru Medical College, Belagavi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1210774,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawahar-lal-nehru-medical",
    "collegeName": "Jawahar Lal Nehru Medical College, Belagavi,J.N. Medical College Campus, Nehru Nagar, Belagavi-590010. Karnataka, India., Karnataka, 590010",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 196759,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawahar-lal-nehru-medical",
    "collegeName": "Jawahar Lal Nehru Medical College, Belagavi,J.N. Medical College Campus, Nehru Nagar, Belagavi-590010. Karnataka, India., Karnataka, 590010",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 979146,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawaharlal-nehru-institute-of",
    "collegeName": "Jawaharlal Nehru Institute of Dental Sciences, Imphal",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 134040,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawaharlal-nehru-institute-of",
    "collegeName": "Jawaharlal Nehru Institute of Dental Sciences, Imphal,Porompat, Imphal East, Manipur, Manipur, 795005",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 49462,
      "OBC": 51192,
      "EWS": 53630,
      "SC": 187809,
      "ST": null
    }
  },
  {
    "collegeId": "jawaharlal-nehru-medical-college",
    "collegeName": "Jawaharlal Nehru Medical College, AMU,ALIGARH",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Aligarh Muslim University (AMU) Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 961095,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawaharlal-nehru-medical-college",
    "collegeName": "Jawaharlal Nehru Medical College, AMU,ALIGARH",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Non- Resident Indian(AM U)Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 241946,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawaharlal-nehru-medical-college",
    "collegeName": "Jawaharlal Nehru Medical College, AMU,ALIGARH",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 421515,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawaharlal-nehru-medical-college",
    "collegeName": "Jawaharlal Nehru Medical College, AMU,ALIGARH,ALIGARH MUSLIM UNIVERSITY, ALIGARH, Uttar Pradesh, 202002",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Aligarh Muslim University (AMU) Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18873,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawaharlal-nehru-medical-college",
    "collegeName": "Jawaharlal Nehru Medical College, AMU,ALIGARH,ALIGARH MUSLIM UNIVERSITY, ALIGARH, Uttar Pradesh, 202002",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Open Seat Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6170,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawaharlal-nehru-medical-college",
    "collegeName": "Jawaharlal Nehru Medical College, Bhagalpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 617849,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jawaharlal-nehru-medical-college",
    "collegeName": "Jawaharlal Nehru Medical College, Bhagalpur,SUKHRAJ RAI PATH, BHAGALPUR, Bihar, 812001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15293,
      "OBC": 15741,
      "EWS": null,
      "SC": 111142,
      "ST": 114020
    }
  },
  {
    "collegeId": "jhargram-government-medical-college",
    "collegeName": "Jhargram Government Medical College and Hospital, West Bengal",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 125187,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jhargram-government-medical-college",
    "collegeName": "Jhargram Government Medical College and Hospital, West Bengal,Jhargram Government Medical College and Hospital, Vidyasagarpally, Jhargram, West Bengal., West Bengal, 721507",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24232,
      "OBC": 24996,
      "EWS": null,
      "SC": 129753,
      "ST": 149018
    }
  },
  {
    "collegeId": "jorhat-medical-college-and",
    "collegeName": "Jorhat Medical College and Hospital, JORHAT",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 711428,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "jorhat-medical-college-and",
    "collegeName": "Jorhat Medical College and Hospital, JORHAT,Kushal Konwar Path, Barbheta, Jorhat, Assam, 785001, Assam, 785001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23503,
      "OBC": 24051,
      "EWS": 25511,
      "SC": 134754,
      "ST": 156879
    }
  },
  {
    "collegeId": "k-m-shah-dental",
    "collegeName": "K M Shah Dental Collegel, SumanDeep Vidyapeeth Vadodara",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 781187,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "k-m-shah-dental",
    "collegeName": "K M Shah Dental Collegel, SumanDeep Vidyapeeth Vadodara",
    "type": "Government",
    "isDeemed": false,
    "quota": "Jain Minority Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 758641,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "k-m-shah-dental",
    "collegeName": "K M Shah Dental Collegel, SumanDeep Vidyapeeth Vadodara,Sumandeep Vidyapeeth Piparia Waghodia Vadodara Gujarat, Gujarat, 391760",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 441893,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "k-m-shah-dental",
    "collegeName": "K M Shah Dental Collegel, SumanDeep Vidyapeeth Vadodara,Sumandeep Vidyapeeth Piparia Waghodia Vadodara Gujarat, Gujarat, 391760",
    "type": "Government",
    "isDeemed": false,
    "quota": "Jain Minority Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 384909,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kap-viswanatham-govt-medical",
    "collegeName": "K.A.P. VISWANATHAM Govt Medical College,TIRUCHIRAPALLI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 76846,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kap-viswanatham-govt-medical",
    "collegeName": "K.A.P. VISWANATHAM Govt Medical College,TIRUCHIRAPALLI,PE RIYAMILAGUPARAI, TIRUCHIRAPALLI-620001, Tamil Nadu, 620001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14383,
      "OBC": 15036,
      "EWS": 27216,
      "SC": 96388,
      "ST": 152446
    }
  },
  {
    "collegeId": "ks-hegde-medical-academy",
    "collegeName": "K.S Hegde Medical Academy, Mangaluru",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 135252,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "ks-hegde-medical-academy",
    "collegeName": "K.S Hegde Medical Academy, Mangaluru",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 727323,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "ks-hegde-medical-academy",
    "collegeName": "K.S Hegde Medical Academy, Mangaluru,Deralakatte, Mangaluru, Dakshina Kannada Dist,, Karnataka, 575018",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 137517,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kanyakumari-govt-med-collasaripallam",
    "collegeName": "KANYAKUMARI GOVT. MED. COLL.,ASARIPALLAM",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 329823,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kanyakumari-govt-med-collasaripallamasari",
    "collegeName": "KANYAKUMARI GOVT. MED. COLL.,ASARIPALLAM,ASARI PALLAM, KANYAKUMARI DISTRICT-629201, Tamil Nadu, 629201",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1138642,
      "OBC": 1180453,
      "EWS": 29795,
      "SC": null,
      "ST": 157581
    }
  },
  {
    "collegeId": "karnatak-inst-of-medical",
    "collegeName": "KARNATAK INST. OF MEDICAL SC.,HUBLI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 999128,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "karnatak-inst-of-medical",
    "collegeName": "KARNATAK INST. OF MEDICAL SC.,HUBLI,VIDYANAGAR HUBBALLI, Karnataka, 580021",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14740,
      "OBC": 16921,
      "EWS": 18471,
      "SC": 100347,
      "ST": 92259
    }
  },
  {
    "collegeId": "kgmc-lucknow",
    "collegeName": "KGMC, LUCKNOW",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 300273,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kgmc-lucknowshahmina-road-chowk",
    "collegeName": "KGMC, LUCKNOW,SHAHMINA ROAD, CHOWK, LUCKNOW, Uttar Pradesh, 226003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 2588,
      "OBC": 4217,
      "EWS": 3211,
      "SC": 44859,
      "ST": 63833
    }
  },
  {
    "collegeId": "kle-vk-inst-of",
    "collegeName": "KLE VK Inst. of Dental Scie. Belagavi",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 617789,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kle-vk-inst-of",
    "collegeName": "KLE VK Inst. of Dental Scie. Belagavi,KLE V.K. Institute of Dental Sciences, J.N. Medical College Campus, Nehru Nagar,Belagavi-590010.Karn, Karnataka, 590010",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 281457,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kle-vk-inst-of",
    "collegeName": "KLE VK Inst. of Dental Scie. Belagavi,KLE V.K. Institute of Dental Sciences, J.N. Medical College Campus, Nehru Nagar,Belagavi-590010.Karn, Karnataka, 590010",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1004170,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kurnool-medical-college-kurnool",
    "collegeName": "KURNOOL MEDICAL COLLEGE, KURNOOL",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 955901,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kurnool-medical-college-kurnoolbudhawarpet",
    "collegeName": "KURNOOL MEDICAL COLLEGE, KURNOOL,BUDHAWARPET, KURNOOL., Andhra Pradesh, 518002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18768,
      "OBC": 21291,
      "EWS": 22480,
      "SC": 53320,
      "ST": 130648
    }
  },
  {
    "collegeId": "kakatiya-medical-college-warangal",
    "collegeName": "Kakatiya Medical College Warangal",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 721189,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kakatiya-medical-college-warangalsvp",
    "collegeName": "Kakatiya Medical College Warangal,SVP Road, Warangal, Telangana, 506007",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18688,
      "OBC": 1018550,
      "EWS": 22983,
      "SC": 106056,
      "ST": null
    }
  },
  {
    "collegeId": "kalinga-institute-of-dental",
    "collegeName": "Kalinga Institute of Dental Sciences, Bhubaneswar",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 874903,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kalinga-institute-of-dental",
    "collegeName": "Kalinga Institute of Dental Sciences, Bhubaneswar,CAMPUS-5 KUSHABHADRA CAMPUS P.O-KIIT BHUBANESWAR ODISHA, Odisha, 751024",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 739695,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kalinga-institute-of-medical",
    "collegeName": "Kalinga Institute of Medical Sciences, Bhubaneswar",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1004369,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kalinga-institute-of-medical",
    "collegeName": "Kalinga Institute of Medical Sciences, Bhubaneswar",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 174334,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kalinga-institute-of-medical",
    "collegeName": "Kalinga Institute of Medical Sciences, Bhubaneswar,CAMPUS-5 KUSHABHADRA CAMPUS P.O-KIIT BHUBANESWAR, Odisha, 751024",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1041649,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kalinga-institute-of-medical",
    "collegeName": "Kalinga Institute of Medical Sciences, Bhubaneswar,CAMPUS-5 KUSHABHADRA CAMPUS P.O-KIIT BHUBANESWAR, Odisha, 751024",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 202084,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kalpana-chawla-govt-medical",
    "collegeName": "Kalpana Chawla Govt. Medical College, Karnal",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 693321,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kalpana-chawla-govt-medical",
    "collegeName": "Kalpana Chawla Govt. Medical College, Karnal,Kalpana Chawla Govt. Medical College,Karnal, Haryana, Haryana, 132001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 480961,
      "OBC": 10779,
      "EWS": null,
      "SC": 78519,
      "ST": 933514
    }
  },
  {
    "collegeId": "kalyan-singh-government-medical",
    "collegeName": "Kalyan Singh Government Medical College, Bulandshahr , Uttar Prades",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 104856,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kalyan-singh-government-medical",
    "collegeName": "Kalyan Singh Government Medical College, Bulandshahr , Uttar Prades,339, CHANDPUR ROAD, NEAR SADAR TEHSIL, BULANDSHAHR, Uttar Pradesh, 203001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13610,
      "OBC": 15597,
      "EWS": null,
      "SC": 92528,
      "ST": 104956
    }
  },
  {
    "collegeId": "karwar-institute-of-medical",
    "collegeName": "Karwar Institute of Medical Sciences, Karwar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 118367,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "karwar-institute-of-medical",
    "collegeName": "Karwar Institute of Medical Sciences, Karwar,DISTRICT HOSPITAL PREMISES, MG ROAD, KARWAR, Karnataka, 581301",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21203,
      "OBC": 21967,
      "EWS": 26369,
      "SC": 126484,
      "ST": 150015
    }
  },
  {
    "collegeId": "kasturba-medical-college-manipal",
    "collegeName": "Kasturba Medical College, Manipal Univ., Mangalore",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 57121,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kasturba-medical-college-manipal",
    "collegeName": "Kasturba Medical College, Manipal Univ., Mangalore",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 415953,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kasturba-medical-college-manipal",
    "collegeName": "Kasturba Medical College, Manipal Univ., Mangalore,Light house Hill Road, Mangalore, India, Karnataka, 575001",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 42695,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kasturba-medical-college-manipal",
    "collegeName": "Kasturba Medical College, Manipal Univ., Manipal",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 43835,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kasturba-medical-college-manipal",
    "collegeName": "Kasturba Medical College, Manipal Univ., Manipal",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 555829,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kasturba-medical-college-manipal",
    "collegeName": "Kasturba Medical College, Manipal Univ., Manipal,Madhav Nagar, Manipal, Karnataka State India, Karnataka, 576104",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 31834,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kasturba-medical-college-manipal",
    "collegeName": "Kasturba Medical College, Manipal Univ., Manipal,Madhav Nagar, Manipal, Karnataka State India, Karnataka, 576104",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 559034,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kodagu-institute-of-medical",
    "collegeName": "Kodagu Institute of Medical Sciences, Kodagu",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 541066,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kodagu-institute-of-medical",
    "collegeName": "Kodagu Institute of Medical Sciences, Kodagu,Kodagu Institute of Medical Sciences, Madikeri., Karnataka, 571201",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1093495,
      "OBC": 21900,
      "EWS": 27185,
      "SC": 130413,
      "ST": 151878
    }
  },
  {
    "collegeId": "kokrajhar-medical-college-hospital",
    "collegeName": "Kokrajhar Medical College & Hospital Rangalikhata",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 130527,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "kokrajhar-medical-college-hospital",
    "collegeName": "Kokrajhar Medical College & Hospital Rangalikhata,Rangalikhata Pt.- 1, Kokrajhar, Assam, 783370",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25804,
      "OBC": 25877,
      "EWS": null,
      "SC": 117746,
      "ST": null
    }
  },
  {
    "collegeId": "koppal-institute-of-medical",
    "collegeName": "Koppal Institute of Medical Sciences",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 124471,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "koppal-institute-of-medical",
    "collegeName": "Koppal Institute of Medical Sciences,DIRECTOR, KIMS,KOPPAL. GAGNAVATI ROAD, KIDDIDAL GATE,KOPPAL-583231, Karnataka, 583231",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23455,
      "OBC": 23734,
      "EWS": 27861,
      "SC": 128737,
      "ST": 151976
    }
  },
  {
    "collegeId": "krishna-inst-of-med",
    "collegeName": "Krishna Inst. of Med. Scie., Karad",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 496514,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "krishna-inst-of-med",
    "collegeName": "Krishna Inst. of Med. Scie., Karad",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1290729,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "krishna-inst-of-med",
    "collegeName": "Krishna Inst. of Med. Scie., Karad,KARAD, DIST. SATARA (MAHARASHTRA STATE)., Maharashtra, 415110",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 610201,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "krishna-inst-of-med",
    "collegeName": "Krishna Inst. of Med. Scie., Karad,KARAD, DIST. SATARA (MAHARASHTRA STATE)., Maharashtra, 415110",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1032561,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "llrm-medical-college-meerut",
    "collegeName": "L.L.R.M. MEDICAL COLLEGE, MEERUT",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 80646,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "llrm-medical-college-meerutlala",
    "collegeName": "L.L.R.M. MEDICAL COLLEGE, MEERUT,LALA LAJPAT RAI MEMORIAL, MEDICAL COLLEGE, GARH ROAD, MEERUT, Uttar Pradesh, 250004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 8670,
      "OBC": 9650,
      "EWS": null,
      "SC": 79831,
      "ST": 90009
    }
  },
  {
    "collegeId": "lokmanya-tilak-municipal-m",
    "collegeName": "LOKMANYA TILAK MUNICIPAL M C,MUMBAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 413489,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "lokmanya-tilak-municipal-m",
    "collegeName": "LOKMANYA TILAK MUNICIPAL M C,MUMBAI,Dr. Babasaheb Ambedkar Road, Sion, Mumbai, Maharashtra, 400022",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 323913,
      "OBC": 827817,
      "EWS": 13196,
      "SC": 83230,
      "ST": 109648
    }
  },
  {
    "collegeId": "lady-hardinge-medical-college",
    "collegeName": "Lady Hardinge Medical College, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 284672,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "lady-hardinge-medical-college",
    "collegeName": "Lady Hardinge Medical College, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi NCR Children/ Widows of Personnel of the Armed Forces (CW) DU Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 611573,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "lady-hardinge-medical-college",
    "collegeName": "Lady Hardinge Medical College, New Delhi(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi University Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1310758,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "lady-hardinge-medical-college",
    "collegeName": "Lady Hardinge Medical College, New Delhi,Lady Hardinge Medical College, Shaheed Bhagat Singh Marg, New Delhi, Delhi (NCT), 110001 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi University Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 4860,
      "OBC": null,
      "EWS": 15212,
      "SC": 76885,
      "ST": 176810
    }
  },
  {
    "collegeId": "lakhimpur-medical-college-north",
    "collegeName": "Lakhimpur Medical College, North Lakhimpur, Assam",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 132925,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "lakhimpur-medical-college-north",
    "collegeName": "Lakhimpur Medical College, North Lakhimpur, Assam,Chowkham Saboti North Lakhimpur Lakhimpur, Assam, 787051",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25402,
      "OBC": 25841,
      "EWS": null,
      "SC": 135909,
      "ST": 156463
    }
  },
  {
    "collegeId": "lt-b-r-k",
    "collegeName": "Lt. B R K Government Medical College, Jagdalpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 635571,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "lt-b-r-k",
    "collegeName": "Lt. B R K Government Medical College, Jagdalpur,LATE BALIRAM KASHYAP MEMORIAL GOVT. MEDICAL COLLEGE, DIMRAPAL GEEDAM ROAD , JAGDALPUR DIST-BASTAR, Chhattisgarh, 494001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1060971,
      "OBC": 23075,
      "EWS": 24545,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "lt-l-a-m",
    "collegeName": "Lt. L A M Govt. Medical College, Raigarh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 807586,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "lt-l-a-m",
    "collegeName": "Lt. L A M Govt. Medical College, Raigarh,T.V.Tower road, Bendrachua, Raigarh, Chhattisgarh, 496001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21610,
      "OBC": 22576,
      "EWS": 22341,
      "SC": 116700,
      "ST": 139023
    }
  },
  {
    "collegeId": "mgdc-hospital-puducherry",
    "collegeName": "M.G.D.C. & HOSPITAL, PUDUCHERRY",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 208132,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mgdc-hospital-puducherrygovt-of",
    "collegeName": "M.G.D.C. & HOSPITAL, PUDUCHERRY,GOVT. OF PUDUCHERRY INSTITUTION, GORIMEDU, PONDICHERRY, Puducherry, 605006",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 46553,
      "OBC": 49604,
      "EWS": 59244,
      "SC": 177096,
      "ST": 236806
    }
  },
  {
    "collegeId": "mgm-medical-college-indore",
    "collegeName": "M.G.M. MEDICAL COLLEGE, INDORE",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 826710,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mgm-medical-college-indoreab",
    "collegeName": "M.G.M. MEDICAL COLLEGE, INDORE,AB ROAD INDORE, Madhya Pradesh, 452001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 7866,
      "OBC": 9789,
      "EWS": null,
      "SC": 72380,
      "ST": null
    }
  },
  {
    "collegeId": "mgm-medical-collegejamshedpur",
    "collegeName": "M.G.M. MEDICAL COLLEGE,JAMSHEDPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 114359,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mgm-medical-collegejamshedpurdi-mna",
    "collegeName": "M.G.M. MEDICAL COLLEGE,JAMSHEDPUR,Di mna Road, Mango, Jamshedpur, Jharkhand, 831020",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15831,
      "OBC": 17917,
      "EWS": 16339,
      "SC": 107949,
      "ST": 114909
    }
  },
  {
    "collegeId": "mp-shah-medical-college",
    "collegeName": "M.P. SHAH MEDICAL COLLEGE, JAMNAGAR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 753195,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mp-shah-medical-college",
    "collegeName": "M.P. SHAH MEDICAL COLLEGE, JAMNAGAR,PANDIT NEHRU MARG, JAMNAGAR 361008, Gujarat, 361008",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 9171,
      "OBC": 868360,
      "EWS": 11923,
      "SC": 81494,
      "ST": 89872
    }
  },
  {
    "collegeId": "madras-medical-college-chennai",
    "collegeName": "MADRAS MEDICAL COLLEGE, CHENNAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 739486,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "madras-medical-college-chennaimadras",
    "collegeName": "MADRAS MEDICAL COLLEGE, CHENNAI,MADRAS MEDICAL COLLEGE EVR PERIYAR SALAI,PARK TOWN,CHENNAI,TAMIL NADU., Tamil Nadu, 600003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": 6861,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "madurai-medical-college-madurai",
    "collegeName": "MADURAI MEDICAL COLLEGE, MADURAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1112602,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "madurai-medical-college-maduraipanagal",
    "collegeName": "MADURAI MEDICAL COLLEGE, MADURAI,PANAGAL ROAD MADURAI, Tamil Nadu, 625020",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11769,
      "OBC": 12595,
      "EWS": 25276,
      "SC": null,
      "ST": 123915
    }
  },
  {
    "collegeId": "maharaja-kc-gajapati-mcbrahmapur",
    "collegeName": "MAHARAJA K.C. GAJAPATI M.C.,BRAHMAPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 92855,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maharaja-kc-gajapati-mcbrahmapurmkcg",
    "collegeName": "MAHARAJA K.C. GAJAPATI M.C.,BRAHMAPUR,MKCG MEDICAL COLLEGE CAMPUS, BERHAMPUR, GANJAM, Odisha, 760004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 12593,
      "OBC": 12670,
      "EWS": 13319,
      "SC": 71941,
      "ST": 129391
    }
  },
  {
    "collegeId": "maharani-laxmi-bai-medical",
    "collegeName": "MAHARANI LAXMI BAI MEDICAL COLL,JHANSI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 384538,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maharani-laxmi-bai-medical",
    "collegeName": "MAHARANI LAXMI BAI MEDICAL COLL,JHANSI,M.L.B. MEDICAL COLLEGE, KANPUR ROAD, JHANSI, Uttar Pradesh, 284128",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10664,
      "OBC": 11299,
      "EWS": 12795,
      "SC": null,
      "ST": 95992
    }
  },
  {
    "collegeId": "maharshi-devraha-baba-autonomous",
    "collegeName": "MAHARSHI DEVRAHA BABA AUTONOMOUS STATE. MEDICAL COLLEGE, DEORIA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 858784,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maharshi-devraha-baba-autonomous",
    "collegeName": "MAHARSHI DEVRAHA BABA AUTONOMOUS STATE. MEDICAL COLLEGE, DEORIA,207 Hospital Road Saket nagar Deoria, Uttar Pradesh, 274001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17117,
      "OBC": 19090,
      "EWS": null,
      "SC": 105293,
      "ST": null
    }
  },
  {
    "collegeId": "malda-med-college-malda",
    "collegeName": "MALDA MED. COLLEGE, MALDA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 120557,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malda-med-college-maldamaldamedicalcollege",
    "collegeName": "MALDA MED. COLLEGE, MALDA,MaldaMedicalCollege, PS,EnglishBazar PO Dist Malda, West Bengal, 732101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22988,
      "OBC": 23484,
      "EWS": 23430,
      "SC": 125620,
      "ST": 146136
    }
  },
  {
    "collegeId": "manav-rachna-dental-college",
    "collegeName": "MANAV RACHNA DENTAL COLLEGE FARIDABAD",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 798698,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "manav-rachna-dental-college",
    "collegeName": "MANAV RACHNA DENTAL COLLEGE FARIDABAD",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 872957,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "manav-rachna-dental-college",
    "collegeName": "MANAV RACHNA DENTAL COLLEGE FARIDABAD,SECTOR - 43, DELHI SURAJKUND ROAD FARIDABAD, Haryana, 121004",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 668355,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mandya-inst-of-medical",
    "collegeName": "MANDYA INST. OF MEDICAL SCI., MANDYA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 951870,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mandya-inst-of-medical",
    "collegeName": "MANDYA INST. OF MEDICAL SCI., MANDYA,BANGALORE- MYSORE MAIN ROAD, MANDYA, Karnataka, 571401",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15999,
      "OBC": 18190,
      "EWS": 21375,
      "SC": 111130,
      "ST": null
    }
  },
  {
    "collegeId": "medical-college-baroda",
    "collegeName": "MEDICAL COLLEGE, BARODA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 743138,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "medical-college-barodagovernment-medical",
    "collegeName": "MEDICAL COLLEGE, BARODA,Government Medical College Baroda, Anandpura, Vadodara Pin No 390001, Gujarat, 390001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 525315,
      "OBC": 8033,
      "EWS": 9820,
      "SC": 55124,
      "ST": 87349
    }
  },
  {
    "collegeId": "medical-college-bhavnagar",
    "collegeName": "MEDICAL COLLEGE, BHAVNAGAR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 662953,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "medical-college-bhavnagarnear-st",
    "collegeName": "MEDICAL COLLEGE, BHAVNAGAR,Near S.T. Bus Stand, Jail road, Bhavnagar, Gujarat, 364001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10344,
      "OBC": 10705,
      "EWS": 12318,
      "SC": 86248,
      "ST": 101134
    }
  },
  {
    "collegeId": "medical-college-kolkata",
    "collegeName": "MEDICAL COLLEGE, KOLKATA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 322079,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "medical-college-kolkata88-college",
    "collegeName": "MEDICAL COLLEGE, KOLKATA,88, College Street, Kolkata-700073, West Bengal, 700073",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 8754,
      "EWS": 7487,
      "SC": 50338,
      "ST": null
    }
  },
  {
    "collegeId": "mg-inst-of-medical",
    "collegeName": "MG Inst. of Medical Sciences, Sevagram Wardha",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 772618,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mg-inst-of-medical",
    "collegeName": "MG Inst. of Medical Sciences, Sevagram Wardha,VILLAGE AND PO SEVAGRAM DISTRICT WARDHA MAHARASHTRA 442102, Maharashtra, 442102",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 875780,
      "OBC": 21398,
      "EWS": 25508,
      "SC": 130708,
      "ST": 132353
    }
  },
  {
    "collegeId": "mgm-medical-college-aurangabad",
    "collegeName": "MGM Medical College, Aurangabad",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 277135,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mgm-medical-college-aurangabad",
    "collegeName": "MGM Medical College, Aurangabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1095728,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mgm-medical-college-aurangabadn6",
    "collegeName": "MGM Medical College, Aurangabad,N-6, Cidco, Chhatrapati Sambhajinagar - Aurangabad, Maharashtra, 431003",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 297942,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mgm-medical-college-aurangabadn6",
    "collegeName": "MGM Medical College, Aurangabad,N-6, Cidco, Chhatrapati Sambhajinagar - Aurangabad, Maharashtra, 431003",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 459446,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mgm-medical-college-navi",
    "collegeName": "MGM Medical College, Navi Mumbai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 184377,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mgm-medical-college-navi",
    "collegeName": "MGM Medical College, Navi Mumbai",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1013100,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mgm-medical-college-navi",
    "collegeName": "MGM Medical College, Navi Mumbai,MGM Medical College, Plot No. 1-2, Sector 1, Kamothe, Navi Mumbai - 410 209, Maharashtra, 410209",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 191102,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "midnapore-medical-college-midnapur",
    "collegeName": "MIDNAPORE MEDICAL COLLEGE, MIDNAPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 904513,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "midnapore-medical-college-midnapur5",
    "collegeName": "MIDNAPORE MEDICAL COLLEGE, MIDNAPUR,5, Vidyasagar Road Midnapore 721101 Paschim Medinipur, West Bengal, 721101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21971,
      "OBC": 23164,
      "EWS": 22513,
      "SC": 122611,
      "ST": null
    }
  },
  {
    "collegeId": "mm-college-of-dental",
    "collegeName": "MM College of Dental Scie. and Res., Mullana",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 697765,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mm-college-of-dental",
    "collegeName": "MM College of Dental Scie. and Res., Mullana,M.M. COLLEGE OF DENTAL SCIENCES AND RESEARCH, MULLANA, AMBALA, HARYANA, Haryana, 133207",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 302627,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mm-inst-med-and",
    "collegeName": "MM Inst. Med. and Research, Mullana",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 370783,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mm-inst-med-and",
    "collegeName": "MM Inst. Med. and Research, Mullana",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1084838,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mm-inst-med-and",
    "collegeName": "MM Inst. Med. and Research, Mullana,M.M. INSTITUTE OF MEDICAL SCIENCES AND RESEARCH, MULLANA, AMBALA, HARYANA., Haryana, 133207",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 476344,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mm-inst-med-and",
    "collegeName": "MM Inst. Med. and Research, Mullana,M.M. INSTITUTE OF MEDICAL SCIENCES AND RESEARCH, MULLANA, AMBALA, HARYANA., Haryana, 133207",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1095555,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "moti-lal-nehru-medical",
    "collegeName": "MOTI LAL NEHRU MEDICAL COLL, ALLAHABAD",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 335597,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "moti-lal-nehru-medical",
    "collegeName": "MOTI LAL NEHRU MEDICAL COLL, ALLAHABAD,Principal Office Moti Lal Nehru Medical College, Lowther Road George Town Prayagraj, Uttar Pradesh, 211001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10455,
      "OBC": 11302,
      "EWS": 12526,
      "SC": 82921,
      "ST": 93060
    }
  },
  {
    "collegeId": "mra-medical-college-ambedkar",
    "collegeName": "MRA MEDICAL COLLEGE AMBEDKAR NAGAR, UP",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 767624,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mra-medical-college-ambedkar",
    "collegeName": "MRA MEDICAL COLLEGE AMBEDKAR NAGAR, UP,VILLAGE SADDARPUR POST SURAPUR DISTRICT AMBEDKAR NAGAR, Uttar Pradesh, 224227",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15469,
      "OBC": 16349,
      "EWS": null,
      "SC": 101608,
      "ST": null
    }
  },
  {
    "collegeId": "mysore-med-research-inst",
    "collegeName": "MYSORE MED.& RESEARCH INST. MYSORE",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1161271,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mysore-med-research-inst",
    "collegeName": "MYSORE MED.& RESEARCH INST. MYSORE,Mysore Medical College and Research Institute,Irwin Road, Mysore, Karnataka, 570021",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 9374,
      "OBC": 13516,
      "EWS": 15375,
      "SC": 87472,
      "ST": null
    }
  },
  {
    "collegeId": "maharaja-jitendra-narayan-medical",
    "collegeName": "Maharaja Jitendra Narayan Medical College and Hospital Coochbehar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 944362,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maharaja-jitendra-narayan-medical",
    "collegeName": "Maharaja Jitendra Narayan Medical College and Hospital Coochbehar,Vivekananda Street, Pilkhana, Beside Panchanan Barma University, Coochbehar, West Bengal, 736101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23933,
      "OBC": 24204,
      "EWS": null,
      "SC": 115790,
      "ST": null
    }
  },
  {
    "collegeId": "maharishi-chyawan-medical-college",
    "collegeName": "Maharishi Chyawan Medical College, Koriawas, Narnaul(Mahendergarh),H aryana",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 872905,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maharishi-chyawan-medical-college",
    "collegeName": "Maharishi Chyawan Medical College, Koriawas, Narnaul(Mahendergarh),Harya na,Vill Koriawas, Narnaul, Distt Mahendergarh, Haryana",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16702,
      "OBC": 1039159,
      "EWS": 19131,
      "SC": 106132,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-gandhi-medical-college",
    "collegeName": "Mahatma Gandhi Medical College, Pondicherry",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 724279,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-gandhi-medical-college",
    "collegeName": "Mahatma Gandhi Medical College, Pondicherry",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1219466,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-gandhi-medical-college",
    "collegeName": "Mahatma Gandhi Medical College, Pondicherry,SBV Pondicherry Campus, Pillaiyarkuppam, Puducherry, 607402",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 814210,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-gandhi-mission-medical",
    "collegeName": "Mahatma Gandhi Mission Medical College, Nerul",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 303365,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-gandhi-mission-medical",
    "collegeName": "Mahatma Gandhi Mission Medical College, Nerul",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1161561,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-gandhi-mission-medical",
    "collegeName": "Mahatma Gandhi Mission Medical College, Nerul,Sector- 8, Nerul West Navi Mumbai, Maharashtra, 400706",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 385775,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-gandhi-mission-medical",
    "collegeName": "Mahatma Gandhi Mission Medical College, Vashi, Navi Mumbai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 278380,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-gandhi-mission-medical",
    "collegeName": "Mahatma Gandhi Mission Medical College, Vashi, Navi Mumbai",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1078205,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-gandhi-mission-medical",
    "collegeName": "Mahatma Gandhi Mission Medical College, Vashi, Navi Mumbai,Sector 30, Vashi, Navi Mumbai, Maharashtra, 400703",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 317051,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-gandhi-missions-medical",
    "collegeName": "Mahatma Gandhi Missions Medical College, Panvel,Gate No. 2, MGM Education Campus, Near Kalamboli Circle, Panvel, Raigad : 410209",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 624436,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-gandhi-missions-medical",
    "collegeName": "Mahatma Gandhi Missions Medical College, Panvel,Gate No. 2, MGM Education Campus, Near Kalamboli Circle, Panvel, Raigad : 410209",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 820110,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-vidur-autonomous-state",
    "collegeName": "Mahatma Vidur Autonomous State Medical College,Bijnor Uttar Pradesh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 117611,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mahatma-vidur-autonomous-state",
    "collegeName": "Mahatma Vidur Autonomous State Medical College,Bijnor Uttar Pradesh,Mahatma Vidur Autonomous State Medical College, Village Madhusudanpur Devidas, Post Kiratpur, Naziba, Uttar Pradesh, 246731",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18359,
      "OBC": 19056,
      "EWS": 20958,
      "SC": 105997,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-dental-college",
    "collegeName": "Malla Reddy Dental College For Women, Hyderabad(Female Seat only )",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 938464,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-dental-college",
    "collegeName": "Malla Reddy Dental College For Women, Hyderabad,Suraram X Roads Jeedimetla Hyderabad, Telangana, 500055 (Female Seat only )",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 322451,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-institute-of",
    "collegeName": "Malla Reddy Institute of Dental Sciences, Hyderabad",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 914227,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-institute-of",
    "collegeName": "Malla Reddy Institute of Dental Sciences, Hyderabad,Suraram X Roads Jeedimetla Hyderabad, Telangana, 500055",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 284632,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-institute-of",
    "collegeName": "Malla Reddy Institute of Medical Sciences, Hyderabad",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 393653,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-institute-of",
    "collegeName": "Malla Reddy Institute of Medical Sciences, Hyderabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1081637,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-institute-of",
    "collegeName": "Malla Reddy Institute of Medical Sciences, Hyderabad ,Suraram X Roads Jeedimetla Hyderabad, Telangana, 500055",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 457986,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-institute-of",
    "collegeName": "Malla Reddy Institute of Medical Sciences, Hyderabad ,Suraram X Roads Jeedimetla Hyderabad, Telangana, 500055",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1230338,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-medical-college",
    "collegeName": "Malla Reddy Medical College for Women, Hyderabad(Female Seat only )",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 424521,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-medical-college",
    "collegeName": "Malla Reddy Medical College for Women, Hyderabad(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1268840,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-medical-college",
    "collegeName": "Malla Reddy Medical College for Women, Hyderabad,Suraram X Roads Jeedimetla Hyderabad, Telangana, 500055 (Female Seat only )",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 562310,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "malla-reddy-medical-college",
    "collegeName": "Malla Reddy Medical College for Women, Hyderabad,Suraram X Roads Jeedimetla Hyderabad, Telangana, 500055 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1143755,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "manipal-college-of-dental",
    "collegeName": "Manipal College of Dental Sce., Manipal",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 288329,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "manipal-college-of-dental",
    "collegeName": "Manipal College of Dental Sce., Manipal,Madhav Nagar, Manipal India, Karnataka, 576104",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 184704,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "manipal-college-of-dental",
    "collegeName": "Manipal College of Dental Science, Mangalore",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 392848,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "manipal-college-of-dental",
    "collegeName": "Manipal College of Dental Science, Mangalore,Light House Hill Road, Mangalore India, Karnataka, 575001",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 264691,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "manipal-tata-medical-college",
    "collegeName": "Manipal Tata Medical College,",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 79731,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "manipal-tata-medical-college",
    "collegeName": "Manipal Tata Medical College,",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 832414,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "manipal-tata-medical-collegekadani",
    "collegeName": "Manipal Tata Medical College,,Kadani Road, Baridih, Jamshedpur, East Singbhum District, Jharkhand, 831017",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 48703,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maulana-azad-institute-of",
    "collegeName": "Maulana Azad Institute of Dental Sciences, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 121378,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maulana-azad-institute-of",
    "collegeName": "Maulana Azad Institute of Dental Sciences, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi NCR Children/ Widows of Personnel of the Armed Forces (CW) DU Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 468785,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maulana-azad-institute-of",
    "collegeName": "Maulana Azad Institute of Dental Sciences, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi University Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 921198,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maulana-azad-institute-of",
    "collegeName": "Maulana Azad Institute of Dental Sciences, New Delhi,MAMC Complex, B.S. Zafar Marg, New Delhi, Delhi (NCT), 110002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24046,
      "OBC": 27641,
      "EWS": null,
      "SC": 145425,
      "ST": 163607
    }
  },
  {
    "collegeId": "maulana-azad-institute-of",
    "collegeName": "Maulana Azad Institute of Dental Sciences, New Delhi,MAMC Complex, B.S. Zafar Marg, New Delhi, Delhi (NCT), 110002",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi University Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24701,
      "OBC": 26342,
      "EWS": 36898,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maulana-azad-medical-college",
    "collegeName": "Maulana Azad Medical College, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 90521,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maulana-azad-medical-college",
    "collegeName": "Maulana Azad Medical College, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi NCR Children/ Widows of Personnel of the Armed Forces (CW) DU Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1031573,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maulana-azad-medical-college",
    "collegeName": "Maulana Azad Medical College, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi University Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 776926,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "maulana-azad-medical-college",
    "collegeName": "Maulana Azad Medical College, New Delhi,2 Bahadur Shah Zafar Marg New Delhi, Delhi (NCT), 110002",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi University Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": 138067
    }
  },
  {
    "collegeId": "medinirai-medical-college-previously",
    "collegeName": "Medinirai Medical College (previously Known as Palamu Medical College), Palamu",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 996115,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "medinirai-medical-college-previously",
    "collegeName": "Medinirai Medical College (previously Known as Palamu Medical College), Palamu,Pokhraha Khurd, P.O- Rajwadih, P.S- Medininagar, Dist. Palamu, Jharkhand, 822118",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21996,
      "OBC": 22895,
      "EWS": 24950,
      "SC": 118086,
      "ST": 135357
    }
  },
  {
    "collegeId": "meenakshi-ammal-dental-college",
    "collegeName": "Meenakshi Ammal Dental College and Host., Chennai1",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 828185,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "meenakshi-ammal-dental-college",
    "collegeName": "Meenakshi Ammal Dental College and Host., Chennai1,ALAPAKKAM MAIN ROAD MADURAVOYAL CHENNAI, Tamil Nadu, 600095",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 565444,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "meenakshi-medical-college-hospital",
    "collegeName": "Meenakshi Medical College Hospital and Research Institute, Kanchipuram",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 593831,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "meenakshi-medical-college-hospital",
    "collegeName": "Meenakshi Medical College Hospital and Research Institute, Kanchipuram,Enathur, Karaipettai Post, Kanchipuram, Tamil Nadu, 631552",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 657379,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mursidabad-m-c-hospital",
    "collegeName": "Mursidabad M C & Hospital, Mursidabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 784396,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "mursidabad-m-c-hospital",
    "collegeName": "Mursidabad M C & Hospital, Mursidabad,STATION ROAD, P.O. AND P.S. BERHAMPORE, DIST. MURSHIDABAD, West Bengal, 742101",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 747846,
      "OBC": 23905,
      "EWS": 24144,
      "SC": 127562,
      "ST": 146576
    }
  },
  {
    "collegeId": "nagaland-institute-of-medical",
    "collegeName": "NAGALAND INSTITUTE OF MEDICAL SCIENCE AND RESEARCH PHIREBAGIE, KOHIMA - 797001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 132082,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "nagaland-institute-of-medical",
    "collegeName": "NAGALAND INSTITUTE OF MEDICAL SCIENCE AND RESEARCH PHIREBAGIE, KOHIMA - 797001,Phreibagei, Kohima, Nagaland, 797001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 26178,
      "OBC": 26231,
      "EWS": 29747,
      "SC": 134865,
      "ST": 162975
    }
  },
  {
    "collegeId": "nair-hosp-dental-college",
    "collegeName": "NAIR HOSP DENTAL COLLEGE & HOSP,MUMBAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1296691,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "nair-hosp-dental-college",
    "collegeName": "NAIR HOSP DENTAL COLLEGE & HOSP,MUMBAI,Dr. A.L. Nair Road, Mumbai Central, Mumbai - 400 008, Maharashtra, 400008",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 35535,
      "OBC": 36205,
      "EWS": null,
      "SC": 171444,
      "ST": null
    }
  },
  {
    "collegeId": "nalanda-medical-college-patna",
    "collegeName": "NALANDA MEDICAL COLLEGE, PATNA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 621686,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "nalanda-medical-college-patnaold",
    "collegeName": "NALANDA MEDICAL COLLEGE, PATNA,OLD BYEPASS ROAD, KANKERBAGH, PATNA, Bihar, 800026",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10728,
      "OBC": null,
      "EWS": null,
      "SC": 100279,
      "ST": 112881
    }
  },
  {
    "collegeId": "namo-medical-education-research",
    "collegeName": "NAMO Medical Education & Research Institute, Govt Medical College Silvassa",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 729673,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "namo-medical-education-research",
    "collegeName": "NAMO Medical Education & Research Institute, Govt Medical College Silvassa,NAMO Medical Education and Research Institute, next to Sayli cricket stadium, Sayli road, Silvassa., Dadra And Nagar Haveli, 396230",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10204,
      "OBC": null,
      "EWS": null,
      "SC": 85166,
      "ST": null
    }
  },
  {
    "collegeId": "ndmc-medical-college-delhi",
    "collegeName": "NDMC Medical College, Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22223,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "ndmc-medical-college-delhinorth",
    "collegeName": "NDMC Medical College, Delhi,North Delhi Municipal Corporation Medical College and Hindu Rao Hospital, Malka Ganj, Delhi (NCT), 110007",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 2986,
      "OBC": 4918,
      "EWS": 5106,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "neigrihms-shillong",
    "collegeName": "NEIGRIHMS, SHILLONG",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14807,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "neigrihms-shillongmawdiangdiang-shillong-east",
    "collegeName": "NEIGRIHMS, SHILLONG,Mawdiangdiang Shillong East Khasi Hills District, Meghalaya, 793018",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16601,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "netaji-subhash-chandra-bose",
    "collegeName": "NETAJI SUBHASH CHANDRA BOSE MC,JABALPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 699953,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "netaji-subhash-chandra-bose",
    "collegeName": "NETAJI SUBHASH CHANDRA BOSE MC,JABALPUR,NAGPUR ROAD, JABALPUR, STATE- M.P.PIN-482003, Madhya Pradesh, 482003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11706,
      "OBC": 12409,
      "EWS": 13293,
      "SC": 89361,
      "ST": 100004
    }
  },
  {
    "collegeId": "nilratan-sirkar-medical-college",
    "collegeName": "NILRATAN SIRKAR MEDICAL COLLEGE, KOLKATA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 850483,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "nilratan-sirkar-medical-college",
    "collegeName": "NILRATAN SIRKAR MEDICAL COLLEGE, KOLKATA,138 AJC Bose Road, Kolkata - 700014, West Bengal, 700014",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10755,
      "OBC": 11608,
      "EWS": null,
      "SC": 53010,
      "ST": 1238539
    }
  },
  {
    "collegeId": "north-bengal-dentcollsushrutna-gar",
    "collegeName": "NORTH BENGAL DENT.COLL,SUSHRUTNA GAR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 187116,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "north-bengal-dentcollsushrutnag-ar",
    "collegeName": "NORTH BENGAL DENT.COLL,SUSHRUTNAG AR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 39073,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "north-bengal-dentcollsushrutnaga-rpo",
    "collegeName": "NORTH BENGAL DENT.COLL,SUSHRUTNAGA R,P.O SHUSHRUTA NAGAR, DIST. DARJEELING,, West Bengal, 734012",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 39295,
      "OBC": 46704,
      "EWS": null,
      "SC": 186982,
      "ST": 190875
    }
  },
  {
    "collegeId": "north-bengal-medcolldarjeeling",
    "collegeName": "NORTH BENGAL MED.COLL,DARJEELING",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 98356,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "north-bengal-medcolldarjeelingsus-hruta",
    "collegeName": "NORTH BENGAL MED.COLL,DARJEELING,Sus hruta Nagar, Darjeeling., West Bengal, 734012",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19033,
      "OBC": 20278,
      "EWS": 20482,
      "SC": 115311,
      "ST": 133959
    }
  },
  {
    "collegeId": "nagaon-medical-college",
    "collegeName": "Nagaon Medical college",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1186582,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "nagaon-medical-collegedipholu-mohkhuli",
    "collegeName": "Nagaon Medical college,Dipholu, Mohkhuli Chariali, Laokhua Road, Nagaon, Assam, 782003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25887,
      "OBC": 25963,
      "EWS": null,
      "SC": null,
      "ST": 160151
    }
  },
  {
    "collegeId": "nalbari-medical-college-hospital",
    "collegeName": "Nalbari Medical College & Hospital Dakhingaon, Nalbari",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 954124,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "nalbari-medical-college-hospital",
    "collegeName": "Nalbari Medical College & Hospital Dakhingaon, Nalbari,PO Dakhingaon Dist Nalbari PS Ghograpar, Assam, 781350",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25827,
      "OBC": 25960,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "osmania-medical-college-koti",
    "collegeName": "Osmania Medical College Koti",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1277887,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "osmania-medical-college-koti",
    "collegeName": "Osmania Medical College Koti ,HYDERABAD, Telangana, 500095",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6374,
      "OBC": 10117,
      "EWS": 8757,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "pabitra-mohan-pradhan-medical",
    "collegeName": "PABITRA MOHAN PRADHAN MEDICAL COLLEGE & HOSPITAL, TALCHER,ODISHA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 150856,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "pabitra-mohan-pradhan-medical",
    "collegeName": "PABITRA MOHAN PRADHAN MEDICAL COLLEGE & HOSPITAL, TALCHER,ODISHA,AT/PO- DERA, P.S-COLLIERY DERA, TALCHER, ANGUL,ODISHA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24812,
      "OBC": 25324,
      "EWS": 27610,
      "SC": 119266,
      "ST": 149938
    }
  },
  {
    "collegeId": "patna-dental-college-hospital",
    "collegeName": "PATNA DENTAL COLLEGE & HOSPITAL, PATNA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 153918,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "patna-dental-college-hospital",
    "collegeName": "PATNA DENTAL COLLEGE & HOSPITAL, PATNA,BANKIPUR,ASHOK RAJPATH,PATNA, Bihar, 800004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 29497,
      "OBC": null,
      "EWS": null,
      "SC": 179001,
      "ST": null
    }
  },
  {
    "collegeId": "patna-medical-college-patna",
    "collegeName": "PATNA MEDICAL COLLEGE, PATNA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 487037,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "patna-medical-college-patnaashok",
    "collegeName": "PATNA MEDICAL COLLEGE, PATNA,ASHOK RAJPATH, PATNA, Bihar, 800004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6597,
      "OBC": null,
      "EWS": 6821,
      "SC": 98679,
      "ST": null
    }
  },
  {
    "collegeId": "pb-govt-dental-college",
    "collegeName": "PB. GOVT. DENTAL COLLEGE & HOSP,AMRITSAR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 167561,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "pb-govt-dental-college",
    "collegeName": "PB. GOVT. DENTAL COLLEGE & HOSP,AMRITSAR,SSSS Chowk Majitha Road, Amritsar, Punjab, 143001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 37546,
      "OBC": 47039,
      "EWS": null,
      "SC": 168132,
      "ST": null
    }
  },
  {
    "collegeId": "pragjyotishpur-medical-college-guwahati",
    "collegeName": "PRAGJYOTISHPUR MEDICAL COLLEGE, GUWAHATI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 103833,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "pragjyotishpur-medical-college-guwahatir",
    "collegeName": "PRAGJYOTISHPUR MEDICAL COLLEGE, GUWAHATI,R K MISSION BIRUBARI, GUWAHATI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23549,
      "OBC": 25241,
      "EWS": 26429,
      "SC": 124850,
      "ST": 159681
    }
  },
  {
    "collegeId": "pt-neki-ram-sharma",
    "collegeName": "PT NEKI RAM SHARMA GOVT MEDICAL COLLEGE, BHIWANI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1070391,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "pt-neki-ram-sharma",
    "collegeName": "PT NEKI RAM SHARMA GOVT MEDICAL COLLEGE, BHIWANI,PT NEKI RAM SHARMA GOVT MEDICAL COLLEGE, BHIWANI, NEAR VITA MILK OLANT, HANSI ROAD",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15784,
      "OBC": 18184,
      "EWS": 18144,
      "SC": 101852,
      "ST": 122750
    }
  },
  {
    "collegeId": "pt-bd-sharma-pgims",
    "collegeName": "PT. B.D. SHARMA PGIMS, ROHTAK",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 103116,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "pt-bd-sharma-pgims",
    "collegeName": "PT. B.D. SHARMA PGIMS, ROHTAK,Pt. B.D. Sharma PGIMS, Rohtak, Haryana, 124001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 7588,
      "OBC": 9920,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "phulo-jhano-medical-college",
    "collegeName": "Phulo Jhano Medical College , Dumka",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 124940,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "phulo-jhano-medical-college",
    "collegeName": "Phulo Jhano Medical College , Dumka,PHULO JHANO MEDICAL COLLEGE DUMKA, Jharkhand, 814110",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21867,
      "OBC": 21926,
      "EWS": 24258,
      "SC": 113792,
      "ST": 136565
    }
  },
  {
    "collegeId": "prafulla-chandra-sen-government",
    "collegeName": "Prafulla Chandra Sen Government Medical College & Hospital, Arambagh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 719780,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "prafulla-chandra-sen-government",
    "collegeName": "Prafulla Chandra Sen Government Medical College & Hospital, Arambagh,Arambagh, Hooghly, West Bengal, 712601",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23175,
      "OBC": 23635,
      "EWS": 24782,
      "SC": 130317,
      "ST": 147433
    }
  },
  {
    "collegeId": "pt-ddu-medical-college",
    "collegeName": "Pt. D.D.U MEDICAL COLLEGE, RAJKOT",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 794265,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "pt-ddu-medical-college",
    "collegeName": "Pt. D.D.U MEDICAL COLLEGE, RAJKOT,Civil Hospital Campus, Jamnagar Road Rajkot 360001, Gujarat, 360001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 9123,
      "OBC": 9496,
      "EWS": 1179350,
      "SC": 79136,
      "ST": 95045
    }
  },
  {
    "collegeId": "pt-j-n-m",
    "collegeName": "Pt. J N M MEDICAL COLLEGE, RAIPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 527692,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "pt-j-n-m",
    "collegeName": "Pt. J N M MEDICAL COLLEGE, RAIPUR,In front of Central Jail, Jail Road Raipur C.G., Chhattisgarh, 492001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15581,
      "OBC": 16124,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "pt-jawahar-lal-nehru",
    "collegeName": "Pt. Jawahar Lal Nehru Govt. Med. College, Chamba",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 878749,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "pt-jawahar-lal-nehru",
    "collegeName": "Pt. Jawahar Lal Nehru Govt. Med. College, Chamba,Pt. Jawaharlal Nehru Govt. Medical College Chamba, Himachal Pradesh, 176310",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15300,
      "OBC": 15890,
      "EWS": 18841,
      "SC": 97106,
      "ST": 113394
    }
  },
  {
    "collegeId": "pt-raghunath-murmu-med",
    "collegeName": "Pt. Raghunath Murmu Med. College, Baripada",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1010432,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "pt-raghunath-murmu-med",
    "collegeName": "Pt. Raghunath Murmu Med. College, Baripada,AT- Rangamatia ,PO- Sankhabhanga , Via- Laxmiposi, Odisha, 757107",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21208,
      "OBC": null,
      "EWS": 23638,
      "SC": 111524,
      "ST": 146965
    }
  },
  {
    "collegeId": "rg-kar-medical-collegekolkata",
    "collegeName": "R.G. KAR MEDICAL COLLEGE,KOLKATA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 688351,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rg-kar-medical-collegekolkatar",
    "collegeName": "R.G. KAR MEDICAL COLLEGE,KOLKATA,R G Kar Medical College 1 Khudiram bose sarani, Kolkata, West Bengal, 700004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14047,
      "OBC": 15234,
      "EWS": 16703,
      "SC": 100637,
      "ST": 123741
    }
  },
  {
    "collegeId": "rnt-medical-college-udaipur",
    "collegeName": "R.N.T. MEDICAL COLLEGE, UDAIPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 826892,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rnt-medical-college-udaipuropposite",
    "collegeName": "R.N.T. MEDICAL COLLEGE, UDAIPUR,Opposite Court Chourha, Udaipur, Rajasthan, 313001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6828,
      "OBC": 7695,
      "EWS": null,
      "SC": 55836,
      "ST": 75129
    }
  },
  {
    "collegeId": "raichur-inst-of-medical",
    "collegeName": "RAICHUR INST. OF MEDICAL SCI., RAICHUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 790290,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "raichur-inst-of-medical",
    "collegeName": "RAICHUR INST. OF MEDICAL SCI., RAICHUR,RAICHUR INSTITUTE OF MEDICAL SCIENCES INDUSTRIAL AREA, HYDERABAD ROAD, RAICHUR, Karnataka 584102, Karnataka, 584102",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 896492,
      "OBC": 23033,
      "EWS": 24959,
      "SC": 117925,
      "ST": 147487
    }
  },
  {
    "collegeId": "rajendra-inst-of-med",
    "collegeName": "RAJENDRA INST. OF MED. SCI., RANCHI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 429107,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rajendra-inst-of-med",
    "collegeName": "RAJENDRA INST. OF MED. SCI., RANCHI,Director, Rajendra Institute of Medical Sciences, Bariatu,Ranchi, Jharkhand, 843009",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 8595,
      "OBC": null,
      "EWS": 8785,
      "SC": 89481,
      "ST": null
    }
  },
  {
    "collegeId": "rajiv-gandhi-institute-of",
    "collegeName": "RAJIV GANDHI INSTITUTE OF MEDICAL SCIENCES, KADAPA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 135685,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rajiv-gandhi-institute-of",
    "collegeName": "RAJIV GANDHI INSTITUTE OF MEDICAL SCIENCES, KADAPA,GOVERNMENT MEDICAL COLLEGE RIMS PUTLAMPALLI, YSR KADAPA DIST. G.M.C.,KADAPA.,A.P, Andhra Pradesh, 516002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21972,
      "OBC": 22499,
      "EWS": 26189,
      "SC": 88330,
      "ST": 147831
    }
  },
  {
    "collegeId": "rajiv-gandhi-medical-college",
    "collegeName": "RAJIV GANDHI MEDICAL COLLEGE, THANE",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 367321,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rajiv-gandhi-medical-college",
    "collegeName": "RAJIV GANDHI MEDICAL COLLEGE, THANE,THANE BELAPUR ROAD KALWA THANE WEST, Maharashtra, 400605",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 734012,
      "OBC": 14118,
      "EWS": 15760,
      "SC": 95419,
      "ST": 108496
    }
  },
  {
    "collegeId": "rampurhat-govt-medical-college",
    "collegeName": "RAMPURHAT GOVT MEDICAL COLLEGE RAMPURHAT",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 125330,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rampurhat-govt-medical-college",
    "collegeName": "RAMPURHAT GOVT MEDICAL COLLEGE RAMPURHAT ,RAMPURHAT GOVERNMENT MEDICAL COLLEGE AND HOSPITAL PO RAMPURHAT PS RAMPURHAT PIN 731224 DIST BIRBHUM, West Bengal, 731224",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23811,
      "OBC": 24310,
      "EWS": 25107,
      "SC": 129745,
      "ST": 146954
    }
  },
  {
    "collegeId": "regional-dental-college-guwahati",
    "collegeName": "REGIONAL DENTAL COLLEGE, GUWAHATI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 208908,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "regional-dental-college-guwahatiregional",
    "collegeName": "REGIONAL DENTAL COLLEGE, GUWAHATI,Regional Dental College, Bhangagarh, PO Indrapur, Dist.-Kamrup Metro, Assam, 781032",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 43212,
      "OBC": 1237772,
      "EWS": null,
      "SC": 180514,
      "ST": 222421
    }
  },
  {
    "collegeId": "regional-inst-of-medical",
    "collegeName": "REGIONAL INST OF MEDICAL SCI, IMPHAL",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 157432,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "regional-inst-of-medical",
    "collegeName": "REGIONAL INST OF MEDICAL SCI, IMPHAL,PO Lamphelpat, Imphal West District, Manipur, 795004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22377,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rims-srikakulam",
    "collegeName": "RIMS Srikakulam",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 951374,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rims-srikakulambalaga-srikakulam-andhra",
    "collegeName": "RIMS Srikakulam,Balaga Srikakulam, Andhra Pradesh, 532001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 458203,
      "OBC": 23851,
      "EWS": 27662,
      "SC": 122928,
      "ST": 151351
    }
  },
  {
    "collegeId": "rims-ongole",
    "collegeName": "RIMS, Ongole",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 919870,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rims-ongolebhagyanagar-5th-lane",
    "collegeName": "RIMS, Ongole,BHAGYANAGAR 5TH LANE, RIMS, ONGOLE, PRAKASAM DISTRICT, ANDHRA PRADESH, Andhra Pradesh, 523001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23089,
      "OBC": 23253,
      "EWS": 27619,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "ruhs-college-of-dental",
    "collegeName": "RUHS College of Dental Science, Jaipur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 134618,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "ruhs-college-of-dental",
    "collegeName": "RUHS College of Dental Science, Jaipur,Ruhs College of dental science , johtwara road jaipur, Rajasthan, 302016",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13416,
      "OBC": 30485,
      "EWS": null,
      "SC": 149021,
      "ST": 166007
    }
  },
  {
    "collegeId": "ruhs-college-of-medical",
    "collegeName": "RUHS College of Medical Sciences, Jaipur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 710593,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "ruhs-college-of-medical",
    "collegeName": "RUHS College of Medical Sciences, Jaipur,RUHS COLLEGE OF MEDICAL SCIENCES, SECTOR -11, PRATAP NAGAR, SANGANER, JAIPUR 302033, Rajasthan, 302033",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 670804,
      "OBC": 5859,
      "EWS": null,
      "SC": 47055,
      "ST": 49630
    }
  },
  {
    "collegeId": "raiganj-government-medical-college",
    "collegeName": "Raiganj Government Medical College",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 718507,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "raiganj-government-medical-collegeabdulghata",
    "collegeName": "Raiganj Government Medical College,ABDULGHATA CAMPUS, KARNAJORA, PO- KARNAJORA,PS- RAIGANJ, DISTRICT- UTTAR DINAJPUR,PIN-733130, STATE, West Bengal, 733130",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23373,
      "OBC": 24635,
      "EWS": 24993,
      "SC": 129534,
      "ST": 133561
    }
  },
  {
    "collegeId": "raja-rajeswari-medical-college",
    "collegeName": "Raja Rajeswari Medical College Bengaluru",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 386653,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "raja-rajeswari-medical-college",
    "collegeName": "Raja Rajeswari Medical College Bengaluru",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1288464,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "raja-rajeswari-medical-college",
    "collegeName": "Raja Rajeswari Medical College Bengaluru,202, Kambipura, Bengaluru Mysuru High Way,Kengeri Hobli, Bangalore, Karnataka, Karnataka, 560074",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 526412,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "raja-rajeswari-medical-college",
    "collegeName": "Raja Rajeswari Medical College Bengaluru,202, Kambipura, Bengaluru Mysuru High Way,Kengeri Hobli, Bangalore, Karnataka, Karnataka, 560074",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1317215,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rajah-muthiah-dental-college",
    "collegeName": "Rajah Muthiah Dental College and Hos. , Annamalai",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 963428,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rajah-muthiah-dental-college",
    "collegeName": "Rajah Muthiah Dental College and Hos. , Annamalai ,GOVT DENTAL COLLEGE AND HOSPITAL, CUDDALORE DT- CHIDAMBARAM Erstwhile Rajah Muthiah Dental College, Tamil Nadu, 608002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1203500,
      "OBC": 47378,
      "EWS": 60380,
      "SC": 175255,
      "ST": 220084
    }
  },
  {
    "collegeId": "rajah-muthiah-medical-college",
    "collegeName": "Rajah Muthiah Medical College, Annamalai Universit",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 785589,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rajah-muthiah-medical-college",
    "collegeName": "Rajah Muthiah Medical College, Annamalai Universit,Government Medical College and Hospital, Cuddalore District, Erstwhile Rajah Muthiah Medical College, Tamil Nadu, 608002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19490,
      "OBC": 20243,
      "EWS": 29569,
      "SC": 132020,
      "ST": null
    }
  },
  {
    "collegeId": "rajarshee-chhatrapati-shahu-maharaj",
    "collegeName": "Rajarshee Chhatrapati Shahu Maharaj Government Medical College Kolhapur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 287149,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rajarshee-chhatrapati-shahu-maharaj",
    "collegeName": "Rajarshee Chhatrapati Shahu Maharaj Government Medical College Kolhapur,Rajarshee Chhatrapati Shahu Maharaj Government Medical College, R. K. Nagar Road, Shenda Park, Kol, Maharashtra, 416012",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16659,
      "OBC": 19270,
      "EWS": 22134,
      "SC": 109831,
      "ST": 127579
    }
  },
  {
    "collegeId": "rajiv-gandhi-institute-medical",
    "collegeName": "Rajiv Gandhi Institute Medical Sce of Adilabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 108324,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rajiv-gandhi-institute-medical",
    "collegeName": "Rajiv Gandhi Institute Medical Sce of Adilabad,MAIN ROAD, OLD NH 07, ADILABAD TOWN ADILABAD DISTRICT, TELANGANA STATE-504001, Telangana, 504001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21714,
      "OBC": 22374,
      "EWS": 24686,
      "SC": 121285,
      "ST": null
    }
  },
  {
    "collegeId": "rajkiya-medical-college-jalaun",
    "collegeName": "Rajkiya Medical College, Jalaun",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 101407,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rajkiya-medical-college-jalaunkalpi",
    "collegeName": "Rajkiya Medical College, Jalaun,Kalpi Road Orai Jalaun, Uttar Pradesh, 285001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16365,
      "OBC": 16785,
      "EWS": 17316,
      "SC": 101439,
      "ST": 114568
    }
  },
  {
    "collegeId": "rajmata-shrimati-devendra-kumari",
    "collegeName": "Rajmata shrimati devendra kumari singhdeo government medical college, ambikapur,Surguja",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 115297,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rajmata-shrimati-devendra-kumari",
    "collegeName": "Rajmata shrimati devendra kumari singhdeo government medical college, ambikapur,Surguja,Kanyaparis ar Road Gangapur Ambikapur District Surguja, Chhattisgarh, 497001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 22102,
      "OBC": 23139,
      "EWS": 25218,
      "SC": null,
      "ST": 143730
    }
  },
  {
    "collegeId": "rangaraya-medical-college-kakinada",
    "collegeName": "Rangaraya Medical College, Kakinada",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 893528,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rangaraya-medical-college-kakinadapithapuram",
    "collegeName": "Rangaraya Medical College, Kakinada,PITHAPURAM ROAD, KAKINADA, Andhra Pradesh, 533003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20306,
      "OBC": 1161027,
      "EWS": 25710,
      "SC": 95122,
      "ST": 139038
    }
  },
  {
    "collegeId": "rani-durgavati-medical-college",
    "collegeName": "Rani Durgavati Medical College, Banda",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 582737,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rani-durgavati-medical-college",
    "collegeName": "Rani Durgavati Medical College, Banda,RANI DURGAVATI MEDICAL COLLEGE, NARAINI ROAD, BANDA-210001, Uttar Pradesh, 210001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15296,
      "OBC": 17225,
      "EWS": null,
      "SC": 102184,
      "ST": 114515
    }
  },
  {
    "collegeId": "rural-dental-college-loni",
    "collegeName": "Rural Dental College, Loni",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 599324,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rural-dental-college-loni",
    "collegeName": "Rural Dental College, Loni",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1003176,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rural-dental-college-loniat",
    "collegeName": "Rural Dental College, Loni,At - Loni Tal - Rahata Dist - Ahilyanagar Maharashtra State, India PIN-413736 (Near Shirdi), Maharashtra, 413736",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 422467,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rural-dental-college-loniat",
    "collegeName": "Rural Dental College, Loni,At - Loni Tal - Rahata Dist - Ahilyanagar Maharashtra State, India PIN-413736 (Near Shirdi), Maharashtra, 413736",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1041173,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rural-medical-college-and",
    "collegeName": "Rural Medical College and PIMS, Loni",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 138242,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rural-medical-college-and",
    "collegeName": "Rural Medical College and PIMS, Loni",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1295576,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "rural-medical-college-and",
    "collegeName": "Rural Medical College and PIMS, Loni,Dr Balasheb Vikhe Patil Rural Medical College At Loni BK Tal Rahata Dist Ahilyanagar Mahara, Maharashtra, 413736",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 139826,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "scb-medical-colldentalcuttac-k",
    "collegeName": "S.C.B. MEDICAL COLL(DENTAL),CUTTAC K",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 230109,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "scb-medical-colldentalcuttack",
    "collegeName": "S.C.B. MEDICAL COLL(DENTAL),CUTTACK",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 87414,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "scb-medical-colldentalcuttacks-cb",
    "collegeName": "S.C.B. MEDICAL COLL(DENTAL),CUTTACK,S. C.B. Dental College and Hospital, Mangalabag, Cuttack, Pin-753 007, Odisha, 753007",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 39126,
      "OBC": null,
      "EWS": 41751,
      "SC": 147621,
      "ST": 240285
    }
  },
  {
    "collegeId": "scb-medical-college-cuttack",
    "collegeName": "S.C.B. MEDICAL COLLEGE, CUTTACK",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 117136,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "scb-medical-college-cuttackmangalabag",
    "collegeName": "S.C.B. MEDICAL COLLEGE, CUTTACK,Mangalabag, Cuttack, Odisha, 753007",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 7227,
      "OBC": 7351,
      "EWS": null,
      "SC": null,
      "ST": 119728
    }
  },
  {
    "collegeId": "sms-medical-college-jaipur",
    "collegeName": "S.M.S. MEDICAL COLLEGE, JAIPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 359030,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sms-medical-college-jaipurjln",
    "collegeName": "S.M.S. MEDICAL COLLEGE, JAIPUR,JLN Marg, Jaipur, Rajasthan, 302004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 2531,
      "OBC": null,
      "EWS": null,
      "SC": 32890,
      "ST": null
    }
  },
  {
    "collegeId": "sn-medical-college-agra",
    "collegeName": "S.N. MEDICAL COLLEGE, AGRA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 71468,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sn-medical-college-agrahospital",
    "collegeName": "S.N. MEDICAL COLLEGE, AGRA,HOSPITAL ROAD AGRA, Uttar Pradesh, 282002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 8950,
      "OBC": 10008,
      "EWS": 12381,
      "SC": 79264,
      "ST": 89243
    }
  },
  {
    "collegeId": "ss-medical-college-rewa",
    "collegeName": "S.S. MEDICAL COLLEGE, REWA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 87322,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "ss-medical-college-rewanear",
    "collegeName": "S.S. MEDICAL COLLEGE, REWA,NEAR DHOBIYA TANKI, JAIL ROAD, REWA, Madhya Pradesh, 486001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14831,
      "OBC": 15058,
      "EWS": 17397,
      "SC": 98954,
      "ST": 107096
    }
  },
  {
    "collegeId": "sardar-patel-medical-college",
    "collegeName": "SARDAR PATEL MEDICAL COLLEGE, BIKANER",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 68309,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sardar-patel-medical-college",
    "collegeName": "SARDAR PATEL MEDICAL COLLEGE, BIKANER,MEDICAL COLLEGE ROAD, BIKANER, Rajasthan, 334003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6026,
      "OBC": 6177,
      "EWS": null,
      "SC": 52092,
      "ST": null
    }
  },
  {
    "collegeId": "sathyabama-univ-dental-college",
    "collegeName": "SATHYABAMA UNIV. Dental College and Hospt. Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 943205,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sathyabama-univ-dental-college",
    "collegeName": "SATHYABAMA UNIV. Dental College and Hospt. Chennai,JEPPIAAR NAGAR RAJIV GANDHI SALAI, CHENNAI, Tamil Nadu, 600119",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 334495,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sbks-med-inst-and",
    "collegeName": "SBKS Med. Inst. and Res. Centre, Sumandeep Vidyapeeth",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 398037,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sbks-med-inst-and",
    "collegeName": "SBKS Med. Inst. and Res. Centre, Sumandeep Vidyapeeth",
    "type": "Government",
    "isDeemed": false,
    "quota": "Jain Minority Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 785540,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sbks-med-inst-and",
    "collegeName": "SBKS Med. Inst. and Res. Centre, Sumandeep Vidyapeeth",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 861535,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sbks-med-inst-and",
    "collegeName": "SBKS Med. Inst. and Res. Centre, Sumandeep Vidyapeeth,Sumandeep Vidyapeeth Deemed to be University Campus, At. Po.Piparia, Tal.Waghodia, Dist.Vadodara, Gujarat, 391760",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 535000,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sbks-med-inst-and",
    "collegeName": "SBKS Med. Inst. and Res. Centre, Sumandeep Vidyapeeth,Sumandeep Vidyapeeth Deemed to be University Campus, At. Po.Piparia, Tal.Waghodia, Dist.Vadodara, Gujarat, 391760",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Jain Minority Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1087718,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sbks-med-inst-and",
    "collegeName": "SBKS Med. Inst. and Res. Centre, Sumandeep Vidyapeeth,Sumandeep Vidyapeeth Deemed to be University Campus, At. Po.Piparia, Tal.Waghodia, Dist.Vadodara, Gujarat, 391760",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 663245,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sdu-medical-college-kolar",
    "collegeName": "SDU Medical College, Kolar",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 247191,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sdu-medical-college-kolar",
    "collegeName": "SDU Medical College, Kolar",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1269485,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sdu-medical-college-kolarsri",
    "collegeName": "SDU Medical College, Kolar,SRI DEVARAJ URS MEDICAL COLLEGE, TAMAKA, KOLAR, Karnataka, 563103",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 234972,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sdu-medical-college-kolarsri",
    "collegeName": "SDU Medical College, Kolar,SRI DEVARAJ URS MEDICAL COLLEGE, TAMAKA, KOLAR, Karnataka, 563103",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 903755,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "seth-gs-medical-college",
    "collegeName": "SETH G.S. MEDICAL COLLEGE, MUMBAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 80620,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "seth-gs-medical-college",
    "collegeName": "SETH G.S. MEDICAL COLLEGE, MUMBAI,ACHARYA DONDE MARG PAREL MUMBAI, Maharashtra, 400012",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": 5545,
      "SC": null,
      "ST": 85260
    }
  },
  {
    "collegeId": "sh-vasant-rao-naik",
    "collegeName": "SH VASANT RAO NAIK GOVT.M.C.,YAVATMAL",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1310157,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sh-vasant-rao-naik",
    "collegeName": "SH VASANT RAO NAIK GOVT.M.C.,YAVATMAL,CIVIL LINES YAVATMAL, Maharashtra, 445001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 867744,
      "OBC": 985681,
      "EWS": 23608,
      "SC": 89665,
      "ST": null
    }
  },
  {
    "collegeId": "sheikh-bhikhari-medical-college",
    "collegeName": "SHEIKH BHIKHARI MEDICAL COLLEGE & HOSPITAL, HAZARIBAG ( Formerly called as- Hazaribagh Medical College, Hazaribag)",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 114364,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sheikh-bhikhari-medical-college",
    "collegeName": "SHEIKH BHIKHARI MEDICAL COLLEGE & HOSPITAL, HAZARIBAG ( Formerly called as- Hazaribagh Medical College, Hazaribag),NEAR CENTRAL JAIL, HAZARIBAG, Jharkhand, 825301",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20401,
      "OBC": 20821,
      "EWS": 20884,
      "SC": 100310,
      "ST": 131281
    }
  },
  {
    "collegeId": "shilong-medical-college-meghalaya",
    "collegeName": "SHILONG MEDICAL COLLEGE, MEGHALAYA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 630644,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "shilong-medical-college-meghalayapasteur",
    "collegeName": "SHILONG MEDICAL COLLEGE, MEGHALAYA,Pasteur Hills, Lawmali Road, Shilong, East Khasi Hills,Meghalaya",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1102815,
      "OBC": 25395,
      "EWS": null,
      "SC": 134362,
      "ST": null
    }
  },
  {
    "collegeId": "shimoga-inst-of-medical",
    "collegeName": "SHIMOGA INST. OF MEDICAL SCI., SHIMOGA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 118018,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "shimoga-inst-of-medical",
    "collegeName": "SHIMOGA INST. OF MEDICAL SCI., SHIMOGA,SAGAR ROAD, MCGANN HOSPITAL CAMPUS, SHIVAMOGGA, Karnataka, 577201",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18442,
      "OBC": 20790,
      "EWS": 24929,
      "SC": 122634,
      "ST": 127509
    }
  },
  {
    "collegeId": "shkm-gmc-nalhar-mewat",
    "collegeName": "SHKM GMC, Nalhar, Mewat, Haryana",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 489131,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "shkm-gmc-nalhar-mewat",
    "collegeName": "SHKM GMC, Nalhar, Mewat, Haryana,THE DIRECTOR, SHAHEED HASAN KHAN,MEWATI GOVT. MEDICAL COLLEGE, NALHAR, NUH - HARYANA - 122107, Haryana, 122107",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 15245,
      "OBC": 16090,
      "EWS": 17313,
      "SC": 96339,
      "ST": 101613
    }
  },
  {
    "collegeId": "shri-atal-bihari-vajpayee",
    "collegeName": "SHRI ATAL BIHARI VAJPAYEE GOVERNMENT MEDICAL COLLEGE, CHHAINSA, FARIDABAD",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 946839,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "shri-atal-bihari-vajpayee",
    "collegeName": "SHRI ATAL BIHARI VAJPAYEE GOVERNMENT MEDICAL COLLEGE, CHHAINSA, FARIDABAD,Shri Atal Bihari Vajpayee Government Medical College Chhainsa Faridabad, Haryana, 121004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14645,
      "OBC": 1036545,
      "EWS": 17435,
      "SC": 97625,
      "ST": null
    }
  },
  {
    "collegeId": "shri-bhausaheb-hire-govt",
    "collegeName": "SHRI BHAUSAHEB HIRE GOVT. M.C., DHULE",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 114432,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "shri-bhausaheb-hire-govt",
    "collegeName": "SHRI BHAUSAHEB HIRE GOVT. M.C., DHULE,Shri.Bhusaheb Hire Government Medical College Malegaon Road Chakkarbardi Area Dhule, Maharashtra, 424002",
    "type": "Central Institute",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20345,
      "OBC": 20870,
      "EWS": 22149,
      "SC": 116887,
      "ST": 125396
    }
  },
  {
    "collegeId": "shri-kalyan-govt-medical",
    "collegeName": "SHRI KALYAN GOVT MEDICAL COLLEGE SIKAR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 499162,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "shri-kalyan-govt-medical",
    "collegeName": "SHRI KALYAN GOVT MEDICAL COLLEGE SIKAR,Shri Kalyan Govt. Medical College, Bajaj Gram, Sanwali, NH 8 A, Sikar 332001, Rajasthan, 332001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 8903,
      "OBC": 9077,
      "EWS": null,
      "SC": 72391,
      "ST": 77081
    }
  },
  {
    "collegeId": "silchar-medical-college-silcher",
    "collegeName": "SILCHAR MEDICAL COLLEGE, SILCHER",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 134204,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "silchar-medical-college-silcherpo",
    "collegeName": "SILCHAR MEDICAL COLLEGE, SILCHER,PO Silchar Medical College, Silchar, Assam, 788014",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23656,
      "OBC": 24771,
      "EWS": 24156,
      "SC": 131271,
      "ST": 150604
    }
  },
  {
    "collegeId": "sjp-medical-college-bharatpur",
    "collegeName": "SJP Medical College, Bharatpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 939435,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sjp-medical-college-bharatpurrampura",
    "collegeName": "SJP Medical College, Bharatpur,Rampura, NH- 21,Sever Road,Bharatpur,Rajasthan, Rajasthan, 321001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11791,
      "OBC": 11972,
      "EWS": null,
      "SC": 80312,
      "ST": 90864
    }
  },
  {
    "collegeId": "skims-medical-college-bemina",
    "collegeName": "SKIMS Medical College, Bemina, Srinagar",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 99931,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "skims-medical-college-bemina",
    "collegeName": "SKIMS Medical College, Bemina, Srinagar,SKIMS MC BEMINA , SRINAGAR, JAMMU KASHMIR, Jammu And Kashmir, 190018",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 17981,
      "EWS": 21323,
      "SC": 109967,
      "ST": null
    }
  },
  {
    "collegeId": "slbs-govt-medical-college",
    "collegeName": "SLBS Govt. Medical College, Mandi",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 81002,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "slbs-govt-medical-college",
    "collegeName": "SLBS Govt. Medical College, Mandi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 441737,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "slbs-govt-medical-college",
    "collegeName": "SLBS Govt. Medical College, Mandi,Mandi at Nerchowk PO Bhangrotu Tehsil Balh District Mandi, Himachal Pradesh, 175021",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10366,
      "OBC": 12108,
      "EWS": null,
      "SC": 86092,
      "ST": null
    }
  },
  {
    "collegeId": "slbs-govt-medical-college",
    "collegeName": "SLBS Govt. Medical College, Mandi,Mandi at Nerchowk PO Bhangrotu Tehsil Balh District Mandi, Himachal Pradesh, 175021",
    "type": "Government",
    "isDeemed": false,
    "quota": "Employee s State Insurance Scheme( ESI)",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 31718,
      "OBC": 34580,
      "EWS": 32408,
      "SC": 212766,
      "ST": null
    }
  },
  {
    "collegeId": "soban-singh-jeena-government",
    "collegeName": "SOBAN SINGH JEENA GOVERNMENT INSTITUTE OF MEDICAL SCIENCE & RESEARCH, ALMORA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 828775,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "soban-singh-jeena-government",
    "collegeName": "SOBAN SINGH JEENA GOVERNMENT INSTITUTE OF MEDICAL SCIENCE & RESEARCH, ALMORA,Near Vikas Bhawan Pandeykhola Almora, Uttarakhand, 263601",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18046,
      "OBC": 19180,
      "EWS": 21083,
      "SC": 99903,
      "ST": 122242
    }
  },
  {
    "collegeId": "sri-krishna-medical-college",
    "collegeName": "SRI KRISHNA MEDICAL COLLEGE, MUZAFFARPUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 104567,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-krishna-medical-college",
    "collegeName": "SRI KRISHNA MEDICAL COLLEGE, MUZAFFARPUR,UMANAGAR MUZAFFARPUR, Bihar, 842004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13996,
      "OBC": 14805,
      "EWS": 15505,
      "SC": 110205,
      "ST": null
    }
  },
  {
    "collegeId": "sri-lalithambigai-medical-college",
    "collegeName": "SRI LALITHAMBIGAI MEDICAL COLLEGE & HOSPITAL",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 324838,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-lalithambigai-medical-college",
    "collegeName": "SRI LALITHAMBIGAI MEDICAL COLLEGE & HOSPITAL",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1315566,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-lalithambigai-medical-college",
    "collegeName": "SRI LALITHAMBIGAI MEDICAL COLLEGE & HOSPITAL,Faculty of Medicine - Sri Lalithambigai Medical College and Hospital, 1, Periyar EVR High Road, Ada, Tamil Nadu, 600095",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 252065,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-lalithambigai-medical-college",
    "collegeName": "SRI LALITHAMBIGAI MEDICAL COLLEGE & HOSPITAL,Faculty of Medicine - Sri Lalithambigai Medical College and Hospital, 1, Periyar EVR High Road, Ada, Tamil Nadu, 600095",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1136009,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "srm-dental-college-chennai",
    "collegeName": "SRM Dental College, Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 535578,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "srm-dental-college-chennaisrm",
    "collegeName": "SRM Dental College, Chennai,SRM DENTAL COLLEGE, BHARATHI SALAI, RAMAPURAM, CHENNAI - 89, Tamil Nadu, 600089",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 290247,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "srm-katt-dental-college",
    "collegeName": "SRM Katt. Dental College and Hospt. Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 617769,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "srm-katt-dental-college",
    "collegeName": "SRM Katt. Dental College and Hospt. Chennai,SRM NAGAR POTHERI KATTANKULATHUR KANCHIPURAM, Tamil Nadu, 603203",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 288376,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "srm-medical-college-and",
    "collegeName": "SRM Medical College and Hospital, Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 610737,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "srm-medical-college-and",
    "collegeName": "SRM Medical College and Hospital, Chennai",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 886880,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "srm-medical-college-and",
    "collegeName": "SRM Medical College and Hospital, Chennai,SRM MEDICAL COLLEGE HOSPITAL AND RESEARCH CENTRE, POTHERI, KATTANKULATHUR 603203, CHENGALPATTU DIST,, Tamil Nadu, 603203",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 704056,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "srm-medical-college-and",
    "collegeName": "SRM Medical College and Hospital, Chennai,SRM MEDICAL COLLEGE HOSPITAL AND RESEARCH CENTRE, POTHERI, KATTANKULATHUR 603203, CHENGALPATTU DIST,, Tamil Nadu, 603203",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 902651,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "stanley-medical-college-chennai",
    "collegeName": "STANLEY MEDICAL COLLEGE, CHENNAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1191224,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "stanley-medical-college-chennaino1",
    "collegeName": "STANLEY MEDICAL COLLEGE, CHENNAI,No.1, Old Jail Road Chennai, Tamil Nadu, 600001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 6781,
      "OBC": 7131,
      "EWS": 22385,
      "SC": 49247,
      "ST": 88355
    }
  },
  {
    "collegeId": "suh-maulana-mahmood-hasan",
    "collegeName": "SUH Maulana Mahmood Hasan Medical College, Saharanpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 703861,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "suh-maulana-mahmood-hasan",
    "collegeName": "SUH Maulana Mahmood Hasan Medical College, Saharanpur,Ambala Road, Pilakhni, Saharanpur, Uttar Pradesh, 247001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 11859,
      "OBC": 12722,
      "EWS": null,
      "SC": 789747,
      "ST": 111624
    }
  },
  {
    "collegeId": "svims-sri-padmavathi-medical",
    "collegeName": "SVIMS - Sri Padmavathi Medical College for Women, Tirupati(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 916173,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "svims-sri-padmavathi-medical",
    "collegeName": "SVIMS - Sri Padmavathi Medical College for Women, Tirupati,SVIMS, ALIPIRI ROAD, TIRUPATI, Andhra Pradesh, 517507 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21961,
      "OBC": 22115,
      "EWS": 27269,
      "SC": 126148,
      "ST": 151273
    }
  },
  {
    "collegeId": "swami-ramanand-tirth-rural",
    "collegeName": "SWAMI RAMANAND TiRTH RURAL M.C,AMBAJOGAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 559542,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "swami-ramanand-tirth-rural",
    "collegeName": "SWAMI RAMANAND TiRTH RURAL M.C,AMBAJOGAI,SWAMI RAMNAND TEERTH RURAL GOVERNMENT MEDICAL COLLEGE AMBAJOGAI DIST BEED MAHARASHTRA PIN- 431517, Maharashtra, 431517",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 21425,
      "OBC": 21693,
      "EWS": 23740,
      "SC": 115546,
      "ST": 122369
    }
  },
  {
    "collegeId": "symbiosis-medical-college-for",
    "collegeName": "SYMBIOSIS MEDICAL COLLEGE FOR WOMEN PUNE(Female Seat only )",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 50473,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "symbiosis-medical-college-for",
    "collegeName": "SYMBIOSIS MEDICAL COLLEGE FOR WOMEN PUNE(Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1099519,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "symbiosis-medical-college-for",
    "collegeName": "SYMBIOSIS MEDICAL COLLEGE FOR WOMEN PUNE,Gram Lavale Tal Mulshi Pune, Maharashtra, 412115 (Female Seat only )",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 42465,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "symbiosis-medical-college-for",
    "collegeName": "SYMBIOSIS MEDICAL COLLEGE FOR WOMEN PUNE,Gram Lavale Tal Mulshi Pune, Maharashtra, 412115 (Female Seat only )",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1002763,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sagar-dutta-medical-college",
    "collegeName": "Sagar Dutta Medical College & Hospital, Kolkata",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1289581,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sagar-dutta-medical-college",
    "collegeName": "Sagar Dutta Medical College & Hospital, Kolkata,578, B.T. Road, Kamarhati, Kolkata, West Bengal, 700058",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16600,
      "OBC": 17637,
      "EWS": 16750,
      "SC": 103280,
      "ST": 127811
    }
  },
  {
    "collegeId": "saheed-laxman-nayak-med",
    "collegeName": "Saheed Laxman Nayak Med. College and Hos., Koraput",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 744200,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "saheed-laxman-nayak-med",
    "collegeName": "Saheed Laxman Nayak Med. College and Hos., Koraput,AT- JANIGUDA,KORAPUT, Odisha, 764020",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24372,
      "OBC": 25153,
      "EWS": null,
      "SC": 94459,
      "ST": null
    }
  },
  {
    "collegeId": "saheed-rendo-majhi-medical",
    "collegeName": "Saheed Rendo Majhi Medical College & Hospital, Bhawanipatna, Kalahandi,Odisha",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 134635,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "saheed-rendo-majhi-medical",
    "collegeName": "Saheed Rendo Majhi Medical College & Hospital, Bhawanipatna, Kalahandi,Odisha,At - Bhangabari, P.O. - Uditnarayanpur, Bhawanipatna, Dist - Kalahandi, Odisha, 766002",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25048,
      "OBC": 1011796,
      "EWS": 26733,
      "SC": null,
      "ST": 150188
    }
  },
  {
    "collegeId": "santosh-dental-college-and",
    "collegeName": "Santosh Dental College and Hospital, Ghaziabad",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 731183,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "santosh-dental-college-and",
    "collegeName": "Santosh Dental College and Hospital, Ghaziabad,No.1, Santosh Nagar, Ghaziabad, NCR Delhi, Uttar Pradesh, 201009",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 151835,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "santosh-medical-college-and",
    "collegeName": "Santosh Medical College and Hospital, Ghaziabad",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 523387,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "santosh-medical-college-and",
    "collegeName": "Santosh Medical College and Hospital, Ghaziabad",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1119695,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "santosh-medical-college-and",
    "collegeName": "Santosh Medical College and Hospital, Ghaziabad,No.1, Santosh Nagar, Ghaziabad, NCR Delhi, Uttar Pradesh, 201009",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 588923,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "santosh-medical-college-and",
    "collegeName": "Santosh Medical College and Hospital, Ghaziabad,No.1, Santosh Nagar, Ghaziabad, NCR Delhi, Uttar Pradesh, 201009",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 878397,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sarat-chandra-chattopadhyay-govt",
    "collegeName": "Sarat Chandra Chattopadhyay Govt. Medical College & Hospital, Uluberia",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 586162,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sarat-chandra-chattopadhyay-govt",
    "collegeName": "Sarat Chandra Chattopadhyay Govt. Medical College & Hospital, Uluberia,ULUBERIA, DIST-HOWRAH, West Bengal, 711315",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23215,
      "OBC": 23387,
      "EWS": null,
      "SC": 120350,
      "ST": null
    }
  },
  {
    "collegeId": "saveetha-dental-college-chennai",
    "collegeName": "Saveetha Dental College, Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 547121,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "saveetha-dental-college-chennai",
    "collegeName": "Saveetha Dental College, Chennai",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1096035,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "saveetha-dental-college-chennaisaveetha",
    "collegeName": "Saveetha Dental College, Chennai,Saveetha Dental College and Hospitals,162, Poonamallee high road, Velapanchavadi, Chennai, Tamil Nadu, 600077",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 310094,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "saveetha-medical-college-chennai",
    "collegeName": "Saveetha Medical College, Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 525685,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "saveetha-medical-college-chennaisaveetha",
    "collegeName": "Saveetha Medical College, Chennai,Saveetha Nagar, Thandalam, Chennai, Tamil Nadu, 602105",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 510694,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "school-of-dental-sciences",
    "collegeName": "School of Dental Sciences and KIMSDU, Karad",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 722952,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "school-of-dental-sciences",
    "collegeName": "School of Dental Sciences and KIMSDU, Karad",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1065522,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "school-of-dental-sciences",
    "collegeName": "School of Dental Sciences and KIMSDU, Karad,KARAD, DIST SATARA (MAHARASHTRA STATE) - 415110, Maharashtra, 415110",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 516626,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "shaheed-nirmal-mahto-medical",
    "collegeName": "Shaheed Nirmal Mahto Medical College & Hospital, Dhanbad",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 118121,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "shaheed-nirmal-mahto-medical",
    "collegeName": "Shaheed Nirmal Mahto Medical College & Hospital, Dhanbad,PO BCCL TOWNSHIP KOYLANAGAR DHANBAD, Jharkhand, 826005",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 18018,
      "OBC": 19807,
      "EWS": 18604,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sharad-pawar-dental-college",
    "collegeName": "Sharad Pawar Dental College and Hospital, Wardha",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 827913,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sharad-pawar-dental-college",
    "collegeName": "Sharad Pawar Dental College and Hospital, Wardha,Sawangi (Meghe), Wardha, Maharashtra State, INDIA, Maharashtra, 442107",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 720029,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "shri-atal-bihari-vajpayee",
    "collegeName": "Shri Atal Bihari Vajpayee Medical College & Research Institute, Bengaluru",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 414537,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "shri-atal-bihari-vajpayee",
    "collegeName": "Shri Atal Bihari Vajpayee Medical College & Research Institute, Bengaluru,SHIVAJINAGAR, BENGALURU, Karnataka, 560001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 702132,
      "OBC": 14053,
      "EWS": 16784,
      "SC": 98780,
      "ST": 107916
    }
  },
  {
    "collegeId": "shri-sathya-sai-medical",
    "collegeName": "Shri Sathya Sai Medical College and Research Institute, Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 724488,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "shri-sathya-sai-medical",
    "collegeName": "Shri Sathya Sai Medical College and Research Institute, Chennai,SBV Chennai Campus, Shri Sathya Sai Nagar, Ammapettai, Chennai, Tamil Nadu, 603108",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 811496,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "siddartha-medical-college-vijayawada",
    "collegeName": "Siddartha Medical College, Vijayawada",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1004764,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "siddartha-medical-college-vijayawadabeside",
    "collegeName": "Siddartha Medical College, Vijayawada,Beside New Government General Hospital Gunadala Vijayawada, Andhra Pradesh, 520008",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 384128,
      "OBC": 20746,
      "EWS": 25604,
      "SC": 96639,
      "ST": 137271
    }
  },
  {
    "collegeId": "sree-balaji-dental-college",
    "collegeName": "Sree Balaji Dental College and Hospital, Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 891273,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sree-balaji-dental-college",
    "collegeName": "Sree Balaji Dental College and Hospital, Chennai,Velachery Main Road, Narayanapuram, Pallikaranai, Chennai - 600 100, Tamil Nadu, 600100",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 589828,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sree-balaji-medical-college",
    "collegeName": "Sree Balaji Medical College and Hospital, Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 773612,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sree-balaji-medical-college",
    "collegeName": "Sree Balaji Medical College and Hospital, Chennai,NO 7 WORKS ROAD CHROMEPET CHENNAI, Tamil Nadu, 600044",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 854232,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sree-balaji-medical-college",
    "collegeName": "Sree Balaji Medical College and Hospital, Chennai,NO 7 WORKS ROAD CHROMEPET CHENNAI, Tamil Nadu, 600044",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1140071,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-jagannath-medical-college",
    "collegeName": "Sri Jagannath Medical College & Hospital, Puri",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 122663,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-jagannath-medical-college",
    "collegeName": "Sri Jagannath Medical College & Hospital, Puri,BALIGUALI SAMANGARA PURI PIN 752004 ODISHA, Odisha, 752004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16666,
      "OBC": 16789,
      "EWS": null,
      "SC": 83692,
      "ST": null
    }
  },
  {
    "collegeId": "sri-lakshmi-narayana-inst",
    "collegeName": "Sri Lakshmi Narayana Inst. of Med. Scien., Puducherry",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 805230,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-lakshmi-narayana-inst",
    "collegeName": "Sri Lakshmi Narayana Inst. of Med. Scien., Puducherry,OSUDU, AGARAM VILLAGE, KOODAPAKKAM POST, VILLIANUR COMMUNE, PUDUCHERRY, Puducherry, 605502",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 874293,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-ramachandra-dental-and",
    "collegeName": "Sri Ramachandra Dental and Hospt., Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 527087,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-ramachandra-dental-and",
    "collegeName": "Sri Ramachandra Dental and Hospt., Chennai",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1052508,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-ramachandra-dental-and",
    "collegeName": "Sri Ramachandra Dental and Hospt., Chennai,No. 1 Ramachandra Nagar, Porur, Chennai., Tamil Nadu, 600116",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 295878,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-ramachandra-dental-and",
    "collegeName": "Sri Ramachandra Dental and Hospt., Chennai,No. 1 Ramachandra Nagar, Porur, Chennai., Tamil Nadu, 600116",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1222179,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-ramachandra-med-college",
    "collegeName": "Sri Ramachandra Med. College and Res. Inst., Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 310748,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-ramachandra-med-college",
    "collegeName": "Sri Ramachandra Med. College and Res. Inst., Chennai",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1207338,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-ramachandra-med-college",
    "collegeName": "Sri Ramachandra Med. College and Res. Inst., Chennai,No. One Ramachandra Nagar, Porur, Chennai., Tamil Nadu, 600116",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 333238,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-ramachandra-med-college",
    "collegeName": "Sri Ramachandra Med. College and Res. Inst., Chennai,No. One Ramachandra Nagar, Porur, Chennai., Tamil Nadu, 600116",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1288903,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-siddhartha-academy-t",
    "collegeName": "Sri Siddhartha Academy T Begur",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 368629,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-siddhartha-academy-t",
    "collegeName": "Sri Siddhartha Academy T Begur",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1244663,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-siddhartha-academy-t",
    "collegeName": "Sri Siddhartha Academy T Begur,SRI SIDDHARTHA INSTITUTE OF MEDICAL SCIENCES AND RESEARCH CENTRE T BEGUR NELAMANGALA TALUK BANGALOR, Karnataka, 562123",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 511243,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-siddhartha-academy-t",
    "collegeName": "Sri Siddhartha Academy T Begur,SRI SIDDHARTHA INSTITUTE OF MEDICAL SCIENCES AND RESEARCH CENTRE T BEGUR NELAMANGALA TALUK BANGALOR, Karnataka, 562123",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1296015,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-siddhartha-dentalcollege-tumkur",
    "collegeName": "Sri Siddhartha DentalCollege, Tumkur",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 683300,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-siddhartha-dentalcollege-tumkuragalakote",
    "collegeName": "Sri Siddhartha DentalCollege, Tumkur,AGALAKOTE B H ROAD TUMKUR, Karnataka, 572107",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 506646,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-siddhartha-dentalcollege-tumkuragalakote",
    "collegeName": "Sri Siddhartha DentalCollege, Tumkur,AGALAKOTE B H ROAD TUMKUR, Karnataka, 572107",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1216704,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-siddhartha-medical-college",
    "collegeName": "Sri Siddhartha Medical College DU, Tumkur",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 302536,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-siddhartha-medical-college",
    "collegeName": "Sri Siddhartha Medical College DU, Tumkur",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1203614,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-siddhartha-medical-college",
    "collegeName": "Sri Siddhartha Medical College DU, Tumkur,SRI SIDDHARTHA MEDICAL COLLEGE B.H. ROAD, AGALAKOTE TUMKUR, Karnataka, 572107",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 402746,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-siddhartha-medical-college",
    "collegeName": "Sri Siddhartha Medical College DU, Tumkur,SRI SIDDHARTHA MEDICAL COLLEGE B.H. ROAD, AGALAKOTE TUMKUR, Karnataka, 572107",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1017502,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-venkateswara-medical-college",
    "collegeName": "Sri Venkateswara Medical College, Tirupati",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 113239,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sri-venkateswara-medical-college",
    "collegeName": "Sri Venkateswara Medical College, Tirupati,NEAR VIVEKANDANDA CIRCLE, ALIPIRI ROAD TIRUPATI, Andhra Pradesh, 517507",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19067,
      "OBC": 20945,
      "EWS": 23865,
      "SC": 91418,
      "ST": 139163
    }
  },
  {
    "collegeId": "sundarlal-patwa-govt-medical",
    "collegeName": "Sundarlal patwa Govt medical College mandsaur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 109057,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "sundarlal-patwa-govt-medical",
    "collegeName": "Sundarlal patwa Govt medical College mandsaur,Dean Office, Sunderlal Patwa Government Medical College, Mhow Neemuch Bypass, Mandsaur M.P., Madhya Pradesh, 458001",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 970393,
      "OBC": 17810,
      "EWS": 20148,
      "SC": 103876,
      "ST": null
    }
  },
  {
    "collegeId": "td-medical-college-allappuzha",
    "collegeName": "T.D. MEDICAL COLLEGE, ALLAPPUZHA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 124805,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "td-medical-college-allappuzhagovernmen",
    "collegeName": "T.D. MEDICAL COLLEGE, ALLAPPUZHA,GOVERNMEN T T.D.MEDICAL COLLEGE, VANDANAM.PO, ALAPPUZHA, Kerala, 688005",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 9926,
      "OBC": 10269,
      "EWS": 27979,
      "SC": 122876,
      "ST": null
    }
  },
  {
    "collegeId": "tamilnadu-govt-dc-hosp",
    "collegeName": "TAMILNADU GOVT D.C. & HOSP, CHENNAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 179937,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "tamilnadu-govt-dc-hosp",
    "collegeName": "TAMILNADU GOVT D.C. & HOSP, CHENNAI,No. 1, TNPSC SALAI, PARK TOWN, CHENNAI 600003, Tamil Nadu, 600003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 36214,
      "OBC": 44964,
      "EWS": 45112,
      "SC": 172431,
      "ST": 233107
    }
  },
  {
    "collegeId": "thanjavur-medical-collthanjavur",
    "collegeName": "THANJAVUR MEDICAL COLL.,THANJAVUR",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 107213,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "thanjavur-medical-collthanjavurthanjavu-r",
    "collegeName": "THANJAVUR MEDICAL COLL.,THANJAVUR,Thanjavu r Medical College,Thanjavur, Tamil Nadu, 613004",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13876,
      "OBC": 524369,
      "EWS": 26199,
      "SC": 82364,
      "ST": null
    }
  },
  {
    "collegeId": "theni-govt-medical-college",
    "collegeName": "THENI GOVT. MEDICAL COLLEGE, THENI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 142513,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "theni-govt-medical-college",
    "collegeName": "THENI GOVT. MEDICAL COLLEGE, THENI,G. Vilakku, Shanmugasundarapuram village, Aundipatti Taluk, Theni District, Tamil Nadu, 625512",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 13714,
      "OBC": 14826,
      "EWS": 29566,
      "SC": null,
      "ST": 158433
    }
  },
  {
    "collegeId": "thoothukudi-medical-collegethoothukud-i",
    "collegeName": "THOOTHUKUDI MEDICAL COLLEGE,THOOTHUKUD I",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 115353,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "thoothukudi-medical-collegethoothukudi",
    "collegeName": "THOOTHUKUDI MEDICAL COLLEGE,THOOTHUKUDI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 58560,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "thoothukudi-medical-collegethoothukudik-amaraj",
    "collegeName": "THOOTHUKUDI MEDICAL COLLEGE,THOOTHUKUDI,K AMARAJ NAGAR, 3rd MILE, THOOTHUKUDI, Tamil Nadu, 628008",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16392,
      "OBC": 17296,
      "EWS": 29624,
      "SC": 134536,
      "ST": 159295
    }
  },
  {
    "collegeId": "topiwala-national-medical-collegemumbai",
    "collegeName": "TOPIWALA NATIONAL MEDICAL COLLEGE,MUMBAI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 457571,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "topiwala-national-medical-collegemumbaidr",
    "collegeName": "TOPIWALA NATIONAL MEDICAL COLLEGE,MUMBAI,Dr. A.L. Nair Road, Mumbai Central, Mumbai, Maharashtra, 400008",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 7284,
      "OBC": 11667,
      "EWS": 13471,
      "SC": 61161,
      "ST": 106595
    }
  },
  {
    "collegeId": "tamralipto-government-medical-college",
    "collegeName": "Tamralipto Government Medical College & Hospital, West Bengal",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 125759,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "tamralipto-government-medical-college",
    "collegeName": "Tamralipto Government Medical College & Hospital, West Bengal,227 Haldia Tamluk Mecheda Road, Tamluk, Purba Medinipur, West Bengal, 721636",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 23511,
      "OBC": 24208,
      "EWS": null,
      "SC": null,
      "ST": 149127
    }
  },
  {
    "collegeId": "tezpur-medical-college-tezpur",
    "collegeName": "Tezpur Medical College, Tezpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 232800,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "tezpur-medical-college-tezpurtezpur",
    "collegeName": "Tezpur Medical College, Tezpur,Tezpur Medical College and Hospital Bihaguri Tezpur 784010 Dist Sonitpur Assam, Assam, 784010",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24646,
      "OBC": 25090,
      "EWS": null,
      "SC": 133438,
      "ST": 159457
    }
  },
  {
    "collegeId": "thaimoogambigai-dental-college-and",
    "collegeName": "Thaimoogambigai Dental College and Hsopt. Chennai",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 988990,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "thaimoogambigai-dental-college-and",
    "collegeName": "Thaimoogambigai Dental College and Hsopt. Chennai,Golden George Nagar, Mogappair, Chennai 600 107, Tamil Nadu, 600107",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 487024,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "thiruvannamalai-mc-thiruvannamalai-tn",
    "collegeName": "Thiruvannamalai MC, Thiruvannamalai, TN",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1076952,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "thiruvannamalai-mc-thiruvannamalai-tndistrict",
    "collegeName": "Thiruvannamalai MC, Thiruvannamalai, TN,District Collectorate, Master Plan Complex, Vengikkal, Thiruvannamalai, Tamil Nadu, 606604",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1119849,
      "OBC": 19808,
      "EWS": 29191,
      "SC": null,
      "ST": 160376
    }
  },
  {
    "collegeId": "tinsukia-medical-college-hospital",
    "collegeName": "Tinsukia Medical College & Hospital, Tinsukia",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 131900,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "tinsukia-medical-college-hospital",
    "collegeName": "Tinsukia Medical College & Hospital, Tinsukia,Lohari Bangali Gaon, Tinsukia, Assam, 786146",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25898,
      "OBC": 25957,
      "EWS": 27130,
      "SC": 134273,
      "ST": 153054
    }
  },
  {
    "collegeId": "tomo-riba-institute-health",
    "collegeName": "Tomo Riba Institute Health and Medical Sciences, Naharlagun",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 134837,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "tomo-riba-institute-health",
    "collegeName": "Tomo Riba Institute Health and Medical Sciences, Naharlagun ,Tomo Riba Institute Health and Medical Sciences, Old Assembly Complex, Naharlagun, Itanagar Capita, Arunachal Pradesh, 791110",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 25813,
      "OBC": 25985,
      "EWS": null,
      "SC": 136445,
      "ST": null
    }
  },
  {
    "collegeId": "uns-autonomous-state-medical",
    "collegeName": "UNS AUTONOMOUS STATE MEDICAL COLLEGES, Jaunpur",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 103902,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "uns-autonomous-state-medical",
    "collegeName": "UNS AUTONOMOUS STATE MEDICAL COLLEGES, Jaunpur,UNS AUTONOMOUS STATE MEDICAL COLLEGE SIDDIQUEPUR SHAHGANJ ROAD JAUNPUR UP, Uttar Pradesh, 222003",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 19393,
      "OBC": 19868,
      "EWS": 21826,
      "SC": 113104,
      "ST": 126062
    }
  },
  {
    "collegeId": "uttaranchal-f-hosp-trust",
    "collegeName": "UTTARANCHAL F HOSP TRUST MC,HALDWANI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 101246,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "uttaranchal-f-hosp-trust",
    "collegeName": "UTTARANCHAL F HOSP TRUST MC,HALDWANI,Government Medical College, Rampur Road Haldwani, Distt. Nainiatl, Uttarakhand, 263139",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 10967,
      "OBC": 14958,
      "EWS": 11781,
      "SC": 89008,
      "ST": 108980
    }
  },
  {
    "collegeId": "university-college-of-medical",
    "collegeName": "University College of Medical Sciences, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 774206,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "university-college-of-medical",
    "collegeName": "University College of Medical Sciences, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi NCR Children/ Widows of Personnel of the Armed Forces (CW) DU Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 917810,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "university-college-of-medical",
    "collegeName": "University College of Medical Sciences, New Delhi",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi University Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1262208,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "university-college-of-medical",
    "collegeName": "University College of Medical Sciences, New Delhi,Dilshad Garden, Delhi (NCT), 110095",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": 2106,
      "EWS": null,
      "SC": 14605,
      "ST": null
    }
  },
  {
    "collegeId": "university-college-of-medical",
    "collegeName": "University College of Medical Sciences, New Delhi,Dilshad Garden, Delhi (NCT), 110095",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi University Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 4076,
      "OBC": null,
      "EWS": 10130,
      "SC": 69627,
      "ST": 168409
    }
  },
  {
    "collegeId": "uttar-pradesh-university-of",
    "collegeName": "Uttar Pradesh University of Medical Sciences, Saifai, Etawah",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 338747,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "uttar-pradesh-university-of",
    "collegeName": "Uttar Pradesh University of Medical Sciences, Saifai, Etawah,SAIFAI ETAWAH, Uttar Pradesh, 206130",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 109850,
      "OBC": 11583,
      "EWS": 13711,
      "SC": 89842,
      "ST": null
    }
  },
  {
    "collegeId": "vss-medical-college-burla",
    "collegeName": "V.S.S. MEDICAL COLLEGE, BURLA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 611853,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vss-medical-college-burlaayurviharburla",
    "collegeName": "V.S.S. MEDICAL COLLEGE, BURLA,AYURVIHAR,BURLA, SAMBALPUR, Odisha, 768017",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14298,
      "OBC": 14336,
      "EWS": 17826,
      "SC": 74436,
      "ST": 143763
    }
  },
  {
    "collegeId": "vardhman-institute-of-medical",
    "collegeName": "VARDHMAN INSTITUTE OF MEDICAL SCIENCES, NALANDA",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1303980,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vardhman-institute-of-medical",
    "collegeName": "VARDHMAN INSTITUTE OF MEDICAL SCIENCES, NALANDA,BMIMS, PAWAPURI NALNADA, Bihar, 803115",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 14959,
      "OBC": 16726,
      "EWS": 17274,
      "SC": 109731,
      "ST": 117034
    }
  },
  {
    "collegeId": "vels-medical-college-hospital",
    "collegeName": "VELS MEDICAL COLLEGE & HOSPITAL",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 517146,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vels-medical-college-hospital",
    "collegeName": "VELS MEDICAL COLLEGE & HOSPITAL",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1246285,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vels-medical-college-hospital12123",
    "collegeName": "VELS MEDICAL COLLEGE & HOSPITAL,12-123, Velan Nagar, Manjankaranai Village, Periyapalayam Road, Uthukottai Taluk, Tiruvallur Dist., Tamil Nadu, 601102",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 610538,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vels-medical-college-hospital12123",
    "collegeName": "VELS MEDICAL COLLEGE & HOSPITAL,12-123, Velan Nagar, Manjankaranai Village, Periyapalayam Road, Uthukottai Taluk, Tiruvallur Dist., Tamil Nadu, 601102",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1302633,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vijaynagar-inst-of-med",
    "collegeName": "VIJAYNAGAR INST OF MED. SC,BELLARY",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1054935,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vijaynagar-inst-of-med",
    "collegeName": "VIJAYNAGAR INST OF MED. SC,BELLARY,Cantonment, Ballari, Karnataka, 583104",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 20889,
      "OBC": 21673,
      "EWS": null,
      "SC": 115750,
      "ST": 110266
    }
  },
  {
    "collegeId": "vmkv-medical-college-and",
    "collegeName": "VMKV Medical College and Hospital, Salem",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 636297,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vmkv-medical-college-and",
    "collegeName": "VMKV Medical College and Hospital, Salem,Sankari Main Road, NH-47, Seeragapadi, Salem, Tamil Nadu, 636308",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 656654,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vms-dental-college-salem",
    "collegeName": "VMS Dental College, Salem",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 947032,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vms-dental-college-salemsankari",
    "collegeName": "VMS Dental College, Salem,Sankari Main Road NH-47 Ariyanoor, Salem., Tamil Nadu, 636308",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 472434,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vardhman-mahavir-medical-college",
    "collegeName": "Vardhman Mahavir Medical College and Safdarjung Hospital New Delhi, VMMC",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 121011,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vardhman-mahavir-medical-college",
    "collegeName": "Vardhman Mahavir Medical College and Safdarjung Hospital New Delhi, VMMC",
    "type": "Government",
    "isDeemed": false,
    "quota": "Delhi NCR Children/ Widows of Personnel of the Armed Forces (CW) IP Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 817768,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vardhman-mahavir-medical-college",
    "collegeName": "Vardhman Mahavir Medical College and Safdarjung Hospital New Delhi, VMMC",
    "type": "Government",
    "isDeemed": false,
    "quota": "IP University Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1209581,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vardhman-mahavir-medical-college",
    "collegeName": "Vardhman Mahavir Medical College and Safdarjung Hospital New Delhi, VMMC,Vardhman Mahavir Medical College And Safdarjung Hospital, New Delhi, Delhi (NCT), 110029",
    "type": "Government",
    "isDeemed": false,
    "quota": "IP University Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": null,
      "OBC": null,
      "EWS": null,
      "SC": 54765,
      "ST": 116381
    }
  },
  {
    "collegeId": "veer-chandra-singh-garhwali",
    "collegeName": "Veer Chandra Singh Garhwali Govt. Institute of Medical Science & Research",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 480621,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "veer-chandra-singh-garhwali",
    "collegeName": "Veer Chandra Singh Garhwali Govt. Institute of Medical Science & Research,BADRINATH MARG, SRIKOT, SRINAGAR - PAURI GARHWAL, Uttarakhand, 246178",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 16097,
      "OBC": 18711,
      "EWS": null,
      "SC": 103917,
      "ST": 114844
    }
  },
  {
    "collegeId": "vinayaka-missions-medical-college",
    "collegeName": "Vinayaka Missions Medical College and Hospital, Karaikal",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 633931,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "vinayaka-missions-medical-college",
    "collegeName": "Vinayaka Missions Medical College and Hospital, Karaikal,KEEZHAKASAKUDIM EDU, KOTTUCHERRY(P.O), KARAIKAL - 609 609, U.T. OF PUDUCHERRY, Puducherry, 609609",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 693547,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "virendra-kumar-sakhlecha-government",
    "collegeName": "Virendra Kumar Sakhlecha Government Medical College, Neemuch, Madhya Pradesh",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 77977,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "virendra-kumar-sakhlecha-government",
    "collegeName": "Virendra Kumar Sakhlecha Government Medical College, Neemuch, Madhya Pradesh,Kanawati, Mhow- Naseerabad Road, Neemuch, Madhya Pradesh, 458441",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 17251,
      "OBC": 17573,
      "EWS": 19158,
      "SC": 98104,
      "ST": 108149
    }
  },
  {
    "collegeId": "yadgiri-institute-of-medical",
    "collegeName": "YADGIRI INSTITUTE OF MEDICAL SCIENCES, YADGIRI",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 754480,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "yadgiri-institute-of-medical",
    "collegeName": "YADGIRI INSTITUTE OF MEDICAL SCIENCES, YADGIRI,Chittapur Main Road, Yadgiri., Karnataka, 585202",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 24244,
      "OBC": 24916,
      "EWS": 29036,
      "SC": 130970,
      "ST": null
    }
  },
  {
    "collegeId": "yenepoya-dental-college-yenepoya",
    "collegeName": "Yenepoya Dental College, Yenepoya",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 758116,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "yenepoya-dental-college-yenepoya",
    "collegeName": "Yenepoya Dental College, Yenepoya",
    "type": "Government",
    "isDeemed": false,
    "quota": "Muslim Minority Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 755243,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "yenepoya-dental-college-yenepoya",
    "collegeName": "Yenepoya Dental College, Yenepoya",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1247298,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "yenepoya-dental-college-yenepoyauniversity",
    "collegeName": "Yenepoya Dental College, Yenepoya,University Road Deralakatte Mangaluru, Karnataka, 575018",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 612311,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "yenepoya-dental-college-yenepoyauniversity",
    "collegeName": "Yenepoya Dental College, Yenepoya,University Road Deralakatte Mangaluru, Karnataka, 575018",
    "type": "Government",
    "isDeemed": false,
    "quota": "Muslim Minority Quota",
    "branch": "BDS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 505976,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "yenepoya-medical-college-mangalore",
    "collegeName": "Yenepoya Medical College, Mangalore",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 330106,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "yenepoya-medical-college-mangalore",
    "collegeName": "Yenepoya Medical College, Mangalore",
    "type": "Government",
    "isDeemed": false,
    "quota": "Muslim Minority Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 381970,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "yenepoya-medical-college-mangalore",
    "collegeName": "Yenepoya Medical College, Mangalore",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1259051,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "yenepoya-medical-college-mangaloreuniversity",
    "collegeName": "Yenepoya Medical College, Mangalore,University Road Deralakatte Mangaluru, Karnataka, 575018",
    "type": "Deemed University",
    "isDeemed": true,
    "quota": "Deemed/ Paid Seats Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 404110,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "yenepoya-medical-college-mangaloreuniversity",
    "collegeName": "Yenepoya Medical College, Mangalore,University Road Deralakatte Mangaluru, Karnataka, 575018",
    "type": "Government",
    "isDeemed": false,
    "quota": "Muslim Minority Quota",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 312752,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "yenepoya-medical-college-mangaloreuniversity",
    "collegeName": "Yenepoya Medical College, Mangalore,University Road Deralakatte Mangaluru, Karnataka, 575018",
    "type": "Government",
    "isDeemed": false,
    "quota": "Non- Resident Indian",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1261154,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "zoram-medical-college-falkawn",
    "collegeName": "ZORAM MEDICAL COLLEGE Falkawn",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 1039277,
      "OBC": null,
      "EWS": null,
      "SC": null,
      "ST": null
    }
  },
  {
    "collegeId": "zoram-medical-college-falkawnacademic",
    "collegeName": "ZORAM MEDICAL COLLEGE Falkawn,Academic Block, Zoram Medical College and Hospital, Falkawn, Aizawl District, Mizoram - 796005, Mizoram, 796005",
    "type": "Government",
    "isDeemed": false,
    "quota": "All India",
    "branch": "MBBS",
    "year": 2026,
    "round": "Round 3",
    "cutoffs": {
      "UR": 26055,
      "OBC": 26060,
      "EWS": 29724,
      "SC": 134896,
      "ST": 160582
    }
  }
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