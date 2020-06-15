$(function(){
	$('#regiest').click(function(){
		var username = $('#username').val();
		var password = $('#password').val();
		if (username == "" || password == "") {
			alert("请输入用户名或密码");
			username.focus(); 
			return false; 
		}else{
			$.ajax({
					type: 'get',
					url: '../js/connection.php',
					data: {username:username,password:password},
					dataType: 'json',
					success: function(data) {
						alert("注册成功,点击确认跳转登入界面");
						window.location.href="login.html";
					},
					error:function(data) {
						alert("注册失败,请重新注册");
					}
				}) 
			}
		})
	})


