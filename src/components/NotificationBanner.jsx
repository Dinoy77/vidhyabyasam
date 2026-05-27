import React, { useState, useEffect } from 'react';

const notifications = [
  {
    id: 1, type: 'exam', icon: '📝',
    title: 'KEAM 2024 Registration Open',
    message: 'Kerala Engineering Architecture Medical entrance registration closes on March 15, 2024.',
    date: 'Deadline: Mar 15', color: '#1B6CA8', bg: '#EBF5FF', link: '#',
  },
  {
    id: 2, type: 'exam', icon: '🏥',
    title: 'NEET UG 2024 — Apply Now',
    message: 'National Eligibility cum Entrance Test for MBBS, BDS admissions. Last date approaching fast.',
    date: 'Deadline: Mar 9', color: '#DC2626', bg: '#FFF0F0', link: '#',
  },
  {
    id: 3, type: 'admission', icon: '🎓',
    title: 'KCET 2024 Applications Live',
    message: 'Karnataka Common Entrance Test for Engineering and Pharmacy admissions now open.',
    date: 'Deadline: Mar 20', color: '#7C3AED', bg: '#F5F0FF', link: '#',
  },
  {
    id: 4, type: 'exam', icon: '💊',
    title: 'GPAT 2024 Results Declared',
    message: 'Graduate Pharmacy Aptitude Test results are out. Check your score on the official portal.',
    date: 'Today', color: '#059669', bg: '#ECFDF5', link: '#',
  },
  {
    id: 5, type: 'admission', icon: '📋',
    title: 'TANCET 2024 Notification Released',
    message: 'Tamil Nadu Common Entrance Test for MBA, MCA, M.Tech admissions announced.',
    date: 'Deadline: Feb 28', color: '#E8470A', bg: '#FFF4EE', link: '#',
  },
];

