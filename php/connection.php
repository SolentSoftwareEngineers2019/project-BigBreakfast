<?php
$dbhost = 'localhost';
$dbuser = 'toby';
$dbpass = '12345';
$dbname = 'db_bb';

//connect to database
$connection = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);

// TEST DATABASE CONNECTION, (kill it if there is a problem)
if (mysqli_connect_errno()) {
	die("Database Connection failed:" . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")");
}	


?>