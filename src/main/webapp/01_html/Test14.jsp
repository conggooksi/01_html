<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Test14.jsp</title>
</head>
<body>
<%
String id=request.getParameter("id");//클라이언트가 넘겨준 데이터 받기
String pw=request.getParameter("pw");
String name=request.getParameter("name");
String hp1=request.getParameter("hp1");
String hp2=request.getParameter("hp2");
String hp3=request.getParameter("hp3");
hp1=hp1+hp2+hp3;
String gender=request.getParameter("gender");
String hobbys[]=request.getParameterValues("hobby");
String content=request.getParameter("content");
//DB작업 <--을 사실 해야 되는데 지금은 html 공부하고 있으니깐 놔두고
%>
<h2>당신이 입력한 정보 입니다(클라이언트로 응답)</h2>
ID:<%=id%><br>
암호:<%=pw%><br>
이름:<%=name%><br>
전화:<%=hp1%><br>
성별:<%=gender%><br>
취미:<%
for(int i=0; i<hobbys.length; i++){
	if(hobbys.length-1==i){
		out.println(hobbys[i]);
	}else{
		out.println(hobbys[i]+",&nbsp");
	}
}
%>

<br>
소개:<pre><%=content%></pre>
<pre>
입력한 그대로
출력합니다
한번
볼까요?
정말이거든요 <!-- <br>을 쳐야 줄바꿈이 있는데 pre태그에서는 엔터친거도 다 나온다 -->
</pre>

</body>
</html>