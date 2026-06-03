import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BamsCourseGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>AYUSH Courses</span>
          <h1 style={styles.mainTitle}>BAMS: Bachelor of Ayurvedic Medicine</h1>
          <p style={styles.subtitle}>
            Explore traditional healing, modern integration, and Ayurveda careers.
          </p>
          <div style={styles.divider}></div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.section}>
          <img 
            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1200&q=80" 
            alt="Ayurvedic Medicine" 
            style={styles.featuredImage}
          />
          <h2 style={styles.sectionTitle}>What is BAMS?</h2>
          <p style={styles.paragraph}>
            <strong>BAMS (Bachelor of Ayurvedic Medicine and Surgery)</strong> is an integrated medical degree that deeply studies the ancient Indian system of Ayurveda alongside modern medical science. Graduates are recognized as registered medical practitioners and can practice Ayurvedic medicine and surgery across the country.
          </p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subTitle}>Course Overview Matrix</h3>
          <div style={styles.factGrid}>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Full Form</span>
              <span style={styles.factValue}>Bachelor of Ayurvedic Medicine & Surgery</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Duration</span>
              <span style={styles.factValue}>5.5 Years (4.5 Years Academics + 1 Year Internship)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Admission Exam</span>
              <span style={styles.factValue}>NEET-UG</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Regulatory Body</span>
              <span style={styles.factValue}>NCISM / Ministry of AYUSH</span>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Eligibility Criteria</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Academic Background:</strong> 10+2 with PCB (Physics, Chemistry, Biology) and English.</li>
            <li style={styles.listItem}><strong>Minimum Percentage:</strong> Minimum 50% aggregate in the 12th board exams.</li>
            <li style={styles.listItem}><strong>Entrance Mandatory:</strong> Admissions are exclusively processed through NEET-UG scores via AYUSH counseling.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Career Paths After BAMS</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Clinical Practice:</strong> Open an Ayurvedic clinic or join wellness resorts, retreats, and specialized AYUSH hospitals.</li>
            <li style={styles.listItem}><strong>Postgraduation (MD/MS Ayurveda):</strong> Specialize in branches like Kayachikitsa (Internal Medicine) or Shalya Tantra (Surgery).</li>
            <li style={styles.listItem}><strong>Research & Manufacturing:</strong> Work as a drug researcher or medical officer in herbal and Ayurvedic pharmaceutical companies.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Re-use the exact same styles object as the BDS component above
const styles = {
  pageContainer: { backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' },
  heroHeader: { backgroundColor: '#f8fafc', padding: '60px 24px 40px', borderBottom: '1px solid #e2e8f0', textAlign: 'center' },
  heroContent: { maxWidth: '800px', margin: '0 auto' },
  eyebrow: { display: 'inline-block', padding: '6px 14px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '20px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' },
  mainTitle: { fontFamily: 'Playfair Display, serif', fontSize: '40px', color: '#0f172a', lineHeight: '1.2', marginBottom: '12px', fontWeight: '800' },
  subtitle: { fontSize: '18px', color: '#64748b', fontWeight: '500' },
  divider: { width: '50px', height: '4px', backgroundColor: '#2563eb', margin: '24px auto 0', borderRadius: '2px' },
  mainContent: { maxWidth: '800px', margin: '0 auto', padding: '40px 24px 80px' },
  featuredImage: { width: '100%', height: '380px', objectFit: 'cover', borderRadius: '16px', marginBottom: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' },
  section: { marginBottom: '40px' },
  sectionTitle: { fontSize: '26px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', borderLeft: '4px solid #2563eb', paddingLeft: '12px' },
  subTitle: { fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' },
  paragraph: { fontSize: '16px', lineHeight: '1.7', color: '#334155', marginBottom: '14px' },
  list: { paddingLeft: '20px', marginBottom: '20px' },
  listItem: { fontSize: '15px', lineHeight: '1.7', color: '#334155', marginBottom: '10px' },
  factGrid: { display: 'flex', flexWrap: 'wrap', gap: '16px', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' },
  factItem: { flex: '1 1 45%', display: 'flex', flexDirection: 'column', gap: '4px' },
  factLabel: { fontSize: '12px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' },
  factValue: { fontSize: '14px', color: '#0f172a', fontWeight: '600' },
};