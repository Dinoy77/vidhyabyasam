import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BscNursingCourseGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Nursing Courses</span>
          <h1 style={styles.mainTitle}>B.Sc Nursing: Bachelor of Science</h1>
          <p style={styles.subtitle}>
            A comprehensive guide to nursing sciences, patient care, and clinical roles.
          </p>
          <div style={styles.divider}></div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.section}>
          <img 
            src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80" 
            alt="Nursing Professionals" 
            style={styles.featuredImage}
          />
          <h2 style={styles.sectionTitle}>What is B.Sc Nursing?</h2>
          <p style={styles.paragraph}>
            <strong>B.Sc Nursing</strong> is a four-year undergraduate program aimed at preparing students to serve humanity through medical treatment and patient care. It combines medical science with humanitarian values, teaching students anatomy, physiology, nutrition, and advanced clinical nursing skills.
          </p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subTitle}>Course Overview Matrix</h3>
          <div style={styles.factGrid}>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Full Form</span>
              <span style={styles.factValue}>Bachelor of Science in Nursing</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Duration</span>
              <span style={styles.factValue}>4 Years (Includes 6 months internship)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Admission Exam</span>
              <span style={styles.factValue}>State exams (KEAM/KCET) / NEET (varies)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Regulatory Body</span>
              <span style={styles.factValue}>Indian Nursing Council (INC) & State Councils</span>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Eligibility Criteria</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Academic Background:</strong> 10+2 with Science (PCB) and English core/elective.</li>
            <li style={styles.listItem}><strong>Minimum Percentage:</strong> Generally requires 45-50% aggregate marks.</li>
            <li style={styles.listItem}><strong>Exams:</strong> Admission is primarily through state-level nursing entrance exams, though some premier institutes now use NEET-UG scores.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Global Career Scope</h2>
          <p style={styles.paragraph}>Nursing is one of the most highly sought-after professions globally. Career options include:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Staff Nurse / Registered Nurse:</strong> Direct patient care in public and corporate multi-specialty hospitals.</li>
            <li style={styles.listItem}><strong>International Opportunities:</strong> High demand for Indian nurses in the US, UK, Canada, and the Middle East after clearing exams like NCLEX or OET.</li>
            <li style={styles.listItem}><strong>Specializations (M.Sc Nursing):</strong> Further study allows specialization in Pediatric, Psychiatric, or Critical Care nursing.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Re-use the exact same styles object as the BDS component above.
const styles = {
  pageContainer: { backgroundColor: '#fff', minHeight: '100vh',fontFamily: 'DM Sans, sans-serif' },
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