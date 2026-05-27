import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import RegionSection from '../components/RegionSection';
import CollegeCard from '../components/CollegeCard';
import Footer from '../components/Footer';
import { colleges, regions, courseFilters, typeFilters } from '../data/colleges';

export default function Home() {
  const [activeRegion, setActiveRegion] = useState('All');
  const [activeCourse, setActiveCourse] = useState('All Courses');
  const [activeType, setActiveType] = useState('All Types');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const filtered = useMemo(() => {
    let result = colleges;

    if (activeRegion !== 'All') {
      result = result.filter(c => c.region === activeRegion);
    }

    if (activeCourse !== 'All Courses') {
      result = result.filter(c =>
        c.courses.some(course => course.toLowerCase().includes(activeCourse.toLowerCase()))
      );
    }

    if (activeType !== 'All Types') {
      result = result.filter(c => c.type.toLowerCase().includes(activeType.toLowerCase().replace('all types', '')));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.district?.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q) ||
        c.state?.toLowerCase().includes(q) ||
        c.courses.some(course => course.toLowerCase().includes(q)) ||
        c.type.toLowerCase().includes(q) ||
        c.approval?.toLowerCase().includes(q) ||
        c.affiliation?.toLowerCase().includes(q) ||
        c.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return [...result].sort((a, b) =>
      sortBy === 'rating' ? b.rating - a.rating :
      sortBy === 'reviews' ? b.reviews - a.reviews :
      a.name.localeCompare(b.name)
    );
  }, [activeRegion, activeCourse, activeType, searchQuery, sortBy]);

  return (
    <div>
      <Hero onSearch={setSearchQuery} />

      <RegionSection activeRegion={activeRegion} onRegionChange={setActiveRegion} />

      {/* College Listings */}
      <section id="colleges" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div>
            <h2 style={styles.sectionTitle}>
              {activeRegion === 'All' ? 'All Colleges' : `${activeRegion} Colleges`}
            </h2>
            <p style={styles.sectionSub}>{filtered.length} colleges found</p>
          </div>

          <div style={styles.sortRow}>
            <span style={styles.sortLabel}>Sort by:</span>
            <select
              style={styles.select}
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value="rating">Rating</option>
              <option value="reviews">Reviews</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        <div style={styles.filters}>
          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}>Region:</span>
            {regions.map(r => (
              <button
                key={r}
                style={{
                  ...styles.filterChip,
                  background: activeRegion === r ? 'var(--deep)' : '#fff',
                  color: activeRegion === r ? '#fff' : 'var(--muted)',
                  borderColor: activeRegion === r ? 'var(--deep)' : 'var(--border)',
                }}
                onClick={() => setActiveRegion(r)}
              >
                {r}
              </button>
            ))}
          </div>

          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}>Course:</span>
            {courseFilters.map(c => (
              <button
                key={c}
                style={{
                  ...styles.filterChip,
                  background: activeCourse === c ? 'var(--accent)' : '#fff',
                  color: activeCourse === c ? '#fff' : 'var(--muted)',
                  borderColor: activeCourse === c ? 'var(--accent)' : 'var(--border)',
                }}
                onClick={() => setActiveCourse(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}>Type:</span>
            {typeFilters.map(t => (
              <button
                key={t}
                style={{
                  ...styles.filterChip,
                  background: activeType === t ? '#7C3AED' : '#fff',
                  color: activeType === t ? '#fff' : 'var(--muted)',
                  borderColor: activeType === t ? '#7C3AED' : 'var(--border)',
                }}
                onClick={() => setActiveType(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={styles.grid}>
            {filtered.map((college, i) => (
              <CollegeCard key={college.id} college={college} delay={i * 60} />
            ))}
          </div>
        ) : (
          <div style={styles.empty}>
            <div style={{ fontSize: '56px' }}>🔍</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px' }}>No colleges found</h3>
            <p style={{ color: 'var(--muted)' }}>Try adjusting your filters or search query</p>
            <button
              style={styles.resetBtn}
              onClick={() => {
                setActiveRegion('All');
                setActiveCourse('All Courses');
                setActiveType('All Types');
                setSearchQuery('');
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  section: { padding: '40px 48px 60px', maxWidth: '1200px', margin: '0 auto' },
  sectionHeader: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
    marginBottom: '24px',
  },
  sectionTitle: { fontFamily: 'Playfair Display, serif', fontSize: '32px' },
  sectionSub: { color: 'var(--muted)', fontSize: '14px', marginTop: '4px' },
  sortRow: { display: 'flex', alignItems: 'center', gap: '10px' },
  sortLabel: { fontSize: '13px', color: 'var(--muted)', fontWeight: 500 },
  select: {
    padding: '8px 14px', borderRadius: '8px', border: '1.5px solid var(--border)',
    fontSize: '13px', fontFamily: 'DM Sans, sans-serif', background: '#fff',
    cursor: 'pointer',
  },
  filters: {
    display: 'flex', flexDirection: 'column', gap: '12px',
    background: '#fff', borderRadius: '12px', padding: '20px',
    border: '1px solid var(--border)', marginBottom: '32px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  },
  filterGroup: { display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' },
  filterLabel: {
    fontSize: '12px', fontWeight: 700, color: 'var(--muted)',
    textTransform: 'uppercase', letterSpacing: '0.8px', minWidth: '60px',
  },
  filterChip: {
    padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 500,
    border: '1.5px solid', cursor: 'pointer', transition: 'all 0.2s',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
  },
  empty: {
    textAlign: 'center', padding: '80px 24px',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px',
  },
  resetBtn: {
    padding: '12px 28px', borderRadius: '10px', fontWeight: 700,
    background: 'var(--accent)', color: '#fff', border: 'none',
    cursor: 'pointer', fontSize: '14px', marginTop: '8px',
  },
};
