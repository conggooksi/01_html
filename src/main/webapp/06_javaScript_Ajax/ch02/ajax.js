var ajax=null;
function getXMLHttpRequest(){//ajax 객체얻기 함수

	if(window.ActiveXObject){//ie 브라우저 사용
		try{
			//최근 ie 버전
			return new ActiveXObject("Msxml2.XMLHTTP");//객체생성
		}catch(e1){
			try{
				//이전 ie 버전
				return new ActiveXObject("Microsoft.XMLHTTP");//객체생성
			}catch(e2){return null;}
		}//catch
	}else if(window.XMLHttpRequest){//ie이외의 브라우저(사파리,오페라,파이어폭스)
		return new XMLHttpRequest();
	}else{
		return null;
	}//else
	
}//getXMLHttpRequest() end
//--------------------------XMLHttpRequest
function helloToServer(){//html에서 호출할 함수
	var name=document.getElementById("name");//html의 id얻기
	var params="name="+encodeURIComponent(name.value);
	
	//get방식 요청
	var url="helloApp.jsp?"+params;//get방식
	ajax=getXMLHttpRequest();//ajax 객체 얻기 
	ajax.onreadystatechange=helloFromServer;//콜백함수
	ajax.open("GET",url,true);//요청 초기화 
	ajax.send(null);//get방식 요청 ( 서버로 요청)
	
	//open() 함수 : 요청 초기화 ( GET/POST선택, 접속 URL입력 )
	//send() 함수 : 웹 서버에 요청 전송 
    /*
     * open() 함수는 세개의 인자를 입력 받는데 , 그 의미는 다음과 같다
첫번째 인자  : HTTP메서드를 지정한다 , HTML의 form을 보면 
             method 속성에 get/post 값을 주는데, 첫번째 인자도 같은 값이 사용된다.
두번째 인자  : 접속할 URL(서버주소) 을 입력한다, 
     웹 브라우저 보안상 이유로 접속할 url은 현재 페이지와 같은 도메인에 있어야 한다.
세번째 인자  : 동기/비동기 방식을 지정한다. ( true : 비동기 )

     */
	
	/*
	//post방식
	var url="helloApp.jsp";//post방식
	ajax=getXMLHttpRequest();//ajax 객체 얻기 
	ajax.onreadystatechange=helloFromServer;//콜백함수
	ajax.open("post",url,true);// true 비 동기
	ajax.send(params);//post방식 요청 
	*/
}//helloToServer() end

// 콜백함수가 하는 일 , 서버에서 넘어온 데이터를 클라이언트에 반영
/*
콜백함수 : 서버에서 응답해준 자료를 클라이이언트에 반영하는 함수 
서버 응답 처리하기 : onreadystatechange 프로퍼티와 콜백함수 
Ajax객체.onreadystatechange = 콜백함수
*/
function helloFromServer(){
	if(ajax.readyState==4){// 4 : 모든데이터 도착 했는가
		if(ajax.status==200){// ok 이면 
			//alert("서버 응답 내용 :"+ajax.responseText);
		
			var result=document.getElementById("result");//id 를 얻어서 
			result.value=ajax.responseText;
		}//if
	}//if
}//helloFromServer() end
/*
XMLHttpRequest객체의 상태 : readyState 속성 
httpRequest.readyState == 0 ( Uninitialised ) => 객체만 생성되고 아직 초기화 되지 않은 상태(open 메서드가 호출되지 않음 )
httpRequest.readyState == 1 ( Loading ) => open 메서드가 호출되고 , 아직 send메서드가 호출되지 않은 상태 
httpRequest.readyState == 2 ( Loader )  => send 메서드가 호출되었지만 , status와 헤더는 도착하지 않은 상태 
httpRequest.readyState == 3 ( Interactive ) => 데이터 일부를 받은 상태 
httpRequest.readyState == 4 ( Complate )  => 데이터 전부를 받은 상태 , 완전한 데이터의 이용 가능 

//ajax.status==200
//200 - 요청 성공 = ok
//403 - 접근거부
//404 - 페이지 없음
//500 - 서버오류 
			
 */
 

