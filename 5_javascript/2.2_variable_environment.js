

// variable environment(p.7)
// 사이트 - http://alnova2.tistory.com/967
// 사이트 - https://muckycode.blogspot.com/2015/03/javascript-execution-context-scope.html
// 2

function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();