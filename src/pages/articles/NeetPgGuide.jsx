import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function NeetPgGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Postgraduate Medical Exams</span>
          <h1 style={styles.mainTitle}>NEET-PG: Advancing Your Medical Career</h1>
          <p style={styles.subtitle}>
            The essential guide to securing MD, MS, and PG Diploma seats in India.
          </p>
          <div style={styles.divider}></div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.section}>
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80" 
            alt="Doctors consulting" 
            style={styles.featuredImage}
          />
          <h2 style={styles.sectionTitle}>What is NEET-PG?</h2>
          <p style={styles.paragraph}>
            The <strong>National Eligibility cum Entrance Test (Postgraduate)</strong> is a national-level computer-based qualifying and ranking exam. It is mandatory for medical graduates seeking admission to various MD (Doctor of Medicine), MS (Master of Surgery), and PG Diploma courses across the country.
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
              <span style={styles.factValue}>Once a year</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Mode of Exam</span>
              <span style={styles.factValue}>Computer Based Test (CBT)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Total Questions</span>
              <span style={styles.factValue}>200 MCQs</span>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Eligibility Criteria</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Degree:</strong> Must hold an MBBS degree or provisional MBBS pass certificate recognized under the NMC Act.</li>
            <li style={styles.listItem}><strong>Registration:</strong> Must possess a permanent or provisional registration certificate of MBBS qualification issued by the NMC or SMC.</li>
            <li style={styles.listItem}><strong>Internship:</strong> Must have completed a 12-month compulsory rotatory internship on or before the cutoff date specified by NBE.</li>
          </ul>
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