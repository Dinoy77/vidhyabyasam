import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { articleRouteMap } from '../data/dropDownData';
import { blogArticles } from '../data/blogData';
import LoanPopup from './LoanPopup';
import LoanEnquiryModal from './LoanEnquiryModal';

// --- CUSTOM HOOK FOR RESPONSIVENESS ---
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
// --------------------------------------

const curiousHeadlines = [
  { p1: "Find Your Perfect ", highlight: "College", p2: " in South India" },
  { p1: "Is ", highlight: "INC Approval", p2: " really required for Nursing?" },
  { p1: "Can Plus Two marks alone secure a ", highlight: "Merit Seat?", p2: "" },
  { p1: "Which degree holds more value: ", highlight: "B.E or B.Tech?", p2: "" },
  { p1: "Do autonomous colleges offer better ", highlight: "Placements?", p2: "" },
  { p1: "Will your college degree let you ", highlight: "Work Abroad?", p2: "" },
];

const newsItems = [
  {
    id: 1, icon: '🎓', color: '#1B6CA8', bg: '#EBF5FF', tag: 'Exam Alert',
    title: 'KEAM 2026 — Plus Two Marks Entry Extended to June 14',
    date: 'Rank List: Jun 20',
    image: 'https://images.indianexpress.com/2024/05/7_555d15.jpg?w=1200',
    description: 'CEE Kerala has extended the Plus Two marks submission deadline for KEAM 2026 Engineering Rank List preparation to June 14. KEAM 2026 exam results were declared on May 12. Engineering and Pharmacy Rank List will be published by June 20. CAP Counselling registration expected in July 2026.',
    eligibility: 'Students who appeared for KEAM 2026 Engineering and Pharmacy entrance exam',
    applyLink: 'https://www.cee.kerala.gov.in',
    courses: ['B.Tech', 'B.Pharm', 'MBBS', 'B.Arch'],
    state: 'Kerala',
  },
  {
    id: 2, icon: '⚖️', color: '#7C3AED', bg: '#F5F0FF', tag: 'Results',
    title: 'CLAT 2026 — Results Out, Counselling Open',
    date: 'Counselling Live',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80',
    description: 'CLAT 2026 was conducted on December 7, 2025 in offline mode across 130+ centres. Results have been declared by the Consortium of National Law Universities. Counselling for BA LLB and BBA LLB admissions across 24 participating National Law Universities is now live.',
    eligibility: 'Passed 10+2 with minimum 45% marks. Age limit: 20 years (22 for SC/ST)',
    applyLink: 'https://www.consortiumofnlus.ac.in',
    courses: ['BA LLB', 'BBA LLB', 'LLM'],
    state: 'All India',
  },
  {
    id: 3, icon: '🏛️', color: '#059669', bg: '#ECFDF5', tag: 'Counselling',
    title: 'JoSAA 2026 — Round 1 Seat Allotment on June 13',
    date: 'Allotment: Jun 13',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80',
    description: 'JoSAA 2026 counselling registration started June 2 and choice filling is now closed. Round 1 seat allotment for IITs, NITs, IIITs and GFTIs will be announced on June 13. Round 2 on June 30, Round 3 on July 3. Total 5 rounds. Final round for IITs closes July 21, 2026.',
    eligibility: 'JEE Main 2026 or JEE Advanced 2026 qualified candidates',
    applyLink: 'https://www.josaa.nic.in',
    courses: ['B.Tech', 'B.E', 'B.Arch', 'B.Sc', 'Dual Degree'],
    state: 'All India',
  },
  {
    id: 4, icon: '📝', color: '#DC2626', bg: '#FFF0F0', tag: 'Urgent',
    title: 'NEET UG 2026 — Re-Exam Announced, City Slip Live',
    date: 'Re-Exam Soon',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
    description: 'NTA has cancelled NEET UG 2026 and announced re-examination following paper leak allegations. No fresh registration required. Full application fee will be refunded to all candidates. City allotment slip for re-exam is now live on the NTA portal.',
    eligibility: 'All candidates who registered for NEET UG 2026. Age: 17-25 years. 10+2 with PCB required',
    applyLink: 'https://www.nta.ac.in',
    courses: ['MBBS', 'BDS', 'BAMS', 'BHMS', 'BSMS'],
    state: 'All India',
  },
  {
    id: 5, icon: '🧠', color: '#E8470A', bg: '#FFF4EE', tag: 'Admission',
    title: 'NIMHANS 2026 — UG Admission Notification Out',
    date: 'Apply Now',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=400&q=80',
    description: 'NIMHANS Bangalore UG Admission 2026 notification released on June 3, 2026. Courses in psychiatric nursing and allied health sciences are offered through NIMHANS own entrance examinations. Check official website for complete eligibility criteria and important dates.',
    eligibility: 'Passed 10+2 with relevant Science subjects from a recognised board',
    applyLink: 'https://www.nimhans.ac.in',
    courses: ['B.Sc Nursing', 'Allied Health Sciences'],
    state: 'Karnataka',
  },
  {
    id: 6, icon: '🏗️', color: '#F5A623', bg: '#FFFBEB', tag: 'Exam Alert',
    title: 'NATA 2026 — Phase 1 Result Expected June 15',
    date: 'Result: Jun 15',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80',
    description: 'NATA 2026 Phase 1 exams are being conducted every Friday and Saturday from April 4 to June 13, 2026. Phase 1 result expected on June 15, 2026. Phase 2 scheduled on August 7 and 8, 2026. Qualifying cutoff is 70 out of 200 marks. Results released within 7 days of each exam.',
    eligibility: 'Passed 10+2 with Mathematics and minimum 50% aggregate marks',
    applyLink: 'https://www.nata.ac.in',
    courses: ['B.Arch'],
    state: 'All India',
  },
  {
    id: 7, icon: '🌴', color: '#1B6CA8', bg: '#EBF5FF', tag: 'Admission',
    title: 'LBS Kerala 2026 — Nursing & Paramedical Admissions Open',
    date: 'Apply Now',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80',
    description: 'LBS Centre Kerala has opened admissions for B.Sc Nursing, Paramedical and allied health courses 2026-27. No entrance exam — selection is purely merit based on Plus Two marks. Covers B.Sc Nursing, GNM, D.Pharm, Health Inspector and Paramedical diploma programmes. Minimum 50% in PCB required. Kerala domicile required.',
    eligibility: 'Passed 10+2 with Physics, Chemistry and Biology with minimum 50% marks. Kerala domicile required',
    applyLink: 'https://www.lbscentre.in',
    courses: ['B.Sc Nursing', 'GNM', 'D.Pharm', 'B.Pharm', 'Paramedical'],
    state: 'Kerala',
  },
];

