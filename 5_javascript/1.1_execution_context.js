

// execution context(p.2)
// 사이트 - https://jdub7138.blog.me/221023382803
// 1

b();
console.log(a);
var a = 'Hello World!';

function b() {
	console.log('Called b!');
}

