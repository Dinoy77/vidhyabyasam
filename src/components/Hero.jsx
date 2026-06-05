import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const newsItems = [
  {
    id: 1, icon: '📝', color: '#1B6CA8', bg: '#EBF5FF', tag: 'Exam Alert',
    title: 'KEAM 2026 Registration Open', date: 'Deadline: Mar 15',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80',
    description: 'Kerala Engineering Architecture Medical (KEAM) 2026 registration is now open. Students seeking admission to Engineering and Pharmacy courses in Kerala must apply before the deadline.',
    eligibility: 'Passed 10+2 with Physics, Chemistry and Mathematics/Biology',
    applyLink: 'https://cee.kerala.gov.in',
    courses: ['B.Pharm', 'M.Pharm', 'B.Tech'],
    state: 'Kerala',
  },
  {
    id: 2, icon: '🏥', color: '#DC2626', bg: '#FFF0F0', tag: 'Exam Alert',
    title: 'NEET UG 2026 — Apply Now', date: 'Deadline: Mar 9',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
    description: 'National Eligibility cum Entrance Test (NEET UG) 2026 applications are now live. This is the gateway for MBBS, BDS, and AYUSH admissions across India.',
    eligibility: 'Passed 10+2 with Physics, Chemistry and Biology with minimum 50%',
    applyLink: 'https://neet.nta.nic.in',
    courses: ['MBBS', 'BDS', 'BAMS'],
    state: 'All India',
  },
  {
    id: 3, icon: '🎓', color: '#7C3AED', bg: '#F5F0FF', tag: 'Admission',
    title: 'KCET 2026 Applications Live', date: 'Deadline: Mar 20',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80',
    description: 'Karnataka Common Entrance Test (KCET) 2026 applications are live for Engineering, Pharmacy, and other professional courses in Karnataka colleges.',
    eligibility: 'Passed 10+2 with relevant subjects from Karnataka',
    applyLink: 'https://kea.kar.nic.in',
    courses: ['B.Pharm', 'B.Tech', 'MBBS'],
    state: 'Karnataka',
  },
  {
    id: 4, icon: '💊', color: '#059669', bg: '#ECFDF5', tag: 'Results',
    title: 'GPAT 2026 Results Declared', date: 'Today',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80',
    description: 'Graduate Pharmacy Aptitude Test (GPAT) 2026 results have been officially declared by NTA. Candidates can now check their scores and ranks on the official portal.',
    eligibility: 'B.Pharm graduates',
    applyLink: 'https://gpat.nta.nic.in',
    courses: ['M.Pharm'],
    state: 'All India',
  },
  {
    id: 5, icon: '📋', color: '#E8470A', bg: '#FFF4EE', tag: 'Admission',
    title: 'TANCET 2026 Notification Released', date: 'Deadline: Feb 28',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
    description: 'Tamil Nadu Common Entrance Test (TANCET) 2026 official notification has been released for MBA, MCA, M.Tech, M.Arch and M.Plan admissions in Tamil Nadu.',
    eligibility: 'Relevant undergraduate degree with minimum 50%',
    applyLink: 'https://www.annauniv.edu/tancet',
    courses: ['MBA', 'MCA', 'M.Tech'],
    state: 'Tamil Nadu',
  },
  {
    id: 6, icon: '🌴', color: '#1B6CA8', bg: '#EBF5FF', tag: 'News',
    title: 'Kerala Pharmacy Admissions 2026', date: '2 days ago',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&q=80',
    description: 'Kerala University of Health Sciences has announced centralized allotment process for B.Pharm and D.Pharm admissions 2026 across all pharmacy colleges in Kerala.',
    eligibility: 'Passed 10+2 with Physics, Chemistry and Biology/Mathematics',
    applyLink: 'https://kuhs.ac.in',
    courses: ['B.Pharm', 'D.Pharm'],
    state: 'Kerala',
  },
  {
    id: 7, icon: '🏆', color: '#F5A623', bg: '#FFFBEB', tag: 'Scholarship',
    title: 'National Merit Scholarship Open', date: 'Deadline: Apr 1',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80',
    description: 'National Merit Scholarship applications are open for health science students. Students pursuing medical, pharmacy, and nursing courses can apply for up to ₹50,000 per year.',
    eligibility: 'Students with above 80% in 10+2 and enrolled in health science courses',
    applyLink: 'https://scholarships.gov.in',
    courses: ['B.Pharm', 'B.Sc Nursing', 'MBBS', 'BPT'],
    state: 'All India',
  },
  {
    id: 8, icon: '🔬', color: '#7C3AED', bg: '#F5F0FF', tag: 'News',
    title: 'New Allied Health Courses 2026', date: '3 days ago',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=400&q=80',
    description: 'Several colleges in Karnataka and Tamil Nadu are introducing new Allied Health Science specializations for 2026. These include Medical Lab Technology, Cardiac Care, and Neuroscience Technology.',
    eligibility: 'Passed 10+2 with Science subjects',
    applyLink: '#',
    courses: ['MLT', 'BPT', 'BHA'],
    state: 'Karnataka & Tamil Nadu',
  },
];

