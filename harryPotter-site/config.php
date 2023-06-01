<?php

/*connessione procedurale

$connection = mysqli_connect("127.0.0.1", "root", "", "hpIn2mins")
    or die ("Connection unsuccesfull");

*/

$host = "127.0.0.1";
$user = "root";
$password = "";
$db = "hpIn2mins";

$connection = new mysqli ($host, $user, $password, $db);

if ($connection === false){
    die ("Connection error: " . $connection->connect_error); 
}

?>