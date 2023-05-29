<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>삭제</title>
</head>
<body>
<img src="../image/king.gif" width="100" height="100" 
	onclick="location.href='/'" style="cursor: pointer;">
<p>
	삭제할 아이디 입력 : <input type="text" id="searchId">
	<input type="button" id="searchIdBtn" value="검색">
</p>	
<div id="resultDiv"></div>
	
<script src="http://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="/js/delete.js">
</script>
</body>
</html>