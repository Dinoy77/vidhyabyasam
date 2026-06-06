import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <-- Added Link import
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { colleges } from '../../data/colleges';

export default function TopPrivateMedicalColleges() {
  // Scroll to top when article loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter and sort the data for private medical colleges in South Indian states.
  const top10Colleges = useMemo(() => {
    const southIndianStates = ['Kerala', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Telangana'];
    return colleges
      .filter(c => 
        southIndianStates.includes(c.state) && 
        c.type?.toLowerCase().includes('private') && 
        c.courses.includes('MBBS')
      )
      .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
      .slice(0, 10);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      {/* Hero Header Section */}
      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Premium Rankings</span>
          <h1 style={styles.mainTitle}>
            The Top 10 Private Medical Colleges in South India
          </h1>
          <p style={styles.subtitle}>
            Based on clinical infrastructure, student reviews, and global academic reputations.
          </p>
          <div style={styles.divider}></div>
          <p style={styles.introText}>
            South India boasts some of the country's finest private healthcare and medical research institutions. Offering unparalleled laboratory technology, heavy patient footfall for clinical training, and state-of-the-art campus setups, these institutions represent elite choices for pursuing an MBBS degree. Find the perfect private college to jumpstart your career in medicine.
          </p>
        </div>
      </header>

      {/* List Section */}
      <main style={styles.mainContent}>
        <div style={styles.listContainer}>
          {top10Colleges.length > 0 ? (
            top10Colleges.map((college, index) => (
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
                      {/* --- Added the Link wrapper here --- */}
                      <Link to={`/college/${college.id}`} style={styles.collegeLink}>
                        <h2 style={styles.collegeName}>{college.name}</h2>
                      </Link>
                      <p style={styles.location}>📍 {college.city}, {college.state}</p>
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
            ))
          ) : (
            <div style={styles.noResults}>
              <p>No matching private medical colleges found in South India.</p>
            </div>
          )}
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
    backgroundColor: '#eff6ff',
    color: '#2563eb',
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
    lineHeight: '1.2',
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
    backgroundColor: '#2563eb', 
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
    flexWrap: 'wrap', 
    backgroundColor: '#fff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9',
  },
  
  /* Left Side: Image */
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
    backgroundColor: '#1e3a8a', 
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
  
  /* --- Added Link Styles --- */
  collegeLink: {
    textDecoration: 'none', // Removes default underline
    color: 'inherit',
    cursor: 'pointer',
  },
  collegeName: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#1e3a8a', // Deep blue to indicate it's clickable
    marginBottom: '8px',
    lineHeight: '1.25',
    transition: 'color 0.2s ease',
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
  noResults: {
    textAlign: 'center',
    padding: '40px',
    color: '#64748b',
    backgroundColor: '#fff',
    borderRadius: '20px',
    border: '1px solid #f1f5f9',
  }
};