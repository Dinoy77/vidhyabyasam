import React, { useState, useEffect } from 'react';

// SSR-Safe Responsive Hook
function useResponsive() {
  const [width, setWidth] = useState(1200);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) return { isMobile: false, isTablet: false };
  return { isMobile: width < 768, isTablet: width < 1024 };
}

export default function Footer() {
  const { isMobile, isTablet } = useResponsive();
  const styles = getStyles(isMobile, isTablet);

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brand}>
          <div style={styles.logo}>🎓 Vidya<span style={{ color: 'var(--accent)' }}>bhyasam</span></div>
          <p style={styles.tagline}>
            Helping students find their dream colleges<br />across South India since 2026.
          </p>
          <div style={styles.social}>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61590390937659"
              target="_blank"
              rel="noreferrer"
              style={styles.socialLink}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#0D1117">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/vidyabhyasam360/"
              target="_blank"
              rel="noreferrer"
              style={styles.socialLink}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D1117" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#0D1117" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div style={styles.links}>
          {[
            {
              title: 'Regions', items: ['Kerala Colleges', 'Karnataka Colleges', 'Tamil Nadu Colleges', 'All States']
            },
            {
              title: 'Courses', items: ['Engineering', 'Medical', 'MBA', 'Law', 'Arts & Science']
            },
            {
              title: 'Company', items: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Use']
            },
          ].map(col => (
            <div key={col.title} style={styles.col}>
              <h4 style={styles.colTitle}>{col.title}</h4>
              {col.items.map(item => (
                <a key={item} href="#" style={styles.link}>{item}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={{ margin: 0 }}>© 2026 Developed & Maintained by KFS Innovations Pvt Ltd</p>
        <p style={{ margin: 0, color: 'rgba(0,0,0,0.35)', fontSize: '12px' }}>
          Built for People Who are Ambitious about Future
        </p>
      </div>
    </footer>
  );
}

// ---------------- Dynamic Responsive Styles ---------------- //
const getStyles = (isMobile, isTablet) => ({
  footer: {
    background: '#f0e8dc', color: '#0D1117',
    borderTop: '2px solid var(--accent)',
    padding: isMobile ? '40px 20px 24px' : '60px 48px 24px',
    marginTop: isMobile ? '40px' : '80px',
    boxSizing: 'border-box',
    width: '100%',
    overflowX: 'hidden'
  },
  inner: {
    maxWidth: '1200px', margin: '0 auto',
    display: 'flex',
    flexDirection: isTablet ? 'column' : 'row', // Stacks vertically on smaller screens
    gap: isMobile ? '40px' : '60px',
    paddingBottom: '40px',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
  },
  brand: {
    flex: 1.2, display: 'flex', flexDirection: 'column', gap: '16px',
    alignItems: isTablet ? 'center' : 'flex-start',
    textAlign: isTablet ? 'center' : 'left'
  },
  logo: { fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 900 },
  tagline: { color: 'rgba(0,0,0,0.5)', fontSize: '14px', lineHeight: 1.7, margin: 0 },
  social: { display: 'flex', gap: '12px' },
  socialLink: {
    width: '36px', height: '36px', borderRadius: '8px',
    background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.1)',
    cursor: 'pointer', fontSize: '14px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textDecoration: 'none', transition: 'background 0.2s ease',
  },
  links: {
    flex: 3, display: 'flex', gap: '48px',
    justifyContent: isTablet ? 'space-between' : 'flex-end',
    flexWrap: 'wrap' // Allows columns to wrap neatly on mobile
  },
  col: {
    display: 'flex', flexDirection: 'column', gap: '10px',
    minWidth: isMobile ? '120px' : 'auto' // Prevents squishing on mobile
  },
  colTitle: {
    fontSize: '12px', fontWeight: 700, letterSpacing: '1px',
    textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)',
    marginBottom: '4px', margin: 0
  },
  link: {
    fontSize: '14px', color: 'rgba(0,0,0,0.65)',
    textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer'
  },
  bottom: {
    maxWidth: '1200px', margin: '24px auto 0',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row', // Stack text vertically on mobile
    justifyContent: isMobile ? 'center' : 'space-between',
    alignItems: 'center',
    gap: isMobile ? '12px' : '0',
    fontSize: '13px', color: 'rgba(0,0,0,0.5)',
    textAlign: isMobile ? 'center' : 'left'
  },
});