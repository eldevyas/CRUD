<?php 
// Get connection to database and check if it is connected successfully.
require_once './../config/config.php';


// Declaring the table to be fetched.
$table = 'users';

// Executing the query and getting the result from the database.
$result = $dbh->query("SELECT * FROM $table");

// Preparing the users array to append each row into it.
$users = array();

// Appending each row of the result to the users array.
foreach ($result as $row) { 
    array_push($users, (object)[
        'id' => $row['id'],
        'username' => $row['username'],
        'email' => $row['email'],
        'password' => $row['password']
]);
}

echo json_encode($users);