const slides = [
  '/images/students1.jpg',
  '/images/students2.jpg',
  '/images/students3.jpg',
  null,
];

function NewsScrollBar({ navigate }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)'); 

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
}

function NewsTicker({ onViewDetails }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)'); 

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
      style={{
        ...ns.box,
        ...(isMobile ? { minHeight: 'auto' } : {})
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={ns.header}>
        <div style={ns.headerLeft}>
          <span style={ns.liveDot} />
          <span style={ns.headerTitle}>Latest Updates</span>
        </div>
        <span style={ns.count}>{activeIndex + 1}/{newsItems.length}</span>
      </div>

      <div style={{
        ...ns.featured,
        opacity: fade ? 1 : 0,
        transform: fade ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        flex: 1,
      }}>
        <div style={{
          ...ns.featuredBg,
          background: current.bg,
          position: 'relative',
          overflow: 'hidden',
          height: isMobile ? '160px' : '220px',
          minHeight: 'unset',
          padding: 0
        }}>
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

        <div style={ns.featuredBody}>
          <p style={{ ...ns.featuredTitle, color: current.color, fontSize: '17px' }}>
            {current.title}
          </p>
          <p style={ns.featuredDate}>🗓 {current.date}</p>
          <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.6, marginTop: '4px' }}>
            {current.description.slice(0, 120)}...
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '4px', flexWrap: 'wrap' }}>
            {current.courses.map(c => (
              <span key={c} style={{ fontSize: '11px', background: '#F3F4F6', color: '#374151', padding: '3px 10px', borderRadius: '20px', border: '1px solid #E5E7EB' }}>
                {c}
              </span>
            ))}
          </div>
          <button
            style={{ ...ns.enquireBtn, background: current.color }}
            onClick={() => onViewDetails(current)}
          >
            👁 View Details
          </button>
        </div>
      </div>

      <div style={ns.dots}>
        {newsItems.map((item, i) => (
          <button key={i} style={{
            ...ns.dot,
            background: i === activeIndex ? current.color : '#D1D5DB',
            width: i === activeIndex ? '18px' : '6px',
          }} onClick={() => goTo(i)} />
        ))}
      </div>

      <div style={ns.arrows}>
        <button style={ns.arrowBtn} onClick={() => goTo((activeIndex - 1 + newsItems.length) % newsItems.length)}>
          ←
        </button>
        <span style={{ fontSize: '11px', color: '#6B7280' }}>
          {activeIndex + 1} of {newsItems.length}
        </span>
        <button style={ns.arrowBtn} onClick={() => goTo((activeIndex + 1) % newsItems.length)}>
          →
        </button>
      </div>
    </div>
  );
}

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('');
  const [articleSuggestions, setArticleSuggestions] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNewsPopup, setShowNewsPopup] = useState(false);
  const [showLoanPopup, setShowLoanPopup] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const isMobile = useMediaQuery('(max-width: 900px)'); 
  const navigate = useNavigate();

  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [fadeHeadline, setFadeHeadline] = useState(true);

  // --- UNIFIED MASTER CLOCK (Fires Text + Image at exact same millisecond) ---
  useEffect(() => {
    const masterTicker = setInterval(() => {
      setFadeHeadline(false); 

      setTimeout(() => {
        setHeadlineIdx(prev => (prev + 1) % curiousHeadlines.length);
        setCurrentSlide(prev => (prev + 1) % slides.length);
        setFadeHeadline(true); 
      }, 300);

    }, 5000); 

    return () => clearInterval(masterTicker);
  }, []);
  // -------------------------------------------------------------------------

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const currentHeadline = curiousHeadlines[headlineIdx];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = ['B.Pharm', 'M.Pharm', 'Nursing', 'GNM', 'Government'];

  return (
    <section style={{
      ...styles.hero,
      ...(isMobile ? { padding: '30px 16px 80px 16px', minHeight: 'auto' } : {})
    }}>

      <NewsScrollBar navigate={navigate} />

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

      <div style={{
        ...styles.inner,
        ...(isMobile ? { flexDirection: 'column' } : {})
      }}>
        <div style={styles.left}>
          <div style={styles.badge}>🇮🇳 South India's #1 College Discovery Platform</div>

          <h1 
            style={{
              ...styles.heading,
              animation: 'none', 
              opacity: fadeHeadline ? 1 : 0,
              transform: fadeHeadline ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              minHeight: isMobile ? '72px' : '128px', 
              display: 'block'
            }}
          >
            {currentHeadline.p1}
            <span style={styles.highlight}>{currentHeadline.highlight}</span>
            {currentHeadline.p2}
          </h1>

          <p style={styles.sub}>
            Explore 800+ colleges across Kerala, Karnataka & Tamil Nadu.
            Compare, enquire, and start your dream career.
          </p>

          <div style={{ position: 'relative', width: '100%', maxWidth: isMobile ? '100%' : '500px', zIndex: 50 }}>
            <form style={{
              ...styles.searchBox,
              ...(isMobile ? { maxWidth: '100%' } : {}),
              maxWidth: '100%',
            }} onSubmit={handleSearch}>
              <span style={styles.searchIcon}>🔍</span>
              <input
                style={styles.searchInput}
                type="text"
                placeholder="Search colleges, courses, cities..."
                value={query}
                onChange={e => {
                  const val = e.target.value;
                  setQuery(val);
                  onSearch(val);
                  if (val.trim().length > 2) {
                    const articleMatches = Object.keys(articleRouteMap)
                      .filter(title => title.toLowerCase().includes(val.toLowerCase()))
                      .map(title => ({ title, route: articleRouteMap[title], type: 'article' }));

                    const blogMatches = Object.entries(blogArticles)
                      .filter(([slug, data]) => data.title.toLowerCase().includes(val.toLowerCase()))
                      .map(([slug, data]) => ({ title: data.title, route: `/blog/${slug}`, type: 'blog' }));

                    setArticleSuggestions([...articleMatches, ...blogMatches]);
                  } else {
                    setArticleSuggestions([]);
                  }
                }}
              />
              <button type="submit" style={styles.searchBtn}>Search</button>
            </form>

            {articleSuggestions.length > 0 && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, right: 0,
                background: '#fff', borderRadius: '12px', zIndex: 9999,
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                border: '1px solid var(--border)',
                marginTop: '6px',
                maxHeight: '160px', overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
              }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#6B7280', padding: '8px 14px 4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  📄 Articles & Blogs
                </p>
                {articleSuggestions.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      navigate(item.route);
                      setArticleSuggestions([]);
                      setQuery('');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      padding: '10px 14px', cursor: 'pointer',
                      fontSize: '13px', color: 'var(--deep)', fontWeight: 500,
                      borderTop: '1px solid var(--border)',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#FFF4EE'}
                    onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                  >
                    {item.type === 'blog' ? '📝' : '🔗'} {item.title}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={styles.quickLinks}>
            <span style={styles.quickLabel}>Popular:</span>
            {quickLinks.map(q => (
              <button key={q} style={styles.quickChip}
                onClick={() => { onSearch(q); document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' }); }}>
                {q}
              </button>
            ))}
          </div>

          <div style={{ ...styles.stats, ...(isMobile ? { marginTop: '20px' } : {}) }}>
            {[
              { num: '800+', label: 'Colleges' },
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

        <div style={{
          ...styles.right,
          ...(isMobile ? { marginTop: '32px', maxWidth: '100%', width: '100%' } : {})
        }}>
          <NewsTicker onViewDetails={(item) => navigate(`/news/${item.id}`)} />
        </div>
      </div>

      {showNewsPopup && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px',
        }} onClick={() => { setShowNewsPopup(false); setTimeout(() => setShowLoanPopup(true), 500); }}>

          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%', maxWidth: '480px',
              background: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
            }}
          >
            <button
              onClick={() => { setShowNewsPopup(false); setTimeout(() => setShowLoanPopup(true), 500); }}
              style={{
                position: 'absolute', top: '12px', right: '12px', zIndex: 10,
                width: '30px', height: '30px', borderRadius: '50%',
                background: 'rgba(0,0,0,0.4)', border: 'none', cursor: 'pointer',
                fontSize: '14px', fontWeight: 700, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >✕</button>

            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
              <img
                src="https://images.indianexpress.com/2024/07/keam-rank-list.jpg?w=1600"
                alt="Latest Updates"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))',
              }} />
              <div style={{
                position: 'absolute', bottom: '14px', left: '16px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#4ADE80', display: 'inline-block',
                  boxShadow: '0 0 0 3px rgba(74,222,128,0.3)',
                }} />
                <span style={{ color: '#fff', fontSize: '13px', fontWeight: 700, letterSpacing: '1px' }}>
                  🔔 LATEST UPDATES
                </span>
              </div>
            </div>

            <div style={{ padding: '20px 24px 24px' }}>
              <p style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                📢 Exam & Admission Alerts
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {newsItems.slice(0, 4).map(item => (
                  <div
                    key={item.id}
                    onClick={() => { navigate(`/news/${item.id}`); setShowNewsPopup(false); }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '10px 12px', borderRadius: '10px',
                      background: item.bg, cursor: 'pointer',
                      border: `1px solid ${item.color}22`,
                      transition: 'transform 0.15s',
                    }}
                  >
                    <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {item.title}
                      </p>
                      <p style={{ fontSize: '11px', color: item.color, fontWeight: 600 }}>
                        🗓 {item.date}
                      </p>
                    </div>
                    <span style={{ fontSize: '12px', color: item.color, fontWeight: 700, flexShrink: 0 }}>→</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => { setShowNewsPopup(false); setTimeout(() => setShowLoanPopup(true), 500); }}
                style={{
                  width: '100%', padding: '12px',
                  borderRadius: '10px', border: 'none',
                  background: 'linear-gradient(135deg, #1B6CA8, #0d4f80)',
                  color: '#fff', fontSize: '14px', fontWeight: 700,
                  cursor: 'pointer', letterSpacing: '0.3px',
                }}
              >
                Explore Colleges →
              </button>
              <p style={{ textAlign: 'center', fontSize: '11px', color: '#9CA3AF', marginTop: '10px', cursor: 'pointer' }}
                onClick={() => { setShowNewsPopup(false); setTimeout(() => setShowLoanPopup(true), 500); }}>
                Skip for now
              </p>
            </div>
          </div>
        </div>
      )}
      {showLoanPopup && (
        <LoanPopup
          onClose={() => setShowLoanPopup(false)}
          onEnquire={() => { setShowLoanPopup(false); setTimeout(() => setShowEnquiry(true), 100); }}
        />
      )}

      {showEnquiry && (
        <LoanEnquiryModal onClose={() => setShowEnquiry(false)} />
      )}

      {!isMobile && (
        <div style={styles.quoteBar}>
          <span style={styles.quoteDot} />
          <span style={styles.quoteText}>Support · Guidance · Genuinity</span>
          <span style={styles.quoteDot} />
        </div>
      )}

      <div style={{ ...styles.slideIndicators, ...(isMobile ? { bottom: '20px' } : {}) }}>
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

