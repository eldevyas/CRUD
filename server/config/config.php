<?php
// Allow headers
header('Access-Control-Allow-Origin: *');

// header('Access-Control-Allow-Methods: GET, POST');

// Allow all methods to be Used
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD');


header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


require_once "./../class/crud.class.php";


$dsn = 'mysql:host=localhost;dbname=crud';
$user = 'root';
$password = '';

$CRUD = new CRUD($dsn, $user, $password);
$CRUD->Connect();


