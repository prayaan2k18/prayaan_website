<?php
	//$servername = "mysql.fisat.ac.in";
$servername = "localhost";
	$username = "prayaan2k18";
	$password = "#iw2BASE#";
	$database="prayaan";
	// Create connection
	$conn = new mysqli($servername, $username, $password, $database);

	// Check connection
	if ($conn->connect_error) 
	 {
	    die("Connection failed: " . $conn->connect_error);
	}
	 echo "Connected successfully";
?>