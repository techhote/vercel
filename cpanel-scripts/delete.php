<?php
// Simple PHP delete script for cPanel hosting
// Place this file in your cPanel public_html directory

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Set your API key here (must match upload.php)
define('API_KEY', 'your-secure-api-key-here');

// Directory where files are stored
define('UPLOAD_DIR', __DIR__ . '/pdf-files/');

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Check API key
$apiKey = $input['api_key'] ?? '';
if ($apiKey !== API_KEY) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid API key']);
    exit;
}

// Handle file deletion
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($input['path'])) {
    $pathname = $input['path'];
    
    // Sanitize filename
    $pathname = preg_replace('/[^a-zA-Z0-9._\-\/]/', '', $pathname);
    
    $fullPath = UPLOAD_DIR . $pathname;
    
    if (file_exists($fullPath)) {
        if (unlink($fullPath)) {
            echo json_encode([
                'success' => true,
                'message' => 'File deleted'
            ]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to delete file']);
        }
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'File not found']);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'No path provided']);
}
?>
