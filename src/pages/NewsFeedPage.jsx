import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { getLatestNewsFeed, generateSlug } from '../data/NewsData'; 

export default function NewsFeedPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeState, setActiveState] = useState('All Regions');
  const [currentPage, setCurrentPage] = useState(1);
  const NEWS_PER_PAGE = 12;

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = getStyles(isMobile);

  // 1. Fetch all news and extract unique regions/states for the filter
  const allNews = useMemo(() => getLatestNewsFeed(), []);
  
  const availableStates = useMemo(() => {
    const states = new Set(allNews.map(n => n.state).filter(Boolean));
    return ['All Regions', ...Array.from(states)];
  }, [allNews]);

  // 2. Filter Engine (Search + State)
  const filteredNews = useMemo(() => {
    let result = allNews;

    if (activeState !== 'All Regions') {
      result = result.filter(n => n.state === activeState);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(n =>
        (n.title && n.title.toLowerCase().includes(q)) ||
        (n.description && n.description.toLowerCase().includes(q)) ||
        (n.tag && n.tag.toLowerCase().includes(q)) ||
        (n.courses && n.courses.some(c => c.toLowerCase().includes(q)))
      );
    }

    return result;
  }, [allNews, activeState, searchQuery]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeState, searchQuery]);

  // 3. Pagination Logic
  const totalPages = Math.ceil(filteredNews.length / NEWS_PER_PAGE);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * NEWS_PER_PAGE,
    currentPage * NEWS_PER_PAGE
  );

  return (
    <div style={styles.pageWrapper}>
      
      {/* --- HERO HEADER --- */}
      <div style={styles.hero}>
        <div style={styles.heroInner}>
          <span style={styles.heroBadge}>Live Updates & Alerts</span>
          <h1 style={styles.heroTitle}>Educational News</h1>
          <p style={styles.heroSub}>
            Get the latest updates on medical and engineering admissions, counseling schedules, seat allotments, and entrance exam results across India.
          </p>
        </div>
      </div>

      <div style={styles.mainContainer}>
        
        {/* --- SEARCH & FILTERS --- */}
        <div style={styles.controlsSection}>
          <div style={styles.searchWrapper}>
            <span style={styles.searchIcon}>🔍</span>
            <input 
              type="text" 
              placeholder="Search news, exams, or colleges..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>

          <div style={styles.filterWrapper}>
            {availableStates.map(state => (
              <button
                key={state}
                onClick={() => setActiveState(state)}
                style={{
                  ...styles.filterBtn,
                  backgroundColor: activeState === state ? '#0F172A' : '#FFFFFF',
                  color: activeState === state ? '#FFFFFF' : '#475569',
                  borderColor: activeState === state ? '#0F172A' : '#E2E8F0',
                }}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        {/* --- NEWS GRID --- */}
        {filteredNews.length > 0 ? (
          <>
            <div style={styles.grid}>
              {paginatedNews.map((news) => (
                <div 
                  key={news.id} 
                  style={styles.card}
                  onClick={() => navigate(`/news/${generateSlug(news.title)}`)}
                >
                  {/* Card Image Cover */}
                  <div style={styles.cardImageWrapper}>
                    <img 
                      src={news.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"} 
                      alt={news.title} 
                      style={styles.cardImage}
                      loading="lazy"
                    />
                    {/* Live/Tag Badge over image */}
                    <div style={styles.imageOverlayTop}>
                      {news.isNotification ? (
                        <span style={styles.liveBadge}>
                          <span style={styles.liveDot}></span> LIVE
                        </span>
                      ) : (
                        <span style={{...styles.standardBadge, backgroundColor: news.bg, color: news.color}}>
                          {news.tag || 'Update'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={styles.cardBody}>
                    <div style={styles.cardMeta}>
                      <span>🗓 {news.publishedAt || news.date}</span>
                      <span>📍 {news.state}</span>
                    </div>
                    <h3 style={styles.cardTitle}>{news.title}</h3>
                    <p style={styles.cardDesc}>
                      {news.description}
                    </p>
                    
                    {/* Card Footer */}
                    <div style={styles.cardFooter}>
                      <span style={styles.readMore}>Read Full Article →</span>
                      <div style={styles.courseTags}>
                        {news.courses?.slice(0, 2).map(c => (
                          <span key={c} style={styles.miniTag}>{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- PAGINATION --- */}
            {totalPages > 1 && (
              <div style={styles.pagination}>
                <button
                  style={{ ...styles.pageBtn, opacity: currentPage === 1 ? 0.4 : 1 }}
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(p => p - 1);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                >
                  ← Prev
                </button>

                <div style={styles.pageNumbers}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((item) => (
                    <button
                      key={item}
                      style={{
                        ...styles.pageNum,
                        background: currentPage === item ? '#2563EB' : '#fff',
                        color: currentPage === item ? '#fff' : '#0F172A',
                        borderColor: currentPage === item ? '#2563EB' : '#E2E8F0',
                        fontWeight: currentPage === item ? 700 : 500,
                      }}
                      onClick={() => {
                        setCurrentPage(item);
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <button
                  style={{ ...styles.pageBtn, opacity: currentPage === totalPages ? 0.4 : 1 }}
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage(p => p + 1);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={styles.emptyState}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>📰</div>
            <h3 style={styles.emptyTitle}>No Updates Found</h3>
            <p style={styles.emptySub}>We couldn't find any news matching your search criteria.</p>
            <button 
              style={styles.resetBtn}
              onClick={() => {
                setSearchQuery('');
                setActiveState('All Regions');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

const getStyles = (isMobile) => ({
  pageWrapper: {
    minHeight: '100vh',
    backgroundColor: '#F8FAFC',
    fontFamily: 'DM Sans, system-ui, -apple-system, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  },
  hero: {
    backgroundColor: '#0F172A',
    backgroundImage: 'radial-gradient(circle at top right, #1E293B, #0F172A)',
    padding: isMobile ? '50px 16px 40px' : '80px 40px 60px',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  heroInner: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heroBadge: {
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    color: '#60A5FA',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '20px',
    border: '1px solid rgba(59, 130, 246, 0.3)',
  },
  heroTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: `clamp(32px, 8vw, 52px)`,
    fontWeight: '800',
    margin: '0 0 16px 0',
    lineHeight: '1.2',
  },
  heroSub: {
    fontSize: isMobile ? '14px' : '18px',
    color: '#94A3B8',
    lineHeight: '1.6',
    margin: 0,
    maxWidth: '650px',
  },
  mainContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '24px 16px 60px' : '40px 48px 80px',
    width: '100%',
    boxSizing: 'border-box',
    flex: 1,
  },
  controlsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '16px' : '24px',
    marginBottom: isMobile ? '24px' : '40px',
    width: '100%',
  },
  searchWrapper: {
    position: 'relative',
    maxWidth: '600px',
    width: '100%',
    margin: '0 auto',
  },
  searchIcon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '18px',
    color: '#94A3B8',
  },
  searchInput: {
    width: '100%',
    padding: isMobile ? '14px 14px 14px 44px' : '16px 16px 16px 48px',
    borderRadius: '12px',
    border: '1px solid #E2E8F0',
    fontSize: isMobile ? '15px' : '16px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  },
  filterWrapper: {
    display: 'flex',
    justifyContent: isMobile ? 'flex-start' : 'center',
    flexWrap: 'wrap',
    gap: '8px',
    width: '100%',
  },
  filterBtn: {
    padding: isMobile ? '6px 12px' : '8px 16px',
    borderRadius: '20px',
    fontSize: isMobile ? '13px' : '14px',
    fontWeight: '600',
    border: '1.5px solid',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', 
    gap: isMobile ? '20px' : '32px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #E2E8F0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  cardImageWrapper: {
    position: 'relative',
    width: '100%',
    height: '200px',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlayTop: {
    position: 'absolute',
    top: '16px',
    left: '16px',
  },
  liveBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#DC2626',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: '800',
    padding: '4px 12px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 2px 4px rgba(220, 38, 38, 0.3)',
  },
  liveDot: {
    width: '6px',
    height: '6px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    display: 'inline-block',
    animation: 'pulse 1.5s infinite',
  },
  standardBadge: {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: '800',
    padding: '4px 12px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardBody: {
    padding: isMobile ? '16px' : '24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cardMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#64748B',
    fontWeight: '600',
    marginBottom: '12px',
    flexWrap: 'wrap',
    gap: '8px',
  },
  cardTitle: {
    fontSize: isMobile ? '17px' : '18px',
    fontWeight: '700',
    color: '#0F172A',
    margin: '0 0 12px 0',
    lineHeight: '1.4',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#475569',
    lineHeight: '1.6',
    margin: '0 0 24px 0',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  cardFooter: {
    marginTop: 'auto',
    paddingTop: '16px',
    borderTop: '1px solid #F1F5F9',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
  },
  readMore: {
    fontSize: '14px',
    color: '#2563EB',
    fontWeight: '700',
  },
  courseTags: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
  },
  miniTag: {
    fontSize: '11px',
    backgroundColor: '#F1F5F9',
    color: '#475569',
    padding: '2px 8px',
    borderRadius: '4px',
    fontWeight: '600',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: isMobile ? '8px' : '12px',
    marginTop: isMobile ? '32px' : '48px',
    flexWrap: 'wrap',
  },
  pageBtn: {
    padding: isMobile ? '8px 16px' : '10px 20px',
    borderRadius: '8px',
    fontSize: isMobile ? '13px' : '14px',
    fontWeight: '600',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E8F0',
    cursor: 'pointer',
    color: '#0F172A',
  },
  pageNumbers: {
    display: 'flex',
    gap: isMobile ? '4px' : '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pageNum: {
    width: isMobile ? '36px' : '40px',
    height: isMobile ? '36px' : '40px',
    borderRadius: '8px',
    fontSize: '14px',
    border: '1px solid',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyState: {
    textAlign: 'center',
    padding: '80px 20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    border: '1px dashed #CBD5E1',
  },
  emptyTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0F172A',
    margin: '0 0 8px 0',
  },
  emptySub: {
    fontSize: '15px',
    color: '#64748B',
    marginBottom: '24px',
  },
  resetBtn: {
    padding: '12px 24px',
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  }
});