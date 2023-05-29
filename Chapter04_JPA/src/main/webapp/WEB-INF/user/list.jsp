<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>목록</title>
</head>
<body>
<img src="http://localhost:8080/image/king.gif" width="100" height="100" 
	onclick="location.href='/'" style="cursor: pointer;">
<table id="userListTable" border="1" frame="hsides" rulse="rows">
	<tr>
		<th width="150">이름</th>
		<th width="150">아이디</th>
		<th width="150">비밀번호</th>
	</tr>
	
	<!-- 동적 처리 -->	
</table>
<br><br>

<div style="width: 450px; text-align: center;">
	<form id="searchForm">
		<select id="searchOption" name="searchOption">
			<option value="name">이름</option>
			<option value="id">아이디</option>
		</select>
		<input type="text" id="keyword" name="keyword">
		<input type="button" id="searchBtn" value="검색">
	</form>
</div>
<script src="http://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="../js/list.js">
</script>
</body>
</html>