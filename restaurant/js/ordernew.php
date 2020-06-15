<?php 
			header("Content-Type: text/html;charset=utf8");

		$conn = new mysqli("localhost","root","", 'test');


		if ($conn->connect_error) {
		    die("连接失败: " . $conn->connect_error);
		} 
		mysqli_query($conn,"set names utf8");	

		$imgs = $_GET["imgs"];
		$mingc = $_GET["mingc"];
		$money = $_GET["money"];
		$num =1 ;
		echo gettype($num);


		 $sql = "INSERT INTO `ordernew`(`imgs`,`name`,`num`,`money`) VALUES ('".$imgs."','". $mingc ."','" . $num .  "','" . $money ."')";

		  if ($conn->query($sql) === TRUE) {
	 			
			 echo "1";
	}else{

			 echo "2";
	}
		$conn->close();
 ?>