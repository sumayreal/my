

// IIFE(p.25)
// 사이트 - https://jdub7138.blog.me/221023382803
// 1

// 1.1 
// return example > return function
var greeting = function(name) {
	return 'Hello ' + name;
};

console.log(greeting);


// 1.2
// return example > return value
var greeting = function(name) {
	return 'Hello ' + name;
};

console.log(greeting('John'));


// 1.3
// return example > IIFE
var greeting = function(name) {
	return 'Hello' + name;
}();

console.log(greeting);


// 1.4
// error example
var greeting = function(name) {
	return 'Hello' + name;
}('John');

console.log(greeting());

