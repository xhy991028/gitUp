window.onload = function(){

	$("#changep").click(function(){
	var username = localStorage.getItem("loginname");
	 console.log(username);

	 var oldpass = localStorage.getItem("loginpassword");
	 console.log(oldpass);

	$.ajax({
		type:'get',
		url:"../js/changePassword.php",
		data:{
			username:username,
			loginpassword:$("#password").val()
		},
		dataType:'json',
		success:function(data){
			// console.log(data)
			alert("修改成功,请重新登入")
			window.location.href = "login.html"
			localStorage.setItem("oldpass","");
		},
		error:function(data){
			console.log("重新试试")
		}
	})
	})
	 
}