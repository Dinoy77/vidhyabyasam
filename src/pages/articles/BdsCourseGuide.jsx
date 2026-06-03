import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BdsCourseGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Popular Medical Courses</span>
          <h1 style={styles.mainTitle}>BDS: Bachelor of Dental Surgery</h1>
          <p style={styles.subtitle}>
            The Complete Guide to Dentistry, Curriculum, Fees, and Dental Careers.
          </p>
          <div style={styles.divider}></div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.section}>
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80" 
            alt="Dental Surgery and Practice" 
            style={styles.featuredImage}
          />
          <h2 style={styles.sectionTitle}>What is BDS?</h2>
          <p style={styles.paragraph}>
            The <strong>BDS (Bachelor of Dental Surgery)</strong> is the only approved professional dental course in India. It is a highly specialized undergraduate degree that trains students in the prevention, diagnosis, and treatment of diseases of the oral cavity, maxillofacial region, and associated structures. Graduates are licensed to practice as Dental Surgeons.
          </p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subTitle}>Course Overview Matrix</h3>
          <div style={styles.factGrid}>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Full Form</span>
              <span style={styles.factValue}>Bachelor of Dental Surgery</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Duration</span>
              <span style={styles.factValue}>5 Years (4 Years Academics + 1 Year Internship)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Admission Exam</span>
              <span style={styles.factValue}>NEET-UG</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Regulatory Body</span>
              <span style={styles.factValue}>Dental Council of India (DCI)</span>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Eligibility Criteria</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Academic Background:</strong> 10+2 with Physics, Chemistry, Biology, and English as core subjects.</li>
            <li style={styles.listItem}><strong>Minimum Percentage:</strong> At least 50% aggregate in PCB for general category (40% for reserved categories).</li>
            <li style={styles.listItem}><strong>Entrance Mandatory:</strong> Admission is strictly based on the NEET-UG scores and counseling.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Course Structure</h2>
          <div style={styles.timeline}>
            <div style={{ ...styles.timelineBlock, borderLeftColor: '#cbd5e1' }}>
              <div style={styles.timelineHeader}>
                <span style={styles.timelineBadge}>Years 1-2</span>
                <h4 style={styles.timelineTitle}>Basic Medical & Dental Sciences</h4>
              </div>
              <p style={styles.timelineDesc}>General Human Anatomy, Physiology, Biochemistry, Dental Anatomy, and Pre-clinical Prosthodontics.</p>
            </div>
            <div style={{ ...styles.timelineBlock, borderLeftColor: '#cbd5e1' }}>
              <div style={styles.timelineHeader}>
                <span style={styles.timelineBadge}>Years 3-4</span>
                <h4 style={styles.timelineTitle}>Clinical Dentistry</h4>
              </div>
              <p style={styles.timelineDesc}>Oral Pathology, General Surgery, Orthodontics, Oral & Maxillofacial Surgery, and Periodontics.</p>
            </div>
            <div style={{ ...styles.timelineBlock, borderLeftColor: '#16a34a' }}>
              <div style={{ ...styles.timelineHeader, borderLeftColor: '#16a34a' }}>
                <span style={{ ...styles.timelineBadge, backgroundColor: '#f0fdf4', color: '#16a34a' }}>Final</span>
                <h4 style={styles.timelineTitle}>Rotatory Internship (1 Year)</h4>
              </div>
              <p style={styles.timelineDesc}>Mandatory hands-on clinical practice treating patients across various dental departments.</p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Career Paths After BDS</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Clinical Practice:</strong> Open a private dental clinic or work as a consulting dentist in hospitals.</li>
            <li style={styles.listItem}><strong>Higher Education:</strong> Pursue MDS (Master of Dental Surgery) for specialization in fields like Orthodontics or Maxillofacial Surgery.</li>
            <li style={styles.listItem}><strong>Government Roles:</strong> Join state/central health services or the Army Dental Corps.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
//.
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
  timeline: { display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' },
  timelineBlock: { paddingLeft: '16px', borderLeft: '3px solid #cbd5e1' },
  timelineHeader: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' },
  timelineBadge: { padding: '2px 8px', backgroundColor: '#f1f5f9', color: '#475569', fontSize: '11px', fontWeight: '700', borderRadius: '4px', textTransform: 'uppercase' },
  timelineTitle: { fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: 0 },
  timelineDesc: { fontSize: '14px', lineHeight: '1.6', color: '#475569', margin: 0 },
};