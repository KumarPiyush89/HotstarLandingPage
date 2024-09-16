<?php
// Database connection parameters
$host = 'localhost';
$db = 'postgresql'; // Replace with your database name
$user = 'postgres';        // Replace with your MySQL username
$pass = 'root';            // Replace with your MySQL password

// Create a connection to the database
$conn = new mysqli($host, $user, $pass, $db);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from the POST request
    $name = $_POST['name'];
    $description = $_POST['description'];
    $imageUrl = $_POST['imageUrl'];

    // SQL query to insert the data into the shows table
    $sql = "INSERT INTO shows (name, description, image_url, watchlist) VALUES (?, ?, ?, 0)";
    $stmt = $conn->prepare($sql);
    
    // Bind parameters (s = string)
    $stmt->bind_param("sss", $name, $description, $imageUrl);

    // Execute the query
    if ($stmt->execute()) {
        echo "Show added successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
}
$conn->close();
?>