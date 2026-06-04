import React, { useState, useMemo, useEffect } from 'react';
import Hero from '../components/Hero';
import RegionSection from '../components/RegionSection';
import CollegeCard from '../components/CollegeCard';
import Footer from '../components/Footer';

// 1. Import both datasets and all filters
import { colleges as medicalColleges, regions, courseFilters, typeFilters } from '../data/colleges';
import { engineering_colleges as engineeringColleges } from '../data/engineering_colleges';

export default function Home({ selectedCourse, courseSelectCount }) {
  const [activeRegion, setActiveRegion] = useState('All');
  const [activeCourse, setActiveCourse] = useState('All Courses');
  const [activeType, setActiveType] = useState('All Types');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const COLLEGES_PER_PAGE = 12;

  // 2. Safely process engineering IDs and combine both lists globally
  const allColleges = useMemo(() => {
    const safeEngineeringColleges = engineeringColleges.map(college => ({
      ...college,
      id: college.id + 10000 // Prevent ID clashes with medical colleges
    }));
    return [...medicalColleges, ...safeEngineeringColleges];
  }, []);

  // 3. Filter against the combined 'allColleges' array
  const filtered = useMemo(() => {
    let result = allColleges;

    if (activeRegion !== 'All') {
      result = result.filter(c => c.region === activeRegion);
    }

    if (activeCourse !== 'All Courses') {
      result = result.filter(c =>
        c.courses && c.courses.some(course =>
          course.toLowerCase().includes(activeCourse.toLowerCase()) ||
          activeCourse.toLowerCase().includes(course.toLowerCase())
        )
      );
    }

    if (activeType !== 'All Types') {
      result = result.filter(c => c.type && c.type.toLowerCase().includes(activeType.toLowerCase().replace('all types', '')));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        (c.city && c.city.toLowerCase().includes(q)) ||
        (c.district && c.district.toLowerCase().includes(q)) ||
        (c.region && c.region.toLowerCase().includes(q)) ||
        (c.state && c.state.toLowerCase().includes(q)) ||
        (c.courses && c.courses.some(course => course.toLowerCase().includes(q))) ||
        (c.type && c.type.toLowerCase().includes(q)) ||
        (c.approval && c.approval.toLowerCase().includes(q)) ||
        (c.affiliation && c.affiliation.toLowerCase().includes(q)) ||
        (c.tags && c.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    return [...result].sort((a, b) => {
      // Add safe fallback sorting for colleges missing rating or reviews
      const ratingA = a.rating || 0;
      const ratingB = b.rating || 0;
      const reviewsA = a.reviews || 0;
      const reviewsB = b.reviews || 0;

      return sortBy === 'rating' ? ratingB - ratingA :
             sortBy === 'reviews' ? reviewsB - reviewsA :
             a.name.localeCompare(b.name);
    });
  }, [activeRegion, activeCourse, activeType, searchQuery, sortBy, allColleges]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeRegion, activeCourse, activeType, searchQuery, sortBy]);

  useEffect(() => {
    if (selectedCourse) {
      setActiveCourse(selectedCourse);
      setCurrentPage(1);
    }
  }, [selectedCourse, courseSelectCount]);

  const totalPages = Math.ceil(filtered.length / COLLEGES_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * COLLEGES_PER_PAGE,
    currentPage * COLLEGES_PER_PAGE
  );

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
          <>
            <div style={styles.grid}>
              {paginated.map((college, i) => (
                <CollegeCard key={college.id} college={college} delay={Math.min(i * 60, 400)} />
              ))}
            </div>

            {totalPages > 1 && (
              <div style={styles.pagination}>
                <button
                  style={{ ...styles.pageBtn, opacity: currentPage === 1 ? 0.4 : 1 }}
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(p => p - 1);
                    document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  ← Prev
                </button>

                <div style={styles.pageNumbers}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(page =>
                      page === 1 ||
                      page === totalPages ||
                      Math.abs(page - currentPage) <= 1
                    )
                    .reduce((acc, page, idx, arr) => {
                      if (idx > 0 && page - arr[idx - 1] > 1) acc.push('...');
                      acc.push(page);
                      return acc;
                    }, [])
                    .map((item, i) =>
                      item === '...' ? (
                        <span key={`dot-${i}`} style={styles.pageDots}>...</span>
                      ) : (
                        <button
                          key={item}
                          style={{
                            ...styles.pageNum,
                            background: currentPage === item ? 'var(--accent)' : '#fff',
                            color: currentPage === item ? '#fff' : 'var(--deep)',
                            borderColor: currentPage === item ? 'var(--accent)' : 'var(--border)',
                            fontWeight: currentPage === item ? 700 : 500,
                          }}
                          onClick={() => {
                            setCurrentPage(item);
                            document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          {item}
                        </button>
                      )
                    )
                  }
                </div>

                <button
                  style={{ ...styles.pageBtn, opacity: currentPage === totalPages ? 0.4 : 1 }}
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage(p => p + 1);
                    document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Next →
                </button>
              </div>
            )}

            <p style={styles.pageInfo}>
              Showing {((currentPage - 1) * COLLEGES_PER_PAGE) + 1}–{Math.min(currentPage * COLLEGES_PER_PAGE, filtered.length)} of {filtered.length} colleges
            </p>
          </>
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

pagination: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    gap: '12px', marginTop: '40px', flexWrap: 'wrap',
  },
  pageBtn: {
    padding: '10px 20px', borderRadius: '10px', fontSize: '14px', fontWeight: 600,
    background: '#fff', border: '1.5px solid var(--border)',
    cursor: 'pointer', color: 'var(--deep)', transition: 'all 0.2s',
  },
  pageNumbers: { display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' },
  pageNum: {
    width: '40px', height: '40px', borderRadius: '10px', fontSize: '14px',
    border: '1.5px solid', cursor: 'pointer', transition: 'all 0.2s',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  pageDots: { fontSize: '14px', color: 'var(--muted)', padding: '0 4px' },
  pageInfo: {
    textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '12px',
  },
  
};