import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import emailjs from '@emailjs/browser';

export default function EnquiryModal({ college, onClose }) {
  const { user } = useAuth();
  const [form, setForm] = useState({ phone: '', course: '', message: '' });

  // Use logged in user details
  const userName = user?.name || '';
  const userEmail = user?.email || '';
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

 const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const referenceId = `VB-${college.id}-${Date.now()}`;

      // Save to Firestore
      await addDoc(collection(db, 'enquiries'), {
        name: userName,
        email: userEmail,
        phone: form.phone,
        message: form.message || '',
        course: form.course || '',
        collegeName: college.name,
        collegeId: college.id,
        collegeRegion: college.region,
        userId: user?.email || 'guest',
        referenceId: referenceId,
        createdAt: serverTimestamp(),
      });

      // Send email alert
      await emailjs.send(
        'service_07w9omg',
        'template_b73az9b',
        {
          from_name: userName || 'Unknown',
          from_email: userEmail || 'Unknown',
          phone: form.phone,
          college_name: college.name,
          course: form.course,
          message: form.message || 'No message',
          reference_id: referenceId,
        },
        'QABaJcbFeXOGi0-5m'
      );

      setSubmitted(true);
    } catch (err) {
      console.error('Enquiry failed:', err);
      setSubmitted(true);
    }
    setLoading(false);
  };

if (!user) {
    return (
      <>
        <div style={styles.overlay} onClick={onClose}>
          <div style={styles.modal} onClick={e => e.stopPropagation()} className="animate-fadeUp">
            <div style={styles.header}>
              <div>
                <div style={styles.tag}>📍 {college.city}, {college.region}</div>
                <h2 style={styles.collegeName}>{college.name}</h2>
              </div>
              <button style={styles.closeBtn} onClick={onClose}>✕</button>
            </div>
            <div style={{ padding: '40px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '52px' }}>🔐</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', margin: 0 }}>
                Login Required
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                Please log in or create an account to send an enquiry to <strong>{college.name}</strong>
              </p>
              <button
                style={{ ...styles.submitBtn, width: '100%', marginTop: '8px' }}
                onClick={() => setShowAuth(true)}
              >
                🔓 Log In to Enquire
              </button>
              <button
                style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '13px', cursor: 'pointer' }}
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        {showAuth && (
          <AuthModal
            mode="login"
            onClose={() => setShowAuth(false)}
            onSwitch={(m) => {}}
          />
        )}
      </>
    );
  }

  if (submitted) {
    return (
      <div style={styles.overlay} onClick={onClose}>
        <div style={styles.modal} onClick={e => e.stopPropagation()} className="animate-fadeUp">
          <div style={styles.successBox}>
            <div style={{ fontSize: '48px' }}>✅</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px,4vw,24px)', marginBottom: '8px' }}>
              Enquiry Sent!
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, textAlign: 'center' }}>
              Your enquiry for <strong>{college.name}</strong> has been submitted.
              The team will contact you within 24–48 hours.
            </p>
            <div style={styles.refBox}>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Reference ID</span>
              <strong style={{ color: 'var(--accent)', letterSpacing: '1px' }}>
                VB-{college.id}-{Math.random().toString(36).substr(2, 6).toUpperCase()}
              </strong>
            </div>
            <button style={styles.doneBtn} onClick={onClose}>Done</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()} className="animate-fadeUp">
        <div style={styles.header}>
          <div>
            <div style={styles.tag}>📍 {college.city}, {college.region}</div>
            <h2 style={styles.collegeName}>{college.name}</h2>
          </div>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <div style={styles.body}>
          <div style={styles.infoRow}>
            <div style={styles.infoChip}>⭐ {college.rating}</div>
            <div style={styles.infoChip}>🏛 {college.type}</div>
            <div style={styles.infoChip}>💰 {college.fees}</div>
          </div>
          <h3 style={styles.sectionTitle}>Send Enquiry</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.field}>
              <label style={styles.label}>Phone Number</label>
              <input style={styles.input} type="tel" placeholder="+91 98765 43210"
                value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Course Interested In</label>
              <select style={styles.input} value={form.course}
                onChange={e => setForm({ ...form, course: e.target.value })} required>
                <option value="">Select a course</option>
                {college.courses.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Message (Optional)</label>
              <textarea style={{ ...styles.input, minHeight: '80px', resize: 'vertical' }}
                placeholder="Ask about admission, fees, hostel..."
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit" style={styles.submitBtn} disabled={loading}>
              {loading ? '⏳ Submitting...' : '🚀 Submit Enquiry'}
            </button>
          </form>
          <p style={styles.disclaimer}>🔒 Your information is safe with us.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', inset: 0, background: 'rgba(13,17,23,0.65)',
    backdropFilter: 'blur(4px)', zIndex: 2000,
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
  },
  modal: {
    background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '460px',
    boxShadow: '0 25px 60px rgba(0,0,0,0.25)', overflow: 'hidden',
    maxHeight: '95svh', overflowY: 'auto',
  },
  header: {
    padding: 'clamp(16px,3vw,24px)',
    background: 'linear-gradient(135deg, #0D1117, #1a2332)',
    color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
  },
  tag: { fontSize: '11px', fontWeight: 600, color: 'var(--accent2)', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' },
  collegeName: { fontFamily: 'Playfair Display, serif', fontSize: 'clamp(15px,3vw,19px)', color: '#fff', lineHeight: 1.3, paddingRight: '8px' },
  closeBtn: {
    background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff',
    width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', fontSize: '12px', flexShrink: 0,
  },
  body: { padding: 'clamp(16px,3vw,24px)' },
  infoRow: { display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' },
  infoChip: {
    padding: '5px 12px', borderRadius: '20px',
    background: 'var(--cream)', border: '1px solid var(--border)', fontSize: '12px', fontWeight: 500,
  },
  sectionTitle: { fontSize: '15px', fontWeight: 700, marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid var(--border)' },
  form: { display: 'flex', flexDirection: 'column', gap: '13px' },
  field: { display: 'flex', flexDirection: 'column', gap: '5px' },
  label: { fontSize: '13px', fontWeight: 600 },
  input: {
    padding: '11px 14px', borderRadius: '10px', fontSize: '14px',
    border: '1.5px solid var(--border)', background: 'var(--cream)',
    width: '100%', fontFamily: 'DM Sans, sans-serif',
  },
  submitBtn: {
    padding: '13px', borderRadius: '10px', fontSize: '14px', fontWeight: 700,
    background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '4px',
  },
  disclaimer: { textAlign: 'center', color: 'var(--muted)', fontSize: '12px', marginTop: '12px' },
  successBox: {
    padding: 'clamp(32px,6vw,48px) clamp(20px,4vw,32px)',
    textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
  },
  refBox: {
    background: 'var(--cream)', border: '1px solid var(--border)',
    borderRadius: '10px', padding: '12px 24px',
    display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center', marginTop: '8px',
  },
  doneBtn: {
    padding: '12px 40px', borderRadius: '10px', fontSize: '14px', fontWeight: 700,
    background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '8px',
  },
};
