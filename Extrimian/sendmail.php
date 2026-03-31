<?php
$mail='info@extrimian.com';
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$company = $_POST['company'];
$message = $_POST['message'];
$headers1 .= "MIME-Version: 1.0\r\n"; 
$headers1 .= "Content-type: text/html; charset=utf-8\r\n"; 
$headers1 .= "From: Extrimian\r\n"; 
$headers1 .= "Reply-To: ". $email . "\r\n"; 
$content = "
Contact From Extrimian Website <br><br>
Name: ".$name." <br><br>
Surname: ".$surname." <br><br>
Email: ".$email." <br><br>
Company: ".$company." <br><br>
Message:".$message.""; 
if (mail($mail,"Contact From Extrimian Web Form",$content,$headers1))
	?>