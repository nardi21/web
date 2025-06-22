<?php 
$dbhost = "localhost:3306";
$dbuser="root";
$dbpass="";
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully<br/>";








?>