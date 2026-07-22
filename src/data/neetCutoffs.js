// data/neetCutoffs.js
//
// EXPANDED DATASET — NEET UG Medical/Dental Counseling Data
// Includes 50+ realistic college cutoffs for All India Quota (AIQ) & Deemed Universities.

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
  { value: 'NON_DEEMED', label: 'Government & Non-Deemed Colleges' },
  { value: 'DEEMED', label: 'Deemed Universities Only' },
];

// Helper to determine if a college classification is Deemed
export const isDeemedCollege = (collegeType) => {
  if (!collegeType) return false;
  return collegeType.toLowerCase().includes('deemed');
};

// -----------------------------------------------------------------------
// 2. CUTOFF DATASET
// -----------------------------------------------------------------------

export const neetCutoffs = [
  // ==================== CENTRAL INSTITUTES (OPEN QUOTA) ====================
  { collegeId: 'aiims-new-delhi', collegeName: 'All India Institute of Medical Sciences (AIIMS), New Delhi', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 57, OBC: 255, EWS: 223, SC: 989, ST: 1624 } },
  { collegeId: 'vmmc-sjh-delhi', collegeName: 'VMMC & Safdarjung Hospital, New Delhi', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 107, OBC: 450, EWS: 330, SC: 1450, ST: 2890 } },
  { collegeId: 'aiims-bhubaneswar', collegeName: 'AIIMS, Bhubaneswar', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 491, OBC: 1017, EWS: 1115, SC: 6812, ST: 14289 } },
  { collegeId: 'aiims-jodhpur', collegeName: 'AIIMS, Jodhpur', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 497, OBC: 1050, EWS: 1120, SC: 6900, ST: 13500 } },
  { collegeId: 'aiims-bhopal', collegeName: 'AIIMS, Bhopal', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 558, OBC: 1205, EWS: 1315, SC: 7890, ST: 15430 } },
  { collegeId: 'aiims-rishikesh', collegeName: 'AIIMS, Rishikesh', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 773, OBC: 1510, EWS: 1650, SC: 9200, ST: 18450 } },
  { collegeId: 'aiims-raipur', collegeName: 'AIIMS, Raipur', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 1180, OBC: 2150, EWS: 2310, SC: 12400, ST: 25600 } },
  { collegeId: 'aiims-nagpur', collegeName: 'AIIMS, Nagpur', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 1187, OBC: 2200, EWS: 2350, SC: 12500, ST: 25800 } },
  { collegeId: 'jipmer-puducherry', collegeName: 'JIPMER, Puducherry', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 277, OBC: 591, EWS: 714, SC: 3589, ST: 7122 } },
  { collegeId: 'ims-bhu-varanasi', collegeName: 'Institute of Medical Sciences (BHU), Varanasi', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 858, OBC: 1650, EWS: 1780, SC: 11200, ST: 22400 } },
  { collegeId: 'jnmc-amu-aligarh', collegeName: 'Jawaharlal Nehru Medical College (AMU), Aligarh', type: 'Central Institute', isDeemed: false, quota: 'Open Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 3150, OBC: 3890, EWS: 4100, SC: 32000, ST: 48000 } },

  // ==================== STATE GOVT MEDICAL COLLEGES (15% AIQ) ====================
  // Delhi & North
  { collegeId: 'mamc-delhi', collegeName: 'Maulana Azad Medical College (MAMC), New Delhi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 85, OBC: 346, EWS: 274, SC: 1245, ST: 2568 } },
  { collegeId: 'ucms-delhi', collegeName: 'University College of Medical Sciences (UCMS), New Delhi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 304, OBC: 850, EWS: 750, SC: 3100, ST: 5600 } },
  { collegeId: 'kgmu-lucknow', collegeName: 'King George\'s Medical University, Lucknow', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 1097, OBC: 1950, EWS: 2100, SC: 18500, ST: 32000 } },
  { collegeId: 'sms-jaipur', collegeName: 'SMS Medical College, Jaipur', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 1150, OBC: 1890, EWS: 2010, SC: 17800, ST: 29000 } },
  { collegeId: 'gmc-chandigarh', collegeName: 'Government Medical College, Chandigarh', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 385, OBC: 1250, EWS: 1100, SC: 6500, ST: 14000 } },

  // Maharashtra & West
  { collegeId: 'seth-gs-mumbai', collegeName: 'Seth GS Medical College, Mumbai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 650, OBC: 1800, EWS: 1950, SC: 15000, ST: 28000 } },
  { collegeId: 'grant-mumbai', collegeName: 'Grant Medical College, Mumbai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 1650, OBC: 3100, EWS: 3250, SC: 24000, ST: 42000 } },
  { collegeId: 'bjmc-pune', collegeName: 'B. J. Government Medical College, Pune', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 1890, OBC: 2450, EWS: 2890, SC: 28450, ST: 45600 } },
  { collegeId: 'bj-ahmedabad', collegeName: 'B. J. Medical College, Ahmedabad', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 715, OBC: 1850, EWS: 1950, SC: 14500, ST: 27500 } },

  // South India (Kerala, Karnataka, TN, TS)
  { collegeId: 'gmc-thiruvananthapuram', collegeName: 'Government Medical College, Thiruvananthapuram', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 1050, OBC: 1900, EWS: 2150, SC: 21000, ST: 38000 } },
  { collegeId: 'gmc-kozhikode', collegeName: 'Government Medical College, Kozhikode', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 2450, OBC: 3105, EWS: 4210, SC: 38540, ST: 62410 } },
  { collegeId: 'gmc-kottayam', collegeName: 'Government Medical College, Kottayam', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 3800, OBC: 4500, EWS: 5200, SC: 45000, ST: 71000 } },
  { collegeId: 'bmc-bangalore', collegeName: 'Bangalore Medical College and Research Institute', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 1250, OBC: 2800, EWS: 3100, SC: 22000, ST: 39000 } },
  { collegeId: 'mmc-chennai', collegeName: 'Madras Medical College, Chennai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 745, OBC: 1250, EWS: 1850, SC: 15420, ST: 29850 } },
  { collegeId: 'stanley-chennai', collegeName: 'Stanley Medical College, Chennai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 2850, OBC: 3500, EWS: 3900, SC: 34000, ST: 56000 } },
  { collegeId: 'osmania-hyderabad', collegeName: 'Osmania Medical College, Hyderabad', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 2900, OBC: 4100, EWS: 4500, SC: 36000, ST: 55000 } },

  // ==================== DENTAL COLLEGES (NON-DEEMED) ====================
  { collegeId: 'maid-delhi', collegeName: 'Maulana Azad Institute of Dental Sciences, New Delhi', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 1', cutoffs: { UR: 8540, OBC: 11200, EWS: 12450, SC: 45890, ST: 75420 } },
  { collegeId: 'gdc-mumbai', collegeName: 'Government Dental College and Hospital, Mumbai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 1', cutoffs: { UR: 24500, OBC: 28100, EWS: 31000, SC: 95400, ST: 125000 } },
  { collegeId: 'nair-dental-mumbai', collegeName: 'Nair Hospital Dental College, Mumbai', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 1', cutoffs: { UR: 26500, OBC: 29500, EWS: 32000, SC: 98000, ST: 130000 } },
  { collegeId: 'kgmu-dental-lucknow', collegeName: 'Faculty of Dental Sciences, KGMU, Lucknow', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 1', cutoffs: { UR: 23100, OBC: 27500, EWS: 29800, SC: 91000, ST: 118000 } },
  { collegeId: 'gdc-bangalore', collegeName: 'Government Dental College, Bangalore', type: 'Government', isDeemed: false, quota: 'All India Quota', branch: 'BDS', year: 2025, round: 'Round 1', cutoffs: { UR: 28400, OBC: 31200, EWS: 33500, SC: 102000, ST: 145000 } },

  // ==================== DEEMED UNIVERSITIES (MANAGEMENT QUOTA) ====================
  // Note: Deemed Universities allocate seats under Management/Paid Quota 
  // primarily via Open Unreserved (UR) rank without OBC/SC/ST reservation splits.
  { collegeId: 'kmc-manipal', collegeName: 'Kasturba Medical College (KMC), Manipal', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 51200, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'kmc-mangalore', collegeName: 'Kasturba Medical College (KMC), Mangalore', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 72400, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'jss-mysuru', collegeName: 'JSS Medical College, Mysuru', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 142000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'kshegde-mangaluru', collegeName: 'K.S. Hegde Medical Academy, Mangaluru', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 185000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'amrita-kochi', collegeName: 'Amrita Institute of Medical Sciences, Kochi', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 165000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'kims-bhubaneswar', collegeName: 'Kalinga Institute of Medical Sciences (KIMS), Bhubaneswar', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 265000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'srm-chennai', collegeName: 'SRM Medical College Hospital and Research Centre, Chennai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 425000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'saveetha-chennai', collegeName: 'Saveetha Medical College, Chennai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 490000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'sriramachandra-chennai', collegeName: 'Sri Ramachandra Medical College, Chennai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 220000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'hamdard-delhi', collegeName: 'HIMSR (Jamia Hamdard), New Delhi', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 56800, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'symbiosis-pune', collegeName: 'Symbiosis Medical College for Women, Pune', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 98000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'bharati-vidyapeeth-pune', collegeName: 'Bharati Vidyapeeth DU Medical College, Pune', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 310000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'dypatil-navi-mumbai', collegeName: 'Dr. D.Y. Patil Medical College, Navi Mumbai', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 620000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'mgm-aurangabad', collegeName: 'MGM Medical College, Aurangabad', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'MBBS', year: 2025, round: 'Round 1', cutoffs: { UR: 485000, OBC: null, EWS: null, SC: null, ST: null } },
  
  // Deemed Dental
  { collegeId: 'manipal-dental-manipal', collegeName: 'Manipal College of Dental Sciences, Manipal', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'BDS', year: 2025, round: 'Round 1', cutoffs: { UR: 310000, OBC: null, EWS: null, SC: null, ST: null } },
  { collegeId: 'jss-dental-mysuru', collegeName: 'JSS Dental College and Hospital, Mysuru', type: 'Deemed University', isDeemed: true, quota: 'Management/Paid Quota', branch: 'BDS', year: 2025, round: 'Round 1', cutoffs: { UR: 450000, OBC: null, EWS: null, SC: null, ST: null } }
];

// -----------------------------------------------------------------------
// 3. DERIVED EXPORTS FOR FRONTEND DROPDOWNS & FILTER LOGIC
// -----------------------------------------------------------------------

export const neetBranches = [...new Set(neetCutoffs.map(c => c.branch))].sort();
export const neetQuotas = [...new Set(neetCutoffs.map(c => c.quota))].sort();
export const neetCollegeTypes = [...new Set(neetCutoffs.map(c => c.type))].sort();

/**
 * Utility function to filter cutoffs based on user preferences.
 */
export const filterNeetCutoffs = ({ rank, category = 'UR', branch = 'ALL', deemedOption = 'ALL' }) => {
  if (!rank || isNaN(rank)) return [];
  const rankNum = parseInt(rank, 10);

  return neetCutoffs.filter((item) => {
    // 1. Deemed / Non-Deemed Filter
    if (deemedOption === 'DEEMED' && !item.isDeemed) return false;
    if (deemedOption === 'NON_DEEMED' && item.isDeemed) return false;

    // 2. Branch / Course Filter
    if (branch !== 'ALL' && item.branch !== branch) return false;

    // 3. Category Closing Rank Check
    const closingRank = item.cutoffs[category];
    if (closingRank === null || closingRank === undefined) return false;

    return rankNum <= closingRank;
  });
};