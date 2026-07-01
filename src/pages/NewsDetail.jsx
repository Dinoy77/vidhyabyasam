import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EnquiryModal from '../components/EnquiryModal';

const newsItems = [
  {
    "id": 1, 
    "icon": "🎓", 
    "color": "#1B6CA8", 
    "bg": "#EBF5FF", 
    "tag": "Exam Alert",
    "title": "KEAM 2026 — Rank List Released; CAP Option Registration Open",
    "date": "Option Entry: Till July 4",
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80",
    "description": "CEE Kerala officially released the KEAM 2026 final rank lists for Engineering and Pharmacy on June 27, incorporating the standardized Class 12 board marks. The Centralised Allotment Process (CAP) option registration window is now active, allowing qualified candidates to log in and submit their college and course preferences.",
    "eligibility": "Candidates who scored at least 10 normalized marks in the entrance exam and completed the Plus Two marks verification",
    "applyLink": "https://cee.kerala.gov.in",
    "courses": ["B.Tech", "B.Pharm"],
    "state": "Kerala"
  },
  {
    id: 2, icon: '⚖️', color: '#7C3AED', bg: '#F5F0FF', tag: 'Results',
    title: 'CLAT 2026 — Results Out, Counselling Open',
    date: 'Counselling Live',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80',
    description: 'CLAT 2026 was conducted on December 7, 2025 in offline mode across 130+ centres. Results have been declared by the Consortium of National Law Universities. Counselling for BA LLB and BBA LLB admissions across 24 participating National Law Universities is now live.',
    eligibility: 'Passed 10+2 with minimum 45% marks. Age limit: 20 years (22 for SC/ST)',
    applyLink: 'https://www.consortiumofnlus.ac.in',
    courses: ['BA LLB', 'BBA LLB', 'LLM'],
    state: 'All India',
  },
  {
    id: 3, icon: '🏛️', color: '#059669', bg: '#ECFDF5', tag: 'Counselling',
    title: 'JoSAA 2026 — Round 1 Seat Allotment on June 13',
    date: 'Allotment: Jun 13',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80',
    description: 'JoSAA 2026 counselling registration started June 2 and choice filling is now closed. Round 1 seat allotment for IITs, NITs, IIITs and GFTIs will be announced on June 13. Round 2 on June 30, Round 3 on July 3. Total 5 rounds. Final round for IITs closes July 21, 2026.',
    eligibility: 'JEE Main 2026 or JEE Advanced 2026 qualified candidates',
    applyLink: 'https://www.josaa.nic.in',
    courses: ['B.Tech', 'B.E', 'B.Arch', 'B.Sc', 'Dual Degree'],
    state: 'All India',
  },
  {
    id: 4, icon: '📝', color: '#DC2626', bg: '#FFF0F0', tag: 'Urgent',
    title: 'NEET UG 2026 — Re-Exam Announced, City Slip Live',
    date: 'Re-Exam Soon',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
    description: 'NTA has cancelled NEET UG 2026 and announced re-examination following paper leak allegations. No fresh registration required. Full application fee will be refunded to all candidates. City allotment slip for re-exam is now live on the NTA portal.',
    eligibility: 'All candidates who registered for NEET UG 2026. Age: 17-25 years. 10+2 with PCB required',
    applyLink: 'https://www.nta.ac.in',
    courses: ['MBBS', 'BDS', 'BAMS', 'BHMS', 'BSMS'],
    state: 'All India',
  },
  {
    id: 5, icon: '🧠', color: '#E8470A', bg: '#FFF4EE', tag: 'Admission',
    title: 'NIMHANS 2026 — UG Admission Notification Out',
    date: 'Apply Now',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=400&q=80',
    description: 'NIMHANS Bangalore UG Admission 2026 notification released on June 3, 2026. Courses in psychiatric nursing and allied health sciences are offered through NIMHANS own entrance examinations. Check official website for complete eligibility criteria and important dates.',
    eligibility: 'Passed 10+2 with relevant Science subjects from a recognised board',
    applyLink: 'https://www.nimhans.ac.in',
    courses: ['B.Sc Nursing', 'Allied Health Sciences'],
    state: 'Karnataka',
  },
  {
    id: 6, icon: '🏗️', color: '#F5A623', bg: '#FFFBEB', tag: 'Exam Alert',
    title: 'NATA 2026 — Phase 1 Result Expected June 15',
    date: 'Result: Jun 15',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80',
    description: 'NATA 2026 Phase 1 exams are being conducted every Friday and Saturday from April 4 to June 13, 2026. Phase 1 result expected on June 15, 2026. Phase 2 scheduled on August 7 and 8, 2026. Qualifying cutoff is 70 out of 200 marks. Results released within 7 days of each exam.',
    eligibility: 'Passed 10+2 with Mathematics and minimum 50% aggregate marks',
    applyLink: 'https://www.nata.ac.in',
    courses: ['B.Arch'],
    state: 'All India',
  },
  {
    id: 7, icon: '🌴', color: '#1B6CA8', bg: '#EBF5FF', tag: 'Admission',
    title: 'LBS Kerala 2026 — Nursing & Paramedical Admissions Open',
    date: 'Apply Now',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80',
    description: 'LBS Centre Kerala has opened admissions for B.Sc Nursing, Paramedical and allied health courses 2026-27. No entrance exam — selection is purely merit based on Plus Two marks. Covers B.Sc Nursing, GNM, D.Pharm, Health Inspector and Paramedical diploma programmes. Minimum 50% in PCB required. Kerala domicile required.',
    eligibility: 'Passed 10+2 with Physics, Chemistry and Biology with minimum 50% marks. Kerala domicile required',
    applyLink: 'https://www.lbscentre.in',
    courses: ['B.Sc Nursing', 'GNM', 'D.Pharm', 'B.Pharm', 'Paramedical'],
    state: 'Kerala',
  },
];

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEnquiry, setShowEnquiry] = useState(false);

  const news = newsItems.find(n => n.id === parseInt(id));

  if (!news) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 24px' }}>
        <h2>Update not found</h2>
        <button onClick={() => navigate('/')} style={s.backBtn}>← Go Back</button>
      </div>
    );
  }

  return (
    <div style={s.page}>

      {/* Header */}
      <div style={{ ...s.header, background: `linear-gradient(135deg, ${news.color}, #0D1117)` }}>
        <div style={s.headerInner}>
          <button style={s.backBtn} onClick={() => navigate(-1)}>← Back</button>
          <div style={s.headerContent}>
            <span style={s.bigIcon}>{news.icon}</span>
            <div>
              <span style={s.tagPill}>{news.tag}</span>
              <h1 style={s.title}>{news.title}</h1>
              <p style={s.date}>🗓 {news.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick chips */}
      <div style={s.chipsRow}>
        <div style={{ ...s.chip, background: news.bg, color: news.color }}>
          📍 {news.state}
        </div>
        <div style={{ ...s.chip, background: '#F0FDF4', color: '#059669' }}>
          📚 {news.courses.length} Courses
        </div>
        <div style={{ ...s.chip, background: '#FFF7ED', color: '#E8470A' }}>
          🗓 {news.date}
        </div>
      </div>

      {/* Body */}
      <div style={s.body}>

        {/* About */}
        <div style={s.section}>
          <div style={{ ...s.sectionHeader, borderLeft: `4px solid ${news.color}` }}>
            <h3 style={s.sectionTitle}>About this Update</h3>
          </div>
          <p style={s.desc}>{news.description}</p>
        </div>

        {/* Eligibility */}
        <div style={s.section}>
          <div style={{ ...s.sectionHeader, borderLeft: `4px solid ${news.color}` }}>
            <h3 style={s.sectionTitle}>Eligibility</h3>
          </div>
          <div style={s.eligibilityBox}>
            <span style={{ fontSize: '20px' }}>✅</span>
            <p style={{ margin: 0, fontSize: '15px', color: 'var(--deep)', lineHeight: 1.6 }}>
              {news.eligibility}
            </p>
          </div>
        </div>

        {/* Courses */}
        <div style={s.section}>
          <div style={{ ...s.sectionHeader, borderLeft: `4px solid ${news.color}` }}>
            <h3 style={s.sectionTitle}>Relevant Courses</h3>
          </div>
          <div style={s.coursesGrid}>
            {news.courses.map(c => (
              <div key={c} style={{ ...s.courseCard, borderTop: `3px solid ${news.color}` }}>
                <span style={{ fontSize: '24px' }}>📖</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--deep)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enquire button */}
        <button
          style={{ ...s.enquireBtn, background: news.color }}
          onClick={() => setShowEnquiry(true)}
        >
          🎓 Enquire Now
        </button>

        <p style={s.disclaimer}>🔒 Your information is safe with us.</p>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <EnquiryModal
          college={{
            id: news.id,
            name: news.title,
            city: news.state,
            region: news.tag,
            type: news.tag,
            rating: '—',
            fees: '—',
            courses: news.courses,
          }}
          onClose={() => setShowEnquiry(false)}
        />
      )}
    </div>
  );
}

