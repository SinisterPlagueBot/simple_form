<?php
// Replace with your server name
$servername = "localhost";

// These are the variables you provided
$username = "root";
$password = "";
$dbname = "myuserform1";

try {
    // Create a new PDO instance
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare a select statement
    $stmt = $conn->prepare("SELECT * FROM user");

    // Execute the statement
    $stmt->execute();

    // Fetch all results into an associative array
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Encode the array into a JSON string and output it
    echo json_encode($result);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>