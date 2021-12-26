/**
 * ajax.js
 */

var ajax=null;//변수

function getAjax(){//ajax 객체 구하기
	if(window.ActiveXObject){//ie브라우저 사용
		try{
			//최근 ie 일 때 객체 생성
			return new ActiveXObject("Msxml2.XMLHTTP");//객체 생성
			
		}catch(e1){
			try{
				//이전 ie버전
				return new ActiveXObject("Microsoft.XMLHTTP");//객체 생성
				
			}catch(e2){
				return null;
			}//catch(e2)-end
			
		}//chatch(e1)-end
	}else if(window.XMLHttpRequest){//ie 이외의 브라우저(사파리,오페라,크롬,파이어폭스 등등)
		
		return new XMLHttpRequest();//<--생성해서 던지니깐 생성자로 해줘야 된다
	
	}else{
		return null;
	}
	
}//getAjax()-end

function helloToServer(){//html에서 호출할 함수
	ajax=getAjax();//ajax 객체 얻기
		
	var name=document.getElementById("name");
	var params="name="+encodeURIComponent(name.value);
	//var params="name=킹스맨"
	
	//get방식 요청
	var url="hello.jsp?"+params;
	
	ajax.onreadystatechange=helloFromServer;//콜백함수
	ajax.open("GET",url,true);//요청 초기화 <--true가 비동기하겠다는 거
	ajax.send(null);//서버로 요청 전송
}//helloToServer()-end

//콜백함수
function helloFromServer(){
	if(ajax.readyState==4){//서버로부터 모든 데이터가 도착했으면, 클라이언트 화면에 반영
		if(ajax.status==200){//OK이면
			alert("서버 응답 내용 :"+ajax.responseText);
			var result=document.getElementById("result");//id를 얻어서
			result.value=ajax.responseText;
		}
	}//if-end
}//helloFromServer()-end

//ajax.status==200
//200 - 요청 성공 = ok
//403 - 접근 거부
//404 - 페이지 없음
//500 - 서버오류