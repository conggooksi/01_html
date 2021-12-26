<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    import="java.net.*"
    %>
<%--hello.jsp --%>
<%
request.setCharacterEncoding("UTF-8");
String name=URLDecoder.decode(request.getParameter("name"));
//<--URLDecoder가 java.net에 들어 있다. URL 한글 깨지는 거 땜시로
%>

<%--클라이언트로 응답 --%>
<%= name%>님 안녕하세요, 반갑습니다
