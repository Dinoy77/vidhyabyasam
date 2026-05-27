import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal({ mode, onClose, onSwitch }) {
  const { login, initiateSignup, checkEmailVerified, resendEmailVerification } = useAuth();

  const [step, setStep] = useState('form');
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [checking, setChecking] = useState(false);

  const isLogin = mode === 'login';

  useEffect(() => {
    if (resendTimer > 0) {
      const t = setTimeout(() => setResendTimer(r => r - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [resendTimer]);

  // Auto check every 3 seconds if email is verified
  useEffect(() => {
    if (step !== 'verify') return;
    const interval = setInterval(async () => {
      const result = await checkEmailVerified();
      if (result.success) {
        clearInterval(interval);
        onClose();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [step]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await login(form.email, form.password);
    setLoading(false);
    if (result.success) onClose();
    else setError(result.message);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await initiateSignup(form.name, form.email, form.phone, form.password);
    setLoading(false);
    if (result.success) {
      setStep('verify');
      setResendTimer(60);
    } else {
      setError(result.message);
    }
  };

  const handleManualCheck = async () => {
    setChecking(true);
    setError('');
    const result = await checkEmailVerified();
    setChecking(false);
    if (result.success) {
      onClose();
    } else {
      setError(result.message);
    }
  };

  const handleResend = async () => {
    const result = await resendEmailVerification();
    if (result.success) {
      setResendTimer(60);
      setSuccess('Verification email resent! Check your inbox.');
      setTimeout(() => setSuccess(''), 4000);
    } else {
      setError(result.message);
    }
  };

  return (
    <div style={s.overlay} onClick={onClose}>
      <div style={s.modal} onClick={e => e.stopPropagation()} className="animate-fadeUp">

        {/* Header */}
        <div style={s.header}>
          <div style={s.logoMini}>🎓 Vidhyabyasam</div>
          <button style={s.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* ── LOGIN ── */}
        {isLogin && (
          <div style={s.body}>
            <h2 style={s.title}>Welcome Back</h2>
            <p style={s.subtitle}>Log in to your account</p>
            {error && <div style={s.error}>⚠️ {error}</div>}
            <form onSubmit={handleLoginSubmit} style={s.form}>
              <div style={s.field}>
                <label style={s.label}>Email Address</label>
                <input style={s.input} type="email" placeholder="arjun@example.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div style={s.field}>
                <label style={s.label}>Password</label>
                <input style={s.input} type="password" placeholder="Min. 6 characters"
                  value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
              </div>
              <button type="submit" style={s.submitBtn} disabled={loading}>
                {loading ? '⏳ Logging in...' : '🔓 Log In'}
              </button>
            </form>
            <div style={s.switchRow}>
              Don't have an account?
              <button style={s.switchBtn} onClick={() => onSwitch('signup')}>Sign Up</button>
            </div>
          </div>
        )}

        {/* ── SIGNUP FORM ── */}
        {!isLogin && step === 'form' && (
          <div style={s.body}>
            <h2 style={s.title}>Create Account</h2>
            <p style={s.subtitle}>Fill in your details to get started</p>
            {error && <div style={s.error}>⚠️ {error}</div>}
            <form onSubmit={handleSignupSubmit} style={s.form}>
              <div style={s.field}>
                <label style={s.label}>Full Name</label>
                <input style={s.input} type="text" placeholder="Arjun Nair"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div style={s.field}>
                <label style={s.label}>Email Address</label>
                <div style={s.inputRow}>
                  <span style={s.prefix}>✉️</span>
                  <input
                    style={{ ...s.input, borderLeft: 'none', borderRadius: '0 10px 10px 0' }}
                    type="email" placeholder="arjun@example.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div style={s.field}>
                <label style={s.label}>Phone Number</label>
                <div style={s.inputRow}>
                  <span style={s.prefix}>+91</span>
                  <input
                    style={{ ...s.input, borderLeft: 'none', borderRadius: '0 10px 10px 0' }}
                    type="tel" placeholder="9876543210" maxLength={10}
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value.replace(/\D/g, '') })} required />
                </div>
              </div>
              <div style={s.field}>
                <label style={s.label}>Password</label>
                <input style={s.input} type="password" placeholder="Min. 6 characters"
                  value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
              </div>
              <button type="submit" style={s.submitBtn} disabled={loading}>
                {loading ? '⏳ Creating account...' : '📧 Create Account & Verify Email'}
              </button>
            </form>
            <div style={s.switchRow}>
              Already have an account?
              <button style={s.switchBtn} onClick={() => onSwitch('login')}>Log In</button>
            </div>
          </div>
        )}

        {/* ── EMAIL VERIFICATION SCREEN ── */}
        {!isLogin && step === 'verify' && (
          <div style={s.body}>
            <div style={s.verifyIcon}>📧</div>
            <h2 style={s.title}>Verify Your Email</h2>
            <p style={s.subtitle}>
              We sent a verification link to
            </p>
            <div style={s.emailBox}>
              <strong>{form.email}</strong>
            </div>
            <p style={{ ...s.subtitle, marginTop: '12px' }}>
              Open your email and click the verification link. This page will update automatically once verified.
            </p>

            {error && <div style={s.error}>⚠️ {error}</div>}
            {success && <div style={s.successMsg}>✅ {success}</div>}

            <div style={s.stepsList}>
              <div style={s.stepItem}>
                <span style={s.stepNum}>1</span>
                <span>Open your email inbox</span>
              </div>
              <div style={s.stepItem}>
                <span style={s.stepNum}>2</span>
                <span>Find the email from Vidhyabyasam</span>
              </div>
              <div style={s.stepItem}>
                <span style={s.stepNum}>3</span>
                <span>Click the verification link</span>
              </div>
              <div style={s.stepItem}>
                <span style={s.stepNum}>4</span>
                <span>Come back here — you'll be logged in!</span>
              </div>
            </div>

            <button style={s.submitBtn} onClick={handleManualCheck} disabled={checking}>
              {checking ? '⏳ Checking...' : '✅ I Verified My Email'}
            </button>

            <div style={s.resendRow}>
              {resendTimer > 0
                ? <span style={{ color: 'var(--muted)', fontSize: '13px' }}>
                    Resend in {resendTimer}s
                  </span>
                : <button style={s.switchBtn} onClick={handleResend}>
                    🔄 Resend Verification Email
                  </button>
              }
            </div>

            <button
              style={{ ...s.switchBtn, marginTop: '8px', display: 'block', width: '100%', textAlign: 'center' }}
              onClick={() => { setStep('form'); setError(''); }}
            >
              ← Use different email
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const s = {
  overlay: { position: 'fixed', inset: 0, background: 'rgba(13,17,23,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' },
  modal: { background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '440px', boxShadow: '0 25px 60px rgba(0,0,0,0.25)', overflow: 'hidden', maxHeight: '95svh', overflowY: 'auto' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 22px', background: 'linear-gradient(135deg, #0D1117 0%, #1a2332 100%)', color: '#fff' },
  logoMini: { fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '15px' },
  closeBtn: { background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer', fontSize: '12px' },
  body: { padding: 'clamp(20px,4vw,28px)' },
  title: { fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px,4vw,24px)', marginBottom: '6px' },
  subtitle: { color: 'var(--muted)', fontSize: '13px', marginBottom: '8px', lineHeight: 1.6 },
  error: { background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', marginBottom: '14px' },
  successMsg: { background: '#ECFDF5', color: '#059669', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', marginBottom: '14px' },
  form: { display: 'flex', flexDirection: 'column', gap: '14px' },
  field: { display: 'flex', flexDirection: 'column', gap: '5px' },
  label: { fontSize: '13px', fontWeight: 600 },
  input: { padding: '11px 14px', borderRadius: '10px', fontSize: '14px', border: '1.5px solid var(--border)', background: 'var(--cream)', width: '100%', fontFamily: 'DM Sans, sans-serif' },
  inputRow: { display: 'flex', alignItems: 'stretch' },
  prefix: { padding: '11px 12px', background: '#F3F4F6', border: '1.5px solid var(--border)', borderRight: 'none', borderRadius: '10px 0 0 10px', fontSize: '13px', fontWeight: 600, color: 'var(--muted)', display: 'flex', alignItems: 'center' },
  submitBtn: { padding: '13px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '4px', width: '100%' },
  switchRow: { textAlign: 'center', marginTop: '14px', fontSize: '13px', color: 'var(--muted)', display: 'flex', gap: '6px', justifyContent: 'center', alignItems: 'center' },
  switchBtn: { background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 700, cursor: 'pointer', fontSize: '13px' },
  verifyIcon: { fontSize: '56px', textAlign: 'center', marginBottom: '12px' },
  emailBox: { background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: '10px', padding: '12px 16px', textAlign: 'center', fontSize: '14px', marginBottom: '8px' },
  stepsList: { display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0' },
  stepItem: { display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'var(--deep)' },
  stepNum: { width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0 },
  resendRow: { textAlign: 'center', marginTop: '16px' },
};