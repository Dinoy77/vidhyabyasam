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

const regionData = [
  {
    name: 'Kerala',
    emoji: '🌴',
    description: 'God\'s Own Country',
    color: '#1B6CA8',
    bg: '#EBF5FF',
    colleges: '150+',
    cities: 'TVM, Kochi, Kozhikode',
  },
  {
    name: 'Karnataka',
    emoji: '🏙',
    description: 'Silicon Valley of India',
    color: '#7C3AED',
    bg: '#F5F0FF',
    colleges: '200+',
    cities: 'Bengaluru, Mysuru, Mangaluru',
  },
  {
    name: 'Tamil Nadu',
    emoji: '🏛',
    description: 'Land of Temples',
    color: '#DC2626',
    bg: '#FFF0F0',
    colleges: '180+',
    cities: 'Chennai, Coimbatore, Vellore',
  },
];

export default function RegionSection({ activeRegion, onRegionChange }) {
  const { isMobile, isTablet } = useResponsive();
  const styles = getStyles(isMobile, isTablet);

  return (
    <section id="regions" style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Explore by Region</h2>
        <p style={styles.sub}>Click a region to filter colleges instantly</p>
      </div>

      {/* Grid container forces side-by-side layout */}
      <div style={styles.cards}>
        {regionData.map(r => {
          const active = activeRegion === r.name;
          return (
            <button
              key={r.name}
              style={{
                ...styles.card,
                borderColor: active ? r.color : 'var(--border)',
                boxShadow: active ? `0 6px 20px ${r.color}22` : '0 2px 8px rgba(0,0,0,0.04)',
                transform: active ? 'scale(1.02)' : 'scale(1)',
              }}
              onClick={() => onRegionChange(active ? 'All' : r.name)}
            >
              {active && (
                <div style={{ ...styles.activeBar, background: r.color }} />
              )}
              
              <div style={{ ...styles.emojiBox, background: r.bg }}>
                <span style={styles.emoji}>{r.emoji}</span>
              </div>
              
              <div style={styles.cardBody}>
                <h3 style={{ ...styles.regionName, color: active ? r.color : 'var(--deep)' }}>
                  {r.name}
                </h3>
                
                {/* Secondary details hidden on mobile to save horizontal space */}
                <p style={styles.regionDesc}>{r.description}</p>
                
                <div style={styles.regionMeta}>
                  <span style={{ ...styles.badge, background: r.bg, color: r.color }}>
                    {r.colleges} colleges
                  </span>
                  <span style={styles.cities}>{r.cities}</span>
                </div>
              </div>

              {active && <span style={styles.checkmark}>✓</span>}
            </button>
          );
        })}
      </div>
    </section>
  );
}

// ---------------- Dynamic Responsive Styles ---------------- //
const getStyles = (isMobile, isTablet) => ({
  section: { 
    padding: isMobile ? '32px 12px 16px' : '48px 48px 32px', 
    maxWidth: '1200px', 
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  },
  header: { 
    textAlign: 'center', 
    marginBottom: isMobile ? '20px' : '28px' 
  },
  title: { 
    fontFamily: 'Playfair Display, serif', 
    fontSize: isMobile ? '24px' : '32px', 
    marginBottom: '6px',
    lineHeight: 1.2
  },
  sub: { 
    color: 'var(--muted)', 
    fontSize: isMobile ? '13px' : '14px',
    padding: '0 16px',
    margin: 0
  },
  cards: { 
    display: 'grid', 
    // Always enforce 3 columns, forcing them side-by-side
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: isMobile ? '8px' : '20px', // Tight gap for mobile
    width: '100%'
  },
  card: {
    background: '#fff', 
    borderRadius: '12px', 
    border: isMobile ? '1px solid' : '1.5px solid',
    // Shrink padding massively on mobile
    padding: isMobile ? '12px 6px' : '20px 16px', 
    cursor: 'pointer', 
    transition: 'all 0.2s ease', 
    position: 'relative', 
    overflow: 'hidden',
    display: 'flex', 
    // Stack items vertically on mobile to save width
    flexDirection: isMobile ? 'column' : 'row', 
    alignItems: 'center', 
    textAlign: isMobile ? 'center' : 'left',
    gap: isMobile ? '8px' : '12px', 
    width: '100%',
    boxSizing: 'border-box'
  },
  activeBar: { 
    position: 'absolute', top: 0, left: 0, right: 0, height: isMobile ? '3px' : '4px' 
  },
  emojiBox: {
    width: isMobile ? '36px' : '48px', 
    height: isMobile ? '36px' : '48px', 
    borderRadius: '10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  emoji: { 
    fontSize: isMobile ? '18px' : '24px' 
  },
  cardBody: { 
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: isMobile ? 'center' : 'flex-start',
    gap: '4px',
    minWidth: 0 
  },
  regionName: { 
    fontFamily: 'Playfair Display, serif', 
    fontSize: isMobile ? '13px' : '18px', 
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.2
  },
  regionDesc: { 
    // Completely hide description on mobile
    display: isMobile ? 'none' : 'block',
    fontSize: '11px', 
    color: 'var(--muted)',
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis' 
  },
  regionMeta: { 
    display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap', 
    justifyContent: isMobile ? 'center' : 'flex-start', marginTop: '2px' 
  },
  badge: { 
    // Micro-badge for mobile
    padding: isMobile ? '3px 6px' : '2px 8px', 
    borderRadius: '10px', 
    fontSize: isMobile ? '10px' : '11px', 
    fontWeight: 700,
    whiteSpace: 'nowrap'
  },
  cities: { 
    // Completely hide cities list on mobile
    display: isMobile ? 'none' : 'block',
    fontSize: '10px', color: 'var(--muted)', lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
  },
  checkmark: { 
    display: isMobile ? 'none' : 'block',
    fontSize: '16px', fontWeight: 700, color: 'var(--accent)', flexShrink: 0 
  },
});