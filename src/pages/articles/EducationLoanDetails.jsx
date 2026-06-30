import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from  '../../firebase'
import { useAuth } from '../../context/AuthContext';
import AuthModal from '../../components/AuthModal';
import emailjs from '@emailjs/browser';

// --- CUSTOM HOOK FOR RESPONSIVENESS ---
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export default function EducationLoanDetails() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const [activeStep, setActiveStep] = useState(0);

  // --- AUTH & ENQUIRY STATE ---
  const { user } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [form, setForm] = useState({ phone: '', course: '', message: '' });

  const userName = user?.name || '';
  const userEmail = user?.email || '';

  const loanFeatures = [
    { label: "Maximum Loan Limit", value: "No upper cap. Need-based to cover actual tuition, hostel, books, and laptop expenses." },
    { label: "Collateral & Guarantor", value: "Nil. Absolutely zero collateral or third-party guarantor required for approved QHEIs." },
    { label: "Credit Guarantee", value: "75% credit guarantee provided directly by the Government of India to the bank for loans up to ₹7.5 Lakhs." },
    { label: "Margin Money", value: "0% for loans up to ₹4 Lakhs. Only 5% margin required for loans above ₹4 Lakhs." },
    { label: "Processing Fees", value: "Nil. Banks cannot levy upfront charges or processing fees under this scheme." },
  ];

  const applicationSteps = [
    { title: "Gather Documents", desc: "Collect your admission letter, detailed college fee structure, Aadhaar, PAN, and family income certificate." },
    { title: "Portal Registration", desc: "Visit pmvidyalaxmi.co.in or vidyalakshmi.co.in and complete your profile via secure Aadhaar authentication." },
    { title: "Fill CELAF", desc: "Complete the Common Education Loan Application Form. This single form submits your details to up to 3 banks simultaneously." },
    { title: "Upload & Choose Banks", desc: "Upload high-quality scans of required proofs, select your preferred lenders from the scheduled bank network, and submit." },
    { title: "Track Subvention via DBT", desc: "Upon approval, download the PM Vidyalaxmi Digital Rupee App to track your interest subsidies via direct benefit transfer." }
  ];

  const handleDownload = () => {
    const pdfUrl = '/pdf/PMVLP_Institutes.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'PM_Vidyalaxmi_Approved_Institutes_List.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const generatedRefId = `LOAN-${Date.now()}`;
      setReferenceId(generatedRefId);

      // Save to Firestore
      await addDoc(collection(db, 'enquiries'), {
        type: 'education_loan',
        name: userName,
        email: userEmail,
        phone: form.phone,
        course: form.course || '',
        message: form.message || '',
        collegeName: 'Education Loan Assistance',
        collegeId: 'EDU-LOAN',
        collegeRegion: 'All India',
        userId: user?.email || 'guest',
        referenceId: generatedRefId,
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
          college_name: 'Education Loan Support',
          course: form.course,
          message: form.message || 'Requesting Loan Assistance',
          reference_id: generatedRefId,
        },
        'QABaJcbFeXOGi0-5m'
      );

      setSubmitted(true);
    } catch (err) {
      console.error('Enquiry failed:', err);
      // Still show submitted so user isn't stuck if only email fails
      setSubmitted(true); 
    }
    
    setLoading(false);
  };

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <div style={{ ...styles.heroSection, padding: isMobile ? '60px 16px' : '80px 24px' }}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <span style={styles.badge}>FINANCIAL SUPPORT HACKS</span>
          <h1 style={{ ...styles.mainHeading, fontSize: isMobile ? '28px' : isTablet ? '38px' : '48px' }}>
            Empower Your Academic Journey with <span style={styles.highlight}>Education Loans</span>
          </h1>
          <p style={{ ...styles.heroSub, fontSize: isMobile ? '14px' : '16px' }}>
            Discover everything you need to know about collateral-free funding under the central government's flagship <strong>PM Vidyalaxmi Scheme</strong>.
          </p>
        </div>
      </div>

      {/* Main Grid Content */}
      <div style={{ 
        ...styles.contentWrapper, 
        flexDirection: isTablet ? 'column' : 'row',
        padding: isMobile ? '0 16px' : '0 24px',
        gap: isMobile ? '20px' : '32px',
        marginTop: isMobile ? '24px' : '40px'
      }}>
        
        {/* Left Interactive Column */}
        <div style={{ ...styles.leftColumn, flex: isTablet ? '1 1 100%' : '1 1 65%' }}>
          
          <section style={{ ...styles.card, padding: isMobile ? '20px' : '28px' }}>
            <h2 style={styles.sectionTitle}>💡 What is an Education Loan?</h2>
            <p style={styles.paragraph}>
              An education loan is a specialized credit facility designed to help students bridge the gap between their savings and the real cost of post-secondary higher education. It covers academic tuition fees, university housing, study materials, library deposits, and critical learning infrastructure like laptops.
            </p>
            <p style={styles.paragraph}>
              The updated <strong>Pradhan Mantri Vidyalaxmi Scheme</strong> targets exceptional students getting into India's premier Quality Higher Educational Institutions (QHEIs), ensuring no deserving student is denied higher education due to financial constraints.
            </p>
          </section>

          <section style={{ ...styles.card, padding: isMobile ? '20px' : '28px' }}>
            <h2 style={styles.sectionTitle}>💰 Scheme Limits & Highlights</h2>
            
            {isMobile ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                {loanFeatures.map((feat, index) => (
                  <div key={index} style={{
                    background: index % 2 === 0 ? '#FFFFFF' : '#F9FAFB',
                    border: '1px solid #E5E7EB',
                    borderRadius: '10px',
                    padding: '14px',
                  }}>
                    <div style={{ fontSize: '14px', color: '#111827', marginBottom: '6px' }}>
                      <strong>{feat.label}</strong>
                    </div>
                    <div style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.5' }}>
                      {feat.value}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={styles.tableResponsive}>
                <table style={styles.table}>
                  <thead>
                    <tr style={styles.thRow}>
                      <th style={styles.th}>Key Feature</th>
                      <th style={styles.th}>PM Vidyalaxmi Specifications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loanFeatures.map((feat, index) => (
                      <tr key={index} style={index % 2 === 0 ? styles.trEven : styles.trOdd}>
                        <td style={styles.tdLabel}>
                          <strong>{feat.label}</strong>
                        </td>
                        <td style={styles.tdValue}>{feat.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div style={styles.subsidyBox}>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#1E3A8A' }}>
                🔥 Interest Subsidy Advantage (During Moratorium Period):
              </p>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13px', color: '#1E40AF', lineHeight: '1.6' }}>
                <li><strong>Family Income ≤ ₹4.5 Lakhs:</strong> Full 100% interest subvention paid completely by the Central Government.</li>
                <li><strong>Family Income up to ₹8 Lakhs:</strong> 3% interest subsidy on loan accounts capped up to ₹10 Lakhs.</li>
              </ul>
            </div>
          </section>

          <section style={{ ...styles.card, padding: isMobile ? '20px' : '28px' }}>
            <h2 style={styles.sectionTitle}>📋 Eligibility & Mandatory Documentation</h2>
            <p style={styles.paragraph}>
              To qualify, you must be an Indian citizen who has cracked admission via entrance tests or merit-based metrics into designated QHEIs (IITs, IIMs, NITs, Central Universities, and Top NIRF-ranked private/state colleges). <em>Management quota seats are barred from this specific central scheme.</em>
            </p>
            
            <div style={{ ...styles.flexGrid, flexDirection: 'column' }}>
              <div style={styles.gridItem}>
                <h4 style={styles.subSubtitle}>Required Documents:</h4>
                <ul style={styles.bulletList}>
                  <li>Mandatory UID/Aadhaar & PAN card data</li>
                  <li>Academic transcripts (Grade 10 and 12 certificates)</li>
                  <li>Official entrance exam rank sheets or scorecards</li>
                  <li>Institutional Admission Confirmation / Offer letter</li>
                  <li>Itemized fee structure schedule from college registrar</li>
                  <li>Valid Income Certificate issued by authorized local authority</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ ...styles.card, padding: isMobile ? '20px' : '28px' }}>
            <h2 style={styles.sectionTitle}>⏳ Moratorium & Repayment Rules</h2>
            <p style={styles.paragraph}>
              You do not need to struggle with monthly bills right after college selection. The scheme provides a <strong>Moratorium Period</strong> (Repayment Holiday) spanning your total **Course Duration + 1 full year** (or 6 months after matching into corporate jobs, whichever timeline happens earlier).
            </p>
            <p style={styles.paragraph}>
              Post-moratorium, candidates are granted up to a comfortable **15-year window** to clean up the loan balances with flexible Equated Monthly Installments (EMIs). No prepayment penalties are levied by any system banks.
            </p>
          </section>

        </div>

        {/* Right Action Sidebar */}
        <div style={{ 
          ...styles.rightSidebar, 
          flex: isTablet ? '1 1 100%' : '1 1 35%',
          maxWidth: isTablet ? '100%' : '420px'
        }}>
          
          {/* ENQUIRY FORM WIDGET */}
          <div style={styles.enquiryCard}>
            <div style={{ marginBottom: '16px', textAlign: 'center' }}>
              <span style={{ fontSize: '28px' }}>📞</span>
              <h3 style={{ ...styles.downloadTitle, color: '#111827', marginTop: '8px' }}>
                Need Loan Assistance?
              </h3>
              <p style={{ fontSize: '13px', color: '#6B7280', margin: '4px 0 0 0' }}>
                Get expert guidance on eligibility and applying.
              </p>
            </div>
            
            {!user ? (
              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>
                  Please log in or create an account to request loan assistance.
                </p>
                <button
                  style={{ ...styles.submitBtn, background: '#111827' }}
                  onClick={() => setShowAuth(true)}
                >
                  🔓 Log In to Enquire
                </button>
              </div>
            ) : submitted ? (
              <div style={styles.successMessage}>
                <span style={{ fontSize: '32px' }}>✅</span>
                <p style={{ margin: '8px 0 4px 0', fontWeight: 700, color: '#059669', fontSize: '16px' }}>Request Received!</p>
                <p style={{ fontSize: '13px', color: '#10B981', margin: '0 0 12px 0' }}>Our counselors will contact you shortly.</p>
                <div style={{ background: '#fff', borderRadius: '8px', padding: '8px', border: '1px solid #A7F3D0' }}>
                  <span style={{ fontSize: '11px', color: '#6B7280', display: 'block' }}>Reference ID</span>
                  <strong style={{ color: '#059669', letterSpacing: '0.5px', fontSize: '14px' }}>{referenceId}</strong>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input 
                  type="tel" 
                  placeholder="Mobile Number (+91)" 
                  required 
                  style={styles.inputField}
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Desired Course (e.g. B.Tech)" 
                  required 
                  style={styles.inputField}
                  value={form.course}
                  onChange={(e) => setForm({...form, course: e.target.value})}
                />
                <textarea 
                  placeholder="Message or Questions (Optional)" 
                  style={{ ...styles.inputField, minHeight: '80px', resize: 'vertical' }}
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                />
                <button type="submit" style={styles.submitBtn} disabled={loading}>
                  {loading ? '⏳ Submitting...' : '🚀 Submit Request'}
                </button>
                <p style={{ textAlign: 'center', color: '#9CA3AF', fontSize: '11px', margin: 0 }}>
                  🔒 Your information is safe with us.
                </p>
              </form>
            )}
          </div>

          <div style={styles.downloadCard}>
            <div style={styles.downloadHeader}>
              <span style={{ fontSize: '32px' }}>📄</span>
              <h3 style={styles.downloadTitle}>Approved Institutes List</h3>
            </div>
            <p style={styles.downloadText}>
              Access the complete, updated directory of over 860+ Quality Higher Educational Institutions matching criteria for the PM Vidyalaxmi Central Scheme.
            </p>
            <button style={styles.downloadBtn} onClick={handleDownload}>
              ⬇️ Download Directory PDF
            </button>
            <span style={styles.downloadFootnote}>Format: Secure PDF Archive</span>
          </div>

          <div style={styles.stepCard}>
            <h3 style={{ ...styles.downloadTitle, color: '#111827', marginBottom: '16px' }}>
              🚀 How to Apply Electronically
            </h3>
            <div style={styles.stepTimeline}>
              {applicationSteps.map((step, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    ...styles.stepRow, 
                    opacity: activeStep === idx ? 1 : 0.85,
                    borderLeft: activeStep === idx ? '4px solid #E8470A' : '4px solid #E5E7EB',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    gap: isMobile ? '8px' : '12px'
                  }}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={styles.stepNumberBadge}>{idx + 1}</div>
                    {isMobile && <h4 style={{ ...styles.stepRowTitle, margin: 0 }}>{step.title}</h4>}
                  </div>
                  <div style={{ flex: 1 }}>
                    {!isMobile && <h4 style={styles.stepRowTitle}>{step.title}</h4>}
                    <p style={styles.stepRowDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Render Auth Modal if triggered */}
      {showAuth && (
        <AuthModal
          mode="login"
          onClose={() => setShowAuth(false)}
          onSwitch={() => {}}
        />
      )}
    </div>
  );
}

// --- STYLE DEFINITIONS ---
const styles = {
  pageContainer: {
    background: '#F9FAFB',
    fontFamily: '"DM Sans", sans-serif',
    color: '#1F2937',
    minHeight: '100vh',
    paddingBottom: '60px',
  },
  heroSection: {
    position: 'relative',
    background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
    textAlign: 'center',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at top right, rgba(232,71,10,0.15) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '800px',
    margin: '0 auto',
  },
  badge: {
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#F5A623',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  mainHeading: {
    fontFamily: '"Playfair Display", serif',
    color: '#FFFFFF',
    fontWeight: 900,
    marginTop: '16px',
    marginBottom: '16px',
    lineHeight: '1.25',
  },
  highlight: {
    color: '#E8470A',
    textShadow: '0 0 30px rgba(232,71,10,0.3)',
  },
  heroSub: {
    color: '#9CA3AF',
    lineHeight: '1.6',
    fontWeight: 400,
    margin: '0 auto',
    maxWidth: '600px',
  },
  contentWrapper: {
    display: 'flex',
    maxWidth: '1240px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%',
  },
  rightSidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%',
  },
  card: {
    background: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    border: '1px solid #F3F4F6',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#111827',
    marginTop: 0,
    marginBottom: '16px',
    borderBottom: '2px solid #F3F4F6',
    paddingBottom: '8px',
  },
  paragraph: {
    fontSize: '14px',
    lineHeight: '1.65',
    color: '#4B5563',
    marginBottom: '14px',
  },
  tableResponsive: {
    width: '100%',
    overflowX: 'auto',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    WebkitOverflowScrolling: 'touch',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    fontSize: '13px',
    minWidth: '500px',
  },
  thRow: {
    background: '#F3F4F6',
    borderBottom: '1px solid #E5E7EB',
  },
  th: {
    padding: '12px 16px',
    fontWeight: 700,
    color: '#374151',
  },
  trEven: {
    background: '#FFFFFF',
    borderBottom: '1px solid #F3F4F6',
  },
  trOdd: {
    background: '#F9FAFB',
    borderBottom: '1px solid #F3F4F6',
  },
  tdLabel: {
    padding: '12px 16px',
    color: '#111827',
    lineHeight: '1.4',
  },
  tdValue: {
    padding: '12px 16px',
    color: '#4B5563',
    lineHeight: '1.5',
  },
  subsidyBox: {
    background: '#EFF6FF',
    border: '1px solid #BFDBFE',
    borderRadius: '12px',
    padding: '16px',
    marginTop: '12px',
  },
  flexGrid: {
    display: 'flex',
    gap: '20px',
  },
  gridItem: {
    flex: 1,
  },
  subSubtitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#374151',
    margin: '0 0 10px 0',
  },
  bulletList: {
    margin: 0,
    paddingLeft: '20px',
    fontSize: '13px',
    color: '#4B5563',
    lineHeight: '1.8',
  },
  enquiryCard: {
    background: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
    border: '2px solid #FEF3C7', // Slight highlight border to draw attention
  },
  inputField: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1.5px solid #E5E7EB',
    background: '#F9FAFB',
    fontSize: '14px',
    fontFamily: '"DM Sans", sans-serif',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  },
  submitBtn: {
    width: '100%',
    padding: '14px 20px',
    background: '#E8470A',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    marginTop: '4px',
    transition: 'background 0.2s ease',
  },
  successMessage: {
    background: '#ECFDF5',
    border: '1px solid #34D399',
    borderRadius: '12px',
    padding: '24px 16px',
    textAlign: 'center',
    animation: 'fadeUp 0.3s ease',
  },
  downloadCard: {
    background: 'linear-gradient(135deg, #1B6CA8 0%, #0D4F80 100%)',
    borderRadius: '16px',
    padding: '24px',
    color: '#FFFFFF',
    boxShadow: '0 10px 25px -5px rgba(27, 108, 168, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  downloadHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
  },
  downloadTitle: {
    fontSize: '18px',
    fontWeight: 700,
    margin: 0,
  },
  downloadText: {
    fontSize: '13px',
    lineHeight: '1.6',
    color: '#E0F2FE',
    marginBottom: '20px',
  },
  downloadBtn: {
    background: '#FFFFFF',
    color: '#1B6CA8',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '10px',
    fontWeight: 700,
    fontSize: '14px',
    cursor: 'pointer',
    width: '100%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  downloadFootnote: {
    fontSize: '11px',
    color: '#BAE6FD',
    marginTop: '10px',
  },
  stepCard: {
    background: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    border: '1px solid #F3F4F6',
  },
  stepTimeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  stepRow: {
    display: 'flex',
    padding: '12px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    background: '#F9FAFB',
  },
  stepNumberBadge: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: '#E5E7EB',
    color: '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 700,
    flexShrink: 0,
  },
  stepRowTitle: {
    fontSize: '14px',
    fontWeight: 700,
    margin: '0 0 4px 0',
    color: '#111827',
  },
  stepRowDesc: {
    fontSize: '12px',
    lineHeight: '1.5',
    color: '#6B7280',
    margin: 0,
  }
};