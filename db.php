<?php
require "sql.php";

$sql = "CREATE DATABASE IF NOT EXISTS todo_app";
if (mysqli_query($conn, $sql)) {
    echo "Database created successfully<br/>";
} else {
    echo "Error creating database: " . mysqli_error($conn) . "<br/>";
}


?>