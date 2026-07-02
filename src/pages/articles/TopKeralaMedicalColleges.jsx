import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO'; // <-- Added SEO import
import { seoConfigurations } from '../../data/seoData'; // <-- Added seoData import
import { colleges } from '../../data/colleges';

export default function TopKeralaMedicalColleges() {
  // Scroll to top when article loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetching directly from seoData.js
  const pageSEO = seoConfigurations.topKeralaMedicalColleges;

  // Filter and sort the data for the article.
  const top10Colleges = useMemo(() => {
    return colleges
      .filter(c => c.state === 'Kerala' && c.courses.includes('MBBS'))
      .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0) || Number(b.reviews || 0) - Number(a.reviews || 0))
      .slice(0, 10);
  }, []);

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
          {top10Colleges.length > 0 ? (
            top10Colleges.map((college, index) => (
              <article key={college.id} style={styles.card}>
                
                {/* Left Column: Image Area */}
                <div style={styles.imageBox}>
                  <div style={styles.rankRibbon}>
                    <span style={styles.rankHash}>#</span>
                    <span style={styles.rankNum}>{index + 1}</span>
                  </div>
                  <img 
                    src={college.image && college.image.length > 5 ? college.image : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'} 
                    alt={college.name} 
                    style={styles.image}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80';
                    }}
                  />
                  <div style={styles.typeBadge}>{college.type || 'Medical Institute'}</div>
                </div>

                {/* Right Column: Content Section */}
                <div style={styles.contentBox}>
                  <div style={styles.contentHeader}>
                    <div>
                      {/* --- Added Link Wrapper Here --- */}
                      <Link to={`/college/${college.id}`} style={styles.collegeLink}>
                        <h2 style={styles.collegeName}>{college.name}</h2>
                      </Link>
                      <p style={styles.location}>📍 {college.city}, Kerala</p>
                    </div>
                    <div style={styles.ratingBlock}>
                      <div style={styles.ratingScore}>
                        ⭐ {Number(college.rating || 0).toFixed(1)}
                      </div>
                      <div style={styles.reviewCount}>
                        {college.reviews || 0} Reviews
                      </div>
                    </div>
                  </div>

                  <p style={styles.description}>
                    {college.description || `Recognized for exceptional clinical exposure and outstanding faculty, ${college.name} provides an elite medical training environment in Kerala.`}
                  </p>

                  {/* Structured Data Matrix */}
                  <div style={styles.dataGrid}>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Established</span>
                      <span style={styles.dataValue}>{college.established || "N/A"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>First-Year Fees</span>
                      <span style={styles.dataValue}>{college.fees || "Contact Admissions"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Approvals</span>
                      <span style={styles.dataValue}>{college.approval || "NMC / Govt"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Affiliation</span>
                      <span style={styles.dataValue}>{college.affiliation || "KUHS"}</span>
                    </div>
                  </div>

                  {/* Program Scope Tags Section */}
                  {college.courses && college.courses.length > 0 && (
                    <div style={styles.tagSection}>
                      <span style={styles.tagHeading}>Programs Offered:</span>
                      <div style={styles.tagWrapper}>
                        {college.courses.slice(0, 6).map(course => (
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
              <h2>No medical colleges discovered matching the criteria in Kerala.</h2>
              <p>Verify your data model schema setup to make sure parameters line up correctly.</p>
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
    backgroundColor: '#e11d48',
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
  collegeLink: { 
    textDecoration: 'none', 
    color: 'inherit', 
    cursor: 'pointer' 
  },
  collegeName: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#1e3a8a',
    marginBottom: '8px',
    lineHeight: '1.2',
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
};