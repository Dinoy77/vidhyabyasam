import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EnquiryModal from '../components/EnquiryModal';

const newsItems = [
  {
    id: 1, icon: '📝', color: '#1B6CA8', bg: '#EBF5FF', tag: 'Exam Alert',
    title: 'KEAM 2026 Registration Open', date: 'Deadline: Mar 15',
    description: 'Kerala Engineering Architecture Medical (KEAM) 2026 registration is now open. Students seeking admission to Engineering and Pharmacy courses in Kerala must apply before the deadline.',
    eligibility: 'Passed 10+2 with Physics, Chemistry and Mathematics/Biology',
    courses: ['B.Pharm', 'M.Pharm', 'B.Tech'],
    state: 'Kerala',
  },
  {
    id: 2, icon: '🏥', color: '#DC2626', bg: '#FFF0F0', tag: 'Exam Alert',
    title: 'NEET UG 2026 — Apply Now', date: 'Deadline: Mar 9',
    description: 'National Eligibility cum Entrance Test (NEET UG) 2026 applications are now live. This is the gateway for MBBS, BDS, and AYUSH admissions across India.',
    eligibility: 'Passed 10+2 with Physics, Chemistry and Biology with minimum 50%',
    courses: ['MBBS', 'BDS', 'BAMS'],
    state: 'All India',
  },
  {
    id: 3, icon: '🎓', color: '#7C3AED', bg: '#F5F0FF', tag: 'Admission',
    title: 'KCET 2026 Applications Live', date: 'Deadline: Mar 20',
    description: 'Karnataka Common Entrance Test (KCET) 2026 applications are live for Engineering, Pharmacy, and other professional courses in Karnataka colleges.',
    eligibility: 'Passed 10+2 with relevant subjects from Karnataka',
    courses: ['B.Pharm', 'B.Tech', 'MBBS'],
    state: 'Karnataka',
  },
  {
    id: 4, icon: '💊', color: '#059669', bg: '#ECFDF5', tag: 'Results',
    title: 'GPAT 2026 Results Declared', date: 'Today',
    description: 'Graduate Pharmacy Aptitude Test (GPAT) 2026 results have been officially declared by NTA. Candidates can now check their scores and ranks on the official portal.',
    eligibility: 'B.Pharm graduates',
    courses: ['M.Pharm'],
    state: 'All India',
  },
  {
    id: 5, icon: '📋', color: '#E8470A', bg: '#FFF4EE', tag: 'Admission',
    title: 'TANCET 2026 Notification Released', date: 'Deadline: Feb 28',
    description: 'Tamil Nadu Common Entrance Test (TANCET) 2026 official notification has been released for MBA, MCA, M.Tech, M.Arch and M.Plan admissions in Tamil Nadu.',
    eligibility: 'Relevant undergraduate degree with minimum 50%',
    courses: ['MBA', 'MCA', 'M.Tech'],
    state: 'Tamil Nadu',
  },
  {
    id: 6, icon: '🌴', color: '#1B6CA8', bg: '#EBF5FF', tag: 'News',
    title: 'Kerala Pharmacy Admissions 2026', date: '2 days ago',
    description: 'Kerala University of Health Sciences has announced centralized allotment process for B.Pharm and D.Pharm admissions 2026 across all pharmacy colleges in Kerala.',
    eligibility: 'Passed 10+2 with Physics, Chemistry and Biology/Mathematics',
    courses: ['B.Pharm', 'D.Pharm'],
    state: 'Kerala',
  },
  {
    id: 7, icon: '🏆', color: '#F5A623', bg: '#FFFBEB', tag: 'Scholarship',
    title: 'National Merit Scholarship Open', date: 'Deadline: Apr 1',
    description: 'National Merit Scholarship applications are open for health science students. Students pursuing medical, pharmacy, and nursing courses can apply for up to ₹50,000 per year.',
    eligibility: 'Students with above 80% in 10+2 and enrolled in health science courses',
    courses: ['B.Pharm', 'B.Sc Nursing', 'MBBS', 'BPT'],
    state: 'All India',
  },
  {
    id: 8, icon: '🔬', color: '#7C3AED', bg: '#F5F0FF', tag: 'News',
    title: 'New Allied Health Courses 2026', date: '3 days ago',
    description: 'Several colleges in Bangalore and Tamil Nadu are introducing new Allied Health Science specializations for 2026. These include Medical Lab Technology, Cardiac Care, and Neuroscience Technology.',
    eligibility: 'Passed 10+2 with Science subjects',
    courses: ['MLT', 'BPT', 'BHA'],
    state: 'Bangalore & Tamil Nadu',
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