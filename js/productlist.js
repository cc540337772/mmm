 $(function(){
  //  var  Url =location.search;
  //  newUrl = Url.replace('?','');
  //  var obj = newUrl.split('=');
    var url = new UrlSearch();
    var categoryid = url.categoryid;
   
 
   var currentPage = 1;
  
   function render(page){
    $.ajax({
       url:'http://127.0.0.1:9090/api/getcategorybyid',
       data:'get',
       dataType:'json',
       data:{
        categoryid:categoryid,
       },
       success:function( info ){
        //  console.log(info);
        var htmlstr = template('bgTpl',info);
        $('.mmm_line').html(htmlstr);
        var id =$('.line_left').data('id');
          $.ajax({
            url:'http://127.0.0.1:9090/api/getproductlist',
            type:'get',
            dataType:'json',
            data:{
               categoryid :categoryid||0,
               pageid : currentPage,
            },
            success:function(info){
                console.log(info);
                var htmlStr = template('listTpl',info);
                $('.mmm_dh ul').html(htmlStr);
                totalpage = Math.ceil(info.totalCount / info.pagesize);
                var hstr = template('selectTmp',{
                    pageid:currentPage,
                    pages: totalpage
                  });
                $('.select').html(hstr);
            } 
            
        })

       }

   })

  }
  render();
  $('.next').on('click', function () {    
    if (currentPage >= totalpage) {
      return;
    }
    currentPage++
    render()
  })

  $('.previous').on('click',function(){    
    if(currentPage==1){
      return;
    }
    currentPage--;
    render()
  })


  $('.select').on('change',function(){
    currentPage= $(this).val()
    render()
  })

 })