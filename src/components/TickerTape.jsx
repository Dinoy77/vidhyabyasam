import React, { useState, useEffect } from 'react';

// You can customize the content and link here
const MOCK_ANNOUNCEMENTS = [
  {
    id: 1,
    text: "KEAM 2026 - ALLOTMENT TO BPHARM COURSE First Phase Allotment List is published.",
    link: "https://www.cee.kerala.gov.in/keam2026/list/allot/p1_bpharm.pdf",
    isNew: true
  },
  {
    id: 2,
    text: "KEAM College Predictor: Enter your rank to predict admission chances!",
    link: "/keam-predictor",
    isNew: true
  },
];

export default function TickerTape({ announcements = MOCK_ANNOUNCEMENTS }) {
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!announcements || announcements.length === 0) return null;

  const styles = {
    container: {
      width: '100%',
      backgroundColor: '#FEF2F2', // Light red/alert background
      borderBottom: '1px solid #FEE2E2',
      display: 'flex',
      alignItems: 'center',
      height: isMobile ? '40px' : '48px',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 10, // Ensure it sits above the hero but below sticky nav if applicable
    },
    labelWrapper: {
      backgroundColor: '#DC2626', // Deep red
      color: '#FFFFFF',
      fontWeight: '800',
      fontSize: isMobile ? '11px' : '12px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      padding: isMobile ? '0 12px' : '0 20px',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 2,
      boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
      clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)', // Slanted edge effect
      minWidth: isMobile ? '90px' : '120px'
    },
    scrollArea: {
      flex: 1,
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      marginLeft: isMobile ? '85px' : '110px', // Make room for the absolute label
    },
    scrollContent: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      whiteSpace: 'nowrap',
      // We apply the animation via a style tag below for standard CSS keyframes
      animation: `tickerScroll ${announcements.length * 15}s linear infinite`,
      animationPlayState: isPaused ? 'paused' : 'running',
    },
    announcementItem: {
      display: 'inline-flex',
      alignItems: 'center',
      marginRight: '50px',
      fontSize: isMobile ? '13px' : '14px',
      fontFamily: 'DM Sans, system-ui, sans-serif',
    },
    link: {
      color: '#1E293B',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      transition: 'color 0.2s',
    },
    newBadge: {
      backgroundColor: '#12b63b',
      color: 'white',
      fontSize: '10px',
      fontWeight: 'bold',
      padding: '2px 6px',
      borderRadius: '4px',
      marginLeft: '8px',
      animation: 'pulseBadge 2s infinite',
    },
    bullet: {
      color: '#DC2626',
      marginRight: '12px',
      fontSize: '18px',
      lineHeight: 1
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes tickerScroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes pulseBadge {
            0% { opacity: 1; }
            50% { opacity: 0.6; transform: scale(0.95); }
            100% { opacity: 1; }
          }
          .ticker-link:hover {
            color: #DC2626 !important;
            text-decoration: underline !important;
          }
        `}
      </style>
      <div style={styles.container}>
        <div style={styles.labelWrapper}>
          ⚡ LATEST
        </div>
        
        <div 
          style={styles.scrollArea}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div style={styles.scrollContent}>
            {announcements.map((item, index) => (
              <div key={`${item.id}-${index}`} style={styles.announcementItem}>
                <span style={styles.bullet}>•</span>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ticker-link"
                  style={styles.link}
                >
                  {item.text}
                  {item.isNew && <span style={styles.newBadge}>NEW</span>}
                </a>
              </div>
            ))}
            
            {/* Duplicate array for seamless infinite scroll effect if list is short */}
            {announcements.map((item, index) => (
              <div key={`dup-${item.id}-${index}`} style={styles.announcementItem}>
                <span style={styles.bullet}>•</span>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ticker-link"
                  style={styles.link}
                >
                  {item.text}
                  {item.isNew && <span style={styles.newBadge}>NEW</span>}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}