<?php
// Simple PHP upload script for cPanel hosting
// Place this file in your cPanel public_html directory

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Set your API key here (change this to a secure random string)
define('API_KEY', 'your-secure-api-key-here');

// Directory where files will be stored
define('UPLOAD_DIR', __DIR__ . '/pdf-files/');

// Create directory if it doesn't exist
if (!file_exists(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}

// Check API key
$apiKey = $_POST['api_key'] ?? '';
if ($apiKey !== API_KEY) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid API key']);
    exit;
}

// Handle file upload
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];
    $pathname = $_POST['path'] ?? basename($file['name']);
    
    // Sanitize filename
    $pathname = preg_replace('/[^a-zA-Z0-9._\-\/]/', '', $pathname);
    
    // Create subdirectories if needed
    $fullPath = UPLOAD_DIR . $pathname;
    $directory = dirname($fullPath);
    if (!file_exists($directory)) {
        mkdir($directory, 0755, true);
    }
    
    // Move uploaded file
    if (move_uploaded_file($file['tmp_name'], $fullPath)) {
        echo json_encode([
            'success' => true,
            'url' => '/pdf-files/' . $pathname,
            'path' => $pathname
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save file']);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded']);
}
?>
