import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import { dropDownData } from '../data/dropDownData';

const courseCategories = [
  { 
    title: 'Pharmacy', 
    icon: '💊', 
    color: '#1B6CA8', 
    courses: ['B.Pharm', 'M.Pharm', 'D.Pharm', 'Pharm.D'] 
  },
  { 
    title: 'Nursing', 
    icon: '🩺', 
    color: '#059669', 
    courses: ['B.Sc Nursing', 'M.Sc Nursing', 'GNM', 'ANM', 'Post Basic B.Sc Nursing'] 
  },
  {
    title: 'Allied Health', 
    icon: '🏥', 
    color: '#7C3AED', 
    courses: [
      'BPT', 'BHA', 'MLT', 'BAMS',
      'B.Sc MLT', 'B.Sc RIT', 'B.Sc CT', 'B.Sc OTAT',
      'B.Sc RT', 'B.Sc DT', 'B.Sc CCT', 'B.Sc CVT',
      'B.Sc CPT', 'B.Sc NST', 'B.Sc Optometry', 'B.Optom', 'DPT',
    ]
  },
  { 
    title: 'Medical', 
    icon: '🔬', 
    color: '#DC2626', 
    courses: ['MBBS', 'MD', 'MS', 'DM', 'Paramedical'] 
  },
  { 
    title: 'Engineering & IT', 
    icon: '⚙️', 
    color: '#EA580C', 
    courses: ['B.Tech', 'M.Tech', 'B.E', 'M.E', 'BCA', 'MCA', 'B.Arch', 'M.Arch', 'Diploma in Engineering'] 
  }
];

export const articleRouteMap = {
  // Top Ranked Medical Colleges
  "Top Medical Colleges in South India": "/articles/TopIndianMedicalColleges", 
  "Top Government Medical Colleges": "/articles/TopGovtMedicalColleges",
  "Top Medical Colleges in Karnataka": "/articles/TopKarnatakaMedicalColleges",
  "Top Medical Colleges in Tamil Nadu": "/articles/TopTamilNaduMedicalColleges",
  "Top Medical Colleges in Kerala": "/articles/TopKeralaMedicalColleges",
  "Top Private Medical Colleges in South India": "/articles/TopPrivateMedicalColleges",
  
  // Top Ranked Engineering Colleges
  "Top Engineering Colleges in South India": "/articles/TopIndianEngineeringColleges",
  "Top Engineering Colleges in Kerala": "/articles/EngineeringCollegesKerala",
  "Top Engineering Colleges in Karnataka": "/articles/EngineeringCollegesKarnataka",
  "Top Engineering Colleges in Tamil Nadu": "/articles/EngineeringCollegesTamilNadu",
  "Best Engineering Colleges for Computer Science": "/articles/BestCSEngineeringColleges",

  // Popular Medical Courses
  "MBBS (Bachelor of Medicine, Bachelor of Surgery)": "/articles/MbbsCourseGuide",
  "BDS (Bachelor of Dental Surgery)": "/articles/BdsCourseGuide",
  "BAMS (Ayurvedic Medicine)": "/articles/BamsCourseGuide",
  "BHMS Course Guide": "/articles/BhmsCourseGuide",
  "BSc Nursing": "/articles/BscNursingCourseGuide",
  "B.Pharm (Pharmacy)": "/articles/BPharmCourseGuide",
  "Pharm D Course Details": "/articles/PharmDCourseGuide",
  "B.Pharm vs Pharm D": "/articles/BPharmVsPharmD",

  // Popular Engineering & IT Courses
  "B.Tech (Bachelor of Technology)": "/articles/BTechCourseGuide",
  "M.Tech (Master of Technology)": "/articles/MTechCourseGuide",
  "BCA (Bachelor of Computer Applications)": "/articles/BcaCourseGuide",
  "MCA (Master of Computer Applications)": "/articles/McaCourseGuide",
  "B.Arch (Bachelor of Architecture)": "/articles/BArchCourseGuide",
  "Artificial Intelligence Engineering": "/articles/AiEngineeringGuide",
  "Data Science Engineering": "/articles/DataScienceEngineeringGuide",
  "Cyber Security Engineering": "/articles/CyberSecurityEngineeringGuide",
  "Top Emerging Engineering Courses": "/articles/TopEmergingEngineeringCourses",

  // Medical Exams
  "NEET UG": "/articles/NeetUgGuide",
  "NEET PG": "/articles/NeetPgGuide",
  "INI CET": "/articles/IniCetGuide",
  "FMGE": "/articles/FmgeGuide",
  "AIIMS Nursing Exam": "/articles/AiimsNursingGuide",

  // Engineering Entrance Exams
  "JEE Main": "/articles/JeeMainGuide",
  "JEE Advanced": "/articles/JeeAdvancedGuide",
  "GATE": "/articles/GateGuide",
  "KEAM": "/articles/KeamGuide",
  "KCET": "/articles/KcetGuide",
  "COMEDK": "/articles/ComedkGuide",

  // Admission Guides
  "MBBS Admission 2026": "/articles/MbbsAdmission2026",
  "Engineering Admission 2026": "/articles/EngineeringAdmission2026",
  "Pharmacy Admission 2026": "/articles/PharmacyAdmission2026",
  "Nursing Admission 2026": "/articles/NursingAdmission2026",
  "KEAM Counselling Guide": "/articles/KeamCounsellingGuide",
  "NEET Counselling Guide": "/articles/NeetCounsellingGuide",
  "MCC Counselling Guide": "/articles/MccCounsellingGuide",

  // Transit / Location Guides
  "Top Colleges Near Major Airports and Railway Stations": "/articles/CollegesNearAirports",
};

