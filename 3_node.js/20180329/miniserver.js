
// 1단계 : 필요한 모듈 import하기 
// 어플리케이션에 필요한 모듈을 불러올 땐 require 명령 사용

// 다음 코드는 HTTP 모듈을 불러오고 반환되는 HTTP 인스턴스를 http 변수에 저장
var http = require("http");


// 2단계: 서버 생성하기 
// 이번 단계에서는 http 인스턴스를 사용하여 http.createServer()메소드를 실행
// 그리고 listen메소드를 사용하여 포트 8081과 bind
// http.createServer()의 매개변수로는 request와 response를 매개변수로 가지고 있는 맣수를 넣어줌

// 다음 코드는 언제나 "Hello World"를 리턴하는 포트 8081의 웹서버 생성
http.createServer(function(request, response){
	/* 
		HTTP 헤더 전송
		HTTP Status: 200 : OK
		Content Type : text/plain
	*/

	response.writeHead(200, {'Content-Type' : 'text/plain'});

	/*
		ResPonse Body를 "Hello World"로 설정
	*/
	response.end("Hello World\n");
}).listen(8081);

console.log("Server runing at http://127.0.0.1:8081");