const s = {
  page: {
    minHeight: '100vh',
    background: '#fff',
    paddingTop: '70px',
  },
  header: {
    padding: '40px 0 50px',
  },
  headerInner: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 clamp(16px,4vw,48px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  backBtn: {
    background: 'rgba(255,255,255,0.15)',
    border: 'none', color: '#fff',
    padding: '8px 18px', borderRadius: '20px',
    cursor: 'pointer', fontSize: '13px', fontWeight: 600,
    alignSelf: 'flex-start', fontFamily: 'DM Sans, sans-serif',
  },
  headerContent: {
    display: 'flex', gap: '20px', alignItems: 'flex-start',
  },
  bigIcon: { fontSize: '56px', flexShrink: 0 },
  tagPill: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.2)',
    color: '#fff', fontSize: '11px', fontWeight: 700,
    padding: '4px 12px', borderRadius: '20px',
    letterSpacing: '1px', textTransform: 'uppercase',
    marginBottom: '10px',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(22px,4vw,36px)',
    color: '#fff', margin: '0 0 8px', lineHeight: 1.2,
  },
  date: { fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0 },

  chipsRow: {
    display: 'flex', gap: '10px', flexWrap: 'wrap',
    maxWidth: '800px', margin: '0 auto',
    padding: '20px clamp(16px,4vw,48px)',
    borderBottom: '1px solid var(--border)',
  },
  chip: {
    padding: '6px 16px', borderRadius: '20px',
    fontSize: '13px', fontWeight: 600,
  },

  body: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '32px clamp(16px,4vw,48px)',
    display: 'flex', flexDirection: 'column', gap: '32px',
  },
  section: { display: 'flex', flexDirection: 'column', gap: '14px' },
  sectionHeader: { paddingLeft: '12px' },
  sectionTitle: {
    fontSize: '13px', fontWeight: 700, color: 'var(--deep)',
    textTransform: 'uppercase', letterSpacing: '1px', margin: 0,
  },
  desc: {
    fontSize: '15px', color: '#4B5563', lineHeight: 1.8, margin: 0,
    background: 'var(--cream)', padding: '18px 20px',
    borderRadius: '12px', border: '1px solid var(--border)',
  },
  eligibilityBox: {
    display: 'flex', gap: '14px', alignItems: 'flex-start',
    background: '#F0FDF4', border: '1px solid #BBF7D0',
    borderRadius: '12px', padding: '16px 20px',
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '12px',
  },
  courseCard: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    gap: '8px', padding: '20px 12px',
    background: 'var(--cream)', borderRadius: '12px',
    border: '1px solid var(--border)', textAlign: 'center',
  },
  enquireBtn: {
    padding: '16px', borderRadius: '12px', border: 'none',
    color: '#fff', fontSize: '16px', fontWeight: 700,
    cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
    width: '100%', textAlign: 'center',
  },
  disclaimer: {
    textAlign: 'center', color: 'var(--muted)', fontSize: '13px', margin: 0,
  },
};