

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
