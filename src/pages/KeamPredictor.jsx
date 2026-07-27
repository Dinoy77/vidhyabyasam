import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfigurations } from '../data/seoData';
import { keamCutoffs, keamCategories, keamBranches } from '../data/keamCutoffs';
import KeamEnquiryModal from '../components/KeamEnquiryModal';
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

// SEO for this page now lives in the shared config: data/seoConfig.js →
// seoConfigurations.keamPredictor (title, description, keywords, url, schemaData)
const seo = seoConfigurations.keamPredictor;

// Smart prediction & search logic:
// 1. Freely allows searching by college name/code without needing a rank.
// 2. If searching by college name, shows ALL matching branches even if chance is 'Unlikely'.
// 3. If predicting solely by rank (no college name filter), hides 'Unlikely' to keep results clean.
function predictColleges(userRank, categoryCode, branch, searchTerm) {
  const hasValidRank = userRank && !isNaN(userRank) && userRank > 0;
  const hasSearchTerm = searchTerm && searchTerm.trim().length > 0;
  const query = searchTerm ? searchTerm.trim().toLowerCase() : '';

  return keamCutoffs
    .filter(c => (branch === 'All Branches' ? true : c.branch === branch))
    .filter(c => c.cutoffs[categoryCode] !== null && c.cutoffs[categoryCode] !== undefined)
    .filter(c => {
      if (!hasSearchTerm) return true;
      return (
        c.collegeName.toLowerCase().includes(query) ||
        c.collegeId.toLowerCase().includes(query) ||
        (c.collegeCode && c.collegeCode.toLowerCase().includes(query))
      );
    })
    .map(c => {
      const closingRank = c.cutoffs[categoryCode];
      let chance = 'Cutoff Data';
      let color = '#475569'; // Slate grey for neutral free-search view
      let margin = null;

      if (hasValidRank) {
        margin = closingRank - userRank;
        if (margin > 2000) { chance = 'High Chance'; color = '#059669'; }
        else if (margin >= 0) { chance = 'Moderate Chance'; color = '#D97706'; }
        else if (margin >= -1000) { chance = 'Slight Chance'; color = '#DC2626'; }
        else { chance = 'Unlikely'; color = '#94A3B8'; }
      }

      return { ...c, closingRank, margin, chance, color };
    })
    .filter(c => {
      // Always show results if user specifically searched for a college by name
      if (hasSearchTerm) return true;
      // When doing general rank prediction across the state, filter out unreachable colleges
      if (hasValidRank) return c.chance !== 'Unlikely';
      return true;
    })
    .sort((a, b) => a.closingRank - b.closingRank);
}

