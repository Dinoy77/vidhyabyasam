import React, { useMemo, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { colleges } from '../../data/colleges';

export default function TopKeralaMedicalColleges() {
  // Scroll to top when article loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter and sort the data for the article
  const top10Colleges = useMemo(() => {
    return colleges
      .filter(c => c.state === 'Kerala' && c.courses.includes('MBBS'))
      .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
      .slice(0, 10);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      {/* Hero Header Section */}
      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Exclusive Ranking</span>
          <h1 style={styles.mainTitle}>
            The Top 10 Medical Colleges in Kerala
          </h1>
          <p style={styles.subtitle}>
            Based on student reviews, clinical exposure, and aggregate ratings.
          </p>
          <div style={styles.divider}></div>
          <p style={styles.introText}>
            Kerala is home to some of the most prestigious healthcare institutions in India, offering world-class infrastructure and exceptional faculty. Discover the ultimate list of the state's highest-rated medical colleges to help you make an informed decision for your MBBS journey.
          </p>
        </div>
      </header>

      {/* List Section */}
      <main style={styles.mainContent}>
        <div style={styles.listContainer}>
          {top10Colleges.map((college, index) => (
            <article key={college.id} style={styles.card}>
              
              {/* Image & Rank Section */}
              <div style={styles.imageBox}>
                <div style={styles.rankRibbon}>
                  <span style={styles.rankHash}>#</span>
                  <span style={styles.rankNum}>{index + 1}</span>
                </div>
                <img 
                  src={college.image} 
                  alt={college.name} 
                  style={styles.image}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'; 
                  }}
                />
                <div style={styles.typeBadge}>{college.type}</div>
              </div>

              {/* Content Section */}
              <div style={styles.contentBox}>
                <div style={styles.contentHeader}>
                  <div>
                    <h2 style={styles.collegeName}>{college.name}</h2>
                    <p style={styles.location}>📍 {college.city}, {college.district}</p>
                  </div>
                  <div style={styles.ratingBlock}>
                    <div style={styles.ratingScore}>
                      ⭐ {college.rating.toFixed(1)}
                    </div>
                    <div style={styles.reviewCount}>
                      {college.reviews} Reviews
                    </div>
                  </div>
                </div>

                <p style={styles.description}>{college.description}</p>

                {/* Data Grid */}
                <div style={styles.dataGrid}>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>Estd. Year</span>
                    <span style={styles.dataValue}>{college.established}</span>
                  </div>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>First-Year Fees</span>
                    <span style={styles.dataValue}>{college.fees}</span>
                  </div>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>Approvals</span>
                    <span style={styles.dataValue}>{college.approval}</span>
                  </div>
                  <div style={styles.dataItem}>
                    <span style={styles.dataLabel}>Affiliation</span>
                    <span style={styles.dataValue}>{college.affiliation}</span>
                  </div>
                </div>

                {/* Tags Section */}
                <div style={styles.tagSection}>
                  <span style={styles.tagHeading}>Programs Offered:</span>
                  <div style={styles.tagWrapper}>
                    {college.courses.map(course => (
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
    backgroundColor: '#f3f4f6', // Slightly cooler, modern light gray
    minHeight: '100vh',
    fontFamily: 'DM Sans, sans-serif',
  },
  
  /* Header Styles */
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
    backgroundColor: '#fff1f2',
    color: '#e11d48',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    marginBottom: '20px',
  },
  mainTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '48px',
    color: '#0f172a',
    lineHeight: '1.1',
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
    backgroundColor: 'var(--accent)',
    margin: '0 auto 30px',
    borderRadius: '2px',
  },
  introText: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#475569',
  },

  /* Main List Styles */
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
  
  /* Card Styles */
  card: {
    display: 'flex',
    flexWrap: 'wrap', // Natural responsiveness
    backgroundColor: '#fff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9',
  },
  
  /* Left Side: Image */
  imageBox: {
    flex: '1 1 340px', // Shrinks and grows, base width 340px
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
    backgroundColor: 'var(--deep)',
    color: '#fff',
    padding: '8px 20px 8px 16px',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    display: 'flex',
    alignItems: 'baseline',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
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

  /* Right Side: Content */
  contentBox: {
    flex: '2 1 400px', // Takes remaining space, min 400px before wrapping
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
    fontSize: '26px',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '8px',
    lineHeight: '1.2',
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
  
  /* Details Grid */
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

  /* Tags */
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