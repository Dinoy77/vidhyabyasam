import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function FmgeGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Medical Screening Test</span>
          <h1 style={styles.mainTitle}>FMGE: Foreign Medical Graduates Examination</h1>
          <p style={styles.subtitle}>
            The licensing exam for Indian citizens holding medical degrees from foreign universities.
          </p>
          <div style={styles.divider}></div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.section}>
          <img 
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=1200&q=80" 
            alt="Globe and Stethoscope" 
            style={styles.featuredImage}
          />
          <h2 style={styles.sectionTitle}>What is FMGE?</h2>
          <p style={styles.paragraph}>
            Also known as the MCI Screening Test, the <strong>Foreign Medical Graduates Examination (FMGE)</strong> is a licensure examination. It is mandatory for Indian citizens or Overseas Citizens of India (OCI) who have attained their primary medical qualification from an institution outside India, but wish to practice medicine in India.
          </p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subTitle}>Exam Overview Matrix</h3>
          <div style={styles.factGrid}>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Conducting Body</span>
              <span style={styles.factValue}>National Board of Examinations (NBE)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Frequency</span>
              <span style={styles.factValue}>Twice a year (Usually June and December)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Passing Criteria</span>
              <span style={styles.factValue}>Minimum 150 out of 300 marks (50%)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Negative Marking</span>
              <span style={styles.factValue}>No negative marking</span>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Exam Pattern</h2>
          <p style={styles.paragraph}>
            The exam consists of 300 multiple-choice questions divided into two parts of 150 questions each, taken on the same day. Upon passing, candidates undergo a compulsory internship in India before receiving permanent registration to practice.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Ensure the styles object from the first file is pasted here identically..
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