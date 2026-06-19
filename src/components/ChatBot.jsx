import React, { useState, useRef, useEffect } from 'react';

const faqs = [
    {
        question: '📍 Which state do you belong to?',
        answer: 'We cover colleges across Kerala, Tamil Nadu, and Karnataka. Tell us your state and we will help you find the best colleges near you!',
    },
    {
        question: '💭 What is in your mind?',
        answer: 'We are here to help! Whether you are confused about courses, colleges, fees or admissions — just ask us anything and we will guide you.',
    },
    {
        question: '📚 Which course are you looking for?',
        answer: 'We have colleges for MBBS, B.Pharm, M.Pharm, B.Sc Nursing, GNM, BPT, B.Tech, BCA and many more. Tell us your preferred course and we will filter the best options for you!',
    },
    {
        question: '🗺️ Which state colleges are you interested in?',
        answer: 'We have 800+ colleges across Kerala, Karnataka and Tamil Nadu. Click "By Region" on the home page to filter colleges by your preferred state.',
    },
    {
        question: '🔬 Have you qualified NEET?',
        answer: 'If you have qualified NEET, you are eligible for MBBS, BDS, BAMS, BHMS and other medical courses. We can help you find the best medical colleges based on your NEET score and state preference.',
    },
    {
        question: '📋 How do I apply / enquire?',
        answer: 'Click on any college card → click "Send Enquiry" button → fill your details. Our team will contact you within 24 hours!',
    },
    {
        question: '📞 Contact Vidyabhyasam',
        answer: 'You can reach us via WhatsApp using the green button on the bottom right, or send an enquiry from any college page. Email: enquiry@vidyabhyasam.com',
    },
];

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hi! 👋 I\'m the Vidyabhyasam assistant. How can I help you today? Choose a question below or type your own!' },
    ]);
    const [input, setInput] = useState('');
    const [showFaqs, setShowFaqs] = useState(true);
    const bottomRef = useRef(null);
    const [isMobile, setIsMobile] = useState(
      typeof window !== 'undefined' ? window.innerWidth < 768 : false
    );
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (open && messages.length > 1) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleFaq = (faq) => {
        setMessages(prev => [
            ...prev,
            { from: 'user', text: faq.question },
            { from: 'bot', text: faq.answer },
        ]);
    };

    const handleSend = () => {
        if (!input.trim()) return;
        const userMsg = input.trim();
        setInput('');

        // Simple keyword matching
        const match = faqs.find(f =>
            f.question.toLowerCase().includes(userMsg.toLowerCase()) ||
            userMsg.toLowerCase().includes('nursing') && f.question.includes('nursing') ||
            userMsg.toLowerCase().includes('pharmacy') && f.question.includes('pharmacy') ||
            userMsg.toLowerCase().includes('mbbs') && f.question.includes('MBBS') ||
            userMsg.toLowerCase().includes('fee') && f.question.includes('fee') ||
            userMsg.toLowerCase().includes('apply') && f.question.includes('apply') ||
            userMsg.toLowerCase().includes('contact') && f.question.includes('Contact') ||
            userMsg.toLowerCase().includes('allied') && f.question.includes('Allied')
        );

        setMessages(prev => [
            ...prev,
            { from: 'user', text: userMsg },
            {
                from: 'bot',
                text: match
                    ? match.answer
                    : '__whatsapp__',
            },
        ]);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    position: 'fixed',
                    zIndex: 1000,
                    bottom: isMobile ? '124px' : '160px', 
                    right: isMobile ? '16px' : '24px',
                    width: isMobile ? '44px' : '60px',  
                    height: isMobile ? '44px' : '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1B6CA8, #0d4f80)',
                    color: '#fff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '20px' : '28px', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                title="Chat with us"
            >
                {open ? '✕' : '🤖'}
            </button>

            {/* Chat Window */}
            {open && (
                <div style={{
                    position: 'fixed', 
                    bottom: isMobile ? '180px' : '230px', 
                    right: isMobile ? '16px' : '28px', 
                    zIndex: 1000,
                    width: isMobile ? 'calc(100vw - 32px)' : '320px', 
                    maxHeight: isMobile ? '50vh' : '480px',
                    background: '#fff', borderRadius: '16px',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
                    border: '1px solid #e5e7eb',
                    display: 'flex', flexDirection: 'column',
                    overflow: 'hidden',
                }}>
                    {/* Header */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1B6CA8, #0d4f80)',
                        padding: '14px 16px', color: '#fff',
                        display: 'flex', alignItems: 'center', gap: '10px',
                    }}>
                        <span style={{ fontSize: '22px' }}>🤖</span>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '14px' }}>Vidyabhyasam Assistant</div>
                            <div style={{ fontSize: '11px', opacity: 0.85 }}>● Online — replies instantly</div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div style={{
                        flex: 1, overflowY: 'auto', padding: '12px',
                        display: 'flex', flexDirection: 'column', gap: '8px',
                        background: '#f8fafc',
                    }}>
                        {messages.map((msg, i) => (
                            <div key={i}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
                                }}>
                                    <div style={{
                                        maxWidth: '80%', padding: '8px 12px', borderRadius: '12px',
                                        fontSize: '13px', lineHeight: 1.5,
                                        background: msg.from === 'user' ? '#1B6CA8' : '#fff',
                                        color: msg.from === 'user' ? '#fff' : '#1a1a2e',
                                        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                                        borderBottomRightRadius: msg.from === 'user' ? '4px' : '12px',
                                        borderBottomLeftRadius: msg.from === 'bot' ? '4px' : '12px',
                                    }}>
                                        {msg.text === '__whatsapp__' ? (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                <span>I'm not sure about that. For other questions, our team is available on WhatsApp! 😊</span>
                                                <a
                                                    href="https://wa.me/919037755265"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        display: 'inline-flex', alignItems: 'center', gap: '7px',
                                                        background: '#25D366', color: '#fff',
                                                        padding: '8px 14px', borderRadius: '10px',
                                                        fontSize: '12px', fontWeight: 700,
                                                        textDecoration: 'none', marginTop: '2px',
                                                        width: 'fit-content',
                                                    }}
                                                >
                                                    <span style={{ fontSize: '16px' }}>💬</span> Chat on WhatsApp
                                                </a>
                                            </div>
                                        ) : msg.text}
                                    </div>
                                </div>

                                {msg.from === 'bot' && i === messages.length - 1 && (
                                    <div style={{ marginTop: '8px' }}>
                                        {!showFaqs ? (
                                            <button
                                                onClick={() => setShowFaqs(true)}
                                                style={{
                                                    background: '#EFF6FF', border: '1px solid #BFDBFE',
                                                    borderRadius: '20px', padding: '6px 14px',
                                                    fontSize: '12px', color: '#1B6CA8', cursor: 'pointer',
                                                    fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px',
                                                }}
                                            >
                                                💬 More questions?
                                            </button>
                                        ) : (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                <div style={{
                                                    fontSize: '11px', color: '#6B7280', fontWeight: 600,
                                                    marginBottom: '2px', paddingLeft: '2px',
                                                }}>
                                                    QUICK QUESTIONS
                                                </div>
                                                {faqs.map((faq, j) => (
                                                    <button key={j}
                                                        onClick={() => { handleFaq(faq); setShowFaqs(false); }}
                                                        style={{
                                                            textAlign: 'left', background: '#fff', border: '1px solid #e5e7eb',
                                                            borderRadius: '10px', padding: '7px 10px', fontSize: '12px',
                                                            color: '#1B6CA8', cursor: 'pointer', fontWeight: 500,
                                                            transition: 'background 0.15s',
                                                        }}
                                                        onMouseEnter={e => e.currentTarget.style.background = '#EFF6FF'}
                                                        onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                ))}
                                                <button
                                                    onClick={() => setShowFaqs(false)}
                                                    style={{
                                                        background: 'transparent', border: 'none',
                                                        fontSize: '11px', color: '#9CA3AF', cursor: 'pointer',
                                                        textAlign: 'left', padding: '2px 0', marginTop: '2px',
                                                    }}
                                                >
                                                    ✕ Hide questions
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>

                    {/* Input */}
                    <div style={{
                        padding: '10px 12px', borderTop: '1px solid #e5e7eb',
                        display: 'flex', gap: '8px', background: '#fff',
                    }}>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSend()}
                            placeholder="Type a question..."
                            style={{
                                flex: 1, border: '1px solid #e5e7eb', borderRadius: '8px',
                                padding: '8px 10px', fontSize: '13px', outline: 'none',
                                fontFamily: 'DM Sans, sans-serif',
                            }}
                        />
                        <button onClick={handleSend} style={{
                            background: '#1B6CA8', color: '#fff', border: 'none',
                            borderRadius: '8px', padding: '8px 12px', cursor: 'pointer',
                            fontSize: '14px',
                        }}>➤</button>
                    </div>
                </div>
            )}
        </>
    );
}