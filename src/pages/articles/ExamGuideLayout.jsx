import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ExamGuideLayout({ data }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      {/* Hero Header */}
      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Entrance Exam Guide</span>
          <h1 style={styles.mainTitle}>{data.title}</h1>
          <p style={styles.subtitle}>{data.subtitle}</p>
          <div style={styles.divider}></div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={styles.mainContent}>
        {/* Exam Featured Image */}
        <div style={styles.imageContainer}>
          <img 
            src={data.image} 
            alt={data.title} 
            style={styles.heroImage}
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80' }}
          />
        </div>

        <div style={styles.contentGrid}>
          {/* Left Column: Core Overview & Syllabus */}
          <div style={styles.leftCol}>
            <div style={styles.infoCard}>
              <h2 style={styles.sectionTitle}>About the Exam</h2>
              <p style={styles.descriptionText}>{data.overview}</p>
            </div>

            <div style={styles.infoCard}>
              <h2 style={styles.sectionTitle}>Exam Pattern & Highlights</h2>
              <div style={styles.subjectsGrid}>
                {data.highlights.map((highlight, index) => (
                  <div key={index} style={styles.subjectTag}>
                    🔹 {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Requirements & Metrics Matrix */}
          <div style={styles.rightCol}>
            <div style={styles.matrixCard}>
              <h3 style={styles.matrixTitle}>Exam Metrics</h3>
              <div style={styles.matrixItem}>
                <span style={styles.matrixLabel}>🏢 Conducting Body</span>
                <span style={styles.matrixValue}>{data.conductingBody}</span>
              </div>
              <div style={styles.matrixItem}>
                <span style={styles.matrixLabel}>💻 Exam Mode</span>
                <span style={styles.matrixValue}>{data.mode}</span>
              </div>
              <div style={styles.matrixItem}>
                <span style={styles.matrixLabel}>🎓 Eligibility</span>
                <span style={styles.matrixValue}>{data.eligibility}</span>
              </div>
            </div>

            <div style={styles.matrixCard}>
              <h3 style={styles.matrixTitle}>Top Accepting Colleges</h3>
              <ul style={styles.careerList}>
                {data.colleges.map((college, index) => (
                  <li key={index} style={styles.careerItem}>
                    🏛️ {college}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: { backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' },
  heroHeader: { backgroundColor: '#fff', padding: '120px 24px 40px', borderBottom: '1px solid #e2e8f0', textAlign: 'center' },
  heroContent: { maxWidth: '800px', margin: '0 auto' },
  eyebrow: { display: 'inline-block', padding: '6px 14px', backgroundColor: '#fef2f2', color: '#dc2626', borderRadius: '20px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' },
  mainTitle: { fontFamily: 'Playfair Display, serif', fontSize: '38px', color: '#0f172a', marginBottom: '12px', fontWeight: '800' },
  subtitle: { fontSize: '16px', color: '#64748b', marginBottom: '24px', lineHeight: 1.5 },
  divider: { width: '50px', height: '4px', backgroundColor: '#dc2626', margin: '0 auto', borderRadius: '2px' },
  mainContent: { maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' },
  imageContainer: { width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  heroImage: { width: '100%', height: '100%', objectFit: 'cover' },
  contentGrid: { display: 'flex', flexWrap: 'wrap', gap: '32px' },
  leftCol: { flex: '2 1 600px', display: 'flex', flexDirection: 'column', gap: '24px' },
  rightCol: { flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '24px' },
  infoCard: { backgroundColor: '#fff', padding: '28px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' },
  matrixCard: { backgroundColor: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' },
  sectionTitle: { fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' },
  descriptionText: { fontSize: '15px', color: '#475569', lineHeight: '1.7' },
  subjectsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px', marginTop: '8px' },
  subjectTag: { padding: '10px 14px', backgroundColor: '#f1f5f9', borderRadius: '8px', fontSize: '13px', fontWeight: '500', color: '#334155' },
  matrixTitle: { fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', borderBottom: '2px solid #f1f5f9', paddingBottom: '8px' },
  matrixItem: { display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f1f5f9', fontSize: '14px', gap: '10px' },
  matrixLabel: { color: '#64748b', fontWeight: '500', flexShrink: 0 },
  matrixValue: { color: '#0f172a', fontWeight: '700', textAlign: 'right' },
  careerList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' },
  careerItem: { fontSize: '14px', fontWeight: '600', color: '#334155', lineHeight: '1.4' }
};