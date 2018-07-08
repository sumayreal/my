

// execution context(p.2)
// 사이트 - https://jdub7138.blog.me/221023382803
// 1

b();
console.log(a);
var a = 'Hello World!';

function b() {
	console.log('Called b!');
}



// execution context(p.2)
// 사이트 - https://jdub7138.blog.me/221023382803
// 2

b();
console.log(a);

function b(){
	console.log('Called b');
}



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






// asynchronous(p.8)
// 사이트 - https://jdub7138.blog.me/221023382803
// 1

// long running function 
function waitThreeSeconds() {
	var ms = 3000 + new Date().getTime();
	
	while(new Date() < ms)
	{}

	console.log('finished function');
}

function clickHandler() {
	console.log('click event!');
}


// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');


// waitThreeSeconds 실행 중에 클릭 이벤트 발생 시키면 어떻게 될까?






// by_value, by_reference(p.19)
// 사이트 - http://webigotr.tistory.com/63
// 1

// by value(primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);








// by_value, by_reference(p.19)
// 사이트 - http://webigotr.tistory.com/63
// 2

// by reference(all objects(including functions))
var c = {greeting : 'hi'};
var d;

d = c;

console.log(c);
console.log(d);

c.greeting = 'hello';

console.log(c);
console.log(d);









// by_value, by_reference(p.19)
// 사이트 - http://webigotr.tistory.com/63
// 3

// by reference(even as parameters)
function changeGreeting(obj) {
	obj.greting = 'Hola';
}

var c = {greeting : 'hi'};
var d;

d = c;

console.log(c);
console.log(d);


changeGreeting(d);

console.log(c);
console.log(d);




// by_value, by_reference(p.19)
// 사이트 - http://webigotr.tistory.com/63
// 4

// equal operator sets up new memory space
var c = {greeting : 'hi'};
var d;

d = c;

console.log(c);
console.log(d);

c = {greeting : 'handy'};

console.log(c);
console.log(d);




// object(p.21)
// 사이트 - https://jdub7138.blog.me/221023382803
// 1

// window object
function a() {
	console.log(this);
	this.newvariable = 'Hello';
}

var b = function() {
	console.log(this);
}

a();
console.log(newvariable);
b();



// object(p.21)
// 사이트 - https://jdub7138.blog.me/221023382803
// 2

// 2.1
var c = {
	name : 'the c object',
	log: function() {
		console.log(this);
	}
}

c.log();




// 2.2
var c = {
	name:  'the c object',
	log: function() {
		this.name = 'updated c object';
		console.log(this);
	}
}






// object(p.21)
// 사이트 - https://jdub7138.blog.me/221023382803
// 3

// 3.1 
var c = {
	name: 'the c object',
	log: function() {
		this.name = 'updated c object';
		console.log(this);

		var setname = function(newname) {
			this.name = newname;
		}

		setname('updated again!the object');
		console.log(this);
	}
}




// 3.2
var c = {
	name: 'the c object',
	log: function() {
		var self = this;
		self.name = 'updated c object';

		console.log(self);

		var setname = function(newname) {
			self.name = newname;
		}

		setname('Updated again! the c object!');
		
		consoel.og(self);
	}
}

// function overloading(p.23)
// 사이트 - http://openbetweensecret.tistory.com/88
// 1

function greet(firstname, lastname, language) {
	language = language || 'en'; // default 설정 

	if(language === 'en')
		console.log('Hello');

	if(language === 'es')
		console.log('Hola');
}

// 1.1
greet('John', 'Doe', 'en');
greet('John', 'Doe', 'es');


// 1.2
function greetEnglish(firstname, lastname)
	greet(firstname, lastname, 'en');

function greetSpanish(first, lastname)
	greet(firstname, lastname, 'es');



// function overloading(p.31)
// 사이트 - http://openbetweensecret.tistory.com/88
// 2 

function makeGreeting(language) {
	return function(firstname, lastname) {
		if(langeage === 'en') {
			console.log('Hello' + firstname + ' ' + lastname);
		}
		if(language === 'es') {
			console.log('Hello' + firstname + ' ' + lastname);
		}
	}
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');


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



