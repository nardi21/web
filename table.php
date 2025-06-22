<?php 
require "sql.php";
$sql = "CREATE TABLE tasks (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
)";
 mysqli_select_db($conn, "todo_app");
 $qur = mysqli_query($conn, $sql);
 if (!$qur) {
        die("Error creating table: " . mysqli_error($conn));
    } else {
        echo "Table created successfully<br/>";

 }
mysqli_close(mysql: $conn);


?>