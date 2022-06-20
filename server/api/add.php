<?php

require_once "./../config/config.php";


//Get user data from the post request json object and store it in variables

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $CRUD->addUser($username, $email, $password);
} else {
    die("Error: Missing data in the post request");
}

