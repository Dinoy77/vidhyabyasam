import React, { useMemo, useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { colleges } from '../../data/colleges';

export default function MedicalCollegesKerala() {
  const listTopRef = useRef(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Filter and sort all colleges
  const keralaMedicalColleges = useMemo(() => {
    return colleges
      .filter(c => c.state === 'Kerala' && c.courses.includes('MBBS'))
      .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
  }, []);

  // 2. Pagination Logic
  const totalPages = Math.ceil(keralaMedicalColleges.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  // 3. The specific 10 items for the current page
  const currentItems = keralaMedicalColleges.slice(indexOfFirstItem, indexOfLastItem);

  // Change page function with smooth scroll
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (listTopRef.current) {
      const yOffset = listTopRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>State Directory</span>
          <h1 style={styles.mainTitle}>Medical Colleges in Kerala</h1>
          <p style={styles.subtitle}>
            A complete directory of institutions offering MBBS programs across Kerala.
          </p>
          <div style={styles.divider}></div>
        </div>
      </header>

      <main style={styles.mainContent} ref={listTopRef}>
        <div style={styles.listContainer}>
          {currentItems.map((college, index) => (
            <article key={college.id} style={styles.card}>
              <div style={styles.imageBox}>
                <div style={styles.rankRibbon}>
                  <span style={styles.rankHash}>#</span>
                  <span style={styles.rankNum}>{indexOfFirstItem + index + 1}</span>
                </div>
                <img 
                  src={college.image} 
                  alt={college.name} 
                  style={styles.image}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'; }}
                />
                <div style={styles.typeBadge}>{college.type}</div>
              </div>

              <div style={styles.contentBox}>
                <div style={styles.contentHeader}>
                  <div>
                    <h2 style={styles.collegeName}>{college.name}</h2>
                    <p style={styles.location}>📍 {college.city}, {college.district}</p>
                  </div>
                  <div style={styles.ratingBlock}>
                    <div style={styles.ratingScore}>⭐ {college.rating.toFixed(1)}</div>
                    <div style={styles.reviewCount}>{college.reviews} Reviews</div>
                  </div>
                </div>

                <p style={styles.description}>{college.description}</p>

                <div style={styles.dataGrid}>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>Estd. Year</span>
                    <span style={styles.dataValue}>{college.established}</span>
                  </div>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>First-Year Fees</span>
                    <span style={styles.dataValue}>{college.fees}</span>
                  </div>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>Approvals</span>
                    <span style={styles.dataValue}>{college.approval}</span>
                  </div>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>Affiliation</span>
                    <span style={styles.dataValue}>{college.affiliation}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* --- PAGINATION UI ---. */}
        {totalPages > 1 && (
          <div style={styles.paginationContainer}>
            <button 
              style={{ ...styles.pageBtn, ...(currentPage === 1 ? styles.disabledBtn : {}) }}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              « Prev
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
              <button
                key={num}
                style={{ ...styles.pageBtn, ...(currentPage === num ? styles.activePageBtn : {}) }}
                onClick={() => paginate(num)}
              >
                {num}
              </button>
            ))}

            <button 
              style={{ ...styles.pageBtn, ...(currentPage === totalPages ? styles.disabledBtn : {}) }}
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next »
            </button>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: { backgroundColor: '#f3f4f6', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' },
  heroHeader: { backgroundColor: '#fff', padding: '80px 24px 60px', borderBottom: '1px solid #e5e7eb', textAlign: 'center' },
  heroContent: { maxWidth: '800px', margin: '0 auto' },
  eyebrow: { display: 'inline-block', padding: '6px 14px', backgroundColor: '#f0fdf4', color: '#16a34a', borderRadius: '20px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '20px' },
  mainTitle: { fontFamily: 'Playfair Display, serif', fontSize: '44px', color: '#0f172a', lineHeight: '1.15', marginBottom: '16px', fontWeight: '800' },
  subtitle: { fontSize: '18px', color: '#64748b', fontWeight: '500', marginBottom: '30px' },
  divider: { width: '60px', height: '4px', backgroundColor: 'var(--accent, #e11d48)', margin: '0 auto 30px', borderRadius: '2px' },
  mainContent: { maxWidth: '1000px', margin: '0 auto', padding: '60px 24px' },
  listContainer: { display: 'flex', flexDirection: 'column', gap: '40px' },
  card: { display: 'flex', flexWrap: 'wrap', backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' },
  imageBox: { flex: '1 1 340px', position: 'relative', minHeight: '280px' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  rankRibbon: { position: 'absolute', top: '20px', left: '0', backgroundColor: 'var(--deep, #0f172a)', color: '#fff', padding: '8px 20px 8px 16px', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', display: 'flex', alignItems: 'baseline', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 10 },
  rankHash: { fontSize: '16px', fontWeight: '600', marginRight: '2px', opacity: '0.8' },
  rankNum: { fontSize: '28px', fontWeight: '900', lineHeight: '1' },
  typeBadge: { position: 'absolute', bottom: '16px', left: '16px', backgroundColor: 'rgba(255,255,255,0.95)', color: '#0f172a', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', backdropFilter: 'blur(4px)' },
  contentBox: { flex: '2 1 400px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  contentHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap', marginBottom: '16px' },
  collegeName: { fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '8px', lineHeight: '1.25' },
  location: { fontSize: '14px', color: '#64748b', fontWeight: '500' },
  ratingBlock: { backgroundColor: '#fffbeb', border: '1px solid #fef3c7', padding: '8px 16px', borderRadius: '12px', textAlign: 'center' },
  ratingScore: { fontSize: '18px', fontWeight: '800', color: '#d97706' },
  reviewCount: { fontSize: '11px', color: '#b45309', fontWeight: '600', marginTop: '2px', textTransform: 'uppercase' },
  description: { fontSize: '15px', lineHeight: '1.6', color: '#475569', marginBottom: '24px' },
  dataGrid: { display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', marginBottom: '24px' },
  dataItem: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '120px', flex: '1' },
  dataLabel: { fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' },
  dataValue: { fontSize: '14px', color: '#0f172a', fontWeight: '700' },
  paginationContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '50px', flexWrap: 'wrap' },
  pageBtn: { padding: '10px 18px', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '15px', fontWeight: '600', color: '#334155', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' },
  activePageBtn: { backgroundColor: 'var(--accent, #e11d48)', color: '#fff', borderColor: 'var(--accent, #e11d48)', boxShadow: '0 4px 10px rgba(225, 29, 72, 0.3)' },
  disabledBtn: { opacity: 0.5, cursor: 'not-allowed', backgroundColor: '#f8fafc' }
};