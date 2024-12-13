<?php
// Database connection details
$host = 'localhost';
$user = 'root';
$passwordz = 'root';


$con = new mysqli($host, $user, $passwordz);



$db = mysqli_select_db($con, 'Book_Database');


// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password']; 
}
    // Insert data into the database using a prepared statement
    $sql = "INSERT INTO User (username, email, password) VALUES ('$username', '$email', '$password')";
    $result = mysqli_query($con, $sql);

   
    
    if ($result == TRUE) {
            echo "User registered successfully.";
        } 
    else {
        echo "Error preparing statement: " . $con->error;
    }

$con->close();

?>