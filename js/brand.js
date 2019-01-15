



$(function(){
    var Url = new UrlSearch();
    var brandtitleid = Url.brandtitleid;
    var categoryid = Url.categoryid;
    var productid =categoryid;
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrand',
        type:'get',
        data:{
            brandtitleid:brandtitleid||0
        },
        success:function(info){
            console.log(info);
            var str = info.result[0].brandName;
            var newstr = str.substring(str.length-4);
            var htmlstr = template('threeTpl', {list:newstr});
            $('.three').html(htmlstr);
            var str = template('fourTpl',info);
            $('.four ul').html(str);
            $('.five').html(htmlstr)
        }
    })

    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrandproductlist',
        type:'get',
        data:{
            brandtitleid:brandtitleid||0,
            pagesize:4,
        },
        success:function(info){
            //  console.log(info);
             var htmlstr = template('sixTpl',info);
             $('.six ul').html(htmlstr);
        }
    })
    $.ajax({
        url:'http://127.0.0.1:9090/api/getproductcom',
        type:'get',
        data:{
            productid :productid||0,
        },
        success:function(info){
             console.log(info);
             var htmlstr = template('eightTpl',info);
             $('.eight ul').html(htmlstr);
        }
    })
  
})