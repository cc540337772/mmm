
 $(function(){
     
//     var  Url =location.search;
//     if(Url!=''){
//     newUrl = Url.replace('?','');
//     var obj = newUrl.split('&');
//     var categoryid = obj[0].split('=')[1];
//     var productid = obj[1].split('=')[1];
//    }
      var url = new UrlSearch()
      var categoryid = url.categoryid;
      var productid = url.productid;
      var comments = url.comments;
      var newComments =decodeURI(comments);
      
//    渲染二级菜单
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        data:{
          categoryid:categoryid ||0,
        },
        dataType:'json',
        success:function(info){
            // console.log(info);
          $('.mmm_line').html(template('bgTpl',info))
        }
      });
    //   三级菜单渲染
      $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproduct',
        data:{
          productid:productid || 0,
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var sjfl = info.result[0].productName.split(' ')[0];
            var htmlStr = template('sjflTpl', {list:sjfl});
            console.log(htmlStr);
            $('.sjfl').html(htmlStr);
            var hstr  = template('mainTpl',info);
            $('.mmm_contain').html(hstr);
        }
      })
      // 渲染评论
      $.ajax({
        url:'http://127.0.0.1:9090/api/getproductcom',
        type:'get',
        data:{
          productid:productid ||0,
        },
        dataType:'json',
        success:function(info){
          console.log(info)
          var htmlstr = template('commentTpl',info);
          $('.pl').html(htmlstr);
          $('.pinglun').html(newComments);
        }
      })


   
 })