

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

