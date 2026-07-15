// data/keamCutoffs.js
//
// REAL DATA — sourced from CEE Kerala's official "Last Rank Table",
// KEAM 2025 Admission to Engineering, First Phase Allotment, dated 21/07/2025.
// Source: https://cee.kerala.gov.in/keam2025/list/lastrank/p1_last_rank_final.pdf
//
// Coverage: all Government engineering colleges, across the 4 most
// commonly searched branches (CSE, ECE, EEE, Civil). This is a genuine
// but partial slice of the full official dataset — self-financing (private)
// colleges and other branches are not yet included. See the README note
// at the bottom of this file for how to extend it.
//
// Category codes are KEAM's official reservation categories (not a
// generic General/OBC/SC/ST split):
//   SM = State Merit (General)        EZ = Ezhava
//   MU = Muslim                        BH = Other Backward Hindu
//   LA = Latin Catholic & Anglo-Indian DV = Dheevara & related communities
//   VK = Viswakarma & related          KN = Kusavan & related communities
//   BX = Other Backward Christian      KU = Kudumbi
//   SC = Scheduled Castes              ST = Scheduled Tribes
//   EW = Economically Weaker Section
//
// `null` in a cutoffs field means no seat was allotted under that
// category in this round (not a data gap) — the predictor should skip
// (not fabricate) a result for that category/college/branch combination.

export const keamCategories = [
  { code: 'SM', label: 'State Merit (General)' },
  { code: 'EZ', label: 'Ezhava' },
  { code: 'MU', label: 'Muslim' },
  { code: 'BH', label: 'Backward Hindu' },
  { code: 'LA', label: 'Latin Catholic / Anglo-Indian' },
  { code: 'DV', label: 'Dheevara' },
  { code: 'VK', label: 'Viswakarma' },
  { code: 'KN', label: 'Kusavan' },
  { code: 'BX', label: 'Backward Christian' },
  { code: 'KU', label: 'Kudumbi' },
  { code: 'SC', label: 'Scheduled Castes' },
  { code: 'ST', label: 'Scheduled Tribes' },
  { code: 'EW', label: 'EWS' },
];

