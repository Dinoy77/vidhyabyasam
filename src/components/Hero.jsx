import React, { useState, useEffect } from 'react';

const newsItems = [
  { id: 1, icon: '📝', color: '#1B6CA8', bg: '#EBF5FF', tag: 'Exam Alert', title: 'KEAM 2024 Registration Open', date: 'Deadline: Mar 15' },
  { id: 2, icon: '🏥', color: '#DC2626', bg: '#FFF0F0', tag: 'Exam Alert', title: 'NEET UG 2024 — Apply Now', date: 'Deadline: Mar 9' },
  { id: 3, icon: '🎓', color: '#7C3AED', bg: '#F5F0FF', tag: 'Admission', title: 'KCET 2024 Applications Live', date: 'Deadline: Mar 20' },
  { id: 4, icon: '💊', color: '#059669', bg: '#ECFDF5', tag: 'Results', title: 'GPAT 2024 Results Declared', date: 'Today' },
  { id: 5, icon: '📋', color: '#E8470A', bg: '#FFF4EE', tag: 'Admission', title: 'TANCET 2024 Notification Released', date: 'Deadline: Feb 28' },
  { id: 6, icon: '🌴', color: '#1B6CA8', bg: '#EBF5FF', tag: 'News', title: 'Kerala Pharmacy Admissions 2024', date: '2 days ago' },
  { id: 7, icon: '🏆', color: '#F5A623', bg: '#FFFBEB', tag: 'Scholarship', title: 'National Merit Scholarship Open', date: 'Deadline: Apr 1' },
  { id: 8, icon: '🔬', color: '#7C3AED', bg: '#F5F0FF', tag: 'News', title: 'New Allied Health Courses 2024', date: '3 days ago' },
];

