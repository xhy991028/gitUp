	// 排列
window.onload = function(){
	 
	var username = localStorage.getItem("username");
	
	if (username == null) {
		$("#xianshi").text("请登入")
	}

	$("#xianshi").text(username);
		function GetRequest(){
			var url = location.search;
			var theRequest = new Object();

			if (url.indexOf("?") != -1){
				var str = url.substr(1);
				strs = str.split("&");
				for (var i = 0; i<strs.length;i++){
					theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
				}
			}
			return theRequest;
		}

		//用户名---------------------------------------------------------------------------------------------

		// var Request = new Object();
		// Request = GetRequest();
		// $("#xianshi").html(decodeURI(Request.code));

		var urlinfo = window.location.href;
		if ( urlinfo.split("?")[1] == undefined) {

		}else {
			var userName = urlinfo.split("?")[1].split("=")[1];
			$("#xianshi").html(decodeURI(userName)); 	
		}
		// console.log(urlinfo.split("?")[1])


		var content = document.getElementById('content');
		var items = document.getElementsByClassName('item');
		var i1 = document.getElementById('i1');

		var itemBoxW = content.offsetWidth;
		var itemW = items[0].offsetWidth;

		var column = parseInt(itemBoxW / itemW);
		var distance = (itemBoxW - itemW * column) / (column-1);
		var arr = [];

		waterFull();
		function waterFull(){
			for (var i = 0; i < items.length; i++) {
				if (i < column) {
					items[i].style.left = (itemW + distance) * i + 'px';
					arr[i] = items[i].offsetHeight;
				} else {
				var minH = getMin(arr).minH;
				var minI = getMin(arr).minI;
				items[i].style.left = (itemW + distance) * minI + 'px';
				items[i].style.top = minH + distance + 'px';
				arr[minI] = minH +distance + items[i].offsetHeight;
			}
		}
	}

		function getMin(arr){
			var obj = {};
			obj.minH = arr[0];
			obj.minI = 0;
			for (var i = 1; i<arr.length;i++){
				if(obj.minH > arr[i]){
					obj.minH = arr[i];
					obj.minI = i;
				}
			}
			return obj;
		}

		//点击按钮，显示出菜单缩略图
		$('#order').click(function(e){
			
			var xianshi1 = $("#xianshi").text();
			if (xianshi1 == "") {
				alert("请先登入,后点餐")
			}else{
				$(".thumbnail").css("display","block");
			}

		

		});

		//收回餐板
		$("#remove").click(function(){
			$(".thumbnail").css("display","none");
		})

		//点击登入进入登入界面
		var logins = document.getElementById("logins");
		logins.onclick = function(){
			 window.location.href="login.html";
		}

		//点击跳转注册界面
		var register = document.getElementById("register");
		register.onclick = function(){
			 window.location.href="regiest.html";
		}

		//跳转个人中心

		// $("#xianshi").click(function(){
		// 	window.location.href="percenter.html";
		// })

		//点击导航栏，显示对应内容

		$("#allx").click(function(){
			$(".chaocai").show();
			$(".mian").show();
			$(".liangcai").show();
			$(".drink").show();
			$(".rice").show();
			arr=[];
			waterFull();

		})

		$("#chaocai").click(function(){
			$(".chaocai").show();
			$(".mian").hide();
			$(".liangcai").hide();
			$(".drink").hide();
			$(".rice").hide();
			arr=[];
			waterFull();

		})

		$("#mian").click(function(){
			$(".mian").show();
			$(".chaocai").hide();
			$(".liangcai").hide();
			$(".drink").hide();
			$(".rice").hide();
			arr=[];
			waterFull();
		})

		$("#liangcai").click(function(){
			$(".liangcai").show();
			$(".chaocai").hide();
			$(".mian").hide();
			$(".drink").hide();
			$(".rice").hide();
			arr=[];
			waterFull();
		})

		$("#drink").click(function(){
			$(".drink").show();
			$(".chaocai").hide();
			$(".mian").hide();
			$(".liangcai").hide();
			$(".rice").hide();
			arr=[];
			waterFull();
		})

		$("#rice").click(function(){
			$(".rice").show();
			$(".chaocai").hide();
			$(".mian").hide();
			$(".liangcai").hide();
			$(".drink").hide();
			arr=[];
			waterFull();
		})

		//输入框查询搜索的菜名

		$("#submit").click(function(){
			var text = $("#inquire").val();
			if ($.trim(text) != ""){
				$("#content div").hide().find(".ab").filter(":contains('"+ text + "')").parent("div").show();
			arr=[];
			waterFull();
			}
		})

		var text = "";
		setInterval(function(){
			text = $("#inquire").val();
			if ($.trim(text) == ""){
				$('#content div').show();
				arr=[];
				waterFull();
			}
		},15)

		//个人中心用户名
		var name = $("#xianshi").text(); 
		$("#xianshi").click(function(){
			$.cookie('username',name);
			window.location.href="percenter.html";
		})


       //如果没有添加菜品不能下单
		$("#down").attr("disabled", true);
			//动态添加新的餐品
   //     	    var newtag = localStorage.getItem("newtag");
			// $("#content").append(newtag);

			//每个大图餐品
			$("#content .item").click(function(){	
			$("#down").attr("disabled", false);
			//菜单缩小界面的图
			$("this").scrollTop(100);
			var imgurl = $(this).find('img').attr('src');
			var t1 = $(this).find("p:eq(0)").text();
			var t2 = $(this).find("p:eq(2)").text();
			console.log(t1)
			console.log(t2)
			console.log(imgurl)
			var tab =  '<li class="newli"><img src="'+imgurl+'"><p>'+t1+'</p><p>'+t2+'</p></li>'
			$("#dianc").append(tab);

			//算总价
			 var price = parseInt($(this).find('p:eq(2)').text().replace(/[^0-9]/ig,""));//截取数字
		     var summ =  marr.push(price);

		     allMinMoney2 += price;
		     var newStr="￥" + allMinMoney2;
		    
		    var allmoney =  $("#money").text(newStr).text();

		    //传给全局变量
		    cname = t1;
		    dmoney = t2;
		    var uurl = urlarr.push(imgurl)//添加图片地址
  
		     //点餐图片地址
		     // imgUrl = imgurl;
		     // return imgUrl;

		});


		//取消不想点的餐品
		$("#dianc").on("click",".newli",function(){
				$(this).remove()
				var price = $(this)[0].childNodes[2].innerHTML.replace(/[^0-9]/ig,"");
				allMinMoney2 = allMinMoney2 - price;
				var allMinMoney3 = 0;
				allMinMoney3 = "￥" + allMinMoney2
				$("#money").text(allMinMoney3);
		})
	//创建新的餐品-----------------------------------------
		 $.ajax({
		 	type:"get",
		 	url:"../js/add.php",
		 	data:{},
		 	dataType:'json',
		 	success:function(data){
		 		console.log(data);
		 		for (var i=0;i<data.length;i++){
		 			var newtag = "<a href='javascript:void(0);' class='chaocai'><div class='item'><img src='../newimg/"  + data[i].imgs +  "'><p class='ab'>" + data[i].name + "</p><p> " + data[i].gaishu + "</p><p>" + data[i].money + "￥</p></div></a>"
		 			$("#content").append(newtag);
		 		}
		 			$("#content .item").unbind("click");
		 		 	$("#content .item").click(function(){	
					$("#down").attr("disabled", false);
					//菜单缩小界面的图
					
					var imgurl = $(this).find('img').attr('src');
					var t1 = $(this).find("p:eq(0)").text();
					var t2 = $(this).find("p:eq(2)").text();
					console.log(t1)
					console.log(t2)
					console.log(imgurl)
					var tab =  '<li class="newli"><img src="'+imgurl+'"><p>'+t1+'</p><p>'+t2+'</p></li>'
					$("#dianc").append(tab);

					//算总价
					 var price = parseInt($(this).find('p:eq(2)').text().replace(/[^0-9]/ig,""));//截取数字
				     var summ =  marr.push(price);

				     allMinMoney2 += price;
				     var newStr="￥" + allMinMoney2;
				    
				    var allmoney =  $("#money").text(newStr).text();

				    //传给全局变量
				    cname = t1;
				    dmoney = t2;
				    var uurl = urlarr.push(imgurl)//添加图片地址		 

		});
		 	},
		 	error:function(data){
		 		console.log("失败了");	
		 	}
		 }) 

		
		//全局变量------------------------------------------------------
		var urlarr = []
		var imgUrl;//获取图片地址
		var marr = []//定义一个空数组用来存放菜品的价格

		var allMinMoney;//菜的总价
		var allMinMoney2 = 0; // 不包含单位的总价
		var cname;//菜的名称
		var dmoney;//菜的单价
		var arrabc=[];//菜的数组
		var arrbcd=[];//钱的数组
		var alll=[];//菜和钱的数组
		var imgarr=[]//图片路径数组

		$("#down").click(function(){
			for (var i=0;i<$('#dianc li').length;i++) {
				//每个菜的名字
				var arrc = $('#dianc li:eq('+ i +')').find('p:eq(0)').text();
				arrabc.push(arrc);
				console.log(arrc);		

				//每个菜的单价
				var arrmoney = $('#dianc li:eq('+ i +')').find('p:eq(1)').text();
				arrbcd.push(arrmoney);
				console.log(arrmoney);	

				var imguu = $('#dianc li:eq('+ i +')').find('img').attr('src');
				imgarr.push(imguu)	

		} 
			console.log(imgarr);
			console.log(arrabc);
			console.log(arrbcd);

			
			//获取对应的菜名和价钱
			for (var i=0; i<arrabc.length;i++){
				var obj = {};
				obj.name = arrabc[i];
				obj.money = arrbcd[i];
				alll.push(obj);
			}
			var datas =alll; 
			console.log(datas);

			for (var i=0;i<datas.length;i++){
				var data1 = datas[i];
				var img00=imgarr[i];
				console.log(img00)
					$.ajax({
					type: 'get',
					url: '../js/saveimg.php',
					data:{
						data1:JSON.stringify(data1),
						src: img00
					},
					dataType: 'json',
					success:function(data) {
						console.log(data)
						 console.log("好了勒")
					},
					error:function(data) {
						console.log("出错哦");
					}
				})
			}	


				localStorage.setItem('name',arrabc)
				localStorage.setItem("imgs",imgarr)
				localStorage.setItem("money",arrbcd)
				localStorage.setItem("username",name)
				window.location.href="orderdetails.html";
		})	

				
	}