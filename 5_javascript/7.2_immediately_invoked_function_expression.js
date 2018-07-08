

// IIFE(p.26)
// 사이트 - https://jdub7138.blog.me/221023382803
// 2


// 2.1
function(name) {
	return 'Hello' + name;
}


// 2.2
var fisrtname = 'John';

(function(name) {
	var greeting = 'Inside IIFE: Hello';
	console.log(greeting + name);
})(firstname);

// 많은 프레임워크에서 사용 - confuse the syntax parser
// underscore.js - https://underscorejs.org/docs/underscore.html
