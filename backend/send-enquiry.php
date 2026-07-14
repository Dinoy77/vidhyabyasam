<?php
/**
 * send-enquiry.php
 *
 * Receives KEAM Predictor enquiry form submissions (as JSON) and emails
 * them to enquiry@vidyabhyasam.com using PHP's built-in mail() function,
 * which works out of the box on GoDaddy cPanel hosting.
 *
 * UPLOAD LOCATION:
 * Place this file in the ROOT of your website's public folder on cPanel —
 * usually public_html/ — so it is reachable at:
 *   https://vidyabhyasam.com/send-enquiry.php
 *
 * If your React build output is served from a subfolder, place it there
 * instead so the relative fetch('/send-enquiry.php') in KeamPredictor.jsx
 * resolves correctly.
 */

header('Content-Type: application/json');

// Allow requests only from your own domain (adjust if needed)
header('Access-Control-Allow-Origin: https://vidyabhyasam.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

// Read and decode the incoming JSON payload
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid submission data.']);
    exit;
}

// --- Basic sanitisation ---
function clean($value) {
    return htmlspecialchars(trim($value ?? ''), ENT_QUOTES, 'UTF-8');
}

$name            = clean($input['name'] ?? '');
$phone           = clean($input['phone'] ?? '');
$email           = clean($input['email'] ?? '');
$keamRank        = clean($input['keamRank'] ?? '');
$category        = clean($input['category'] ?? '');
$branch          = clean($input['branch'] ?? '');
$matchedColleges = clean($input['matchedColleges'] ?? '');

// --- Required field validation ---
if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name and phone number are required.']);
    exit;
}

// --- Destination email ---
$to      = 'enquiry@vidyabhyasam.com';
$subject = 'New KEAM Predictor Enquiry - ' . $name;

// --- Email body ---
$message = "
New enquiry from the KEAM College Predictor on vidyabhyasam.com

Name:            $name
Phone:           $phone
Email:           " . ($email ?: 'Not provided') . "

KEAM Rank:       $keamRank
Category:        $category
Branch:          $branch

Matched Colleges:
$matchedColleges

Submitted At: " . date('d-m-Y H:i:s') . "
";

// --- Headers ---
// IMPORTANT: The 'From' address should be a mailbox on YOUR domain
// (e.g. noreply@vidyabhyasam.com) — GoDaddy servers often reject or
// spam-flag mail claiming to be From an address they don't host.
$fromEmail = 'noreply@vidyabhyasam.com';

$headers  = "From: Vidyabhyasam Website <$fromEmail>\r\n";
$headers .= "Reply-To: " . ($email ?: $fromEmail) . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// --- Send ---
$sent = mail($to, $subject, $message, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Enquiry sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send enquiry. Please try again later.']);
}