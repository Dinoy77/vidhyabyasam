import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO'; // <-- Added SEO import
import { seoConfigurations } from '../../data/seoData'; // <-- Added seoData import

export default function NeetUgGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetching directly from seoData.js
  const pageSEO = seoConfigurations.neetUgGuide;

  return (
    <div style={styles.pageContainer}>
      {/* --- RENDER SEO COMPONENT HERE --- */}
      {pageSEO && (
        <SEO 
          title={pageSEO.title}
          description={pageSEO.description}
          keywords={pageSEO.keywords}
          url={pageSEO.url}
          schemaData={pageSEO.schemaData}
        />
      )}

      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Medical Entrance Exams</span>
          <h1 style={styles.mainTitle}>NEET-UG: The Gateway to Medicine</h1>
          <p style={styles.subtitle}>
            Everything you need to know about India's biggest undergraduate medical entrance test.
          </p>
          <div style={styles.divider}></div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.section}>
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80" 
            alt="Medical Entrance Exam Preparation" 
            style={styles.featuredImage}
          />
          <h2 style={styles.sectionTitle}>What is NEET-UG?</h2>
          <p style={styles.paragraph}>
            The <strong>National Eligibility cum Entrance Test (Undergraduate)</strong> is the sole national-level entrance examination conducted for admission to undergraduate medical (MBBS), dental (BDS), and AYUSH (BAMS, BHMS, etc.) courses in government and private institutions in India, including AIIMS and JIPMER.
          </p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subTitle}>Exam Overview Matrix</h3>
          <div style={styles.factGrid}>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Conducting Body</span>
              <span style={styles.factValue}>National Testing Agency (NTA)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Frequency</span>
              <span style={styles.factValue}>Once a year (Usually in May)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Mode of Exam</span>
              <span style={styles.factValue}>Offline (Pen and Paper based)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Total Marks</span>
              <span style={styles.factValue}>720 Marks (+4 for correct, -1 for incorrect)</span>
            </div>
          </div>
        </section>
        
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Eligibility Criteria</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Age Limit:</strong> Must be 17 years old by December 31st of the admission year. There is currently no upper age limit.</li>
            <li style={styles.listItem}><strong>Academic Background:</strong> Must have passed 10+2 (or equivalent) with Physics, Chemistry, Biology/Biotechnology, and English.</li>
            <li style={styles.listItem}><strong>Minimum Marks:</strong> 50% aggregate in PCB for General category, 40% for SC/ST/OBC.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Exam Pattern</h2>
          <div style={styles.timeline}>
            <div style={{ ...styles.timelineBlock, borderLeftColor: '#cbd5e1' }}>
              <div style={styles.timelineHeader}>
                <span style={styles.timelineBadge}>Section A & B</span>
                <h4 style={styles.timelineTitle}>Subject Breakdown</h4>
              </div>
              <p style={styles.timelineDesc}>The exam covers Physics, Chemistry, Botany, and Zoology. Each subject has two sections: Section A (35 mandatory questions) and Section B (15 questions, out of which 10 must be attempted).</p>
            </div>
            <div style={{ ...styles.timelineBlock, borderLeftColor: '#16a34a' }}>
              <div style={{ ...styles.timelineHeader, borderLeftColor: '#16a34a' }}>
                <span style={{ ...styles.timelineBadge, backgroundColor: '#f0fdf4', color: '#16a34a' }}>Time</span>
                <h4 style={styles.timelineTitle}>Duration</h4>
              </div>
              <p style={styles.timelineDesc}>The total duration of the examination is 3 hours and 20 minutes (200 minutes).</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

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