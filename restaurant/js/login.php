<?php 
	 $conn = new mysqli("localhost","root","", 'test');
  	if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
        mysqli_query($conn,"set names utf8");
    $usern = $_GET['username'];
    $passw = $_GET['password'];
    $sql = "SELECT * FROM `regiest` where username = '".$usern."' and password = '".$passw."' ";

    $result = $conn->query($sql);
    if (mysqli_num_rows($result) > 0) {
    // 输出数据
    while($row = mysqli_fetch_assoc($result)) {
        echo "1";
   		 }
	} else {
   	    echo "0";
	}
    $conn->close();    
 ?>