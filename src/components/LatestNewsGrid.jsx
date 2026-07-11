import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateSlug } from '../data/NewsData'; // Adjust import path as needed

export default function LatestNewsGrid({ newsItems = [] }) {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = getStyles(isMobile);

  return (
    <section style={styles.container}>
      <div style={styles.headerRow}>
        <h2 style={styles.mainTitle}>Latest News & Articles</h2>
      </div>

      <div style={styles.grid}>
        {/* Sliced to 3 items to form a perfect 3-column row */}
        {newsItems.slice(0, 3).map((news) => (
          <div 
            key={news.id} 
            style={styles.card}
            onClick={() => navigate(`/news/${generateSlug(news.title)}`)}
          >
            {/* Left Side: Content */}
            <div style={styles.contentLeft}>
              <div style={styles.titleWrapper}>
                {news.isNotification ? (
                  <span style={styles.liveBadge}>
                    <span style={styles.liveDot}></span> LIVE
                  </span>
                ) : (
                  <span style={styles.standardBadge}>{news.tag || 'UPDATE'}</span>
                )}
                
                <h3 style={styles.title}>
                  {news.title}
                </h3>
              </div>

              <p style={styles.description}>
                {news.description}
              </p>

              <div style={styles.metaRow}>
                <span style={styles.metaText}>Vidyabhyasam Editorial • {news.publishedAt || news.date}</span>
              </div>

              <div style={styles.interactionRow}>
                <span style={styles.interactionItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  {Math.floor(Math.random() * 10) + 1} Comments
                </span>
                <span style={styles.interactionItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                  {Math.floor(Math.random() * 20) + 5} Shares
                </span>
              </div>
            </div>

            {/* Right Side: Thumbnail Image */}
            <div style={styles.imageRight}>
              <img 
                src={news.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80"} 
                alt={news.title} 
                style={styles.thumbnail}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Upgraded Show More Button UI */}
      <div style={styles.showMoreContainer}>
        <button 
          style={styles.showMoreBtn} 
          onClick={() => navigate('/news')}
        >
          View All Updates <span style={{ fontSize: '18px', lineHeight: 1 }}>→</span>
        </button>
      </div>
    </section>
  );
}

const getStyles = (isMobile) => ({
  container: {
    padding: isMobile ? '24px 16px' : '40px 48px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#FAFAFA', 
  },
  headerRow: {
    marginBottom: '24px',
  },
  mainTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#111827',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', // Changed to 3 columns
    gap: isMobile ? '24px' : '32px', // Even gap across the 3 columns
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    cursor: 'pointer',
    padding: '12px 0',
    borderBottom: '1px solid #F3F4F6', 
    transition: 'opacity 0.2s ease',
  },
  contentLeft: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden', 
  },
  titleWrapper: {
    marginBottom: '6px',
    lineHeight: '1.4',
  },
  liveBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#DC2626',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: '700',
    padding: '2px 6px',
    borderRadius: '12px',
    marginRight: '6px',
    verticalAlign: 'middle',
    position: 'relative',
    top: '-2px',
  },
  liveDot: {
    width: '6px',
    height: '6px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    display: 'inline-block',
  },
  standardBadge: {
    display: 'inline-block',
    backgroundColor: '#E5E7EB',
    color: '#374151',
    fontSize: '10px',
    fontWeight: '700',
    padding: '2px 6px',
    borderRadius: '12px',
    marginRight: '6px',
    verticalAlign: 'middle',
    position: 'relative',
    top: '-2px',
  },
  title: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#111827',
    margin: 0,
    display: 'inline',
  },
  description: {
    fontSize: '13px',
    color: '#4B5563',
    margin: '0 0 8px 0',
    lineHeight: '1.5',
    display: '-webkit-box',
    WebkitLineClamp: 2, 
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  metaRow: {
    marginBottom: '8px',
  },
  metaText: {
    fontSize: '11px',
    color: '#6B7280',
    fontWeight: '500',
  },
  interactionRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  interactionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '11px',
    color: '#6B7280',
    fontWeight: '500',
  },
  imageRight: {
    flex: '0 0 auto',
    width: isMobile ? '80px' : '90px', // Slightly scaled down to fit 3 cols nicely
    height: isMobile ? '60px' : '70px',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
  },
  showMoreContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '36px',
  },
  showMoreBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 32px',
    backgroundColor: '#0F172A', // Sleek dark solid background
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '30px', // Pill-shaped UI
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(15, 23, 42, 0.15)', // Premium soft drop-shadow
    transition: 'transform 0.1s ease',
  }
});