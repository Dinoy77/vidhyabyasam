import React from 'react';

export default function Footer() {
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
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/vidyabhyasam360/"
              target="_blank"
              rel="noreferrer"
              style={styles.socialLink}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
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
      </div >

    <div style={styles.bottom}>
      <p>© 2026 Vidyabhyasam. All rights reserved.</p>
      <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
        Built for People Who are Ambitious about Future
      </p>
    </div>
    </footer >
  );
}

const styles = {
  footer: {
    background: '#0D1117', color: '#fff',
    padding: '60px 48px 24px',
    marginTop: '80px',
  },
  inner: {
    maxWidth: '1200px', margin: '0 auto',
    display: 'flex', gap: '60px', paddingBottom: '40px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  brand: { flex: 1.2, display: 'flex', flexDirection: 'column', gap: '16px' },
  logo: { fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 900 },
  tagline: { color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.7 },
  social: { display: 'flex', gap: '8px' },
  socialIcon: {
    width: '36px', height: '36px', borderRadius: '8px',
    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
    cursor: 'pointer', fontSize: '14px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  socialLink: {
    width: '36px', height: '36px', borderRadius: '8px',
    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
    cursor: 'pointer', fontSize: '14px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textDecoration: 'none',
  },
  links: { flex: 3, display: 'flex', gap: '48px', justifyContent: 'flex-end' },
  col: { display: 'flex', flexDirection: 'column', gap: '10px' },
  colTitle: { fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' },
  link: { fontSize: '14px', color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s', cursor: 'pointer' },
  bottom: {
    maxWidth: '1200px', margin: '24px auto 0',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontSize: '13px', color: 'rgba(255,255,255,0.5)',
  },
};
