<?php

require_once("./../config/config.php");



if (isset($_POST['id']) && isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password'])) {
    $id = $_POST['id'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $data = array(
        'id' => $id,
        'username' => $username,
        'email' => $email,
        'password' => $password
    );

    $CRUD->updateUser($id, $data);
} else {
    echo 'No requests were made to update users!';
}