<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>todo</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
<?php 
    $dbhost="localhost:3306";
    $dbuser="root";
    $dbpass="";
    $dbname="todo_app";
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully<br/>";

    if(isset($_POST['submit'])) {
        $task = $_POST['task'];
        $query = "INSERT INTO tasks (task) VALUES ('$task')";
        if (mysqli_query($conn, $query)) {
            echo "New record created successfully<br/>";
        } else {
            echo "Error: " . $query . "<br>" . mysqli_error($conn);
        }}
    
        mysqli_close($conn);
        echo "Connection closed successfully<br/>";
?>

<div class="todo-container">
    <div class="header">
    
      <h1 id="dayOfWeek"></h1>
      <p id="dateString"></p>
    </div>
    <form id="todo-form">
      <input type="text" id="newTask" placeholder="+ Add New" required />
      <button type="submit">Add</button>
    </form>
    <ul id="taskList"></ul>
  </div>
  
</body>
</html>