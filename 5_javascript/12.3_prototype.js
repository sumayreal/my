

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