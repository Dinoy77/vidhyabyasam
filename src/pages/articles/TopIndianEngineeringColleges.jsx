import React, { useMemo, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { engineering_colleges } from '../../data/engineering_colleges';

export default function TopIndianEngineeringColleges() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter for the top premier engineering colleges in South India
  // Replace these IDs with the actual IDs from your engineering_colleges.js dataset
  const southIndianEngineeringGiants = useMemo(() => {
    const targetIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    
    return engineering_colleges
      .filter(c => targetIds.includes(c.id))
      .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      {/* Editorial Header */}
      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Zonal Rankings</span>
          <h1 style={styles.mainTitle}>
            Top Elite Engineering Colleges in South India
          </h1>
          <p style={styles.subtitle}>
            A definitive guide to the highest-rated technical institutions across the southern states.
          </p>
          <div style={styles.divider}></div>
          <p style={styles.introText}>
            South India is recognized as the hub of technical education in the country, home to institutions that foster innovation and engineering excellence. We have analyzed verified institutional data to rank the premier engineering establishments that consistently deliver top-tier academic results and industry placements.
          </p>
        </div>
      </header>

      {/* Premium Listicle Grid */}
      <main style={styles.mainContent}>
        <div style={styles.listContainer}>
          {southIndianEngineeringGiants.map((college, index) => (
            <article key={college.id} style={styles.card}>
              
              {/* Left Column: Image Area */}
            <div style={styles.imageBox}>
            <div style={styles.rankRibbon}>
                <span style={styles.rankHash}>#</span>
                <span style={styles.rankNum}>{index + 1}</span>
            </div>
            <img 
                // Use the college image, or fallback to a professional Engineering/Tech placeholder
                src={college.image || 'https://media.collegedekho.com/media/img/institute/crawled_images/None/Campus%20view%20of%20Kings%20Engineering%20College%20Sriperumbudur_Campus.jpeg?width=1080'} 
                alt={college.name} 
                style={styles.image}
                // This handler ensures that if the 'college.image' URL itself is broken, 
                // it will swap to the placeholder immediately.
                onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://media.collegedekho.com/media/img/institute/crawled_images/None/Campus%20view%20of%20Kings%20Engineering%20College%20Sriperumbudur_Campus.jpeg?width=1080';
                }}
            />
            <div style={styles.typeBadge}>{college.type}</div>
            </div>

              {/* Right Column: Detailed Context */}
              <div style={styles.contentBox}>
                <div style={styles.contentHeader}>
                  <div>
                    <h2 style={styles.collegeName}>{college.name}</h2>
                    <p style={styles.location}>📍 {college.city}, {college.state}</p>
                  </div>
                  <div style={styles.ratingBlock}>
                    <div style={styles.ratingScore}>⭐ {college.rating.toFixed(1)}</div>
                    <div style={styles.reviewCount}>{college.reviews} Reviews</div>
                  </div>
                </div>

                <p style={styles.description}>{college.description}</p>

                {/* Structured Matrix */}
                <div style={styles.dataGrid}>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>Established</span>
                    <span style={styles.dataValue}>{college.established}</span>
                  </div>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>Annual Fees</span>
                    <span style={styles.dataValue}>{college.fees}</span>
                  </div>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>Approval</span>
                    <span style={styles.dataValue}>{college.approval}</span>
                  </div>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>Affiliation</span>
                    <span style={styles.dataValue}>{college.affiliation}</span>
                  </div>
                </div>

                {/* Program Scope Tags */}
                <div style={styles.tagSection}>
                  <span style={styles.tagHeading}>Top Courses:</span>
                  <div style={styles.tagWrapper}>
                    {college.courses.slice(0, 5).map(course => (
                      <span key={course} style={styles.coursePill}>{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: '#f3f4f6', 
    minHeight: '100vh',
    fontFamily: 'DM Sans, sans-serif',
  },
  heroHeader: {
    backgroundColor: '#fff',
    padding: '80px 24px 60px',
    borderBottom: '1px solid #e5e7eb',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  eyebrow: {
    display: 'inline-block',
    padding: '6px 14px',
    backgroundColor: '#f0fdf4',
    color: '#16a34a',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    marginBottom: '20px',
  },
  mainTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '44px',
    color: '#0f172a',
    lineHeight: '1.15',
    marginBottom: '16px',
    fontWeight: '800',
  },
  subtitle: {
    fontSize: '18px',
    color: '#64748b',
    fontWeight: '500',
    marginBottom: '30px',
  },
  divider: {
    width: '60px',
    height: '4px',
    backgroundColor: 'var(--accent, #e11d48)',
    margin: '0 auto 30px',
    borderRadius: '2px',
  },
  introText: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#475569',
  },
  mainContent: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '60px 24px',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap', 
    backgroundColor: '#fff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9',
  },
  imageBox: {
    flex: '1 1 340px', 
    position: 'relative',
    minHeight: '280px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  rankRibbon: {
    position: 'absolute',
    top: '20px',
    left: '0',
    backgroundColor: 'var(--deep, #0f172a)',
    color: '#fff',
    padding: '8px 20px 8px 16px',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    display: 'flex',
    alignItems: 'baseline',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    zIndex: 10,
  },
  rankHash: {
    fontSize: '16px',
    fontWeight: '600',
    marginRight: '2px',
    opacity: '0.8',
  },
  rankNum: {
    fontSize: '28px',
    fontWeight: '900',
    lineHeight: '1',
  },
  typeBadge: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    backgroundColor: 'rgba(255,255,255,0.95)',
    color: '#0f172a',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '700',
    backdropFilter: 'blur(4px)',
  },
  contentBox: {
    flex: '2 1 400px', 
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '16px',
  },
  collegeName: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '8px',
    lineHeight: '1.25',
  },
  location: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '500',
  },
  ratingBlock: {
    backgroundColor: '#fffbeb',
    border: '1px solid #fef3c7',
    padding: '8px 16px',
    borderRadius: '12px',
    textAlign: 'center',
  },
  ratingScore: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#d97706',
  },
  reviewCount: {
    fontSize: '11px',
    color: '#b45309',
    fontWeight: '600',
    marginTop: '2px',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#475569',
    marginBottom: '24px',
  },
  dataGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    marginBottom: '24px',
  },
  dataItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    minWidth: '120px',
    flex: '1',
  },
  dataLabel: {
    fontSize: '12px',
    color: '#64748b',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  dataValue: {
    fontSize: '14px',
    color: '#0f172a',
    fontWeight: '700',
  },
  tagSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  tagHeading: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#334155',
  },
  tagWrapper: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  coursePill: {
    padding: '6px 12px',
    backgroundColor: '#fff',
    border: '1px solid #cbd5e1',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#0f172a',
  },
};