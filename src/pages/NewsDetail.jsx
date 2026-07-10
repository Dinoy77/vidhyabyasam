import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EnquiryModal from '../components/EnquiryModal';
import { getNewsBySlug } from '../data/NewsData'; 
import { seoConfigurations } from '../data/seoData';

export default function NewsDetail() {
  const { slug } = useParams(); 
  const navigate = useNavigate();
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [copied, setCopied] = useState(false);

  const news = getNewsBySlug(slug);

// Enhanced SEO Integration Effect
  useEffect(() => {
    if (news) {
      const seoData = seoConfigurations.dynamicNews(news, slug);
      document.title = seoData.title;

      const setMetaTag = (name, content) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('name', name);
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
      };

      setMetaTag('description', seoData.description);
      setMetaTag('keywords', seoData.keywords);

      let schemaScript = document.querySelector('#seo-schema-news');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.id = 'seo-schema-news';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(seoData.schemaData);

      // ADD THIS CLEANUP FUNCTION
      // This runs when the component unmounts (user leaves the page)
      return () => {
        if (schemaScript) schemaScript.remove();
        
        // Reset to your default Home SEO config
        document.title = seoConfigurations.home.title;
        setMetaTag('description', seoConfigurations.home.description);
        setMetaTag('keywords', seoConfigurations.home.keywords);
      };
    }
  }, [news, slug]);

  if (!news) {
    return (
      <div style={s.notFound}>
        <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Update Not Found</h2>
        <p style={{ color: '#64748B', marginBottom: '24px' }}>The news article or alert you are looking for has been removed or archived.</p>
        <button onClick={() => navigate('/')} style={s.backBtnDark}>← Go Back to News Feed</button>
      </div>
    );
  }

  // Handle Share / Copy Link
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={s.page}>

      {/* --- HERO HEADER --- */}
      <div style={{ ...s.header, background: `linear-gradient(135deg, ${news.color}, #0D1117)` }}>
        <div style={s.headerInner}>
          <div style={s.topNavRow}>
            <button style={s.backBtn} onClick={() => navigate(-1)}>← Back to Feed</button>
            <div style={s.shareBox}>
              <button style={s.shareBtn} onClick={handleShare}>
                {copied ? '✓ Link Copied' : '🔗 Share Update'}
              </button>
            </div>
          </div>

          <div style={s.headerContent}>
            <span style={s.bigIcon}>{news.icon}</span>
            <div>
              <div style={s.badgeRow}>
                <span style={s.tagPill}>{news.tag}</span>
                <span style={s.statePill}>📍 {news.state}</span>
              </div>
              
              {/* Title is now a clickable link to the official portal */}
              {news.applyLink ? (
                <a 
                  href={news.applyLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={s.titleLink}
                  title={`Visit ${news.applyLink}`}
                >
                  <h1 style={s.title}>{news.title} ↗</h1>
                </a>
              ) : (
                <h1 style={s.title}>{news.title}</h1>
              )}
              
              <p style={s.date}>🗓 Last Updated / Target Date: <strong>{news.date}</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* --- QUICK STATS / CHIP STRIP --- */}
      <div style={s.chipsStrip}>
        <div style={s.chipsInner}>
          <div style={{ ...s.chip, background: news.bg, color: news.color }}>
            🏢 Authority Region: <strong>{news.state}</strong>
          </div>
          <div style={{ ...s.chip, background: '#F0FDF4', color: '#059669' }}>
            📚 Applicable Courses: <strong>{news.courses.length} Program(s)</strong>
          </div>
          <div style={{ ...s.chip, background: '#FFF7ED', color: '#E8470A' }}>
            ⚡ Status: <strong>{news.tag}</strong>
          </div>
          {news.applyLink && (
            <a 
              href={news.applyLink} 
              target="_blank" 
              rel="noreferrer" 
              style={{ ...s.chip, background: '#EFF6FF', color: '#2563EB', textDecoration: 'none' }}
            >
              🌐 Official Website ↗
            </a>
          )}
        </div>
      </div>

      {/* --- MAIN CONTENT BODY --- */}
      <div style={s.body}>

        {/* 2. ABOUT / DESCRIPTION SECTION */}
        <div style={s.section}>
          <div style={{ ...s.sectionHeader, borderLeft: `4px solid ${news.color}` }}>
            <h3 style={s.sectionTitle}>Detailed Breakdown</h3>
          </div>
          <div style={s.descBox}>
            <p style={s.descText}>{news.description}</p>
          </div>
        </div>

        {/* 3. ELIGIBILITY CRITERIA */}
        <div style={s.section}>
          <div style={{ ...s.sectionHeader, borderLeft: `4px solid ${news.color}` }}>
            <h3 style={s.sectionTitle}>Who is Eligible?</h3>
          </div>
          <div style={s.eligibilityBox}>
            <span style={{ fontSize: '24px' }}>🛡️</span>
            <div>
              <h5 style={s.eligibilityHeading}>Required Criteria & Qualification</h5>
              <p style={s.eligibilityText}>{news.eligibility}</p>
            </div>
          </div>
        </div>

        {/* 4. RELEVANT COURSES GRID */}
        <div style={s.section}>
          <div style={{ ...s.sectionHeader, borderLeft: `4px solid ${news.color}` }}>
            <h3 style={s.sectionTitle}>Applicable Programs ({news.courses.length})</h3>
          </div>
          <div style={s.coursesGrid}>
            {news.courses.map(c => (
              <div key={c} style={{ ...s.courseCard, borderTop: `4px solid ${news.color}` }}>
                <span style={{ fontSize: '26px' }}>🎓</span>
                <span style={s.courseName}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. NEXT STEPS / TIMELINE ADVICE */}
        <div style={s.timelineBox}>
          <h4 style={s.timelineTitle}>💡 Recommended Next Steps for Students</h4>
          <ul style={s.timelineList}>
            <li style={s.timelineItem}>
              <strong>Verify Documents:</strong> Ensure your application number, roll number, and security pins are accessible.
            </li>
            <li style={s.timelineItem}>
              <strong>Check Deadlines:</strong> Keep track of closing hours (typically 5:00 PM IST) for option freezing or fee payment.
            </li>
            <li style={s.timelineItem}>
              <strong>Direct Advice:</strong> Still confused about which college option to freeze or float? Get personalized admission guidance below.
            </li>
          </ul>
        </div>

        {/* --- BOTTOM CALL TO ACTION --- */}
        <div style={s.ctaContainer}>
          <div style={s.ctaText}>
            <h3 style={s.ctaHeading}>Need Personalized Counselling Support?</h3>
            <p style={s.ctaSub}>Our academic advisors can help you navigate seat allotments, fee structures, and option registrations.</p>
          </div>
          <button
            style={{ ...s.enquireBtn, background: news.color }}
            onClick={() => setShowEnquiry(true)}
          >
            🎓 Speak with an Admission Counselor
          </button>
          <p style={s.disclaimer}>🔒 100% Free & Confidential Academic Guidance</p>
        </div>

      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <EnquiryModal
          college={{
            id: news.id,
            name: news.title,
            city: news.state,
            region: news.tag,
            type: news.tag,
            rating: '—',
            fees: '—',
            courses: news.courses,
          }}
          onClose={() => setShowEnquiry(false)}
        />
      )}
    </div>
  );
}

