$(function(){
	$('#updateDiv').hide();
	
	$('#searchIdBtn').click(function(){
		$('#resultDiv').empty();
		
		$.ajax({
			type: 'post',
			url: '/user/getUser',
			data: 'id=' + $('#searchId').val(),
			success: function(data){
				//Optional<UserDTO>값이 있으면 JSON으로 오고 없으면 null로 온다.
				console.log(JSON.stringify(data));
				if(data == null){
					$('#updateDiv').hide();
					$('#resultDiv').text('찾고자 하는 아이디가 없습니다.');
					$('#resultDiv').css('color', 'red');
					$('#resultDiv').css('font-weight', 'bold');
				}else {
					$('#updateDiv').show();
					
					$('#name').val(data.name);
					$('#id').val(data.id);
				}
			},
			error: function(err){
				console.log(err);
			}
		});
	});
});

//서버에서 받아오는 데이터 타입은 'text', 'html', 'xml', 'json' 형식을 지정할 수 있다
//getUser에서 id를 찾으면 제대로 JSON으로 오지만 
//id가 없으면 JSON으로 오지를 못한다.
//그래서 dataType를 생략해야 한다. (dataType를 생략하면 자료에 맞게 자동으로 형식이 지정된다.)


//수정버튼
$('#updateBtn').click(function(){
	$('#nameDiv').empty();
	$('#pwdDiv').empty();
	
	if($('#name').val() == ''){
		$('#nameDiv').text('이름 입력');
		$('#nameDiv').css('color', 'red');
		$('#nameDiv').css('font-weight', 'bold');
		$('#name').focus();
	}else if($('#pwd').val() == ''){
		$('#pwdDiv').text('비밀번호 입력');
		$('#pwdDiv').css('color', 'red');
		$('#pwdDiv').css('font-weight', 'bold');
		$('#pwd').focus();
	}else{
		$.ajax({
			type: 'post',
			url: '/user/write',
			data: $('#updateForm').serialize(),
			success: function(){
				alert("수정 완료");
				location.href="/user/list"
			},
			error: function(err){
			console.log(err);
			}
		});
	}
});

//취소버튼
$('#resetBtn').click(function(){
	//강제 이벤트 발생
	$('#searchIdBtn').trigger('click');
});