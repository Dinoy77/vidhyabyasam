import React, { useState } from 'react';

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = ['B.Pharm', 'M.Pharm', 'Nursing', 'GNM', 'Government'];

  return (
    <section style={styles.hero}>
      {/* Background pattern */}
      <div style={styles.bg} />
      <div style={styles.bgCircle1} />
      <div style={styles.bgCircle2} />

      <div style={styles.content}>
        <div style={styles.badge}>🇮🇳 South India's #1 College Discovery Platform</div>

        <h1 style={styles.heading}>
          Find Your Perfect<br />
          <span style={styles.highlight}>College</span> in Soth India
        </h1>

        <p style={styles.sub}>
          Explore 500+ colleges across Kerala, Bangalore & Tamil Nadu.<br />
          Compare, enquire, and take the first step towards your dream career.
        </p>

        <form style={styles.searchBox} onSubmit={handleSearch}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            style={styles.searchInput}
            type="text"
            placeholder="Search colleges, courses, cities..."
            value={query}
            onChange={e => { setQuery(e.target.value); onSearch(e.target.value); }}
          />
          <button type="submit" style={styles.searchBtn}>Search</button>
        </form>

        <div style={styles.quickLinks}>
          <span style={styles.quickLabel}>Popular:</span>
          {quickLinks.map(q => (
            <button
              key={q}
              style={styles.quickChip}
              onClick={() => { onSearch(q); document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div style={styles.stats}>
          {[
            { num: '500+', label: 'Colleges' },
            { num: '3', label: 'States' },
            { num: '50K+', label: 'Students Helped' },
            { num: '200+', label: 'Courses' },
          ].map(s => (
            <div key={s.label} style={styles.stat}>
              <strong style={styles.statNum}>{s.num}</strong>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative', minHeight: '92vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden', padding: '100px 24px 60px',
  },
  bg: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(160deg, #0D1117 0%, #1a2a4a 50%, #0D1117 100%)',
    zIndex: 0,
  },
  bgCircle1: {
    position: 'absolute', top: '-100px', right: '-100px',
    width: '500px', height: '500px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(232,71,10,0.15) 0%, transparent 70%)',
    zIndex: 1,
  },
  bgCircle2: {
    position: 'absolute', bottom: '-80px', left: '-80px',
    width: '400px', height: '400px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(27,108,168,0.2) 0%, transparent 70%)',
    zIndex: 1,
  },
  content: {
    position: 'relative', zIndex: 2,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    textAlign: 'center', maxWidth: '780px', gap: '20px',
  },
  badge: {
    background: 'rgba(232,71,10,0.15)', border: '1px solid rgba(232,71,10,0.4)',
    color: '#F5A623', padding: '6px 18px', borderRadius: '40px',
    fontSize: '13px', fontWeight: 600, letterSpacing: '0.5px',
    animation: 'fadeUp 0.5s ease both',
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900,
    color: '#fff', lineHeight: 1.1, letterSpacing: '-1px',
    animation: 'fadeUp 0.6s ease 0.1s both',
  },
  highlight: {
    color: 'var(--accent)',
    textShadow: '0 0 40px rgba(232,71,10,0.4)',
  },
  sub: {
    color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: 1.7,
    animation: 'fadeUp 0.6s ease 0.2s both',
  },
  searchBox: {
    display: 'flex', alignItems: 'center', gap: '0',
    background: '#fff', borderRadius: '14px',
    overflow: 'hidden', width: '100%', maxWidth: '560px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
    border: '2px solid rgba(232,71,10,0.3)',
    animation: 'fadeUp 0.6s ease 0.3s both',
  },
  searchIcon: { padding: '0 16px', fontSize: '18px' },
  searchInput: {
    flex: 1, padding: '16px 0', fontSize: '15px',
    border: 'none', background: 'transparent', color: 'var(--deep)',
    fontFamily: 'DM Sans, sans-serif',
  },
  searchBtn: {
    padding: '14px 28px', background: 'var(--accent)', color: '#fff',
    border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
    fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.5px',
  },
  quickLinks: {
    display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap',
    justifyContent: 'center', animation: 'fadeUp 0.6s ease 0.4s both',
  },
  quickLabel: { color: 'rgba(255,255,255,0.5)', fontSize: '13px' },
  quickChip: {
    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff', padding: '5px 14px', borderRadius: '20px',
    fontSize: '12px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
  },
  stats: {
    display: 'flex', gap: '40px', marginTop: '16px',
    animation: 'fadeUp 0.6s ease 0.5s both',
  },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' },
  statNum: { fontSize: '28px', fontFamily: 'Playfair Display, serif', color: '#fff' },
  statLabel: { fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' },
};
