import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

// IMPORT BOTH DATA SOURCES
import { colleges } from '../../data/colleges';
import { engineering_colleges } from '../../data/engineering_colleges'; 

import { collegePageConfig, nearbyPlacesMap, getDomainKeywords } from '../../data/collegePageData'; 

export default function UniversalCollegesLayout({ pageKey }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageKey]);

  const config = collegePageConfig[pageKey];

  const filteredColleges = useMemo(() => {
    if (!config) return [];

    const allColleges = [...(colleges || []), ...(engineering_colleges || [])];

    // --- CASE A: Hardcoded Override (Karnataka State Nursing) ---
    if (pageKey === 'NursingCollegesKarnataka') {
      const karnatakaCustomIds = [
        "med-378", "med-106", "med-105", "med-490", "med-374", 
        "med-379", "med-112", "med-491", "med-492", "med-115", 
        "med-387", "med-493", "med-494", "med-495", "med-496", 
        "med-497", "med-498", "med-381"
      ];
      return karnatakaCustomIds
        .map(id => allColleges.find(c => c.id === id))
        .filter(Boolean);
    }

    // --- CASE B: Hardcoded Override (Bangalore City Nursing) ---
    if (pageKey === 'NursingCollegesBangalore') {
      const bangaloreCustomIds = [
        "med-378", "med-106", "med-105", "med-377","med-117", "med-492","med-493", "med-494", "med-495", "med-496", 
        "med-497", "med-498", "med-499", "med-115", "med-123"
      ];
      return bangaloreCustomIds
        .map(id => allColleges.find(c => c.id === id))
        .filter(Boolean);
    }

    // --- STANDARD COMPREHENSIVE FILTER ---
    const southStates = ['Kerala', 'Karnataka', 'Tamil Nadu'];
    const domainKeywords = getDomainKeywords(config.filters?.domain);
    const targetCity = config.filters?.city;
    const allowedPlaces = targetCity ? (nearbyPlacesMap[targetCity] || [targetCity]) : [];

    return allColleges
      .filter(c => {
        // 1. Dynamic Domain & Sibling Course Verification
        const offersDomainCourse = c.courses?.some(course => {
          if (typeof course !== 'string') return false;
          const courseLower = course.toLowerCase();
          return domainKeywords.some(keyword => courseLower.includes(keyword.toLowerCase()));
        });
        
        if (!offersDomainCourse) return false;

        // 2. Global Level Constraints
        if (config.filters?.isSouthIndia && !southStates.includes(c.state)) return false;
        if (config.filters?.state && c.state !== config.filters.state) return false;
        if (config.filters?.type && c.type !== config.filters.type) return false;

        // 3. Proximity Geofilter Engine
        if (targetCity) {
          const collegeCityLower = c.city?.toLowerCase();
          const matchesNearby = allowedPlaces.some(place => place.toLowerCase() === collegeCityLower);
          if (!matchesNearby) return false;
        }

        return true;
      })
      .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0) || Number(b.reviews || 0) - Number(a.reviews || 0))
      .slice(0, 12); 
  }, [pageKey, config]);

  if (!config) return <div style={{ padding: '100px', textAlign: 'center' }}>Page Configuration Not Found.</div>;

  const domainStr = config.filters?.domain || 'College';
  const domainKeywords = getDomainKeywords(config.filters?.domain);

  return (
    <div style={styles.pageContainer}>
      <SEO 
        title={config.seoTitle}
        description={config.introText}
        keywords={`top ${domainStr.toLowerCase()} colleges, allied courses, admissions 2026, best institutes in ${config.filters?.city || config.filters?.state || 'South India'}`}
        url={`/articles/${pageKey}`}
        schemaData={{
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
        }}
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
                  <div style={styles.typeBadge}>{college.type || `${domainStr} / Allied Campus`}</div>
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

                  <p style={styles.description}>
                    {college.description || `A premier institution offering top-tier training in ${domainStr.toLowerCase()} and relevant professional streams within ${college.city}.`}
                  </p>

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
                      <span style={styles.dataValue}>{college.approval || "UGC / AICTE / INC / NMC"}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Affiliation</span>
                      <span style={styles.dataValue}>{college.affiliation || "State University System"}</span>
                    </div>
                  </div>

                  {college.courses && college.courses.length > 0 && (
                    <div style={styles.tagSection}>
                      <span style={styles.tagHeading}>Top Programs:</span>
                      <div style={styles.tagWrapper}>
                        {college.courses
                          .filter(course => {
                            if (typeof course !== 'string') return false;
                            const courseLower = course.toLowerCase();
                            return domainKeywords.some(kw => courseLower.includes(kw.toLowerCase()));
                          })
                          .slice(0, 4)
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
              <h2>No relevant institutions matched this sector region.</h2>
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