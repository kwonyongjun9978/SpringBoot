$('#searchIdBtn').click(function(){
  $('#resultDiv').empty();
  if($('#searchId').val() == '') {
     $('#resultDiv').text('아이디를 입력해주세요');
  }
  else {
     $.ajax({
        type: 'post',
        url: '/user/getUser',
        data: 'id=' + $('#searchId').val(),
        success: function(data){
           console.log(JSON.stringify(data));
           
           if(data == null) {
              $('#resultDiv').text('찾는자 하는 아이디가 없습니다.');
              $('#resultDiv').css('color', 'red').css('font-weight', 'bold');
           }
           else {
              if(confirm('삭제하시겠습니까?')) {
                 $.ajax({
                    type: 'post',
                    url: '/user/delete',
                    data: 'id=' + $('#searchId').val(),
                    success: function(){
                       alert('삭제하였습니다.');
                       location.href='/user/list';
                    },
                    error: function(err){
                       console.log(err);
                    }   
                 });
              }    
           }
        },
     });
  }//else
 }); //#searchIdBtn.click
