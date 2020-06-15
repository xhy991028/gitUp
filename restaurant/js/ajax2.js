function ajax(obj) {
	//默认参数
	var defaults = {
		type: 'get',
		data: {},
		url: '#',
		dataType: 'text',
		async: true,
		success: function(data){}
	};

	//处理形参 传递参数就覆盖默认参数  不传递参数就使用默认参数
	for(var key in obj) {
		defaults[key] = obj[key];
	}

	//1.  创建核心对象
	var xhr = null;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject('Mircosoft.XMLHTTP');
	}

	//2.准备连接     open   请求方式     请求地址     异步请求

	//{'username':'zhangsan','age':'18'}      ===>      ulr?username=zhangsna&age=18&
	var param = '';
	for (var attr in defaults.data) {
		param += attr + '=' + defaults.data[attr] + '&';
	}
	if (param) {
		//截取字符串到最后一位
		param = param.substring(0,param.length - 1);
	}

	//处理get请求的乱码问题
	if (defaults.type == "get") {
		//data.php?username=%sad
		defaults.url += '?' + encodeURI(param);
	}
	xhr.open(defaults.type,defaults.url,defaults.async);
	//处理post请求
	var data = null;
	if(defaults.type == "post") {
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		data = param;
	}
	//处理同步请求
	if(!defaults.async) {
		return xhr.responseText;
	}


	//3.执行连接
	xhr.send(data);
	//4.回调换数
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var data = xhr.responseText;
			if (defaults.dataType == 'json') {
				data = JSON.parse(data);
				//第二种  eval 的作用是将参数中传递的字符串解析成js代码并且执行
				//data = eval('('+ data +')')；
			}
			defaults.success(data);
		}
	}
}