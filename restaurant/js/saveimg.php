<?php 
	header("Content-Type: text/html;charset=utf8");
	 $conn = new mysqli("localhost","root","", 'test');
  
   if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
 
 mysqli_query($conn,"set names utf8");

    $data1= $_GET['data1'];
    $imgs = $_GET['src'];
    
    $data = json_decode($data1);
    $name;
    $money;
    $num = 1;
    
         $vars = get_object_vars($data);

		foreach ($vars as $k => $v){
			if ($k=="name") {
				$name=$v;
			}

			if ($k=="money") {
				$money=$v;
			}
        }
	
    $sql = "INSERT INTO `orderdetails`(`imgs`,`name`,`num`,`money`) VALUES ('".$imgs."','". $name ."','". $num."','$" . $money . "')";

	if ($conn->query($sql) === TRUE) {
			 echo json_encode($data);
	}else{
			 echo "2";
	}
 	$conn->close();
 ?>

