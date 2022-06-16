<?php
// Allow headers

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");


// Create a new database connection
$dsn = 'mysql:host=localhost;dbname=crud';
$user = 'root';
$password = '';


// Connect & Check if the database is connected successfully
try {
    $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

// Get data from MySQL users table and display it in a table with the specified columns


