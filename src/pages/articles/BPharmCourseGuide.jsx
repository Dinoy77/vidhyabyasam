import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO'; // <-- Added SEO import
import { seoConfigurations } from '../../data/seoData'; // <-- Added seoData import

export default function BPharmCourseGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetching directly from seoData.js
  const pageSEO = seoConfigurations.bPharmCourseGuide;

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
          <span style={styles.eyebrow}>Pharmacy Courses</span>
          <h1 style={styles.mainTitle}>B.Pharm: Bachelor of Pharmacy</h1>
          <p style={styles.subtitle}>
            Dive into drug research, formulation, pharmacology, and clinical therapeutics.
          </p>
          <div style={styles.divider}></div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.section}>
          <img 
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=80" 
            alt="Pharmaceutical Sciences" 
            style={styles.featuredImage}
          />
          <h2 style={styles.sectionTitle}>What is B.Pharm?</h2>
          <p style={styles.paragraph}>
            <strong>B.Pharm (Bachelor of Pharmacy)</strong> is a four-year job-oriented undergraduate program that covers the methods and processes of drug preparation, testing, and dispensing. It is the prerequisite degree for practicing as a pharmacist in India and plays a crucial role in the healthcare sector through drug research, sales, and manufacturing.
          </p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subTitle}>Course Overview Matrix</h3>
          <div style={styles.factGrid}>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Full Form</span>
              <span style={styles.factValue}>Bachelor of Pharmacy</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Duration</span>
              <span style={styles.factValue}>4 Years (8 Semesters)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Admission Exam</span>
              <span style={styles.factValue}>KEAM, KCET, or University Entrances</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Regulatory Body</span>
              <span style={styles.factValue}>Pharmacy Council of India (PCI)</span>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Eligibility Criteria</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Academic Background:</strong> 10+2 with Physics and Chemistry as compulsory subjects, along with Mathematics or Biology.</li>
            <li style={styles.listItem}><strong>Minimum Percentage:</strong> Typically 50% aggregate marks in the qualifying examination.</li>
            <li style={styles.listItem}><strong>Lateral Entry:</strong> Students who have completed D.Pharm (Diploma in Pharmacy) can enter directly into the 2nd year of B.Pharm.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Career & Industry Scope</h2>
          <p style={styles.paragraph}>The pharmaceutical industry is one of the fastest-growing sectors globally, opening up numerous paths:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Clinical Pharmacist:</strong> Dispensing medications and consulting in hospitals or private pharmacies.</li>
            <li style={styles.listItem}><strong>Drug Inspector:</strong> A highly respected government role monitoring the safety and quality of drugs.</li>
            <li style={styles.listItem}><strong>R&D and Formulation:</strong> Working in pharmaceutical laboratories to develop new medicines and quality assurance.</li>
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