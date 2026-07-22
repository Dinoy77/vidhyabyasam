// src/pages/NeetPredictor.jsx
import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfigurations } from '../data/seoData';
import {
  neetCutoffs,
  neetCategories,
  neetBranches,
  deemedFilterOptions,
  isDeemedCollege
} from '../data/neetCutoffs';
import NeetEnquiryModal from '../components/NeetEnquiryModal';
import CustomSelect from '../components/CustomSelect';

function useResponsive() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width < 768;
}

// SEO configuration sourced from your shared config
const seo = seoConfigurations?.neetPredictor || {
  title: 'NEET UG College Predictor 2026 | Medical & Dental Cutoffs — Vidyabhyasam',
  description: 'Predict your admission chances in AIIMS, JIPMER, State Govt, and Deemed Medical & Dental colleges based on your NEET All India Rank (AIR).',
  keywords: 'NEET college predictor, NEET UG cutoffs, AIIMS closing rank, MBBS predictor, BDS predictor, MCC counseling',
  url: '/neet-college-predictor',
  schemaData: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'NEET UG College Predictor',
    'url': 'https://vidyabhyasam.com/neet-college-predictor',
    'applicationCategory': 'EducationalApplication',
    'operatingSystem': 'All'
  }
};

/**
 * Core NEET prediction logic with dynamic eligibility margin & chance indicators.
 */
function predictNeetColleges(userRank, categoryCode, branch, deemedOption) {
  return neetCutoffs
    .filter(c => {
      // 1. Deemed / Non-Deemed Institution Filter
      if (deemedOption === 'DEEMED' && !c.isDeemed) return false;
      if (deemedOption === 'NON_DEEMED' && c.isDeemed) return false;

      // 2. Branch / Course Filter
      if (branch !== 'All Courses' && branch !== 'ALL' && c.branch !== branch) return false;

      // 3. Category cutoff exists check
      const closingRank = c.cutoffs[categoryCode];
      return closingRank !== null && closingRank !== undefined;
    })
    .map(c => {
      const closingRank = c.cutoffs[categoryCode];
      const margin = closingRank - userRank;
      let chance, color;
      
      if (margin > 3000) { chance = 'High Chance'; color = '#059669'; }
      else if (margin >= 0) { chance = 'Moderate Chance'; color = '#D97706'; }
      else if (margin >= -1500) { chance = 'Slight Chance'; color = '#DC2626'; }
      else { chance = 'Unlikely'; color = '#94A3B8'; }
      
      return { ...c, closingRank, margin, chance, color };
    })
    .filter(c => c.chance !== 'Unlikely')
    .sort((a, b) => a.closingRank - b.closingRank);
}

