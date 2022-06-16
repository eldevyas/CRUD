<?php

require_once("./../config/config.php");



if (isset($_POST['id']) && isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password'])) {
    $id = $_POST['id'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "UPDATE users SET username = '$username', email = '$email', password = '$password' WHERE id = '$id'";
    $result = $dbh->query($sql);
    if ($result) {
        echo 'Successfully updated!';
    } else {
        echo 'Error updating!';
    }
} else {
    echo 'No requests were made to update users!';
}