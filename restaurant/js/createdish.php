<?php 
	 $conn = new mysqli("localhost","root","", 'test');
  	if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
        mysqli_query($conn,"set names utf8");

        $name = $_GET["name"];
        $money = $_GET["money"];
        $gaishu = $_GET["gaishu"];
        $shangGo = $_GET["shangGo"];

        $sql = "INSERT INTO `createdish`(`name`, `imgs`,`gaishu`,`money`) VALUES ('$name' ,'$shangGo','$gaishu','$money')";
    if ($conn->query($sql) === TRUE) {
        echo  "1";
    } else {
        echo "2";
    }
    $conn->close();
 ?>