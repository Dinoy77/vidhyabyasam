// data/keamCutoffs.js
//
// REAL DATA — sourced from CEE Kerala's official "Last Rank Table",
// KEAM 2025 Admission to Engineering, First Phase Allotment, dated 21/07/2025.
// Source: https://cee.kerala.gov.in/keam2025/list/lastrank/p1_last_rank_final.pdf
//
// Coverage:
//   - Government colleges across 6 engineering branches: CSE, ECE, EEE,
//     Civil, Mechanical Engineering, Information Technology
//   - 9 well-known Private/Self-Financing engineering colleges across CSE, ECE, EEE, Civil
//   - B.Pharm — COMPLETE coverage, all 5 Government + 53 Private colleges
//     from the official rank table (separate PDF, same KEAM exam)
//
// Category codes are KEAM's official reservation categories:
//   SM = State Merit (General)        EZ = Ezhava
//   MU = Muslim                        BH = Other Backward Hindu
//   LA = Latin Catholic & Anglo-Indian DV = Dheevara & related communities
//   VK = Viswakarma & related          KN = Kusavan & related communities
//   BX = Other Backward Christian      KU = Kudumbi
//   SC = Scheduled Castes              ST = Scheduled Tribes
//   EW = Economically Weaker Section

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

export const rawKeamCutoffs = [
  //MBBS & BDS
  {
    "collegeId": "t-alappuzha",
    "collegeCode": "ALP",
    "collegeName": "T D Govt. Medical College, Alappuzha",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 638,
          "EZ": 771,
          "MU": 695,
          "LA": 1934,
          "DV": 5062,
          "VK": 1390,
          "BH": 1242,
          "BX": 1495,
          "KN": 7817,
          "KU": 8753,
          "SC": 8942,
          "ST": 19195,
          "EW": 1696
        }
      }
    ]
  },
  {
    "collegeId": "gov-ernakulam",
    "collegeCode": "CMC",
    "collegeName": "Govt. Medical College, Ernakulam",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 697,
          "EZ": 977,
          "MU": 872,
          "LA": 2185,
          "DV": 4817,
          "VK": 1439,
          "BH": 1277,
          "BX": 1602,
          "KN": 7990,
          "KU": 15753,
          "SC": 9794,
          "ST": 19298,
          "EW": 1827
        }
      }
    ]
  },
  {
    "collegeId": "gov-idukki",
    "collegeCode": "IDM",
    "collegeName": "Government Medical College Idukki",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 1627,
          "MU": 916,
          "LA": 3296,
          "DV": 6307,
          "VK": 2556,
          "BH": 1902,
          "BX": 2674,
          "KN": 9811,
          "KU": 20214,
          "SC": 12528,
          "ST": 20938,
          "EW": 2842
        }
      }
    ]
  },
  {
    "collegeId": "gov-kozhikkode",
    "collegeCode": "KKM",
    "collegeName": "Govt. Medical College, Kozhikkode",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 183,
          "EZ": 371,
          "MU": 239,
          "LA": 947,
          "DV": 3098,
          "VK": 583,
          "BH": 511,
          "BX": 1149,
          "KN": 4225,
          "KU": 7188,
          "SC": 4928,
          "ST": 6153,
          "EW": 973
        }
      }
    ]
  },
  {
    "collegeId": "gov-kollam",
    "collegeCode": "KLM",
    "collegeName": "Govt. Medical College, Parippally, Kollam",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 559,
          "EZ": 1276,
          "MU": 891,
          "LA": 1938,
          "DV": 5454,
          "VK": 1819,
          "BH": 1341,
          "BX": 2039,
          "KN": 8828,
          "KU": null,
          "SC": 9917,
          "ST": 20179,
          "EW": 1937
        }
      }
    ]
  },
  {
    "collegeId": "gov-kannur",
    "collegeCode": "KNM",
    "collegeName": "Government Medical College Kannur",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 691,
          "EZ": 1086,
          "MU": 886,
          "LA": 2420,
          "DV": 5400,
          "VK": 1536,
          "BH": 1154,
          "BX": 1724,
          "KN": 8315,
          "KU": 16743,
          "SC": 9741,
          "ST": 20723,
          "EW": 2090
        }
      }
    ]
  },
  {
    "collegeId": "gov-kottayam",
    "collegeCode": "KTM",
    "collegeName": "Govt. Medical College, Kottayam",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 490,
          "EZ": 643,
          "MU": 538,
          "LA": 1068,
          "DV": 3887,
          "VK": 820,
          "BH": 773,
          "BX": 1351,
          "KN": 6247,
          "KU": 14879,
          "SC": 7476,
          "ST": 17277,
          "EW": 1347
        }
      }
    ]
  },
  {
    "collegeId": "gov-manjeri",
    "collegeCode": "MLP",
    "collegeName": "Govt. Medical College, Manjeri",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 694,
          "EZ": 952,
          "MU": 790,
          "LA": 2377,
          "DV": 5541,
          "VK": 1392,
          "BH": 981,
          "BX": 1794,
          "KN": 8088,
          "KU": 16959,
          "SC": 10069,
          "ST": 21411,
          "EW": 1954
        }
      }
    ]
  },
  {
    "collegeId": "gov-palakkad",
    "collegeCode": "PKM",
    "collegeName": "Government Medical College, Palakkad",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 1297,
          "MU": 892,
          "LA": 2485,
          "DV": null,
          "VK": null,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 14160,
          "ST": 22753,
          "EW": 2153
        }
      }
    ]
  },
  {
    "collegeId": "gov-pathanamthitta",
    "collegeCode": "PTM",
    "collegeName": "Government Medical College, Konni, Pathanamthitta",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 1622,
          "MU": 911,
          "LA": 2496,
          "DV": 6514,
          "VK": 2107,
          "BH": 1892,
          "BX": 2396,
          "KN": 8873,
          "KU": 19105,
          "SC": 11110,
          "ST": 24188,
          "EW": 2482
        }
      }
    ]
  },
  {
    "collegeId": "gov-thrissur",
    "collegeCode": "TCM",
    "collegeName": "Govt. Medical College, Thrissur",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 460,
          "EZ": 653,
          "MU": 496,
          "LA": 1548,
          "DV": 4531,
          "VK": 1223,
          "BH": 799,
          "BX": 1421,
          "KN": 6595,
          "KU": 10556,
          "SC": 8273,
          "ST": 17812,
          "EW": 1504
        }
      }
    ]
  },
  {
    "collegeId": "gov-thiruvananthapuram",
    "collegeCode": "TVM",
    "collegeName": "Govt. Medical College, Thiruvananthapuram",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 308,
          "EZ": 539,
          "MU": 347,
          "LA": 789,
          "DV": 3297,
          "VK": 760,
          "BH": 589,
          "BX": 502,
          "KN": 4808,
          "KU": 14155,
          "SC": 5970,
          "ST": 14855,
          "EW": 1204
        }
      }
    ]
  },
  {
    "collegeId": "al-thodupuzha",
    "collegeCode": "AAM",
    "collegeName": "Al Azhar Medical college, Thodupuzha",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 8343,
          "EZ": 8755,
          "MU": 8907,
          "LA": 10190,
          "DV": 8353,
          "VK": 8946,
          "BH": 8378,
          "BX": 9174,
          "KN": 11377,
          "KU": 21977,
          "SC": 16993,
          "ST": 25833,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "ama-thrissur",
    "collegeCode": "AMC",
    "collegeName": "Amala Institute of Medical Sciences, Thrissur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 2197,
          "EZ": 2229,
          "MU": 2231,
          "LA": null,
          "DV": 6594,
          "VK": 2876,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 11376,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "aze-kollam",
    "collegeCode": "AZC",
    "collegeName": "Azeezia Institute of Medi Science, Meyyannoor, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 6522,
          "EZ": 6932,
          "MU": 7487,
          "LA": 9740,
          "DV": null,
          "VK": null,
          "BH": 6618,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 16631,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "bel-thiruvalla",
    "collegeCode": "BCM",
    "collegeName": "Believers Church Medical College Hospital, Thiruvalla",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3083,
          "EZ": 3128,
          "MU": 3249,
          "LA": 4179,
          "DV": null,
          "VK": null,
          "BH": 3172,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 14887,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "dr-wayanad",
    "collegeCode": "DMM",
    "collegeName": "Dr. Moopens Medical College, Meppadi, Wayanad",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 7965,
          "EZ": 8713,
          "MU": 8146,
          "LA": 11051,
          "DV": 8640,
          "VK": 9638,
          "BH": 8324,
          "BX": 10113,
          "KN": 10759,
          "KU": 22213,
          "SC": 16822,
          "ST": 25110,
          "EW": 14601
        }
      }
    ]
  },
  {
    "collegeId": "mes-malappuram",
    "collegeCode": "EMC",
    "collegeName": "MES Medical College, Perinthalmanna, Malappuram",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 2957,
          "EZ": 3095,
          "MU": 3112,
          "LA": 7496,
          "DV": 6635,
          "VK": 4731,
          "BH": 3155,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 14556,
          "ST": 25601,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "sre-tvpm",
    "collegeCode": "GMC",
    "collegeName": "Sree Gokulam Medical College, Venjaramoodu, TVPM",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3579,
          "EZ": 3930,
          "MU": 4256,
          "LA": 7086,
          "DV": 7589,
          "VK": 5408,
          "BH": 3728,
          "BX": 3599,
          "KN": 8955,
          "KU": 16768,
          "SC": 14954,
          "ST": 26042,
          "EW": 7291
        }
      }
    ]
  },
  {
    "collegeId": "jub-thrisur",
    "collegeCode": "JMC",
    "collegeName": "Jubilee Mission Medical College, Thrisur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 1825,
          "EZ": 2006,
          "MU": 1838,
          "LA": 2953,
          "DV": 6088,
          "VK": null,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 11855,
          "ST": 23192,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "kmc-kozikkode",
    "collegeCode": "KCM",
    "collegeName": "KMCT Medical College, Mukkom, Kozikkode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 5044,
          "EZ": 5772,
          "MU": 5184,
          "LA": 9140,
          "DV": 7728,
          "VK": 6913,
          "BH": 5525,
          "BX": 6124,
          "KN": 10147,
          "KU": 20246,
          "SC": 15624,
          "ST": 24871,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "p-ottapalam",
    "collegeCode": "KDM",
    "collegeName": "P K Das Institute of Medical Sciences, Ottapalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 7757,
          "EZ": 8537,
          "MU": 8608,
          "LA": 10914,
          "DV": 8473,
          "VK": 10921,
          "BH": 8175,
          "BX": 10088,
          "KN": 11078,
          "KU": 24308,
          "SC": 17019,
          "ST": 28188,
          "EW": 15148
        }
      }
    ]
  },
  {
    "collegeId": "kar-palakkad",
    "collegeCode": "KMM",
    "collegeName": "Karuna Medical College, Vilayodi, Palakkad",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 7437,
          "EZ": 7874,
          "MU": 7583,
          "LA": 10651,
          "DV": null,
          "VK": null,
          "BH": 7546,
          "BX": 9825,
          "KN": 11112,
          "KU": null,
          "SC": 15868,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "mal-kolenchery",
    "collegeCode": "MMC",
    "collegeName": "Malankara Orthodox Syrian Church MediCollege, Kolenchery",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 2525,
          "EZ": 2738,
          "MU": 2568,
          "LA": 5237,
          "DV": null,
          "VK": 4485,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 13373,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "mal-kozhikkode",
    "collegeCode": "MMH",
    "collegeName": "Malabar Medical College Hospital, Kozhikkode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 5086,
          "EZ": 5833,
          "MU": 5716,
          "LA": 9788,
          "DV": 7450,
          "VK": 6585,
          "BH": 5284,
          "BX": 7104,
          "KN": 10280,
          "KU": 20405,
          "SC": 15760,
          "ST": 26274,
          "EW": 9427
        }
      }
    ]
  },
  {
    "collegeId": "mou-pathanamthitta",
    "collegeCode": "MZM",
    "collegeName": "Mount Zion Medical College, Pathanamthitta",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 7528,
          "EZ": 7984,
          "MU": 7815,
          "LA": 8140,
          "DV": null,
          "VK": null,
          "BH": 8279,
          "BX": 9616,
          "KN": 11407,
          "KU": 22030,
          "SC": 16880,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "pal-walayar",
    "collegeCode": "PIM",
    "collegeName": "Palakkad Institute of Medical Sciences, Walayar",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 8745,
          "EZ": 8993,
          "MU": 10172,
          "LA": 11305,
          "DV": 8940,
          "VK": 11464,
          "BH": 8796,
          "BX": 9678,
          "KN": 11425,
          "KU": 22645,
          "SC": 17080,
          "ST": 28517,
          "EW": 15464
        }
      }
    ]
  },
  {
    "collegeId": "pus-thiruvalla",
    "collegeCode": "PMC",
    "collegeName": "Pushpagiri Institute of Medical Science, Thiruvalla",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 2695,
          "EZ": 2760,
          "MU": 2707,
          "LA": null,
          "DV": null,
          "VK": 4208,
          "BH": 2716,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 13397,
          "ST": 24479,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "sre-ernakulam",
    "collegeCode": "SIM",
    "collegeName": "Sree Narayana Institute of Medical Sciences, Chalakka, Ernakulam.",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 6518,
          "EZ": 7092,
          "MU": 7989,
          "LA": 8869,
          "DV": 7730,
          "VK": 8694,
          "BH": 6615,
          "BX": 7578,
          "KN": 10957,
          "KU": 19018,
          "SC": 16904,
          "ST": 27801,
          "EW": 12232
        }
      }
    ]
  },
  {
    "collegeId": "dr-karakonam",
    "collegeCode": "SMC",
    "collegeName": "Dr. Somervell Memorial CSI Medical College, Karakonam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 5193,
          "EZ": 5799,
          "MU": 5488,
          "LA": 7929,
          "DV": 7547,
          "VK": null,
          "BH": 5350,
          "BX": null,
          "KN": null,
          "KU": 20903,
          "SC": 15969,
          "ST": 26678,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "sut-thiruvananthapuram",
    "collegeCode": "SUC",
    "collegeName": "SUT Accademy of Medical Sciences, Thiruvananthapuram",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 5843,
          "EZ": 6397,
          "MU": 7446,
          "LA": 9503,
          "DV": 8062,
          "VK": 7124,
          "BH": 6048,
          "BX": 6827,
          "KN": 10352,
          "KU": 20850,
          "SC": 16422,
          "ST": 27341,
          "EW": 10702
        }
      }
    ]
  },
  {
    "collegeId": "tra-kollam",
    "collegeCode": "TRM",
    "collegeName": "Travancore Medical College, Umayanalloor, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 4434,
          "EZ": 4511,
          "MU": 4578,
          "LA": 7308,
          "DV": 7465,
          "VK": 5483,
          "BH": 4441,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15855,
          "ST": 26187,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "gov-alappuzha",
    "collegeCode": "ALD",
    "collegeName": "Government Dental College, Alappuzha",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3473,
          "EZ": 3808,
          "MU": 3678,
          "LA": 5869,
          "DV": 9418,
          "VK": 3682,
          "BH": 7799,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 17740,
          "ST": 31374,
          "EW": 5451
        }
      }
    ]
  },
  {
    "collegeId": "gov-kozhikkode",
    "collegeCode": "KKD",
    "collegeName": "Govt. Dental College, Kozhikkode",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 2555,
          "EZ": 2776,
          "MU": 2590,
          "LA": 5287,
          "DV": 9137,
          "VK": 3016,
          "BH": 6306,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15487,
          "ST": 29490,
          "EW": 4252
        }
      }
    ]
  },
  {
    "collegeId": "gov-kannur",
    "collegeCode": "KND",
    "collegeName": "Government Dental College, Kannur",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3461,
          "EZ": 4828,
          "MU": 3702,
          "LA": 9527,
          "DV": 11139,
          "VK": 3929,
          "BH": 8016,
          "BX": 6220,
          "KN": 14937,
          "KU": 25543,
          "SC": 17951,
          "ST": 31731,
          "EW": 6230
        }
      }
    ]
  },
  {
    "collegeId": "gov-kottayam",
    "collegeCode": "KTD",
    "collegeName": "Govt. Dental College, Kottayam",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 3399,
          "EZ": 3733,
          "MU": 3418,
          "LA": 5552,
          "DV": null,
          "VK": null,
          "BH": 6238,
          "BX": 6126,
          "KN": 13922,
          "KU": 23890,
          "SC": 17353,
          "ST": null,
          "EW": 4486
        }
      }
    ]
  },
  {
    "collegeId": "gov-thrissur",
    "collegeCode": "TCD",
    "collegeName": "Govt. Dental College, Thrissur",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 3237,
          "EZ": 3517,
          "MU": 3303,
          "LA": 9079,
          "DV": 10773,
          "VK": 3295,
          "BH": 7764,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 17209,
          "ST": 29616,
          "EW": 5372
        }
      }
    ]
  },
  {
    "collegeId": "gov-thiruvananthapuram",
    "collegeCode": "TVD",
    "collegeName": "Govt. Dental College, Thiruvananthapuram",
    "collegeType": "Government",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 2897,
          "EZ": 3241,
          "MU": 3009,
          "LA": 5662,
          "DV": 8613,
          "VK": 3242,
          "BH": 6949,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 17221,
          "ST": 31053,
          "EW": 3952
        }
      }
    ]
  },
  {
    "collegeId": "al-thodupuzha",
    "collegeCode": "AAD",
    "collegeName": "Al Azhar Dental College, Thodupuzha",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 17968,
          "EZ": 21124,
          "MU": 21081,
          "LA": 22573,
          "DV": 22351,
          "VK": 24802,
          "BH": 19696,
          "BX": 20020,
          "KN": 23863,
          "KU": 33012,
          "SC": 21983,
          "ST": 32567,
          "EW": 42370
        }
      }
    ]
  },
  {
    "collegeId": "ann-muvattupuzha",
    "collegeCode": "ADC",
    "collegeName": "Annoor Dental College, Puthuppady, Muvattupuzha",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 15495,
          "EZ": 18708,
          "MU": 16502,
          "LA": 16520,
          "DV": 16477,
          "VK": 16922,
          "BH": 15690,
          "BX": null,
          "KN": 22638,
          "KU": null,
          "SC": 18920,
          "ST": 35448,
          "EW": 37442
        }
      }
    ]
  },
  {
    "collegeId": "sre-kozhikode",
    "collegeCode": "AID",
    "collegeName": "Sree Anjaneya Institue of Dental Scinces, Atholi, Kozhikode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 22722,
          "EZ": 28938,
          "MU": 24546,
          "LA": 28293,
          "DV": 24209,
          "VK": 28882,
          "BH": 24453,
          "BX": 24220,
          "KN": 23897,
          "KU": 37360,
          "SC": 25133,
          "ST": 40133,
          "EW": 32920
        }
      }
    ]
  },
  {
    "collegeId": "aze-kollam",
    "collegeCode": "AZD",
    "collegeName": "Azeezia College of Dental Science, Meyyannoor, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 19249,
          "EZ": 21834,
          "MU": 21532,
          "LA": 22603,
          "DV": 23383,
          "VK": 22377,
          "BH": 21928,
          "BX": null,
          "KN": 26919,
          "KU": 27474,
          "SC": 21982,
          "ST": 38057,
          "EW": 42273
        }
      }
    ]
  },
  {
    "collegeId": "edu-malappuram",
    "collegeCode": "EID",
    "collegeName": "Educare Institute of Dental Sciences, Malappuram",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 22003,
          "EZ": 27104,
          "MU": 22959,
          "LA": 27966,
          "DV": 25008,
          "VK": 27131,
          "BH": 23644,
          "BX": 24961,
          "KN": 25507,
          "KU": 37966,
          "SC": 24738,
          "ST": 40358,
          "EW": 31012
        }
      }
    ]
  },
  {
    "collegeId": "ind-kothamangalam",
    "collegeCode": "IGD",
    "collegeName": "Indira Gandhi Institute of Dental Sciences, Kothamangalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 21150,
          "EZ": 24161,
          "MU": 23271,
          "LA": 25574,
          "DV": 22992,
          "VK": 25814,
          "BH": 23309,
          "BX": 22969,
          "KN": 24246,
          "KU": 26530,
          "SC": 23839,
          "ST": 36474,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "kan-kannur",
    "collegeCode": "KAD",
    "collegeName": "Kannur Dental College, Anjarakandy, Kannur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 25032,
          "EZ": 31113,
          "MU": 27319,
          "LA": 28740,
          "DV": 26402,
          "VK": 29429,
          "BH": 25371,
          "BX": 25269,
          "KN": 26397,
          "KU": 32656,
          "SC": 25695,
          "ST": 43449,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "kmc-kozhikode",
    "collegeCode": "KMD",
    "collegeName": "KMCT Dental College, Mambatta, Mukkam, Kozhikode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 13281,
          "EZ": 16296,
          "MU": 13784,
          "LA": 20350,
          "DV": 18165,
          "VK": 14849,
          "BH": 13845,
          "BX": 19288,
          "KN": 19685,
          "KU": 30503,
          "SC": 20948,
          "ST": 34125,
          "EW": 31251
        }
      }
    ]
  },
  {
    "collegeId": "mar-kothamangalam",
    "collegeCode": "MBD",
    "collegeName": "Mar Baselious Dental College, Kothamangalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 11530,
          "EZ": 12794,
          "MU": 13769,
          "LA": 14734,
          "DV": 11757,
          "VK": 12366,
          "BH": 13382,
          "BX": 14512,
          "KN": null,
          "KU": null,
          "SC": 19471,
          "ST": 34011,
          "EW": 18094
        }
      }
    ]
  },
  {
    "collegeId": "mes-perinthalmanna",
    "collegeCode": "MED",
    "collegeName": "MES Dental College, Perinthalmanna",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 15226,
          "EZ": 19951,
          "MU": 16487,
          "LA": 24102,
          "DV": 18913,
          "VK": 19226,
          "BH": 16700,
          "BX": 20887,
          "KN": 22261,
          "KU": 30822,
          "SC": 22789,
          "ST": 39276,
          "EW": 41385
        }
      }
    ]
  },
  {
    "collegeId": "mal-edappal",
    "collegeCode": "MLD",
    "collegeName": "Malabar Dental College, Edappal",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 21839,
          "EZ": 26878,
          "MU": 23929,
          "LA": 27462,
          "DV": 24594,
          "VK": 26320,
          "BH": 23227,
          "BX": 23543,
          "KN": 22336,
          "KU": 27698,
          "SC": 24761,
          "ST": 40831,
          "EW": 41008
        }
      }
    ]
  },
  {
    "collegeId": "noo-neyyattinkara",
    "collegeCode": "NID",
    "collegeName": "Noorul Islam College of Dental Science, Neyyattinkara",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 21474,
          "EZ": 24233,
          "MU": 22490,
          "LA": 23209,
          "DV": 25990,
          "VK": 25683,
          "BH": 22210,
          "BX": 21855,
          "KN": null,
          "KU": 30071,
          "SC": 23688,
          "ST": 40190,
          "EW": 31889
        }
      }
    ]
  },
  {
    "collegeId": "pus-thiruvalla",
    "collegeCode": "PMD",
    "collegeName": "Pushpagiri College of Dental Science, Thiruvalla",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 8887,
          "EZ": 10650,
          "MU": 11028,
          "LA": 11758,
          "DV": null,
          "VK": null,
          "BH": 8967,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 18265,
          "ST": null,
          "EW": 10460
        }
      }
    ]
  },
  {
    "collegeId": "pms-tvpm",
    "collegeCode": "PMS",
    "collegeName": "PMS College of Dental Sciences, Vattappara, TVPM",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 14260,
          "EZ": 17108,
          "MU": 15908,
          "LA": 18713,
          "DV": 14800,
          "VK": 14754,
          "BH": 15548,
          "BX": 16540,
          "KN": 17616,
          "KU": 27605,
          "SC": 21197,
          "ST": 32084,
          "EW": 22045
        }
      }
    ]
  },
  {
    "collegeId": "psm-thrissur",
    "collegeCode": "PSD",
    "collegeName": "PSM College of Dental Sciences, Thrissur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 21032,
          "EZ": 23196,
          "MU": 22214,
          "LA": 24975,
          "DV": 22721,
          "VK": 25380,
          "BH": 22388,
          "BX": 22299,
          "KN": 23291,
          "KU": 27237,
          "SC": 24069,
          "ST": 39207,
          "EW": 39220
        }
      }
    ]
  },
  {
    "collegeId": "roy-palakkad",
    "collegeCode": "RDC",
    "collegeName": "Royal Dental College, Chalisery, Palakkad",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 19996,
          "EZ": 23733,
          "MU": 20883,
          "LA": 22493,
          "DV": 22985,
          "VK": 23033,
          "BH": 20604,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 23455,
          "ST": 41933,
          "EW": 38579
        }
      }
    ]
  },
  {
    "collegeId": "st-kothamangalam",
    "collegeCode": "SGD",
    "collegeName": "St. Gregorios Dental College, Chelad, Kothamangalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 16595,
          "EZ": 19230,
          "MU": 17734,
          "LA": 18148,
          "DV": 16609,
          "VK": null,
          "BH": 16647,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 22759,
          "ST": 37397,
          "EW": 24895
        }
      }
    ]
  },
  {
    "collegeId": "sri-varkala",
    "collegeCode": "SVD",
    "collegeName": "Sri Sankara Dental College, Akathumuri, Varkala",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 24416,
          "EZ": 29701,
          "MU": 27092,
          "LA": 27208,
          "DV": 25552,
          "VK": 27616,
          "BH": 24850,
          "BX": 24497,
          "KN": 27058,
          "KU": 37708,
          "SC": 25541,
          "ST": 40683,
          "EW": 43690
        }
      }
    ]
  },
  {
    "collegeId": "tra-kollam",
    "collegeCode": "TRD",
    "collegeName": "Travancore DentalCollege, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "First Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 16413,
          "EZ": 19570,
          "MU": 18288,
          "LA": null,
          "DV": 22681,
          "VK": 19778,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 18488,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "t-alappuzha",
    "collegeCode": "ALP",
    "collegeName": "T D Govt. Medical College, Alappuzha",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 787,
          "EZ": 996,
          "MU": 826,
          "LA": 2103,
          "DV": 5062,
          "VK": 1392,
          "BH": 1242,
          "BX": 1495,
          "KN": 7817,
          "KU": 8753,
          "SC": 10163,
          "ST": 20723,
          "EW": 1753
        }
      }
    ]
  },
  {
    "collegeId": "gov-ernakulam",
    "collegeCode": "CMC",
    "collegeName": "Govt. Medical College, Ernakulam",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 859,
          "EZ": 1086,
          "MU": 975,
          "LA": 2189,
          "DV": 4817,
          "VK": 1439,
          "BH": 1277,
          "BX": 1602,
          "KN": 7990,
          "KU": 15753,
          "SC": 10791,
          "ST": 19298,
          "EW": 1943
        }
      }
    ]
  },
  {
    "collegeId": "gov-idukki",
    "collegeCode": "IDM",
    "collegeName": "Government Medical College Idukki",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 1721,
          "MU": 1105,
          "LA": 3296,
          "DV": 6307,
          "VK": 2556,
          "BH": 1902,
          "BX": 2674,
          "KN": 9811,
          "KU": 20214,
          "SC": 14458,
          "ST": 20938,
          "EW": 2842
        }
      }
    ]
  },
  {
    "collegeId": "gov-kozhikkode",
    "collegeCode": "KKM",
    "collegeName": "Govt. Medical College, Kozhikkode",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 234,
          "EZ": 475,
          "MU": 280,
          "LA": 1020,
          "DV": 3098,
          "VK": 583,
          "BH": 529,
          "BX": 1149,
          "KN": 4225,
          "KU": 7188,
          "SC": 5623,
          "ST": 11656,
          "EW": 1104
        }
      }
    ]
  },
  {
    "collegeId": "gov-kollam",
    "collegeCode": "KLM",
    "collegeName": "Govt. Medical College, Parippally, Kollam",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 852,
          "EZ": 1276,
          "MU": 1010,
          "LA": 2496,
          "DV": 5454,
          "VK": 1819,
          "BH": 1341,
          "BX": 2039,
          "KN": 8828,
          "KU": null,
          "SC": 10661,
          "ST": 20179,
          "EW": 2246
        }
      }
    ]
  },
  {
    "collegeId": "gov-kannur",
    "collegeCode": "KNM",
    "collegeName": "Government Medical College Kannur",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 861,
          "EZ": 1172,
          "MU": 963,
          "LA": 2485,
          "DV": 5400,
          "VK": 1536,
          "BH": 1154,
          "BX": 1724,
          "KN": 8315,
          "KU": 16743,
          "SC": 10321,
          "ST": 22920,
          "EW": 2153
        }
      }
    ]
  },
  {
    "collegeId": "gov-kasaragod",
    "collegeCode": "KSM",
    "collegeName": "Govt. Medical College, Kasaragod",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 1839,
          "MU": 1134,
          "LA": 3680,
          "DV": 7450,
          "VK": 3119,
          "BH": 2520,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15211,
          "ST": 24479,
          "EW": 3258
        }
      }
    ]
  },
  {
    "collegeId": "gov-kottayam",
    "collegeCode": "KTM",
    "collegeName": "Govt. Medical College, Kottayam",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 593,
          "EZ": 733,
          "MU": 644,
          "LA": 1200,
          "DV": 3887,
          "VK": 820,
          "BH": 799,
          "BX": 1351,
          "KN": 6247,
          "KU": 14879,
          "SC": 9173,
          "ST": 17812,
          "EW": 1496
        }
      }
    ]
  },
  {
    "collegeId": "gov-manjeri",
    "collegeCode": "MLP",
    "collegeName": "Govt. Medical College, Manjeri",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 830,
          "EZ": 1166,
          "MU": 871,
          "LA": 2420,
          "DV": 5541,
          "VK": 1908,
          "BH": 1359,
          "BX": 1794,
          "KN": 8088,
          "KU": 16959,
          "SC": 11163,
          "ST": 21411,
          "EW": 2109
        }
      }
    ]
  },
  {
    "collegeId": "gov-palakkad",
    "collegeCode": "PKM",
    "collegeName": "Government Medical College, Palakkad",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 1297,
          "MU": 1035,
          "LA": 2573,
          "DV": null,
          "VK": null,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15085,
          "ST": 22753,
          "EW": 2656
        }
      }
    ]
  },
  {
    "collegeId": "gov-pathanamthitta",
    "collegeCode": "PTM",
    "collegeName": "Government Medical College, Konni, Pathanamthitta",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 1622,
          "MU": 1055,
          "LA": 2604,
          "DV": 6514,
          "VK": 2332,
          "BH": 1892,
          "BX": 2396,
          "KN": 8873,
          "KU": 19105,
          "SC": 12462,
          "ST": 24871,
          "EW": 2686
        }
      }
    ]
  },
  {
    "collegeId": "gov-thrissur",
    "collegeCode": "TCM",
    "collegeName": "Govt. Medical College, Thrissur",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 553,
          "EZ": 794,
          "MU": 603,
          "LA": 1934,
          "DV": 4531,
          "VK": 1223,
          "BH": 849,
          "BX": 1421,
          "KN": 6595,
          "KU": 10556,
          "SC": 8673,
          "ST": 18453,
          "EW": 1746
        }
      }
    ]
  },
  {
    "collegeId": "gov-thiruvananthapuram",
    "collegeCode": "TVM",
    "collegeName": "Govt. Medical College, Thiruvananthapuram",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 370,
          "EZ": 611,
          "MU": 450,
          "LA": 789,
          "DV": 3297,
          "VK": 760,
          "BH": 690,
          "BX": 502,
          "KN": 4808,
          "KU": 14155,
          "SC": 8701,
          "ST": 17277,
          "EW": 1328
        }
      }
    ]
  },
  {
    "collegeId": "gov-wayanad",
    "collegeCode": "WYM",
    "collegeName": "Govt. Medical College, Wayanad",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 1899,
          "MU": 1108,
          "LA": 3457,
          "DV": 8062,
          "VK": 2973,
          "BH": 2748,
          "BX": 2849,
          "KN": null,
          "KU": 24407,
          "SC": 15228,
          "ST": 25421,
          "EW": 3005
        }
      }
    ]
  },
  {
    "collegeId": "al-thodupuzha",
    "collegeCode": "AAM",
    "collegeName": "Al Azhar Medical college, Thodupuzha",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 9793,
          "EZ": 10222,
          "MU": 10314,
          "LA": 12596,
          "DV": 10328,
          "VK": 12366,
          "BH": 9932,
          "BX": 10546,
          "KN": 13922,
          "KU": 25834,
          "SC": 17803,
          "ST": 27405,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "ama-thrissur",
    "collegeCode": "AMC",
    "collegeName": "Amala Institute of Medical Sciences, Thrissur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 2567,
          "EZ": 2672,
          "MU": 2580,
          "LA": null,
          "DV": 6594,
          "VK": 4485,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 12876,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "aze-kollam",
    "collegeCode": "AZC",
    "collegeName": "Azeezia Institute of Medi Science, Meyyannoor, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 7984,
          "EZ": 8561,
          "MU": 8495,
          "LA": 10190,
          "DV": null,
          "VK": null,
          "BH": 8412,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 16631,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "bel-thiruvalla",
    "collegeCode": "BCM",
    "collegeName": "Believers Church Medical College Hospital, Thiruvalla",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3497,
          "EZ": 3704,
          "MU": 4134,
          "LA": 4179,
          "DV": null,
          "VK": null,
          "BH": 3579,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15750,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "dr-wayanad",
    "collegeCode": "DMM",
    "collegeName": "Dr. Moopens Medical College, Meppadi, Wayanad",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 8319,
          "EZ": 9423,
          "MU": 9011,
          "LA": 11372,
          "DV": 10394,
          "VK": 9638,
          "BH": 8739,
          "BX": 11707,
          "KN": 11425,
          "KU": 26025,
          "SC": 17696,
          "ST": 25110,
          "EW": 16791
        }
      }
    ]
  },
  {
    "collegeId": "mes-malappuram",
    "collegeCode": "EMC",
    "collegeName": "MES Medical College, Perinthalmanna, Malappuram",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3463,
          "EZ": 4042,
          "MU": 3556,
          "LA": 7496,
          "DV": 7307,
          "VK": 4731,
          "BH": 3822,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15760,
          "ST": 25601,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "sre-tvpm",
    "collegeCode": "GMC",
    "collegeName": "Sree Gokulam Medical College, Venjaramoodu, TVPM",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3836,
          "EZ": 4226,
          "MU": 4334,
          "LA": 7086,
          "DV": 8687,
          "VK": 5483,
          "BH": 4199,
          "BX": 5489,
          "KN": 8955,
          "KU": 16768,
          "SC": 15708,
          "ST": 26042,
          "EW": 8210
        }
      }
    ]
  },
  {
    "collegeId": "jub-thrisur",
    "collegeCode": "JMC",
    "collegeName": "Jubilee Mission Medical College, Thrisur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 2324,
          "EZ": 2432,
          "MU": 2401,
          "LA": 2953,
          "DV": 6799,
          "VK": null,
          "BH": null,
          "BX": null,
          "KN": 10280,
          "KU": 20246,
          "SC": 12062,
          "ST": 23192,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "kmc-kozikkode",
    "collegeCode": "KCM",
    "collegeName": "KMCT Medical College, Mukkom, Kozikkode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 5485,
          "EZ": 7003,
          "MU": 6074,
          "LA": 9140,
          "DV": 8940,
          "VK": 7667,
          "BH": 6400,
          "BX": 6124,
          "KN": 10147,
          "KU": 22030,
          "SC": 16713,
          "ST": 26857,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "p-ottapalam",
    "collegeCode": "KDM",
    "collegeName": "P K Das Institute of Medical Sciences, Ottapalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 9369,
          "EZ": 10173,
          "MU": 10815,
          "LA": 12488,
          "DV": 9557,
          "VK": 11767,
          "BH": 9645,
          "BX": 10169,
          "KN": 11078,
          "KU": 24308,
          "SC": 17779,
          "ST": 29304,
          "EW": 18705
        }
      }
    ]
  },
  {
    "collegeId": "kar-palakkad",
    "collegeCode": "KMM",
    "collegeName": "Karuna Medical College, Vilayodi, Palakkad",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 8243,
          "EZ": 9115,
          "MU": 8406,
          "LA": 12896,
          "DV": null,
          "VK": null,
          "BH": 8443,
          "BX": 10583,
          "KN": 11112,
          "KU": null,
          "SC": 17402,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "mal-kolenchery",
    "collegeCode": "MMC",
    "collegeName": "Malankara Orthodox Syrian Church MediCollege, Kolenchery",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 2961,
          "EZ": 3128,
          "MU": 3121,
          "LA": 5237,
          "DV": null,
          "VK": 4563,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15479,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "mal-kozhikkode",
    "collegeCode": "MMH",
    "collegeName": "Malabar Medical College Hospital, Kozhikkode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 5841,
          "EZ": 7707,
          "MU": 7360,
          "LA": 9810,
          "DV": 8552,
          "VK": 7259,
          "BH": 6343,
          "BX": 7104,
          "KN": 10759,
          "KU": 20903,
          "SC": 17020,
          "ST": 26274,
          "EW": 11986
        }
      }
    ]
  },
  {
    "collegeId": "mou-pathanamthitta",
    "collegeCode": "MZM",
    "collegeName": "Mount Zion Medical College, Pathanamthitta",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 8989,
          "EZ": 9138,
          "MU": 11047,
          "LA": 11227,
          "DV": null,
          "VK": null,
          "BH": 9196,
          "BX": 10088,
          "KN": 11407,
          "KU": 25845,
          "SC": 17070,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "pal-walayar",
    "collegeCode": "PIM",
    "collegeName": "Palakkad Institute of Medical Sciences, Walayar",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 10108,
          "EZ": 10277,
          "MU": 11858,
          "LA": 11305,
          "DV": 10451,
          "VK": 12231,
          "BH": 10288,
          "BX": 11449,
          "KN": 14509,
          "KU": 22645,
          "SC": 17872,
          "ST": 29388,
          "EW": 18733
        }
      }
    ]
  },
  {
    "collegeId": "pus-thiruvalla",
    "collegeCode": "PMC",
    "collegeName": "Pushpagiri Institute of Medical Science, Thiruvalla",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3095,
          "EZ": 3244,
          "MU": 3176,
          "LA": null,
          "DV": null,
          "VK": 4208,
          "BH": 3155,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 13397,
          "ST": 26187,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "sre-ernakulam",
    "collegeCode": "SIM",
    "collegeName": "Sree Narayana Institute of Medical Sciences, Chalakka, Ernakulam.",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 7874,
          "EZ": 8515,
          "MU": 9761,
          "LA": 9503,
          "DV": 8298,
          "VK": 10921,
          "BH": 8324,
          "BX": 10113,
          "KN": 10957,
          "KU": 19018,
          "SC": 17221,
          "ST": 28517,
          "EW": 15158
        }
      }
    ]
  },
  {
    "collegeId": "dr-karakonam",
    "collegeCode": "SMC",
    "collegeName": "Dr. Somervell Memorial CSI Medical College, Karakonam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 6410,
          "EZ": 7466,
          "MU": 8055,
          "LA": 8434,
          "DV": 7547,
          "VK": null,
          "BH": 6609,
          "BX": null,
          "KN": null,
          "KU": 22213,
          "SC": 16209,
          "ST": 26678,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "sut-thiruvananthapuram",
    "collegeCode": "SUC",
    "collegeName": "SUT Accademy of Medical Sciences, Thiruvananthapuram",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 6956,
          "EZ": 8019,
          "MU": 9513,
          "LA": 10651,
          "DV": 9906,
          "VK": 9263,
          "BH": 7498,
          "BX": 10430,
          "KN": 11377,
          "KU": 20850,
          "SC": 17204,
          "ST": 28082,
          "EW": 12232
        }
      }
    ]
  },
  {
    "collegeId": "tra-kollam",
    "collegeCode": "TRM",
    "collegeName": "Travancore Medical College, Umayanalloor, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 5298,
          "EZ": 5837,
          "MU": 5910,
          "LA": 7308,
          "DV": 7465,
          "VK": 8000,
          "BH": 5980,
          "BX": 7247,
          "KN": null,
          "KU": null,
          "SC": 16162,
          "ST": 28460,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "gov-alappuzha",
    "collegeCode": "ALD",
    "collegeName": "Government Dental College, Alappuzha",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3648,
          "EZ": 4241,
          "MU": 3914,
          "LA": 5869,
          "DV": 11139,
          "VK": 4034,
          "BH": 7799,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 18488,
          "ST": 32482,
          "EW": 6230
        }
      }
    ]
  },
  {
    "collegeId": "gov-kozhikkode",
    "collegeCode": "KKD",
    "collegeName": "Govt. Dental College, Kozhikkode",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 2603,
          "EZ": 2782,
          "MU": 2759,
          "LA": 5287,
          "DV": 9137,
          "VK": 3295,
          "BH": 8917,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 17435,
          "ST": 31374,
          "EW": 4486
        }
      }
    ]
  },
  {
    "collegeId": "gov-kannur",
    "collegeCode": "KND",
    "collegeName": "Government Dental College, Kannur",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 3644,
          "EZ": 4999,
          "MU": 3912,
          "LA": 9527,
          "DV": 11757,
          "VK": 3929,
          "BH": 8971,
          "BX": 6220,
          "KN": 15404,
          "KU": 25543,
          "SC": 18804,
          "ST": 31731,
          "EW": 7098
        }
      }
    ]
  },
  {
    "collegeId": "gov-kottayam",
    "collegeCode": "KTD",
    "collegeName": "Govt. Dental College, Kottayam",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 3525,
          "EZ": 3808,
          "MU": 3605,
          "LA": 5552,
          "DV": null,
          "VK": null,
          "BH": 8016,
          "BX": 6126,
          "KN": 14937,
          "KU": 26530,
          "SC": 18261,
          "ST": null,
          "EW": 5410
        }
      }
    ]
  },
  {
    "collegeId": "gov-thrissur",
    "collegeCode": "TCD",
    "collegeName": "Govt. Dental College, Thrissur",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 3274,
          "EZ": 3778,
          "MU": 3418,
          "LA": 9079,
          "DV": 11198,
          "VK": 3641,
          "BH": 8141,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 18085,
          "ST": 32433,
          "EW": 5451
        }
      }
    ]
  },
  {
    "collegeId": "gov-thiruvananthapuram",
    "collegeCode": "TVD",
    "collegeName": "Govt. Dental College, Thiruvananthapuram",
    "collegeType": "Government",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 3096,
          "EZ": 3751,
          "MU": 3419,
          "LA": 5662,
          "DV": 10773,
          "VK": 3242,
          "BH": 6949,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 17951,
          "ST": 31053,
          "EW": 4635
        }
      }
    ]
  },
  {
    "collegeId": "al-thodupuzha",
    "collegeCode": "AAD",
    "collegeName": "Al Azhar Dental College, Thodupuzha",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 24375,
          "EZ": 31803,
          "MU": 28329,
          "LA": 29314,
          "DV": 26789,
          "VK": 28882,
          "BH": 26583,
          "BX": 25063,
          "KN": 29702,
          "KU": 33012,
          "SC": 27072,
          "ST": 32567,
          "EW": 42370
        }
      }
    ]
  },
  {
    "collegeId": "ann-muvattupuzha",
    "collegeCode": "ADC",
    "collegeName": "Annoor Dental College, Puthuppady, Muvattupuzha",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 17346,
          "EZ": 20956,
          "MU": 18950,
          "LA": 22493,
          "DV": 22351,
          "VK": 24712,
          "BH": 19415,
          "BX": null,
          "KN": 22638,
          "KU": null,
          "SC": 21273,
          "ST": 35448,
          "EW": 37442
        }
      }
    ]
  },
  {
    "collegeId": "sre-kozhikode",
    "collegeCode": "AID",
    "collegeName": "Sree Anjaneya Institue of Dental Scinces, Atholi, Kozhikode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 25844,
          "EZ": 37514,
          "MU": 29076,
          "LA": 32096,
          "DV": 27740,
          "VK": 32056,
          "BH": 28835,
          "BX": 27041,
          "KN": 30156,
          "KU": 40633,
          "SC": 29697,
          "ST": 41933,
          "EW": 32920
        }
      }
    ]
  },
  {
    "collegeId": "aze-kollam",
    "collegeCode": "AZD",
    "collegeName": "Azeezia College of Dental Science, Meyyannoor, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 24416,
          "EZ": 33885,
          "MU": 25954,
          "LA": 28263,
          "DV": 25008,
          "VK": 24802,
          "BH": 25101,
          "BX": null,
          "KN": 26919,
          "KU": 37966,
          "SC": 27714,
          "ST": 44704,
          "EW": 42273
        }
      }
    ]
  },
  {
    "collegeId": "edu-malappuram",
    "collegeCode": "EID",
    "collegeName": "Educare Institute of Dental Sciences, Malappuram",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 26922,
          "EZ": 36234,
          "MU": 29510,
          "LA": 30607,
          "DV": 28874,
          "VK": 33828,
          "BH": 28993,
          "BX": 27798,
          "KN": 30018,
          "KU": 38014,
          "SC": 28906,
          "ST": 40831,
          "EW": 31012
        }
      }
    ]
  },
  {
    "collegeId": "ind-kothamangalam",
    "collegeCode": "IGD",
    "collegeName": "Indira Gandhi Institute of Dental Sciences, Kothamangalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 25347,
          "EZ": 34194,
          "MU": 29853,
          "LA": 30280,
          "DV": 26402,
          "VK": 29429,
          "BH": 27095,
          "BX": 27371,
          "KN": 27058,
          "KU": 27474,
          "SC": 28336,
          "ST": 43969,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "kan-kannur",
    "collegeCode": "KAD",
    "collegeName": "Kannur Dental College, Anjarakandy, Kannur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 29722,
          "EZ": 38952,
          "MU": 33334,
          "LA": 34260,
          "DV": 29792,
          "VK": 33435,
          "BH": 29865,
          "BX": 29815,
          "KN": 32879,
          "KU": 32656,
          "SC": 30414,
          "ST": 42669,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "kmc-kozhikode",
    "collegeCode": "KMD",
    "collegeName": "KMCT Dental College, Mambatta, Mukkam, Kozhikode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 14690,
          "EZ": 17539,
          "MU": 16241,
          "LA": 20350,
          "DV": 18165,
          "VK": 20868,
          "BH": 16225,
          "BX": 19288,
          "KN": 19685,
          "KU": 30503,
          "SC": 22819,
          "ST": 37397,
          "EW": 29366
        }
      }
    ]
  },
  {
    "collegeId": "mar-kothamangalam",
    "collegeCode": "MBD",
    "collegeName": "Mar Baselious Dental College, Kothamangalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 13646,
          "EZ": 16924,
          "MU": 14036,
          "LA": 14734,
          "DV": 14027,
          "VK": 15154,
          "BH": 13845,
          "BX": 14512,
          "KN": null,
          "KU": null,
          "SC": 20834,
          "ST": 34011,
          "EW": 17399
        }
      }
    ]
  },
  {
    "collegeId": "mes-perinthalmanna",
    "collegeCode": "MED",
    "collegeName": "MES Dental College, Perinthalmanna",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 18353,
          "EZ": 29349,
          "MU": 19451,
          "LA": 29806,
          "DV": 20162,
          "VK": 24197,
          "BH": 20662,
          "BX": 20887,
          "KN": 22261,
          "KU": 30822,
          "SC": 25133,
          "ST": 39276,
          "EW": 41385
        }
      }
    ]
  },
  {
    "collegeId": "mal-edappal",
    "collegeCode": "MLD",
    "collegeName": "Malabar Dental College, Edappal",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 26493,
          "EZ": 35915,
          "MU": 29320,
          "LA": 30486,
          "DV": 27387,
          "VK": 29924,
          "BH": 27163,
          "BX": 28498,
          "KN": 32806,
          "KU": 27698,
          "SC": 29309,
          "ST": null,
          "EW": 36626
        }
      }
    ]
  },
  {
    "collegeId": "noo-neyyattinkara",
    "collegeCode": "NID",
    "collegeName": "Noorul Islam College of Dental Science, Neyyattinkara",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 24233,
          "EZ": 33485,
          "MU": 31144,
          "LA": 24716,
          "DV": 27400,
          "VK": 25683,
          "BH": 24721,
          "BX": 25269,
          "KN": null,
          "KU": 40611,
          "SC": 28135,
          "ST": 40190,
          "EW": 36880
        }
      }
    ]
  },
  {
    "collegeId": "pus-thiruvalla",
    "collegeCode": "PMD",
    "collegeName": "Pushpagiri College of Dental Science, Thiruvalla",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 9893,
          "EZ": 11530,
          "MU": 14850,
          "LA": 18148,
          "DV": null,
          "VK": null,
          "BH": 13561,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 19249,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "pms-tvpm",
    "collegeCode": "PMS",
    "collegeName": "PMS College of Dental Sciences, Vattappara, TVPM",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 16175,
          "EZ": 18658,
          "MU": 18090,
          "LA": 22573,
          "DV": 18093,
          "VK": 19226,
          "BH": 16606,
          "BX": 16540,
          "KN": 17616,
          "KU": 27605,
          "SC": 21305,
          "ST": 32084,
          "EW": 21057
        }
      }
    ]
  },
  {
    "collegeId": "psm-thrissur",
    "collegeCode": "PSD",
    "collegeName": "PSM College of Dental Sciences, Thrissur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 23291,
          "EZ": 32067,
          "MU": 29690,
          "LA": 28722,
          "DV": 24891,
          "VK": 31380,
          "BH": 25032,
          "BX": 24497,
          "KN": 26397,
          "KU": 27237,
          "SC": 28386,
          "ST": 43449,
          "EW": 39220
        }
      }
    ]
  },
  {
    "collegeId": "roy-palakkad",
    "collegeCode": "RDC",
    "collegeName": "Royal Dental College, Chalisery, Palakkad",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 23853,
          "EZ": 33960,
          "MU": 28464,
          "LA": 29539,
          "DV": 26902,
          "VK": 28956,
          "BH": 24627,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 27141,
          "ST": null,
          "EW": 36778
        }
      }
    ]
  },
  {
    "collegeId": "st-kothamangalam",
    "collegeCode": "SGD",
    "collegeName": "St. Gregorios Dental College, Chelad, Kothamangalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 19091,
          "EZ": 21124,
          "MU": 21081,
          "LA": 19693,
          "DV": 25990,
          "VK": null,
          "BH": 19696,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 24312,
          "ST": 38057,
          "EW": 24895
        }
      }
    ]
  },
  {
    "collegeId": "sri-varkala",
    "collegeCode": "SVD",
    "collegeName": "Sri Sankara Dental College, Akathumuri, Varkala",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 28112,
          "EZ": 37515,
          "MU": 32820,
          "LA": 32279,
          "DV": 28433,
          "VK": 32545,
          "BH": 29312,
          "BX": 28571,
          "KN": 34150,
          "KU": 37708,
          "SC": 29787,
          "ST": null,
          "EW": 39698
        }
      }
    ]
  },
  {
    "collegeId": "tra-kollam",
    "collegeCode": "TRD",
    "collegeName": "Travancore DentalCollege, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Second Phase Allotment",
    "courses": [
      {
        "courseName": "BDS",
        "cutoffs": {
          "SM": 19778,
          "EZ": 21405,
          "MU": 25835,
          "LA": null,
          "DV": 22681,
          "VK": 26606,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 21479,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "t-alappuzha",
    "collegeCode": "ALP",
    "collegeName": "T D Govt. Medical College, Alappuzha",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 857,
          "EZ": 1026,
          "MU": 1003,
          "LA": 2103,
          "DV": 5062,
          "VK": 1392,
          "BH": 1242,
          "BX": 1495,
          "KN": 7817,
          "KU": 8753,
          "SC": 10163,
          "ST": 20723,
          "EW": 1753
        }
      }
    ]
  },
  {
    "collegeId": "gov-ernakulam",
    "collegeCode": "CMC",
    "collegeName": "Govt. Medical College, Ernakulam",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 904,
          "EZ": 1161,
          "MU": 1101,
          "LA": 2189,
          "DV": 4817,
          "VK": 1439,
          "BH": 1364,
          "BX": 1602,
          "KN": 7990,
          "KU": 15753,
          "SC": 11164,
          "ST": 19298,
          "EW": 1943
        }
      }
    ]
  },
  {
    "collegeId": "gov-idukki",
    "collegeCode": "IDM",
    "collegeName": "Government Medical College Idukki",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 2362,
          "MU": 2373,
          "LA": 3296,
          "DV": 6307,
          "VK": 2556,
          "BH": 2328,
          "BX": 2674,
          "KN": 9811,
          "KU": 20214,
          "SC": 15439,
          "ST": 20938,
          "EW": 2842
        }
      }
    ]
  },
  {
    "collegeId": "gov-kozhikkode",
    "collegeCode": "KKM",
    "collegeName": "Govt. Medical College, Kozhikkode",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 234,
          "EZ": 475,
          "MU": 280,
          "LA": 1020,
          "DV": 3098,
          "VK": 583,
          "BH": 529,
          "BX": 1149,
          "KN": 4225,
          "KU": 7188,
          "SC": 5623,
          "ST": 11656,
          "EW": 1104
        }
      }
    ]
  },
  {
    "collegeId": "gov-kollam",
    "collegeCode": "KLM",
    "collegeName": "Govt. Medical College, Parippally, Kollam",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 852,
          "EZ": 1307,
          "MU": 1302,
          "LA": 2496,
          "DV": 5454,
          "VK": 1819,
          "BH": 1341,
          "BX": 2039,
          "KN": 8828,
          "KU": null,
          "SC": 10661,
          "ST": 20179,
          "EW": 2291
        }
      }
    ]
  },
  {
    "collegeId": "gov-kannur",
    "collegeCode": "KNM",
    "collegeName": "Government Medical College Kannur",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 902,
          "EZ": 1172,
          "MU": 1110,
          "LA": 2485,
          "DV": 5400,
          "VK": 1536,
          "BH": 1154,
          "BX": 1724,
          "KN": 8315,
          "KU": 16743,
          "SC": 10321,
          "ST": 22920,
          "EW": 2186
        }
      }
    ]
  },
  {
    "collegeId": "gov-kasaragod",
    "collegeCode": "KSM",
    "collegeName": "Govt. Medical College, Kasaragod",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 2409,
          "MU": 2394,
          "LA": 3689,
          "DV": 7450,
          "VK": 3104,
          "BH": 2916,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15624,
          "ST": 24479,
          "EW": 3467
        }
      }
    ]
  },
  {
    "collegeId": "gov-kottayam",
    "collegeCode": "KTM",
    "collegeName": "Govt. Medical College, Kottayam",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 594,
          "EZ": 815,
          "MU": 673,
          "LA": 1200,
          "DV": 3887,
          "VK": 820,
          "BH": 799,
          "BX": 1351,
          "KN": 6247,
          "KU": 14879,
          "SC": 9173,
          "ST": 17812,
          "EW": 1496
        }
      }
    ]
  },
  {
    "collegeId": "gov-manjeri",
    "collegeCode": "MLP",
    "collegeName": "Govt. Medical College, Manjeri",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 842,
          "EZ": 1213,
          "MU": 907,
          "LA": 2420,
          "DV": 5541,
          "VK": 1908,
          "BH": 1359,
          "BX": 1794,
          "KN": 8088,
          "KU": 16959,
          "SC": 11404,
          "ST": 21411,
          "EW": 2118
        }
      }
    ]
  },
  {
    "collegeId": "gov-palakkad",
    "collegeCode": "PKM",
    "collegeName": "Government Medical College, Palakkad",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 1686,
          "MU": 1580,
          "LA": 2573,
          "DV": null,
          "VK": null,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15239,
          "ST": 22753,
          "EW": 2709
        }
      }
    ]
  },
  {
    "collegeId": "gov-pathanamthitta",
    "collegeCode": "PTM",
    "collegeName": "Government Medical College, Konni, Pathanamthitta",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 1797,
          "MU": 2100,
          "LA": 2604,
          "DV": 6514,
          "VK": 2332,
          "BH": 1892,
          "BX": 2396,
          "KN": 8873,
          "KU": 19105,
          "SC": 12463,
          "ST": 24871,
          "EW": 2686
        }
      }
    ]
  },
  {
    "collegeId": "gov-thrissur",
    "collegeCode": "TCM",
    "collegeName": "Govt. Medical College, Thrissur",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 553,
          "EZ": 794,
          "MU": 603,
          "LA": 1934,
          "DV": 4531,
          "VK": 1223,
          "BH": 849,
          "BX": 1421,
          "KN": 6595,
          "KU": 10556,
          "SC": 8673,
          "ST": 18453,
          "EW": 1746
        }
      }
    ]
  },
  {
    "collegeId": "gov-thiruvananthapuram",
    "collegeCode": "TVM",
    "collegeName": "Govt. Medical College, Thiruvananthapuram",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 370,
          "EZ": 611,
          "MU": 450,
          "LA": 789,
          "DV": 3297,
          "VK": 760,
          "BH": 690,
          "BX": 502,
          "KN": 4808,
          "KU": 14155,
          "SC": 8701,
          "ST": 17277,
          "EW": 1328
        }
      }
    ]
  },
  {
    "collegeId": "gov-wayanad",
    "collegeCode": "WYM",
    "collegeName": "Govt. Medical College, Wayanad",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": null,
          "EZ": 2353,
          "MU": 2388,
          "LA": 3457,
          "DV": 8062,
          "VK": 3119,
          "BH": 2833,
          "BX": 2849,
          "KN": null,
          "KU": 24407,
          "SC": 15494,
          "ST": 25421,
          "EW": 3229
        }
      }
    ]
  },
  {
    "collegeId": "al-thodupuzha",
    "collegeCode": "AAM",
    "collegeName": "Al Azhar Medical college, Thodupuzha",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 10678,
          "EZ": 11120,
          "MU": 11925,
          "LA": 13481,
          "DV": 10971,
          "VK": 12385,
          "BH": 10856,
          "BX": 12255,
          "KN": 13922,
          "KU": 25834,
          "SC": 18029,
          "ST": 27405,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "ama-thrissur",
    "collegeCode": "AMC",
    "collegeName": "Amala Institute of Medical Sciences, Thrissur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 2678,
          "EZ": 2765,
          "MU": 2806,
          "LA": null,
          "DV": 6594,
          "VK": 4485,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 12876,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "aze-kollam",
    "collegeCode": "AZC",
    "collegeName": "Azeezia Institute of Medi Science, Meyyannoor, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 8561,
          "EZ": 10041,
          "MU": 10462,
          "LA": 10190,
          "DV": null,
          "VK": null,
          "BH": 9991,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 17935,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "bel-thiruvalla",
    "collegeCode": "BCM",
    "collegeName": "Believers Church Medical College Hospital, Thiruvalla",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3599,
          "EZ": 4250,
          "MU": 4592,
          "LA": 4179,
          "DV": null,
          "VK": null,
          "BH": 3942,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15750,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "dr-wayanad",
    "collegeCode": "DMM",
    "collegeName": "Dr. Moopens Medical College, Meppadi, Wayanad",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 8599,
          "EZ": 10229,
          "MU": 9553,
          "LA": 11372,
          "DV": 10394,
          "VK": 10487,
          "BH": 8796,
          "BX": 11707,
          "KN": 11425,
          "KU": 26025,
          "SC": 17696,
          "ST": 25110,
          "EW": 18864
        }
      }
    ]
  },
  {
    "collegeId": "mes-malappuram",
    "collegeCode": "EMC",
    "collegeName": "MES Medical College, Perinthalmanna, Malappuram",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3721,
          "EZ": 4042,
          "MU": 3772,
          "LA": 7496,
          "DV": 7307,
          "VK": 4731,
          "BH": 3822,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15760,
          "ST": 25601,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "sre-tvpm",
    "collegeCode": "GMC",
    "collegeName": "Sree Gokulam Medical College, Venjaramoodu, TVPM",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3930,
          "EZ": 4440,
          "MU": 4424,
          "LA": 7086,
          "DV": 8687,
          "VK": 5483,
          "BH": 4312,
          "BX": 5489,
          "KN": 8955,
          "KU": 16768,
          "SC": 15708,
          "ST": 26042,
          "EW": 9234
        }
      }
    ]
  },
  {
    "collegeId": "jub-thrisur",
    "collegeCode": "JMC",
    "collegeName": "Jubilee Mission Medical College, Thrisur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 2594,
          "EZ": 2738,
          "MU": 2640,
          "LA": 2953,
          "DV": 6799,
          "VK": null,
          "BH": null,
          "BX": null,
          "KN": 10280,
          "KU": 20246,
          "SC": 12062,
          "ST": 23192,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "kmc-kozikkode",
    "collegeCode": "KCM",
    "collegeName": "KMCT Medical College, Mukkom, Kozikkode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 6158,
          "EZ": 7981,
          "MU": 6597,
          "LA": 9140,
          "DV": 8940,
          "VK": 7667,
          "BH": 6646,
          "BX": 11449,
          "KN": 10147,
          "KU": 22030,
          "SC": 16993,
          "ST": 26857,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "p-ottapalam",
    "collegeCode": "KDM",
    "collegeName": "P K Das Institute of Medical Sciences, Ottapalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 9756,
          "EZ": 10910,
          "MU": 11493,
          "LA": 13326,
          "DV": 10771,
          "VK": 11767,
          "BH": 10519,
          "BX": 10169,
          "KN": 11078,
          "KU": 24308,
          "SC": 17967,
          "ST": 29420,
          "EW": 19325
        }
      }
    ]
  },
  {
    "collegeId": "ker-palakkad",
    "collegeCode": "KEM",
    "collegeName": "Kerala Medical College, Palakkad",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 6214,
          "EZ": 7043,
          "MU": 6354,
          "LA": 7623,
          "DV": null,
          "VK": 9533,
          "BH": 6699,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 16633,
          "ST": 28819,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "kar-palakkad",
    "collegeCode": "KMM",
    "collegeName": "Karuna Medical College, Vilayodi, Palakkad",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 9844,
          "EZ": 10407,
          "MU": 10343,
          "LA": 13046,
          "DV": null,
          "VK": null,
          "BH": 10247,
          "BX": 10583,
          "KN": 11112,
          "KU": null,
          "SC": 18003,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "mal-kolenchery",
    "collegeCode": "MMC",
    "collegeName": "Malankara Orthodox Syrian Church MediCollege, Kolenchery",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3198,
          "EZ": 3417,
          "MU": 3541,
          "LA": 5237,
          "DV": null,
          "VK": 4563,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 15479,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "mal-kozhikkode",
    "collegeCode": "MMH",
    "collegeName": "Malabar Medical College Hospital, Kozhikkode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 5979,
          "EZ": 7824,
          "MU": 7500,
          "LA": 9810,
          "DV": 8552,
          "VK": 7259,
          "BH": 6343,
          "BX": 7104,
          "KN": 10759,
          "KU": 20903,
          "SC": 17020,
          "ST": 26274,
          "EW": 17273
        }
      }
    ]
  },
  {
    "collegeId": "mou-pathanamthitta",
    "collegeCode": "MZM",
    "collegeName": "Mount Zion Medical College, Pathanamthitta",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 9556,
          "EZ": 10277,
          "MU": 12517,
          "LA": 11614,
          "DV": null,
          "VK": null,
          "BH": 9793,
          "BX": 10088,
          "KN": 11407,
          "KU": 25845,
          "SC": 17070,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "pal-walayar",
    "collegeCode": "PIM",
    "collegeName": "Palakkad Institute of Medical Sciences, Walayar",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 10841,
          "EZ": 11397,
          "MU": 12635,
          "LA": 11305,
          "DV": 10928,
          "VK": 12231,
          "BH": 10949,
          "BX": 12554,
          "KN": 14509,
          "KU": 22645,
          "SC": 18034,
          "ST": 29388,
          "EW": 18733
        }
      }
    ]
  },
  {
    "collegeId": "pus-thiruvalla",
    "collegeCode": "PMC",
    "collegeName": "Pushpagiri Institute of Medical Science, Thiruvalla",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3586,
          "EZ": 3758,
          "MU": 3619,
          "LA": null,
          "DV": null,
          "VK": 4208,
          "BH": 3638,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 13397,
          "ST": 26187,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "sre-ernakulam",
    "collegeCode": "SIM",
    "collegeName": "Sree Narayana Institute of Medical Sciences, Chalakka, Ernakulam.",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 8186,
          "EZ": 9743,
          "MU": 10565,
          "LA": 9503,
          "DV": 9137,
          "VK": 12276,
          "BH": 8378,
          "BX": 10113,
          "KN": 10957,
          "KU": 19018,
          "SC": 17221,
          "ST": 28517,
          "EW": 17625
        }
      }
    ]
  },
  {
    "collegeId": "dr-karakonam",
    "collegeCode": "SMC",
    "collegeName": "Dr. Somervell Memorial CSI Medical College, Karakonam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 6730,
          "EZ": 7466,
          "MU": 8055,
          "LA": 8434,
          "DV": 7547,
          "VK": null,
          "BH": 6869,
          "BX": null,
          "KN": null,
          "KU": 22213,
          "SC": 17251,
          "ST": 26678,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "sut-thiruvananthapuram",
    "collegeCode": "SUC",
    "collegeName": "SUT Accademy of Medical Sciences, Thiruvananthapuram",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 7597,
          "EZ": 9551,
          "MU": 10416,
          "LA": 10713,
          "DV": 10451,
          "VK": 11624,
          "BH": 8880,
          "BX": 10430,
          "KN": 11377,
          "KU": 20850,
          "SC": 17930,
          "ST": 29304,
          "EW": 14063
        }
      }
    ]
  },
  {
    "collegeId": "tra-kollam",
    "collegeCode": "TRM",
    "collegeName": "Travancore Medical College, Umayanalloor, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 5837,
          "EZ": 6495,
          "MU": 6104,
          "LA": 7308,
          "DV": 7465,
          "VK": 8000,
          "BH": 5980,
          "BX": 7247,
          "KN": null,
          "KU": null,
          "SC": 17743,
          "ST": 28460,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "gov-alappuzha",
    "collegeCode": "ALD",
    "collegeName": "Government Dental College, Alappuzha",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3774,
          "EZ": 5030,
          "MU": 4303,
          "LA": 5869,
          "DV": 11387,
          "VK": 4823,
          "BH": 7799,
          "BX": 10501,
          "KN": 19685,
          "KU": null,
          "SC": 19172,
          "ST": 32482,
          "EW": 6230
        }
      }
    ]
  },
  {
    "collegeId": "gov-kozhikkode",
    "collegeCode": "KKD",
    "collegeName": "Govt. Dental College, Kozhikkode",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 2771,
          "EZ": 4073,
          "MU": 2861,
          "LA": 5287,
          "DV": 11757,
          "VK": 3641,
          "BH": 9218,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 18265,
          "ST": 31374,
          "EW": 4486
        }
      }
    ]
  },
  {
    "collegeId": "gov-kannur",
    "collegeCode": "KND",
    "collegeName": "Government Dental College, Kannur",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3801,
          "EZ": 5626,
          "MU": 4295,
          "LA": 9527,
          "DV": 11994,
          "VK": 3929,
          "BH": 10997,
          "BX": 6220,
          "KN": 15404,
          "KU": 25543,
          "SC": 19187,
          "ST": 31731,
          "EW": 8451
        }
      }
    ]
  },
  {
    "collegeId": "gov-kottayam",
    "collegeCode": "KTD",
    "collegeName": "Govt. Dental College, Kottayam",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3605,
          "EZ": 3808,
          "MU": 3720,
          "LA": 5552,
          "DV": null,
          "VK": null,
          "BH": 8016,
          "BX": 6126,
          "KN": 14937,
          "KU": 26530,
          "SC": 19379,
          "ST": null,
          "EW": 5410
        }
      }
    ]
  },
  {
    "collegeId": "gov-thrissur",
    "collegeCode": "TCD",
    "collegeName": "Govt. Dental College, Thrissur",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3464,
          "EZ": 4730,
          "MU": 3702,
          "LA": 9079,
          "DV": 11198,
          "VK": 3901,
          "BH": 8141,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 18906,
          "ST": 32433,
          "EW": 6304
        }
      }
    ]
  },
  {
    "collegeId": "gov-thiruvananthapuram",
    "collegeCode": "TVD",
    "collegeName": "Govt. Dental College, Thiruvananthapuram",
    "collegeType": "Government",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 3242,
          "EZ": 4280,
          "MU": 3606,
          "LA": 5662,
          "DV": 11139,
          "VK": 3863,
          "BH": 6949,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 18347,
          "ST": 33820,
          "EW": 5451
        }
      }
    ]
  },
  {
    "collegeId": "al-thodupuzha",
    "collegeCode": "AAD",
    "collegeName": "Al Azhar Dental College, Thodupuzha",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 27230,
          "EZ": 36234,
          "MU": 31919,
          "LA": 29314,
          "DV": 29792,
          "VK": 32380,
          "BH": 31759,
          "BX": 30034,
          "KN": 39124,
          "KU": 33012,
          "SC": 29309,
          "ST": 32567,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "ann-muvattupuzha",
    "collegeCode": "ADC",
    "collegeName": "Annoor Dental College, Puthuppady, Muvattupuzha",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 18415,
          "EZ": 23749,
          "MU": 21808,
          "LA": 22493,
          "DV": 22351,
          "VK": 24712,
          "BH": 19415,
          "BX": null,
          "KN": 22638,
          "KU": null,
          "SC": 21273,
          "ST": 35448,
          "EW": 37442
        }
      }
    ]
  },
  {
    "collegeId": "sre-kozhikode",
    "collegeCode": "AID",
    "collegeName": "Sree Anjaneya Institue of Dental Scinces, Atholi, Kozhikode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 29512,
          "EZ": 43357,
          "MU": 34174,
          "LA": 35355,
          "DV": 30323,
          "VK": 32056,
          "BH": 32165,
          "BX": 30303,
          "KN": 34150,
          "KU": 42757,
          "SC": 31907,
          "ST": 41933,
          "EW": 32920
        }
      }
    ]
  },
  {
    "collegeId": "aze-kollam",
    "collegeCode": "AZD",
    "collegeName": "Azeezia College of Dental Science, Meyyannoor, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 29125,
          "EZ": 39634,
          "MU": 32110,
          "LA": 34260,
          "DV": 31489,
          "VK": 31380,
          "BH": 29809,
          "BX": null,
          "KN": 44475,
          "KU": 41073,
          "SC": 30564,
          "ST": 44704,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "edu-malappuram",
    "collegeCode": "EID",
    "collegeName": "Educare Institute of Dental Sciences, Malappuram",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 28073,
          "EZ": 43614,
          "MU": 30741,
          "LA": 36959,
          "DV": 31304,
          "VK": 36518,
          "BH": 31392,
          "BX": 30569,
          "KN": 41551,
          "KU": 44447,
          "SC": 31518,
          "ST": 40831,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "ind-kothamangalam",
    "collegeCode": "IGD",
    "collegeName": "Indira Gandhi Institute of Dental Sciences, Kothamangalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 27371,
          "EZ": 37107,
          "MU": 33463,
          "LA": 33963,
          "DV": 32889,
          "VK": 36306,
          "BH": 33524,
          "BX": 29815,
          "KN": 38206,
          "KU": 37966,
          "SC": 29209,
          "ST": 43969,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "kan-kannur",
    "collegeCode": "KAD",
    "collegeName": "Kannur Dental College, Anjarakandy, Kannur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 32702,
          "EZ": 43854,
          "MU": 36789,
          "LA": 38656,
          "DV": 33945,
          "VK": 37583,
          "BH": 35492,
          "BX": 33514,
          "KN": 37062,
          "KU": 44319,
          "SC": 33833,
          "ST": 42669,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "kmc-kozhikode",
    "collegeCode": "KMD",
    "collegeName": "KMCT Dental College, Mambatta, Mukkam, Kozhikode",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 16241,
          "EZ": 19261,
          "MU": 17717,
          "LA": 27260,
          "DV": 26586,
          "VK": 20868,
          "BH": 17366,
          "BX": 19288,
          "KN": 30156,
          "KU": 30503,
          "SC": 23455,
          "ST": 37397,
          "EW": 29366
        }
      }
    ]
  },
  {
    "collegeId": "mar-kothamangalam",
    "collegeCode": "MBD",
    "collegeName": "Mar Baselious Dental College, Kothamangalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 13646,
          "EZ": 16924,
          "MU": 14036,
          "LA": 14734,
          "DV": 14027,
          "VK": 15154,
          "BH": null,
          "BX": 14512,
          "KN": null,
          "KU": null,
          "SC": 20834,
          "ST": 34011,
          "EW": 17399
        }
      }
    ]
  },
  {
    "collegeId": "mes-perinthalmanna",
    "collegeCode": "MED",
    "collegeName": "MES Dental College, Perinthalmanna",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 19856,
          "EZ": 35865,
          "MU": 21061,
          "LA": 35048,
          "DV": 25666,
          "VK": 24197,
          "BH": 20662,
          "BX": 20887,
          "KN": 22261,
          "KU": 30822,
          "SC": 27484,
          "ST": 39276,
          "EW": 41385
        }
      }
    ]
  },
  {
    "collegeId": "mal-edappal",
    "collegeCode": "MLD",
    "collegeName": "Malabar Dental College, Edappal",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 28433,
          "EZ": 41335,
          "MU": 32907,
          "LA": 38638,
          "DV": 33247,
          "VK": 33828,
          "BH": 34757,
          "BX": 30693,
          "KN": 32879,
          "KU": 37708,
          "SC": 31679,
          "ST": null,
          "EW": 42370
        }
      }
    ]
  },
  {
    "collegeId": "noo-neyyattinkara",
    "collegeCode": "NID",
    "collegeName": "Noorul Islam College of Dental Science, Neyyattinkara",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 26493,
          "EZ": 34263,
          "MU": 33728,
          "LA": 27462,
          "DV": 33354,
          "VK": 39454,
          "BH": 27095,
          "BX": 27101,
          "KN": null,
          "KU": 40611,
          "SC": 30187,
          "ST": null,
          "EW": 39698
        }
      }
    ]
  },
  {
    "collegeId": "pus-thiruvalla",
    "collegeCode": "PMD",
    "collegeName": "Pushpagiri College of Dental Science, Thiruvalla",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 10650,
          "EZ": 11713,
          "MU": 15525,
          "LA": 18148,
          "DV": null,
          "VK": null,
          "BH": 13845,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 19249,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  {
    "collegeId": "pms-tvpm",
    "collegeCode": "PMS",
    "collegeName": "PMS College of Dental Sciences, Vattappara, TVPM",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 17082,
          "EZ": 18658,
          "MU": 20238,
          "LA": 23190,
          "DV": 18093,
          "VK": 19778,
          "BH": 17971,
          "BX": 19091,
          "KN": 17616,
          "KU": 27605,
          "SC": 21792,
          "ST": null,
          "EW": 21057
        }
      }
    ]
  },
  {
    "collegeId": "psm-thrissur",
    "collegeCode": "PSD",
    "collegeName": "PSM College of Dental Sciences, Thrissur",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 25032,
          "EZ": 36496,
          "MU": 32664,
          "LA": 30486,
          "DV": 27740,
          "VK": 39271,
          "BH": 33788,
          "BX": 30369,
          "KN": 26397,
          "KU": 27237,
          "SC": 30706,
          "ST": 43449,
          "EW": 39220
        }
      }
    ]
  },
  {
    "collegeId": "roy-palakkad",
    "collegeCode": "RDC",
    "collegeName": "Royal Dental College, Chalisery, Palakkad",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 27282,
          "EZ": 40743,
          "MU": 31577,
          "LA": 29539,
          "DV": 31963,
          "VK": 28956,
          "BH": 31469,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 30167,
          "ST": null,
          "EW": 36778
        }
      }
    ]
  },
  {
    "collegeId": "st-kothamangalam",
    "collegeCode": "SGD",
    "collegeName": "St. Gregorios Dental College, Chelad, Kothamangalam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 19864,
          "EZ": 23372,
          "MU": 26912,
          "LA": 24102,
          "DV": 25990,
          "VK": null,
          "BH": 20604,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 25133,
          "ST": 38057,
          "EW": 24895
        }
      }
    ]
  },
  {
    "collegeId": "sri-varkala",
    "collegeCode": "SVD",
    "collegeName": "Sri Sankara Dental College, Akathumuri, Varkala",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 32494,
          "EZ": 44562,
          "MU": 38468,
          "LA": 42196,
          "DV": 33877,
          "VK": 41883,
          "BH": 35112,
          "BX": 32625,
          "KN": null,
          "KU": 43408,
          "SC": 33411,
          "ST": null,
          "EW": 42273
        }
      }
    ]
  },
  {
    "collegeId": "tra-kollam",
    "collegeCode": "TRD",
    "collegeName": "Travancore DentalCollege, Kollam",
    "collegeType": "Self-Financing",
    "year": 2026,
    "round": "Final Allotment",
    "courses": [
      {
        "courseName": "MBBS",
        "cutoffs": {
          "SM": 23195,
          "EZ": 31434,
          "MU": 34504,
          "LA": null,
          "DV": 29643,
          "VK": 26606,
          "BH": null,
          "BX": null,
          "KN": null,
          "KU": null,
          "SC": 24147,
          "ST": null,
          "EW": null
        }
      }
    ]
  },
  // ---------------- Civil Engineering ----------------
  { collegeId: 'gec-kozhikode', collegeName: 'Government Engineering College, Kozhikkode', collegeType: 'Government', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 12998, EZ: 19951, MU: 16470, LA: 38628, DV: 32701, VK: 20191, BH: 18040, BX: 18336, KN: 30513, KU: null, SC: 47867, ST: 29061, EW: 35251 } },
  { collegeId: 'gce-kannur', collegeName: 'Government College of Engineering, Kannur', collegeType: 'Government', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 12780, EZ: 17817, MU: 16338, LA: 32579, DV: 18699, VK: 17254, BH: 17730, BX: 26360, KN: null, KU: null, SC: 48835, ST: 48823, EW: 32587 } },
  { collegeId: 'grit-kottayam', collegeName: 'Government Rajiv Gandhi Institute of Technology, Kottayam', collegeType: 'Government', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 13080, EZ: 14531, MU: 14430, LA: 24582, DV: 52699, VK: 14269, BH: 14560, BX: 14173, KN: 31511, KU: null, SC: 41180, ST: 53974, EW: 22978 } },
  { collegeId: 'mace-kothamangalam', collegeName: 'Mar Athanasius College of Engineering, Kothamangalam', collegeType: 'Aided', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 13132, EZ: 15422, MU: 15099, LA: 29275, DV: 44162, VK: 17115, BH: 17392, BX: 17151, KN: 44564, KU: 43775, SC: 49461, ST: 61172, EW: null } },
  { collegeId: 'nss-palakkad', collegeName: 'N S S College of Engineering, Palakkad', collegeType: 'Aided', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 13129, EZ: 19904, MU: 16534, LA: 37278, DV: 51396, VK: 20034, BH: 17963, BX: 19122, KN: 32466, KU: null, SC: 49400, ST: 60625, EW: 29015 } },
  { collegeId: 'gec-palakkad', collegeName: 'Government Engineering College, Palakkad', collegeType: 'Government', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 12140, EZ: 18257, MU: 16331, LA: 43928, DV: 44369, VK: 20291, BH: 19724, BX: 22864, KN: 36863, KU: null, SC: 46718, ST: 42167, EW: 39597 } },
  { collegeId: 'gec-thrissur', collegeName: 'Government Engineering College, Thrissur', collegeType: 'Government', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 8797, EZ: 10069, MU: 9362, LA: 21723, DV: 28231, VK: 9996, BH: 9885, BX: 17189, KN: 15104, KU: 45725, SC: 28271, ST: 50130, EW: 16402 } },
  { collegeId: 'tkm-kollam', collegeName: 'T K M College of Engineering, Kollam', collegeType: 'Aided', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 9896, EZ: 11775, MU: 10690, LA: 18382, DV: 37246, VK: 12309, BH: 11916, BX: 15210, KN: 19555, KU: 58070, SC: 34595, ST: 54949, EW: null } },
  { collegeId: 'gec-bartonhill-trivandrum', collegeName: 'Government Engineering College Barton Hill, Thiruvananthapuram', collegeType: 'Government', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 11459, EZ: 13000, MU: 12527, LA: 19769, DV: 41816, VK: 14542, BH: 12962, BX: 14677, KN: null, KU: 56198, SC: 35885, ST: 54542, EW: 18329 } },
  { collegeId: 'cet-trivandrum', collegeName: 'College of Engineering, Thiruvananthapuram (CET)', collegeType: 'Government', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 5059, EZ: 6642, MU: 5977, LA: 9716, DV: 21976, VK: 6541, BH: 5808, BX: 8021, KN: 14388, KU: 12328, SC: 23164, ST: 43744, EW: 12090 } },

  // ---------------- Computer Science & Engineering ----------------
  { collegeId: 'gec-idukki', collegeName: 'Government Engineering College, Idukki', collegeType: 'Government', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 11219, MU: 6633, LA: 29541, DV: 23021, VK: 12047, BH: 14241, BX: 24234, KN: 26829, KU: 34431, SC: 31854, ST: 50438, EW: 18851 } },
  { collegeId: 'gce-kannur', collegeName: 'Government College of Engineering, Kannur', collegeType: 'Government', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3507, EZ: 5042, MU: 5012, LA: 5921, DV: 11109, VK: 4742, BH: 5030, BX: null, KN: 9582, KU: null, SC: 21985, ST: 50027, EW: 7227 } },
  { collegeId: 'grit-kottayam', collegeName: 'Government Rajiv Gandhi Institute of Technology, Kottayam', collegeType: 'Government', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3100, EZ: 3710, MU: 3771, LA: 4083, DV: 10654, VK: 4665, BH: 3533, BX: 6855, KN: 16566, KU: 10499, SC: 21157, ST: 53880, EW: 5809 } },
  { collegeId: 'mace-kothamangalam', collegeName: 'Mar Athanasius College of Engineering, Kothamangalam', collegeType: 'Aided', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 2149, EZ: 2349, MU: 2515, LA: 3362, DV: 7067, VK: 4001, BH: 2327, BX: 5485, KN: 7537, KU: null, SC: 15188, ST: 63785, EW: null } },
  { collegeId: 'nss-palakkad', collegeName: 'N S S College of Engineering, Palakkad', collegeType: 'Aided', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3545, EZ: 4682, MU: 4659, LA: 5464, DV: 12516, VK: 5821, BH: 4461, BX: 12124, KN: 10242, KU: 19760, SC: 22576, ST: 64387, EW: 6553 } },
  { collegeId: 'gec-palakkad', collegeName: 'Government Engineering College, Palakkad', collegeType: 'Government', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3115, EZ: 6345, MU: 5390, LA: 8831, DV: 12550, VK: 5871, BH: 6248, BX: null, KN: 16596, KU: 26915, SC: 23842, ST: 48001, EW: 7683 } },
  { collegeId: 'gec-thrissur', collegeName: 'Government Engineering College, Thrissur', collegeType: 'Government', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 670, EZ: 1109, MU: 907, LA: 2064, DV: 3970, VK: 1161, BH: 681, BX: 2756, KN: 4571, KU: 2603, SC: 9073, ST: 15092, EW: 1991 } },
  { collegeId: 'tkm-kollam', collegeName: 'T K M College of Engineering, Kollam', collegeType: 'Aided', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 1487, EZ: 2067, MU: 1766, LA: 2438, DV: 5453, VK: 2156, BH: 1745, BX: 4327, KN: 4754, KU: 8803, SC: 12416, ST: 65466, EW: null } },
  { collegeId: 'cet-trivandrum', collegeName: 'College of Engineering, Thiruvananthapuram (CET)', collegeType: 'Government', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 343, EZ: 804, MU: 686, LA: 968, DV: 3882, VK: 860, BH: 662, BX: 1927, KN: 1288, KU: 1479, SC: 6410, ST: 14647, EW: 1629 } },
  { collegeId: 'gec-wayanad', collegeName: 'Government Engineering College, Wayanad', collegeType: 'Government', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 11851, MU: 5734, LA: 28086, DV: 32361, VK: 12208, BH: 13287, BX: 18364, KN: null, KU: 41195, SC: 35717, ST: 56708, EW: 18599 } },

  // ---------------- Electronics & Communication ----------------
  { collegeId: 'gec-idukki', collegeName: 'Government Engineering College, Idukki', collegeType: 'Government', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 16183, MU: 10873, LA: 32434, DV: 29509, VK: 19261, BH: 15389, BX: 31153, KN: 41131, KU: null, SC: 51795, ST: 56746, EW: 33806 } },
  { collegeId: 'gec-kozhikode', collegeName: 'Government Engineering College, Kozhikkode', collegeType: 'Government', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 4847, EZ: 9093, MU: 7427, LA: 16363, DV: 17074, VK: 8768, BH: 9131, BX: 16652, KN: 22152, KU: 46717, SC: 32017, ST: 66839, EW: 11365 } },
  { collegeId: 'gce-kannur', collegeName: 'Government College of Engineering, Kannur', collegeType: 'Government', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 4703, EZ: 7056, MU: 7023, LA: 16699, DV: 14298, VK: 6657, BH: 6751, BX: 14295, KN: 17724, KU: 29620, SC: 37662, ST: null, EW: 10279 } },
  { collegeId: 'grit-kottayam', collegeName: 'Government Rajiv Gandhi Institute of Technology, Kottayam', collegeType: 'Government', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3961, EZ: 4389, MU: 4385, LA: 8054, DV: 9218, VK: 5034, BH: 4260, BX: null, KN: 19912, KU: 12660, SC: 25422, ST: 66768, EW: 5967 } },
  { collegeId: 'mace-kothamangalam', collegeName: 'Mar Athanasius College of Engineering, Kothamangalam', collegeType: 'Aided', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3346, EZ: 3691, MU: 3693, LA: 8179, DV: 13827, VK: 3493, BH: 3564, BX: 12042, KN: 18065, KU: 12168, SC: 29844, ST: null, EW: null } },
  { collegeId: 'nss-palakkad', collegeName: 'N S S College of Engineering, Palakkad', collegeType: 'Aided', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 4827, EZ: 5324, MU: 5258, LA: 9904, DV: 14868, VK: 4858, BH: 5154, BX: 8809, KN: 15941, KU: 24331, SC: 31284, ST: 67141, EW: 8295 } },
  { collegeId: 'gec-palakkad', collegeName: 'Government Engineering College, Palakkad', collegeType: 'Government', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 4608, EZ: 7754, MU: 7629, LA: 17096, DV: 21361, VK: 6472, BH: 7747, BX: 15362, KN: null, KU: 49782, SC: 33877, ST: null, EW: 10260 } },
  { collegeId: 'gec-thrissur', collegeName: 'Government Engineering College, Thrissur', collegeType: 'Government', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 1420, EZ: 2137, MU: 1777, LA: 4211, DV: 3982, VK: 2561, BH: 1881, BX: 2295, KN: 3178, KU: 3280, SC: 13989, ST: 48779, EW: 3591 } },
  { collegeId: 'tkm-kollam', collegeName: 'T K M College of Engineering, Kollam', collegeType: 'Aided', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 2199, EZ: 2448, MU: 2447, LA: 4141, DV: 6518, VK: 2607, BH: 2558, BX: 5306, KN: 3632, KU: 14895, SC: 17228, ST: 60927, EW: null } },
  { collegeId: 'gec-bartonhill-trivandrum', collegeName: 'Government Engineering College Barton Hill, Thiruvananthapuram', collegeType: 'Government', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3385, EZ: 4307, MU: 4273, LA: 9323, DV: 13758, VK: 4714, BH: 4193, BX: 3617, KN: 4004, KU: null, SC: 18416, ST: null, EW: 7005 } },
  { collegeId: 'cet-trivandrum', collegeName: 'College of Engineering, Thiruvananthapuram (CET)', collegeType: 'Government', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 598, EZ: 891, MU: 873, LA: 1187, DV: 3941, VK: 1048, BH: 813, BX: 2090, KN: 1427, KU: 3247, SC: 8710, ST: 23508, EW: 2175 } },
  { collegeId: 'gec-wayanad', collegeName: 'Government Engineering College, Wayanad', collegeType: 'Government', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 16284, MU: 10269, LA: 61615, DV: 61051, VK: 18943, BH: 17527, BX: 36775, KN: 56494, KU: null, SC: 53505, ST: null, EW: 35931 } },

  // ---------------- Electrical & Electronics ----------------
  { collegeId: 'gec-idukki', collegeName: 'Government Engineering College, Idukki', collegeType: 'Government', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 18948, MU: 12794, LA: 57089, DV: 54858, VK: 20058, BH: 21248, BX: 50040, KN: 20156, KU: null, SC: 56257, ST: null, EW: 52300 } },
  { collegeId: 'gce-kannur', collegeName: 'Government College of Engineering, Kannur', collegeType: 'Government', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 6393, EZ: 9611, MU: 9657, LA: 17076, DV: 28468, VK: 10130, BH: 9268, BX: 45775, KN: 40529, KU: 50525, SC: 44115, ST: 62817, EW: 14155 } },
  { collegeId: 'grit-kottayam', collegeName: 'Government Rajiv Gandhi Institute of Technology, Kottayam', collegeType: 'Government', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 6516, EZ: 7452, MU: 7090, LA: 15851, DV: 19963, VK: 7598, BH: 7131, BX: 14176, KN: null, KU: 48126, SC: 37154, ST: 61226, EW: 10732 } },
  { collegeId: 'mace-kothamangalam', collegeName: 'Mar Athanasius College of Engineering, Kothamangalam', collegeType: 'Aided', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 6178, EZ: 6740, MU: 6977, LA: 13095, DV: 19961, VK: 7814, BH: 6897, BX: 16190, KN: 25298, KU: 42910, SC: 44291, ST: 29421, EW: null } },
  { collegeId: 'nss-palakkad', collegeName: 'N S S College of Engineering, Palakkad', collegeType: 'Aided', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 7042, EZ: 8793, MU: 8838, LA: 20712, DV: 36700, VK: 8706, BH: 8627, BX: 19655, KN: 29291, KU: 56814, SC: 43562, ST: 27530, EW: 12543 } },
  { collegeId: 'gec-palakkad', collegeName: 'Government Engineering College, Palakkad', collegeType: 'Government', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 6768, EZ: 11012, MU: 10744, LA: 23665, DV: 25069, VK: 11057, BH: 10701, BX: 43656, KN: 35695, KU: null, SC: 44810, ST: null, EW: 17492 } },
  { collegeId: 'gec-thrissur', collegeName: 'Government Engineering College, Thrissur', collegeType: 'Government', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 2962, EZ: 3322, MU: 3271, LA: 6874, DV: 13390, VK: 4106, BH: 4017, BX: 12503, KN: 9165, KU: 31674, SC: 21079, ST: 66054, EW: 6763 } },
  { collegeId: 'tkm-kollam', collegeName: 'T K M College of Engineering, Kollam', collegeType: 'Aided', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 3853, EZ: 4651, MU: 4412, LA: 10487, DV: 16732, VK: 4751, BH: 4579, BX: 11747, KN: 21763, KU: 39287, SC: 26513, ST: 61974, EW: null } },
  { collegeId: 'gec-bartonhill-trivandrum', collegeName: 'Government Engineering College Barton Hill, Thiruvananthapuram', collegeType: 'Government', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 6490, EZ: 6901, MU: 7371, LA: 10516, DV: 20747, VK: 9396, BH: 7279, BX: null, KN: 33090, KU: 53470, SC: 35851, ST: null, EW: 10751 } },
  { collegeId: 'cet-trivandrum', collegeName: 'College of Engineering, Thiruvananthapuram (CET)', collegeType: 'Government', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 1386, EZ: 2162, MU: 1821, LA: 3419, DV: 5399, VK: 1497, BH: 1848, BX: 2103, KN: 1662, KU: 18241, SC: 12735, ST: 51578, EW: 3874 } },
  { collegeId: 'gec-wayanad', collegeName: 'Government Engineering College, Wayanad', collegeType: 'Government', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 19679, MU: 12639, LA: 52883, DV: null, VK: 21240, BH: 22169, BX: 59228, KN: 47729, KU: null, SC: 55374, ST: 66735, EW: 51262 } },

  // ---------------- Private / Self-Financing Colleges ----------------
  { collegeId: 'rajagiri-ernakulam', collegeName: 'Rajagiri School of Engineering and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 4254, EZ: 5883, MU: 6532, LA: 5259, DV: 12238, VK: 4588, BH: 6832, BX: 13831, KN: 14681, KU: 6325, SC: 39264, ST: 45521, EW: null } },
  { collegeId: 'model-engineering-ernakulam', collegeName: 'Model Engineering College, Ernakulam', collegeType: 'Government Controlled', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 1217, EZ: 2218, MU: 1914, LA: 2506, DV: 4806, VK: 2443, BH: 1791, BX: 4781, KN: 6336, KU: 5314, SC: 15739, ST: 33093, EW: 2839 } },
  { collegeId: 'muthoot-ernakulam', collegeName: 'Muthoot Institute of Technology and Science, Ernakulam', collegeType: 'Self-Financing', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 5775, EZ: 7649, MU: 8421, LA: 8991, DV: 14039, VK: 6065, BH: 7701, BX: 36883, KN: 20825, KU: 18608, SC: 26535, ST: 22899, EW: 10392 } },
  { collegeId: 'fisat-ernakulam', collegeName: 'Federal Institute of Science and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 8033, EZ: 8897, MU: 9219, LA: 10745, DV: 16715, VK: 12112, BH: 10025, BX: 35691, KN: 9462, KU: 21753, SC: 46511, ST: null, EW: 16425 } },
  { collegeId: 'saintgits-kottayam', collegeName: 'Saintgits College of Engineering, Kottayam', collegeType: 'Self-Financing', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 11979, EZ: 13310, MU: 13671, LA: 16552, DV: 19559, VK: 17559, BH: 15083, BX: 23575, KN: 49031, KU: 42355, SC: 60339, ST: null, EW: null } },
  { collegeId: 'scms-ernakulam', collegeName: 'SCMS School of Engineering and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 17377, EZ: 20358, MU: 20195, LA: 24337, DV: 32100, VK: 22607, BH: 20984, BX: 45231, KN: 29169, KU: 20403, SC: 65322, ST: null, EW: 31767 } },
  { collegeId: 'mbcet-trivandrum', collegeName: 'Mar Baselios College of Engineering and Technology, Thiruvananthapuram', collegeType: 'Self-Financing', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 11061, EZ: 14785, MU: 15088, LA: 17398, DV: 26378, VK: 12544, BH: 12599, BX: 18552, KN: null, KU: 44933, SC: 50763, ST: null, EW: null } },
  { collegeId: 'amaljyothi-kottayam', collegeName: 'Amal Jyothi College of Engineering, Kottayam', collegeType: 'Self-Financing', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 14422, EZ: 18900, MU: 18982, LA: 33319, DV: 25690, VK: 16230, BH: 16626, BX: 35047, KN: 26983, KU: 58838, SC: 63211, ST: null, EW: null } },
  { collegeId: 'toch-ernakulam', collegeName: 'Toc H Institute of Science and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Computer Science & Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 21787, EZ: 25955, MU: 25661, LA: 25431, DV: 28798, VK: 26626, BH: 23455, BX: 54652, KN: 42974, KU: 29385, SC: 66244, ST: null, EW: 40248 } },

  { collegeId: 'rajagiri-ernakulam', collegeName: 'Rajagiri School of Engineering and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 7356, EZ: 8990, MU: 8853, LA: 12892, DV: 10912, VK: 9503, BH: 8457, BX: 29127, KN: 20311, KU: 18975, SC: 44792, ST: null, EW: null } },
  { collegeId: 'model-engineering-ernakulam', collegeName: 'Model Engineering College, Ernakulam', collegeType: 'Government Controlled', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 1994, EZ: 2507, MU: 2685, LA: 4616, DV: 9741, VK: 3160, BH: 2922, BX: 4438, KN: 11632, KU: 3290, SC: 20223, ST: 59028, EW: 4745 } },
  { collegeId: 'muthoot-ernakulam', collegeName: 'Muthoot Institute of Technology and Science, Ernakulam', collegeType: 'Self-Financing', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 7816, EZ: 8950, MU: 8323, LA: 13749, DV: 26887, VK: 10042, BH: 10049, BX: null, KN: null, KU: null, SC: 57936, ST: null, EW: 14124 } },
  { collegeId: 'fisat-ernakulam', collegeName: 'Federal Institute of Science and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 10107, EZ: 11594, MU: 11068, LA: 20265, DV: 18641, VK: 13291, BH: 10527, BX: 29772, KN: 22814, KU: 40569, SC: 64240, ST: null, EW: 19075 } },
  { collegeId: 'saintgits-kottayam', collegeName: 'Saintgits College of Engineering, Kottayam', collegeType: 'Self-Financing', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 13094, EZ: 16088, MU: 16309, LA: 25893, DV: 27147, VK: 21508, BH: 13849, BX: null, KN: null, KU: null, SC: 65344, ST: null, EW: null } },
  { collegeId: 'scms-ernakulam', collegeName: 'SCMS School of Engineering and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 18363, EZ: 21586, MU: 19120, LA: 19695, DV: 32720, VK: 23968, BH: 21940, BX: null, KN: null, KU: null, SC: null, ST: null, EW: 32634 } },
  { collegeId: 'mbcet-trivandrum', collegeName: 'Mar Baselios College of Engineering and Technology, Thiruvananthapuram', collegeType: 'Self-Financing', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 15250, EZ: 16660, MU: 19148, LA: 21566, DV: 37357, VK: 18483, BH: 15860, BX: 22915, KN: 38923, KU: null, SC: 67351, ST: null, EW: null } },
  { collegeId: 'amaljyothi-kottayam', collegeName: 'Amal Jyothi College of Engineering, Kottayam', collegeType: 'Self-Financing', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 21563, EZ: 23305, MU: 27858, LA: 29412, DV: 31620, VK: 30253, BH: 22774, BX: 32558, KN: null, KU: 62282, SC: null, ST: null, EW: null } },
  { collegeId: 'toch-ernakulam', collegeName: 'Toc H Institute of Science and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Electronics & Communication', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 25145, EZ: 28846, MU: 26136, LA: 26322, DV: 41859, VK: 43210, BH: 29301, BX: null, KN: null, KU: null, SC: 64946, ST: null, EW: 32377 } },

  { collegeId: 'rajagiri-ernakulam', collegeName: 'Rajagiri School of Engineering and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 10268, EZ: 11549, MU: 11970, LA: null, DV: 32331, VK: 15468, BH: 13460, BX: null, KN: null, KU: null, SC: 58852, ST: null, EW: null } },
  { collegeId: 'model-engineering-ernakulam', collegeName: 'Model Engineering College, Ernakulam', collegeType: 'Government Controlled', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 4813, EZ: 4978, MU: 4950, LA: 12349, DV: 13548, VK: 5065, BH: 5374, BX: null, KN: null, KU: null, SC: 25870, ST: null, EW: 13137 } },
  { collegeId: 'muthoot-ernakulam', collegeName: 'Muthoot Institute of Technology and Science, Ernakulam', collegeType: 'Self-Financing', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 14299, EZ: 16062, MU: 15596, LA: 27051, DV: 58389, VK: 32593, BH: 15270, BX: null, KN: null, KU: null, SC: 64820, ST: null, EW: 29006 } },
  { collegeId: 'fisat-ernakulam', collegeName: 'Federal Institute of Science and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 14320, EZ: 17978, MU: 15352, LA: 32181, DV: 30215, VK: 15492, BH: 15140, BX: null, KN: null, KU: null, SC: 66664, ST: null, EW: 37710 } },
  { collegeId: 'saintgits-kottayam', collegeName: 'Saintgits College of Engineering, Kottayam', collegeType: 'Self-Financing', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 26161, EZ: 32207, MU: 28914, LA: 40591, DV: 51728, VK: null, BH: 27085, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },
  { collegeId: 'scms-ernakulam', collegeName: 'SCMS School of Engineering and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 27309, EZ: 28134, MU: 27838, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: null, ST: null, EW: 35801 } },
  { collegeId: 'mbcet-trivandrum', collegeName: 'Mar Baselios College of Engineering and Technology, Thiruvananthapuram', collegeType: 'Self-Financing', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 21805, EZ: 25308, MU: 31106, LA: 28621, DV: 47408, VK: 26225, BH: 28784, BX: null, KN: null, KU: null, SC: 62010, ST: null, EW: null } },
  { collegeId: 'amaljyothi-kottayam', collegeName: 'Amal Jyothi College of Engineering, Kottayam', collegeType: 'Self-Financing', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 33453, EZ: 40602, MU: 36689, LA: 60538, DV: 39635, VK: null, BH: 38980, BX: null, KN: null, KU: null, SC: 66460, ST: null, EW: null } },
  { collegeId: 'toch-ernakulam', collegeName: 'Toc H Institute of Science and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Electrical & Electronics', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 37016, EZ: 38796, MU: 39135, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: 61100, SC: null, ST: null, EW: null } },

  { collegeId: 'rajagiri-ernakulam', collegeName: 'Rajagiri School of Engineering and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 21260, EZ: 21930, MU: 24903, LA: 33773, DV: null, VK: null, BH: 23974, BX: null, KN: null, KU: null, SC: 58142, ST: 63399, EW: null } },
  { collegeId: 'muthoot-ernakulam', collegeName: 'Muthoot Institute of Technology and Science, Ernakulam', collegeType: 'Self-Financing', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 27192, EZ: 31207, MU: 28500, LA: 45784, DV: 53628, VK: null, BH: 29954, BX: null, KN: null, KU: 55123, SC: 64587, ST: null, EW: 44728 } },
  { collegeId: 'fisat-ernakulam', collegeName: 'Federal Institute of Science and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 32506, EZ: 38612, MU: 37091, LA: 44192, DV: 57922, VK: 35121, BH: 34981, BX: 48591, KN: null, KU: 43860, SC: 65207, ST: null, EW: 52155 } },
  { collegeId: 'saintgits-kottayam', collegeName: 'Saintgits College of Engineering, Kottayam', collegeType: 'Self-Financing', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 41869, EZ: 51736, MU: 55536, LA: 60155, DV: null, VK: null, BH: 44737, BX: 57308, KN: null, KU: null, SC: 63391, ST: null, EW: null } },
  { collegeId: 'scms-ernakulam', collegeName: 'SCMS School of Engineering and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 41162, EZ: 51843, MU: 43285, LA: null, DV: null, VK: null, BH: 61652, BX: null, KN: null, KU: null, SC: 62128, ST: null, EW: null } },
  { collegeId: 'mbcet-trivandrum', collegeName: 'Mar Baselios College of Engineering and Technology, Thiruvananthapuram', collegeType: 'Self-Financing', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 38008, EZ: 51679, MU: 52643, LA: 43893, DV: null, VK: 39110, BH: 39859, BX: 42870, KN: 40227, KU: null, SC: 67377, ST: 58583, EW: null } },
  { collegeId: 'amaljyothi-kottayam', collegeName: 'Amal Jyothi College of Engineering, Kottayam', collegeType: 'Self-Financing', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 44159, EZ: 61237, MU: 47830, LA: null, DV: null, VK: 44328, BH: 63100, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },
  { collegeId: 'toch-ernakulam', collegeName: 'Toc H Institute of Science and Technology, Ernakulam', collegeType: 'Self-Financing', branch: 'Civil Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 61153, EZ: null, MU: 62335, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },

  // ---------------- Mechanical Engineering (Government) ----------------
  { collegeId: 'gec-idukki', collegeName: 'Government Engineering College, Idukki', collegeType: 'Government', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 21544, MU: 17491, LA: 48282, DV: 53746, VK: 21944, BH: 34024, BX: 34468, KN: 47985, KU: null, SC: 58677, ST: null, EW: 55459 } },
  { collegeId: 'gec-kozhikode', collegeName: 'Government Engineering College, Kozhikkode', collegeType: 'Government', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 9575, EZ: 16560, MU: 15599, LA: 28335, DV: 40741, VK: 16067, BH: 15672, BX: 45820, KN: 33150, KU: 58817, SC: 46087, ST: null, EW: 24628 } },
  { collegeId: 'gce-kannur', collegeName: 'Government College of Engineering, Kannur', collegeType: 'Government', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 11125, EZ: 15401, MU: 15258, LA: 32457, DV: 43939, VK: 15396, BH: 15780, BX: null, KN: null, KU: null, SC: 49708, ST: 36616, EW: 27045 } },
  { collegeId: 'grit-kottayam', collegeName: 'Government Rajiv Gandhi Institute of Technology, Kottayam', collegeType: 'Government', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 10985, EZ: 12155, MU: 12132, LA: 25107, DV: 38130, VK: 12214, BH: 12805, BX: 36570, KN: 28529, KU: 53623, SC: 42659, ST: 67385, EW: 14652 } },
  { collegeId: 'mace-kothamangalam', collegeName: 'Mar Athanasius College of Engineering, Kothamangalam', collegeType: 'Aided', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 10298, EZ: 11618, MU: 11010, LA: 25816, DV: 30015, VK: 10987, BH: 11643, BX: 37569, KN: 26878, KU: 42433, SC: 47548, ST: null, EW: null } },
  { collegeId: 'nss-palakkad', collegeName: 'N S S College of Engineering, Palakkad', collegeType: 'Aided', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 11136, EZ: 14022, MU: 14048, LA: 26971, DV: 43730, VK: 14111, BH: 14499, BX: 38331, KN: 32505, KU: null, SC: 48188, ST: 49464, EW: 20755 } },
  { collegeId: 'gec-palakkad', collegeName: 'Government Engineering College, Palakkad', collegeType: 'Government', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 10473, EZ: 18219, MU: 15645, LA: 29016, DV: 47956, VK: 17789, BH: 16873, BX: 47284, KN: null, KU: null, SC: 44767, ST: null, EW: 24348 } },
  { collegeId: 'gec-thrissur', collegeName: 'Government Engineering College, Thrissur', collegeType: 'Government', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 4626, EZ: 6303, MU: 5742, LA: 15943, DV: 17990, VK: 8025, BH: 5427, BX: 16853, KN: 14788, KU: 49915, SC: 26095, ST: 63921, EW: 10879 } },
  { collegeId: 'tkm-kollam', collegeName: 'T K M College of Engineering, Kollam', collegeType: 'Aided', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 7233, EZ: 8239, MU: 8186, LA: 17070, DV: 24048, VK: 10346, BH: 9062, BX: 33515, KN: 21503, KU: 61910, SC: 34654, ST: 64343, EW: null } },
  { collegeId: 'gec-bartonhill-trivandrum', collegeName: 'Government Engineering College Barton Hill, Thiruvananthapuram', collegeType: 'Government', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 8986, EZ: 9790, MU: 11066, LA: 18459, DV: 34763, VK: 11838, BH: 10463, BX: 15664, KN: 25400, KU: 46030, SC: 38284, ST: null, EW: 14003 } },
  { collegeId: 'cet-trivandrum', collegeName: 'College of Engineering, Thiruvananthapuram (CET)', collegeType: 'Government', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 2520, EZ: 3634, MU: 3231, LA: 6673, DV: 8224, VK: 3860, BH: 3240, BX: 8585, KN: 11489, KU: 11418, SC: 19721, ST: 65544, EW: 6893 } },
  { collegeId: 'gec-wayanad', collegeName: 'Government Engineering College, Wayanad', collegeType: 'Government', branch: 'Mechanical Engineering', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: null, EZ: 21393, MU: 16920, LA: 54703, DV: 64457, VK: 22428, BH: 34075, BX: 44535, KN: 60570, KU: null, SC: 59735, ST: null, EW: 59270 } },

  // ---------------- Information Technology (Government) ----------------
  { collegeId: 'gec-idukki', collegeName: 'Government Engineering College, Idukki', collegeType: 'Government', branch: 'Information Technology', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 10480, EZ: 19826, MU: 16327, LA: 42365, DV: 35217, VK: 20763, BH: 29970, BX: 31422, KN: 55298, KU: null, SC: 53871, ST: null, EW: 44932 } },
  { collegeId: 'gec-palakkad', collegeName: 'Government Engineering College, Palakkad', collegeType: 'Government', branch: 'Information Technology', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 10384, EZ: 12160, MU: 10827, LA: 21542, DV: 17293, VK: 10593, BH: 10696, BX: 46318, KN: 29454, KU: null, SC: 43166, ST: null, EW: 17621 } },
  { collegeId: 'gec-bartonhill-trivandrum', collegeName: 'Government Engineering College Barton Hill, Thiruvananthapuram', collegeType: 'Government', branch: 'Information Technology', year: 2025, round: 'First Phase Allotment', cutoffs: { SM: 6675, EZ: 8522, MU: 7172, LA: 14028, DV: 28054, VK: 9289, BH: 9507, BX: null, KN: null, KU: null, SC: 32484, ST: null, EW: 10786 } },

  // ---------------- B.Pharm (Extracted 2025 Data) ----------------
  { collegeId: 'col-alappuzha', collegeName: 'College of Pharmaceutical Science,Government T D Medical College, Alappuzha', collegeType: 'Government', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 1314, EZ: 1874, MU: 1562, LA: null, DV: 5104, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 6053, ST: null, EW: 4308 } },
  { collegeId: 'col-kannur', collegeName: 'College of Pharmaceutical Sciences, Pariyaram, Kannur', collegeType: 'Government', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 1175, EZ: 1826, MU: 1295, LA: 6669, DV: 1229, VK: 2744, BH: 4482, BX: 4186, KN: 5507, KU: 8820, SC: 9316, ST: 18327, EW: 4353 } },
  { collegeId: 'col-kozhikode', collegeName: 'College of Pharmaceutical Science, Kozhikode', collegeType: 'Government', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 226, EZ: 551, MU: 264, LA: null, DV: null, VK: 2049, BH: null, BX: null, KN: null, KU: null, SC: 3078, ST: null, EW: 1780 } },
  { collegeId: 'col-kottayam', collegeName: 'College of Pharmaceutical Science, Medical College, Kottayam', collegeType: 'Government', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 1338, EZ: 2096, MU: 1583, LA: 5556, DV: 7412, VK: 2188, BH: 5644, BX: null, KN: null, KU: 8499, SC: 8394, ST: 15276, EW: 4074 } },
  { collegeId: 'col-thiruvananthapuram', collegeName: 'College of Pharmaceutical Science, Medical College, Thiruvananthapuram', collegeType: 'Government', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 1006, EZ: 1371, MU: 1372, LA: 2518, DV: 1366, VK: 1165, BH: 2781, BX: 1869, KN: 2734, KU: null, SC: 7866, ST: 18305, EW: 3613 } },
  { collegeId: 'ala-thodupuzha', collegeName: 'Al-Azhar College of Pharmacy, Thodupuzha', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 11988, EZ: 21122, MU: 14105, LA: null, DV: 15216, VK: 12792, BH: null, BX: null, KN: null, KU: null, SC: 20898, ST: 24555, EW: null } },
  { collegeId: 'al-malappuram', collegeName: 'Al Shifa College of Pharmacy, Perinthalmanna, Malappuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 3646, EZ: 13254, MU: 4096, LA: null, DV: null, VK: 8311, BH: 4609, BX: null, KN: null, KU: null, SC: 18188, ST: 28058, EW: null } },
  { collegeId: 'aha-palakkad', collegeName: 'Ahalia School of Pharmacy, Kozhipara, Palakkad', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 8775, EZ: 19015, MU: 11086, LA: 25150, DV: 18380, VK: null, BH: 13337, BX: null, KN: null, KU: null, SC: 24660, ST: 23055, EW: 24204 } },
  { collegeId: 'car-kottayam', collegeName: 'Caritas College of Pharmacy, Thellakom, Kottayam', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 9563, EZ: 27062, MU: 15658, LA: 23505, DV: 20762, VK: 14876, BH: null, BX: null, KN: null, KU: null, SC: 15709, ST: 28417, EW: null } },
  { collegeId: 'che-ernakulam', collegeName: 'Chemists College of Pharmaceutical Science & Research, Ernakulam', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 15940, EZ: 17470, MU: 17425, LA: null, DV: 23339, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 19163, ST: 29368, EW: null } },
  { collegeId: 'mgm-malappuram', collegeName: 'MGM College of Pharmaceutical Sciences, Valanchery, Malappuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 14194, EZ: null, MU: 15526, LA: null, DV: null, VK: 14768, BH: null, BX: null, KN: null, KU: null, SC: 32158, ST: 30056, EW: null } },
  { collegeId: 'cre-kannur', collegeName: 'Crescent College of Pharmaceutical Sciences, Pazhayangadi, Kannur', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 8712, EZ: 23355, MU: 9693, LA: null, DV: null, VK: 24189, BH: 12978, BX: null, KN: null, KU: null, SC: 31882, ST: null, EW: null } },
  { collegeId: 'dev-malappuram', collegeName: 'Devaki Amma Memorial College of Pharmacy, Malappuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 7226, EZ: 17282, MU: 8172, LA: null, DV: 10128, VK: null, BH: 10404, BX: null, KN: null, KU: null, SC: 21868, ST: null, EW: null } },
  { collegeId: 'dm-wayanad', collegeName: 'DM WIMS, College of Pharmacy, Wayanad.', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 13068, EZ: 19007, MU: 15067, LA: 15636, DV: null, VK: null, BH: 17248, BX: null, KN: 15039, KU: null, SC: 33195, ST: null, EW: 17902 } },
  { collegeId: 'cen-okottayam', collegeName: 'Center for Profssional Studies,Cheruvandoor,Ettumanoor P O,Kottayam', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 5866, EZ: 12019, MU: 6178, LA: 7241, DV: null, VK: null, BH: 6351, BX: 6933, KN: null, KU: 9089, SC: 7836, ST: null, EW: 13683 } },
  { collegeId: 'the-trivandrum', collegeName: 'The Dale View College of Pharmacy & Research Centre, Trivandrum', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 18628, EZ: 21486, MU: 20918, LA: null, DV: null, VK: null, BH: 22118, BX: null, KN: null, KU: null, SC: 31458, ST: null, EW: null } },
  { collegeId: 'ezh-thiruvananthapuram', collegeName: 'Ezhuthachan College of Pharmaceutical Science, Thiruvananthapuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 11668, EZ: 20602, MU: 19250, LA: 21475, DV: null, VK: 13244, BH: 13846, BX: null, KN: null, KU: null, SC: 18471, ST: null, EW: 24639 } },
  { collegeId: 'eli-pharmacythrissur', collegeName: 'Elims College of Pharmacy,Thrissur', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 14582, EZ: 23058, MU: 15959, LA: null, DV: null, VK: 19370, BH: 24504, BX: null, KN: null, KU: null, SC: 31491, ST: null, EW: null } },
  { collegeId: 'gra-palakkad', collegeName: 'Grace College of Pharmacy, Kodunthirapully, Palakkad', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 23591, EZ: null, MU: 25233, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },
  { collegeId: 'hol-thrissur', collegeName: 'Holy Grace Academy of Pharmacy, Mala, Thrissur', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 19238, EZ: 19471, MU: 20020, LA: 25623, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },
  { collegeId: 'hin-kanjirappally', collegeName: 'Hindustan College of Pharmacy, Kanjirappally', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 19793, EZ: null, MU: 22545, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 20523, ST: null, EW: null } },
  { collegeId: 'st-thrissur', collegeName: 'St. James College of Pharmaceutical Sciences, Chalakudy, Thrissur', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 16232, EZ: 21368, MU: 19845, LA: null, DV: null, VK: null, BH: 20642, BX: null, KN: null, KU: null, SC: 22395, ST: null, EW: null } },
  { collegeId: 'jdt-kozhikode', collegeName: 'JDT Islam College of Pharmacy, Marikunnu, Kozhikode', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 4376, EZ: 11926, MU: 4783, LA: null, DV: null, VK: 17085, BH: 21112, BX: null, KN: null, KU: null, SC: 14805, ST: null, EW: null } },
  { collegeId: 'jam-malappuram', collegeName: 'Jamia Salafiya Pharmacy College, Pulikkal, Malappuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 9326, EZ: 17384, MU: 9751, LA: null, DV: null, VK: 18036, BH: null, BX: null, KN: null, KU: null, SC: 23254, ST: null, EW: null } },
  { collegeId: 'kmc-malappuram', collegeName: 'KMCT College of Pharmacy, Malappuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 8876, EZ: 25146, MU: 9401, LA: null, DV: null, VK: 13581, BH: 20902, BX: null, KN: null, KU: null, SC: 23133, ST: null, EW: null } },
  { collegeId: 'ind-ernakulam', collegeName: 'Indira Gandhi Institute of Pharmaceutical Sciences, Perumbavoor, Ernakulam', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 22187, EZ: null, MU: 22803, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 32687, ST: null, EW: null } },
  { collegeId: 'kmc-researchchathamangalamkozhikkode', collegeName: 'KMCT Institute of Pharmaceutical Education &Research,Chathamangalam,Kozhikkode', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 10962, EZ: 17616, MU: 12763, LA: null, DV: null, VK: null, BH: 20410, BX: 22580, KN: null, KU: null, SC: 25348, ST: null, EW: 20865 } },
  { collegeId: 'kmc-pharmacykuttippurammalappuram', collegeName: 'KMCT Institute of Pharmacy,Kuttippuram,Malappuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 8611, EZ: null, MU: 10816, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 26590, ST: null, EW: 18551 } },
  { collegeId: 'kmc-kozhikode', collegeName: 'KMCT College of Pharmaceutical Sciences, Kalanthode, Kozhikode', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 6901, EZ: 22681, MU: 8083, LA: 26372, DV: 24140, VK: 14165, BH: 16340, BX: null, KN: null, KU: null, SC: 23769, ST: null, EW: 8305 } },
  { collegeId: 'col-anjarakandy', collegeName: 'College of Pharmacy, Kannur Medical college, Anjarakandy', collegeType: 'Government', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 11139, EZ: 17936, MU: 12457, LA: null, DV: null, VK: 21704, BH: 11582, BX: null, KN: null, KU: null, SC: 26821, ST: 30197, EW: null } },
  { collegeId: 'k-palakkad', collegeName: 'K T N College of Pharmacy, Palakkad', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 22270, EZ: 22976, MU: 24292, LA: null, DV: null, VK: null, BH: null, BX: 25939, KN: 23298, KU: null, SC: 33367, ST: null, EW: 23346 } },
  { collegeId: 'kar-palakkad', collegeName: 'Karuna College of Pharmacy, Thirumittacode, Pattambi, Palakkad', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 20557, EZ: null, MU: 21730, LA: null, DV: null, VK: null, BH: 25459, BX: null, KN: null, KU: null, SC: 25559, ST: null, EW: null } },
  { collegeId: 'k-alappuzha', collegeName: 'K V M College of Pharmacy, Kokkothamangalam, Cherthala, Alappuzha', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 21976, EZ: null, MU: 24772, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 29629, ST: null, EW: null } },
  { collegeId: 'mal-pharmacykuttippurammalappuram', collegeName: 'Malabar College of Pharmacy,Kuttippuram,Malappuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 14401, EZ: null, MU: 15060, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },
  { collegeId: 'mou-malappuram', collegeName: 'Moulana College of Pharmacy,Perinthalmanna, Malappuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 6571, EZ: 10639, MU: 7167, LA: null, DV: null, VK: null, BH: 15160, BX: null, KN: null, KU: null, SC: 28173, ST: null, EW: 14817 } },
  { collegeId: 'mar-thiruvananthapuram', collegeName: 'Mar Dioscorus College of Pharmacy, Sreekaryam, Thiruvananthapuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 14551, EZ: 26522, MU: 16537, LA: null, DV: 16502, VK: 19895, BH: 17110, BX: 17979, KN: null, KU: null, SC: 31556, ST: null, EW: null } },
  { collegeId: 'met-pharmacymalathrissur', collegeName: 'METS College of Pharmacy,Mala,Thrissur', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 26638, EZ: null, MU: null, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },
  { collegeId: 'mgm-ernakulam', collegeName: 'MGM Silver Jubilee College of Polytech & Pharmaceutical, Ernakulam', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 26832, EZ: null, MU: null, LA: null, DV: null, VK: null, BH: 27038, BX: null, KN: null, KU: null, SC: 31921, ST: null, EW: null } },
  { collegeId: 'mgm-thiruvananthapuram', collegeName: 'MGM Silver Jubilee College of Pharmacy, Kilimanoor, Thiruvananthapuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 16911, EZ: 23648, MU: 19634, LA: 21040, DV: null, VK: 22855, BH: 22377, BX: null, KN: null, KU: null, SC: 22032, ST: null, EW: null } },
  { collegeId: 'mgm-kannur', collegeName: 'MGM College of Pharmacy, MGM Technological Campus, Kannur', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 17329, EZ: 19924, MU: 18761, LA: null, DV: null, VK: null, BH: 18397, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },
  { collegeId: 'mal-kasaragod', collegeName: 'Malik Deenar College of Pharmacy, Seethangoli, Bela P O, Kasaragod', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 19623, EZ: 23826, MU: 20759, LA: null, DV: null, VK: null, BH: 23423, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },
  { collegeId: 'mad-malapuram', collegeName: 'Madin College of Pharmacy, Malapuram', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 12045, EZ: null, MU: 14996, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 25913, ST: null, EW: null } },
  { collegeId: 'moo-ernakulam', collegeName: 'Mookambika College of Pharmaceutical Sciences and Research, Ernakulam', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 25797, EZ: null, MU: null, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },
  { collegeId: 'dr-alappuzha', collegeName: 'Dr. Joseph Mar Thoma Institute of Pharmaceutical Sciences & Research, Alappuzha', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 18250, EZ: 26825, MU: 22987, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 32859, ST: 20599, EW: null } },
  { collegeId: 'mou-pathanamthitta', collegeName: 'Mount Zion College of Pharmaceutical Science and Research, Pathanamthitta', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 20982, EZ: 26632, MU: null, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 24276, ST: null, EW: 23641 } },
  { collegeId: 'naz-pathanamthitta', collegeName: 'Nazareth College of Pharmacy, Thiruvalla, Pathanamthitta', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 31591, EZ: null, MU: null, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },
  { collegeId: 'neh-thrissur', collegeName: 'Nehru College of Pharmacy, Pampady, Thiruvilwamala, Thrissur', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 9846, EZ: 15110, MU: 11525, LA: null, DV: null, VK: null, BH: 12987, BX: null, KN: 20170, KU: null, SC: 18406, ST: null, EW: 11131 } },
  { collegeId: 'nir-ernakulam', collegeName: 'Nirmala College of Pharmacy, Muvattupuzha, Ernakulam', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 10721, EZ: 16100, MU: 15397, LA: null, DV: null, VK: 14377, BH: null, BX: 11075, KN: null, KU: 13426, SC: 20111, ST: null, EW: null } },
  { collegeId: 'nat-kozhikode', collegeName: 'National College of Pharmacy, Manassery, Mukkam, Kozhikode', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 6935, EZ: 17522, MU: 8067, LA: null, DV: null, VK: 15255, BH: 24298, BX: 8910, KN: null, KU: null, SC: 25829, ST: null, EW: 23795 } },
  { collegeId: 'pus-pathanamthitta', collegeName: 'Pushpagiri College of Pharmacy, Thiruvalla, Pathanamthitta', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 8897, EZ: 16648, MU: 10845, LA: 12943, DV: null, VK: null, BH: 20305, BX: 10055, KN: null, KU: null, SC: 32083, ST: null, EW: null } },
  { collegeId: 'pri-palakkad', collegeName: 'Prime College of Pharmacy, Erattayil, Palakkad', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 22122, EZ: null, MU: 26122, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 25796, ST: null, EW: null } },
  { collegeId: 'raj-kasaragod', collegeName: 'Rajiv Gandhi Institute of Pharmacy, Hosdurg, Kasaragod', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 17896, EZ: 23846, MU: 20689, LA: null, DV: null, VK: null, BH: 18266, BX: 20908, KN: null, KU: null, SC: null, ST: null, EW: 25992 } },
  { collegeId: 'dep-kottayam', collegeName: 'Department of Pharmaceutical Science, Puthuppally, Kottayam', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 6931, EZ: 11462, MU: 8386, LA: 10668, DV: null, VK: null, BH: 7991, BX: null, KN: null, KU: null, SC: 10313, ST: null, EW: 23621 } },
  { collegeId: 'st-alappuzha', collegeName: "St. Joseph's College of Pharmacy, Cherthala, Alappuzha", collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 17496, EZ: 21235, MU: 20784, LA: null, DV: null, VK: null, BH: 20382, BX: null, KN: null, KU: 21025, SC: 19890, ST: null, EW: null } },
  { collegeId: 'st-idukki', collegeName: "St. John's College of Pharmaceutical Sciences & Research, Idukki", collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 24977, EZ: null, MU: null, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: null, ST: null, EW: null } },
  { collegeId: 'sre-parassala', collegeName: 'Sree Krishna College of Pharmacy & Research Centre, Parassala.', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 21815, EZ: null, MU: 24210, LA: null, DV: null, VK: null, BH: 23633, BX: null, KN: null, KU: null, SC: 28861, ST: null, EW: null } },
  { collegeId: 'san-palakkad', collegeName: 'Sanjo College of Pharmaceutical Studies, Kuzhalmannam, Palakkad', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 23396, EZ: 23703, MU: 26406, LA: 23964, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 29756, ST: null, EW: null } },
  { collegeId: 'sre-alappuzha', collegeName: 'Sree Gokulam SNGM College of Pharmacy Thuravoor, Alappuzha', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 26645, EZ: null, MU: 30570, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 27852, ST: null, EW: null } },
  { collegeId: 'tri-pharmacy', collegeName: 'Triveni Institute of Pharmacy', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 19211, EZ: 26567, MU: 24824, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 30823, ST: null, EW: 26957 } },
  { collegeId: 'wes-thrissur', collegeName: 'Westfort College of Pharmacy, Thrissur', collegeType: 'Self-Financing', branch: 'B.Pharm', year: 2025, round: 'Second Phase Allotment', cutoffs: { SM: 22186, EZ: 31253, MU: 23931, LA: null, DV: null, VK: null, BH: null, BX: null, KN: null, KU: null, SC: 26961, ST: null, EW: 27189 } },
];

export const keamCutoffs = rawKeamCutoffs.flatMap(item => {
  if (item.courses) {
    return item.courses.map(course => ({
      collegeId: item.collegeId,
      collegeCode: item.collegeCode,
      collegeName: item.collegeName,
      collegeType: item.collegeType,
      year: item.year,
      round: item.round,
      branch: course.courseName,
      cutoffs: course.cutoffs
    }));
  }
  return item;
});


export const keamBranches = [...new Set(keamCutoffs.map(c => c.branch))].sort();

export const keamColleges = [...new Map(keamCutoffs.map(item => [
  item.collegeId, 
  { id: item.collegeId, name: item.collegeName }
])).values()].sort((a, b) => a.name.localeCompare(b.name));