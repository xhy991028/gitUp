<?php 
header("Content-Type: text/html;charset=utf8");

$conn = new mysqli("localhost","root","", 'test');


if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
mysqli_query($conn,"set names utf8");
// $nihao = $_GET['nihao'];
//查询数据库内容
// $sql = "SELECT imgs, name,money FROM orderdetails";
// $result = $conn->query($sql);
 
// if ($result->num_rows > 0) {
//     // 输出数据
//     while($row = $result->fetch_assoc()) {
//         echo "imgs: " . $row["imgs"]. "name: " . $row["name"]. "money " . $row["money"]. "<br>";
//     }
// } else {
//     echo "0 结果";
// }



//添加信息

	$kk = $_GET['kk'];
	$rName = $_GET['rName'];
	$contact = $_GET['contact'];
	$remarks = $_GET['remarks'];

	

		if ($kk == "" || $rName == "" || $contact == "") {
			echo "请完善信息";
		}else{
			 $sql = "INSERT INTO `information`(`address`,`name`,`contact`,`remark`) VALUES ('".$kk."','". $rName ."','" . $contact.  "','" . $remarks ."')";

	  if ($conn->query($sql) === TRUE) {
	 			
			 echo "1";
	}else{

			 echo "2";
	}

}
	$conn->close();
 ?>