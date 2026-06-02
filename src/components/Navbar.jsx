import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const courseCategories = [
  { title: 'Pharmacy', icon: '💊', color: '#1B6CA8', courses: ['B.Pharm', 'M.Pharm', 'D.Pharm', 'Pharm.D'] },
  { title: 'Nursing', icon: '🩺', color: '#059669', courses: ['B.Sc Nursing', 'M.Sc Nursing', 'GNM', 'ANM', 'Post Basic B.Sc Nursing'] },
  { title: 'Allied Health', icon: '🏥', color: '#7C3AED', courses: ['BPT', 'BHA', 'MLT', 'BAMS'] },
  { title: 'Medical', icon: '🔬', color: '#DC2626', courses: ['MBBS', 'MD', 'MS', 'Paramedical'] },
];

export default function Navbar({ onCourseSelect = () => {} }) {
  const { user, logout } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav style={styles.nav}>
        <div style={{ ...styles.logo, cursor: 'pointer' }} onClick={() => navigate('/')}>
          <span style={styles.logoIcon}>🎓</span>
          <span style={styles.logoText}>Vidya<span style={{ color: 'var(--accent)' }}>bhyasam</span></span>
        </div>

        <div style={styles.navLinks} className="hide-mobile">
          <a href="#colleges" style={styles.link}>Colleges</a>
          <a href="#regions" style={styles.link}>By Region</a>
          <div style={styles.dropdownWrapper}
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}>
            <span style={{ ...styles.link, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: coursesOpen ? 'var(--accent)' : 'var(--muted)' }}>
              Courses <span style={{ fontSize: '10px' }}>{coursesOpen ? '▴' : '▾'}</span>
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

        {coursesOpen && (
          <div style={styles.megaMenuBackdrop}
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}>
            <div style={styles.megaMenu}>
              {courseCategories.map(cat => (
                <div key={cat.title} style={styles.megaCol}>
                  <div style={{ ...styles.megaColHeader, background: cat.color }}>
                    <span style={styles.megaColIcon}>{cat.icon}</span>
                    <span style={styles.megaColTitle}>{cat.title}</span>
                  </div>
                  <div style={styles.megaColItems}>
                    {cat.courses.map(course => (
                      <button key={course} style={styles.megaItem}
                        onMouseEnter={e => e.currentTarget.style.background = '#FFF4EE'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        onClick={() => { onCourseSelect(course); setCoursesOpen(false); }}>
                        {course}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {menuOpen && (
        <div style={styles.mobileMenu} className="animate-slideDown hide-desktop">
          <a href="#colleges" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Colleges</a>
          <a href="#regions" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>By Region</a>
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
                        onClick={() => { onCourseSelect(course); setCoursesOpen(false); setMenuOpen(false); }}>
                        {course}
                      </button>
                    ))}
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
  navLinks: { display: 'flex', gap: '32px', alignItems: 'center' },
  link: { fontSize: '14px', fontWeight: 500, color: 'var(--muted)' },
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
  mobileMenu: { position: 'fixed', top: '110px', left: 0, right: 0, zIndex: 998, background: '#fff', borderBottom: '1px solid var(--border)', display: 'flex', flexDirection: 'column', padding: '8px 0', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' },
  mobileLink: { padding: '14px 24px', fontSize: '15px', fontWeight: 500, color: 'var(--deep)', borderBottom: '1px solid var(--border)', display: 'block' },
  mobileLinkBtn: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px', fontSize: '15px', fontWeight: 500, color: 'var(--deep)', borderBottom: '1px solid var(--border)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', textAlign: 'left' },
  mobileCoursesPanel: { background: 'var(--cream)', borderBottom: '1px solid var(--border)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '60vh', overflowY: 'auto' },
  mobileCatBlock: { borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border)' },
  mobileCatHeader: { display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px' },
  mobileCatTitle: { fontSize: '12px', fontWeight: 700, color: '#fff' },
  mobileCourseItem: { width: '100%', textAlign: 'left', padding: '9px 14px', fontSize: '13px', fontWeight: 500, background: '#fff', border: 'none', borderTop: '1px solid var(--border)', cursor: 'pointer', color: 'var(--deep)', fontFamily: 'DM Sans, sans-serif' },
  dropdownWrapper: { position: 'relative', paddingBottom: '20px', marginBottom: '-20px' },
  megaMenuBackdrop: { position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 1999, display: 'flex', justifyContent: 'center', paddingTop: '0px', background: 'transparent' },
  megaMenu: { background: '#fff', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '1px solid var(--border)', padding: '12px', display: 'flex', gap: '8px', zIndex: 2000, width: '760px', maxWidth: '95vw' },
  megaCol: { flex: 1, borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' },
  megaColHeader: { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px' },
  megaColIcon: { fontSize: '16px' },
  megaColTitle: { fontSize: '12px', fontWeight: 700, color: '#fff', letterSpacing: '0.5px' },
  megaColItems: { display: 'flex', flexDirection: 'column', padding: '6px', gap: '2px' },
  megaItem: { textAlign: 'left', background: 'transparent', border: 'none', padding: '7px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: 500, color: 'var(--deep)', cursor: 'pointer', transition: 'background 0.15s', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.4 },
};
