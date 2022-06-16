<?php
require_once './../config/config.php';


// Detect the request method, and if it's a POST, delete the record from the database

if (isset($_POST['id'])){
    $id = $_POST['id'];
    $sql = "DELETE FROM users WHERE id = '$id'";
    $result = $dbh->query($sql);
    if ($result) {
        echo 'Successfully updated!';
    } else {
        echo 'Error updating!';
    }
} else {
    echo 'No requests were made to delete users!';
}