export const keamCutoffs = [
  // ---------------- Civil Engineering ----------------
  { collegeId: 'gec-kozhikode', collegeName: 'Government Engineering College, Kozhikkode', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 12998, EZ: 19951, MU: 16470, LA: 38628, DV: 32701, VK: 20191, BH: 18040, BX: 18336, KN: 30513, KU: null, SC: 47867, ST: 29061, EW: 35251 } },
  { collegeId: 'gce-kannur', collegeName: 'Government College of Engineering, Kannur', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 12780, EZ: 17817, MU: 16338, LA: 32579, DV: 18699, VK: 17254, BH: 17730, BX: 26360, KN: null, KU: null, SC: 48835, ST: 48823, EW: 32587 } },
  { collegeId: 'grit-kottayam', collegeName: 'Government Rajiv Gandhi Institute of Technology, Kottayam', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 13080, EZ: 14531, MU: 14430, LA: 24582, DV: 52699, VK: 14269, BH: 14560, BX: 14173, KN: 31511, KU: null, SC: 41180, ST: 53974, EW: 22978 } },
  { collegeId: 'mace-kothamangalam', collegeName: 'Mar Athanasius College of Engineering, Kothamangalam', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 13132, EZ: 15422, MU: 15099, LA: 29275, DV: 44162, VK: 17115, BH: 17392, BX: 17151, KN: 44564, KU: 43775, SC: 49461, ST: 61172, EW: null } },
  { collegeId: 'nss-palakkad', collegeName: 'N S S College of Engineering, Palakkad', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 13129, EZ: 19904, MU: 16534, LA: 37278, DV: 51396, VK: 20034, BH: 17963, BX: 19122, KN: 32466, KU: null, SC: 49400, ST: 60625, EW: 29015 } },
  { collegeId: 'gec-palakkad', collegeName: 'Government Engineering College, Palakkad', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 12140, EZ: 18257, MU: 16331, LA: 43928, DV: 44369, VK: 20291, BH: 19724, BX: 22864, KN: 36863, KU: null, SC: 46718, ST: 42167, EW: 39597 } },
  { collegeId: 'gec-thrissur', collegeName: 'Government Engineering College, Thrissur', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 8797, EZ: 10069, MU: 9362, LA: 21723, DV: 28231, VK: 9996, BH: 9885, BX: 17189, KN: 15104, KU: 45725, SC: 28271, ST: 50130, EW: 16402 } },
  { collegeId: 'tkm-kollam', collegeName: 'T K M College of Engineering, Kollam', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 9896, EZ: 11775, MU: 10690, LA: 18382, DV: 37246, VK: 12309, BH: 11916, BX: 15210, KN: 19555, KU: 58070, SC: 34595, ST: 54949, EW: null } },
  { collegeId: 'gec-bartonhill-trivandrum', collegeName: 'Government Engineering College Barton Hill, Thiruvananthapuram', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 11459, EZ: 13000, MU: 12527, LA: 19769, DV: 41816, VK: 14542, BH: 12962, BX: 14677, KN: null, KU: 56198, SC: 35885, ST: 54542, EW: 18329 } },
  { collegeId: 'cet-trivandrum', collegeName: 'College of Engineering, Thiruvananthapuram (CET)', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 5059, EZ: 6642, MU: 5977, LA: 9716, DV: 21976, VK: 6541, BH: 5808, BX: 8021, KN: 14388, KU: 12328, SC: 23164, ST: 43744, EW: 12090 } },

  // ---------------- Computer Science & Engineering ----------------
  { collegeId: 'gec-idukki', collegeName: 'Government Engineering College, Idukki', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 11219, MU: 6633, LA: 29541, DV: 23021, VK: 12047, BH: 14241, BX: 24234, KN: 26829, KU: 34431, SC: 31854, ST: 50438, EW: 18851 } },
  { collegeId: 'gce-kannur', collegeName: 'Government College of Engineering, Kannur', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3507, EZ: 5042, MU: 5012, LA: 5921, DV: 11109, VK: 4742, BH: 5030, BX: null, KN: 9582, KU: null, SC: 21985, ST: 50027, EW: 7227 } },
  { collegeId: 'grit-kottayam', collegeName: 'Government Rajiv Gandhi Institute of Technology, Kottayam', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3100, EZ: 3710, MU: 3771, LA: 4083, DV: 10654, VK: 4665, BH: 3533, BX: 6855, KN: 16566, KU: 10499, SC: 21157, ST: 53880, EW: 5809 } },
  { collegeId: 'mace-kothamangalam', collegeName: 'Mar Athanasius College of Engineering, Kothamangalam', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 2149, EZ: 2349, MU: 2515, LA: 3362, DV: 7067, VK: 4001, BH: 2327, BX: 5485, KN: 7537, KU: null, SC: 15188, ST: 63785, EW: null } },
  { collegeId: 'nss-palakkad', collegeName: 'N S S College of Engineering, Palakkad', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3545, EZ: 4682, MU: 4659, LA: 5464, DV: 12516, VK: 5821, BH: 4461, BX: 12124, KN: 10242, KU: 19760, SC: 22576, ST: 64387, EW: 6553 } },
  { collegeId: 'gec-palakkad', collegeName: 'Government Engineering College, Palakkad', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3115, EZ: 6345, MU: 5390, LA: 8831, DV: 12550, VK: 5871, BH: 6248, BX: null, KN: 16596, KU: 26915, SC: 23842, ST: 48001, EW: 7683 } },
  { collegeId: 'gec-thrissur', collegeName: 'Government Engineering College, Thrissur', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 670, EZ: 1109, MU: 907, LA: 2064, DV: 3970, VK: 1161, BH: 681, BX: 2756, KN: 4571, KU: 2603, SC: 9073, ST: 15092, EW: 1991 } },
  { collegeId: 'tkm-kollam', collegeName: 'T K M College of Engineering, Kollam', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 1487, EZ: 2067, MU: 1766, LA: 2438, DV: 5453, VK: 2156, BH: 1745, BX: 4327, KN: 4754, KU: 8803, SC: 12416, ST: 65466, EW: null } },
  { collegeId: 'cet-trivandrum', collegeName: 'College of Engineering, Thiruvananthapuram (CET)', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 343, EZ: 804, MU: 686, LA: 968, DV: 3882, VK: 860, BH: 662, BX: 1927, KN: 1288, KU: 1479, SC: 6410, ST: 14647, EW: 1629 } },
  { collegeId: 'gec-wayanad', collegeName: 'Government Engineering College, Wayanad', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 11851, MU: 5734, LA: 28086, DV: 32361, VK: 12208, BH: 13287, BX: 18364, KN: null, KU: 41195, SC: 35717, ST: 56708, EW: 18599 } },

  // ---------------- Electronics & Communication ----------------
  { collegeId: 'gec-idukki', collegeName: 'Government Engineering College, Idukki', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 16183, MU: 10873, LA: 32434, DV: 29509, VK: 19261, BH: 15389, BX: 31153, KN: 41131, KU: null, SC: 51795, ST: 56746, EW: 33806 } },
  { collegeId: 'gec-kozhikode', collegeName: 'Government Engineering College, Kozhikkode', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 4847, EZ: 9093, MU: 7427, LA: 16363, DV: 17074, VK: 8768, BH: 9131, BX: 16652, KN: 22152, KU: 46717, SC: 32017, ST: 66839, EW: 11365 } },
  { collegeId: 'gce-kannur', collegeName: 'Government College of Engineering, Kannur', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 4703, EZ: 7056, MU: 7023, LA: 16699, DV: 14298, VK: 6657, BH: 6751, BX: 14295, KN: 17724, KU: 29620, SC: 37662, ST: null, EW: 10279 } },
  { collegeId: 'grit-kottayam', collegeName: 'Government Rajiv Gandhi Institute of Technology, Kottayam', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3961, EZ: 4389, MU: 4385, LA: 8054, DV: 9218, VK: 5034, BH: 4260, BX: null, KN: 19912, KU: 12660, SC: 25422, ST: 66768, EW: 5967 } },
  { collegeId: 'mace-kothamangalam', collegeName: 'Mar Athanasius College of Engineering, Kothamangalam', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3346, EZ: 3691, MU: 3693, LA: 8179, DV: 13827, VK: 3493, BH: 3564, BX: 12042, KN: 18065, KU: 12168, SC: 29844, ST: null, EW: null } },
  { collegeId: 'nss-palakkad', collegeName: 'N S S College of Engineering, Palakkad', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 4827, EZ: 5324, MU: 5258, LA: 9904, DV: 14868, VK: 4858, BH: 5154, BX: 8809, KN: 15941, KU: 24331, SC: 31284, ST: 67141, EW: 8295 } },
  { collegeId: 'gec-palakkad', collegeName: 'Government Engineering College, Palakkad', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 4608, EZ: 7754, MU: 7629, LA: 17096, DV: 21361, VK: 6472, BH: 7747, BX: 15362, KN: null, KU: 49782, SC: 33877, ST: null, EW: 10260 } },
  { collegeId: 'gec-thrissur', collegeName: 'Government Engineering College, Thrissur', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 1420, EZ: 2137, MU: 1777, LA: 4211, DV: 3982, VK: 2561, BH: 1881, BX: 2295, KN: 3178, KU: 3280, SC: 13989, ST: 48779, EW: 3591 } },
  { collegeId: 'tkm-kollam', collegeName: 'T K M College of Engineering, Kollam', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 2199, EZ: 2448, MU: 2447, LA: 4141, DV: 6518, VK: 2607, BH: 2558, BX: 5306, KN: 3632, KU: 14895, SC: 17228, ST: 60927, EW: null } },
  { collegeId: 'gec-bartonhill-trivandrum', collegeName: 'Government Engineering College Barton Hill, Thiruvananthapuram', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3385, EZ: 4307, MU: 4273, LA: 9323, DV: 13758, VK: 4714, BH: 4193, BX: 3617, KN: 4004, KU: null, SC: 18416, ST: null, EW: 7005 } },
  { collegeId: 'cet-trivandrum', collegeName: 'College of Engineering, Thiruvananthapuram (CET)', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 598, EZ: 891, MU: 873, LA: 1187, DV: 3941, VK: 1048, BH: 813, BX: 2090, KN: 1427, KU: 3247, SC: 8710, ST: 23508, EW: 2175 } },
  { collegeId: 'gec-wayanad', collegeName: 'Government Engineering College, Wayanad', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 16284, MU: 10269, LA: 61615, DV: 61051, VK: 18943, BH: 17527, BX: 36775, KN: 56494, KU: null, SC: 53505, ST: null, EW: 35931 } },

  // ---------------- Electrical & Electronics ----------------
  { collegeId: 'gec-idukki', collegeName: 'Government Engineering College, Idukki', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 18948, MU: 12794, LA: 57089, DV: 54858, VK: 20058, BH: 21248, BX: 50040, KN: 20156, KU: null, SC: 56257, ST: null, EW: 52300 } },
  { collegeId: 'gce-kannur', collegeName: 'Government College of Engineering, Kannur', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 6393, EZ: 9611, MU: 9657, LA: 17076, DV: 28468, VK: 10130, BH: 9268, BX: 45775, KN: 40529, KU: 50525, SC: 44115, ST: 62817, EW: 14155 } },
  { collegeId: 'grit-kottayam', collegeName: 'Government Rajiv Gandhi Institute of Technology, Kottayam', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 6516, EZ: 7452, MU: 7090, LA: 15851, DV: 19963, VK: 7598, BH: 7131, BX: 14176, KN: null, KU: 48126, SC: 37154, ST: 61226, EW: 10732 } },
  { collegeId: 'mace-kothamangalam', collegeName: 'Mar Athanasius College of Engineering, Kothamangalam', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 6178, EZ: 6740, MU: 6977, LA: 13095, DV: 19961, VK: 7814, BH: 6897, BX: 16190, KN: 25298, KU: 42910, SC: 44291, ST: 29421, EW: null } },
  { collegeId: 'nss-palakkad', collegeName: 'N S S College of Engineering, Palakkad', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 7042, EZ: 8793, MU: 8838, LA: 20712, DV: 36700, VK: 8706, BH: 8627, BX: 19655, KN: 29291, KU: 56814, SC: 43562, ST: 27530, EW: 12543 } },
  { collegeId: 'gec-palakkad', collegeName: 'Government Engineering College, Palakkad', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 6768, EZ: 11012, MU: 10744, LA: 23665, DV: 25069, VK: 11057, BH: 10701, BX: 43656, KN: 35695, KU: null, SC: 44810, ST: null, EW: 17492 } },
  { collegeId: 'gec-thrissur', collegeName: 'Government Engineering College, Thrissur', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 2962, EZ: 3322, MU: 3271, LA: 6874, DV: 13390, VK: 4106, BH: 4017, BX: 12503, KN: 9165, KU: 31674, SC: 21079, ST: 66054, EW: 6763 } },
  { collegeId: 'tkm-kollam', collegeName: 'T K M College of Engineering, Kollam', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3853, EZ: 4651, MU: 4412, LA: 10487, DV: 16732, VK: 4751, BH: 4579, BX: 11747, KN: 21763, KU: 39287, SC: 26513, ST: 61974, EW: null } },
  { collegeId: 'gec-bartonhill-trivandrum', collegeName: 'Government Engineering College Barton Hill, Thiruvananthapuram', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 6490, EZ: 6901, MU: 7371, LA: 10516, DV: 20747, VK: 9396, BH: 7279, BX: null, KN: 33090, KU: 53470, SC: 35851, ST: null, EW: 10751 } },
  { collegeId: 'cet-trivandrum', collegeName: 'College of Engineering, Thiruvananthapuram (CET)', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 1386, EZ: 2162, MU: 1821, LA: 3419, DV: 5399, VK: 1497, BH: 1848, BX: 2103, KN: 1662, KU: 18241, SC: 12735, ST: 51578, EW: 3874 } },
  { collegeId: 'gec-wayanad', collegeName: 'Government Engineering College, Wayanad', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 19679, MU: 12639, LA: 52883, DV: null, VK: 21240, BH: 22169, BX: 59228, KN: 47729, KU: null, SC: 55374, ST: 66735, EW: 51262 } },
];

// Unique branch list, derived — used to populate the branch filter dropdown
export const keamBranches = [...new Set(keamCutoffs.map(c => c.branch))].sort();

// -----------------------------------------------------------------------
// HOW TO EXTEND THIS FILE
// -----------------------------------------------------------------------
// This currently covers only Government colleges in 4 branches from one
// allotment round (First Phase, 2025). To expand:
//  1. Get the same "Last Rank Table" PDF for later rounds (Second/Third
//     Phase, Mop-Up) — later rounds have LOWER cutoffs (more seats filled
//     as more candidates get allotted), which is usually more useful for
//     realistic predictions since most students get in during round 2-3.
//  2. Add self-financing (private) colleges — same PDF, same format, just
//     more pages per branch (look for "Type: S" instead of "Type: G").
//  3. Add more branches (Mechanical, IT, etc.) — same source PDF, more
//     branch sections.
// Each new row follows the same shape: collegeId, collegeName, branch,
// year, round, and a cutoffs object keyed by category code.