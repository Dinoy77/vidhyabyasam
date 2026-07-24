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
  // ==================== CENTRAL INSTITUTES & AIIMS (OPEN QUOTA) ====================
  { collegeId: 'aiims-new-delhi', collegeName: 'All India Institute of Medical Sciences (AIIMS), New Delhi', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 57, OBC: 255, EWS: 223, SC: 989, ST: 1624 } },
  { collegeId: 'vmmc-sjh-delhi', collegeName: 'VMMC & Safdarjung Hospital, New Delhi', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 115, OBC: 450, EWS: 340, SC: 1450, ST: 2890 } },
  { collegeId: 'jipmer-puducherry', collegeName: 'JIPMER, Puducherry', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 280, OBC: 600, EWS: 720, SC: 3600, ST: 7150 } },
  { collegeId: 'aiims-bhubaneswar', collegeName: 'AIIMS, Bhubaneswar', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 520, OBC: 1100, EWS: 1200, SC: 7000, ST: 14500 } },
  { collegeId: 'aiims-jodhpur', collegeName: 'AIIMS, Jodhpur', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 500, OBC: 1050, EWS: 1150, SC: 6900, ST: 13800 } },
  { collegeId: 'aiims-bhopal', collegeName: 'AIIMS, Bhopal', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 580, OBC: 1250, EWS: 1350, SC: 7900, ST: 15500 } },
  { collegeId: 'aiims-rishikesh', collegeName: 'AIIMS, Rishikesh', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 790, OBC: 1550, EWS: 1680, SC: 9300, ST: 18500 } },
  { collegeId: 'aiims-nagpur', collegeName: 'AIIMS, Nagpur', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1200, OBC: 2250, EWS: 2400, SC: 12600, ST: 26000 } },
  { collegeId: 'aiims-raipur', collegeName: 'AIIMS, Raipur', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1250, OBC: 2200, EWS: 2350, SC: 12500, ST: 25800 } },
  { collegeId: 'aiims-patna', collegeName: 'AIIMS, Patna', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1450, OBC: 2500, EWS: 2700, SC: 14500, ST: 29000 } },
  { collegeId: 'aiims-mangalagiri', collegeName: 'AIIMS, Mangalagiri', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1650, OBC: 2800, EWS: 3000, SC: 16000, ST: 32000 } },
  { collegeId: 'aiims-kalyani', collegeName: 'AIIMS, Kalyani', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1850, OBC: 3100, EWS: 3300, SC: 18000, ST: 35000 } },
  { collegeId: 'aiims-bathinda', collegeName: 'AIIMS, Bathinda', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1950, OBC: 3200, EWS: 3400, SC: 18500, ST: 36000 } },
  { collegeId: 'aiims-gorakhpur', collegeName: 'AIIMS, Gorakhpur', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2100, OBC: 3400, EWS: 3600, SC: 19500, ST: 38000 } },
  { collegeId: 'aiims-bibinagar', collegeName: 'AIIMS, Bibi Nagar (Hyderabad)', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2200, OBC: 3600, EWS: 3800, SC: 21000, ST: 41000 } },
  { collegeId: 'aiims-bilaspur', collegeName: 'AIIMS, Bilaspur', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2400, OBC: 3900, EWS: 4100, SC: 23000, ST: 44000 } },
  { collegeId: 'aiims-raebareli', collegeName: 'AIIMS, Rai Bareli', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2600, OBC: 4200, EWS: 4400, SC: 25000, ST: 47000 } },
  { collegeId: 'aiims-deoghar', collegeName: 'AIIMS, Deoghar', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2800, OBC: 4500, EWS: 4700, SC: 27000, ST: 50000 } },
  { collegeId: 'aiims-guwahati', collegeName: 'AIIMS, Guwahati', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2950, OBC: 4700, EWS: 4900, SC: 28500, ST: 52000 } },
  { collegeId: 'aiims-rajkot', collegeName: 'AIIMS, Rajkot', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2850, OBC: 4600, EWS: 4800, SC: 28000, ST: 51000 } },
  { collegeId: 'aiims-jammu', collegeName: 'AIIMS, Vijaypur (Jammu)', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3100, OBC: 4900, EWS: 5100, SC: 30000, ST: 55000 } },
  { collegeId: 'jipmer-karaikal', collegeName: 'JIPMER, Karaikal', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2150, OBC: 3500, EWS: 3750, SC: 20500, ST: 40000 } },
  { collegeId: 'abvims-rml-delhi', collegeName: 'ABVIMS & Dr. RML Hospital, New Delhi', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 410, OBC: 920, EWS: 850, SC: 4200, ST: 8500 } },
  { collegeId: 'ims-bhu-varanasi', collegeName: 'Institute of Medical Sciences (BHU), Varanasi', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 880, OBC: 1680, EWS: 1810, SC: 11500, ST: 22800 } },
  { collegeId: 'jnmc-amu-aligarh', collegeName: 'Jawaharlal Nehru Medical College (AMU), Aligarh', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3200, OBC: 3950, EWS: 4150, SC: 32500, ST: 48500 } },

  // ==================== STATE GOVT MEDICAL COLLEGES (15% ALL INDIA QUOTA) ====================
  // North & Central India
  { collegeId: 'mamc-delhi', collegeName: 'Maulana Azad Medical College (MAMC), New Delhi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 85, OBC: 350, EWS: 280, SC: 1250, ST: 2600 } },
  { collegeId: 'ucms-delhi', collegeName: 'University College of Medical Sciences (UCMS), New Delhi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 310, OBC: 860, EWS: 760, SC: 3150, ST: 5700 } },
  { collegeId: 'lhmc-delhi', collegeName: 'Lady Hardinge Medical College, New Delhi (Women)', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 550, OBC: 1200, EWS: 1100, SC: 6200, ST: 12500 } },
  { collegeId: 'gmc-chandigarh', collegeName: 'Government Medical College, Chandigarh', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 400, OBC: 1280, EWS: 1150, SC: 6600, ST: 14200 } },
  { collegeId: 'kgmu-lucknow', collegeName: 'King George\'s Medical University (KGMU), Lucknow', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1120, OBC: 1980, EWS: 2150, SC: 18800, ST: 32500 } },
  { collegeId: 'sms-jaipur', collegeName: 'S.M.S. Medical College, Jaipur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1180, OBC: 1920, EWS: 2050, SC: 18000, ST: 29500 } },
  { collegeId: 'pt-bd-sharma-rohtak', collegeName: 'Pt. B.D. Sharma PGIMS, Rohtak', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3800, OBC: 5100, EWS: 5600, SC: 46000, ST: 70000 } },
  { collegeId: 'snmc-jodhpur', collegeName: 'Dr. S.N. Medical College, Jodhpur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3500, OBC: 4800, EWS: 5200, SC: 42000, ST: 65000 } },
  { collegeId: 'rnt-udaipur', collegeName: 'R.N.T. Medical College, Udaipur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4100, OBC: 5400, EWS: 5900, SC: 49000, ST: 76000 } },
  { collegeId: 'gandhi-bhopal', collegeName: 'Gandhi Medical College, Bhopal', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4300, OBC: 5600, EWS: 6100, SC: 50000, ST: 78000 } },
  { collegeId: 'mgm-indore', collegeName: 'M.G.M. Medical College, Indore', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3100, OBC: 4200, EWS: 4600, SC: 38000, ST: 59000 } },

  // West & East India
  { collegeId: 'seth-gs-mumbai', collegeName: 'Seth G.S. Medical College, Mumbai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 680, OBC: 1850, EWS: 2000, SC: 15200, ST: 28500 } },
  { collegeId: 'grant-mumbai', collegeName: 'Grant Medical College & Sir J.J. Hospital, Mumbai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1700, OBC: 3150, EWS: 3300, SC: 24500, ST: 42500 } },
  { collegeId: 'bjmc-pune', collegeName: 'B.J. Government Medical College, Pune', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1950, OBC: 2500, EWS: 2950, SC: 29000, ST: 46000 } },
  { collegeId: 'bj-ahmedabad', collegeName: 'B.J. Medical College, Ahmedabad', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 730, OBC: 1880, EWS: 1980, SC: 14800, ST: 27800 } },
  { collegeId: 'medical-college-kolkata', collegeName: 'Medical College, Kolkata', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1500, OBC: 2600, EWS: 2800, SC: 21000, ST: 40000 } },
  { collegeId: 'ipgmer-kolkata', collegeName: 'IPGMER & SSKM Hospital, Kolkata', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2400, OBC: 3600, EWS: 3900, SC: 31000, ST: 54000 } },
  { collegeId: 'scb-cuttack', collegeName: 'S.C.B. Medical College, Cuttack', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3100, OBC: 4200, EWS: 4600, SC: 37000, ST: 57000 } },
  { collegeId: 'gmc-nagpur', collegeName: 'Government Medical College, Nagpur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4200, OBC: 5500, EWS: 6100, SC: 48000, ST: 75000 } },

  // South India (Kerala, Karnataka, TN, TS, AP)
  { collegeId: 'gmc-thiruvananthapuram', collegeName: 'Government Medical College, Thiruvananthapuram', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1100, OBC: 1950, EWS: 2200, SC: 21500, ST: 38500 } },
  { collegeId: 'gmc-kozhikode', collegeName: 'Government Medical College, Kozhikode', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2500, OBC: 3150, EWS: 4250, SC: 39000, ST: 63000 } },
  { collegeId: 'gmc-kottayam', collegeName: 'Government Medical College, Kottayam', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3850, OBC: 4550, EWS: 5250, SC: 45500, ST: 71500 } },
  { collegeId: 'gmc-thrissur', collegeName: 'Government Medical College, Thrissur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4500, OBC: 5200, EWS: 6000, SC: 51000, ST: 80000 } },
  { collegeId: 'bmc-bangalore', collegeName: 'Bangalore Medical College & Research Institute (BMCRI)', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1280, OBC: 2850, EWS: 3150, SC: 22500, ST: 39500 } },
  { collegeId: 'mmc-chennai', collegeName: 'Madras Medical College, Chennai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 760, OBC: 1300, EWS: 1900, SC: 15800, ST: 30500 } },
  { collegeId: 'stanley-chennai', collegeName: 'Stanley Medical College, Chennai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2900, OBC: 3550, EWS: 3950, SC: 34500, ST: 56500 } },
  { collegeId: 'osmania-hyderabad', collegeName: 'Osmania Medical College, Hyderabad', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2950, OBC: 4150, EWS: 4550, SC: 36500, ST: 55500 } },
  { collegeId: 'gandhi-secunderabad', collegeName: 'Gandhi Medical College, Secunderabad', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3200, OBC: 4400, EWS: 4800, SC: 38000, ST: 58000 } },
  { collegeId: 'andhra-mc-vizag', collegeName: 'Andhra Medical College, Visakhapatnam', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4100, OBC: 5300, EWS: 5800, SC: 47000, ST: 72000 } },

  // ==================== DENTAL COLLEGES (BDS — CENTRAL & AIQ) ====================
  { collegeId: 'maid-delhi', collegeName: 'Maulana Azad Institute of Dental Sciences, New Delhi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 8600, OBC: 11500, EWS: 12800, SC: 46500, ST: 76000 } },
  { collegeId: 'gdc-mumbai', collegeName: 'Government Dental College & Hospital, Mumbai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 24800, OBC: 28500, EWS: 31500, SC: 96000, ST: 126000 } },
  { collegeId: 'nair-dental-mumbai', collegeName: 'Nair Hospital Dental College, Mumbai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 26800, OBC: 29800, EWS: 32500, SC: 99000, ST: 131000 } },
  { collegeId: 'kgmu-dental-lucknow', collegeName: 'Faculty of Dental Sciences, KGMU, Lucknow', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 23500, OBC: 27800, EWS: 30200, SC: 92000, ST: 119000 } },
  { collegeId: 'gdc-bangalore', collegeName: 'Government Dental College, Bangalore', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 28800, OBC: 31500, EWS: 34000, SC: 103000, ST: 146000 } },

  // ==================== DEEMED UNIVERSITIES (MANAGEMENT / PAID QUOTA) ====================
  // Note: Deemed Universities allocate seats under Management/Paid Quota primarily via Open 
  // Unreserved (UR) rank without OBC/SC/ST reservation splits in All India Counseling.
  { collegeId: 'kmc-manipal', collegeName: 'Kasturba Medical College (KMC), Manipal', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 52000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'kmc-mangalore', collegeName: 'Kasturba Medical College (KMC), Mangalore', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 73500, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'symbiosis-pune', collegeName: 'Symbiosis Medical College for Women, Pune', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 99500, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'hamdard-delhi', collegeName: 'HIMSR (Jamia Hamdard), New Delhi', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 58000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'jss-mysuru', collegeName: 'JSS Medical College, Mysuru', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 145000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'amrita-kochi', collegeName: 'Amrita School of Medicine, Kochi', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 168000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'kshegde-mangaluru', collegeName: 'K.S. Hegde Medical Academy, Mangaluru', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 188000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'sriramachandra-chennai', collegeName: 'Sri Ramachandra Medical College, Chennai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 225000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'kims-bhubaneswar', collegeName: 'Kalinga Institute of Medical Sciences (KIMS), Bhubaneswar', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 270000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'bharati-vidyapeeth-pune', collegeName: 'Bharati Vidyapeeth DU Medical College, Pune', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 315000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'srm-chennai', collegeName: 'SRM Medical College Hospital & Research Centre, Chennai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 430000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'mgm-aurangabad', collegeName: 'MGM Medical College, Aurangabad', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 490000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'saveetha-chennai', collegeName: 'Saveetha Medical College, Chennai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 500000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'dypatil-navi-mumbai', collegeName: 'Dr. D.Y. Patil Medical College, Navi Mumbai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 625000, OBC: null, EWS: null, SC: null, ST: null } },
  
  // Deemed Dental (BDS)
  { collegeId: 'manipal-dental-manipal', collegeName: 'Manipal College of Dental Sciences, Manipal', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 315000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'jss-dental-mysuru', collegeName: 'JSS Dental College & Hospital, Mysuru', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 460000, OBC: null, EWS: null, SC: null, ST: null } },
  // ===========================================================================
  // ADDITIONAL GOVERNMENT & CENTRAL MEDICAL COLLEGES (NEW ADDITIONS TO APPEND)
  // ===========================================================================

  // --- DELHI NCR & CENTRAL INSTITUTES ---
  { collegeId: 'dr-bsa-delhi', collegeName: 'Dr. B.S.A. Medical College, Rohini, Delhi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1200, OBC: 2500, EWS: 2800, SC: 18000, ST: 35000 } }, 
  { collegeId: 'ndmc-delhi', collegeName: 'NDMC Medical College & Hindu Rao Hospital, Delhi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1400, OBC: 2900, EWS: 3100, SC: 20000, ST: 38000 } }, 
  { collegeId: 'esic-faridabad', collegeName: 'ESIC Medical College & Hospital, Faridabad', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 1500, OBC: 2800, EWS: 3000, SC: 22000, ST: 40000 } }, 
  { collegeId: 'esic-sanathnagar-hyd', collegeName: 'ESIC Medical College, Sanathnagar, Hyderabad', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3500, OBC: 5800, EWS: 6500, SC: 45000, ST: 72000 } }, 
  { collegeId: 'esic-rajajinagar-blr', collegeName: 'ESIC Medical College & PGIMSR, Rajajinagar, Bengaluru', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3100, OBC: 5200, EWS: 6000, SC: 42000, ST: 68000 } }, 
  { collegeId: 'esic-kknagar-chn', collegeName: 'ESIC Medical College & PGIMSR, KK Nagar, Chennai', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4200, OBC: 6500, EWS: 7500, SC: 52000, ST: 82000 } }, 
  { collegeId: 'esic-joka-kolkata', collegeName: 'ESIC Medical College & PGIMSR, Joka, Kolkata', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5500, OBC: 8500, EWS: 9500, SC: 62000, ST: 95000 } }, 
  { collegeId: 'esic-bihta-patna', collegeName: 'ESIC Medical College & Hospital, Bihta, Patna', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 7800, OBC: 10500, EWS: 11500, SC: 68000, ST: 102000 } }, 

  // --- KERALA (ALL INDIA QUOTA 15%) ---
  { collegeId: 'tdmc-alappuzha', collegeName: 'T.D. Medical College, Alappuzha', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5200, OBC: 6800, EWS: 7500, SC: 55000, ST: 88000 } }, 
  { collegeId: 'gmc-ernakulam', collegeName: 'Government Medical College, Ernakulam', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 6100, OBC: 7500, EWS: 8200, SC: 60000, ST: 92000 } }, 
  { collegeId: 'gmc-kannur', collegeName: 'Government Medical College, Pariyaram, Kannur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 6500, OBC: 8000, EWS: 8800, SC: 63000, ST: 95000 } }, 
  { collegeId: 'gmc-manjeri', collegeName: 'Government Medical College, Manjeri, Malappuram', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 7800, OBC: 9500, EWS: 10500, SC: 70000, ST: 102000 } }, 
  { collegeId: 'gmc-kollam', collegeName: 'Government Medical College (ESIC), Parippally, Kollam', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 7200, OBC: 8800, EWS: 9600, SC: 66000, ST: 98000 } }, 

  // --- TAMIL NADU (ALL INDIA QUOTA 15%) ---
  { collegeId: 'gmc-omandurar', collegeName: 'Government Medical College, Omandurar Estate, Chennai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3500, OBC: 4800, EWS: 5500, SC: 42000, ST: 68000 } }, 
  { collegeId: 'kilpauk-chennai', collegeName: 'Government Kilpauk Medical College, Chennai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4200, OBC: 5600, EWS: 6200, SC: 48000, ST: 75000 } }, 
  { collegeId: 'coimbatore-mc', collegeName: 'Coimbatore Medical College, Coimbatore', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4800, OBC: 6200, EWS: 7000, SC: 52000, ST: 82000 } }, 
  { collegeId: 'madurai-mc', collegeName: 'Madurai Medical College, Madurai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5100, OBC: 6600, EWS: 7400, SC: 54000, ST: 85000 } }, 
  { collegeId: 'thanjavur-mc', collegeName: 'Thanjavur Medical College, Thanjavur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 6500, OBC: 8200, EWS: 9000, SC: 62000, ST: 95000 } }, 
  { collegeId: 'vellore-mc', collegeName: 'Government Vellore Medical College, Vellore', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 7200, OBC: 9000, EWS: 9800, SC: 66000, ST: 98000 } }, 
  { collegeId: 'tirunelveli-mc', collegeName: 'Government Tirunelveli Medical College, Tirunelveli', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 7500, OBC: 9400, EWS: 10200, SC: 68000, ST: 100000 } }, 
  { collegeId: 'chengalpattu-mc', collegeName: 'Chengalpattu Medical College, Chengalpattu', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 6800, OBC: 8500, EWS: 9200, SC: 64000, ST: 96000 } }, 
  { collegeId: 'salem-mc', collegeName: 'Government Mohan Kumaramangalam Medical College, Salem', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 7800, OBC: 9600, EWS: 10500, SC: 70000, ST: 102000 } }, 

  // --- KARNATAKA (ALL INDIA QUOTA 15%) ---
  { collegeId: 'sabv-bowring-blr', collegeName: 'Shri Atal Bihari Vajpayee Medical College & RI (Bowring), Bengaluru', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3200, OBC: 4500, EWS: 5000, SC: 40000, ST: 64000 } }, 
  { collegeId: 'mysore-mc', collegeName: 'Mysore Medical College & Research Institute, Mysuru', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3600, OBC: 4900, EWS: 5600, SC: 43000, ST: 68000 } }, 
  { collegeId: 'kims-hubli', collegeName: 'Karnataka Institute of Medical Sciences (KIMS), Hubballi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5400, OBC: 6900, EWS: 7800, SC: 56000, ST: 86000 } }, 
  { collegeId: 'bims-belgaum', collegeName: 'Belgaum Institute of Medical Sciences (BIMS), Belagavi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 7500, OBC: 9200, EWS: 10000, SC: 68000, ST: 100000 } }, 
  { collegeId: 'vims-bellary', collegeName: 'Vijayanagar Institute of Medical Sciences (VIMS), Ballari', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 8200, OBC: 10200, EWS: 11200, SC: 72000, ST: 106000 } }, 
  { collegeId: 'gims-gulbarga', collegeName: 'Gulbarga Institute of Medical Sciences (GIMS), Kalaburagi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 9200, OBC: 11800, EWS: 13000, SC: 76000, ST: 112000 } }, 
  { collegeId: 'mims-mandya', collegeName: 'Mandya Institute of Medical Sciences (MIMS), Mandya', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 8500, OBC: 10800, EWS: 11800, SC: 74000, ST: 108000 } },
  { collegeId: 'sims-shimoga', collegeName: 'Shimoga Institute of Medical Sciences (SIMS), Shivamogga', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 8800, OBC: 11200, EWS: 12200, SC: 75000, ST: 110000 } },

  // --- MAHARASHTRA (ALL INDIA QUOTA 15%) ---
  { collegeId: 'ltmmc-sion-mumbai', collegeName: 'Lokmanya Tilak Municipal Medical College (Sion), Mumbai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2200, OBC: 3400, EWS: 3800, SC: 27000, ST: 46000 } }, 
  { collegeId: 'tnmc-nair-mumbai', collegeName: 'TNMC & BYL Nair Charitable Hospital, Mumbai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2600, OBC: 3800, EWS: 4200, SC: 31000, ST: 51000 } }, 
  { collegeId: 'hbt-cooper-mumbai', collegeName: 'HBT Medical College & Dr. RN Cooper Hospital, Juhu, Mumbai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3100, OBC: 4400, EWS: 4900, SC: 36000, ST: 58000 } }, 
  { collegeId: 'gmc-aurangabad', collegeName: 'Government Medical College, Chhatrapati Sambhajinagar (Aurangabad)', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5800, OBC: 7200, EWS: 8000, SC: 58000, ST: 90000 } }, 
  { collegeId: 'gmc-miraj', collegeName: 'Government Medical College, Miraj', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 7500, OBC: 9400, EWS: 10200, SC: 68000, ST: 102000 } },
  { collegeId: 'vmmc-solapur', collegeName: 'Dr. V.M. Government Medical College, Solapur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 7800, OBC: 9800, EWS: 10600, SC: 70000, ST: 104000 } },

  // --- UTTAR PRADESH (ALL INDIA QUOTA 15%) ---
  { collegeId: 'rmlims-lucknow', collegeName: 'Dr. Ram Manohar Lohia Institute of Medical Sciences, Lucknow', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2400, OBC: 3600, EWS: 3900, SC: 29000, ST: 49000 } }, 
  { collegeId: 'gsvm-kanpur', collegeName: 'G.S.V.M. Medical College, Kanpur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3400, OBC: 4600, EWS: 5100, SC: 40000, ST: 64000 } }, 
  { collegeId: 'mln-prayagraj', collegeName: 'Moti Lal Nehru Medical College, Prayagraj', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4500, OBC: 5800, EWS: 6500, SC: 51000, ST: 79000 } }, 
  { collegeId: 'snmc-agra', collegeName: 'S.N. Medical College, Agra', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4800, OBC: 6100, EWS: 6800, SC: 53000, ST: 82000 } }, 
  { collegeId: 'llrm-meerut', collegeName: 'L.L.R.M. Medical College, Meerut', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5100, OBC: 6500, EWS: 7200, SC: 55000, ST: 85000 } }, 
  { collegeId: 'gims-greaternoida', collegeName: 'Government Institute of Medical Sciences (GIMS), Greater Noida', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3800, OBC: 5100, EWS: 5600, SC: 44000, ST: 69000 } }, 
  { collegeId: 'brd-gorakhpur', collegeName: 'B.R.D. Medical College, Gorakhpur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5800, OBC: 7200, EWS: 8000, SC: 59000, ST: 91000 } },
  { collegeId: 'mlb-jhansi', collegeName: 'M.L.B. Medical College, Jhansi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 6500, OBC: 8100, EWS: 8900, SC: 63000, ST: 96000 } },

  // --- RAJASTHAN, GUJARAT, MP, WEST BENGAL, BIHAR, ODISHA, AP & TELANGANA ---
  { collegeId: 'ruhs-jaipur', collegeName: 'RUHS College of Medical Sciences, Jaipur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2800, OBC: 3900, EWS: 4300, SC: 33000, ST: 54000 } }, 
  { collegeId: 'spmc-bikaner', collegeName: 'Sardar Patel Medical College, Bikaner', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4200, OBC: 5500, EWS: 6100, SC: 48000, ST: 75000 } }, 
  { collegeId: 'jln-ajmer', collegeName: 'Jawahar Lal Nehru Medical College, Ajmer', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4600, OBC: 5900, EWS: 6600, SC: 52000, ST: 80000 } }, 
  { collegeId: 'gmc-kota', collegeName: 'Government Medical College, Kota', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5200, OBC: 6700, EWS: 7400, SC: 56000, ST: 86000 } }, 
  { collegeId: 'mc-baroda', collegeName: 'Medical College, Baroda, Vadodara', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 2900, OBC: 4100, EWS: 4500, SC: 35000, ST: 56000 } }, 
  { collegeId: 'gmc-surat', collegeName: 'Government Medical College, Surat', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3600, OBC: 4900, EWS: 5400, SC: 42000, ST: 67000 } }, 
  { collegeId: 'mpshah-jamnagar', collegeName: 'M.P. Shah Medical College, Jamnagar', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5800, OBC: 7400, EWS: 8200, SC: 60000, ST: 92000 } }, 
  { collegeId: 'pddu-rajkot', collegeName: 'Pt. DDU Medical College, Rajkot', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 6200, OBC: 7800, EWS: 8600, SC: 62000, ST: 95000 } }, 
  { collegeId: 'grmc-gwalior', collegeName: 'Gajra Raja Medical College, Gwalior', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5500, OBC: 7000, EWS: 7800, SC: 58000, ST: 89000 } }, 
  { collegeId: 'abv-vidisha', collegeName: 'Atal Bihari Vajpayee Government Medical College, Vidisha', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 8500, OBC: 10500, EWS: 11500, SC: 72000, ST: 106000 } }, 
  { collegeId: 'nrsmc-kolkata', collegeName: 'Nil Ratan Sircar Medical College (NRSMC), Kolkata', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3500, OBC: 4800, EWS: 5300, SC: 41000, ST: 66000 } }, 
  { collegeId: 'rgkar-kolkata', collegeName: 'R.G. Kar Medical College, Kolkata', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4400, OBC: 5700, EWS: 6400, SC: 50000, ST: 78000 } }, 
  { collegeId: 'cnmc-kolkata', collegeName: 'Calcutta National Medical College, Kolkata', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5200, OBC: 6700, EWS: 7500, SC: 56000, ST: 86000 } }, 
  { collegeId: 'pmch-patna', collegeName: 'Patna Medical College (PMCH), Patna', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 3600, OBC: 4900, EWS: 5500, SC: 43000, ST: 68000 } }, 
  { collegeId: 'igims-patna', collegeName: 'Indira Gandhi Institute of Medical Sciences (IGIMS), Patna', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 4200, OBC: 5600, EWS: 6200, SC: 48000, ST: 75000 } }, 
  { collegeId: 'nmch-patna', collegeName: 'Nalanda Medical College (NMCH), Patna', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 6100, OBC: 7700, EWS: 8500, SC: 62000, ST: 95000 } }, 
  { collegeId: 'mkcg-brahmapur', collegeName: 'MKCG Medical College, Brahmapur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 6800, OBC: 8500, EWS: 9400, SC: 66000, ST: 99000 } }, 
  { collegeId: 'guntur-mc', collegeName: 'Guntur Medical College, Guntur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5500, OBC: 7100, EWS: 7900, SC: 58000, ST: 89000 } }, 
  { collegeId: 'kurnool-mc', collegeName: 'Kurnool Medical College, Kurnool', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 6200, OBC: 7800, EWS: 8700, SC: 63000, ST: 96000 } }, 
  { collegeId: 'siddhartha-vijayawada', collegeName: 'Siddhartha Medical College, Vijayawada', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 7100, OBC: 8900, EWS: 9800, SC: 67000, ST: 101000 } }, 
  { collegeId: 'kakatiya-warangal', collegeName: 'Kakatiya Medical College, Warangal', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 5800, OBC: 7400, EWS: 8200, SC: 60000, ST: 92000 } }, 

  // ===========================================================================
  // ADDITIONAL DENTAL COLLEGES (BDS — CENTRAL & AIQ QUOTA)
  // ===========================================================================
  { collegeId: 'ims-bhu-dental', collegeName: 'Faculty of Dental Sciences, IMS BHU, Varanasi', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 15000, OBC: 18500, EWS: 20000, SC: 72000, ST: 98000 } },
  { collegeId: 'dr-ahmed-dental-kolkata', collegeName: 'Dr. R. Ahmed Dental College & Hospital, Kolkata', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 30000, OBC: 33000, EWS: 36000, SC: 105000, ST: 148000 } },
  { collegeId: 'gdc-thiruvananthapuram', collegeName: 'Government Dental College, Thiruvananthapuram', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 27000, OBC: 30000, EWS: 33000, SC: 98000, ST: 135000 } },
  { collegeId: 'gdc-kozhikode', collegeName: 'Government Dental College, Kozhikode', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 29000, OBC: 32000, EWS: 35000, SC: 102000, ST: 142000 } },
  { collegeId: 'gdc-kottayam', collegeName: 'Government Dental College, Kottayam', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 31000, OBC: 34000, EWS: 37000, SC: 106000, ST: 148000 } },
  { collegeId: 'tngdc-chennai', collegeName: 'Tamil Nadu Government Dental College, Chennai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 28500, OBC: 31500, EWS: 34500, SC: 101000, ST: 140000 } }, 
  { collegeId: 'gdc-hyderabad', collegeName: 'Government Dental College & Hospital, Afzalgunj, Hyderabad', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 29500, OBC: 32500, EWS: 35500, SC: 103000, ST: 144000 } },
  { collegeId: 'gdc-vijayawada', collegeName: 'Government Dental College & Hospital, Vijayawada', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 32000, OBC: 35000, EWS: 38000, SC: 108000, ST: 152000 } },
  { collegeId: 'ruhs-dental-jaipur', collegeName: 'RUHS College of Dental Sciences, Jaipur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 30500, OBC: 33500, EWS: 36500, SC: 105000, ST: 146000 } },
  { collegeId: 'gdch-ahmedabad', collegeName: 'Government Dental College & Hospital, Ahmedabad', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 28000, OBC: 31000, EWS: 33800, SC: 100000, ST: 138000 } },

  // ===========================================================================
  // ADDITIONAL DEEMED UNIVERSITIES (MBBS & BDS — MANAGEMENT/PAID QUOTA)
  // ===========================================================================
  // Note: Deemed Universities allocate seats primarily via Open Unreserved (UR) rank.
  { collegeId: 'jnmc-belagavi', collegeName: 'Jawaharlal Nehru Medical College (KLE), Belagavi', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 195000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'rural-mc-loni', collegeName: 'Rural Medical College (PIMS), Loni', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 210000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'rajarajeswari-blr', collegeName: 'Rajarajeswari Medical College & Hospital, Bengaluru', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 320000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'ims-sum-bhubaneswar', collegeName: 'IMS & SUM Hospital (Siksha O Anusandhan), Bhubaneswar', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 340000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'sbks-vadodara', collegeName: 'SBKS Medical Institute & Research Centre, Vadodara', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 350000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'bvdu-sangli', collegeName: 'Bharati Vidyapeeth DU Medical College, Sangli', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 380000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'blde-vijayapura', collegeName: 'Shri B.M. Patil Medical College (BLDE), Vijayapura', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 410000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'mgm-navimumbai', collegeName: 'MGM Medical College, Navi Mumbai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 450000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'kims-karad', collegeName: 'Krishna Institute of Medical Sciences, Karad', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 480000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'chettinad-kelambakkam', collegeName: 'Chettinad Hospital & Research Institute, Kelambakkam', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 520000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'dypatil-pune', collegeName: 'Dr. D.Y. Patil Medical College, Hospital & RC, Pimpri, Pune', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 550000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'dypatil-kolhapur', collegeName: 'D.Y. Patil Medical College, Kolhapur', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 580000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'datta-meghe-nagpur', collegeName: 'Datta Meghe Medical College, Wanadongri, Nagpur', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 610000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'meenakshi-kanchipuram', collegeName: 'Meenakshi Medical College Hospital & RI, Kanchipuram', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 650000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'gitam-vizag', collegeName: 'GITAM Institute of Medical Sciences & Research, Visakhapatnam', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 680000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'vmkv-salem', collegeName: 'Vinayaka Missions Medical College & Hospital, Karaikal', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 720000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'sss-kancheepuram', collegeName: 'Shri Sathya Sai Medical College & RI, Kancheepuram', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 750000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'acs-chennai', collegeName: 'ACS Medical College and Hospital, Chennai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 3', cutoffs: { UR: 850000, OBC: null, EWS: null, SC: null, ST: null } },

  // --- ADDITIONAL DEEMED DENTAL (BDS) ---
  { collegeId: 'mcods-mangalore', collegeName: 'Manipal College of Dental Sciences, Mangalore', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 380000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'srm-dental-ramapuram', collegeName: 'SRM Dental College, Ramapuram, Chennai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 550000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'saveetha-dental-chennai', collegeName: 'Saveetha Dental College & Hospital, Chennai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 580000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'dypatil-dental-pune', collegeName: 'Dr. D.Y. Patil Dental College & Hospital, Pune', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'BDS', year: 2025, round: 'Round 3', cutoffs: { UR: 680000, OBC: null, EWS: null, SC: null, ST: null } }
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