<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    echo "<h3>Form Data Received:</h3>";
    echo "Username: " . htmlspecialchars($user) . "<br>";
    echo "Password: " . htmlspecialchars($pass); 
}
?>