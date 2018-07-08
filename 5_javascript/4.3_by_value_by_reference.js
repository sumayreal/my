

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


