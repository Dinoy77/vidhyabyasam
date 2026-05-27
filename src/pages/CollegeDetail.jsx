import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { colleges } from '../data/colleges';
import EnquiryModal from '../components/EnquiryModal';
import AuthModal from '../components/AuthModal';

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
  const isMobile = width <= 768;
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const college = colleges.find(c => c.id === parseInt(id));

  if (!college) {
    return (
      <div style={s.notFound}>
        <div style={{ fontSize: '56px' }}>🏫</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px' }}>College not found</h2>
        <button style={s.backBtn} onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    );
  }

  const regionColor = college.region === 'Kerala' ? '#1B6CA8' : college.region === 'Bangalore' ? '#7C3AED' : '#DC2626';
  const regionBg = college.region === 'Kerala' ? '#EBF5FF' : college.region === 'Bangalore' ? '#F5F0FF' : '#FFF0F0';

  const handleEnquiry = () => {
    if (user) setShowEnquiry(true);
    else setShowAuth('login');
  };

  const SidebarCards = () => (
    <>
      <div style={s.sideCard}>
        <div style={{ ...s.sideCardHeader, background: regionColor }}>
          <h3 style={s.sideCardTitle}>📨 Send Enquiry</h3>
          <p style={s.sideCardSub}>Get details directly from the college</p>
        </div>
        <div style={s.sideCardBody}>
          <p style={s.sideCardText}>Interested in <strong>{college.name}</strong>? The admissions team will reach out within 24–48 hours.</p>
          <button style={{ ...s.enquireBtn, width: '100%', justifyContent: 'center' }} onClick={handleEnquiry}>
            📨 {user ? 'Enquire Now' : '🔒 Login to Enquire'}
          </button>
          {!user && (
            <p style={s.loginHint}>Please <button style={s.loginLink} onClick={() => setShowAuth('login')}>login</button> to send an enquiry</p>
          )}
        </div>
      </div>
      <div style={s.sideCard}>
        <div style={s.sideCardPad}>
          <h4 style={s.sideSubTitle}>🏷 Accreditations</h4>
          <div style={s.tagsWrap}>{college.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}</div>
        </div>
      </div>
      <div style={s.sideCard}>
        <div style={s.sideCardPad}>
          <h4 style={s.sideSubTitle}>📍 Location</h4>
          <div style={s.locationRows}>
            {[{ label: 'City', value: college.city }, { label: 'District', value: college.district || 'N/A' }, { label: 'State', value: college.state || college.region }].map(l => (
              <div key={l.label} style={s.locationRow}>
                <span style={s.locationLabel}>{l.label}</span>
                <span style={s.locationValue}>{l.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div style={s.page}>
        <div style={{ ...s.heroBanner, height: isMobile ? '220px' : '360px' }}>
          <img src={college.image} alt={college.name} style={s.heroImg} />
          <div style={s.heroOverlay} />
          <div style={{ ...s.heroContent, padding: isMobile ? '14px 16px' : '32px 40px' }}>
            <button style={s.backBtnHero} onClick={() => navigate('/')}>← Back</button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ ...s.regionPill, background: regionBg, color: regionColor }}>📍 {college.city}, {college.region}</span>
                <span style={s.typePill}>{college.type}</span>
              </div>
              <h1 style={{ ...s.heroTitle, fontSize: isMobile ? '18px' : '34px' }}>{college.name}</h1>
              <div style={s.heroMeta}>
                <span style={s.metaItem}>⭐ {college.rating}</span>
                <span style={s.metaDot}>•</span>
                <span style={s.metaItem}>👥 {college.reviews?.toLocaleString()}</span>
                {!isMobile && <><span style={s.metaDot}>•</span><span style={s.metaItem}>🏛 Est. {college.established}</span></>}
              </div>
            </div>
          </div>
        </div>

        <div style={s.actionBar}>
          <div style={{ ...s.actionBarInner, padding: isMobile ? '10px 16px' : '12px 40px' }}>
            <div style={s.feesInfo}>
              <span style={s.feesLabel}>Annual Fees</span>
              <strong style={{ ...s.feesVal, fontSize: isMobile ? '16px' : '22px' }}>{college.fees}</strong>
            </div>
            <button style={{ ...s.enquireBtn, padding: isMobile ? '9px 16px' : '12px 28px', fontSize: isMobile ? '12px' : '14px' }} onClick={handleEnquiry}>
              📨 {user ? 'Enquire Now' : '🔒 Login to Enquire'}
            </button>
          </div>
        </div>

        <div style={{ ...s.main, gridTemplateColumns: isMobile ? '1fr' : '1fr 300px', padding: isMobile ? '16px' : '40px', gap: isMobile ? '16px' : '32px' }}>
          <div style={s.leftCol}>
            <div style={s.tabs}>
              {['overview', 'courses', 'details'].map(tab => (
                <button key={tab} style={{ ...s.tab, fontSize: isMobile ? '13px' : '14px', padding: isMobile ? '10px 16px' : '12px 24px', borderBottom: activeTab === tab ? `3px solid ${regionColor}` : '3px solid transparent', color: activeTab === tab ? regionColor : 'var(--muted)', fontWeight: activeTab === tab ? 700 : 500 }} onClick={() => setActiveTab(tab)}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {activeTab === 'overview' && (
              <div style={s.tabContent}>
                <h2 style={{ ...s.sectionTitle, fontSize: isMobile ? '20px' : '26px' }}>About {college.name}</h2>
                <p style={{ ...s.description, fontSize: isMobile ? '13px' : '15px' }}>{college.description}</p>
                <h3 style={{ ...s.subTitle, fontSize: isMobile ? '16px' : '18px' }}>Quick Facts</h3>
                <div style={{ ...s.factsGrid, gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)' }}>
                  {[{ icon: '📅', label: 'Established', value: college.established || 'N/A' }, { icon: '🏛', label: 'Type', value: college.type }, { icon: '📍', label: 'City', value: college.city }, { icon: '🗺', label: 'District', value: college.district || 'N/A' }, { icon: '🔗', label: 'Affiliation', value: college.affiliation || 'N/A' }, { icon: '✅', label: 'Approval', value: college.approval || 'N/A' }].map(f => (
                    <div key={f.label} style={{ ...s.factCard, padding: isMobile ? '10px' : '14px', gap: isMobile ? '8px' : '12px' }}>
                      <span style={{ fontSize: isMobile ? '18px' : '22px' }}>{f.icon}</span>
                      <div style={{ minWidth: 0 }}>
                        <p style={s.factLabel}>{f.label}</p>
                        <p style={{ ...s.factValue, fontSize: isMobile ? '11px' : '13px' }}>{f.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {isMobile && <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}><SidebarCards /></div>}
              </div>
            )}

            {activeTab === 'courses' && (
              <div style={s.tabContent}>
                <h2 style={{ ...s.sectionTitle, fontSize: isMobile ? '20px' : '26px' }}>Courses Offered</h2>
                <p style={{ color: 'var(--muted)', fontSize: '13px', marginBottom: '8px' }}>{college.courses.length} courses available</p>
                <div style={s.coursesList}>
                  {college.courses.map((course, i) => (
                    <div key={i} style={{ ...s.courseItem, borderLeft: `3px solid ${regionColor}`, padding: isMobile ? '10px 12px' : '14px 16px' }}>
                      <span style={{ ...s.courseIcon, background: regionBg, color: regionColor, width: isMobile ? '30px' : '36px', height: isMobile ? '30px' : '36px', fontSize: isMobile ? '14px' : '16px' }}>🎓</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ ...s.courseName, fontSize: isMobile ? '12px' : '14px' }}>{course}</p>
                        <p style={s.courseFees}>{college.fees} per year</p>
                      </div>
                      <button style={{ ...s.courseEnquireBtn, background: regionColor, padding: isMobile ? '5px 10px' : '7px 14px', fontSize: isMobile ? '11px' : '12px' }} onClick={handleEnquiry}>Enquire</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div style={s.tabContent}>
                <h2 style={{ ...s.sectionTitle, fontSize: isMobile ? '20px' : '26px' }}>College Details</h2>
                <div style={s.detailsList}>
                  {[{ label: 'Full Name', value: college.name }, { label: 'Region', value: college.region }, { label: 'State', value: college.state || 'N/A' }, { label: 'City', value: college.city }, { label: 'District', value: college.district || 'N/A' }, { label: 'College Type', value: college.type }, { label: 'Established', value: college.established || 'N/A' }, { label: 'Affiliation', value: college.affiliation || 'N/A' }, { label: 'Approval', value: college.approval || 'N/A' }, { label: 'Annual Fees', value: college.fees }, { label: 'Rating', value: `⭐ ${college.rating} / 5` }, { label: 'Reviews', value: `${college.reviews?.toLocaleString()} reviews` }].map((d, i) => (
                    <div key={d.label} style={{ ...s.detailRow, background: i % 2 === 0 ? '#fff' : '#FAFAFA', padding: isMobile ? '10px 14px' : '14px 18px', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '2px' : '16px' }}>
                      <span style={{ ...s.detailLabel, fontSize: isMobile ? '11px' : '13px' }}>{d.label}</span>
                      <span style={{ ...s.detailValue, fontSize: '13px', textAlign: isMobile ? 'left' : 'right', fontWeight: isMobile ? 700 : 600 }}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {!isMobile && (
            <div style={s.rightCol}><SidebarCards /></div>
          )}
        </div>
      </div>

      {showEnquiry && <EnquiryModal college={college} onClose={() => setShowEnquiry(false)} />}
      {showAuth && <AuthModal mode={showAuth} onClose={() => setShowAuth(false)} onSwitch={m => setShowAuth(m)} />}
    </>
  );
}

const s = {
  page: { minHeight: '100vh', background: 'var(--cream)', paddingBottom: '60px' },
  notFound: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: '16px', textAlign: 'center', padding: '24px' },
  backBtn: { padding: '12px 28px', borderRadius: '10px', background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '14px' },
  heroBanner: { position: 'relative', overflow: 'hidden' },
  heroImg: { width: '100%', height: '100%', objectFit: 'cover' },
  heroOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)' },
  heroContent: { position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', gap: '10px' },
  backBtnHero: { alignSelf: 'flex-start', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' },
  regionPill: { padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 700 },
  typePill: { padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' },
  heroTitle: { fontFamily: 'Playfair Display, serif', color: '#fff', fontWeight: 900, lineHeight: 1.2 },
  heroMeta: { display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' },
  metaItem: { fontSize: '12px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 },
  metaDot: { color: 'rgba(255,255,255,0.4)', fontSize: '10px' },
  actionBar: { background: '#fff', borderBottom: '1px solid var(--border)', position: 'sticky', top: '110px', zIndex: 100, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  actionBarInner: { maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' },
  feesInfo: { display: 'flex', flexDirection: 'column', gap: '1px' },
  feesLabel: { fontSize: '10px', color: 'var(--muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' },
  feesVal: { fontWeight: 800, color: 'var(--deep)' },
  enquireBtn: { display: 'inline-flex', alignItems: 'center', gap: '6px', borderRadius: '10px', fontWeight: 700, background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' },
  main: { maxWidth: '1100px', margin: '0 auto', display: 'grid', alignItems: 'start' },
  leftCol: { display: 'flex', flexDirection: 'column', minWidth: 0 },
  rightCol: { display: 'flex', flexDirection: 'column', gap: '16px' },
  tabs: { display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: '24px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' },
  tab: { background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap' },
  tabContent: { display: 'flex', flexDirection: 'column', gap: '16px' },
  sectionTitle: { fontFamily: 'Playfair Display, serif', marginBottom: '4px' },
  subTitle: { fontFamily: 'Playfair Display, serif', marginTop: '4px' },
  description: { lineHeight: 1.8, color: '#374151' },
  factsGrid: { display: 'grid', gap: '10px' },
  factCard: { display: 'flex', alignItems: 'flex-start', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px' },
  factLabel: { fontSize: '10px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '3px' },
  factValue: { fontWeight: 600, color: 'var(--deep)', lineHeight: 1.3, wordBreak: 'break-word' },
  coursesList: { display: 'flex', flexDirection: 'column', gap: '8px' },
  courseItem: { display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px' },
  courseIcon: { borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  courseName: { fontWeight: 600, marginBottom: '2px' },
  courseFees: { fontSize: '11px', color: 'var(--muted)' },
  courseEnquireBtn: { marginLeft: 'auto', borderRadius: '8px', fontWeight: 700, color: '#fff', border: 'none', cursor: 'pointer', flexShrink: 0 },
  detailsList: { background: '#fff', borderRadius: '14px', border: '1px solid var(--border)', overflow: 'hidden' },
  detailRow: { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)' },
  detailLabel: { color: 'var(--muted)', fontWeight: 500 },
  detailValue: { lineHeight: 1.4, wordBreak: 'break-word' },
  sideCard: { background: '#fff', borderRadius: '14px', border: '1px solid var(--border)', overflow: 'hidden' },
  sideCardHeader: { padding: '16px 18px' },
  sideCardTitle: { fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '4px' },
  sideCardSub: { fontSize: '12px', color: 'rgba(255,255,255,0.75)' },
  sideCardBody: { padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '12px' },
  sideCardPad: { padding: '16px 18px' },
  sideCardText: { fontSize: '13px', lineHeight: 1.6, color: '#4B5563' },
  loginHint: { fontSize: '12px', color: 'var(--muted)', textAlign: 'center' },
  loginLink: { background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 700, cursor: 'pointer', fontSize: '12px' },
  sideSubTitle: { fontSize: '14px', fontWeight: 700, marginBottom: '12px' },
  tagsWrap: { display: 'flex', gap: '6px', flexWrap: 'wrap' },
  tag: { fontSize: '11px', padding: '4px 10px', borderRadius: '6px', background: '#ECFDF5', color: '#059669', fontWeight: 600, border: '1px solid #A7F3D0' },
  locationRows: { display: 'flex', flexDirection: 'column', gap: '10px' },
  locationRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  locationLabel: { fontSize: '12px', color: 'var(--muted)' },
  locationValue: { fontSize: '12px', fontWeight: 600 },
};
