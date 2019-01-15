$(function(){
 var shopid = 0;
 var areaid  =0;
//   左侧京东按钮注册事件

 $('.mmm_nav').on('click','.jd',function(){
     $('.jd_hide').toggleClass('hide');
     $('.jd_hide').toggleClass('show');
     if($('.hb_hide').hasClass('show')){
        $('.hb_hide').toggleClass('hide');
        $('.hb_hide').toggleClass('show');
     }
    else if($('.qbjg_hide').hasClass('show')){
        $('.qbjg_hide').toggleClass('hide');
        $('.qbjg_hide').toggleClass('show');
    }

 })

//  华北按钮注册事件
$('.mmm_nav').on('click','.hb',function(){
    $('.hb_hide').toggleClass('hide');
    $('.hb_hide').toggleClass('show');
    if(  $('.jd_hide').hasClass('show')){
        $('.jd_hide').toggleClass('hide');
        $('.jd_hide').toggleClass('show');
     }
    else if($('.qbjg_hide').hasClass('show')){
        $('.qbjg_hide').toggleClass('hide');
        $('.qbjg_hide').toggleClass('show');
    }

})
//  全部价格按钮注册事件
$('.mmm_nav').on('click','.qbjg',function(){
    $('.qbjg_hide').toggleClass('hide');
    $('.qbjg_hide').toggleClass('show');
    if(  $('.jd_hide').hasClass('show')){
        $('.jd_hide').toggleClass('hide');
        $('.jd_hide').toggleClass('show');
     }
    else if($('.hb_hide').hasClass('show')){
        $('.hb_hide').toggleClass('hide');
        $('.hb_hide').toggleClass('show');
    }


})

//   渲染京东信息
  $.ajax({
     url:'http://127.0.0.1:9090/api/getgsshop',
     type:'get',
     dataType:'json',
     success:function(info){
         console.log(info);
         var htmlstr = template('jdTpl',info);
         $('.jd_hide ul').html(htmlstr);
     }
  })
// 华北
  $.ajax({
    url:'http://127.0.0.1:9090/api/getgsshoparea',
    type:'get',
    dataType:'json',
    success:function(info){
        console.log(info);
        var htmlstr = template('hbTpl',info);
        $('.hb_hide ul').html(htmlstr);
    }
 })
//  图片区域
function render(shopid,areaid){
 $.ajax({
    url:'http://127.0.0.1:9090/api/getgsproduct',
    type:'get',
    data:{
        shopid:shopid,
        areaid:areaid,
    },
    dataType:'json',
    success:function(info){
        console.log(info);
        var htmlstr = template('TpTpl',info);
        $('.mmm_last ul').html(htmlstr);
    }
 })
}
render(shopid,areaid);
 $('.mmm_main').on('click','.shopId',function(){
     var txt = $(this).text();
     $('.jd span').html(txt);
     $('.jd_hide').toggleClass('hide');
     $('.jd_hide').toggleClass('show');
     shopid = $(this).data('id'),
     $(this).find('b').removeClass('hide');
     $(this).parents().siblings().find('b').addClass('hide');
     
     render(shopid,areaid)

 })

 $('.mmm_main').on('click','.areaId',function(){
     var txt = $(this).text();
     var newtxt=txt.slice(0,2);
     $('.hb span').html(newtxt);
     $('.hb_hide').toggleClass('hide');
     $('.hb_hide').toggleClass('show');
     $(this).find('em').removeClass('hide');
     $(this).parents().siblings().find('em').addClass('hide');
     areaid =$(this).data('id');
     render(shopid,areaid)
 })
})