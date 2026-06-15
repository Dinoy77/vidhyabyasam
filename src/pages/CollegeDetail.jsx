import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// 1. Import both datasets
import { colleges as medicalColleges } from '../data/colleges';
import { engineering_colleges as engineeringColleges } from '../data/engineering_colleges';

import EnquiryModal from '../components/EnquiryModal';
import AuthModal from '../components/AuthModal';

const courseCategories = {
  Medical: ['MBBS', 'BDS', 'BAMS', 'MD', 'MS', 'DM', 'M.Ch', 'PG Diploma'],
  Pharmacy: ['B.Pharm', 'D.Pharm', 'M.Pharm', 'Pharm.D','Ph.D'],
  Nursing: ['B.Sc Nursing', 'M.Sc Nursing', 'GNM', 'ANM', 'Post Basic B.Sc Nursing', 'Ph.D Nursing'],
  Allied: ['BPT', 'DPT', 'MLT', 'BHA', 'B.Sc MLT', 'B.Sc RIT', 'B.Sc CT', 'B.Sc OTAT',
    'B.Sc RT', 'B.Sc DT', 'B.Sc CCT', 'B.Sc CVT', 'B.Sc CPT', 'B.Sc NST',
    'B.Sc Optometry', 'B.Optom', 'Paramedical', 'Allied Health Sciences'],
  Engineering: ['B.Tech', 'M.Tech', 'B.E', 'M.E', 'BCA', 'MCA', 'B.Arch', 'M.Arch', 'Diploma in Engineering'],
};

const categoryColors = {
  Medical: { bg: '#FAECE7', color: '#712B13' },
  Pharmacy: { bg: '#EBF5FF', color: '#0C447C' },
  Nursing: { bg: '#E1F5EE', color: '#085041' },
  Allied: { bg: '#F5F0FF', color: '#3C3489' },
  Engineering: { bg: '#FFFBEB', color: '#633806' },
  Other: { bg: '#F3F4F6', color: '#374151' },
};

function groupCourses(courses = []) {
  const grouped = {};
  courses.forEach(course => {
    let placed = false;
    for (const [cat, list] of Object.entries(courseCategories)) {
      if (list.some(c =>
        course.toLowerCase().includes(c.toLowerCase()) ||
        c.toLowerCase().includes(course.toLowerCase())
      )) {
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(course);
        placed = true;
        break;
      }
    }
    if (!placed) {
      if (!grouped['Other']) grouped['Other'] = [];
      grouped['Other'].push(course);
    }
  });
  return grouped;
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);
  return width;
}

