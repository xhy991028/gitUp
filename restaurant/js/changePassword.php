<?php
header("Content-Type: text/html;charset=utf8");
	 $conn = new mysqli("localhost","root","", 'test');
  	if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
      mysqli_query($conn,"set names utf8");

	$username=$_GET["username"];
	$loginpassword=$_GET["loginpassword"];
	$sql1 = 'SELECT password from regiest where username="'.$username.'"';

	$result1 = $conn->query($sql1);


	$res= mysqli_num_rows($result1);

	if($res == 0){
		echo "0";
	}else{
		$sql = 'UPDATE regiest SET `password`="'.$loginpassword.'" where username="'.$username.'"';
		$result = $conn->query($sql);
		echo $result;
	}
	mysqli_close($conn);
?>