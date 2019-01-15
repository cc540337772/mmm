$(function(){
    var url = new UrlSearch();
    var couponid = url.couponId;
    console.log(couponid)
   $.ajax({
       url:'http://127.0.0.1:9090/api/getcouponproduct',
       type:'get',
       data:{
        couponid:couponid ||0,
       },
       success:function( info ){
            console.log(info);
            var htmlstr = template('mbTpl',info);
            $('.main').html(htmlstr);
       }
   })




})