export default function CollegeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const width = useWindowWidth();
  
  // Responsive breakpoints
  const isMobile = width <= 768;
  const isSmallMobile = width <= 480;

  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const allColleges = [...medicalColleges, ...engineeringColleges];
  const college = allColleges.find(c => String(c.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!college) {
    return (
      <div style={s.notFound}>
        <div style={{ fontSize: '56px' }}>🏫</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px' }}>College not found</h2>
        <button style={s.backBtn} onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    );
  }

  // Safely grab region (fallback to state if region isn't defined)
  const displayRegion = college.region || college.state || 'Unknown Region';
  const regionColor = displayRegion === 'Kerala' ? '#1B6CA8' : displayRegion === 'Karnataka' ? '#7C3AED' : '#DC2626';
  const regionBg = displayRegion === 'Kerala' ? '#EBF5FF' : displayRegion === 'Karnataka' ? '#F5F0FF' : '#FFF0F0';

  const handleEnquiry = () => {
    if (user) setShowEnquiry(true);
    else setShowAuth('login');
  };

  const SidebarCards = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={s.sideCard}>
        <div style={{ ...s.sideCardHeader, background: regionColor }}>
          <h3 style={s.sideCardTitle}>📨 Send Enquiry</h3>
          <p style={s.sideCardSub}>Get details directly from the college</p>
        </div>
        <div style={s.sideCardBody}>
          <p style={s.sideCardText}>Interested in <strong>{college.name}</strong>? The admissions team will reach out within 24–48 hours.</p>
          <button style={{ ...s.enquireBtn, width: '100%', justifyContent: 'center', height: '44px' }} onClick={handleEnquiry}>
            📨 {user ? 'Enquire Now' : '🔒 Login to Enquire'}
          </button>
          {!user && (
            <p style={s.loginHint}>Please <button style={s.loginLink} onClick={() => setShowAuth('login')}>login</button> to send an enquiry</p>
          )}
        </div>
      </div>

      {college.tags && college.tags.length > 0 && (
        <div style={s.sideCard}>
          <div style={s.sideCardPad}>
            <h4 style={s.sideSubTitle}>🏷 Accreditations</h4>
            <div style={s.tagsWrap}>{college.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}</div>
          </div>
        </div>
      )}

      <div style={s.sideCard}>
        <div style={s.sideCardPad}>
          <h4 style={s.sideSubTitle}>📍 Location</h4>
          <div style={s.locationRows}>
            {[
              { label: 'City', value: college.city || 'N/A' },
              { label: 'District', value: college.district || 'N/A' },
              { label: 'State', value: college.state || displayRegion }
            ].map(l => (
              <div key={l.label} style={s.locationRow}>
                <span style={s.locationLabel}>{l.label}</span>
                <span style={s.locationValue}>{l.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div style={s.page}>
        {/* HERO SECTION */}
        <div style={{ ...s.heroBanner, height: isMobile ? 'auto' : '360px', minHeight: isMobile ? '260px' : 'auto' }}>
          <img
            src={college.image || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80'}
            alt={college.name}
            style={s.heroImg}
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80';
            }}
          />
          <div style={s.heroOverlay} />
          <div style={{ ...s.heroContent, padding: isMobile ? '20px 16px' : '32px 40px' }}>
            <button style={{...s.backBtnHero, marginBottom: isMobile ? '12px' : '0'}} onClick={() => navigate('/')}>← Back</button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ ...s.regionPill, background: regionBg, color: regionColor }}>📍 {college.city || 'Location'}, {displayRegion}</span>
                <span style={s.typePill}>{college.type || 'Institution'}</span>
              </div>
              <h1 style={{ ...s.heroTitle, fontSize: isMobile ? '24px' : '36px' }}>{college.name}</h1>
              <div style={s.heroMeta}>
                <span style={s.metaItem}>⭐ {college.rating || 'N/A'}</span>
                <span style={s.metaDot}>•</span>
                <span style={s.metaItem}>👥 {college.reviews ? college.reviews.toLocaleString() : '0'}</span>
                {college.established && (
                  <><span style={s.metaDot}>•</span><span style={s.metaItem}>🏛 Est. {college.established}</span></>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ACTION BAR */}
        <div style={s.actionBar}>
          <div style={{ ...s.actionBarInner, padding: isMobile ? '12px 16px' : '12px 40px' }}>
            <div style={s.feesInfo}>
              <span style={s.feesLabel}>Annual Fees</span>
              <strong style={{ ...s.feesVal, fontSize: isMobile ? '18px' : '22px' }}>{college.fees || 'Contact for details'}</strong>
            </div>
            <button 
              style={{ 
                ...s.enquireBtn, 
                padding: isMobile ? '10px 16px' : '12px 28px', 
                fontSize: isMobile ? '13px' : '14px',
                width: isSmallMobile ? '100%' : 'auto',
                justifyContent: 'center'
              }} 
              onClick={handleEnquiry}
            >
              📨 {user ? 'Enquire Now' : '🔒 Login to Enquire'}
            </button>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div style={{ 
          ...s.main, 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 320px', 
          padding: isMobile ? '20px 16px' : '40px', 
          gap: isMobile ? '24px' : '32px' 
        }}>
          
          {/* LEFT COLUMN - Tabs & Content */}
          <div style={s.leftCol}>
            
            {/* TABS */}
            <div style={s.tabsWrapper}>
              <div style={s.tabs}>
                {['overview', 'courses', 'details'].map(tab => (
                  <button 
                    key={tab} 
                    style={{ 
                      ...s.tab, 
                      fontSize: isMobile ? '14px' : '15px', 
                      padding: isMobile ? '12px 16px' : '12px 24px', 
                      borderBottom: activeTab === tab ? `3px solid ${regionColor}` : '3px solid transparent', 
                      color: activeTab === tab ? regionColor : 'var(--muted)', 
                      fontWeight: activeTab === tab ? 700 : 500 
                    }} 
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB: OVERVIEW */}
            {activeTab === 'overview' && (
              <div style={s.tabContent} className="animate-fadeIn">
                <h2 style={{ ...s.sectionTitle, fontSize: isMobile ? '22px' : '26px' }}>About {college.name}</h2>
                <p style={{ ...s.description, fontSize: isMobile ? '14px' : '15px' }}>{college.description || 'No description available for this institution.'}</p>
                
                <h3 style={{ ...s.subTitle, fontSize: isMobile ? '18px' : '20px', marginTop: '12px' }}>Quick Facts</h3>
                <div style={{ ...s.factsGrid, gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? '1fr 1fr' : 'repeat(3, 1fr)' }}>
                  {[
                    { icon: '📅', label: 'Established', value: college.established || 'N/A' },
                    { icon: '🏛', label: 'Type', value: college.type || 'N/A' },
                    { icon: '📍', label: 'City', value: college.city || 'N/A' },
                    { icon: '🗺', label: 'District', value: college.district || 'N/A' },
                    { icon: '🔗', label: 'Affiliation', value: college.affiliation || 'N/A' },
                    { icon: '✅', label: 'Approval', value: college.approval || 'N/A' }
                  ].map(f => (
                    <div key={f.label} style={{ ...s.factCard, padding: '14px', gap: '12px' }}>
                      <span style={{ fontSize: '22px' }}>{f.icon}</span>
                      <div style={{ minWidth: 0 }}>
                        <p style={s.factLabel}>{f.label}</p>
                        <p style={{ ...s.factValue, fontSize: '13px' }}>{f.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: COURSES */}
            {activeTab === 'courses' && (
              <div style={s.tabContent} className="animate-fadeIn">
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: '8px' }}>
                  <h2 style={{ ...s.sectionTitle, fontSize: isMobile ? '22px' : '26px', marginBottom: 0 }}>Courses Offered</h2>
                  <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 600 }}>
                    {(college.courses || []).length} course{(college.courses || []).length !== 1 ? 's' : ''} available
                  </span>
                </div>
                
                {(() => {
                  const grouped = groupCourses(college.courses || []);
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
                      {Object.entries(grouped).map(([cat, list]) => {
                        const clr = categoryColors[cat] || categoryColors.Other;
                        return (
                          <div key={cat} style={{ background: '#fff', borderRadius: '14px', border: '1px solid var(--border)', padding: isMobile ? '16px' : '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                              <div style={{ width: '4px', height: '18px', borderRadius: '2px', background: clr.color }} />
                              <p style={{ fontSize: '13px', fontWeight: 700, color: clr.color, textTransform: 'uppercase', letterSpacing: '0.7px', margin: 0 }}>{cat}</p>
                              <span style={{ fontSize: '12px', color: 'var(--muted)', marginLeft: 'auto' }}>
                                {list.length} program{list.length !== 1 ? 's' : ''}
                              </span>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                              {list.map(course => (
                                <div key={course} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: clr.bg, borderRadius: '8px', padding: '10px 14px', width: isSmallMobile ? '100%' : 'auto' }}>
                                  <span style={{ fontSize: '13px', fontWeight: 600, color: clr.color, flex: 1 }}>{course}</span>
                                  <button
                                    style={{ fontSize: '12px', fontWeight: 700, background: clr.color, color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer' }}
                                    onClick={handleEnquiry}
                                  >
                                    Enquire
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
            )}

            {/* TAB: DETAILS */}
            {activeTab === 'details' && (
              <div style={s.tabContent} className="animate-fadeIn">
                <h2 style={{ ...s.sectionTitle, fontSize: isMobile ? '22px' : '26px' }}>College Details</h2>
                <div style={s.detailsList}>
                  {[
                    { label: 'Full Name', value: college.name },
                    { label: 'Region', value: displayRegion },
                    { label: 'State', value: college.state || 'N/A' },
                    { label: 'City', value: college.city || 'N/A' },
                    { label: 'District', value: college.district || 'N/A' },
                    { label: 'College Type', value: college.type || 'N/A' },
                    { label: 'Established', value: college.established || 'N/A' },
                    { label: 'Affiliation', value: college.affiliation || 'N/A' },
                    { label: 'Approval', value: college.approval || 'N/A' },
                    { label: 'Annual Fees', value: college.fees || 'N/A' },
                    { label: 'Rating', value: `⭐ ${college.rating || 'N/A'} / 5` },
                    { label: 'Reviews', value: `${college.reviews ? college.reviews.toLocaleString() : '0'} reviews` }
                  ].map((d, i) => (
                    <div key={d.label} style={{ 
                      ...s.detailRow, 
                      background: i % 2 === 0 ? '#fff' : '#FAFAFA', 
                      padding: isMobile ? '12px 16px' : '16px 20px', 
                      flexDirection: isSmallMobile ? 'column' : 'row', 
                      gap: isSmallMobile ? '4px' : '16px' 
                    }}>
                      <span style={{ ...s.detailLabel, fontSize: '13px' }}>{d.label}</span>
                      <span style={{ 
                        ...s.detailValue, 
                        fontSize: '14px', 
                        textAlign: isSmallMobile ? 'left' : 'right', 
                        fontWeight: isSmallMobile ? 600 : 500 
                      }}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sidebar rendered below tabs on Mobile */}
            {isMobile && (
              <div style={{ marginTop: '32px' }}>
                <SidebarCards />
              </div>
            )}

          </div>

          {/* RIGHT COLUMN - Sidebar on Desktop */}
          {!isMobile && (
            <div style={s.rightCol}>
              <div style={{ position: 'sticky', top: '150px' }}>
                <SidebarCards />
              </div>
            </div>
          )}
        </div>
      </div>

      {showEnquiry && <EnquiryModal college={college} onClose={() => setShowEnquiry(false)} />}
      {showAuth && <AuthModal mode={showAuth} onClose={() => setShowAuth(false)} onSwitch={m => setShowAuth(m)} />}
    </>
  );
}

const s = {
  page: {
    // paddingTop: '64px',
    minHeight: '100vh',
    background: 'var(--cream)',
    paddingBottom: '60px',
    overflowX: 'hidden'
  },
  notFound: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: '16px', textAlign: 'center', padding: '24px' },
  backBtn: { padding: '12px 28px', borderRadius: '10px', background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '14px' },
  
  heroBanner: { position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' },
  heroImg: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' },
  heroOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)' },
  heroContent: { position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '1100px', margin: '0 auto' },
  backBtnHero: { alignSelf: 'flex-start', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' },
  regionPill: { padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 },
  typePill: { padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' },
  heroTitle: { fontFamily: 'Playfair Display, serif', color: '#fff', fontWeight: 900, lineHeight: 1.2 },
  heroMeta: { display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' },
  metaItem: { fontSize: '13px', color: 'rgba(255,255,255,0.9)', fontWeight: 500 },
  metaDot: { color: 'rgba(255,255,255,0.4)', fontSize: '10px' },

  actionBar: {
    background: '#fff',
    borderBottom: '1px solid var(--border)',
    position: 'sticky',
    top: '64px',
    zIndex: 90,
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
  },
  actionBarInner: { maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
  feesInfo: { display: 'flex', flexDirection: 'column', gap: '2px' },
  feesLabel: { fontSize: '11px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' },
  feesVal: { fontWeight: 800, color: 'var(--deep)' },
  enquireBtn: { display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '10px', fontWeight: 700, background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background 0.2s' },
  
  main: { maxWidth: '1100px', margin: '0 auto', display: 'grid', alignItems: 'start' },
  leftCol: { display: 'flex', flexDirection: 'column', minWidth: 0 },
  rightCol: { display: 'flex', flexDirection: 'column', gap: '16px' },
  
  tabsWrapper: { borderBottom: '1px solid var(--border)', marginBottom: '24px' },
  tabs: { display: 'flex', overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' },
  tab: { background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap' },
  tabContent: { display: 'flex', flexDirection: 'column', gap: '16px' },
  
  sectionTitle: { fontFamily: 'Playfair Display, serif', marginBottom: '4px', color: 'var(--deep)' },
  subTitle: { fontFamily: 'Playfair Display, serif', marginTop: '4px', color: 'var(--deep)' },
  description: { lineHeight: 1.8, color: '#4B5563' },
  
  factsGrid: { display: 'grid', gap: '12px' },
  factCard: { display: 'flex', alignItems: 'flex-start', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px' },
  factLabel: { fontSize: '11px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' },
  factValue: { fontWeight: 700, color: 'var(--deep)', lineHeight: 1.3, wordBreak: 'break-word' },
  
  detailsList: { background: '#fff', borderRadius: '14px', border: '1px solid var(--border)', overflow: 'hidden' },
  detailRow: { display: 'flex', justifyContent: 'space-between' },
  detailLabel: { color: 'var(--muted)', fontWeight: 600, flexShrink: 0 },
  detailValue: { lineHeight: 1.4, wordBreak: 'break-word', color: 'var(--deep)' },
  
  sideCard: { background: '#fff', borderRadius: '14px', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' },
  sideCardHeader: { padding: '16px 20px' },
  sideCardTitle: { fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' },
  sideCardSub: { fontSize: '13px', color: 'rgba(255,255,255,0.8)' },
  sideCardBody: { padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' },
  sideCardPad: { padding: '20px' },
  sideCardText: { fontSize: '14px', lineHeight: 1.6, color: '#4B5563' },
  loginHint: { fontSize: '12px', color: 'var(--muted)', textAlign: 'center', marginTop: '4px' },
  loginLink: { background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 700, cursor: 'pointer', fontSize: '12px', padding: 0 },
  sideSubTitle: { fontSize: '15px', fontWeight: 700, marginBottom: '14px', color: 'var(--deep)' },
  
  tagsWrap: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  tag: { fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: '#ECFDF5', color: '#059669', fontWeight: 600, border: '1px solid #A7F3D0' },
  
  locationRows: { display: 'flex', flexDirection: 'column', gap: '12px' },
  locationRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--border)', paddingBottom: '8px' },
  locationLabel: { fontSize: '13px', color: 'var(--muted)', fontWeight: 500 },
  locationValue: { fontSize: '13px', fontWeight: 700, color: 'var(--deep)' },
};