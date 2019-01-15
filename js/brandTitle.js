$(function(){
   
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrandtitle',
        tpye:'get',
        dataType:'json',
        success:function( info ){
            console.log(info);
            var htmlstr = template('firstTpl', info);
            $('.di').html(htmlstr);
        }
    })






    $('.di').on('click','.ip',function(){
    
       $(this).find('.down').toggleClass('hide');
       $('.hide_ul').toggleClass('hide');
    })
})