function NewsTicker() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveIndex(i => (i + 1) % newsItems.length);
        setFade(true);
      }, 300);
    }, 3500);
    return () => clearInterval(t);
  }, [isPaused]);

  const current = newsItems[activeIndex];

  return (
    <div style={ns.box}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div style={ns.header}>
        <div style={ns.headerLeft}>
          <span style={ns.liveDot} />
          <span style={ns.headerTitle}>Latest Updates</span>
        </div>
        <span style={ns.count}>{activeIndex + 1}/{newsItems.length}</span>
      </div>

      {/* Featured */}
      <div style={{
        ...ns.featured,
        opacity: fade ? 1 : 0,
        transform: fade ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}>
        <div style={{ ...ns.featuredBg, background: current.bg }}>
          <span style={{ ...ns.tagPill, background: current.color }}>{current.icon} {current.tag}</span>
          <span style={ns.bigEmoji}>{current.icon}</span>
        </div>
        <div style={ns.featuredBody}>
          <p style={{ ...ns.featuredTitle, color: current.color }}>{current.title}</p>
          <p style={ns.featuredDate}>🗓 {current.date}</p>
        </div>
      </div>

      {/* Dots */}
      <div style={ns.dots}>
        {newsItems.map((item, i) => (
          <button key={i} style={{
            ...ns.dot,
            background: i === activeIndex ? current.color : 'rgba(255,255,255,0.3)',
            width: i === activeIndex ? '18px' : '6px',
          }} onClick={() => { setFade(false); setTimeout(() => { setActiveIndex(i); setFade(true); }, 200); }} />
        ))}
      </div>

      {/* List */}
      <div style={ns.list}>
        {newsItems.map((item, i) => (
          <button key={item.id} style={{
            ...ns.listItem,
            background: i === activeIndex ? 'rgba(255,255,255,0.12)' : 'transparent',
            borderLeft: `3px solid ${i === activeIndex ? item.color : 'transparent'}`,
          }}
            onClick={() => { setFade(false); setTimeout(() => { setActiveIndex(i); setFade(true); }, 200); }}
          >
            <span style={ns.listIcon}>{item.icon}</span>
            <div style={ns.listInfo}>
              <p style={{ ...ns.listTitle, color: i === activeIndex ? '#fff' : 'rgba(255,255,255,0.75)' }}>
                {item.title}
              </p>
              <p style={ns.listDate}>{item.date}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

const slides = [
  null,
  '/images/students1.jpg',
];

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentSlide(i => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = ['B.Pharm', 'M.Pharm', 'Nursing', 'GNM', 'Government'];

  return (
    <section style={styles.hero}>
      {/* Background slideshow */}
      <div style={styles.slidesWrap}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, #0D1117 0%, #1a2a4a 50%, #0D1117 100%)',
          opacity: currentSlide === 0 ? 1 : 0,
          transition: 'opacity 1.5s ease',
        }} />
        {slides.slice(1).map((src, i) => (
          <img
            key={src}
            src={src}
            alt="students"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              opacity: currentSlide === i + 1 ? 1 : 0,
              transition: 'opacity 1.5s ease',
            }}
          />
        ))}
        <div style={styles.slideOverlay} />
      </div>

      <div style={styles.bgCircle1} />
      <div style={styles.bgCircle2} />

      <div style={styles.inner}>
        {/* Left — search content */}
        <div style={styles.left}>
          <div style={styles.badge}>🇮🇳 South India's #1 College Discovery Platform</div>

          <h1 style={styles.heading}>
            Find Your Perfect{' '}
            <span style={styles.highlight}>College</span>
            {' '}in South India
          </h1>

          <p style={styles.sub}>
            Explore 261 colleges across Kerala, Bangalore & Tamil Nadu.
            Compare, enquire, and start your dream career.
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
              <button key={q} style={styles.quickChip}
                onClick={() => { onSearch(q); document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' }); }}>
                {q}
              </button>
            ))}
          </div>

          <div style={styles.stats}>
            {[
              { num: '261', label: 'Colleges' },
              { num: '3', label: 'States' },
              { num: '50K+', label: 'Helped' },
              { num: '20+', label: 'Courses' },
            ].map(s => (
              <div key={s.label} style={styles.stat}>
                <strong style={styles.statNum}>{s.num}</strong>
                <span style={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — news sidebar */}
        <div style={styles.right}>
          <NewsTicker />
        </div>
      </div>
      {/* Quote bar */}
      <div style={styles.quoteBar}>
        <span style={styles.quoteDot} />
        <span style={styles.quoteText}>Support · Guidance · Genuinity</span>
        <span style={styles.quoteDot} />
      </div>

      {/* Slide indicators */}
      <div style={styles.slideIndicators}>
        {slides.map((_, i) => (
          <button
            key={i}
            style={{
              ...styles.slideIndicator,
              background: i === currentSlide ? '#fff' : 'rgba(255,255,255,0.3)',
              width: i === currentSlide ? '24px' : '8px',
            }}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </section>
  );
}

const ns = {
  box: {
    background: 'rgba(255,255,255,0.07)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '16px', overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
  },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '12px 14px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '8px' },
  liveDot: {
    width: '8px', height: '8px', borderRadius: '50%',
    background: '#4ADE80', boxShadow: '0 0 0 3px rgba(74,222,128,0.3)',
    animation: 'pulse 2s infinite', flexShrink: 0,
  },
  headerTitle: { fontSize: '13px', fontWeight: 700, color: '#fff', fontFamily: 'Playfair Display, serif' },
  count: { fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 },

  featured: { display: 'flex', flexDirection: 'column' },
  featuredBg: {
    padding: '12px 14px', minHeight: '60px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    position: 'relative',
  },
  tagPill: {
    fontSize: '10px', fontWeight: 700, color: '#fff',
    padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.5px',
  },
  bigEmoji: { fontSize: '32px', opacity: 0.3 },
  featuredBody: { padding: '10px 14px 8px', display: 'flex', flexDirection: 'column', gap: '4px' },
  featuredTitle: { fontSize: '13px', fontWeight: 700, lineHeight: 1.4 },
  featuredDate: { fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontWeight: 500 },

  dots: {
    display: 'flex', gap: '4px', padding: '6px 14px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    alignItems: 'center',
  },
  dot: {
    height: '6px', borderRadius: '3px',
    border: 'none', cursor: 'pointer',
    transition: 'all 0.3s ease', padding: 0, flexShrink: 0,
  },

  list: { display: 'flex', flexDirection: 'column', maxHeight: '220px', overflowY: 'auto' },
  listItem: {
    display: 'flex', alignItems: 'center', gap: '8px',
    padding: '8px 12px', cursor: 'pointer',
    background: 'none', border: 'none',
    borderLeft: '3px solid transparent',
    textAlign: 'left', transition: 'all 0.2s',
    fontFamily: 'DM Sans, sans-serif',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  listIcon: { fontSize: '16px', flexShrink: 0 },
  listInfo: { flex: 1, minWidth: 0 },
  listTitle: { fontSize: '11px', fontWeight: 600, lineHeight: 1.3, marginBottom: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  listDate: { fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontWeight: 500 },
};

const styles = {
  hero: {
    position: 'relative', minHeight: '100svh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden', padding: 'clamp(80px,12vw,120px) clamp(16px,4vw,48px) 60px',
  },
  slidesWrap: { position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' },
  slideOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(160deg, rgba(13,17,23,0.88) 0%, rgba(13,17,23,0.7) 50%, rgba(13,17,23,0.88) 100%)',
    zIndex: 1,
  },
  quoteBar: {
    position: 'absolute', bottom: '32px', left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10, display: 'flex', alignItems: 'center', gap: '14px',
    background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
    padding: '12px 32px', borderRadius: '40px', whiteSpace: 'nowrap',
  },
  quoteDot: { width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 },
  quoteText: { fontSize: 'clamp(11px,2vw,14px)', fontWeight: 700, color: '#fff', letterSpacing: '4px', textTransform: 'uppercase' },
  slideIndicators: {
    position: 'absolute', bottom: '80px', left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10, display: 'flex', gap: '6px', alignItems: 'center',
  },
  slideIndicator: {
    height: '6px', borderRadius: '3px',
    border: 'none', cursor: 'pointer',
    transition: 'all 0.3s ease', padding: 0,
  },
  bgCircle1: { position: 'absolute', top: '-100px', right: '-100px', width: 'clamp(200px,40vw,500px)', height: 'clamp(200px,40vw,500px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,71,10,0.15) 0%, transparent 70%)', zIndex: 2 },
  bgCircle2: { position: 'absolute', bottom: '-80px', left: '-80px', width: 'clamp(160px,35vw,400px)', height: 'clamp(160px,35vw,400px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,108,168,0.2) 0%, transparent 70%)', zIndex: 2 },

  inner: {
    position: 'relative', zIndex: 3,
    display: 'flex', alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'clamp(24px,4vw,60px)',
    maxWidth: '1200px', width: '100%',
  },

  left: {
    flex: 1, display: 'flex', flexDirection: 'column',
    alignItems: 'flex-start', gap: '18px',
  },
  right: {
    width: '100%',
    maxWidth: 'clamp(260px,28vw,320px)',
    flexShrink: 0,
  },

  badge: {
    background: 'rgba(232,71,10,0.15)', border: '1px solid rgba(232,71,10,0.4)',
    color: '#F5A623', padding: '6px 16px', borderRadius: '40px',
    fontSize: 'clamp(11px,2.5vw,13px)', fontWeight: 600, letterSpacing: '0.5px',
    animation: 'fadeUp 0.5s ease both',
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: 900,
    color: '#fff', lineHeight: 1.15, letterSpacing: '-1px',
    animation: 'fadeUp 0.6s ease 0.1s both',
  },
  highlight: { color: 'var(--accent)', textShadow: '0 0 40px rgba(232,71,10,0.4)' },
  sub: {
    color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(13px,2vw,15px)',
    lineHeight: 1.7, animation: 'fadeUp 0.6s ease 0.2s both', maxWidth: '500px',
  },
  searchBox: {
    display: 'flex', alignItems: 'center',
    background: '#fff', borderRadius: '12px', overflow: 'hidden',
    width: '100%', maxWidth: '500px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
    border: '2px solid rgba(232,71,10,0.3)',
    animation: 'fadeUp 0.6s ease 0.3s both',
  },
  searchIcon: { padding: '0 12px', fontSize: '16px', flexShrink: 0 },
  searchInput: {
    flex: 1, padding: '14px 0', fontSize: 'clamp(13px,2vw,15px)',
    border: 'none', background: 'transparent', color: 'var(--deep)',
    fontFamily: 'DM Sans, sans-serif', minWidth: 0,
  },
  searchBtn: {
    padding: '12px 20px', background: 'var(--accent)', color: '#fff',
    border: 'none', fontWeight: 700, fontSize: 'clamp(12px,2vw,14px)',
    cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', flexShrink: 0,
  },
  quickLinks: {
    display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap',
    animation: 'fadeUp 0.6s ease 0.4s both',
  },
  quickLabel: { color: 'rgba(255,255,255,0.5)', fontSize: '12px' },
  quickChip: {
    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff', padding: '5px 12px', borderRadius: '20px',
    fontSize: '12px', fontWeight: 500, cursor: 'pointer',
  },
  stats: {
    display: 'flex', gap: 'clamp(16px,3vw,32px)',
    animation: 'fadeUp 0.6s ease 0.5s both', flexWrap: 'wrap',
  },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' },
  statNum: { fontSize: 'clamp(20px,3vw,28px)', fontFamily: 'Playfair Display, serif', color: '#fff' },
  statLabel: { fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' },
};