// -----------------------------------------------------
// STYLES OBJECTS 
// -----------------------------------------------------

const ns = {
  box: {
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '16px', overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
    minHeight: '80vh',
  },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '12px 14px',
    borderBottom: '1px solid #E5E7EB',
  },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '8px' },
  liveDot: {
    width: '8px', height: '8px', borderRadius: '50%',
    background: '#4ADE80', boxShadow: '0 0 0 3px rgba(74,222,128,0.3)',
    animation: 'pulse 2s infinite', flexShrink: 0,
  },
  headerTitle: { fontSize: '13px', fontWeight: 700, color: '#0D1117', fontFamily: 'Playfair Display, serif' },
  count: { fontSize: '11px', color: '#6B7280', fontWeight: 600 },

  featured: { display: 'flex', flexDirection: 'column' },
  featuredBg: {
    minHeight: '320px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    position: 'relative',
  },
  tagPill: {
    fontSize: '10px', fontWeight: 700, color: '#fff',
    padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.5px',
  },
  bigEmoji: { fontSize: '32px', opacity: 0.3 },
  featuredBody: { padding: '16px 18px 12px', display: 'flex', flexDirection: 'column', gap: '8px' },
  featuredTitle: { fontSize: '17px', fontWeight: 700, lineHeight: 1.4 },
  featuredDate: { fontSize: '11px', color: '#6B7280', fontWeight: 500 },

  dots: {
    display: 'flex', gap: '4px', padding: '6px 14px',
    borderTop: '1px solid #E5E7EB',
    borderBottom: '1px solid #E5E7EB',
    alignItems: 'center',
  },
  dot: {
    height: '6px', borderRadius: '3px',
    border: 'none', cursor: 'pointer',
    transition: 'all 0.3s ease', padding: 0, flexShrink: 0,
    background: '#D1D5DB',
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
    borderTop: '1px solid #E5E7EB',
  },
  arrowBtn: {
    background: '#F3F4F6',
    border: '1px solid #E5E7EB',
    color: '#374151',
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
    background: 'linear-gradient(160deg, rgba(13,17,23,0.76) 0%, rgba(13,17,23,0.58) 50%, rgba(13,17,23,0.76) 100%)',
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
    alignSelf: 'flex-start',
    marginTop: '-130px',
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