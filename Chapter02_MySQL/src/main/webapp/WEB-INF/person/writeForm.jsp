<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>등록</title>
</head>
<body>
<form id="writeForm">
<table border="1" cellpadding="5" cellspacing="0">
	<tr>
		<th>이름</th>
		<td><input type="text" name="name" id="name"></td>
	</tr>
	
	<tr>
		<th>나이</th>
		<td><input type="text" name="age" id="age"></td>
	</tr>
	
	<tr>
		<td colspan="2">
			<img id="showImg" width="100" height="100">
			<img id="camera" src="/img/camera.png" width="25" height="25" alt="카메라">
			<input type="file" name="img" id="img" style="visibility: hidden;">
		</td>
	</tr>
	
	<tr>
		<td colspan="2" align="center">
			<input type="button" value="등록" id="writeBtn">
			<input type="reset" value="취소">
		</td>
	</tr>
</table>
</form>
<script src="http://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="/js/write.js"></script>
<script>
$('#camera').click(function(){
	//강제 이벤트 발생
	$('#img').trigger('click');
});

<!-- 업로드 버튼을 누르기 전에 카메라 아이콘을 통해서 선택한 이미지가 맞는지 확인하기 위해서 이미지를 보이게 한다. -->
$('#img').change(function(){
	readURL(this);
});

function readURL(input){
	var reader = new FileReader();
	
	reader.onload = function(e){
		$('#showImg').attr('src', e.target.result); //e.target - 이벤트가 발생하는 요소를 반환해준다.
	}
	
	reader.readAsDataURL(input.files[0]);
}

</script>
</body>
</html>