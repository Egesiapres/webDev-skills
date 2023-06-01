<?php

require_once('config.php');

//può essere ottimizzato con prepared
//POST è un metodo che manda i dati tenendolioscurati, o qualcosa di simile
$name = $connection->real_escape_string($_POST['name']);
$surname = $connection->real_escape_string($_POST['surname']);
$dni = $connection->real_escape_string($_POST['dni']);
$birthday = $connection->real_escape_string($_POST['bday']);
$email = $connection->real_escape_string($_POST['email']);
$password = $connection->real_escape_string($_POST['password']);
$address = $connection->real_escape_string($_POST['address']);
$zip = $connection->real_escape_string($_POST['zip']);
$telephone = $connection->real_escape_string($_POST['phone']);

//la password può essere hashata (in phpmyadmin viene nascosta)
//$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (name, surname, DNI, birthday, email, password, address, zip, phone) 
        VALUES ('$name', '$surname', '$dni', '$birthday', '$email', '$password', '$address', '$zip', '$telephone')";      
if ($connection->query($sql) === true){
    echo "User registered correctly";
} else {
    echo "An error occurred during the registration process: $sql. " . $connection->error;
}

?>