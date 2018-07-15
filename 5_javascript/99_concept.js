



/*

1. namespace (p.15)
- a container for variables and functions
> typically to keep variables and functions with the same name seperate space
> javascript doesn't have namespace but it can fake it!
> using object

*/
var english = {}; // container
var spanish = {}; // container

english.greet = 'Hello!';
spanish.greet = 'Hola!';
// they will not colliate


/*

2. json (p.16)
- javascript object notation 
- example
*/
{
	"firstname" : "Mary",
	"isAProgrammer" : true
}

/*
 - rule
 > property name should be quoted
 
 - feature
 > anything that is JSON valid is also valid in havascript object literal syntax
   but not all object literal syntax is called json 
 > JSON is more strict and requires quotes arround the names, doesn't let you 


- built-in function
> json.stringfy : json object > string
> json.parse : string > json object 


*/



/*
3. argument > spread operator (p.22)
- 사이트 : http://jpsierens.com/three-dots-javascript-spread-operator/
- argument
> the parameters pass to a function
> javascript gives you a keyword of the same name which contains them all
> a special keyword that javascrpit engines set up for you

*/

function greet(firstname, lastname, language) {
	console.log(arguments);
}

greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');



/*
4. function statement, function expression
- function statement 
> function is the first world wither on a new line, maybe after a semicolon;
*/
function greet(name) {
	console.log('Hello' + name);
}
/*
- function expression
> it isn't put into memory initially, but rather during execution and when it hits this line of code
*/
var greetFunc = function(name) {
	console.log('Hello' + name);
}




/*
5. CALL, APPLY, BIND
- 사이트 - http://www.kimsatgod.com/call-apply-bind-%EC%B0%A8%EC%9D%B4/
- bind -> copies object and bind this to given object 
- call -> unlike bind, it execute
- apply -> unline call, it should send parameter with list 
*/

// 5.1
var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function() {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
}

var logName = function(lang1, lang2){
	console.log('Logged : ' + this.getFullName());
	console.log('Arguments : ' + lang1 + ' ' + lang2);
}

logName(); 

// 5.2 - bind
var logPersonName = logName.bind(person);
logPersonName();
logPersonName('en');


// 5.3 - call
logName.call(person, 'er', 'es');
// it set this to person 


// 5.4 - apply
logName.apply(person, ['en', 'es']);





/*
6. typeof, instanceof (p.44)
- typeof : what type is 
- instanceof : check prototype 
*/

function Person(name) {
	this.name = name;
}

var e = new Person('Jane');
console.log(type of e);
console.log(e instanceof Person);






