

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