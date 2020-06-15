window.onload = function(){
	  $(function() {
      $("#pic").click(function() {
          $("#upload").click(); //隐藏了input:file样式后，点击头像就可以本地上传
          $("#upload").on("change", function() {
              var objUrl = getObjectURL(this.files[0]); //获取图片的路径
              console.log(objUrl);

              localStorage.setItem("objUrl",objUrl);
               var newobjUrl1 = localStorage.getItem("objUrl");
               console.log(newobjUrl1)
              if (newobjUrl1) {
                  $("#pic").attr("src", newobjUrl1); //将图片路径存入src中，显示出图片
                  upimg();
              }
          });
      });
  });
 //可存取到file的url
  function getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) { // basic
          url = window.createObjectURL(file);
      } else if (window.URL != undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
      }
      return url;

  }
  //上传头像
  function upimg() {
      console.log(344)
      var pic = $('#upload')[0].files[0];
      var file = new FormData();
      file.append('image', pic);
      $.ajax({
          url: "/newimg",
          type: "post ",
          data: file,
          cache: false,
          contentType: false,
          processData: false,
          success: function(data) {
              console.log(data);
              var res = data;
              $("#pic").append("<img src='../" + res + "'>")
          },
		       error: function (data) {
             // console.log(data);
              console.log("上传失败！");
                       }
      });
  }

function dlfile($file_url, $file_name){

  $content = file_get_contents($file_url);

  file_put_contents($file_name, $content);

}

             //用户的用户名
  var username = $.cookie('username');
  $("#user").html(" " +  username);

            //退出登入
  $("#drop_out").click(function(){
    localStorage.setItem("username","");
    window.location.href = "login.html"
  })
  $("#ret").click(function(){
     window.location.href = "dishes.html"
  })


    var mingc = localStorage.getItem('name')
    var imgs = localStorage.getItem("imgs")
    var money  = localStorage.getItem("money")
  console.log(mingc)
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

// 循环菜品，显示出来
    for (var key in newArr) {
              var tag = '<tr><td>' + newArr[key][3] +'</td><td><img src="' + newArr[key][1] + '"></td><td class="hello">'+key+'</td><td>' + newArr[key][0] + '</td><td>' + newArr[key][2] +'</td></tr>';
            $('#dingdana').append(tag);   
    }
    
    // $.ajax({
    //   type:'get',
    //   url:'../js/showall.php',
    //   data:{},
    //   dataType:'json',
    //   success:function(data){
    //     console.log(data)
    //     for (var i=0;i<data.length;i++){ 
    //        console.log(data[i].name);
    //     }
    //   },
    //   error:function(data){
    //     console.log("失败了")
    //   }
    // })
}