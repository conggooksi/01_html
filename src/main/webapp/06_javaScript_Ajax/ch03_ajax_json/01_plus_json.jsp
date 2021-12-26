<%@ page language="java" contentType="application/json"
   pageEncoding="UTF-8"%>
<%-- 01_plus_json.jsp--%>
<%
int p1=Integer.parseInt(request.getParameter("p1"));
int p2=Integer.parseInt(request.getParameter("p2"));
int re=p1+p2;
%>

<%-- JSON데이터는 꼭 괄호를 해준다--%>
{
  "p1":<%=p1 %>,
  "p2":<%=p2 %>,
  "re":<%=re %>
}
