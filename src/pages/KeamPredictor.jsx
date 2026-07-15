import React, { useState, useMemo, useEffect } from 'react';
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

// Core prediction logic — swap thresholds / add multi-year averaging later.
// Reads the closing rank for the selected category directly off each
// college's `cutoffs` object; skips colleges with no seat allotted in
// that category (cutoffs[category] === null) rather than guessing.
function predictColleges(userRank, categoryCode, branch) {
  return keamCutoffs
    .filter(c => (branch === 'All Branches' ? true : c.branch === branch))
    .filter(c => c.cutoffs[categoryCode] !== null && c.cutoffs[categoryCode] !== undefined)
    .map(c => {
      const closingRank = c.cutoffs[categoryCode];
      const margin = closingRank - userRank;
      let chance, color;
      if (margin > 2000) { chance = 'High Chance'; color = '#059669'; }
      else if (margin >= 0) { chance = 'Moderate Chance'; color = '#D97706'; }
      else if (margin >= -1000) { chance = 'Slight Chance'; color = '#DC2626'; }
      else { chance = 'Unlikely'; color = '#94A3B8'; }
      return { ...c, closingRank, margin, chance, color };
    })
    .filter(c => c.chance !== 'Unlikely')
    .sort((a, b) => a.closingRank - b.closingRank);
}

export default function KeamPredictor() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('SM');
  const [branch, setBranch] = useState('All Branches');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Which college's enquiry popup is currently open (null = closed)
  const [enquiryCollege, setEnquiryCollege] = useState(null);

  const results = useMemo(() => {
    if (!submitted || !rank) return [];
    return predictColleges(Number(rank), category, branch);
  }, [submitted, rank, category, branch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rankNum = Number(rank);
    if (!rank || isNaN(rankNum) || rankNum <= 0) {
      setError('Please enter a valid KEAM rank.');
      setSubmitted(false);
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>KEAM College Predictor</h1>
        <p style={styles.heroSub}>
          Enter your KEAM rank to see which engineering colleges you have a realistic
          chance of getting into, based on the 2025 First Phase Allotment cutoffs.
        </p>
      </div>

      <div style={styles.formCard}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>KEAM Rank</label>
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

          <button type="submit" style={styles.submitBtn}>Predict My Colleges</button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
      </div>

      {submitted && (
        <div style={styles.resultsSection}>
          <h2 style={styles.resultsTitle}>
            {results.length > 0
              ? `${results.length} colleges match your rank`
              : 'No matching colleges found'}
          </h2>
          {results.length === 0 && (
            <p style={styles.noResults}>
              Try a different category or branch — or your rank may be outside the range
              of colleges currently in our database (Government colleges, 4 branches only, for now).
            </p>
          )}

          <div style={styles.grid}>
            {results.map((r, i) => (
              <div key={`${r.collegeId}-${r.branch}-${i}`} style={styles.resultCard}>
                <div style={styles.cardTop}>
                  <span style={{ ...styles.badge, background: r.color }}>{r.chance}</span>
                  <span style={styles.year}>{r.year} · {r.round}</span>
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
        ⚠️ Predictions are based on the official CEE Kerala First Phase Allotment cutoffs
        for 2025 (Government colleges only, 4 branches). Cutoffs vary by round and year —
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
  hero: { textAlign: 'center', marginBottom: '32px' },
  heroTitle: { fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '38px', color: '#0F172A', margin: '0 0 12px' },
  heroSub: { color: 'var(--muted)', fontSize: '15px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 },

  formCard: { background: '#fff', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', padding: isMobile ? '20px' : '28px', marginBottom: '40px', boxSizing: 'border-box' },
  form: { display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-end' },
  field: { display: 'flex', flexDirection: 'column', gap: '6px', flex: '1 1 180px', minWidth: '160px' },
  label: { fontSize: '12px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.6px' },
  input: { padding: '11px 14px', borderRadius: '10px', border: '1.5px solid var(--border)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', background: '#fff', width: '100%', maxWidth: '100%', boxSizing: 'border-box' },
  submitBtn: { padding: '12px 24px', borderRadius: '10px', border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 700, fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap', flex: '0 0 auto' },
  error: { color: '#DC2626', fontSize: '13px', marginTop: '12px', marginBottom: 0 },

  resultsSection: { marginBottom: '40px' },
  resultsTitle: { fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#0F172A', marginBottom: '8px' },
  noResults: { color: 'var(--muted)', fontSize: '14px' },

  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '20px', marginTop: '20px' },
  resultCard: { background: '#fff', border: '1px solid var(--border)', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '8px' },
  cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  badge: { color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' },
  year: { fontSize: '11px', color: 'var(--muted)' },
  collegeName: { fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#0F172A', margin: '4px 0 0' },
  branchName: { fontSize: '13px', color: 'var(--muted)', margin: 0 },
  rankRow: { display: 'flex', gap: '24px', marginTop: '8px' },
  rankLabel: { display: 'block', fontSize: '11px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px' },
  rankValue: { display: 'block', fontSize: '15px', fontWeight: 700, color: '#0F172A', marginTop: '2px' },
  enquireBtn: { marginTop: '10px', padding: '9px 14px', borderRadius: '8px', border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 700, fontSize: '13px', cursor: 'pointer' },

  disclaimer: { fontSize: '12px', color: 'var(--muted)', background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '10px', padding: '14px 18px', lineHeight: 1.6 },
});