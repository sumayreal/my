var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
	userid:String,
	type: Number,
	item: Number
});

module.exports = mongoose.model('todo', todoSchema);
