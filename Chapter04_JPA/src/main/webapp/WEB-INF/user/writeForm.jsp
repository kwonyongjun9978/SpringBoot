<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>등록</title>
<style>
#writeForm div{
	color: red;
	font-size: 8pt;
	font-weight: bold;
}
</style>
</head>
<body>
<img src="../image/king.gif" width="100" height="100" 
	onclick="location.href='/'" style="cursor: pointer;">
<form id="writeForm">
	<table border="1">
		<tr>
			<th>이름</th>
			<td><input type="text" name="name"></td>
		</tr>
		
		<tr>
			<th>아이디</th>
			<td>
				<input type="text" name="id" id="id">
				<div id="idDiv"></div>
			</td>
		</tr>
		
		<tr>
			<th>비밀번호</th>
			<td><input type="password" name="pwd"></td>
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
<script src="../js/write.js">
</script>
</body>
</html>