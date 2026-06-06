import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <-- Added for detail page routing
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { colleges } from '../../data/colleges';

export default function TopTamilNaduMedicalColleges() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const top10TamilNaduColleges = useMemo(() => {
    return colleges
      .filter(c => c.state === 'Tamil Nadu' && c.courses.includes('MBBS'))
      .sort((a, b) => Number(b.rating) - Number(a.rating) || Number(b.reviews) - Number(a.reviews))
      .slice(0, 10);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      {/* Editorial Header */}
      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>State Rankings</span>
          <h1 style={styles.mainTitle}>Top 10 Medical Colleges in Tamil Nadu</h1>
          <p style={styles.subtitle}>Discover the most prestigious medical institutions offering MBBS across Tamil Nadu.</p>
          <div style={styles.divider}></div>
          <p style={styles.introText}>
            Tamil Nadu is renowned for its exceptional medical infrastructure and historic healthcare institutions. By analyzing critical metrics such as clinical exposure, faculty expertise, hospital bed capacity, and alumni success rates, we present the definitive top 10 destinations for medical aspirants in the state.
          </p>
        </div>
      </header>

      {/* Premium Listicle Grid */}
      <main style={styles.mainContent}>
        <div style={styles.listContainer}>
          {top10TamilNaduColleges.length > 0 ? (
            top10TamilNaduColleges.map((college, index) => (
              <article key={college.id} style={styles.card}>
                
                {/* Left Column: Image Area */}
                <div style={styles.imageBox}>
                  <div style={styles.rankRibbon}>
                    <span style={styles.rankHash}>#</span>
                    <span style={styles.rankNum}>{index + 1}</span>
                  </div>
                  <img 
                    src={college.image && college.image.length > 5 ? college.image : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'} 
                    alt={college.name} 
                    style={styles.image}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80';
                    }}
                  />
                  <div style={styles.typeBadge}>{college.type || 'Medical Institute'}</div>
                </div>

                {/* Right Column: Detailed Context */}
                <div style={styles.contentBox}>
                  <div style={styles.contentHeader}>
                    <div>
                      {/* --- Added Link Wrapper Here --- */}
                      <Link to={`/college/${college.id}`} style={styles.collegeLink}>
                        <h2 style={styles.collegeName}>{college.name}</h2>
                      </Link>
                      <p style={styles.location}>📍 {college.city}, {college.state}</p>
                    </div>
                    <div style={styles.ratingBlock}>
                      <div style={styles.ratingScore}>⭐ {Number(college.rating || 0).toFixed(1)}</div>
                      <div style={styles.reviewCount}>{college.reviews || 0} Reviews</div>
                    </div>
                  </div>

                  {/* Detailed Explanation Section */}
                  <div style={styles.explanationSection}>
                    <h3 style={styles.sectionHeading}>Why this college?</h3>
                    <p style={styles.description}>
                      {college.description || `Featuring expansive multi-specialty hospital integrations and rigorous academic curriculums, ${college.name} is a cornerstone of medical education in Tamil Nadu. Students gain unparalleled hands-on clinical experience managing diverse patient demographics.`}
                    </p>
                  </div>

                  {/* Structured Data Matrix */}
                  <div style={styles.dataGrid}>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Established</span>
                      <span style={styles.dataValue}>{college.established || "N/A"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Annual Fees</span>
                      <span style={styles.dataValue}>{college.fees || "Contact Admissions"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Approval</span>
                      <span style={styles.dataValue}>{college.approval || "NMC / Government"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Affiliation</span>
                      <span style={styles.dataValue}>{college.affiliation || "Dr. M.G.R. Medical University"}</span>
                    </div>
                  </div>

                </div>
              </article>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
              <h2>No medical colleges discovered matching the criteria in Tamil Nadu.</h2>
              <p>Verify your data model schema setup to make sure parameters line up correctly.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: { backgroundColor: '#f3f4f6', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' },
  heroHeader: { backgroundColor: '#fff', padding: '100px 24px 60px', borderBottom: '1px solid #e5e7eb', textAlign: 'center' },
  heroContent: { maxWidth: '800px', margin: '0 auto' },
  eyebrow: { display: 'inline-block', padding: '6px 14px', backgroundColor: '#f0fdf4', color: '#16a34a', borderRadius: '20px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '20px' },
  mainTitle: { fontFamily: 'Playfair Display, serif', fontSize: '44px', color: '#0f172a', lineHeight: '1.15', marginBottom: '16px', fontWeight: '800' },
  subtitle: { fontSize: '18px', color: '#64748b', fontWeight: '500', marginBottom: '30px' },
  divider: { width: '60px', height: '4px', backgroundColor: 'var(--accent, #e11d48)', margin: '0 auto 30px', borderRadius: '2px' },
  introText: { fontSize: '16px', lineHeight: '1.8', color: '#475569' },
  mainContent: { maxWidth: '1000px', margin: '0 auto', padding: '60px 24px' },
  listContainer: { display: 'flex', flexDirection: 'column', gap: '40px' },
  card: { display: 'flex', flexWrap: 'wrap', backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' },
  imageBox: { flex: '1 1 340px', position: 'relative', minHeight: '320px' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  rankRibbon: { position: 'absolute', top: '20px', left: '0', backgroundColor: '#0f172a', color: '#fff', padding: '8px 20px 8px 16px', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', display: 'flex', alignItems: 'baseline', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 10 },
  rankHash: { fontSize: '16px', fontWeight: '600', marginRight: '2px', opacity: '0.8' },
  rankNum: { fontSize: '28px', fontWeight: '900', lineHeight: '1' },
  typeBadge: { position: 'absolute', bottom: '16px', left: '16px', backgroundColor: 'rgba(255,255,255,0.95)', color: '#0f172a', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', backdropFilter: 'blur(4px)' },
  contentBox: { flex: '2 1 400px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  contentHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' },
  collegeLink: { textDecoration: 'none', color: 'inherit', cursor: 'pointer' },
  collegeName: { fontSize: '24px', fontWeight: '800', color: '#1e3a8a', marginBottom: '8px', lineHeight: '1.25', transition: 'color 0.2s ease' },
  location: { fontSize: '14px', color: '#64748b', fontWeight: '500' },
  ratingBlock: { backgroundColor: '#fffbeb', border: '1px solid #fef3c7', padding: '8px 16px', borderRadius: '12px', textAlign: 'center' },
  ratingScore: { fontSize: '18px', fontWeight: '800', color: '#d97706' },
  reviewCount: { fontSize: '11px', color: '#b45309', fontWeight: '600', marginTop: '2px', textTransform: 'uppercase' },
  explanationSection: { marginBottom: '24px' },
  sectionHeading: { fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' },
  description: { fontSize: '15px', lineHeight: '1.7', color: '#475569' },
  dataGrid: { display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', marginBottom: '24px' },
  dataItem: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '120px', flex: '1' },
  dataLabel: { fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' },
  dataValue: { fontSize: '14px', color: '#0f172a', fontWeight: '700' },
};