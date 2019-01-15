

 $(function(){


    render();
   function render(){
//    产品栏渲染
  
    $.ajax({
      url:'http://127.0.0.1:9090/api/getmoneyctrl',
      type:'get',
      dataType:'json',
      success:function( info ){
        // console.log(info);
        var htmlStr = template('productTpl', info);
        $('.mmm_product ul').html(htmlStr);
      }


    })

  }
//   菜单栏渲染
  $.ajax({
      url:'http://127.0.0.1:9090/api/getindexmenu',
      type:'get',
      dataType:'json',
      success:function( info ){
        //   console.log(info);
        var htmlStr = template('listTpl', info);
        $('.mmm_icon ul').html(htmlStr);
        }
    })
   $('.mmm_icon ul').on('click','li:nth-child(8)',function(e){
      $(this).nextAll().toggleClass('hide');
      $(this).nextAll().toggleClass('show');
      
   })
   
 })