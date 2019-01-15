 $(function(){

   var id ;

    $.ajax({
       url:'http://127.0.0.1:9090/api/getbaicaijiatitle' ,
       type:'get',
       dataType:'json',
       success:function(info){
        //    console.log(info);
        var htmlstr = template('titleTpl',info);
        $('.dtxr').html(htmlstr);
        new IScroll(".mmm_nav", {
            scrollX: true,
            scrollY: false
          })
       }
   

    })

   $('.dtxr').on('click','li',function(){
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
        id = $(this).data('id');
        // console.log(id);
        render(id);
   })

   function render(id){
       $.ajax({
        url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
        type:'get',
        data:{
            titleid:id||0,
        },
        dataType:'json',
        success:function( info ){
        //   console.log(info)
        var htmlstr = template('tpTpl',info);
        $('.mmm_tp ul').html(htmlstr);

     

        }
        
       })
      
   }
   render();

 })