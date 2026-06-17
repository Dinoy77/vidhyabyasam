import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { colleges } from '../../data/colleges';
import { nursingPageConfig } from '../../data/nursingPageData';

export default function NursingCollegesLayout({ pageKey }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageKey]);

  const config = nursingPageConfig[pageKey];

  // 1. Dynamic Filter Logic with Hardcoded Overrides
  const filteredColleges = useMemo(() => {
    if (!config) return [];

    // --- CASE A: Hardcoded Sequence for Karnataka State ---
    if (pageKey === 'NursingCollegesKarnataka') {
      // Replace these IDs with your exact ordered list of college IDs
      const karnatakaCustomIds = [
        "med-378", "med-106", "med-105", "med-490", "med-374", 
        "med-379", "med-112", "med-491", "med-492", "med-115", 
        "med-387", "med-493", "med-494", "med-495", "med-496", 
        "med-497", "med-498", "med-381"]
      return karnatakaCustomIds
        .map(id => colleges.find(c => c.id === id))
        .filter(Boolean); // Safety filter out if any ID isn't found
    }

    // --- CASE B: Hardcoded Sequence for Bangalore City ---
    if (pageKey === 'NursingCollegesBangalore') {
      // Replace these IDs with your exact ordered list of Bangalore college IDs
      const bangaloreCustomIds = [601, 602, 603, 604, 605, 606, 607, 608, 609, 610]; 
      
      return bangaloreCustomIds
        .map(id => colleges.find(c => c.id === id))
        .filter(Boolean); // Safety filter out if any ID isn't found
    }

    // --- STANDARD CASE: Dynamic Filter for All Other Pages ---
    const southStates = ['Kerala', 'Karnataka', 'Tamil Nadu'];

    return colleges
      .filter(c => {
        // Must offer a nursing course
        const isNursing = c.courses?.some(course => course.toLowerCase().includes('nursing'));
        if (!isNursing) return false;

        // Apply config filters dynamically safely
        if (config.filters?.isSouthIndia && !southStates.includes(c.state)) return false;
        if (config.filters?.state && c.state !== config.filters.state) return false;
        if (config.filters?.city && c.city !== config.filters.city) return false;
        if (config.filters?.type && c.type !== config.filters.type) return false;

        return true;
      })
      .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0) || Number(b.reviews || 0) - Number(a.reviews || 0))
      .slice(0, 10); // Standard top 10 limit
  }, [pageKey, config]);

  // 2. Generate Schema for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredColleges.map((college, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CollegeOrUniversity",
        "name": college.name,
        "url": `https://www.vidyabhyasam.com/college/${college.id}`
      }
    }))
  };

  if (!config) return <div style={{ padding: '100px', textAlign: 'center' }}>Page Configuration Not Found.</div>;

  return (
    <div style={styles.pageContainer}>
      <SEO 
        title={config.seoTitle}
        description={config.introText}
        keywords="top nursing colleges, bsc nursing admission, msc nursing colleges"
        url={`/articles/${pageKey}`}
        schemaData={schema}
      />

      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>{config.eyebrow}</span>
          <h1 style={styles.mainTitle}>{config.title}</h1>
          <p style={styles.subtitle}>{config.subtitle}</p>
          <div style={styles.divider}></div>
          <p style={styles.introText}>{config.introText}</p>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.listContainer}>
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college, index) => (
              <article key={college.id} style={styles.card}>
                
                <div style={styles.imageBox}>
                  <div style={styles.rankRibbon}>
                    <span style={styles.rankHash}>#</span>
                    <span style={styles.rankNum}>{index + 1}</span>
                  </div>
                  <img 
                    src={college.image || 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb2?w=800&q=80'} 
                    alt={college.name} 
                    style={styles.image}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb2?w=800&q=80';
                    }}
                  />
                  <div style={styles.typeBadge}>{college.type || 'Nursing Institute'}</div>
                </div>

                <div style={styles.contentBox}>
                  <div style={styles.contentHeader}>
                    <div>
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

                  <p style={styles.description}>{college.description || `A premier institution offering top-tier clinical exposure and nursing degrees in ${college.city}.`}</p>

                  <div style={styles.dataGrid}>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Established</span>
                      <span style={styles.dataValue}>{college.established || "N/A"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Annual Fees</span>
                      <span style={styles.dataValue}>{college.fees || "Contact College"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Approval</span>
                      <span style={styles.dataValue}>{college.approval || "INC"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Affiliation</span>
                      <span style={styles.dataValue}>{college.affiliation || "State Health Uni"}</span>
                    </div>
                  </div>

                  {college.courses && college.courses.length > 0 && (
                    <div style={styles.tagSection}>
                      <span style={styles.tagHeading}>Top Courses:</span>
                      <div style={styles.tagWrapper}>
                        {college.courses.filter(c => c.toLowerCase().includes('nursing')).slice(0, 4).map(course => (
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
              <h2>No nursing colleges matched this region.</h2>
              <p>Ensure your `colleges.js` data file includes 'Nursing' inside the `courses` array for these locations.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: { backgroundColor: '#f3f4f6', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' },
  heroHeader: { backgroundColor: '#fff', padding: '100px 24px 60px', borderBottom: '1px solid #e5e7eb', textAlign: 'center' },
  heroContent: { maxWidth: '800px', margin: '0 auto' },
  eyebrow: { display: 'inline-block', padding: '6px 14px', backgroundColor: '#ecfdf5', color: '#059669', borderRadius: '20px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '20px' },
  mainTitle: { fontFamily: 'Playfair Display, serif', fontSize: '44px', color: '#0f172a', lineHeight: '1.15', marginBottom: '16px', fontWeight: '800' },
  subtitle: { fontSize: '18px', color: '#64748b', fontWeight: '500', marginBottom: '30px' },
  divider: { width: '60px', height: '4px', backgroundColor: '#059669', margin: '0 auto 30px', borderRadius: '2px' },
  introText: { fontSize: '16px', lineHeight: '1.8', color: '#475569' },
  mainContent: { maxWidth: '1000px', margin: '0 auto', padding: '60px 24px' },
  listContainer: { display: 'flex', flexDirection: 'column', gap: '40px' },
  card: { display: 'flex', flexWrap: 'wrap', backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' },
  imageBox: { flex: '1 1 340px', position: 'relative', minHeight: '320px' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  rankRibbon: { position: 'absolute', top: '20px', left: '0', backgroundColor: '#0f172a', color: '#fff', padding: '8px 20px 8px 16px', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', display: 'flex', alignItems: 'baseline', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 10 },
  rankHash: { fontSize: '16px', fontWeight: '600', marginRight: '2px', opacity: '0.8' },
  rankNum: { fontSize: '28px', fontWeight: '900', lineHeight: '1' },
  typeBadge: { position: 'absolute', bottom: '16px', left: '16px', backgroundColor: 'rgba(255,255,255,0.95)', color: '#0f172a', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', backdropFilter: 'blur(4px)' },
  contentBox: { flex: '2 1 400px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  contentHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' },
  collegeLink: { textDecoration: 'none', color: 'inherit', cursor: 'pointer' },
  collegeName: { fontSize: '24px', fontWeight: '800', color: '#1e3a8a', marginBottom: '8px', lineHeight: '1.25', transition: 'color 0.2s ease' },
  location: { fontSize: '14px', color: '#64748b', fontWeight: '500' },
  ratingBlock: { backgroundColor: '#f0fdf4', border: '1px solid #d1fae5', padding: '8px 16px', borderRadius: '12px', textAlign: 'center' },
  ratingScore: { fontSize: '18px', fontWeight: '800', color: '#059669' },
  reviewCount: { fontSize: '11px', color: '#047857', fontWeight: '600', marginTop: '2px', textTransform: 'uppercase' },
  description: { fontSize: '15px', lineHeight: '1.7', color: '#475569', marginBottom: '20px' },
  dataGrid: { display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', marginBottom: '24px' },
  dataItem: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '120px', flex: '1' },
  dataLabel: { fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' },
  dataValue: { fontSize: '14px', color: '#0f172a', fontWeight: '700' },
  tagSection: { display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' },
  tagHeading: { fontSize: '13px', fontWeight: '700', color: '#334155' },
  tagWrapper: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  coursePill: { padding: '6px 12px', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '20px', fontSize: '12px', fontWeight: '600', color: '#0f172a' },
};