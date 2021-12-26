<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.net.*"%>

<%
request.setCharacterEncoding("utf-8");
String name=URLDecoder.decode(request.getParameter("name"),"utf-8");
%> 

<%=name%>님 안녕하세요 <%--여기가 Ajax가 받아서 클라이언트에 반열할 내용  --%>
