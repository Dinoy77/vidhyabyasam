import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import EnquiryModal from './EnquiryModal';
import AuthModal from './AuthModal';

const regionColors = {
  Kerala: { bg: '#EBF5FF', text: '#1B6CA8', dot: '#1B6CA8' },
  Bangalore: { bg: '#F5F0FF', text: '#7C3AED', dot: '#7C3AED' },
  'Tamil Nadu': { bg: '#FFF0F0', text: '#DC2626', dot: '#DC2626' },
};

export default function CollegeCard({ college, delay = 0 }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [hovered, setHovered] = useState(false);
  const rc = regionColors[college.region] || {};

  const handleEnquiry = (e) => {
    e.stopPropagation();
    if (user) setShowEnquiry(true);
    else setShowAuth('login');
  };

  const handleCardClick = () => {
    if (user) navigate(`/college/${college.id}`);
    else setShowAuth('login');
  };

  return (
    <>
      <div
        style={{
          ...styles.card,
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.12)' : '0 4px 20px rgba(0,0,0,0.06)',
          animationDelay: `${delay}ms`, cursor: 'pointer',
        }}
        className="animate-fadeUp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleCardClick}
      >
        <div style={styles.imgWrapper}>
          <img src={college.image} alt={college.name} style={styles.img} />
          <div style={{ ...styles.regionBadge, background: rc.bg, color: rc.text }}>
            <span style={{ ...styles.dot, background: rc.dot }} />
            {college.region}
          </div>
          <div style={styles.ratingBadge}>⭐ {college.rating}</div>
          {hovered && (
            <div style={styles.hoverOverlay}>
              <span style={styles.hoverText}>{user ? '👁 View Details' : '🔒 Login to View'}</span>
            </div>
          )}
        </div>
        <div style={styles.body}>
          <div style={styles.typeRow}>
            <span style={styles.typeChip}>{college.type}</span>
            <span style={styles.est}>Est. {college.established}</span>
          </div>
          <h3 style={styles.name}>{college.name}</h3>
          <p style={styles.city}>📍 {college.city}, {college.district}</p>
          <p style={styles.desc}>{college.description.slice(0, 90)}...</p>
          <div style={styles.tags}>
            {college.tags.map(t => <span key={t} style={styles.tag}>{t}</span>)}
          </div>
          <div style={styles.courses}>
            {college.courses.slice(0, 3).map(c => <span key={c} style={styles.course}>{c}</span>)}
            {college.courses.length > 3 && (
              <span style={{ ...styles.course, background: 'var(--border)', color: 'var(--muted)' }}>
                +{college.courses.length - 3} more
              </span>
            )}
          </div>
          <div style={styles.footer}>
            <div style={styles.fees}>
              <span style={styles.feesLabel}>Fees</span>
              <strong style={styles.feesVal}>{college.fees}</strong>
            </div>
            <div style={styles.btnGroup}>
              <button style={{ ...styles.viewBtn, borderColor: rc.text || 'var(--deep)', color: rc.text || 'var(--deep)' }}
                onClick={e => { e.stopPropagation(); handleCardClick(); }}>
                View Details
              </button>
              <button style={styles.enquiryBtn} onClick={handleEnquiry}>
                {user ? '📨 Enquire' : '🔒 Enquire'}
              </button>
            </div>
          </div>
          <p style={styles.affiliation}>🏛 {college.affiliation}</p>
        </div>
      </div>
      {showEnquiry && <EnquiryModal college={college} onClose={() => setShowEnquiry(false)} />}
      {showAuth && <AuthModal mode={showAuth} onClose={() => setShowAuth(false)} onSwitch={m => setShowAuth(m)} />}
    </>
  );
}

const styles = {
  card: { background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' },
  imgWrapper: { position: 'relative', height: 'clamp(140px,20vw,180px)', overflow: 'hidden' },
  img: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' },
  regionBadge: { position: 'absolute', top: '10px', left: '10px', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' },
  dot: { width: '6px', height: '6px', borderRadius: '50%', display: 'inline-block' },
  ratingBadge: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '3px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 },
  hoverOverlay: { position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  hoverText: { background: '#fff', color: 'var(--deep)', padding: '8px 18px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 },
  body: { padding: 'clamp(12px,2vw,16px)', display: 'flex', flexDirection: 'column', gap: '7px', flex: 1 },
  typeRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  typeChip: { fontSize: '10px', fontWeight: 700, letterSpacing: '0.8px', background: 'var(--cream)', border: '1px solid var(--border)', padding: '3px 8px', borderRadius: '4px', color: 'var(--muted)', textTransform: 'uppercase' },
  est: { fontSize: '11px', color: 'var(--muted)' },
  name: { fontFamily: 'Playfair Display, serif', fontSize: 'clamp(14px,2vw,17px)', lineHeight: 1.3, fontWeight: 700 },
  city: { fontSize: '12px', color: 'var(--muted)', marginTop: '-2px' },
  desc: { fontSize: '12px', color: '#4B5563', lineHeight: 1.5 },
  tags: { display: 'flex', gap: '5px', flexWrap: 'wrap' },
  tag: { fontSize: '10px', padding: '2px 8px', borderRadius: '4px', background: '#ECFDF5', color: '#059669', fontWeight: 600, border: '1px solid #A7F3D0' },
  courses: { display: 'flex', gap: '5px', flexWrap: 'wrap' },
  course: { fontSize: '10px', padding: '3px 8px', borderRadius: '4px', background: '#F3F4F6', color: '#374151', fontWeight: 500 },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid var(--border)', gap: '8px' },
  fees: { display: 'flex', flexDirection: 'column', gap: '1px', minWidth: 0 },
  feesLabel: { fontSize: '10px', color: 'var(--muted)', fontWeight: 500 },
  feesVal: { fontSize: 'clamp(12px,2vw,15px)', color: 'var(--deep)' },
  btnGroup: { display: 'flex', gap: '6px', flexShrink: 0 },
  viewBtn: { padding: '7px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: 600, background: '#fff', border: '1.5px solid', cursor: 'pointer', whiteSpace: 'nowrap' },
  enquiryBtn: { padding: '7px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: 700, background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' },
  affiliation: { fontSize: '10px', color: 'var(--muted)', marginTop: '-2px' },
};
