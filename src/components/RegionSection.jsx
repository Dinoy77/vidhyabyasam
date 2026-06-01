import React from 'react';

const regionData = [
  {
    name: 'Kerala',
    emoji: '🌴',
    description: 'God\'s Own Country',
    color: '#1B6CA8',
    bg: '#EBF5FF',
    colleges: '150+',
    cities: 'TVM, Kochi, Kozhikode, Thrissur',
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
    description: 'Land of Temples & Education',
    color: '#DC2626',
    bg: '#FFF0F0',
    colleges: '180+',
    cities: 'Chennai, Coimbatore, Vellore, Madurai',
  },
];

export default function RegionSection({ activeRegion, onRegionChange }) {
  return (
    <section id="regions" style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Explore by Region</h2>
        <p style={styles.sub}>Click a region to filter colleges instantly</p>
      </div>

      <div style={styles.cards}>
        {regionData.map(r => {
          const active = activeRegion === r.name;
          return (
            <button
              key={r.name}
              style={{
                ...styles.card,
                borderColor: active ? r.color : 'var(--border)',
                boxShadow: active ? `0 8px 30px ${r.color}22` : '0 2px 12px rgba(0,0,0,0.05)',
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
                <p style={styles.regionDesc}>{r.description}</p>
                <div style={styles.regionMeta}>
                  <span style={{ ...styles.badge, background: r.bg, color: r.color }}>
                    {r.colleges} colleges
                  </span>
                  <span style={styles.cities}>{r.cities}</span>
                </div>
              </div>
              {active && <span style={{ ...styles.checkmark, color: r.color }}>✓</span>}
            </button>
          );
        })}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '60px 48px 40px', maxWidth: '1200px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '36px' },
  title: { fontFamily: 'Playfair Display, serif', fontSize: '36px', marginBottom: '8px' },
  sub: { color: 'var(--muted)', fontSize: '15px' },
  cards: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' },
  card: {
    background: '#fff', borderRadius: '16px', border: '2px solid',
    padding: '24px', cursor: 'pointer', textAlign: 'left',
    transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
    display: 'flex', alignItems: 'center', gap: '16px',
  },
  activeBar: { position: 'absolute', top: 0, left: 0, right: 0, height: '3px' },
  emojiBox: {
    width: '56px', height: '56px', borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  emoji: { fontSize: '28px' },
  cardBody: { flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' },
  regionName: { fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700 },
  regionDesc: { fontSize: '12px', color: 'var(--muted)' },
  regionMeta: { display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' },
  badge: { padding: '2px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 700 },
  cities: { fontSize: '11px', color: 'var(--muted)' },
  checkmark: { fontSize: '20px', fontWeight: 700, flexShrink: 0 },
};
