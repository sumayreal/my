

// object(p.21)
// 사이트 - https://jdub7138.blog.me/221023382803
// 2

// 2.1
var c = {
	name : 'the c object',
	log: function() {
		console.log(this);
	}
}

c.log();




// 2.2
var c = {
	name:  'the c object',
	log: function() {
		this.name = 'updated c object';
		console.log(this);
	}
}