export default function NeetPredictor() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('UR');
  const [branch, setBranch] = useState('All Courses');
  const [deemedOption, setDeemedOption] = useState('ALL');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Per-college enquiry modal state
  const [enquiryCollege, setEnquiryCollege] = useState(null);

  const results = useMemo(() => {
    if (!submitted || !rank) return [];
    return predictNeetColleges(Number(rank), category, branch, deemedOption);
  }, [submitted, rank, category, branch, deemedOption]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rankNum = Number(rank);
    if (!rank || isNaN(rankNum) || rankNum <= 0) {
      setError('Please enter a valid NEET All India Rank (AIR).');
      setSubmitted(false);
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div style={styles.page}>
      {/* --- SEO Metadata --- */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={`https://vidyabhyasam.com${seo.url}`} />

        {/* Open Graph / Social Previews */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={`https://vidyabhyasam.com${seo.url}`} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(seo.schemaData)}
        </script>
      </Helmet>

      {/* Hero Banner */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>NEET UG College Predictor</h1>
        <p style={styles.heroSub}>
          Enter your All India Rank (AIR) to discover eligible Medical & Dental colleges 
          across AIQ, State Quotas, Central Institutes, and Deemed Universities.
        </p>
      </div>

      {/* Filter Form Card */}
      <div style={styles.formCard}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>NEET Rank (AIR)</label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 12500"
              value={rank}
              onChange={e => setRank(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Institution Type</label>
            <CustomSelect
              value={deemedOption}
              onChange={setDeemedOption}
              options={deemedFilterOptions}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Category</label>
            <CustomSelect
              value={category}
              onChange={setCategory}
              options={neetCategories.map(c => ({ value: c.code, label: `${c.code} — ${c.label}` }))}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Course / Branch</label>
            <CustomSelect
              value={branch}
              onChange={setBranch}
              options={['All Courses', ...neetBranches]}
            />
          </div>

          <button type="submit" style={styles.submitBtn}>Predict My Colleges</button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
      </div>

      {/* Results Display */}
      {submitted && (
        <div style={styles.resultsSection}>
          <h2 style={styles.resultsTitle}>
            {results.length > 0
              ? `${results.length} colleges match your rank`
              : 'No matching colleges found'}
          </h2>
          {results.length === 0 && (
            <p style={styles.noResults}>
              No eligible colleges match your rank under the selected criteria. Try switching 
              categories, changing institution types, or selecting "All Courses" to widen your search.
            </p>
          )}

          <div style={styles.grid}>
            {results.map((r, i) => {
              const isDeemed = isDeemedCollege(r.type);
              return (
                <div key={`${r.collegeId}-${r.branch}-${i}`} style={styles.resultCard}>
                  <div style={styles.cardTop}>
                    <span style={{ ...styles.badge, background: r.color }}>{r.chance}</span>
                    <span style={isDeemed ? styles.badgeDeemed : styles.badgeGovt}>
                      {r.type}
                    </span>
                  </div>

                  <h3 style={styles.collegeName}>{r.collegeName}</h3>
                  <p style={styles.branchName}>
                    {r.branch} · <span style={{ color: '#475569' }}>{r.quota}</span>
                  </p>

                  <div style={styles.rankRow}>
                    <div>
                      <span style={styles.rankLabel}>Closing Rank ({category})</span>
                      <span style={styles.rankValue}>{r.closingRank.toLocaleString()}</span>
                    </div>
                    <div>
                      <span style={styles.rankLabel}>Round / Year</span>
                      <span style={styles.subText}>{r.round} ({r.year})</span>
                    </div>
                  </div>

                  <button
                    style={styles.enquireBtn}
                    onClick={() => setEnquiryCollege(r)}
                  >
                    Enquire →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Disclaimer Box */}
      <div style={styles.disclaimer}>
        ⚠️ Cutoffs displayed are derived from the official MCC and State Medical Counseling 
        Round 1 allotment data. Opening and closing ranks fluctuate across counseling rounds 
        (Round 2, Mop-Up, and Stray Vacancy). Always cross-reference with official MCC publications 
        before finalizing your option entry form.
      </div>

      {/* Per-college enquiry modal */}
      {enquiryCollege && (
        <NeetEnquiryModal
          college={enquiryCollege}
          rank={rank}
          category={category}
          onClose={() => setEnquiryCollege(null)}
        />
      )}
    </div>
  );
}

// Standardized Styles matching the KEAM Predictor theme
const getStyles = (isMobile) => ({
  page: { 
    background: '#F8FAFC', 
    minHeight: '80vh', 
    padding: isMobile ? '24px 16px 60px' : '40px 48px 80px', 
    maxWidth: '1100px', 
    margin: '0 auto' 
  },
  hero: { 
    textAlign: 'center', 
    marginBottom: '32px' 
  },
  heroTitle: { 
    fontFamily: 'Playfair Display, serif', 
    fontSize: isMobile ? '28px' : '38px', 
    color: '#0F172A', 
    margin: '0 0 12px' 
  },
  heroSub: { 
    color: 'var(--muted, #64748B)', 
    fontSize: '15px', 
    maxWidth: '650px', 
    margin: '0 auto', 
    lineHeight: 1.6 
  },

  formCard: { 
    background: '#fff', 
    borderRadius: '16px', 
    border: '1px solid var(--border, #E2E8F0)', 
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)', 
    padding: isMobile ? '20px' : '28px', 
    marginBottom: '40px', 
    boxSizing: 'border-box' 
  },
  form: { 
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: '16px', 
    alignItems: 'flex-end' 
  },
  field: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '6px', 
    flex: '1 1 180px', 
    minWidth: '160px' 
  },
  label: { 
    fontSize: '12px', 
    fontWeight: 700, 
    color: 'var(--muted, #64748B)', 
    textTransform: 'uppercase', 
    letterSpacing: '0.6px' 
  },
  input: { 
    padding: '11px 14px', 
    borderRadius: '10px', 
    border: '1.5px solid var(--border, #CBD5E1)', 
    fontSize: '14px', 
    fontFamily: 'DM Sans, sans-serif', 
    background: '#fff', 
    width: '100%', 
    maxWidth: '100%', 
    boxSizing: 'border-box',
    outline: 'none'
  },
  submitBtn: { 
    padding: '12px 24px', 
    borderRadius: '10px', 
    border: 'none', 
    background: 'var(--accent, #2563EB)', 
    color: '#fff', 
    fontWeight: 700, 
    fontSize: '14px', 
    cursor: 'pointer', 
    whiteSpace: 'nowrap', 
    flex: '0 0 auto' 
  },
  error: { 
    color: '#DC2626', 
    fontSize: '13px', 
    marginTop: '12px', 
    marginBottom: 0 
  },

  resultsSection: { 
    marginBottom: '40px' 
  },
  resultsTitle: { 
    fontFamily: 'Playfair Display, serif', 
    fontSize: '22px', 
    color: '#0F172A', 
    marginBottom: '8px' 
  },
  noResults: { 
    color: 'var(--muted, #64748B)', 
    fontSize: '14px',
    lineHeight: 1.5 
  },

  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 310px), 1fr))', 
    gap: '20px', 
    marginTop: '20px' 
  },
  resultCard: { 
    background: '#fff', 
    border: '1px solid var(--border, #E2E8F0)', 
    borderRadius: '14px', 
    padding: '18px', 
    boxShadow: '0 2px 12px rgba(0,0,0,0.04)', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '8px' 
  },
  cardTop: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  badge: { 
    color: '#fff', 
    fontSize: '11px', 
    fontWeight: 700, 
    padding: '4px 10px', 
    borderRadius: '20px' 
  },
  badgeGovt: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#065F46',
    backgroundColor: '#D1FAE5',
    border: '1px solid #A7F3D0',
    padding: '2px 8px',
    borderRadius: '12px'
  },
  badgeDeemed: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#6B21A8',
    backgroundColor: '#F3E8FF',
    border: '1px solid #E9D5FF',
    padding: '2px 8px',
    borderRadius: '12px'
  },
  collegeName: { 
    fontFamily: 'Playfair Display, serif', 
    fontSize: '16px', 
    color: '#0F172A', 
    margin: '4px 0 0',
    lineHeight: 1.35
  },
  branchName: { 
    fontSize: '13px', 
    color: 'var(--muted, #64748B)', 
    margin: 0 
  },
  rankRow: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'baseline', 
    gap: '16px', 
    marginTop: '8px' 
  },
  rankLabel: { 
    display: 'block', 
    fontSize: '11px', 
    color: 'var(--muted, #64748B)', 
    fontWeight: 600, 
    textTransform: 'uppercase', 
    letterSpacing: '0.4px' 
  },
  rankValue: { 
    display: 'block', 
    fontSize: '16px', 
    fontWeight: 700, 
    color: '#0F172A', 
    marginTop: '2px' 
  },
  subText: {
    display: 'block',
    fontSize: '13px',
    color: '#475569',
    marginTop: '2px'
  },
  enquireBtn: { 
    marginTop: '10px', 
    padding: '9px 14px', 
    borderRadius: '8px', 
    border: 'none', 
    background: 'var(--accent, #2563EB)', 
    color: '#fff', 
    fontWeight: 700, 
    fontSize: '13px', 
    cursor: 'pointer' 
  },

  disclaimer: { 
    fontSize: '12px', 
    color: '#92400E', 
    background: '#FFFBEB', 
    border: '1px solid #FDE68A', 
    borderRadius: '10px', 
    padding: '14px 18px', 
    lineHeight: 1.6 
  },
});