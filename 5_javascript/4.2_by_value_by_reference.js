

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



