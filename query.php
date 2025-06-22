<?php 
require "sql.php";
$sql = "SELECT id, task FROM tasks";   
mysqli_select_db($conn, "todo_app");
$result = mysqli_query($conn, $sql);

if(!$result) {
    die("Query failed: " . mysqli_error($conn));
}else{
    echo "data fetched successfully<br/>";

}
while($row = mysqli_fetch_assoc($result)) {
    echo "ID: " . $row['id'] . " - Task: " . $row['task'] . " - Created At: " . $row['created_at'] . "<br/>";
    
}
echo "data fetched successfully<br/>";
mysqli_close($conn);







?>