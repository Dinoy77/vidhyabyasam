import React, { useState, useEffect } from 'react';

const MOCK_ANNOUNCEMENTS = [
  {
    id: 1,
    text: "KEAM 2026 - ALLOTMENT TO BPHARM COURSE Second Phase Allotment List is published.",
    link: "https://cee.kerala.gov.in/keam2026/list/allot/p2_bpharm_provi.pdf",
    isNew: true,
    tag: "Allotment Out",
    color: "#326ada", 
    image: "https://i.postimg.cc/66M0Q8qS/3-ea0b0f06b7.jpg",
  },
];

export default function LatestUpdatePopup({ announcements = MOCK_ANNOUNCEMENTS }) {
  const [isOpen, setIsOpen] = useState(false);

  // Grab the specific update
  const latestNews = announcements.find(item => item.id === 1);

  useEffect(() => {
    if (!latestNews) return;

    // Wait for the main modal to close before showing this one
    const handleMainModalClosed = () => {
      setTimeout(() => {
        setIsOpen(true);
      }, 300);
    };

    window.addEventListener('mainNewsClosed', handleMainModalClosed);

    // Fallback timer just in case the main modal is disabled
    const fallbackTimer = setTimeout(() => {
      const mainModalExists = document.getElementById('main-news-modal');
      if (!mainModalExists) {
        setIsOpen(true);
      }
    }, 3000);

    return () => {
      window.removeEventListener('mainNewsClosed', handleMainModalClosed);
      clearTimeout(fallbackTimer);
    };
  }, [latestNews]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen || !latestNews) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      padding: '16px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    modal: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      maxWidth: '380px',
      width: '100%',
      position: 'relative',
      boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
      animation: 'popupFadeIn 0.3s ease-out',
      overflow: 'hidden'
    },
    imageWrapper: {
      position: 'relative',
      height: '180px',
      width: '100%',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    closeButton: {
      position: 'absolute',
      top: '12px', right: '12px',
      background: 'rgba(0, 0, 0, 0.6)',
      border: 'none',
      fontSize: '14px',
      cursor: 'pointer',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '28px', height: '28px',
      borderRadius: '50%',
      fontWeight: 'bold',
      zIndex: 10,
      transition: 'background 0.2s'
    },
    tag: {
      position: 'absolute',
      top: '12px', left: '12px',
      backgroundColor: 'var(--theme)',
      color: '#ffffff',
      fontSize: '11px',
      fontWeight: '700',
      padding: '4px 12px',
      borderRadius: '20px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
      zIndex: 10
    },
    content: {
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    titleWrapper: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px'
    },
    newBadge: {
      backgroundColor: '#EF4444',
      color: 'white',
      fontSize: '10px',
      fontWeight: 'bold',
      padding: '2px 6px',
      borderRadius: '4px',
      marginTop: '3px',
      flexShrink: 0
    },
    title: {
      margin: 0,
      fontSize: '17px',
      fontWeight: '700',
      color: '#1E293B',
      lineHeight: '1.4',
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes popupFadeIn {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .close-btn:hover { background: rgba(0, 0, 0, 0.8) !important; }
          
          .modern-outline-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            color: var(--theme);
            font-weight: 600;
            font-size: 14px;
            text-decoration: none;
            padding: 10px 24px;
            border-radius: 100px;
            border: 2px solid var(--theme);
            background-color: transparent;
            transition: all 0.3s ease;
            align-self: flex-start;
          }
          .modern-outline-btn:hover {
            background-color: var(--theme);
            color: #ffffff;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
          .modern-outline-btn .arrow {
            transition: transform 0.3s ease;
          }
          .modern-outline-btn:hover .arrow {
            transform: translateX(4px);
          }
        `}
      </style>
      <div style={styles.overlay}>
        {/* We pass the dynamic color down as a CSS variable for elegant hover states */}
        <div style={{ ...styles.modal, '--theme': latestNews.color || '#326ada' }}>
          
          <div style={styles.imageWrapper}>
            {latestNews.tag && (
              <div style={styles.tag}>
                {latestNews.tag}
              </div>
            )}

            <button 
              className="close-btn"
              style={styles.closeButton} 
              onClick={handleClose}
              aria-label="Close popup"
            >
              ✕
            </button>

            <img 
              src={latestNews.image} 
              alt="Update Header" 
              style={styles.image}
            />
          </div>
          
          <div style={styles.content}>
            <div style={styles.titleWrapper}>
              {latestNews.isNew && <span style={styles.newBadge}>NEW</span>}
              <h3 style={styles.title}>
                {latestNews.text}
              </h3>
            </div>
            
            <a 
              href={latestNews.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modern-outline-btn"
              onClick={handleClose}
            >
              View Document <span className="arrow">→</span>
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
}