/**
 * js-to-sql-neet.js
 *
 * Converts src/data/neetCutoffs.js into a MySQL .sql file ready to
 * import via phpMyAdmin.
 *
 * v2: now strips any `import ...` lines from the top of the file before
 * processing — so it keeps working even if the source file later adds
 * unrelated imports (icons, helper functions, etc.) that plain Node
 * can't resolve outside of a bundler like Vite.
 *
 * USAGE:
 *   1. Place this file in the SAME folder as neetCutoffs.js
 *   2. Rename it to js-to-sql-neet.cjs if your project uses
 *      "type": "module" in package.json
 *   3. From your terminal, in that folder, run:
 *        node js-to-sql-neet.cjs
 *   4. It creates neet_cutoffs.sql in the same folder.
 *   5. Import that .sql file via phpMyAdmin.
 */

const fs = require('fs');
const path = require('path');

const SOURCE_FILE = path.join(__dirname, 'neetCutoffs.js');
const OUTPUT_FILE = path.join(__dirname, 'neet_cutoffs.sql');

// --- Step 1: Load the real neetCutoffs.js as an actual JS module ---
let source = fs.readFileSync(SOURCE_FILE, 'utf8');

// Strip out any `import ... from '...';` lines — we only need the plain
// data (arrays/objects), not any UI-related imports (icons, components,
// etc.) that might get added to this file over time and that plain
// Node can't resolve outside of a bundler.
source = source.replace(/^import\s+.*from\s+.*;?\s*$/gm, '');

source = source.replace(/export const/g, 'const');
source += '\nmodule.exports = { neetCutoffs };';

const TEMP_FILE = path.join(__dirname, '__temp_neetCutoffs.cjs');
fs.writeFileSync(TEMP_FILE, source);

let neetCutoffs;
try {
  ({ neetCutoffs } = require(TEMP_FILE));
} finally {
  fs.unlinkSync(TEMP_FILE); // clean up temp file even if require() throws
}

console.log(`Loaded ${neetCutoffs.length} college/branch/quota/round rows from neetCutoffs.js`);

// --- Step 2: Flatten into one row per (college, branch, quota, round, category) ---
function escapeSql(value) {
  if (value === null || value === undefined) return 'NULL';
  return `'${String(value).replace(/'/g, "''")}'`;
}

const rows = [];
for (const item of neetCutoffs) {
  const { collegeId, collegeName, type, isDeemed, quota, branch, year, round, cutoffs } = item;
  if (!cutoffs) continue;

  for (const [category, closingRank] of Object.entries(cutoffs)) {
    if (closingRank === null || closingRank === undefined) continue;
    rows.push({
      collegeId: collegeId || null,
      collegeName,
      type: type || null,
      isDeemed: isDeemed ? 1 : 0,
      quota: quota || null,
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
let sql = `-- Auto-generated from neetCutoffs.js — do not edit by hand.
-- Re-run js-to-sql-neet.cjs after updating neetCutoffs.js to regenerate this file.

CREATE TABLE IF NOT EXISTS neet_cutoffs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  college_id VARCHAR(150),
  college_name VARCHAR(500) NOT NULL,
  type VARCHAR(50),
  is_deemed TINYINT(1) NOT NULL DEFAULT 0,
  quota VARCHAR(100),
  branch VARCHAR(50) NOT NULL,
  year INT NOT NULL,
  round VARCHAR(50) NOT NULL,
  category VARCHAR(10) NOT NULL,
  closing_rank INT NOT NULL,
  INDEX idx_branch (branch),
  INDEX idx_category (category),
  INDEX idx_year_round (year, round),
  INDEX idx_college_name (college_name(191)),
  INDEX idx_is_deemed (is_deemed)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Clear out any previous import before re-loading fresh data
TRUNCATE TABLE neet_cutoffs;

INSERT INTO neet_cutoffs
  (college_id, college_name, type, is_deemed, quota, branch, year, round, category, closing_rank)
VALUES
`;

const valueLines = rows.map(r =>
  `(${escapeSql(r.collegeId)}, ${escapeSql(r.collegeName)}, ${escapeSql(r.type)}, ${r.isDeemed}, ${escapeSql(r.quota)}, ${escapeSql(r.branch)}, ${r.year}, ${escapeSql(r.round)}, ${escapeSql(r.category)}, ${r.closingRank})`
);

sql += valueLines.join(',\n') + ';\n';

fs.writeFileSync(OUTPUT_FILE, sql);
console.log(`\n✅ Done. Wrote ${rows.length} rows to ${OUTPUT_FILE}`);
console.log('Next: import this .sql file via phpMyAdmin');