function NewsScrollBar({ navigate }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent(i => (i + 1) % newsItems.length);
        setAnimating(false);
      }, 400);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const item = newsItems[current];


  return (
    <div id="news" style={ns2.bar} onClick={() => navigate(`/news/${item.id}`)}>

      {/* Background image with overlay */}
      <img
        src={item.image}
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: animating ? 0 : 0.15,
          transition: 'opacity 0.4s ease',
          zIndex: 0,
        }}
      />

      {/* Left label */}
      <div style={{ ...ns2.label, zIndex: 1 }}>
        <span style={ns2.dot} />
        <span style={ns2.labelText}>🔔 LIVE</span>
      </div>

      {/* Left image */}
      <div style={{ ...ns2.imgBox, zIndex: 1 }}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: animating ? 0 : 1,
            transition: 'opacity 0.4s ease',
          }}
          onError={e => { e.target.src = 'https://images.shiksha.ws/public/images/instHeaderDesktop.jpg'; }}
        />
      </div>

      {/* Content */}
      <div style={{
        ...ns2.content, zIndex: 1,
        opacity: animating ? 0 : 1,
        transform: animating ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.4s ease',
      }}>
        <span style={{ ...ns2.tagPill, background: item.color }}>
          {item.icon} {item.tag}
        </span>
        <div style={ns2.textBlock}>
          <span style={ns2.title}>{item.title}</span>
          <span style={ns2.desc}>{item.description.slice(0, 80)}...</span>
        </div>
        <span style={ns2.date}>🗓 {item.date}</span>
      </div>

      {/* Right — Read more */}
      <div style={{ ...ns2.readMore, zIndex: 1 }}>
        <span style={ns2.readMoreText}>Read →</span>
      </div>

      {/* Progress dots */}
      <div style={ns2.dotsWrapper}>
        {newsItems.map((_, i) => (
          <span key={i} style={{
            ...ns2.progressDot,
            background: i === current ? '#fff' : 'rgba(255,255,255,0.3)',
            width: i === current ? '16px' : '5px',
          }} />
        ))}
      </div>
    </div>
  );
}

function NewsTicker({ onViewDetails }) {
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

  const goTo = (i) => {
    setFade(false);
    setTimeout(() => { setActiveIndex(i); setFade(true); }, 200);
  };

  return (
    <div
      style={ns.box}
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

      {/* Full featured card */}
      <div style={{
        ...ns.featured,
        opacity: fade ? 1 : 0,
        transform: fade ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        flex: 1,
      }}>
        {/* Image banner with tag overlay */}
        <div style={{ ...ns.featuredBg, background: current.bg, position: 'relative', overflow: 'hidden', minHeight: '160px', padding: 0 }}>
          <img
            src={current.image}
            alt={current.title}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              opacity: fade ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
            onError={e => { e.target.src = 'https://images.shiksha.ws/public/images/instHeaderDesktop.jpg'; }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)',
          }} />
          <span style={{
            ...ns.tagPill,
            background: current.color,
            position: 'absolute', top: '10px', left: '10px', zIndex: 1,
          }}>
            {current.icon} {current.tag}
          </span>
        </div>

        {/* Content */}
        <div style={ns.featuredBody}>
          <p style={{ ...ns.featuredTitle, color: current.color, fontSize: '15px' }}>
            {current.title}
          </p>
          <p style={ns.featuredDate}>🗓 {current.date}</p>

          {/* View Details button */}
          <button
            style={{
              ...ns.enquireBtn,
              background: current.color,
            }}
            onClick={() => onViewDetails(current)}
          >
            👁 View Details
          </button>
        </div>
      </div>

      {/* Dots */}
      <div style={ns.dots}>
        {newsItems.map((item, i) => (
          <button key={i} style={{
            ...ns.dot,
            background: i === activeIndex ? current.color : 'rgba(255,255,255,0.3)',
            width: i === activeIndex ? '18px' : '6px',
          }} onClick={() => goTo(i)} />
        ))}
      </div>

      {/* Nav arrows */}
      <div style={ns.arrows}>
        <button style={ns.arrowBtn} onClick={() => goTo((activeIndex - 1 + newsItems.length) % newsItems.length)}>
          ←
        </button>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>
          {activeIndex + 1} of {newsItems.length}
        </span>
        <button style={ns.arrowBtn} onClick={() => goTo((activeIndex + 1) % newsItems.length)}>
          →
        </button>
      </div>
    </div>
  );
}