export default function NotificationBanner() {
  const [dismissed, setDismissed] = useState([]);
  const [ticker, setTicker] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);

  const active = notifications.filter(n => !dismissed.includes(n.id));
  const unreadCount = active.length;

  useEffect(() => {
    if (active.length > 1) {
      const t = setInterval(() => setTicker(p => (p + 1) % active.length), 3500);
      return () => clearInterval(t);
    }
  }, [active.length]);

  const dismiss = (id, e) => {
    e.stopPropagation();
    setDismissed(d => [...d, id]);
    setTicker(0);
  };

  const dismissAll = () => {
    setDismissed(notifications.map(n => n.id));
    setPanelOpen(false);
  };

  if (unreadCount === 0) return null;

  const current = active[ticker % active.length];

  return (
    <>
      <div style={styles.tickerBar} onClick={() => setPanelOpen(true)}>
        <div style={styles.tickerLeft}>
          <span style={styles.liveDot} />
          <span style={styles.liveLabel}>LIVE</span>
          <span style={styles.tickerIcon}>{current.icon}</span>
          <span style={styles.tickerText}>
            <strong>{current.title}</strong>
            <span className="hide-mobile"> — {current.message.slice(0, 60)}...</span>
          </span>
        </div>
        <div style={styles.tickerRight}>
          <span style={styles.tickerDate}>{current.date}</span>
          <span style={{ ...styles.countBadge, background: current.color }}>{unreadCount}</span>
          <span style={styles.tickerArrow}>›</span>
        </div>
      </div>

      {panelOpen && (
        <div style={styles.overlay} onClick={() => setPanelOpen(false)}>
          <div style={styles.panel} onClick={e => e.stopPropagation()} className="animate-slideDown">
            <div style={styles.panelHeader}>
              <div style={styles.panelTitle}>
                <span style={styles.bellIcon}>🔔</span>
                <div>
                  <h3 style={styles.panelHeading}>Notifications</h3>
                  <p style={styles.panelSub}>{unreadCount} unread alerts</p>
                </div>
              </div>
              <div style={styles.panelActions}>
                <button style={styles.clearAllBtn} onClick={dismissAll}>Clear all</button>
                <button style={styles.closePanelBtn} onClick={() => setPanelOpen(false)}>✕</button>
              </div>
            </div>
            <div style={styles.list}>
              {active.map(n => (
                <div key={n.id} style={{ ...styles.notifCard, borderLeft: `4px solid ${n.color}` }}>
                  <div style={{ ...styles.notifIconBox, background: n.bg }}>
                    <span style={styles.notifIcon}>{n.icon}</span>
                  </div>
                  <div style={styles.notifBody}>
                    <div style={styles.notifTop}>
                      <span style={{ ...styles.notifType, color: n.color }}>
                        {n.type === 'exam' ? '📝 Exam' : '🎓 Admission'}
                      </span>
                      <span style={styles.notifDate}>{n.date}</span>
                    </div>
                    <h4 style={styles.notifTitle}>{n.title}</h4>
                    <p style={styles.notifMsg}>{n.message}</p>
                    <div style={styles.notifFooter}>
                      <a href={n.link} style={{ ...styles.notifLink, color: n.color }}>View Details →</a>
                      <button style={styles.dismissBtn} onClick={e => dismiss(n.id, e)}>Dismiss</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={styles.panelFooter}>
              <p style={styles.panelFooterText}>🔔 Notifications update daily. Stay tuned for new exam alerts.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  tickerBar: {
    position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 999,
    background: 'linear-gradient(90deg, #0D1117 0%, #1a2a4a 100%)',
    color: '#fff', padding: '9px clamp(16px,4vw,48px)',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    cursor: 'pointer', gap: '12px',
    borderBottom: '2px solid rgba(232,71,10,0.4)',
  },
  tickerLeft: { display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 },
  liveDot: {
    width: '8px', height: '8px', borderRadius: '50%',
    background: '#E8470A', flexShrink: 0,
    boxShadow: '0 0 0 3px rgba(232,71,10,0.3)',
    animation: 'pulse 1.5s infinite',
  },
  liveLabel: { fontSize: '10px', fontWeight: 800, letterSpacing: '1.5px', color: '#E8470A', flexShrink: 0 },
  tickerIcon: { fontSize: '16px', flexShrink: 0 },
  tickerText: { fontSize: 'clamp(12px,2vw,13px)', color: 'rgba(255,255,255,0.9)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tickerRight: { display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 },
  tickerDate: { fontSize: '11px', color: '#F5A623', fontWeight: 600, whiteSpace: 'nowrap' },
  countBadge: { color: '#fff', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '20px', minWidth: '22px', textAlign: 'center' },
  tickerArrow: { fontSize: '18px', color: 'rgba(255,255,255,0.5)' },
  overlay: {
    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(3px)', zIndex: 3000,
    display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start',
    padding: '110px clamp(8px,2vw,24px) 0',
  },
  panel: {
    background: '#fff', borderRadius: '16px', width: '100%', maxWidth: '440px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.25)', overflow: 'hidden',
    maxHeight: '80vh', display: 'flex', flexDirection: 'column',
  },
  panelHeader: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '18px 20px', background: '#0D1117', color: '#fff', flexShrink: 0,
  },
  panelTitle: { display: 'flex', alignItems: 'center', gap: '12px' },
  bellIcon: { fontSize: '24px' },
  panelHeading: { fontSize: '16px', fontWeight: 700, fontFamily: 'Playfair Display, serif' },
  panelSub: { fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' },
  panelActions: { display: 'flex', gap: '10px', alignItems: 'center' },
  clearAllBtn: {
    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer', fontWeight: 500,
  },
  closePanelBtn: {
    background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff',
    width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer', fontSize: '13px',
  },
  list: { overflowY: 'auto', flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' },
  notifCard: {
    display: 'flex', gap: '12px', padding: '14px',
    background: '#FAFAFA', borderRadius: '12px', border: '1px solid var(--border)',
  },
  notifIconBox: { width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  notifIcon: { fontSize: '20px' },
  notifBody: { flex: 1, minWidth: 0 },
  notifTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' },
  notifType: { fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' },
  notifDate: { fontSize: '11px', color: 'var(--muted)', fontWeight: 600 },
  notifTitle: { fontSize: '13px', fontWeight: 700, marginBottom: '4px', lineHeight: 1.3 },
  notifMsg: { fontSize: '12px', color: '#4B5563', lineHeight: 1.5, marginBottom: '10px' },
  notifFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  notifLink: { fontSize: '12px', fontWeight: 700, textDecoration: 'none' },
  dismissBtn: {
    fontSize: '11px', color: 'var(--muted)', background: 'none',
    border: '1px solid var(--border)', padding: '3px 10px', borderRadius: '6px', cursor: 'pointer',
  },
  panelFooter: { padding: '12px 20px', borderTop: '1px solid var(--border)', background: '#F9FAFB', flexShrink: 0 },
  panelFooterText: { fontSize: '11px', color: 'var(--muted)', textAlign: 'center' },
};
