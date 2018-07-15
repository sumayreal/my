

// CLOSURE
// 사이트 - https://opentutorials.org/module/532/6544
// 3


function greet(whattosay) {
	return function(name) {
		console.log(whattosay + ' ' + name); 
	}
}


var sayHi = greet('Hi');
sayHi('Tony');
