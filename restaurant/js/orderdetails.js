window.onload = function(){

		//把信息提交数据库-----------------------------------------------------
		

		$('#sub').click(function(){
			var kk = $('#kk').val();
			var rName = $('#rName1').val();
			var contact = $('#contact').val();
			var remarks = $('#remarks').val();
			
				$.ajax({
					typr:'get',
					url:'../js/orderdetails.php',
					data:{
						kk:kk,
						rName:rName,
						contact:contact,
						remarks:remarks
					},
					dataType:'json',
					success:function(data){
						console.log(data)
						window.location.href="submission.html";

					},
					error:function(data){
						alert("请完善信息")
					}

				})

				// console.log(imgs);
				// console.log(mingc);
				// console.log(money);
				$.ajax({
					type:'get',
					url:'../js/ordernew.php',
					data:{
						imgs:imgs,
						mingc:mingc,
						money:money
					},
					dataType:'json',
					success:function(res){
						console.log(res)
					},
					error:function(res){
						console.log(res)
					}
				})	


				//点击提交后信息清空
				$("#kk").val("");
				$('#rName1').val("");
			 	$('#contact').val("");
			    $('#remarks').val("");	 
	})

		// var num = 1 
		// var imgs = $.cookie("imgs");
		// var mingc = $.cookie("name");		
		// var money = $.cookie("money");

		var mingc = localStorage.getItem('name')
		var imgs = localStorage.getItem("imgs")
		var money  = localStorage.getItem("money")

		var arrimg = imgs.split(",");
		var arr = mingc.split(",");		
		var arrmoney = money.split(",");

         var newArr={};
       
        var xuhao =1;

       
       	


		for (var i=0;i<arr.length;i++){
                    
             if (newArr[arr[i]]) {
             	newArr[arr[i]][0]++;
             }else {
             	newArr[arr[i]]=[];
             	newArr[arr[i]].push(1);
             	newArr[arr[i]].push(arrimg[i]);
             	newArr[arr[i]].push(arrmoney[i]);
             	newArr[arr[i]].push(xuhao);
             	xuhao++;
             }          			
			
		}
        console.log(newArr);


		for (var key in newArr) {

              	  var tag = '<tr><td>' + newArr[key][3] +'</td><td><img src="' + newArr[key][1] + '"></td><td class="hello">'+key+'</td><td>' + newArr[key][0] + '</td><td>' + newArr[key][2] +'</td></tr>';
			      $('#nR').append(tag);		 

		}

	}