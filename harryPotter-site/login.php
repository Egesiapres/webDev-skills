<?php

require_once('config.php');

//variabili necessarie per il log-in
$dni = $connection->real_escape_string($_POST['dni']);
$password = $connection->real_escape_string($_POST['password']);

//variabili della funzione di accesso: vanno a verificare se c'è una riga con il valore specificato
$sql_select_dni = "SELECT * FROM users WHERE DNI = '$dni'";
$sql_select_psw = "SELECT * FROM users WHERE password = '$password'";
$result_dni = $connection->query($sql_select_dni);
$result_psw = $connection->query($sql_select_psw);

//variabile che serve per l'hash della password
//$row = $result->fetch_array(MYSQLI_ASSOC);

//variabili per il cookie
$cookie_name = "welcome";
$sql_select_name = "SELECT name FROM users WHERE DNI = '$dni'";
$result_name = $connection->query($sql_select_name);
$row_name = $result_name->fetch_assoc();

$random = $_POST['dni'];

//$row_name = $result_name->num_rows == 1;
//$result1 = mysqli_query ($connection, $sql_select_name);
$cookie_value = "Welcome ". $random. "!";
setcookie ($cookie_name, $cookie_value, time() + (86400*7), "/");

if ($result_dni) {
    if ($result_dni->num_rows == 1) {
        if ($result_psw->num_rows == 1) {
            echo ("Welcome to your private area". "\n");           
        } else {
            echo ("The password is not correct");
        }
    } else {
        echo ("There are no accounts with this DNI");
    }
} else {
    echo ("Log-in error");
}

if ($result_name->num_rows == 1) {
    echo $_COOKIE['welcome'];
}

/*while ($row = $result->fetch_assoc()) {
    echo $row['classtype']."<br>";
}*/

$connection->close();

?>