const slides = [
  '/images/students1.jpg',
  '/images/students2.jpg',
  '/images/students3.jpg',
  null,
];


export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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
        {slides.map((src, i) => (
          src === null ? (
            <div key="dark" style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(160deg, #0D1117 0%, #1a2a4a 50%, #0D1117 100%)',
              opacity: currentSlide === i ? 1 : 0,
              transition: 'opacity 1.5s ease',
            }} />
          ) : (
            <img
              key={src}
              src={src}
              alt="students"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                opacity: currentSlide === i ? 1 : 0,
                transition: 'opacity 1.5s ease',
              }}
            />
          )
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
            Explore 489+ colleges across Kerala, Karnataka & Tamil Nadu.
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
              { num: '489+', label: 'Colleges' },
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
          <NewsTicker onViewDetails={(item) => navigate(`/news/${item.id}`)} />
        </div>
      </div>

      {/* News Scroll Bar */}
      <NewsScrollBar navigate={navigate} />

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
    minHeight: '420px',
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
  minHeight: '160px',
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

  enquireBtn: {
    marginTop: '14px',
    padding: '10px 16px',
    borderRadius: '10px',
    border: 'none',
    color: '#fff',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'DM Sans, sans-serif',
    letterSpacing: '0.3px',
  },
  arrows: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 14px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  arrowBtn: {
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff',
    width: '28px', height: '28px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
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
    maxWidth: 'clamp(300px,32vw,380px)',
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
const ns2 = {
  bar: {
    position: 'absolute', top: '8px', left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10, display: 'flex', alignItems: 'center',
    height: '116px',
    width: '96%', maxWidth: '1160px',
    background: 'linear-gradient(135deg, rgba(13,17,23,0.96), rgba(26,42,74,0.96))',
    backdropFilter: 'blur(20px)',
    borderRadius: '18px',
    border: '1px solid rgba(255,255,255,0.15)',
    boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(232,71,10,0.2)',
    cursor: 'pointer',
    overflow: 'hidden',
    gap: '0',
  },
  label: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', gap: '4px',
    background: 'var(--accent)', padding: '0 20px',
    height: '100%', flexShrink: 0,
    borderRight: '1px solid rgba(255,255,255,0.1)',
    minWidth: '80px',
  },
  dot: {
    width: '8px', height: '8px', borderRadius: '50%',
    background: '#4ADE80', flexShrink: 0,
    boxShadow: '0 0 0 3px rgba(74,222,128,0.3)',
    animation: 'pulse 2s infinite',
  },
  labelText: {
    fontSize: '10px', fontWeight: 800, color: '#fff',
    whiteSpace: 'nowrap', letterSpacing: '1px',
  },
  imgBox: {
    width: '120px', height: '100%',
    flexShrink: 0, overflow: 'hidden',
    borderRight: '1px solid rgba(255,255,255,0.1)',
  },
  content: {
    flex: 1, display: 'flex', alignItems: 'center',
    gap: '14px', padding: '0 24px', overflow: 'hidden',
  },
  tagPill: {
    fontSize: '11px', fontWeight: 700, color: '#fff',
    padding: '5px 14px', borderRadius: '20px',
    whiteSpace: 'nowrap', flexShrink: 0,
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  },
  textBlock: {
    display: 'flex', flexDirection: 'column', gap: '3px',
    flex: 1, overflow: 'hidden',
  },
  title: {
    fontSize: '15px', color: '#fff', fontWeight: 700,
    whiteSpace: 'nowrap', overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  desc: {
    fontSize: '12px', color: 'rgba(255,255,255,0.55)',
    whiteSpace: 'nowrap', overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  date: {
    fontSize: '11px', color: 'rgba(255,255,255,0.5)',
    whiteSpace: 'nowrap', flexShrink: 0,
  },
  readMore: {
    padding: '0 24px', height: '100%',
    display: 'flex', alignItems: 'center',
    borderLeft: '1px solid rgba(255,255,255,0.1)',
    flexShrink: 0, background: 'rgba(232,71,10,0.15)',
  },
  readMoreText: {
    fontSize: '13px', fontWeight: 700, color: 'var(--accent)',
    whiteSpace: 'nowrap',
  },
  dotsWrapper: {
    position: 'absolute', bottom: '7px', left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex', gap: '4px', alignItems: 'center',
    zIndex: 2,
  },
  progressDot: {
    height: '3px', borderRadius: '2px',
    transition: 'all 0.3s ease',
  },
};