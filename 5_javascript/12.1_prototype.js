

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


