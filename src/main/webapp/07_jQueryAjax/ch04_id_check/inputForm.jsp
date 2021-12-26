<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%--inputForm.jsp --%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>inputForm.jsp</title>
<script src="//code.jquery.com/jquery-3.6.0.min.js"></script>

<script type="text/javascript">
$(function(){
	$('#btn').on('click',function(){
		if($('#id').val()==''){
			alert("id를 입력 하세요");
		}else{
			$.ajax({
				type:'POST',
				url:'confirmId.jsp',
				data:"id="+$('#id').val(),
				dataType:'JSON',
				success:function(data){
					//alert(data);
					//alert(data.check);
					if(data.check==1){
						alert("사용중인 id");
						$('#id').val('').focus();
					}else{
						alert('사용 가능한 id');
						$('#pw').focus();
					}
				}//success-end
			});
		}//else-end
	});	
});
</script>
</head>
<body>
  <form name="inputForm" action="">
    <table border="1">
      <tr>
        <td>ID</td>
        <td>
          <input type="text" name="id" id="id" size="20">
          <input type="button" id="btn" value="아이디 중복 체크">
        </td>
      </tr>
      
      <tr>
        <td>암호</td>
        <td><input type="password" name="pw" id="pw" size="12"></td>
      </tr>
      
    </table>
  </form>
</body>
</html>