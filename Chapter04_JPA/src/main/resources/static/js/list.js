//목록
$(function(){
	$.ajax({
		type: 'post',
		url: '/user/getUserList',
		success: function(data){
			console.log(JSON.stringify(data));

						/*
			$.each(data, function(index, item){
			var html = `<tr>` +
						`<td align="center">${item.name}</td>` +
						`<td align="center">${item.id}</td>` +
						`<td align="center">${item.pwd}</td>` +
					   `</tr>`;
			$('#userListTable').append(html);		   	
			});
			*/
			
			
			for(var i = 0; i < data.length; i++) {
				var html = `<tr> +
						<td align="center">${data[i].name}</td> 
						<td align="center">${data[i].id}</td> 
						<td align="center">${data[i].pwd}</td> 
					   </tr>`;
				$('#userListTable').append(html);		   
			}
		},
	   	error: function(err){
	   		console.log(err);
	   	}
	}); //ajax
});

//검색
$('#searchBtn').click(function(){
	if($('#keyword').val() == '')
		alert('검색어를 입력하세요')
	else
		$.ajax({
			type: 'post',
			url: '/user/search',
			data: $('#searchForm').serialize(),
			dataType: 'json',
			success: function(data){
				console.log(JSON.stringify(data));
				
				$('#userListTable tr:gt(0)').remove();
				
				for(var i = 0; i < data.length; i++) {
				var html = `<tr> +
						<td align="center">${data[i].name}</td> 
						<td align="center">${data[i].id}</td> 
						<td align="center">${data[i].pwd}</td> 
					   </tr>`;
				$('#userListTable').append(html);		   
			}
			},
			error: function(err){
				console.log(err);
			}
		});	
});