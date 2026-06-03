import React, { useMemo, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { colleges } from '../../data/colleges';

export default function TopGovtMedicalColleges() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const top10GovtColleges = useMemo(() => {
    const southStates = ['Kerala', 'Karnataka', 'Tamil Nadu'];
    return colleges
      .filter(c => 
        southStates.includes(c.state) && 
        c.type === 'Government' && 
        c.courses.includes('MBBS')
      )
      .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
      .slice(0, 10);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Public Institutions</span>
          <h1 style={styles.mainTitle}>Top 10 Government Medical Colleges in South India</h1>
          <p style={styles.subtitle}>Ranking the highest-rated public medical institutions in the region.</p>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.listContainer}>
          {top10GovtColleges.map((college, index) => (
            <article key={college.id} style={styles.card}>
              {/* Image & Rank Section */}
              <div style={styles.imageBox}>
                <div style={styles.rankRibbon}>
                  <span style={styles.rankHash}>#</span>
                  <span style={styles.rankNum}>{index + 1}</span>
                </div>
                <img 
                  src={college.image} 
                  alt={college.name} 
                  style={styles.image}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'; }}
                />
              </div>

              {/* Content Section */}
              <div style={styles.contentBox}>
                <h2 style={styles.collegeName}>{college.name}</h2>
                <p style={styles.location}>📍 {college.city}, {college.state}</p>
                <div style={styles.ratingBox}>⭐ {college.rating.toFixed(1)} Rating ({college.reviews} Reviews)</div>
                <p style={styles.description}>{college.description}</p>
                
                <div style={styles.metaInfo}>
                  <strong>Affiliation:</strong> {college.affiliation} | 
                  <strong> Fees:</strong> {college.fees}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: { backgroundColor: '#f3f4f6', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' },
  heroHeader: { backgroundColor: '#fff', padding: '60px 24px', textAlign: 'center', borderBottom: '1px solid #e5e7eb' },
  mainTitle: { fontFamily: 'Playfair Display, serif', fontSize: '40px', color: '#111827', marginBottom: '16px' },
  subtitle: { color: '#6b7280', fontSize: '18px' },
  eyebrow: { color: '#16a34a', fontWeight: '700', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' },
  mainContent: { maxWidth: '900px', margin: '40px auto', padding: '0 24px' },
  listContainer: { display: 'flex', flexDirection: 'column', gap: '40px' },
  
  card: { 
    display: 'flex', 
    flexWrap: 'wrap', 
    background: '#fff', 
    borderRadius: '20px', 
    overflow: 'hidden', 
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
    border: '1px solid #f1f5f9' 
  },
  imageBox: { flex: '1 1 300px', position: 'relative', minHeight: '250px' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  rankRibbon: { position: 'absolute', top: '20px', left: '0', background: 'var(--deep)', color: '#fff', padding: '8px 20px', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', fontWeight: '900', fontSize: '24px', zIndex: 10 },
  
  contentBox: { flex: '2 1 400px', padding: '32px' },
  collegeName: { fontSize: '24px', color: '#111827', marginBottom: '8px', fontWeight: '800' },
  location: { fontSize: '14px', color: '#6b7280', marginBottom: '12px', fontWeight: '500' },
  ratingBox: { fontSize: '14px', fontWeight: '700', color: '#d97706', marginBottom: '16px' },
  description: { fontSize: '15px', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' },
  metaInfo: { fontSize: '13px', color: '#374151', fontWeight: '600', borderTop: '1px solid #f3f4f6', paddingTop: '16px' }
};