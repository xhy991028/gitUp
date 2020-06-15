window.onload = function(){
		$('#go').click(function(){
		var username = $('#username').val();
		var password = $('#password').val();
		save_cookies();
				$.ajax({
					type: 'get',
					url: '../js/login.php',
					data: {username:username,password:password},
					dataType: 'json',
					success: function(data) {
						if (data==1){
							alert("登入成功");
							window.location.href="dishes.html?code=" + encodeURI(username);
							// var url = "dishes.html"; 
							// window.open(encodeURI(url + "?code=" + username));

						}else{
							alert("登入失败,请检查账号或者密码");
						}	
					},
					error:function(data) {
						alert("服务器错误");
					}
				}) 
//----------------记住密码//----------------
		function save_cookies(){
            if($("#rempass").prop("checked")){
                var username = $("#username").val();
                var password = $("#password").val();

                $.cookie("remember","true",{expires:7});
                $.cookie("username",username,{expires:7 });
                $.cookie("password",password,{expires:7 });
            }else{
                $.cookie("remember","false",{expires:-1});
                $.cookie("usernamxe","",{ expires:-1 });
                $.cookie("password","",{ expires:-1 });
            }
        };

	})

// 注册界面
	$('#register').click(function(){
	window.location.href="regiest.html";
	})
//点击跳转修改密码
	$("#changePassword").click(function(){
		window.location.href = "changePassword.html"
	})

	//登入界面的用户名
	var loginname = $("#username").val();
	var loginpassword = $("#password").val();
	localStorage.setItem("loginname",loginname)
	localStorage.setItem("loginpassword",loginpassword)
}