export default function Navbar({ onCourseSelect = () => { } }) {
  const { user, logout } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  
  const navRef = useRef(null);
  const coursesTimeout = useRef(null);
  const articlesTimeout = useRef(null);
  const navigate = useNavigate();

  const articleCategories = dropDownData ? Object.keys(dropDownData) : [];
  const [activeArticleCat, setActiveArticleCat] = useState(articleCategories[0] || "");

  const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setCoursesOpen(false);
        setArticlesOpen(false);
        setShowDropdown(false);
        setMenuOpen(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleCoursesEnter = () => {
    clearTimeout(coursesTimeout.current);
    setCoursesOpen(true);
    setArticlesOpen(false); 
  };

  const handleCoursesLeave = () => {
    coursesTimeout.current = setTimeout(() => setCoursesOpen(false), 200); 
  };

  const handleArticlesEnter = () => {
    clearTimeout(articlesTimeout.current);
    setArticlesOpen(true);
    setCoursesOpen(false); 
  };

  const handleArticlesLeave = () => {
    articlesTimeout.current = setTimeout(() => setArticlesOpen(false), 200); 
  };

  const handleArticleClick = (e, articleName) => {
    e.preventDefault();
    setArticlesOpen(false);
    setMenuOpen(false);

    const targetRoute = articleRouteMap[articleName] || `/articles/${createSlug(articleName)}`;
    navigate(targetRoute);
  };

  return (
    <>
      <nav style={styles.nav} ref={navRef}>
        <div style={{ ...styles.logo, cursor: 'pointer' }} onClick={() => navigate('/')}>
          <span style={styles.logoIcon}>🎓</span>
          <span style={styles.logoText}>Vidya<span style={{ color: 'var(--accent)' }}>bhyasam</span></span>
        </div>

        <div style={styles.navLinks} className="hide-mobile">
          <a href="/#colleges" style={styles.link} onClick={() => navigate('/')}>Colleges</a>
          <a href="/#regions" style={styles.link} onClick={() => navigate('/')}>By Region</a>
          
          <div style={styles.dropdownWrapper}
            onMouseEnter={handleCoursesEnter}
            onMouseLeave={handleCoursesLeave}>
            <span style={{ ...styles.link, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: coursesOpen ? 'var(--accent)' : 'var(--muted)' }}>
              Courses <span style={{ fontSize: '10px' }}>{coursesOpen ? '▴' : '▾'}</span>
            </span>
          </div>

          <div style={styles.dropdownWrapper}
            onMouseEnter={handleArticlesEnter}
            onMouseLeave={handleArticlesLeave}>
            <span style={{ ...styles.link, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: articlesOpen ? 'var(--accent)' : 'var(--muted)' }}>
              Articles <span style={{ fontSize: '10px' }}>{articlesOpen ? '▴' : '▾'}</span>
            </span>
          </div>
        </div>

        <div style={styles.navRight}>
          {user ? (
            <div style={{ position: 'relative' }}>
              <button style={styles.avatarBtn} onClick={() => setShowDropdown(!showDropdown)}>
                <span style={styles.avatarCircle}>{user.avatar}</span>
                <span className="hide-mobile" style={styles.userName}>{user.name.split(' ')[0]}</span>
                <span>▾</span>
              </button>
              {showDropdown && (
                <div style={styles.dropdown} className="animate-slideDown">
                  <div style={styles.dropdownUser}>
                    <strong>{user.name}</strong>
                    <small style={{ color: 'var(--muted)' }}>{user.email}</small>
                  </div>
                  <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '8px 0' }} />
                  <button style={styles.dropdownItem} onClick={() => { logout(); setShowDropdown(false); }}>
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button style={styles.loginBtn} onClick={() => setShowAuth('login')}>Log In</button>
              <button style={styles.signupBtn} onClick={() => setShowAuth('signup')}>Sign Up</button>
            </>
          )}
          <button className="hide-desktop" style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Courses Mega Menu */}
        {coursesOpen && (
          <div style={styles.megaMenuBackdrop}
            onMouseEnter={handleCoursesEnter}
            onMouseLeave={handleCoursesLeave}
            onClick={(e) => {
              if(e.target === e.currentTarget) setCoursesOpen(false);
            }}>
            <div style={styles.megaMenu}>
              {courseCategories.map(cat => (
                <div key={cat.title} style={{
                  ...styles.megaCol,
                  flex: cat.title === 'Allied Health' ? 2 : 1,
                }}>
                  <div style={{ ...styles.megaColHeader, background: cat.color }}>
                    <span style={styles.megaColIcon}>{cat.icon}</span>
                    <span style={styles.megaColTitle}>{cat.title}</span>
                  </div>
                  <div style={{
                    ...styles.megaColItems,
                    flexDirection: cat.title === 'Allied Health' ? 'row' : 'column',
                    flexWrap: cat.title === 'Allied Health' ? 'wrap' : 'nowrap',
                  }}>
                    {cat.courses.map(course => (
                      <button key={course}
                        style={{
                          ...styles.megaItem,
                          width: cat.title === 'Allied Health' ? 'calc(50% - 4px)' : '100%',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#FFF4EE'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        onClick={() => { 
                          onCourseSelect(course); 
                          setCoursesOpen(false); 
                          navigate('/'); 
                        }}>
                        {course}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Desktop Articles Mega Menu */}
        {articlesOpen && (
          <div style={styles.megaMenuBackdrop}
            onMouseEnter={handleArticlesEnter}
            onMouseLeave={handleArticlesLeave}
            onClick={(e) => {
              if(e.target === e.currentTarget) setArticlesOpen(false);
            }}>
            <div style={styles.articlesMegaMenu}>
              
              <div style={styles.menuLeft}>
                {articleCategories.map((category) => (
                  <div
                    key={category}
                    style={{
                      ...styles.categoryItem,
                      ...(activeArticleCat === category ? styles.activeCategory : {})
                    }}
                    onMouseEnter={() => setActiveArticleCat(category)}
                  >
                    <span>{category}</span>
                    <span style={{ ...styles.arrow, color: activeArticleCat === category ? 'var(--accent)' : '#ccc' }}>›</span>
                  </div>
                ))}
              </div>

              <div style={styles.menuRight}>
                {dropDownData[activeArticleCat]?.length > 0 ? (
                  <div style={styles.linksGrid}>
                    {dropDownData[activeArticleCat].map((article, idx) => (
                      <a 
                        key={idx} 
                        href="/" 
                        style={styles.articleLink}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--deep)'}
                        onClick={(e) => handleArticleClick(e, article)}
                      >
                        {article}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p style={styles.emptyState}>No articles found.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={styles.mobileMenu} className="animate-slideDown hide-desktop">
          <a href="/#colleges" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Colleges</a>
          <a href="/#regions" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>By Region</a>
          
          <div>
            <button style={styles.mobileLinkBtn} onClick={() => setCoursesOpen(!coursesOpen)}>
              <span>Courses</span>
              <span style={{ fontSize: '11px' }}>{coursesOpen ? '▴' : '▾'}</span>
            </button>
            {coursesOpen && (
              <div style={styles.mobileCoursesPanel}>
                {courseCategories.map(cat => (
                  <div key={cat.title} style={styles.mobileCatBlock}>
                    <div style={{ ...styles.mobileCatHeader, background: cat.color }}>
                      <span>{cat.icon}</span>
                      <span style={styles.mobileCatTitle}>{cat.title}</span>
                    </div>
                    {cat.courses.map(course => (
                      <button key={course} style={styles.mobileCourseItem}
                        onClick={() => { 
                          onCourseSelect(course); 
                          setCoursesOpen(false); 
                          setMenuOpen(false); 
                          navigate('/'); 
                        }}>
                        {course}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <button style={styles.mobileLinkBtn} onClick={() => setArticlesOpen(!articlesOpen)}>
              <span>Articles</span>
              <span style={{ fontSize: '11px' }}>{articlesOpen ? '▴' : '▾'}</span>
            </button>
            {articlesOpen && (
              <div style={styles.mobileCoursesPanel}>
                {articleCategories.map(category => (
                  <div key={category} style={styles.mobileAccordionBlock}>
                    
                    <div 
                      style={{
                        ...styles.mobileAccordionHeader,
                        borderBottom: activeArticleCat === category ? '1px solid var(--border)' : 'none',
                      }}
                      onClick={() => setActiveArticleCat(activeArticleCat === category ? "" : category)}
                    >
                      <span style={{ 
                        fontSize: '13px', 
                        fontWeight: activeArticleCat === category ? 700 : 600,
                        color: activeArticleCat === category ? 'var(--accent)' : 'var(--deep)'
                      }}>
                        {category}
                      </span>
                      <span style={{ color: 'var(--muted)', fontSize: '16px' }}>
                        {activeArticleCat === category ? '▾' : '›'}
                      </span>
                    </div>

                    {activeArticleCat === category && (
                      <div style={styles.mobileAccordionContent}>
                        {dropDownData[category].map(article => (
                          <a 
                            key={article} 
                            href="/" 
                            style={styles.mobileAccordionLink}
                            onClick={(e) => handleArticleClick(e, article)}
                          >
                            {article}
                          </a>
                        ))}
                      </div>
                    )}

                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {showAuth && (
        <AuthModal mode={showAuth} onClose={() => setShowAuth(false)} onSwitch={m => setShowAuth(m)} />
      )}
    </>
  );
}

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 24px', height: '64px',
    background: 'rgba(255,248,240,0.97)', backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--border)', boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
  },
  logo: { display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 900 },
  logoIcon: { fontSize: '22px' },
  logoText: { letterSpacing: '-0.5px' },
  navLinks: { display: 'flex', gap: '32px', alignItems: 'center', textDecoration: 'none', height: '100%' },
  link: { fontSize: '14px', fontWeight: 500, color: 'var(--muted)', textDecoration: 'none' },
  navRight: { display: 'flex', gap: '10px', alignItems: 'center' },
  loginBtn: { padding: '7px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 500, background: 'transparent', border: '1.5px solid var(--deep)', color: 'var(--deep)' },
  signupBtn: { padding: '7px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, background: 'var(--accent)', color: '#fff', border: 'none' },
  avatarBtn: { display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1.5px solid var(--border)', borderRadius: '40px', padding: '5px 12px 5px 5px', fontSize: '13px', fontWeight: 500, cursor: 'pointer' },
  avatarCircle: { width: '28px', height: '28px', borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700 },
  userName: { fontWeight: 600 },
  dropdown: { position: 'absolute', top: '42px', right: 0, background: '#fff', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '1px solid var(--border)', padding: '12px', minWidth: '190px', zIndex: 100 },
  dropdownUser: { display: 'flex', flexDirection: 'column', gap: '2px', padding: '4px 8px', fontSize: '14px' },
  dropdownItem: { width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '8px', borderRadius: '8px', fontSize: '14px', cursor: 'pointer', color: 'var(--accent)', fontWeight: 500 },
  hamburger: { background: 'none', border: '1.5px solid var(--border)', borderRadius: '8px', width: '36px', height: '36px', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: '4px' },
  mobileMenu: { position: 'absolute', top: '64px', left: 0, right: 0, zIndex: 998, background: '#fff', borderBottom: '1px solid var(--border)', display: 'flex', flexDirection: 'column', padding: '8px 0', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' },
  mobileLink: { padding: '14px 24px', fontSize: '15px', fontWeight: 500, color: 'var(--deep)', borderBottom: '1px solid var(--border)', display: 'block', textDecoration: 'none' },
  mobileLinkBtn: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px', fontSize: '15px', fontWeight: 500, color: 'var(--deep)', borderBottom: '1px solid var(--border)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', textAlign: 'left' },
  mobileCoursesPanel: { background: 'var(--cream, #fafaf9)', borderBottom: '1px solid var(--border)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '65vh', overflowY: 'auto' },
  mobileCatBlock: { borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border)' },
  mobileCatHeader: { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px' },
  mobileCatTitle: { fontSize: '13px', fontWeight: 700, color: '#fff' },
  mobileCourseItem: { width: '100%', textAlign: 'left', padding: '9px 14px', fontSize: '13px', fontWeight: 500, background: '#fff', border: 'none', borderTop: '1px solid var(--border)', cursor: 'pointer', color: 'var(--deep)', fontFamily: 'DM Sans, sans-serif' },
  
  dropdownWrapper: { position: 'relative', display: 'flex', alignItems: 'center', height: '64px', padding: '0 4px' },
  megaMenuBackdrop: { position: 'fixed', top: '64px', left: 0, right: 0, height: '100vh', zIndex: 1999, display: 'flex', justifyContent: 'center', paddingTop: '0px', background: 'transparent' },
  
  // Desktop Courses Mega Menu
  megaMenu: { background: '#fff', borderRadius: '0 0 16px 16px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '1px solid var(--border)', borderTop: 'none', padding: '12px', display: 'flex', gap: '8px', zIndex: 2000, width: '960px', maxWidth: '95vw', height: 'fit-content' },
  megaCol: { flex: 1, borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' },
  megaColHeader: { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px' },
  megaColIcon: { fontSize: '16px' },
  megaColTitle: { fontSize: '12px', fontWeight: 700, color: '#fff', letterSpacing: '0.5px' },
  megaColItems: { display: 'flex', flexDirection: 'column', padding: '6px', gap: '2px' },
  megaItem: { textAlign: 'left', background: 'transparent', border: 'none', padding: '7px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: 500, color: 'var(--deep)', cursor: 'pointer', transition: 'background 0.15s', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.4 },

  // Desktop Articles Mega Menu Styles
  articlesMegaMenu: { background: '#fff', borderRadius: '0 0 16px 16px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '1px solid var(--border)', borderTop: 'none', display: 'flex', overflow: 'hidden', zIndex: 2000, width: '760px', maxWidth: '95vw', height: 'fit-content' },
  menuLeft: { width: '40%', background: '#fff', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border)' },
  categoryItem: { padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '14px', color: 'var(--deep)', transition: 'background 0.2s', fontWeight: 500 },
  activeCategory: { color: 'var(--accent)', backgroundColor: 'var(--cream, #fafaf9)', fontWeight: 700 },
  arrow: { fontSize: '18px', fontWeight: 'bold' },
  menuRight: { width: '60%', background: 'var(--cream, #fafaf9)', padding: '24px' },
  linksGrid: { display: 'flex', flexDirection: 'column', gap: '14px' },
  articleLink: { textDecoration: 'none', color: 'var(--deep)', fontSize: '14px', transition: 'color 0.2s', lineHeight: '1.4', fontWeight: 500 },
  emptyState: { color: 'var(--muted)', fontSize: '14px', fontStyle: 'italic' },

  // Mobile Articles Accordion Styles
  mobileAccordionBlock: { background: '#fff', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '8px', overflow: 'hidden' },
  mobileAccordionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', cursor: 'pointer', background: '#fff' },
  mobileAccordionContent: { display: 'flex', flexDirection: 'column', background: 'var(--cream, #fafaf9)' },
  mobileAccordionLink: { padding: '10px 16px 10px 24px', fontSize: '13px', color: '#555', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', display: 'block', lineHeight: 1.4 },
};