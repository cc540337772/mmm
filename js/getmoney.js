$(function(){
    var currentPage = 1;
    function render(){
  $.ajax({
    url:' http://127.0.0.1:9090/api/getmoneyctrl',
    type:'get',
    dataType:'json',
    data:{
        pageid:currentPage,
    },
    success:function( info ){
      console.log(info);
      var htmlStr = template('productTpl', info);
      $('.mmm_product ul').html(htmlStr);
      totalpage = Math.ceil(info.totalCount / info.pagesize);
      var hstr = template('selectTmp',{
        pageid:currentPage,
        pages: totalpage
      });
    $('.select').html(hstr);
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