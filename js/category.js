
$(function(){

    $(function () {
        $.ajax({
          type: 'get',
          url: 'http://127.0.0.1:9090/api/getcategorytitle',
          dataType: 'json',
          success: function (info) {
            var htmlStr = template('titlt_tmp', info);
            $('.category_title').html(htmlStr);
            $('.category_title').on('click', 'a', function () {
              var content = $(this).next();
              var id = $(this).data('id');
              // alert(id);
              content.toggleClass("displaynone"); 
              $.ajax({
                type: 'get',
                url: 'http://127.0.0.1:9090/api/getcategory',
                data: {
                  titleid: id
                },
                dataType: 'json',
                success: function (info) {
                  console.log(info);  
                var htmlstr = template('cate_tmp',info);
                content.html(htmlstr);
                }
              })
            })
          }
        })
      
      
      })
})