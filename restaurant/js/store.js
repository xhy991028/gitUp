window.onload = function(){
	$("#yiguanz").css("display","none");
	$("#weiguanz").click(function(){
		$("#yiguanz").css("display","block");
		$("#weiguanz").css("display","none");
				new $.zui.Messager('收藏成功', {
			    icon: 'heart',
			    placement: 'top' // 定义显示位置
			}).show();		
	})

	$("#yiguanz").click(function(){
		$("#weiguanz").css("display","block");
		$("#yiguanz").css("display","none");
		new $.zui.Messager('取消收藏', {
		    icon: 'heart',
		    placement: 'top' // 定义显示位置
		}).show();
	})	
}