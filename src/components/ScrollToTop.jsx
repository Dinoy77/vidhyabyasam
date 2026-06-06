import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
                position: 'fixed',
                bottom: '160px',
                right: '38px',
                zIndex: 1000,
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#fff',
                border: '1.5px solid #e5e7eb',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
                opacity: visible ? 1 : 0,
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.10)';
            }}
            title="Back to top"
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'blink 1.2s ease-in-out infinite' }}>
                <polyline points="18 11 12 5 6 11" />
                <polyline points="18 18 12 12 6 18" />
                <style>{`
    @keyframes blink {
      0%, 100% { opacity: 1; transform: translateY(0); }
      50% { opacity: 0.4; transform: translateY(-3px); }
    }
  `}</style>
            </svg>
        </button>
    );
}