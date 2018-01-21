<?php
	//$servername = "mysql.fisat.ac.in";
$servername = "localhost";
	$username = "fisataci_prayaan";
	$password = "V+AkSu&Df)sD";
	$database="fisataci_prayaan";
	// Create connection
	$conn = new mysqli($servername, $username, $password, $database);
	 // $var="CREATE TABLE demo (name varchar(20),age int)";
	 
	 // if(mysqli_query($conn,$var))
	 // echo "table created";
	 // else
	 // echo"error";


	$r=mysqli_query($conn,"desc demo");
	 while ($ro=mysqli_fetch_row($r)) {
	 	echo ($ro[0].$ro[1]);
	 	
	 }
?>