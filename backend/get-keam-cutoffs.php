<?php
/**
 * get-keam-cutoffs.php
 *
 * Returns KEAM cutoff data from the MySQL database as JSON, shaped
 * exactly like the old static keamCutoffs.js array — so the React
 * frontend only needs to change WHERE it gets the data from (fetch
 * instead of import), not how it uses it.
 *
 * UPLOAD LOCATION: same public_html root as send-enquiry.php
 * URL: https://vidyabhyasam.com/get-keam-cutoffs.php
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://vidyabhyasam.com');

// --- Database credentials ---
// Fill these in from cPanel → MySQL Databases (see DATABASE_SETUP.md)
$DB_HOST = 'localhost';
$DB_NAME = 'vidyabhyasam';
$DB_USER = 'dbuser';   
$DB_PASS = 'Vidyabhyasam'; 

try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed.']);
    exit;
}

// Pull every row, ordered so rows for the same college/branch/round stay together
$stmt = $pdo->query("
    SELECT college_id, college_code, college_name, college_type,
           branch, year, round, category, closing_rank
    FROM keam_cutoffs
    ORDER BY college_name, branch, year, round
");
$flatRows = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Re-shape flat SQL rows back into the nested { cutoffs: {SM: ..., EZ: ...} }
// format the React predictor already expects — so KeamPredictor.jsx's
// existing matching logic keeps working unchanged.
$grouped = [];
foreach ($flatRows as $row) {
    $key = $row['college_id'] . '|' . $row['branch'] . '|' . $row['year'] . '|' . $row['round'];

    if (!isset($grouped[$key])) {
        $grouped[$key] = [
            'collegeId'   => $row['college_id'],
            'collegeCode' => $row['college_code'],
            'collegeName' => $row['college_name'],
            'collegeType' => $row['college_type'],
            'branch'      => $row['branch'],
            'year'        => (int) $row['year'],
            'round'       => $row['round'],
            'cutoffs'     => [],
        ];
    }
    $grouped[$key]['cutoffs'][$row['category']] = (int) $row['closing_rank'];
}

echo json_encode(array_values($grouped));
