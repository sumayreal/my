

// variable environment(p.7)
// 사이트 - http://alnova2.tistory.com/967
// 사이트 - https://muckycode.blogspot.com/2015/03/javascript-execution-context-scope.html
// 1

function b() {
	var myVar;
	console.log(myVar);
}

function a() {
	var myVar = 2;
	console.log(myVar);
	b();
	console.log(myVar);
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);