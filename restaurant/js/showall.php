 <?php 
	 $conn = new mysqli("localhost","root","", 'test');
  	if ($conn->connect_error) {
        die("连接失败："+$conn->connect_error);
    }
        mysqli_query($conn,"set names utf8");

       $sql = "SELECT * FROM `ordernew`";
        $result = mysqli_query($conn,$sql);
		$data = array();
		while ($rows= mysqli_fetch_assoc($result)){
	 		$data[] = $rows;
		}
	echo json_encode($data);
    mysqli_close($conn);

 ?>