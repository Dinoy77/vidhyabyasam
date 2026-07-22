// src/components/NeetEnquiryModal.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

function useResponsive() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width < 640;
}

/**
 * NeetEnquiryModal
 *
 * Popup shown when a student clicks "Enquire" on a specific college card
 * in the NEET Predictor results. If the user isn't logged in, it shows a
 * login/signup prompt first. Once logged in, it shows the enquiry form.
 *
 * Props:
 *   college  — the matched college object { collegeName, branch, closingRank, type, quota, ... }
 *   rank     — the NEET All India Rank (AIR) the student entered
 *   category — the category the student selected
 *   onClose  — called to close the whole popup
 */
export default function NeetEnquiryModal({ college, rank, category, onClose }) {
  const { user } = useAuth();
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  const [showAuth, setShowAuth] = useState(false);

  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  // Lock background scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please enter your name and phone number.');
      return;
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setError('Please enter a valid phone number.');
      return;
    }
    setError('');
    setSending(true);

    const payload = {
      name,
      phone,
      email,
      neetRank: rank,
      category,
      branch: college.branch,
      collegeName: college.collegeName,
      closingRank: college.closingRank,
      institutionType: college.type,
      quota: college.quota
    };

    try {
      const response = await fetch('/send-enquiry.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Could not send your enquiry right now. Please try again in a moment.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>

        {/* --- NOT LOGGED IN: show login prompt --- */}
        {!user && (
          <div style={styles.authPrompt}>
            <div style={styles.iconCircle}>🔒</div>
            <h3 style={styles.title}>Log in to enquire</h3>
            <p style={styles.sub}>
              Please log in or create a free account to send an enquiry about{' '}
              <strong>{college.collegeName}</strong>.
            </p>
            <div style={styles.authBtnRow}>
              <button style={styles.loginBtn} onClick={() => setShowAuth('login')}>Log In</button>
              <button style={styles.signupBtn} onClick={() => setShowAuth('signup')}>Sign Up</button>
            </div>
          </div>
        )}

        {/* --- LOGGED IN, NOT YET SENT: show enquiry form --- */}
        {user && !sent && (
          <>
            <h3 style={styles.title}>Enquire about this college</h3>
            <p style={styles.collegeLine}>{college.collegeName}</p>
            <p style={styles.branchLine}>
              {college.branch} · {college.type} ({college.quota})
            </p>

            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={e => setName(e.target.value)}
                style={styles.input}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                style={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={styles.input}
              />
              <button type="submit" style={styles.submitBtn} disabled={sending}>
                {sending ? 'Sending...' : 'Send Enquiry'}
              </button>
              {error && <p style={styles.error}>{error}</p>}
            </form>
          </>
        )}

        {/* --- SENT: confirmation --- */}
        {user && sent && (
          <div style={styles.authPrompt}>
            <div style={styles.iconCircle}>✅</div>
            <h3 style={styles.title}>Enquiry sent!</h3>
            <p style={styles.sub}>
              Our team will contact you about <strong>{college.collegeName}</strong> shortly.
            </p>
            <button style={styles.loginBtn} onClick={onClose}>Close</button>
          </div>
        )}
      </div>

      {showAuth && (
        <AuthModal mode={showAuth} onClose={() => setShowAuth(false)} onSwitch={m => setShowAuth(m)} />
      )}
    </div>
  );
}

const getStyles = (isMobile) => ({
  overlay: {
    position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.55)',
    display: 'flex', alignItems: isMobile ? 'flex-end' : 'center', justifyContent: 'center',
    zIndex: 3000, padding: isMobile ? 0 : '16px',
  },
  modal: {
    background: '#fff',
    borderRadius: isMobile ? '20px 20px 0 0' : '16px',
    padding: isMobile ? '24px 20px calc(20px + env(safe-area-inset-bottom))' : '28px',
    maxWidth: isMobile ? '100%' : '420px',
    width: '100%',
    maxHeight: isMobile ? '90vh' : '85vh',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 -8px 40px rgba(0,0,0,0.2), 0 20px 60px rgba(0,0,0,0.25)',
    boxSizing: 'border-box',
  },
  closeBtn: {
    position: 'absolute', top: isMobile ? '14px' : '14px', right: isMobile ? '16px' : '14px',
    background: isMobile ? '#F1F5F9' : 'transparent',
    border: 'none', borderRadius: '50%',
    width: isMobile ? '32px' : '24px', height: isMobile ? '32px' : '24px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '15px', cursor: 'pointer', color: 'var(--muted)',
  },
  iconCircle: { fontSize: '30px', marginBottom: '4px' },
  title: { fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '18px' : '19px', color: '#0F172A', margin: '8px 0 4px', lineHeight: 1.3 },
  collegeLine: { fontSize: '14px', fontWeight: 700, color: 'var(--deep)', margin: '4px 24px 0 0', lineHeight: 1.4 },
  branchLine: { fontSize: '13px', color: 'var(--muted)', margin: '4px 0 16px' },
  sub: { color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6, margin: '0 0 20px' },
  form: { display: 'flex', flexDirection: 'column', gap: '12px' },
  input: {
    padding: isMobile ? '13px 14px' : '11px 14px',
    borderRadius: '10px', border: '1.5px solid var(--border)',
    fontSize: isMobile ? '16px' : '14px', // 16px on mobile prevents iOS auto-zoom on focus
    fontFamily: 'DM Sans, sans-serif', width: '100%', boxSizing: 'border-box',
  },
  submitBtn: {
    padding: isMobile ? '14px' : '12px', borderRadius: '10px', border: 'none',
    background: 'var(--accent)', color: '#fff', fontWeight: 700,
    fontSize: '14px', cursor: 'pointer', width: '100%',
  },
  error: { color: '#DC2626', fontSize: '13px', margin: '4px 0 0' },
  authPrompt: { textAlign: 'center', padding: '10px 0' },
  authBtnRow: {
    display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '8px',
    flexDirection: isMobile ? 'column' : 'row',
  },
  loginBtn: {
    padding: isMobile ? '13px 22px' : '10px 22px', borderRadius: '8px',
    border: '1.5px solid var(--deep)', color: 'var(--deep)', background: 'transparent',
    fontWeight: 600, fontSize: '13px', cursor: 'pointer', width: isMobile ? '100%' : 'auto',
    boxSizing: 'border-box',
  },
  signupBtn: {
    padding: isMobile ? '13px 22px' : '10px 22px', borderRadius: '8px', border: 'none',
    color: '#fff', background: 'var(--accent)', fontWeight: 600, fontSize: '13px',
    cursor: 'pointer', width: isMobile ? '100%' : 'auto', boxSizing: 'border-box',
  },
});