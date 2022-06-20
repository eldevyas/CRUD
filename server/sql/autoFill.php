<?php 

require_once "./../config/config.php";
require_once "./../class/crud.class.php";


// Handle Usernames 
$handleUsernames = fopen("data/usernames.txt", "r");

$usernames = array();

if ($handleUsernames) {
    while (($line = fgets($handleUsernames)) !== false) {
        // process the line read.
        // Push the line into the array
        array_push($usernames, $line);
    }

    fclose($handleUsernames);
} else {
    echo "Error opening the file (usernames.txt).";
} 


echo "<pre>";
print_r($usernames);
echo "</pre>";

// Handle Emails

$handleEmails = fopen("data/emails.txt", "r");


$emails = array();

if ($handleEmails) {
    while (($line = fgets($handleEmails)) !== false) {
        // process the line read.
        // Push the line into the array
        array_push($emails, $line);
    }

    fclose($handleEmails);
} else {
    echo "Error opening the file (emails.txt).";
}

// Handle Passwords

$handlePasswords = fopen("data/passwords.txt", "r");

$passwords = array();

if ($handlePasswords) {
    while (($line = fgets($handlePasswords)) !== false) {
        // process the line read.
        // Push the line into the array
        array_push($passwords, $line);
    }

    fclose($handlePasswords);
} else {
    echo "Error opening the file (passwords.txt).";
}


//