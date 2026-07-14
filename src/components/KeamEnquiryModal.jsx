import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

/**
 * KeamEnquiryModal
 *
 * Popup shown when a student clicks "Enquire" on a specific college card
 * in the KEAM Predictor results. If the user isn't logged in, it shows a
 * login/signup prompt first (reusing the existing AuthModal). Once logged
 * in, it shows the enquiry form pre-filled with their account details.
 *
 * Props:
 *   college  — the matched college object { collegeName, branch, openingRank, closingRank, ... }
 *   rank     — the KEAM rank the student entered
 *   category — the category the student selected
 *   onClose  — called to close the whole popup
 */
export default function KeamEnquiryModal({ college, rank, category, onClose }) {
  const { user } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

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
      keamRank: rank,
      category,
      branch: college.branch,
      collegeName: college.collegeName,
      openingRank: college.openingRank,
      closingRank: college.closingRank,
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
        <button style={styles.closeBtn} onClick={onClose}>✕</button>

        {/* --- NOT LOGGED IN: show login prompt --- */}
        {!user && (
          <div style={styles.authPrompt}>
            <div style={{ fontSize: '32px' }}>🔒</div>
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
            <p style={styles.branchLine}>{college.branch}</p>

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
            <div style={{ fontSize: '32px' }}>✅</div>
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

const styles = {
  overlay: {
    position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.55)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 3000, padding: '16px',
  },
  modal: {
    background: '#fff', borderRadius: '16px', padding: '28px',
    maxWidth: '420px', width: '100%', position: 'relative',
    boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
  },
  closeBtn: {
    position: 'absolute', top: '14px', right: '14px', background: 'transparent',
    border: 'none', fontSize: '16px', cursor: 'pointer', color: 'var(--muted)',
  },
  title: { fontFamily: 'Playfair Display, serif', fontSize: '19px', color: '#0F172A', margin: '8px 0 4px' },
  collegeLine: { fontSize: '14px', fontWeight: 700, color: 'var(--deep)', margin: '4px 0 0' },
  branchLine: { fontSize: '13px', color: 'var(--muted)', margin: '2px 0 16px' },
  sub: { color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6, margin: '0 0 20px' },
  form: { display: 'flex', flexDirection: 'column', gap: '12px' },
  input: { padding: '11px 14px', borderRadius: '10px', border: '1.5px solid var(--border)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' },
  submitBtn: { padding: '12px', borderRadius: '10px', border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 700, fontSize: '14px', cursor: 'pointer' },
  error: { color: '#DC2626', fontSize: '13px', margin: '4px 0 0' },
  authPrompt: { textAlign: 'center', padding: '10px 0' },
  authBtnRow: { display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '8px' },
  loginBtn: { padding: '10px 22px', borderRadius: '8px', border: '1.5px solid var(--deep)', color: 'var(--deep)', background: 'transparent', fontWeight: 600, fontSize: '13px', cursor: 'pointer' },
  signupBtn: { padding: '10px 22px', borderRadius: '8px', border: 'none', color: '#fff', background: 'var(--accent)', fontWeight: 600, fontSize: '13px', cursor: 'pointer' },
};