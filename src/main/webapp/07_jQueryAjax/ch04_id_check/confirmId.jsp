<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%--confirmId.jsp --%>

<%
//입력폼에서 ajax로 보내준 데이터 받기
String id=request.getParameter("id");
//int check=dao.idCheck();//메서드 호출
int check=-1;//1 사용중인 ID, -1 사용 가능 ID
%>
{
"check":<%= check%>
}