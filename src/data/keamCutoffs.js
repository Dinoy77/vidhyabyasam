// data/keamCutoffs.js
//
// SAMPLE / PLACEHOLDER DATA — replace with real KEAM allotment cutoff data
// from CEE Kerala's official published rank lists once available.
//
// Shape: one row per (college + branch + category + year).
// `collegeId` should match the `id` field used in engineering_colleges.js
// so we can cross-link to the real college object (image, address, etc).

export const keamCategories = [
  'General',
  'OBC',
  'SC',
  'ST',
  'EWS',
];

export const keamCutoffs = [
  {
    collegeId: 'eng-001',
    collegeName: 'College of Engineering, Trivandrum (CET)',
    branch: 'Computer Science and Engineering',
    year: 2025,
    category: 'General',
    openingRank: 45,
    closingRank: 620,
  },
  {
    collegeId: 'eng-001',
    collegeName: 'College of Engineering, Trivandrum (CET)',
    branch: 'Electronics and Communication',
    year: 2025,
    category: 'General',
    openingRank: 610,
    closingRank: 1850,
  },
  {
    collegeId: 'eng-002',
    collegeName: 'Government Engineering College, Thrissur',
    branch: 'Computer Science and Engineering',
    year: 2025,
    category: 'General',
    openingRank: 1200,
    closingRank: 4300,
  },
  {
    collegeId: 'eng-002',
    collegeName: 'Government Engineering College, Thrissur',
    branch: 'Mechanical Engineering',
    year: 2025,
    category: 'General',
    openingRank: 4100,
    closingRank: 9800,
  },
  {
    collegeId: 'eng-003',
    collegeName: 'Model Engineering College, Kochi',
    branch: 'Computer Science and Engineering',
    year: 2025,
    category: 'General',
    openingRank: 2200,
    closingRank: 6100,
  },
  {
    collegeId: 'eng-003',
    collegeName: 'Model Engineering College, Kochi',
    branch: 'Information Technology',
    year: 2025,
    category: 'General',
    openingRank: 5800,
    closingRank: 11200,
  },
  {
    collegeId: 'eng-004',
    collegeName: 'TKM College of Engineering, Kollam',
    branch: 'Computer Science and Engineering',
    year: 2025,
    category: 'General',
    openingRank: 3100,
    closingRank: 7900,
  },
  {
    collegeId: 'eng-004',
    collegeName: 'TKM College of Engineering, Kollam',
    branch: 'Civil Engineering',
    year: 2025,
    category: 'General',
    openingRank: 14000,
    closingRank: 28500,
  },
  {
    collegeId: 'eng-005',
    collegeName: 'Government Engineering College, Kozhikode',
    branch: 'Computer Science and Engineering',
    year: 2025,
    category: 'General',
    openingRank: 4200,
    closingRank: 9600,
  },
  {
    collegeId: 'eng-006',
    collegeName: 'Rajiv Gandhi Institute of Technology, Kottayam',
    branch: 'Electronics and Communication',
    year: 2025,
    category: 'General',
    openingRank: 8000,
    closingRank: 18500,
  },
  {
    collegeId: 'eng-001',
    collegeName: 'College of Engineering, Trivandrum (CET)',
    branch: 'Computer Science and Engineering',
    year: 2025,
    category: 'OBC',
    openingRank: 300,
    closingRank: 1400,
  },
  {
    collegeId: 'eng-002',
    collegeName: 'Government Engineering College, Thrissur',
    branch: 'Computer Science and Engineering',
    year: 2025,
    category: 'OBC',
    openingRank: 2600,
    closingRank: 6900,
  },
  {
    collegeId: 'eng-001',
    collegeName: 'College of Engineering, Trivandrum (CET)',
    branch: 'Computer Science and Engineering',
    year: 2025,
    category: 'SC',
    openingRank: 1800,
    closingRank: 5200,
  },
  {
    collegeId: 'eng-003',
    collegeName: 'Model Engineering College, Kochi',
    branch: 'Computer Science and Engineering',
    year: 2025,
    category: 'SC',
    openingRank: 4200,
    closingRank: 11800,
  },
  {
    collegeId: 'eng-001',
    collegeName: 'College of Engineering, Trivandrum (CET)',
    branch: 'Computer Science and Engineering',
    year: 2025,
    category: 'ST',
    openingRank: 3200,
    closingRank: 9100,
  },
  {
    collegeId: 'eng-004',
    collegeName: 'TKM College of Engineering, Kollam',
    branch: 'Computer Science and Engineering',
    year: 2025,
    category: 'EWS',
    openingRank: 3800,
    closingRank: 9200,
  },
];

// Unique branch list, derived — used to populate the branch filter dropdown
export const keamBranches = [...new Set(keamCutoffs.map(c => c.branch))].sort();