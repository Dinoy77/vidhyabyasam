import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
// Make sure this points to your newly separated data file
import { dropDownData, thirdHierarchyData, articleRouteMap } from '../data/dropDownData';

function useResponsive() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { isMobile: width < 768, isTablet: width < 1024 };
}

const courseCategories = [
  { 
    title: 'Pharmacy', 
    icon: '💊', 
    color: '#1B6CA8', 
    courses: ['B.Pharm', 'M.Pharm', 'D.Pharm', 'Pharm.D', 'Ph.D'] 
  },
  { 
    title: 'Nursing', 
    icon: '🩺', 
    color: '#059669', 
    courses: ['B.Sc Nursing', 'M.Sc Nursing', 'GNM', 'ANM', 'Post Basic B.Sc Nursing', 'Ph.D Nursing'] 
  },
  { 
    title: 'Allied Health', 
    icon: '🏥', 
    color: '#7C3AED', 
    courses: [
      'BPT', 'DPT', 'BHA', 'Paramedical', 'Allied Health Sciences', 'B.Sc AHS',
      'B.Sc MLT', 'B.Sc RIT', 'B.Sc OTAT', 'B.Sc DT', 'B.Sc RT', 'B.Sc CT', 
      'B.Sc CVT', 'B.Sc CPT', 'B.Sc CCT', 'B.Optom', 'B.Sc NEPT', 'B.Sc PA', 'B.Sc NST'
    ] 
  },
  { 
    title: 'Medical', 
    icon: '🔬', 
    color: '#DC2626', 
    courses: ['MBBS', 'BDS', 'BAMS', 'MD', 'MS', 'DM', 'M.Ch', 'PG Diploma'] 
  },
  { 
    title: 'Engineering & IT', 
    icon: '⚙️', 
    color: '#EA580C', 
    courses: ['B.Tech', 'M.Tech', 'B.E', 'M.E', 'BCA', 'MCA', 'B.Arch', 'M.Arch', 'Diploma in Engineering'] 
  }
];

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

  const { isMobile, isTablet } = useResponsive();
  const styles = getStyles(isMobile, isTablet);

  const articleCategories = Object.keys(dropDownData);
  const [activeArticleCat, setActiveArticleCat] = useState(articleCategories[0] || "");
  const [activeSubItem, setActiveSubItem] = useState("");

  const [mobileActiveCourseCat, setMobileActiveCourseCat] = useState("");
  const [mobileActiveArticleCat, setMobileActiveArticleCat] = useState("");
  const [mobileActiveSubItem, setMobileActiveSubItem] = useState("");

  const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setCoursesOpen(false);
        setArticlesOpen(false);
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (menuOpen && isTablet) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [menuOpen, isTablet]);

  const handleCoursesEnter = () => {
    if (isTablet) return;
    clearTimeout(coursesTimeout.current);
    setCoursesOpen(true);
    setArticlesOpen(false);
  };

  const handleCoursesLeave = () => {
    if (isTablet) return;
    coursesTimeout.current = setTimeout(() => setCoursesOpen(false), 200);
  };

  const handleArticlesEnter = () => {
    if (isTablet) return;
    clearTimeout(articlesTimeout.current);
    setArticlesOpen(true);
    setCoursesOpen(false);
  };

  const handleArticlesLeave = () => {
    if (isTablet) return;
    articlesTimeout.current = setTimeout(() => setArticlesOpen(false), 200);
  };

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 150);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleArticleClick = (e, articleName) => {
    e.preventDefault();
    setArticlesOpen(false);
    setMenuOpen(false);
    const targetRoute = articleRouteMap[articleName] || `/articles/${createSlug(articleName)}`;
    navigate(targetRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCourseClick = (course) => {
    onCourseSelect(course);
    setCoursesOpen(false);
    setMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <nav style={styles.nav} ref={navRef}>
        <div style={{ ...styles.logo, cursor: 'pointer' }} onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/images/logo.png" alt="Vidyabhyasam" style={{ height: isMobile ? '36px' : '48px', width: 'auto', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
          <span style={styles.logoText}>Vidya<span style={{ color: 'var(--accent)' }}>bhyasam</span></span>
        </div>

        {!isTablet && (
          <div style={styles.navLinks}>
            <span style={{ ...styles.link, cursor: 'pointer' }} onClick={() => scrollToSection('colleges')}>Colleges</span>
            <span style={{ ...styles.link, cursor: 'pointer' }} onClick={() => scrollToSection('regions')}>By Region</span>

            {/* Courses Dropdown Group */}
            <div style={styles.dropdownGroup} onMouseEnter={handleCoursesEnter} onMouseLeave={handleCoursesLeave}>
              <div style={styles.dropdownTrigger}>
                <span style={{ ...styles.link, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: coursesOpen ? 'var(--accent)' : 'var(--muted)' }}>
                  Courses <span style={{ fontSize: '10px' }}>{coursesOpen ? '▴' : '▾'}</span>
                </span>
              </div>
              
              {coursesOpen && (
                <div style={styles.megaMenuWrapper}>
                  <div style={styles.megaMenu}>
                    {courseCategories.map(cat => (
                      <div key={cat.title} style={{ ...styles.megaCol, flex: cat.title === 'Allied Health' ? 2 : 1 }}>
                        <div style={{ ...styles.megaColHeader, background: cat.color }}>
                          <span style={styles.megaColIcon}>{cat.icon}</span><span style={styles.megaColTitle}>{cat.title}</span>
                        </div>
                        <div style={{ ...styles.megaColItems, flexDirection: cat.title === 'Allied Health' ? 'row' : 'column', flexWrap: cat.title === 'Allied Health' ? 'wrap' : 'nowrap' }}>
                          {cat.courses.map(course => (
                            <button key={course} style={{ ...styles.megaItem, width: cat.title === 'Allied Health' ? 'calc(50% - 4px)' : '100%' }} onMouseEnter={e => e.currentTarget.style.background = '#FFF4EE'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'} onClick={() => handleCourseClick(course)}>
                              {course}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Articles Dropdown Group */}
            <div style={styles.dropdownGroup} onMouseEnter={handleArticlesEnter} onMouseLeave={handleArticlesLeave}>
              <div style={styles.dropdownTrigger}>
                <span style={{ ...styles.link, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: articlesOpen ? 'var(--accent)' : 'var(--muted)' }}>
                  Articles <span style={{ fontSize: '10px' }}>{articlesOpen ? '▴' : '▾'}</span>
                </span>
              </div>
              
              {articlesOpen && (
                <div style={styles.megaMenuWrapper}>
                  <div style={styles.articlesMegaMenu}>
                    {/* Column 1: Categories Panel */}
                    <div style={styles.menuLeft}>
                      {articleCategories.map((category) => (
                        <div
                          key={category}
                          style={{ ...styles.categoryItem, ...(activeArticleCat === category ? styles.activeCategory : {}) }}
                          onMouseEnter={() => {
                            setActiveArticleCat(category);
                            setActiveSubItem(""); // CRITICAL: Resets 3rd column when moving back to Left side
                          }}
                        >
                          <span>{category}</span>
                          <span style={{ ...styles.arrow, color: activeArticleCat === category ? 'var(--accent)' : '#ccc' }}>›</span>
                        </div>
                      ))}
                    </div>

                    {/* Column 2: Sub-items Panel */}
                    <div style={styles.menuMiddle}>
                      {dropDownData[activeArticleCat]?.map((subItem) => {
                        const hasThirdTier = !!thirdHierarchyData[subItem];
                        return (
                          <div
                            key={subItem}
                            style={{ ...styles.subCategoryItem, ...(activeSubItem === subItem ? styles.activeSubCategory : {}) }}
                            onMouseEnter={() => setActiveSubItem(subItem)}
                            onClick={(e) => handleArticleClick(e, subItem)} // REMOVED the !hasThirdTier restriction!
                          >
                            <span>{subItem}</span>
                            {hasThirdTier && <span style={styles.subArrow}>›</span>}
                          </div>
                        );
                      })}
                    </div>

                    {/* Column 3: Fixed Context Panel */}
                    <div style={styles.menuRight}>
                      {thirdHierarchyData[activeSubItem] ? (
                        <div style={styles.linksGrid}>
                          <p style={styles.tier3Heading}>Filter By Top Cities</p>
                          {thirdHierarchyData[activeSubItem].map((cityArticle, idx) => (
                            <div
                              key={idx}
                              style={styles.articleLink}
                              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                              onMouseLeave={e => e.currentTarget.style.color = 'var(--deep)'}
                              onClick={(e) => handleArticleClick(e, cityArticle)}
                            >
                              {cityArticle}
                            </div>
                          ))}
                        </div>
                      ) : activeSubItem ? (
                        <div style={styles.overviewState}> 
                          <p style={styles.tier3Heading}>Article Overview</p>
                          <h4 style={styles.overviewTitle}>{activeSubItem}</h4>
                          <p style={styles.overviewText}>Read our comprehensive guide, including detailed rankings, fee structures, and placement records.</p>
                          <button style={styles.overviewBtn} onClick={(e) => handleArticleClick(e, activeSubItem)}>Read Article →</button>
                        </div>
                      ) : (
                        <div style={styles.overviewState}>
                          <p style={styles.tier3Heading}>Category Overview</p>
                          <h4 style={styles.overviewTitle}>{activeArticleCat}</h4>
                          <p style={styles.overviewText}>Explore our expertly curated guides, institutional rankings, and admission resources for this section.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <span style={{ ...styles.link, cursor: 'pointer' }} onClick={() => navigate('/blog')}>Blogs</span>
          </div>
        )}

        <div style={styles.navRight}>
          {user ? (
            <div style={{ position: 'relative' }}>
              <button style={isTablet ? styles.avatarBtnMobile : styles.avatarBtn} onClick={() => setShowDropdown(!showDropdown)}>
                <span style={styles.avatarCircle}>{user.avatar}</span>
                {!isTablet && <span style={styles.userName}>{user.name.split(' ')[0]}</span>}
                {!isTablet && <span>▾</span>}
              </button>
              {showDropdown && (
                <div style={styles.dropdown} className="animate-slideDown">
                  <div style={styles.dropdownUser}><strong>{user.name}</strong><small style={{ color: 'var(--muted)' }}>{user.email}</small></div>
                  <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '8px 0' }} />
                  <button style={styles.dropdownItem} onClick={() => { logout(); setShowDropdown(false); }}>🚪 Logout</button>
                </div>
              )}
            </div>
          ) : (
            !isTablet && (
              <>
                <button style={styles.loginBtn} onClick={() => setShowAuth('login')}>Log In</button>
                <button style={styles.signupBtn} onClick={() => setShowAuth('signup')}>Sign Up</button>
              </>
            )
          )}
          {isTablet && <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isTablet && menuOpen && (
        <div style={styles.mobileMenu} className="animate-slideDown">
          {!user && (
            <div style={styles.mobileAuthRow}>
              <button style={styles.mobileLoginBtn} onClick={() => { setMenuOpen(false); setShowAuth('login'); }}>Log In</button>
              <button style={styles.mobileSignupBtn} onClick={() => { setMenuOpen(false); setShowAuth('signup'); }}>Sign Up</button>
            </div>
          )}
          <span style={{ ...styles.mobileLink, cursor: 'pointer' }} onClick={() => scrollToSection('colleges')}>Colleges</span>
          <span style={{ ...styles.mobileLink, cursor: 'pointer' }} onClick={() => scrollToSection('regions')}>By Region</span>
          <span style={{ ...styles.mobileLink, cursor: 'pointer' }} onClick={() => { setMenuOpen(false); navigate('/blog'); }}>Blogs</span>
          
          <div>
            <button style={styles.mobileLinkBtn} onClick={() => { setCoursesOpen(!coursesOpen); if (!coursesOpen) setArticlesOpen(false); }}>
              <span>Courses</span><span style={{ fontSize: '11px' }}>{coursesOpen ? '▴' : '▾'}</span>
            </button>
            {coursesOpen && (
              <div style={styles.mobilePanel}>
                {courseCategories.map(cat => (
                  <div key={cat.title} style={styles.mobileAccordionBlock}>
                    <div style={styles.mobileAccordionHeader} onClick={() => setMobileActiveCourseCat(mobileActiveCourseCat === cat.title ? "" : cat.title)}>
                      <span style={{ fontSize: '14px', fontWeight: mobileActiveCourseCat === cat.title ? 700 : 600, color: mobileActiveCourseCat === cat.title ? 'var(--accent)' : 'var(--deep)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>{cat.icon}</span> {cat.title}
                      </span>
                      <span style={{ color: 'var(--muted)', fontSize: '18px' }}>{mobileActiveCourseCat === cat.title ? '▾' : '›'}</span>
                    </div>
                    {mobileActiveCourseCat === cat.title && (
                      <div style={styles.mobileAccordionContent}>
                        {cat.courses.map(course => <button key={course} style={styles.mobileCourseItem} onClick={() => handleCourseClick(course)}>{course}</button>)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <button style={styles.mobileLinkBtn} onClick={() => { setArticlesOpen(!articlesOpen); if (!articlesOpen) setCoursesOpen(false); }}>
              <span>Articles</span><span style={{ fontSize: '11px' }}>{articlesOpen ? '▴' : '▾'}</span>
            </button>
            {articlesOpen && (
              <div style={styles.mobilePanel}>
                {articleCategories.map(category => (
                  <div key={category} style={styles.mobileAccordionBlock}>
                    <div style={styles.mobileAccordionHeader} onClick={() => setMobileActiveArticleCat(mobileActiveArticleCat === category ? "" : category)}>
                      <span style={{ fontSize: '14px', fontWeight: mobileActiveArticleCat === category ? 700 : 600, color: mobileActiveArticleCat === category ? 'var(--accent)' : 'var(--deep)' }}>{category}</span>
                      <span style={{ color: 'var(--muted)', fontSize: '18px' }}>{mobileActiveArticleCat === category ? '▾' : '›'}</span>
                    </div>
                    {mobileActiveArticleCat === category && (
                      <div style={styles.mobileAccordionContent}>
                        {dropDownData[category].map(subItem => {
                          const hasThirdTier = !!thirdHierarchyData[subItem];
                          return (
                            <div key={subItem} style={{ borderBottom: '1px solid #f9f9f9' }}>
                              {/* SPLIT MOBILE LOGIC: Text Navigates, Arrow Opens Accordion */}
                              <div style={{ ...styles.mobileAccordionLink, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span 
                                  style={{ flex: 1, cursor: 'pointer' }}
                                  onClick={(e) => handleArticleClick(e, subItem)}
                                >
                                  {subItem}
                                </span>
                                {hasThirdTier && (
                                  <span 
                                    style={{ fontSize: '11px', color: '#999', padding: '5px 10px', cursor: 'pointer' }} 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setMobileActiveSubItem(mobileActiveSubItem === subItem ? "" : subItem);
                                    }}
                                  >
                                    {mobileActiveSubItem === subItem ? '▼' : '▶'}
                                  </span>
                                )}
                              </div>
                              {hasThirdTier && mobileActiveSubItem === subItem && (
                                <div style={{ background: '#fcfbf7', paddingLeft: '12px' }}>
                                  {thirdHierarchyData[subItem].map(cityItem => (
                                    <div key={cityItem} style={styles.mobileTier3Link} onClick={(e) => handleArticleClick(e, cityItem)}>📍 {cityItem.split(' in ')[1] || cityItem}</div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}
      {showAuth && <AuthModal mode={showAuth} onClose={() => setShowAuth(false)} onSwitch={m => setShowAuth(m)} />}
    </>
  );
}

// ---------------- Dynamic Responsive Styles ---------------- //
const getStyles = (isMobile, isTablet) => ({
  nav: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, width: '100vw', maxWidth: '100vw', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isMobile ? '0 16px' : '0 24px', height: isMobile ? '60px' : '64px', background: 'rgba(255,248,240,0.97)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)', boxShadow: '0 2px 20px rgba(0,0,0,0.06)' },
  logo: { display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '20px' : '24px', fontWeight: 900, flexShrink: 1, minWidth: 0 },
  logoText: { letterSpacing: '-0.5px' },
  navLinks: { display: 'flex', gap: '32px', alignItems: 'center', textDecoration: 'none', height: '100%' },
  link: { fontSize: '14px', fontWeight: 500, color: 'var(--muted)', textDecoration: 'none' },
  navRight: { display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 },
  loginBtn: { padding: '7px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 500, background: 'transparent', border: '1.5px solid var(--deep)', color: 'var(--deep)', cursor: 'pointer' },
  signupBtn: { padding: '7px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer' },
  avatarBtn: { display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1.5px solid var(--border)', borderRadius: '40px', padding: '5px 12px 5px 5px', fontSize: '13px', fontWeight: 500, cursor: 'pointer' },
  avatarBtnMobile: { display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', padding: 0, margin: 0, cursor: 'pointer', outline: 'none' },
  avatarCircle: { width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700 },
  userName: { fontWeight: 600 },
  dropdown: { position: 'absolute', top: isMobile ? '50px' : '42px', right: isMobile ? '40px' : '0', background: '#fff', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '1px solid var(--border)', padding: '12px', minWidth: '190px', zIndex: 100 },
  dropdownUser: { display: 'flex', flexDirection: 'column', gap: '2px', padding: '4px 8px', fontSize: '14px' },
  dropdownItem: { width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '8px', borderRadius: '8px', fontSize: '14px', cursor: 'pointer', color: 'var(--accent)', fontWeight: 500 },
  hamburger: { background: '#fff', border: '1.5px solid var(--border)', borderRadius: '8px', width: '38px', minWidth: '38px', height: '38px', minHeight: '38px', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: isMobile ? '4px' : '8px', flexShrink: 0, color: 'var(--deep)', padding: 0 },
  
  mobileMenu: { position: 'fixed', top: isMobile ? '60px' : '64px', left: 0, right: 0, zIndex: 998, width: '100vw', maxWidth: '100vw', boxSizing: 'border-box', background: '#fff', borderBottom: '1px solid var(--border)', display: 'flex', flexDirection: 'column', padding: '0 0 40px 0', boxShadow: '0 8px 20px rgba(0,0,0,0.08)', maxHeight: 'calc(100dvh - 60px)', overflowY: 'auto', WebkitOverflowScrolling: 'touch' },
  mobileAuthRow: { display: 'flex', gap: '12px', padding: '16px 24px', borderBottom: '1px solid var(--border)', background: 'var(--cream, #fafaf9)' },
  mobileLoginBtn: { flex: 1, padding: '12px', borderRadius: '8px', border: '1.5px solid var(--accent)', color: 'var(--accent)', background: 'transparent', fontWeight: 700, fontSize: '14px', cursor: 'pointer' },
  mobileSignupBtn: { flex: 1, padding: '12px', borderRadius: '8px', border: 'none', color: '#fff', background: 'var(--accent)', fontWeight: 700, fontSize: '14px', cursor: 'pointer' },
  mobileLink: { padding: '16px 24px', fontSize: '15px', fontWeight: 600, color: 'var(--deep)', borderBottom: '1px solid var(--border)', display: 'block', textDecoration: 'none' },
  mobileLinkBtn: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', fontSize: '15px', fontWeight: 600, color: 'var(--deep)', borderBottom: '1px solid var(--border)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', textAlign: 'left' },
  mobilePanel: { background: 'var(--cream, #fafaf9)', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: '1px solid var(--border)' },
  mobileAccordionBlock: { background: '#fff', borderRadius: '10px', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' },
  mobileAccordionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', cursor: 'pointer', background: '#fff' },
  mobileAccordionContent: { display: 'flex', flexDirection: 'column', background: 'var(--cream, #fafaf9)', borderTop: '1px solid #f0f0f0' },
  mobileCourseItem: { width: '100%', textAlign: 'left', padding: '12px 16px 12px 24px', fontSize: '13px', fontWeight: 500, background: 'transparent', border: 'none', borderBottom: '1px solid #f0f0f0', cursor: 'pointer', color: '#444', fontFamily: 'DM Sans, sans-serif' },
  mobileAccordionLink: { padding: '12px 16px 12px 24px', fontSize: '13px', color: '#444', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', display: 'block', lineHeight: 1.4, fontWeight: 500 },
  mobileTier3Link: { padding: '10px 16px 10px 40px', fontSize: '12px', color: '#666', borderBottom: '1px dashed #f0f0f0', cursor: 'pointer', fontWeight: 500 },

  dropdownGroup: { position: 'relative', display: 'flex', alignItems: 'center', height: '64px' },
  dropdownTrigger: { display: 'flex', alignItems: 'center', height: '100%', padding: '0 4px' },

  megaMenuWrapper: { position: 'absolute', top: '64px', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center', zIndex: 1999 },
  
  megaMenu: { background: '#fff', borderRadius: '0 0 16px 16px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '1px solid var(--border)', borderTop: 'none', padding: '12px', display: 'flex', gap: '8px', zIndex: 2000, width: '960px', maxWidth: '95vw', height: 'fit-content' },
  megaCol: { flex: 1, borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' },
  megaColHeader: { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px' },
  megaColIcon: { fontSize: '16px' },
  megaColTitle: { fontSize: '12px', fontWeight: 700, color: '#fff', letterSpacing: '0.5px' },
  megaColItems: { display: 'flex', flexDirection: 'column', padding: '6px', gap: '2px' },
  megaItem: { textAlign: 'left', background: 'transparent', border: 'none', padding: '7px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: 500, color: 'var(--deep)', cursor: 'pointer', transition: 'background 0.15s', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.4 },

  articlesMegaMenu: { background: '#fff', borderRadius: '0 0 20px 20px', boxShadow: '0 30px 70px rgba(0,0,0,0.18)', border: '1px solid var(--border)', borderTop: 'none', display: 'flex', overflow: 'hidden', zIndex: 2000, width: '1080px', maxWidth: '96vw', height: 'fit-content', minHeight: '350px' },
  menuLeft: { width: '30%', background: '#fff', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border)', paddingBottom: '12px' },
  categoryItem: { padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '13px', color: 'var(--deep)', transition: 'background 0.2s', fontWeight: 600, borderBottom: '1px solid #FAF9F5' },
  activeCategory: { color: 'var(--accent)', backgroundColor: 'var(--cream, #fafaf9)', fontWeight: 700 },
  arrow: { fontSize: '16px', fontWeight: 'bold' },
  
  menuMiddle: { width: '35%', background: '#FCFBF7', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border)', padding: '10px 0 12px 0' },
  subCategoryItem: { padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '13px', color: 'var(--deep)', fontWeight: 500, borderRadius: '6px', margin: '2px 8px', transition: 'all 0.15s' },
  activeSubCategory: { backgroundColor: '#fff', color: 'var(--accent)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', fontWeight: 700 },
  subArrow: { fontSize: '14px', color: 'var(--accent)' },

  menuRight: { width: '35%', background: 'var(--cream, #fafaf9)', padding: '24px' },
  linksGrid: { display: 'flex', flexDirection: 'column', gap: '10px' },
  tier3Heading: { fontSize: '11px', fontWeight: 800, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', borderBottom: '1px solid var(--border)', paddingBottom: '6px' },
  articleLink: { fontSize: '13px', color: 'var(--deep)', fontWeight: 600, cursor: 'pointer', padding: '8px 12px', borderRadius: '6px', transition: 'background 0.2s', lineHeight: '1.4' },

  overviewState: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', padding: '0 10px' },
  overviewIcon: { fontSize: '28px', marginBottom: '16px', background: '#fff', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' },
  overviewTitle: { fontSize: '18px', fontWeight: 800, color: 'var(--deep)', marginBottom: '12px', lineHeight: 1.3 },
  overviewText: { fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '24px' },
  overviewBtn: { background: 'var(--accent)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', transition: 'background 0.2s' }
});