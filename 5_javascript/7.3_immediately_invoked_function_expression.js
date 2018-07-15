

// IIFE(p.27)
// 사이트 - http://boycoding.tistory.com/46
// 사이트 - http://chanlee.github.io/2014/01/11/understand-javascript-iife/
//    함수 선언(declaration)은 미리 자바 스크립트의 실행 컨텍스트(execution context)에 로딩 되어 있으므로 언제든지 호출할 수 있지만
//        표현식(Expression)은 인터프리터가 해당 라인에 도달 하였을때만 실행이 됩니다.

// 3

var greeting = 'Hola';

(function(name) {
	var greeting = 'Hello';
	console.log(greeting + ' ' + name); 
})('John');

