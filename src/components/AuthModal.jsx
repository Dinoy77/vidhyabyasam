import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal({ mode, onClose, onSwitch }) {
  const { login, signup } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    const result = mode === 'login'
      ? login(form.email, form.password)
      : signup(form.name, form.email, form.password);
    setLoading(false);
    if (result.success) onClose();
    else setError(result.message);
  };

  const isLogin = mode === 'login';

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()} className="animate-fadeUp">
        <div style={styles.header}>
          <div style={styles.logoMini}>🎓 Vidhyabyasam</div>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <div style={styles.body}>
          <h2 style={styles.title}>{isLogin ? 'Welcome Back' : 'Join Vidhyabyasam'}</h2>
          <p style={styles.subtitle}>
            {isLogin ? 'Log in to enquire about colleges' : 'Create an account to start your journey'}
          </p>
          {error && <div style={styles.error}>⚠️ {error}</div>}
          <form onSubmit={handleSubmit} style={styles.form}>
            {!isLogin && (
              <div style={styles.field}>
                <label style={styles.label}>Full Name</label>
                <input style={styles.input} type="text" placeholder="Arjun Nair"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
              </div>
            )}
            <div style={styles.field}>
              <label style={styles.label}>Email Address</label>
              <input style={styles.input} type="email" placeholder="arjun@example.com"
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Password</label>
              <input style={styles.input} type="password" placeholder="Min. 6 characters"
                value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
            </div>
            <button type="submit" style={styles.submitBtn} disabled={loading}>
              {loading ? '⏳ Please wait...' : isLogin ? '🔓 Log In' : '🚀 Create Account'}
            </button>
          </form>
          <div style={styles.switchRow}>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button style={styles.switchBtn} onClick={() => onSwitch(isLogin ? 'signup' : 'login')}>
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </div>
          <div style={styles.socialRow}>
            <button style={styles.socialBtn}>🇬 Google</button>
            <button style={styles.socialBtn}>📘 Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', inset: 0, background: 'rgba(13,17,23,0.6)',
    backdropFilter: 'blur(4px)', zIndex: 2000,
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
  },
  modal: {
    background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '420px',
    boxShadow: '0 25px 60px rgba(0,0,0,0.25)', overflow: 'hidden',
    maxHeight: '95svh', overflowY: 'auto',
  },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '18px 22px',
    background: 'linear-gradient(135deg, #0D1117 0%, #1a2332 100%)', color: '#fff',
  },
  logoMini: { fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '15px' },
  closeBtn: {
    background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff',
    width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer', fontSize: '12px',
  },
  body: { padding: 'clamp(20px,4vw,28px)' },
  title: { fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px,4vw,26px)', marginBottom: '6px' },
  subtitle: { color: 'var(--muted)', fontSize: '13px', marginBottom: '18px', lineHeight: 1.5 },
  error: {
    background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA',
    borderRadius: '8px', padding: '10px 14px', fontSize: '13px', marginBottom: '14px',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '14px' },
  field: { display: 'flex', flexDirection: 'column', gap: '5px' },
  label: { fontSize: '13px', fontWeight: 600 },
  input: {
    padding: '11px 14px', borderRadius: '10px', fontSize: '14px',
    border: '1.5px solid var(--border)', background: 'var(--cream)', width: '100%',
  },
  submitBtn: {
    padding: '13px', borderRadius: '10px', fontSize: '14px', fontWeight: 700,
    background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '4px',
  },
  switchRow: {
    textAlign: 'center', marginTop: '14px', fontSize: '13px', color: 'var(--muted)',
    display: 'flex', gap: '6px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap',
  },
  switchBtn: { background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 700, cursor: 'pointer', fontSize: '13px' },
  socialRow: { display: 'flex', gap: '10px', marginTop: '16px' },
  socialBtn: {
    flex: 1, padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: 500,
    background: 'var(--cream)', border: '1.5px solid var(--border)', cursor: 'pointer',
  },
};