// --- STYLES OBJECT ---
const s = {
  page: {
    minHeight: '100vh',
    background: '#F8FAFC',
    paddingTop: '64px',
    fontFamily: 'DM Sans, system-ui, -apple-system, sans-serif',
    color: '#1E293B'
  },
  notFound: {
    textAlign: 'center',
    padding: '120px 24px',
    maxWidth: '500px',
    margin: '0 auto'
  },
  backBtnDark: {
    background: '#0F172A',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600
  },
  header: {
    padding: '40px 0 50px',
    color: '#fff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  },
  headerInner: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '0 clamp(16px, 4vw, 32px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  topNavRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backBtn: {
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 600,
    transition: 'background 0.2s'
  },
  shareBox: {
    display: 'flex',
    gap: '10px'
  },
  shareBtn: {
    background: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#fff',
    padding: '6px 14px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 600
  },
  headerContent: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start'
  },
  bigIcon: {
    fontSize: '56px',
    flexShrink: 0,
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '12px',
    borderRadius: '16px',
    lineHeight: 1
  },
  badgeRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '10px'
  },
  tagPill: {
    background: 'rgba(255, 255, 255, 0.25)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: 800,
    padding: '4px 12px',
    borderRadius: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  },
  statePill: {
    background: 'rgba(0, 0, 0, 0.3)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: 700,
    padding: '4px 12px',
    borderRadius: '20px'
  },
  titleLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'inline-block',
    transition: 'opacity 0.2s',
  },
  title: {
    fontFamily: 'Playfair Display, Georgia, serif',
    fontSize: 'clamp(24px, 4vw, 36px)',
    color: '#fff',
    margin: '0 0 10px',
    lineHeight: 1.25,
    fontWeight: 700,
    cursor: 'pointer'
  },
  date: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.85)',
    margin: 0
  },
  chipsStrip: {
    background: '#fff',
    borderBottom: '1px solid #E2E8F0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  },
  chipsInner: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '16px clamp(16px, 4vw, 32px)',
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  chip: {
    padding: '6px 14px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 500,
    border: '1px solid rgba(0,0,0,0.05)'
  },
  body: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '32px clamp(16px, 4vw, 32px) 64px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  },
  portalBanner: {
    background: '#FFFFFF',
    border: '2px dashed',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
  },
  portalText: {
    flex: '1 1 300px'
  },
  portalTitle: {
    margin: '0 0 4px 0',
    fontSize: '18px',
    fontWeight: 700,
    color: '#0F172A'
  },
  portalSub: {
    margin: 0,
    fontSize: '14px',
    color: '#64748B',
    lineHeight: 1.5
  },
  portalBtn: {
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '10px',
    fontWeight: 700,
    fontSize: '14px',
    textDecoration: 'none',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    whiteSpace: 'nowrap'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px'
  },
  sectionHeader: {
    paddingLeft: '12px'
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: 800,
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: 0
  },
  descBox: {
    background: '#FFFFFF',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  },
  descText: {
    fontSize: '16px',
    color: '#334155',
    lineHeight: 1.8,
    margin: 0
  },
  eligibilityBox: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    background: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderLeft: '4px solid #10B981', 
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  },
  eligibilityHeading: {
    margin: '0 0 6px 0',
    fontSize: '15px',
    fontWeight: 700,
    color: '#0F172A'
  },
  eligibilityText: {
    margin: 0,
    fontSize: '15px',
    color: '#475569',
    lineHeight: 1.6
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '16px'
  },
  courseCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '24px 16px',
    background: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  },
  courseName: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#0F172A'
  },
  timelineBox: {
    background: '#FEF3C7', 
    border: '1px solid #FDE68A',
    borderRadius: '16px',
    padding: '24px'
  },
  timelineTitle: {
    margin: '0 0 12px 0',
    fontSize: '16px',
    fontWeight: 700,
    color: '#92400E'
  },
  timelineList: {
    margin: 0,
    paddingLeft: '20px',
    color: '#78350F',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontSize: '14px',
    lineHeight: 1.6
  },
  timelineItem: {
    marginBottom: '4px'
  },
  ctaContainer: {
    background: '#0F172A', 
    color: '#fff',
    borderRadius: '20px',
    padding: '36px 24px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.15)'
  },
  ctaText: {
    maxWidth: '500px'
  },
  ctaHeading: {
    margin: '0 0 8px 0',
    fontSize: '22px',
    fontWeight: 700,
    fontFamily: 'Playfair Display, Georgia, serif'
  },
  ctaSub: {
    margin: 0,
    fontSize: '14px',
    color: '#94A3B8',
    lineHeight: 1.6
  },
  enquireBtn: {
    padding: '16px 32px',
    borderRadius: '12px',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    width: '100%',
    maxWidth: '380px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'transform 0.1s'
  },
  disclaimer: {
    color: '#64748B',
    fontSize: '13px',
    margin: 0
  }
};