export default function KeamPredictor() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('SM');
  const [branch, setBranch] = useState('All Branches');
  const [collegeSearch, setCollegeSearch] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');

  // Which college's enquiry popup is currently open (null = closed)
  const [enquiryCollege, setEnquiryCollege] = useState(null);

  const results = useMemo(() => {
    if (!showResults) return [];
    return predictColleges(Number(rank), category, branch, collegeSearch);
  }, [showResults, rank, category, branch, collegeSearch]);

  // Handle Free College Name Search (Top Bar)
  const handleCollegeSearch = (e) => {
    e.preventDefault();
    if (!collegeSearch || !collegeSearch.trim()) {
      return;
    }
    setError(''); // Clear any rank validation errors since free search doesn't require rank
    setShowResults(true);
  };

  // Handle Rank-Based Prediction (Main Form)
  const handleRankSubmit = (e) => {
    e.preventDefault();
    const rankNum = Number(rank);
    if (!rank || isNaN(rankNum) || rankNum <= 0) {
      setError('Please enter a valid KEAM rank.');
      setShowResults(false);
      return;
    }
    setError('');
    setCollegeSearch(''); // 🚨 CLEARS TOP SEARCH FILTER WHEN PREDICTING BY RANK
    setShowResults(true);
  };

  return (
    <div style={styles.page}>
      {/* --- SEO (sourced from data/seoConfig.js → seoConfigurations.keamPredictor) --- */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={`https://vidyabhyasam.com${seo.url}`} />

        {/* Open Graph (Facebook/WhatsApp link previews) */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={`https://vidyabhyasam.com${seo.url}`} />
        <meta property="og:type" content="website" />

        {/* Twitter/X card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />

        {/* Structured data (JSON-LD) so search engines understand this is a free tool */}
        <script type="application/ld+json">
          {JSON.stringify(seo.schemaData)}
        </script>
      </Helmet>

      <div style={styles.hero}>
        <div style={styles.headerRow}>
          <h1 style={styles.heroTitle}>KEAM College Predictor</h1>
          
          {/* Top Bar: Free College Search without Rank */}
          <form onSubmit={handleCollegeSearch} style={styles.headerSearchForm}>
            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="🔍 Search college (e.g. TKM, CET)..."
                value={collegeSearch}
                onChange={e => setCollegeSearch(e.target.value)}
                style={styles.headerSearchInput}
                aria-label="Search college names"
              />
              {collegeSearch && (
                <button
                  type="button"
                  onClick={() => setCollegeSearch('')}
                  style={styles.clearBtn}
                  title="Clear search"
                >
                  ×
                </button>
              )}
            </div>
            <button type="submit" style={styles.headerSearchBtn}>
              Search
            </button>
          </form>
        </div>
        <p style={styles.heroSub}>
          Enter your KEAM rank to predict your admission chances, or freely search any college
          by name above to instantly inspect its official Previous Allotment cutoffs.
        </p>
      </div>

      <div style={styles.formCard}>
        <form onSubmit={handleRankSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>KEAM Rank (Optional for Search)</label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 4500"
              value={rank}
              onChange={e => setRank(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Category</label>
            <CustomSelect
              value={category}
              onChange={setCategory}
              options={keamCategories.map(c => ({ value: c.code, label: `${c.code} — ${c.label}` }))}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Branch</label>
            <CustomSelect
              value={branch}
              onChange={setBranch}
              options={['All Branches', ...keamBranches]}
            />
          </div>

          <div style={styles.buttonWrapper}>
            <button type="submit" style={styles.submitBtn}>Predict My Colleges</button>
          </div>
        </form>
        {error && <p style={styles.error}>{error}</p>}
      </div>

      {showResults && (
        <div style={styles.resultsSection}>
          <h2 style={styles.resultsTitle}>
            {results.length > 0
              ? `${results.length} course${results.length === 1 ? '' : 's'} found${collegeSearch ? ` for "${collegeSearch}"` : ''}`
              : 'No matching colleges found'}
          </h2>
          {results.length === 0 && (
            <p style={styles.noResults}>
              Try checking a different category or branch, clearing the college search term, or verify that the college offers the selected course in our database.
            </p>
          )}

          <div style={styles.grid}>
            {results.map((r, i) => (
              <div key={`${r.collegeId}-${r.branch}-${i}`} style={styles.resultCard}>
                <div style={styles.cardTop}>
                  <span style={{ ...styles.badge, background: r.color }}>{r.chance}</span>
                </div>
                <h3 style={styles.collegeName}>{r.collegeName}</h3>
                <p style={styles.branchName}>{r.branch}</p>
                <div style={styles.rankRow}>
                  <div>
                    <span style={styles.rankLabel}>Closing Rank ({category})</span>
                    <span style={styles.rankValue}>{r.closingRank.toLocaleString()}</span>
                  </div>
                </div>
                <button
                  style={styles.enquireBtn}
                  onClick={() => setEnquiryCollege(r)}
                >
                  Enquire →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={styles.disclaimer}>
        ⚠️ Predictions and cutoff data are based on the official CEE Kerala First Phase Allotment cutoffs
        for 2026. Cutoffs vary by round and year —
        later rounds (Second/Third Phase, Mop-Up) typically have lower closing ranks as more
        seats fill. Always verify with official CEE Kerala publications before making decisions.
      </div>

      {/* Per-college enquiry popup — login-gated */}
      {enquiryCollege && (
        <KeamEnquiryModal
          college={enquiryCollege}
          rank={rank}
          category={category}
          onClose={() => setEnquiryCollege(null)}
        />
      )}
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { background: '#F8FAFC', minHeight: '80vh', padding: isMobile ? '24px 16px 60px' : '40px 48px 80px', maxWidth: '1100px', margin: '0 auto' },
  
  hero: { marginBottom: '32px' },
  headerRow: { display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '14px' : '20px', marginBottom: '12px' },
  heroTitle: { fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '38px', color: '#0F172A', margin: 0 },
  
  headerSearchForm: { display: 'flex', gap: '8px', width: isMobile ? '100%' : 'auto', alignItems: 'center' },
  searchContainer: { position: 'relative', display: 'flex', alignItems: 'center', width: isMobile ? '100%' : '240px' },
  headerSearchInput: { padding: '9px 32px 9px 16px', borderRadius: '20px', border: '1.5px solid var(--border)', fontSize: '13px', fontFamily: 'DM Sans, sans-serif', background: '#fff', width: '100%', outline: 'none', transition: 'all 0.2s ease', boxShadow: '0 2px 6px rgba(0,0,0,0.03)', boxSizing: 'border-box' },
  clearBtn: { position: 'absolute', right: '10px', background: 'none', border: 'none', fontSize: '18px', color: 'var(--muted)', cursor: 'pointer', padding: '0 4px', display: 'flex', alignItems: 'center', lineHeight: 1 },
  headerSearchBtn: { padding: '9px 18px', borderRadius: '20px', border: 'none', background: '#0F172A', color: '#fff', fontWeight: 600, fontSize: '13px', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s ease' },
  
  heroSub: { color: 'var(--muted)', fontSize: '15px', maxWidth: '650px', margin: 0, lineHeight: 1.6 },

  formCard: { background: '#fff', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', padding: isMobile ? '20px' : '28px', marginBottom: '40px', boxSizing: 'border-box' },
  form: { display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', alignItems: 'flex-end' },
  field: { display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '160px' },
  label: { fontSize: '12px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.6px' },
  input: { padding: '11px 14px', borderRadius: '10px', border: '1.5px solid var(--border)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', background: '#fff', width: '100%', boxSizing: 'border-box' },
  buttonWrapper: { gridColumn: isMobile ? '1' : 'span 3', display: 'flex', justifyContent: 'flex-end', marginTop: '8px' },
  submitBtn: { padding: '12px 28px', borderRadius: '10px', border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 700, fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap', width: isMobile ? '100%' : 'auto' },
  error: { color: '#DC2626', fontSize: '13px', marginTop: '12px', marginBottom: 0 },

  resultsSection: { marginBottom: '40px' },
  resultsTitle: { fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#0F172A', marginBottom: '8px' },
  noResults: { color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 },

  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '20px', marginTop: '20px' },
  resultCard: { background: '#fff', border: '1px solid var(--border)', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '8px' },
  cardTop: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center' },
  badge: { color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' },
  collegeName: { fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#0F172A', margin: '4px 0 0' },
  branchName: { fontSize: '13px', color: 'var(--muted)', margin: 0 },
  rankRow: { display: 'flex', gap: '24px', marginTop: '8px' },
  rankLabel: { display: 'block', fontSize: '11px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px' },
  rankValue: { display: 'block', fontSize: '15px', fontWeight: 700, color: '#0F172A', marginTop: '2px' },
  enquireBtn: { marginTop: '10px', padding: '9px 14px', borderRadius: '8px', border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 700, fontSize: '13px', cursor: 'pointer' },

  disclaimer: { fontSize: '12px', color: 'var(--muted)', background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '10px', padding: '14px 18px', lineHeight: 1.6 },
});