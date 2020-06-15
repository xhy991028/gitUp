window.onload = function(){
	$("#bC").click(function(){
	var name = $("#cName1").val();
	var money = $("#cMoney1").val();
	var gaishu = $("#cG1").val();
	var shangGo = $("#shangchaun").val();
	var imgdz= shangGo.substr(12,100);
	console.log(imgdz)
	$.ajax({
		type:"get",
		url:"../js/createdish.php",
		data:{
			name:name,
			money:money,
			gaishu:gaishu,
			shangGo:imgdz
		},
		dataType:'json',
		success:function(data){
					new $.zui.Messager('上传新品成功', {
					    icon: 'heart',
					    placement: 'top' // 定义显示位置
					}).show();
					 $("#cName1").val("");
					 $("#cMoney1").val("");
					 $("#cG1").val("");
					 $("#shangchaun").val("");
		},
		error:function(data){
			new $.zui.Messager('上传新品失败', {
					    icon: 'heart',
					    placement: 'top' // 定义显示位置
						}).show();
					 $("#cName1").val("");
					 $("#cMoney1").val("");
					 $("#cG1").val("");
					 $("#shangchaun").val("");
		}
	})
	})
}