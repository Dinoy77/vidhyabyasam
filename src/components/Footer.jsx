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
      {/* Top Gradient Accent Bar */}
      <div style={styles.topAccent}></div>

      <div style={styles.inner}>
        <div style={styles.brand}>
          {/* Logo Section with Light Container */}
          <div style={styles.logo}>
            <div style={styles.logoImageWrapper}>
              <img 
                src="/images/logo.png" 
                alt="Vidyabhyasam Logo" 
                style={styles.logoImage} 
              />
            </div>
            <span>Vidya<span style={{ color: '#EA7B7B' }}>bhyasam</span></span>
          </div>
          
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
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#EA7B7B';
                e.currentTarget.style.borderColor = '#EA7B7B';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#D25353';
                e.currentTarget.style.borderColor = '#D25353';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFEAD3">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/vidyabhyasam360/"
              target="_blank"
              rel="noreferrer"
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#EA7B7B';
                e.currentTarget.style.borderColor = '#EA7B7B';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#D25353';
                e.currentTarget.style.borderColor = '#D25353';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFEAD3" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#FFEAD3" stroke="none" />
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
                <a 
                  key={item} 
                  href="#" 
                  style={styles.link}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#EA7B7B';
                    e.currentTarget.style.paddingLeft = '4px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FFEAD3';
                    e.currentTarget.style.paddingLeft = '0px';
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={styles.bottomText}>© 2026 Developed & Maintained by KFS Innovations Pvt Ltd</p>
        <p style={styles.bottomSubText}>Built for People Who are Ambitious about Future</p>
      </div>
    </footer>
  );
}

// ---------------- Dynamic Responsive Styles ---------------- //
const getStyles = (isMobile, isTablet) => ({
  footer: {
    background: '#9E3B3B', // Deep Muted Red Background
    color: '#FFEAD3', // Warm Cream Text
    position: 'relative',
    padding: isMobile ? '50px 20px 24px' : '70px 48px 24px',
    marginTop: isMobile ? '40px' : '80px',
    boxSizing: 'border-box',
    width: '100%',
    overflowX: 'hidden'
  },
  topAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #D25353, #EA7B7B, #D25353)', // Soft Coral Gradient
  },
  inner: {
    maxWidth: '1200px', margin: '0 auto',
    display: 'flex',
    flexDirection: isTablet ? 'column' : 'row', 
    gap: isMobile ? '40px' : '60px',
    paddingBottom: '40px',
    borderBottom: '1px solid #D25353', // Medium Red Border
  },
  brand: {
    flex: 1.2, display: 'flex', flexDirection: 'column', gap: '16px',
    alignItems: isTablet ? 'center' : 'flex-start',
    textAlign: isTablet ? 'center' : 'left'
  },
  logo: { 
    fontFamily: 'Playfair Display, serif', 
    fontSize: isMobile ? '22px' : '26px', // Scaled text for mobile
    fontWeight: 900,
    color: '#FFEAD3',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logoImageWrapper: {
    background: '#FFEAD3', // Light cream container for contrast
    width: isMobile ? '42px' : '56px',   // Responsive width
    height: isMobile ? '38px' : '50px',  // Responsive height
    borderRadius: '8px', // Soft rounded corners
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
  },
  logoImage: {
    width: isMobile ? '32px' : '48px',   // Responsive image width
    height: isMobile ? '32px' : '46px',  // Responsive image height
    objectFit: 'contain'
  },
  tagline: { 
    color: 'rgba(255, 234, 211, 0.8)', // Muted Cream
    fontSize: '15px', 
    lineHeight: 1.6, 
    margin: 0 
  },
  social: { display: 'flex', gap: '12px', marginTop: '4px' },
  socialLink: {
    width: '38px', height: '38px', borderRadius: '10px',
    background: '#D25353', // Medium Red Base
    border: '1px solid #D25353',
    cursor: 'pointer', fontSize: '14px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textDecoration: 'none', transition: 'all 0.25s ease',
  },
  links: {
    flex: 3, display: 'flex', gap: '48px',
    justifyContent: isTablet ? 'space-between' : 'flex-end',
    flexWrap: 'wrap' 
  },
  col: {
    display: 'flex', flexDirection: 'column', gap: '12px',
    minWidth: isMobile ? '120px' : 'auto' 
  },
  colTitle: {
    fontSize: '13px', fontWeight: 700, letterSpacing: '1px',
    textTransform: 'uppercase', 
    color: 'rgba(255, 234, 211, 0.6)', // Deeply Muted Cream for Headers
    marginBottom: '4px', margin: 0
  },
  link: {
    fontSize: '15px', color: '#FFEAD3', // Cream Links
    textDecoration: 'none', transition: 'all 0.2s ease', cursor: 'pointer',
    display: 'inline-block'
  },
  bottom: {
    maxWidth: '1200px', margin: '24px auto 0',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row', 
    justifyContent: isMobile ? 'center' : 'space-between',
    alignItems: 'center',
    gap: isMobile ? '12px' : '0',
    textAlign: isMobile ? 'center' : 'left'
  },
  bottomText: {
    margin: 0, 
    color: 'rgba(255, 234, 211, 0.85)', 
    fontWeight: 500,
    fontSize: '14px'
  },
  bottomSubText: {
    margin: 0, 
    color: 'rgba(255, 234, 211, 0.6)', 
    fontSize: '13px'
  }
});