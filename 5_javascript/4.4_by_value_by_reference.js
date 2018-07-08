

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


