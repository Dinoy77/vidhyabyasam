import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function MbbsCourseGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      {/* Article Hero Header */}
      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Popular Medical Courses</span>
          <h1 style={styles.mainTitle}>
            MBBS: Bachelor of Medicine, Bachelor of Surgery
          </h1>
          <p style={styles.subtitle}>
            The Ultimate Guide to Eligibility, Structure, Fees, and Career Horizons.
          </p>
          <div style={styles.divider}></div>
        </div>
      </header>

      {/* Article Body */}
      <main style={styles.mainContent}>
        
        {/* Course Overview Section */}
        <section style={styles.section}>
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" 
            alt="Medical Students and Healthcare" 
            style={styles.featuredImage}
          />
          <h2 style={styles.sectionTitle}>What is MBBS?</h2>
          <p style={styles.paragraph}>
            The <strong>MBBS (Bachelor of Medicine, Bachelor of Surgery)</strong> is the foundational undergraduate professional degree required to practice modern medicine and surgery globally. It is an intensive, rigorous program that blends deep theoretical scientific knowledge with rigorous practical clinical training. Upon graduation, students receive the right to prefix their name with the title "Dr." and practice as registered medical professionals.
          </p>
        </section>

        {/* Quick Facts Matrix */}
        <section style={styles.section}>
          <h3 style={styles.subTitle}>Course Overview Matrix</h3>
          <div style={styles.factGrid}>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Full Form</span>
              <span style={styles.factValue}>Bachelor of Medicine, Bachelor of Surgery</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Duration</span>
              <span style={styles.factValue}>5.5 Years (4.5 Years Academics + 1 Year Internship)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Admission Exam</span>
              <span style={styles.factValue}>NEET-UG (National Eligibility cum Entrance Test)</span>
            </div>
            <div style={styles.factItem}>
              <span style={styles.factLabel}>Regulatory Body</span>
              <span style={styles.factValue}>National Medical Commission (NMC)</span>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Eligibility Criteria</h2>
          <p style={styles.paragraph}>
            Securing a seat in an MBBS program requires completing highly competitive national and state criteria:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Academic Background:</strong> Aspirants must pass 10+2 or equivalent examinations with Physics, Chemistry, Biology/Biotechnology, and English as core subjects.</li>
            <li style={styles.listItem}><strong>Minimum Percentage:</strong> A minimum aggregate of 50% marks in PCB is mandatory for general merit students (40% for SC/ST/OBC).</li>
            <li style={styles.listItem}><strong>Age Requirement:</strong> The candidate must have completed 17 years of age by December 31st of the year of admission.</li>
            <li style={styles.listItem}><strong>Entrance Mandatory:</strong> Qualifying the NEET-UG entrance test with a valid merit percentile ranking is strictly mandatory for both government and private college quotas.</li>
          </ul>
        </section>

        {/* Curriculum Structure */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Course Structure & Roadmap</h2>
          <p style={styles.paragraph}>
            The curriculum is standardized under the NMC and is divided systematically into four distinct professional phases followed by hands-on training:
          </p>
          
          <div style={styles.timeline}>
            <div style={styles.timelineBlock}>
              <div style={styles.timelineHeader}>
                <span style={styles.timelineBadge}>Phase 1</span>
                <h4 style={styles.timelineTitle}>Pre-Clinical (1 Year)</h4>
              </div>
              <p style={styles.timelineDesc}>Focuses heavily on the structural science of the human body. Subjects include Anatomy, Physiology, and Biochemistry.</p>
            </div>

            <div style={styles.timelineBlock}>
              <div style={styles.timelineHeader}>
                <span style={styles.timelineBadge}>Phase 2</span>
                <h4 style={styles.timelineTitle}>Para-Clinical (1.5 Years)</h4>
              </div>
              <p style={styles.timelineDesc}>Studies the science of diseases, diagnostic tools, and drugs. Core tracking includes Pathology, Microbiology, Pharmacology, Forensic Medicine, and Toxicology.</p>
            </div>

            <div style={styles.timelineBlock}>
              <div style={styles.timelineHeader}>
                <span style={styles.timelineBadge}>Phase 3</span>
                <h4 style={styles.timelineTitle}>Clinical - Part I (1 Year)</h4>
              </div>
              <p style={styles.timelineDesc}>Initial systemic patient exposure. Key focus areas are Community Medicine, ENT (Otolaryngology), and Ophthalmology.</p>
            </div>

            <div style={styles.timelineBlock}>
              <div style={styles.timelineHeader}>
                <span style={styles.timelineBadge}>Phase 4</span>
                <h4 style={styles.timelineTitle}>Clinical - Part II (1 Year)</h4>
              </div>
              <p style={styles.timelineDesc}>The final academic push covering core specialties: General Medicine, General Surgery, Pediatrics, and Obstetrics & Gynecology.</p>
            </div>

            {/* FIXED: Replaced duplicate attributes by cleanly embedding changes into single style objects */}
            <div style={{ ...styles.timelineBlock, borderLeftColor: '#16a34a' }}>
              <div style={{ ...styles.timelineHeader, borderLeftColor: '#16a34a' }}>
                <span style={{ ...styles.timelineBadge, backgroundColor: '#f0fdf4', color: '#16a34a' }}>Final</span>
                <h4 style={styles.timelineTitle}>Compulsory Rotatory Internship (1 Year)</h4>
              </div>
              <p style={styles.timelineDesc}>A full calendar year of real-world clinical execution. Interns rotate across different medical and surgical wings, handling emergency workloads and patient wards directly under specialized supervisors.</p>
            </div>
          </div>
        </section>

        {/* Fees and Cost Breakdown. */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Fee Structure Trends</h2>
          <p style={styles.paragraph}>
            The financial costs associated with an MBBS degree vary drastically depending on the institutional framework:
          </p>
          <div style={styles.cardInfo}>
            <p style={styles.paragraph}>
              • <strong>Government Medical Colleges:</strong> Highly subsidized by state frameworks. Tuition fees range dynamically between <strong>₹25,000 to ₹1,00,000 per year</strong>.
            </p>
            <p style={styles.paragraph}>
              • <strong>Private Medical Colleges:</strong> State-allotted merit seats usually vary between <strong>₹7,35,000 to ₹9,00,000 annually</strong>, while management/NRI quota tracks can go significantly higher depending on the infrastructure.
            </p>
          </div>
        </section>

        {/* Career Paths and Scope */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What Happens After MBBS?</h2>
          <p style={styles.paragraph}>
            An MBBS degree provides immediate, high-demand vocational flexibility across several distinct avenues:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Clinical Practice:</strong> Register with the Medical Council to step directly into healthcare infrastructure as a General Physician or Medical Officer.</li>
            <li style={styles.listItem}><strong>Postgraduation (MD / MS / DNB):</strong> The highly preferred specialization route. Graduates sit for the NEET-PG exam to secure 3-year specializations in Medicine (MD) or Surgery (MS).</li>
            <li style={styles.listItem}><strong>Civil Services / Defense Sector:</strong> Major openings exist for commissioned Medical Officers within the Army, Navy, Air Force, and Union public health grids.</li>
            <li style={styles.listItem}><strong>Hospital Management:</strong> Transitioning into corporate healthcare administration with an MBA in Healthcare or Master of Hospital Administration (MHA).</li>
          </ul>
        </section>

      </main>

      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: '#fff',
    minHeight: '100vh',
    fontFamily: 'DM Sans, sans-serif',
  },
  heroHeader: {
    backgroundColor: '#f8fafc',
    padding: '60px 24px 40px',
    borderBottom: '1px solid #e2e8f0',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  eyebrow: {
    display: 'inline-block',
    padding: '6px 14px',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '16px',
  },
  mainTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '40px',
    color: '#0f172a',
    lineHeight: '1.2',
    marginBottom: '12px',
    fontWeight: '800',
  },
  subtitle: {
    fontSize: '18px',
    color: '#64748b',
    fontWeight: '500',
  },
  divider: {
    width: '50px',
    height: '4px',
    backgroundColor: '#2563eb',
    margin: '24px auto 0',
    borderRadius: '2px',
  },
  mainContent: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 24px 80px',
  },
  featuredImage: {
    width: '100%',
    height: '380px',
    objectFit: 'cover',
    borderRadius: '16px',
    marginBottom: '32px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '16px',
    borderLeft: '4px solid #2563eb',
    paddingLeft: '12px',
  },
  subTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '16px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#334155',
    marginBottom: '14px',
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '20px',
  },
  listItem: {
    fontSize: '15px',
    lineHeight: '1.7',
    color: '#334155',
    marginBottom: '10px',
  },
  factGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    backgroundColor: '#f8fafc',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  factItem: {
    flex: '1 1 45%',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  factLabel: {
    fontSize: '12px',
    color: '#64748b',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  factValue: {
    fontSize: '14px',
    color: '#0f172a',
    fontWeight: '600',
  },
  cardInfo: {
    backgroundColor: '#fffbeb',
    border: '1px solid #fef3c7',
    borderRadius: '12px',
    padding: '24px',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '24px',
  },
  timelineBlock: {
    paddingLeft: '16px',
    borderLeft: '3px solid #cbd5e1',
  },
  timelineHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '6px',
  },
  timelineBadge: {
    padding: '2px 8px',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    fontSize: '11px',
    fontWeight: '700',
    borderRadius: '4px',
    textTransform: 'uppercase',
  },
  timelineTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0f172a',
    margin: 0,
  },
  timelineDesc: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#475569',
    margin: 0,
  },
};