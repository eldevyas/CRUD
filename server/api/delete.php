<?php
require_once './../config/config.php';


// Detect the request method, and if it's a POST, delete the record from the database

if (isset($_POST['id'])){
    $id = $_POST['id'];
    $CRUD->deleteUser($id);
} else {
    echo 'No request was made to delete a user!';
}