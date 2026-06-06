import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { engineering_colleges } from '../../data/engineering_colleges';

export default function BestCSEngineeringColleges() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter for the top Computer Science colleges in South India
  const topCSColleges = useMemo(() => {
    const southIndianStates = ['Tamil Nadu', 'Karnataka', 'Kerala'];
    
    return engineering_colleges
      .filter(c => {
        // 1. Must be in South India
        const isSouthIndia = southIndianStates.includes(c.state);
        
        // 2. Must offer Computer Science / IT related courses
        const hasCS = (c.courses || []).some(course => {
        const normalizedCourse = course.toLowerCase();
        return (
            normalizedCourse.includes('computer') || 
            normalizedCourse.includes('cse') || 
            normalizedCourse.includes('software') || 
            normalizedCourse.includes('information tech') ||
            normalizedCourse.includes('artificial intelligence') ||
            normalizedCourse === 'b.tech' ||
            normalizedCourse === 'm.tech' ||
            normalizedCourse === 'b.arch' ||
            normalizedCourse === 'm.arch' ||
            normalizedCourse === 'mca' ||
            normalizedCourse === 'mba' ||
            normalizedCourse === 'ph.d'
        );
        });

        return isSouthIndia && hasCS;
      })
      // 3. Sort by highest rating first, then by most reviews
      .sort((a, b) => Number(b.rating) - Number(a.rating) || Number(b.reviews) - Number(a.reviews))
      // 4. Take the top 10
      .slice(0, 10);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>CSE Elite Rankings</span>
          <h1 style={styles.mainTitle}>Best Engineering Colleges for Computer Science in South India</h1>
          <p style={styles.subtitle}>Your guide to the most prestigious institutions for CSE, AI, and IT.</p>
          <div style={styles.divider}></div>
          <p style={styles.introText}>
            Computer Science Engineering (CSE) remains the most sought-after branch in India, offering direct pathways to FAANG companies and global tech startups. South India, being the undisputed IT hub of the country, hosts the finest institutions for this domain. Here are the top 10 colleges for CSE based on academic rigor, coding culture, and dream-tier placement packages.
          </p>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.listContainer}>
          {topCSColleges.length > 0 ? (
            topCSColleges.map((college, index) => (
              <article key={college.id} style={styles.card}>
                
                {/* Left Column: Image Area */}
                <div style={styles.imageBox}>
                  <div style={styles.rankRibbon}>
                    <span style={styles.rankHash}>#</span>
                    <span style={styles.rankNum}>{index + 1}</span>
                  </div>
                  <img 
                    src={college.image || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'} 
                    alt={college.name} 
                    style={styles.image}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'; // Tech/Coding fallback image
                    }}
                  />
                  <div style={styles.typeBadge}>{college.type || "Engineering College"}</div>
                </div>

                {/* Right Column: Detailed Context */}
                <div style={styles.contentBox}>
                  <div style={styles.contentHeader}>
                    <div>
                      {/* --- Clickable Link to College Detail Page --- */}
                      <Link to={`/college/${college.id}`} style={styles.collegeLink}>
                        <h2 style={styles.collegeName}>{college.name}</h2>
                      </Link>
                      <p style={styles.location}>📍 {college.city}, {college.state}</p>
                    </div>
                    <div style={styles.ratingBlock}>
                      <div style={styles.ratingScore}>⭐ {Number(college.rating || 0).toFixed(1)}</div>
                      <div style={styles.reviewCount}>{college.reviews || 0} Reviews</div>
                    </div>
                  </div>

                  <p style={styles.description}>{college.description}</p>

                  {/* Structured Matrix */}
                  <div style={styles.dataGrid}>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Established</span>
                      <span style={styles.dataValue}>{college.established || "N/A"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Annual Fees</span>
                      <span style={styles.dataValue}>{college.fees || "Contact for details"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Approval</span>
                      <span style={styles.dataValue}>{college.approval || "AICTE"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Affiliation</span>
                      <span style={styles.dataValue}>{college.affiliation || "N/A"}</span>
                    </div>
                  </div>

                  {/* Program Scope Tags */}
                  {college.courses && college.courses.length > 0 && (
                    <div style={styles.tagSection}>
                      <span style={styles.tagHeading}>Tech Branches:</span>
                      <div style={styles.tagWrapper}>
                        {/* We prioritize showing courses that contain computer/AI terms first */}
                        {college.courses
                          .sort((a, b) => {
                            const aIsTech = a.toLowerCase().includes('computer') || a.toLowerCase().includes('ai');
                            const bIsTech = b.toLowerCase().includes('computer') || b.toLowerCase().includes('ai');
                            return (bIsTech === true) - (aIsTech === true);
                          })
                          .slice(0, 5)
                          .map(course => (
                          <span key={course} style={styles.coursePill}>{course}</span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </article>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
              <p>No Computer Science engineering colleges found matching the criteria.</p>
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
    backgroundColor: '#f8fafc', 
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
    backgroundColor: '#e0e7ff', // Tech Indigo background
    color: '#4f46e5', // Deep Indigo text
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
    backgroundColor: '#4f46e5', // Tech Indigo
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
    backgroundColor: '#312e81', // Very dark indigo
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
  collegeLink: {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  },
  collegeName: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#1e3a8a', // Tech Indigo to match theme
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