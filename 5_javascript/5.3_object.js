

// object(p.21)
// 사이트 - https://jdub7138.blog.me/221023382803
// 3

// 3.1 
var c = {
	name: 'the c object',
	log: function() {
		this.name = 'updated c object';
		console.log(this);

		var setname = function(newname) {
			this.name = newname;
		}

		setname('updated again!the object');
		console.log(this);
	}
}




// 3.2
var c = {
	name: 'the c object',
	log: function() {
		var self = this;
		self.name = 'updated c object';

		console.log(self);

		var setname = function(newname) {
			self.name = newname;
		}

		setname('Updated again! the c object!');
		
		consoel.og(self);
	}
}