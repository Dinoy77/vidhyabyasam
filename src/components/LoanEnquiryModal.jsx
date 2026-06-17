import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import emailjs from '@emailjs/browser';

export default function LoanEnquiryModal({ onClose }) {
    const { user } = useAuth();
    const [form, setForm] = useState({ name: '', phone: '', course: '', loanAmount: '', message: '' });
    const userName = user?.name || form.name || 'Guest';
    const userEmail = user?.email || 'guest@vidyabhyasam.com';
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showAuth, setShowAuth] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const referenceId = `VB-LOAN-${Date.now()}`;
            const finalName = user?.name || form.name || 'Guest';
            const finalEmail = user?.email || 'guest@vidyabhyasam.com';

            await addDoc(collection(db, 'loan_enquiries'), {
                name: finalName,
                email: finalEmail,
                phone: form.phone,
                course: form.course,
                loanAmount: form.loanAmount,
                message: form.message || '',
                referenceId: referenceId,
                createdAt: serverTimestamp(),
            });

            await emailjs.send(
                'service_07w9omg',
                'template_b73az9b',
                {
                    from_name: finalName,
                    from_email: finalEmail,
                    phone: form.phone,
                    college_name: 'Educational Loan Enquiry',
                    course: form.course,
                    message: `Loan Amount: ${form.loanAmount}. ${form.message || 'No message'}`,
                    reference_id: referenceId,
                },
                'QABaJcbFeXOGi0-5m'
            );

            setSubmitted(true);
        } catch (err) {
            console.error('Loan enquiry failed:', err);
            setSubmitted(true);
        }
        setLoading(false);
    };

    if (!user) {
        return (
            <>
                {createPortal(
                    <div style={styles.overlay} onClick={onClose}>
                        <div style={styles.modal} onClick={e => e.stopPropagation()}>
                            <div style={styles.header}>
                                <div>
                                    <div style={styles.tag}>🏦 Educational Loan</div>
                                    <h2 style={styles.title}>Loan Enquiry</h2>
                                </div>
                                <button style={styles.closeBtn} onClick={onClose}>✕</button>
                            </div>
                            <div style={{ padding: '40px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                                <div style={{ fontSize: '52px' }}>🔐</div>
                                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', margin: 0 }}>
                                    Login Required
                                </h3>
                                <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                                    Please log in to submit your educational loan enquiry.
                                </p>
                                <button
                                    style={{ ...styles.submitBtn, width: '100%', marginTop: '8px' }}
                                    onClick={() => setShowAuth(true)}
                                >
                                    🔓 Log In to Continue
                                </button>
                                <button
                                    style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '13px', cursor: 'pointer' }}
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
                {showAuth && createPortal(
                    <div style={{ position: 'fixed', inset: 0, zIndex: 99999 }}>
                        <AuthModal mode="login" onClose={() => setShowAuth(false)} onSwitch={(m) => setShowAuth(m)} />
                    </div>,
                    document.body
                )}
            </>
        );
    }

    if (submitted) {
        return createPortal(
            <div style={styles.overlay} onClick={onClose}>
                <div style={styles.modal} onClick={e => e.stopPropagation()}>
                    <div style={styles.successBox}>
                        <div style={{ fontSize: '48px' }}>✅</div>
                        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', marginBottom: '8px' }}>
                            Loan Enquiry Submitted!
                        </h2>
                        <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, textAlign: 'center' }}>
                            Our team will contact you within 24–48 hours with the best educational loan options.
                        </p>
                        <div style={styles.refBox}>
                            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Reference ID</span>
                            <strong style={{ color: 'var(--accent)', letterSpacing: '1px' }}>
                                VB-LOAN-{Math.random().toString(36).substr(2, 6).toUpperCase()}
                            </strong>
                        </div>
                        <button style={styles.doneBtn} onClick={onClose}>Done</button>
                    </div>
                </div>
            </div>,
            document.body
        );
    }

    return createPortal(
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} onClick={e => e.stopPropagation()}>
                <div style={styles.header}>
                    <div>
                        <div style={styles.tag}>🏦 Educational Loan</div>
                        <h2 style={styles.title}>Loan Enquiry Form</h2>
                    </div>
                    <button style={styles.closeBtn} onClick={onClose}>✕</button>
                </div>
                <div style={styles.body}>
                    <h3 style={styles.sectionTitle}>Fill in your details</h3>
                    <form onSubmit={handleSubmit} style={styles.form}>

                        {/* Show name field only if not logged in */}
                        {!user && (
                            <div style={styles.field}>
                                <label style={styles.label}>Your Name</label>
                                <input style={styles.input} type="text" placeholder="Enter your name"
                                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                            </div>
                        )}

                        <div style={styles.field}>
                            <label style={styles.label}>Phone Number</label>
                            <input style={styles.input} type="tel" placeholder="+91 98765 43210"
                                value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                        </div>
                        <div style={styles.field}>
                            <label style={styles.label}>Course You Are Pursuing</label>
                            <select style={styles.input} value={form.course}
                                onChange={e => setForm({ ...form, course: e.target.value })} required>
                                <option value="">Select a course</option>
                                {['MBBS', 'BDS', 'B.Pharm', 'M.Pharm', 'B.Sc Nursing', 'GNM', 'BPT', 'B.Tech', 'MBA', 'MCA', 'BCA', 'B.Arch', 'Other'].map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                        <div style={styles.field}>
                            <label style={styles.label}>Loan Amount Required</label>
                            <select style={styles.input} value={form.loanAmount}
                                onChange={e => setForm({ ...form, loanAmount: e.target.value })} required>
                                <option value="">Select loan amount</option>
                                {['Up to ₹1 Lakh', '₹1L – ₹5L', '₹5L – ₹10L', '₹10L – ₹20L', 'Above ₹20L'].map(a => (
                                    <option key={a} value={a}>{a}</option>
                                ))}
                            </select>
                        </div>
                        <div style={styles.field}>
                            <label style={styles.label}>Message (Optional)</label>
                            <textarea style={{ ...styles.input, minHeight: '80px', resize: 'vertical' }}
                                placeholder="Any additional details about your loan requirement..."
                                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                        </div>
                        <button type="submit" style={styles.submitBtn} disabled={loading}>
                            {loading ? '⏳ Submitting...' : '🚀 Submit Loan Enquiry'}
                        </button>
                    </form>
                    <p style={styles.disclaimer}>🔒 Your information is safe with us.</p>
                </div>
            </div>
        </div>,
        document.body
    );
}

const styles = {
    overlay: {
        position: 'fixed', inset: 0, background: 'rgba(13,17,23,0.65)',
        backdropFilter: 'blur(4px)', zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
    },
    modal: {
        background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '460px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.25)', overflow: 'hidden',
        maxHeight: '95svh', overflowY: 'auto',
    },
    header: {
        padding: '24px',
        background: 'linear-gradient(135deg, #0D1117, #1a2332)',
        color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
    },
    tag: { fontSize: '11px', fontWeight: 600, color: '#F5A623', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' },
    title: { fontFamily: 'Playfair Display, serif', fontSize: '19px', color: '#fff', lineHeight: 1.3, margin: 0 },
    closeBtn: {
        background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff',
        width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', fontSize: '12px', flexShrink: 0,
    },
    body: { padding: '24px' },
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
        padding: '48px 32px', textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
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