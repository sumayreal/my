

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




// CLOSURE(생활코딩 참고)
// 사이트 - https://opentutorials.org/module/532/6544
// 2


function factory_movie(title){
	// title은 factory_movie가 생이 마감한 뒤에는 내부함수(get_title, set_title)로만 접근 가능 
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title());
alert(matrix.get_title());
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title());
alert(matrix.get_title());







// CLOSURE(p.29)
// 사이트 - https://opentutorials.org/module/532/6544
// 3


function bulidFunctions() {
	var arr = [];
	for(var i = 0; i < 3; i++) {
		var arr = [];
		for(var i = 0; i < 3; i++) {
			arr.push{
				function(){
					console.log(i);
				}
			}
		}
	}
	return arr;
}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();


// 3.1
function bulidFunctions() {
	var arr = [];
	for(var i = 0; i < 3; i++) {
		var arr = [];
		for(var i = 0; i < 3; i++) {
			let j=i;
			arr.push{
				function(){
					console.log(j);
				}
			}
		}
	}
	return arr;
}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();



// 3.2
function bulidFunctions2(){
	var arr = [];

	for(var i = 0; i < 3; i++){
		arr.push(
			function(j){
				return function(){
					console.log(j);
				}
			}(i)
		);
	}

	return arr;
}

fs[0]();
fs[1]();
fs[2]();






// function carrying(p.34)
// - creating a copy of a function but with some present parameters > very useful in mathmetical situations
// 99_concept.js 5번 보기 
// 1


function multiply(a, b) {
	return a*b;
}


var multipleByTwo = multiply.bind(this, 2);
console.log(multibleByTwo(4));
console.log(multibleByTwo(6));





// functional programming (p.35)
// 사이트 - 정의(https://mechurak.github.io/javascript/javascript-functional-programing/)
// 사이트 - 사용해야 하는 이유(https://sungjk.github.io/2017/07/17/fp.html)
// 1

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for(var i = 0; i < arr1.length; i++) {
	arr2.push(arr[i] * 2);
}

console.log(arr2);

// 1.1 
function maypForEach (arr, fn) ;
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
		);
	}
	return newArr;
}

var arr2 = mapForEach(arr1, function(item){
	return item*2;
})

// 1.2
var checkPastLimit = function(limiter, item){
	return item > limiter;
}


var arr4 = mapForEach(arr1, checkPastLimit.bind(this,1));
console.log(arr4);




// 1.3 
// checkPastLimit함수를 변형해서 인자 하나인 limiter만 받아서 1.2와 동일한 결과 내도록 만들어 보기 
// hint - bind 이용 










// prototype (p.37)
// 사이트 - http://shiren.github.io/2017-02-21-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EC%B2%B4%EC%9D%B8/
// 1

var person = {
	firstname: 'Default',
	lastname: 'Default',
	getFullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

var john = {
	firstname: 'John',
	lastname: 'Doe'
}

// don't do this ever
john.__proto__ = person;
console.log(john.getFullName());


var jane = {
	firstname: 'jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());











// function constructor (p.39)
// 사이트 - https://opentutorials.org/module/532/6553(생활코딩)
// 1

function Person(firstname, lastname){
	console.log('This function is invoked');
	console.log(this);
	this.firstname = 'John';
	this.lastname = 'Doe';
	console.log(this);
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jone);


// 생성된 john과 jane의 proto도 확인해보기 






// function constructor (p.40)
// 사이트 - https://opentutorials.org/module/532/6553(생활코딩)
// 2.1

function Person(firstname, lastname){
	console.log('This function is invoked');
	console.log(this);
	this.firstname = 'John';
	this.lastname = 'Doe';
	console.log(this);
}

Person.prototype.getFullName = function(){
	return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jone);

// 2.2
// new 키워드 빼고 실행해보기 

var john = Person('John', 'Doe');
console.log(john);

var jane = Person('Jane', 'Doe');
console.log(jone);






// function constructor (p.44)
// 사이트 - https://opentutorials.org/module/532/6570(생활코딩)
// 3

// ES6
class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet() {
		return 'Hi' + firstname;
	
	}
}


// proto 확인해보기 
var john = new Person('john', 'doe');

class InformalPerson extends Person {
	constructor(firstname, lastname) {
		super(firstname, lastname);
	}

	greet() {
		return 'Yo' + firstname;
	}
}

// proto 확인해보기 
var jane = new Person('jane', 'doe');