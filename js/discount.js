$(function(){
    var url = new UrlSearch();
    var productid = url.productId;
    
    $.ajax({
        url:'http://127.0.0.1:9090/api/getdiscountproduct',
        type:'get',
        data:{
            productid :productid||1,
        },
        dataType:'json',
        success:function(info){
           console.log(info);
           var htmlstr = template('mmTpl',info);
           $('.mmm_main').html(htmlstr);
        }
    })
})