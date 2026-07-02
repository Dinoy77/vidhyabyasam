import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO'; // <-- Added SEO import
import { seoConfigurations } from '../../data/seoData'; // <-- Added seoData import

export default function IniCetGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetching directly from seoData.js
  const pageSEO = seoConfigurations.iniCetGuide;

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
          <span style={styles.eyebrow}>Institutes of National Importance</span>
          <h1 style={styles.mainTitle}>INI-CET: The Elite PG Entrance</h1>
          <p style={styles.subtitle}>
            Your path to postgraduation at AIIMS, JIPMER, PGIMER, and NIMHANS.
          </p>
          <div style={styles.divider}></div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.section}>
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" 
            alt="Advanced Hospital Infrastructure" 
            style={styles.featuredImage}
          />
          <h2 style={styles.sectionTitle}>What is INI-CET?</h2>
          <p style={styles.paragraph}>
            The <strong>Institute of National Importance Combined Entrance Test (INI-CET)</strong> replaced individual PG entrance exams for elite institutes. It is conducted for admission to MD, MS, DM (6 yrs), MCh (6 yrs), and MDS courses at AIIMS institutes across the country, JIPMER (Puducherry), PGIMER (Chandigarh), and NIMHANS (Bengaluru).
          </p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subTitle}>Exam Overview Matrix</h3>
          <div style={styles.factGrid}>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Conducting Body</span>
              <span style={styles.factValue}>AIIMS, New Delhi</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Frequency</span>
              <span style={styles.factValue}>Twice a year (January and July sessions)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Mode of Exam</span>
              <span style={styles.factValue}>Computer Based Test (CBT)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Exam Duration</span>
              <span style={styles.factValue}>3 Hours (200 Questions)</span>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why INI-CET is Highly Coveted</h2>
          <p style={styles.paragraph}>
            Securing a seat through INI-CET means training at India's most advanced, well-funded, and prestigious medical centers. Graduates from these institutes are highly sought after globally due to the intense clinical exposure, research opportunities, and academic rigor they experience.
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