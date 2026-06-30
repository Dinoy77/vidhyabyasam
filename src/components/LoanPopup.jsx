import React from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

export default function LoanPopup({ onClose, onEnquire }) {
    const navigate = useNavigate();

    return createPortal(
        <div style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px',
        }} onClick={onClose}>
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    position: 'relative',
                    width: '100%', maxWidth: '420px',
                    background: '#fff',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute', top: '12px', right: '12px', zIndex: 10,
                        width: '30px', height: '30px', borderRadius: '50%',
                        background: 'rgba(0,0,0,0.4)', border: 'none', cursor: 'pointer',
                        fontSize: '14px', fontWeight: 700, color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                >✕</button>

                {/* Top banner */}
                <div style={{
                    background: 'linear-gradient(135deg, #1B6CA8, #0d4f80)',
                    padding: '32px 24px 24px',
                    textAlign: 'center',
                }}>
                    <div style={{ fontSize: '48px', marginBottom: '12px' }}>🏦</div>
                    <h3 style={{
                        color: '#fff', fontSize: '20px', fontWeight: 800,
                        fontFamily: 'Playfair Display, serif', lineHeight: 1.3, margin: 0,
                    }}>
                        Are you looking for an Educational Loan?
                    </h3>
                    <p style={{
                        color: 'rgba(255,255,255,0.75)', fontSize: '13px',
                        marginTop: '8px', lineHeight: 1.6,
                    }}>
                        We can help you find the right financial support for your college education.
                    </p>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                    <p style={{
                        fontSize: '13px', color: '#6B7280', textAlign: 'center',
                        marginBottom: '20px',
                    }}>
                        Select your preference below
                    </p>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                            onClick={() => { onEnquire(); }}
                            style={{
                                flex: 1, padding: '14px',
                                borderRadius: '12px', border: 'none',
                                background: 'linear-gradient(135deg, #1B6CA8, #0d4f80)',
                                color: '#fff', fontSize: '15px', fontWeight: 700,
                                cursor: 'pointer',
                            }}
                        >
                            ✅ Yes, Interested
                        </button>
                        <button
                            onClick={onClose}
                            style={{
                                flex: 1, padding: '14px',
                                borderRadius: '12px',
                                border: '1.5px solid #E5E7EB',
                                background: '#fff', color: '#374151',
                                fontSize: '15px', fontWeight: 700,
                                cursor: 'pointer',
                            }}
                        >
                            ❌ No, Thanks
                        </button>
                    </div>

                    {/* NEW: Explore Page Button */}
                    <button
                        onClick={() => {
                            onClose();
                            navigate('/articles/EducationLoanDetail');
                        }}
                        style={{
                            width: '100%', padding: '14px',
                            marginTop: '12px',
                            borderRadius: '12px',
                            border: '1.5px solid #1B6CA8',
                            background: '#F0F9FF', color: '#1B6CA8',
                            fontSize: '14px', fontWeight: 700,
                            cursor: 'pointer', display: 'flex', 
                            alignItems: 'center', justifyContent: 'center', gap: '8px'
                        }}
                    >
                        📖 Explore Education Loan Details
                    </button>

                    <p style={{
                        textAlign: 'center', fontSize: '11px',
                        color: '#9CA3AF', marginTop: '16px', cursor: 'pointer',
                    }} onClick={onClose}>
                        Skip for now
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
}