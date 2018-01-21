<?php

$servername = "localhost";
	$username = "root";
	$password = "";
	$database="prayaan";
	// Create connection
	$conn = new mysqli($servername, $username, $password, $database);
	
$stud_name = $_GET["stud_name"];
$stud_email = $_GET["stud_email"];
$contact_num = $_GET["contact_num"];
$course = $_GET["course"];
$college = $_GET["college"];
$accomadation = $_GET["accomadation"];
$food = $_GET["food"];
$coding = $_GET["coding"];
$best = $_GET["best"];
$gaming = $_GET["gaming"];
$bestteam = $_GET["bestteam"];
$mockcid = $_GET["mockcid"];
$project = $_GET["project"];
$quiz = $_GET["quiz"];
$webhunt = $_GET["webhunt"];
 $photo = $_GET["photo"];




$error = 0;

	if ( $stud_name == "") 
	{
		$error = 1;
	}

	if ( $stud_email =="" )
	{
		$error = 1;
	}

	if ( $course == "" )
	{
		$error = 1;
	}

	if ( $college = "" )
	{
		$error = 1;
	}

	if ( $contact_num=="") 
	{
		$error = 1;
	}					

	if($error == 0)
	{
	    $length = 4;
	    $characters = strtoupper($stud_name.$contact_num);
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }



	    	$pid=$randomString;
	    	// $pid = "0288";

		 $sql = "INSERT INTO student_registration (prayaan_code,stud_name,email,contact_num,stud_course,college,accomadation, food_type,coding,best_per,gaming,best_team,mock_cid,project,quiz, webhunt, photo) VALUES ('".$pid."','".$stud_name."','".$stud_email."','".$contact_num."','".$course."','".$college."','".$accomadation."','".$food."','".$coding."','".$best."','".$gaming."','".$bestteam."','".$mockcid."','".$project."','".$quiz."','".$webhunt."','".$photo."')";

		if ($conn->query($sql) === TRUE) 
		{
			// $to = $stud_email;
			// $subject = " PRAYAAN ";
			// $message = " Registration Successfully prayaan code is : '".$pid."'";
			// $headers = "MIME-Version: 1.0" . "\r\n";
			// $headers .= 'From: <prayaan2k18@gmail.com  >' . "\r\n";
			//  mail($to,$subject,$message,$headers);
  
			echo "Prayaan ID : ".$pid."Please check email and sms for further details";
		}
		else
		{
			echo "Failed.!!";
		}
	}	







?>


