<?php
  // header("Content-type:text/html;charset=utf-8");
  $conn = new mysqli("localhost","root","", 'test');
  if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
 mysqli_query($conn,"set names utf8");

    $usern = $_GET['username'];
    $passw = $_GET['password'];
    $sql = "INSERT INTO `regiest`(`username`, `password`) VALUES ('$usern' ,'$passw')";
    if ($conn->query($sql) === TRUE) {
        echo "1";
    } else {
        echo "2";
    }
    $conn->close();
?>