;(function(){

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getindexmenu",
        data:{},
        dataType:"json",
        success:function(info){
            // console.log(info);
            var htmlStr = template("navid",info);
            $(".mmm_category").html(htmlStr);
        }
    });
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        dataType:"json",
        success:function(info){
            // console.log(info);
            var htmlStr = template("discountid",info);
            $(".mmm_discount").html(htmlStr);
        }
    })

    $('.mmm_category').on('click','div:nth-child(8)',function(e){
        $(this).nextAll().toggleClass('hide');
        $(this).nextAll().toggleClass('show');
        e.preventDefault();

    })
})();