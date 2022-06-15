<?php

// Create a new database connection
$db = new PDO('mysql:host=localhost;dbname=users', 'root', '');

// Check if the database is connected successfully

echo $db->connection_status;

