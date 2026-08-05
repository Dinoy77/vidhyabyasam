/**
 * js-to-sql.js
 *
 * Converts src/data/keamCutoffs.js into a MySQL .sql file ready to
 * import via phpMyAdmin.
 *
 * WHY THIS APPROACH: your dataset has thousands of rows across
 * MBBS/BDS/B.Pharm/Engineering. Hand-retyping that into SQL risks
 * transcription errors. This script instead loads your REAL js file
 * as an actual JS module (not a fragile text-parser), so it always
 * matches your source data exactly — and you can re-run it any time
 * you update keamCutoffs.js to regenerate a fresh SQL import.
 *
 * USAGE:
 *   1. Place this file in the SAME folder as keamCutoffs.js
 *      (e.g. src/data/js-to-sql.js next to src/data/keamCutoffs.js)
 *   2. From your terminal, in that folder, run:
 *        node js-to-sql.js
 *   3. It creates keam_cutoffs.sql in the same folder.
 *   4. Import that .sql file via phpMyAdmin (see DATABASE_SETUP.md).
 */

const fs = require('fs');
const path = require('path');

const SOURCE_FILE = path.join(__dirname, 'keamCutoffs.js');
const OUTPUT_FILE = path.join(__dirname, 'keam_cutoffs.sql');

// --- Step 1: Load the real keamCutoffs.js as an actual JS module ---
// (converts `export const X` -> `const X` + adds module.exports,
// then requires it — this correctly handles trailing commas, JS
// comments, etc. that a naive JSON.parse would choke on)
let source = fs.readFileSync(SOURCE_FILE, 'utf8');
source = source.replace(/export const/g, 'const');
source += '\nmodule.exports = { keamCutoffs };';

const TEMP_FILE = path.join(__dirname, '__temp_keamCutoffs.cjs');
fs.writeFileSync(TEMP_FILE, source);
const { keamCutoffs } = require(TEMP_FILE);
fs.unlinkSync(TEMP_FILE); // clean up temp file

console.log(`Loaded ${keamCutoffs.length} college/branch/round rows from keamCutoffs.js`);

// --- Step 2: Flatten into one row per (college, branch, year, round, category) ---
function escapeSql(value) {
  if (value === null || value === undefined) return 'NULL';
  return `'${String(value).replace(/'/g, "''")}'`;
}

const rows = [];
for (const item of keamCutoffs) {
  const { collegeId, collegeCode, collegeName, collegeType, year, round, branch, cutoffs } = item;
  if (!cutoffs) continue;

  for (const [category, closingRank] of Object.entries(cutoffs)) {
    if (closingRank === null || closingRank === undefined) continue; // skip "no seat allotted" — don't fabricate a rank
    rows.push({
      collegeId: collegeId || null,
      collegeCode: collegeCode || null,
      collegeName,
      collegeType: collegeType || null,
      branch,
      year,
      round,
      category,
      closingRank: Number(closingRank),
    });
  }
}

console.log(`Flattened into ${rows.length} individual cutoff rows (one per category)`);

// --- Step 3: Generate the SQL file ---
let sql = `-- Auto-generated from keamCutoffs.js — do not edit by hand.
-- Re-run js-to-sql.js after updating keamCutoffs.js to regenerate this file.

CREATE TABLE IF NOT EXISTS keam_cutoffs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  college_id VARCHAR(100),
  college_code VARCHAR(20),
  college_name VARCHAR(255) NOT NULL,
  college_type VARCHAR(50),
  branch VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  round VARCHAR(50) NOT NULL,
  category VARCHAR(5) NOT NULL,
  closing_rank INT NOT NULL,
  INDEX idx_branch (branch),
  INDEX idx_category (category),
  INDEX idx_year_round (year, round),
  INDEX idx_college_name (college_name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Clear out any previous import before re-loading fresh data
TRUNCATE TABLE keam_cutoffs;

INSERT INTO keam_cutoffs
  (college_id, college_code, college_name, college_type, branch, year, round, category, closing_rank)
VALUES
`;

const valueLines = rows.map(r =>
  `(${escapeSql(r.collegeId)}, ${escapeSql(r.collegeCode)}, ${escapeSql(r.collegeName)}, ${escapeSql(r.collegeType)}, ${escapeSql(r.branch)}, ${r.year}, ${escapeSql(r.round)}, ${escapeSql(r.category)}, ${r.closingRank})`
);

sql += valueLines.join(',\n') + ';\n';

fs.writeFileSync(OUTPUT_FILE, sql);
console.log(`\n✅ Done. Wrote ${rows.length} rows to ${OUTPUT_FILE}`);
console.log('Next: import this .sql file via phpMyAdmin (see DATABASE_SETUP.md)');